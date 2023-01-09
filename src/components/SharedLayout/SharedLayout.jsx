import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { Container } from './SharedLayout.styled';
import Spinner from '../../utils/Spinner/Spinner';
import AppBar from '../AppBar/AppBar';

export default function SharedLayout() {
  return (
    <Container>
      <AppBar />
      <Suspense fallback={<Spinner />}>
        <Outlet />
      </Suspense>
    </Container>
  );
}
