import { SearchBar } from '@/components/search-bar'
import { useNavigate, Outlet } from 'react-router-dom'
import { useAuthState } from 'react-firebase-hooks/auth'
import {
  GoogleAuthProvider,
  getAuth,
  signInWithPopup,
  signOut,
} from 'firebase/auth'
import { app } from '@/services/firebase'

export default function AppLayout() {
  const navigate = useNavigate()

  const auth = getAuth(app)
  const [user, loading] = useAuthState(auth)

  const killSessionFirebase = () => {
    signOut(auth)
      .then(() => {
        navigate('/login')
      })
      .catch((error) => console.log(error.message))
  }

  if (loading) return <div>Loading...</div>

  if (!user) {
    return (
      <div>
        <h1>Not logged in</h1>
        <button
          onClick={() => {
            const provider = new GoogleAuthProvider()
            signInWithPopup(auth, provider)
          }}
        >
          Sign in with Google
        </button>
      </div>
    )
  }

  return (
    <div className="container p-8 flex flex-col gap-4 max-w-4xl">
      <button onClick={() => killSessionFirebase()}>Sair</button>
      <SearchBar />
      <Outlet />
    </div>
  )
}
