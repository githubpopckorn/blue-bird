import { type Database } from '@/types/database'

type TweetType = Database['public']['Tables']['tweets']['Row']
type UserType = Omit<Database['public']['Tables']['users']['Row'], 'id' | 'created_at'>

export type Tweet = TweetType & {
  users: UserType | null
}
