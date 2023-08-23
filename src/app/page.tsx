import AuthButtonServer from '@/components/auth-button-server'
import CreatePostServer from '@/components/create-post-server'
import { ModeToggle } from '@/components/mode-toggle'
import TweetCard from '@/components/tweet-card'
import { type Database } from '@/types/database'
import { createServerComponentClient } from '@supabase/auth-helpers-nextjs'
import { cookies } from 'next/headers'

export default async function Home () {
  const supabase = createServerComponentClient<Database>({ cookies })
  const { data: tweets } = await supabase
    .from('tweets')
    .select('*, users(name, user_name, avatar_url)')
    .order('created_at', { ascending: false })

  return (
    <main className="flex min-h-screen flex-col justify-between items-center">
      <section className='flex w-[600px] justify-between items-center pt-4'>
        <article className='flex gap-x-4 items-center font-bold'>
          Blue bird 👋
          <ModeToggle />
        </article>
        <AuthButtonServer />
      </section>

      <article className='w-[600px] mt-6 mb-0'>
        <CreatePostServer />
      </article>
      <article >
        {
          tweets?.map((tweet) => (
            <TweetCard key={tweet.id} tweet={tweet} />
          ))
        }
      </article>
    </main>
  )
}
