import { createServerComponentClient } from '@supabase/auth-helpers-nextjs'
import { cookies } from 'next/headers'
import CreatePostClient from './create-post-client'
import { Card, CardContent } from './ui/card'

export default async function CreatePostServer () {
  const supabase = createServerComponentClient({ cookies })
  const { data: { session } } = await supabase.auth.getSession()

  return (
    <Card>
      <CardContent>
        <CreatePostClient
          userName={session?.user.user_metadata?.user_name}
          userAvatar={session?.user.user_metadata?.avatar_url}
          userId={session?.user.id}
        />
      </CardContent>
    </Card>
  )
}
