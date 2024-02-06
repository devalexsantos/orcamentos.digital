import { SearchBar } from '@/components/search-bar'
import {
  ClerkProvider,
  SignInButton,
  SignedIn,
  SignedOut,
} from '@clerk/clerk-react'
import { Outlet } from 'react-router-dom'

export default function AppLayout() {
  const PUBLISHABLE_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY

  if (!PUBLISHABLE_KEY) {
    throw new Error('Missing Publishable Key')
  }

  return (
    <ClerkProvider publishableKey={PUBLISHABLE_KEY}>
      <div className="container">
        <SignedOut>
          <SignInButton />
        </SignedOut>
      </div>
      <SignedIn>
        <div className="container p-8 flex flex-col gap-4 max-w-4xl">
          <SearchBar />
          <Outlet />
        </div>
      </SignedIn>
    </ClerkProvider>
  )
}
