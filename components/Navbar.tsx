'use client';

import { useState } from 'react';
import Image from 'next/image';
import { IoMenuOutline, IoCloseOutline } from 'react-icons/io5';

type NavLink = {
  label: string;
  href: string;
};

const NAV_LINKS: NavLink[] = [
  { label: 'Fonctionnalités', href: '#fonctionnalites' },
  { label: 'Comment ça marche', href: '#comment-a-marche' },
  { label: 'Associations', href: '#associations' },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  return (
    <nav
      aria-label="Navigation principale"
      className="sticky top-0 z-50"
      style={{
        background: 'rgba(243,242,239,0.88)',
        backdropFilter: 'blur(14px)',
        borderBottom: '1px solid var(--color-border)',
      }}
    >
      <div style={{ maxWidth: 1160, margin: '0 auto', padding: '0 24px' }}>
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Image
            src="/logo_complete.png"
            alt="BeAssos"
            width={130}
            height={32}
            style={{ objectFit: 'contain' }}
          />

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-8">
            {NAV_LINKS.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="nav-link text-sm font-medium"
                style={{ color: 'var(--color-text-secondary)', textDecoration: 'none' }}
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Desktop CTA */}
          <a
            href="#download"
            className="store-btn hidden sm:inline-flex text-white"
            style={{
              background: 'var(--color-primary)',
              padding: '10px 20px',
              fontSize: 14,
            }}
          >
            Télécharger l'app
          </a>

          {/* Hamburger — mobile only */}
          <button
            className="sm:hidden"
            style={{ color: 'var(--color-text-secondary)', background: 'none', border: 'none', cursor: 'pointer', padding: 4, lineHeight: 0 }}
            onClick={() => setMenuOpen((prev) => !prev)}
            aria-label="Ouvrir le menu"
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
          >
            {menuOpen ? (
              <IoCloseOutline size={26} />
            ) : (
              <IoMenuOutline size={26} />
            )}
          </button>
        </div>
      </div>

      {/* Mobile menu panel */}
      {menuOpen && (
        <div
          id="mobile-menu"
          role="navigation"
          aria-label="Navigation mobile"
          className="sm:hidden"
          style={{
            background: 'var(--color-surface)',
            borderTop: '1px solid var(--color-border)',
            boxShadow: '0 8px 32px rgba(0,0,0,0.10)',
            position: 'absolute',
            left: 0,
            right: 0,
            zIndex: 40,
          }}
        >
          {/* Close button (top-right) */}
          <div className="flex justify-end" style={{ padding: '12px 24px 0' }}>
            <button
              onClick={closeMenu}
              aria-label="Fermer le menu"
              style={{ background: 'none', border: 'none', cursor: 'pointer', color: 'var(--color-text-secondary)', padding: 4, lineHeight: 0 }}
            >
              <IoCloseOutline size={24} />
            </button>
          </div>

          {/* Nav links */}
          <ul
            style={{ listStyle: 'none', margin: 0, padding: '8px 0 16px' }}
          >
            {NAV_LINKS.map((link) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  onClick={closeMenu}
                  className="text-base font-medium"
                  style={{
                    display: 'block',
                    padding: '14px 24px',
                    color: 'var(--color-text-primary)',
                    textDecoration: 'none',
                    borderBottom: '1px solid var(--color-border)',
                  }}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          {/* CTA button */}
          <div style={{ padding: '16px 24px 24px' }}>
            <a
              href="#download"
              onClick={closeMenu}
              className="store-btn text-white"
              style={{
                background: 'var(--color-primary)',
                display: 'flex',
                justifyContent: 'center',
                width: '100%',
                fontSize: 15,
              }}
            >
              Télécharger l'app
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
