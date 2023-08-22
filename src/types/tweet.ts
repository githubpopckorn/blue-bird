import { type Database } from '@/types/database'

type TweetType = Database['public']['Tables']['tweets']['Row']
type UserType = Pick<Database['public']['Tables']['users']['Row'], 'avatar_url' | 'name' | 'user_name'>

export type Tweet = TweetType & {
  users: UserType | null
}
