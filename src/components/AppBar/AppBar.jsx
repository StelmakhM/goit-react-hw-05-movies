import { Link } from 'react-router-dom';

export default function AppBar() {
  const navItems = [
    { href: '/', text: 'home' },
    { href: '/movies', text: 'movies' },
  ];
  return (
    <>
      <nav>
        {navItems.map(({ href, text }) => (
          <Link key={href} to={href}>
            {text}
          </Link>
        ))}
      </nav>
    </>
  );
}
