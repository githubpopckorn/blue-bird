import AuthButtonServer from '@/components/auth-button-server'

export default async function Login () {
  return (
    <section className='flex flex-col gap-y-2 min-h-screen justify-center items-center'>
      <h1 className='text-xl font-bold'>Inicia sesion para continuar</h1>
      <AuthButtonServer />
    </section>
  )
}
