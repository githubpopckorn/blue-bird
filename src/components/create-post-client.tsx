'use client'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { createClientComponentClient } from '@supabase/auth-helpers-nextjs'
import { useRouter } from 'next/navigation'
import { useState } from 'react'
import { Button } from './ui/button'
import { Textarea } from './ui/textarea'
import { Loader } from './icons'

interface Props {
  userName: string
  userAvatar: string
  userId: string | undefined
}

export default function CreatePostClient ({ userName, userAvatar, userId }: Props) {
  const supabase = createClientComponentClient()
  const [content, setContent] = useState('')
  const [loading, setLoading] = useState(false)
  const router = useRouter()

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (content === '') return
    setLoading(true)
    const { error } = await supabase
      .from('tweets')
      .insert({ contenido: content, user_id: userId })

    console.log(error)
    if (error === null) {
      setContent('')
      router.refresh()
    }
    setLoading(false)
  }
  return (
    <form onSubmit={handleSubmit} className='flex flex-col gap-2 pl-0 pt-6'>
      <article className='flex gap-2'>
        <Avatar>
          <AvatarImage src={userAvatar} alt={userName} />
          <AvatarFallback>{userName[0]}</AvatarFallback>
        </Avatar>
        <Textarea
          placeholder="¡¿Que está pasando?!"
          rows={5}
          value={content}
          onChange={(e) => { setContent(e.target.value) }}
          className='border-none w-full resize-none focus:border-none focus:ring-0'
        />
      </article>
      <article className='flex flex-row-reverse'>
        <Button
          type='submit'
          className='bg-blue-500 hover:bg-blue-600 text-white rounded-full w-[100px]'
          disabled={loading}
        >
          {loading && <Loader className='animate-spin' />}
          Tweet
        </Button>
      </article>
    </form>
  )
}
