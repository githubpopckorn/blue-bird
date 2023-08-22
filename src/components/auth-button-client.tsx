'use client'
import { createClientComponentClient, type Session } from '@supabase/auth-helpers-nextjs'
import { IconBrandGithub, IconLogout } from './icons'
import { Button } from './ui/button'
import { useRouter } from 'next/navigation'
export function AuthButton ({ session }: { session: Session | null }) {
  const supabase = createClientComponentClient()
  const router = useRouter()

  const handleSignIn = async () => {
    await supabase.auth.signInWithOAuth({
      provider: 'github',
      options: {
        redirectTo: `${location.origin}/auth/callback`
      }
    })
  }

  const handleSignOut = async () => {
    await supabase.auth.signOut()
    router.refresh()
  }

  return (
    <section className='flex gap-x-4'>
      {
        session === null
          ? <Button onClick={handleSignIn}>
            <IconBrandGithub className="mr-2" /> Sign In Github
          </Button>
          : <Button onClick={handleSignOut}>
            <IconLogout className="mr-2" /> Sign Out
          </Button>

      }

    </section>
  )
}
