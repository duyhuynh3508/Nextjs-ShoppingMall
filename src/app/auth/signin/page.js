'use client';

import { signIn } from "next-auth/react";

const SignIn = () => {
  return (
    <div>
      <h1>Sign In</h1>
      <button onClick={() => signIn("google", { callbackUrl: "/" })}>Sign in with Google</button>
      <button onClick={() => signIn("facebook", { callbackUrl: "/" })}>Sign in with Facebook</button>
    </div>
  );
};

export default SignIn;