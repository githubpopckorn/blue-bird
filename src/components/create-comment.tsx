'use client'
import { createClientComponentClient } from '@supabase/auth-helpers-nextjs'
import { Textarea } from './ui/textarea'
import { useState } from 'react'
import { Button } from './ui/button'
import { Loader } from './icons'
import { useRouter } from 'next/navigation'
import { useToast } from './ui/use-toast'

export default function CreateComment ({ tweetId, userId }: { tweetId: string, userId: string }) {
  const supabase = createClientComponentClient()
  const [comment, setComment] = useState('')
  const [loading, setLoading] = useState(false)
  const router = useRouter()
  const { toast } = useToast()

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setLoading(true)

    const { error } = await supabase
      .from('comments')
      .insert({
        content: comment,
        user_id: userId,
        tweet_id: tweetId
      })

    if (error !== null) {
      toast({
        title: 'Error',
        description: 'No se pudo crear el comentario'
      })
      setLoading(false)
      return
    }

    toast({
      title: 'Comentario creado',
      description: 'Tu comentario ha sido creado correctamente'
    })
    setComment('')
    router.refresh()
    setLoading(false)
  }

  return (
    <form onSubmit={handleSubmit} className='flex flex-col mt-2 w-full mb-2 items-end gap-2'>
      <Textarea
        id='comment'
        name='comment'
        placeholder='¡¿Qué piensas de esto?!'
        value={comment}
        onChange={e => { setComment(e.target.value) }}
      />
      <Button type='submit' disabled={loading}>
        {loading && <Loader className='animate-spin' />}
        Comentar
      </Button>
    </form>
  )
}
