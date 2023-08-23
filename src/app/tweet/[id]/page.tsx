import CreateComment from '@/components/create-comment'
import { IconArrowLeft } from '@/components/icons'
import TweetCard from '@/components/tweet-card'
import { Avatar, AvatarImage } from '@/components/ui/avatar'
import { Button } from '@/components/ui/button'
import { Separator } from '@/components/ui/separator'
import { type Database } from '@/types/database'
import { createServerComponentClient } from '@supabase/auth-helpers-nextjs'
import { cookies } from 'next/headers'
import Link from 'next/link'

export default async function Tweet ({ params }: { params: { id: string } }) {
  const { id } = params
  const supabase = createServerComponentClient<Database>({ cookies })
  const { data: tweet, error } = await supabase
    .from('tweets')
    .select('*, users(name, user_name, avatar_url)')
    .eq('id', id)
    .single()

  const { data: comments } = await supabase
    .from('comments')
    .select('*, users(user_name, avatar_url, name)')
    .eq('tweet_id', id)
    .order('created_at', { ascending: false })

  const { data: { user } } = await supabase.auth.getUser()

  if (error !== null || user === null) {
    return <p>Error</p>
  }
  console.log(tweet, error)
  return (
    <main className='flex flex-col items-center mt-2 w-[600px] mx-auto min-h-screen'>
      <Link href='/' className='flex w-full justify-start'>
        <Button variant='outline' size='icon'>
          <IconArrowLeft />
        </Button>
      </Link>
      <TweetCard tweet={tweet} />
      <CreateComment tweetId={id} userId={user?.id} />
      <section className='flex mt-2 h-auto px-6 gap-4 w-full'>
        <article>
          <Separator orientation="vertical" />
        </article>
        <article className=''>
          {
            comments?.map((comment) => (
              <article key={comment.id} className='flex flex-row gap-4 p-4 first:pt-0 last:pb-0'>
                <Avatar className='h-8 w-8'>
                  <AvatarImage src={comment?.users?.avatar_url} alt={comment?.users?.name} />
                </Avatar>
                <p>{comment?.content}</p>
              </article>
            ))
          }
        </article>
      </section>
    </main>
  )
}
