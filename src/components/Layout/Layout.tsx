import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { AppBar } from 'components/AppBar/AppBar';
import { Box } from 'components/Box/Box';
import { Loader } from 'components/Loader/Loader';

export const Layout = () => {
  return (
    <>
      <AppBar />
      <Box as="main" bg="mainBackgroundColor">
        <Suspense fallback={<Loader />}>
          <Outlet />
        </Suspense>
      </Box>
    </>
  );
};
