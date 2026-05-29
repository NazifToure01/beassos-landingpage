import { NextRequest, NextResponse } from 'next/server';
import clientPromise from '@/lib/mongodb';

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export async function POST(req: NextRequest) {
  const body = await req.json().catch(() => null);

  if (!body?.email || typeof body.email !== 'string') {
    return NextResponse.json({ error: 'Email requis.' }, { status: 400 });
  }

  const email = body.email.trim().toLowerCase();

  if (!EMAIL_REGEX.test(email)) {
    return NextResponse.json({ error: 'Email invalide.' }, { status: 400 });
  }

  try {
    const client = await clientPromise();
    const db = client.db('beassoslandingpage');
    const collection = db.collection('waitlist');

    const existing = await collection.findOne({ email });
    if (existing) {
      return NextResponse.json({ message: 'Déjà inscrit !' }, { status: 200 });
    }

    await collection.insertOne({ email, createdAt: new Date() });

    return NextResponse.json({ message: 'Inscription réussie !' }, { status: 201 });
  } catch {
    return NextResponse.json({ error: 'Erreur serveur, réessayez.' }, { status: 500 });
  }
}
