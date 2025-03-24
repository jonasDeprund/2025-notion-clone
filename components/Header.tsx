'use client';
import {
  SignedIn,
  SignedOut,
  SignInButton,
  UserButton,
} from '@clerk/clerk-react';
import { useUser } from '@clerk/nextjs';
import { Heading1 } from 'lucide-react';
import React from 'react';

function Header() {
  const { user } = useUser();
  return (
    <div>
      {user && (
        <h1>
          {user?.firstName}
          {`'s`} Space
        </h1>
      )}
      {/* Breadcrmb */}
      <div>
        <SignedOut>
          <SignInButton></SignInButton>
        </SignedOut>
        <SignedIn>
          <UserButton></UserButton>
        </SignedIn>
      </div>
    </div>
  );
}

export default Header;
