import { createServerComponentClient } from '@supabase/auth-helpers-nextjs'
import { cookies } from 'next/headers'
import { type Database } from '@/types/database'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'

import { Button } from '@/components/ui/button'
import { IconArrowLeft } from '@/components/icons'
import Link from 'next/link'
import UserProfileForm from '@/components/user-profile-form'

export default async function User () {
  const supabase = createServerComponentClient<Database>({ cookies })
  const { data: { user: authUser } } = await supabase.auth.getUser()
  const { data: user } = await supabase
    .from('users')
    .select('*')
    .eq('id', authUser?.id)
    .single()

  return (
    <main className="flex min-h-screen flex-col justify-between items-center">
      <section className='flex w-[600px] justify-between items-center pt-4'>
        <Card className="w-[600px] mt-1">
          <CardHeader>
            <CardTitle className='flex justify-between items-center'>
              <article className='flex items-center gap-x-2'>
                <Link href='/'>
                  <Button variant='outline' size='icon'>
                    <IconArrowLeft />
                  </Button>
                </Link>
                <h1>Perfil de usuario</h1>

              </article>
              <Avatar>
                <AvatarImage src={user?.avatar_url} alt={user?.name} />
                <AvatarFallback>{user?.name[0]}</AvatarFallback>
              </Avatar>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <UserProfileForm user={user} />
          </CardContent>
        </Card>
      </section>
    </main>
  )
}
