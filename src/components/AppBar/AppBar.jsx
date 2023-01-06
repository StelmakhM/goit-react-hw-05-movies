import { Navigation, StyledLink } from './AppBar.styled';

export default function AppBar() {
  const navItems = [
    { href: '/', text: 'home' },
    { href: '/movies', text: 'movies' },
  ];

  return (
    <>
      <Navigation>
        {navItems.map(({ href, text }) => (
          <StyledLink key={href} to={href}>
            {text}
          </StyledLink>
        ))}
      </Navigation>
    </>
  );
}
