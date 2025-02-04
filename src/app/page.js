// src/app/page.js
'use client';

import { useSession, signOut } from 'next-auth/react';

const Home = () => {
  const { data: session } = useSession();
  console.log(session);
  return (
    <div>
      <h1>Welcome to My App</h1>
      {session ? (
        <div>
          <p>Welcome, {session.user.name}</p>
          <button onClick={() => signOut()}>Sign Out</button>
        </div>
      ) : (
        <a href="/auth/signin">Sign In</a>
      )}
    </div>
  );
};

export default Home;