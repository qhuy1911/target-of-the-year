import React from 'react';
import { useRouteError } from 'react-router-dom';

const ErrorPage: React.FC = () => {
  const error = useRouteError();
  console.error(error);

  return (
    <>
      <h1>Error Page</h1>
      <p>Sorry, an unexpected has occurred.</p>
    </>
  );
};

export default ErrorPage;
