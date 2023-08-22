'use client'
import { createClientComponentClient, type Session } from '@supabase/auth-helpers-nextjs'
import { IconBrandGithub, IconLogout } from './icons'
import { Button } from './ui/button'
import { useRouter } from 'next/navigation'
import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar'
import Link from 'next/link'

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
          : <>
            <Button onClick={handleSignOut} variant="outline" size="icon">
              <IconLogout />
            </Button>
            <Link href="/user">
              <Avatar>
                <AvatarImage src={session.user.user_metadata.avatar_url} alt={session.user.user_metadata.name[0]} />
                <AvatarFallback>{session.user.user_metadata.name[0]}</AvatarFallback>
              </Avatar>
            </Link>
          </>

      }

    </section>
  )
}
