import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { IconHeart, IconMessageCircle2, IconRepeat } from './icons'
import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar'
import { type Tweet } from '@/types/tweet'

export default function TweetCard ({ tweet }: { tweet: Tweet }) {
  return (
    <Card className="w-[600px] mt-1 hover:bg-slate-50 dark:hover:bg-slate-900 cursor-pointer">
      <CardHeader>
        <CardTitle className='flex gap-2 items-center'>
          <Avatar>
            <AvatarImage src={tweet.users?.avatar_url} alt={tweet.users?.name} />
            <AvatarFallback>{tweet.users?.name[0]}</AvatarFallback>
          </Avatar>
          <article>
            <span>{tweet.users?.name}</span>
            <CardDescription className='pt-1'>@{tweet.users?.user_name}</CardDescription>
          </article>
        </CardTitle>

        <CardContent className='pl-12 pt-4'>
          <p>{tweet.contenido}</p>
        </CardContent>
        <CardFooter className='p-0 pr-6 pl-12 flex h-full justify-between items-center'>
          <button className=''>
            <IconMessageCircle2 className='text-gray-500 hover:text-blue-600' />
          </button>
          <button>
            <IconRepeat className='text-gray-500 hover:text-green-600' />
          </button>
          <button>
            <IconHeart className='text-gray-500 hover:text-pink-600' />
          </button>
        </CardFooter>
      </CardHeader>
    </Card>
  )
}
