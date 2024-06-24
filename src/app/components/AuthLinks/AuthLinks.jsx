import React from 'react';
import style from './authLinks.module.css';
import Link from 'next/link';

const AuthLinks = () => {
  const status = 'not_authenticated'; // Use appropriate value for the status

  return (
    <>
      {status === 'not_authenticated' ? (
        <Link href="/login">Login</Link>
      ) : (
        <>
          <Link href="/write">Write</Link>
          <span>Logout</span>
        </>
      )}
    </>
  );
};

export default AuthLinks;
