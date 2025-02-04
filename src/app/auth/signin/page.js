'use client';

import { signIn } from 'next-auth/react';
import { useSearchParams } from 'next/navigation';


const SignIn = () => {
  const searchParams = useSearchParams();
  const error = searchParams.get('error');

  return (
    <div>
      <h1>Sign In</h1>
      {error && <p style={{ color: 'red' }}>Login failed. Please try again.</p>}
      <button onClick={() => signIn('google', { callbackUrl: process.env.NEXTAUTH_URL })}>Sign in with Google</button>
      <button onClick={() => signIn('facebook', { callbackUrl: process.env.NEXTAUTH_URL })}>Sign in with FB</button>
    </div>
  );
};

export default SignIn;