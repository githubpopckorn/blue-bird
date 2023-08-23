'use client'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Label } from '@/components/ui/label'
import { Button } from '@/components/ui/button'
import { type Database } from '@/types/database'
import { useState } from 'react'
import { createClientComponentClient } from '@supabase/auth-helpers-nextjs'
import { useToast } from './ui/use-toast'
import { useRouter } from 'next/navigation'
import { Loader } from './icons'

interface Props {
  user: Database['public']['Tables']['users']['Row'] | null
}

export default function UserProfileForm ({ user }: Props) {
  const supabase = createClientComponentClient()
  const router = useRouter()
  const { toast } = useToast()
  const [username, setUsername] = useState(user?.user_name)
  const [name, setName] = useState(user?.name)
  const [description, setDescription] = useState(user?.description)
  const [website, setWebsite] = useState(user?.website)
  const [loading, setLoading] = useState(false)

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setLoading(true)

    const { data, error } = await supabase
      .from('users')
      .update({
        name,
        description,
        website,
        user_name: username
      })
      .eq('id', user?.id)
      .select()

    if (error !== null || data.length === 0) {
      toast({
        title: 'Error',
        description: 'No se pudo actualizar el perfil de usuario'
      })
      return
    }

    toast({
      title: 'Perfil actualizado',
      description: 'Tu perfil ha sido actualizado correctamente'
    })
    router.refresh()
    setLoading(false)
  }

  return (
    <form onSubmit={handleSubmit} className='flex flex-col w-full gap-y-4'>
      <article>
        <Label htmlFor='username'>Username</Label>
        <Input
          id='username'
          value={username}
          onChange={(e) => { setUsername(e.target.value) }}
        />
      </article>
      <article>
        <Label htmlFor='description'>Descripción</Label>
        <Textarea
          placeholder='Cuéntanos acerca de ti!'
          id='description'
          rows={4}
          value={description === null ? '' : description}
          onChange={(e) => { setDescription(e.target.value) }}
        />
      </article>
      <article>
        <Label htmlFor='name'>Nombre</Label>
        <Input
          placeholder='¿Cómo te llamas?'
          id='name'
          value={name}
          onChange={(e) => { setName(e.target.value) }}
        />
      </article>

      <article>
        <Label htmlFor='website'>Website</Label>
        <Input
          placeholder='http://website.com'
          id='website'
          value={website === null ? '' : website}
          onChange={(e) => { setWebsite(e.target.value) }}
        />
      </article>
      <Button type='submit' disabled={loading}>
        {loading && <Loader className='animate-spin' />}
        Guardar
      </Button>

    </form>
  )
}
