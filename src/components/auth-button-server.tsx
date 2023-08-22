import { createServerComponentClient } from '@supabase/auth-helpers-nextjs'
import { cookies } from 'next/headers'
import { AuthButton } from './auth-button-client'

export default async function AuthButtonServer () {
  const supabase = createServerComponentClient({ cookies })
  const { data } = await supabase.auth.getSession()

  return <AuthButton session={data.session} />
}
