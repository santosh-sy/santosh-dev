import { useState } from 'react';
import { navItems, profile } from '../data';
import { useActiveSection, useScrolled } from '../hooks';

const ids = navItems.map((n) => n.id);

export function Nav() {
  const [open, setOpen] = useState(false);
  const scrolled = useScrolled();
  const active = useActiveSection(ids);

  return (
    <header className={`nav ${scrolled || open ? 'scrolled' : ''}`}>
      <div className="nav-inner">
        <a className="brand" href="#top" onClick={() => setOpen(false)}>
          {profile.name}
        </a>

        <nav className={`nav-links ${open ? 'open' : ''}`} aria-label="Primary">
          {navItems.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              className={active === item.id ? 'active' : ''}
              aria-current={active === item.id ? 'true' : undefined}
              onClick={() => setOpen(false)}
            >
              {item.label}
            </a>
          ))}
        </nav>

        <button
          type="button"
          className={`menu-btn ${open ? 'open' : ''}`}
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          <span />
          <span />
        </button>
      </div>
    </header>
  );
}
