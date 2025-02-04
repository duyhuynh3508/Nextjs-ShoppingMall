'use client';

import { signIn } from 'next-auth/react';

const SignIn = () => {

  return (
    <div>
      <h1>Sign In</h1>
      <button onClick={() => signIn('google', { callbackUrl: process.env.NEXTAUTH_URL })}>Sign in with Google</button>
      <button onClick={() => signIn('facebook', { callbackUrl: process.env.NEXTAUTH_URL })}>Sign in with FB</button>
    </div>
  );
};

export default SignIn;