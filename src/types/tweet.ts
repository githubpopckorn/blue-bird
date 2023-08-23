import { type Database } from '@/types/database'

type TweetType = Database['public']['Tables']['tweets']['Row']
type UserType = Pick<Database['public']['Tables']['users']['Row'], 'avatar_url' | 'name' | 'user_name'>
type CommentType = Pick<Database['public']['Tables']['comments']['Row'], 'content' | 'id'>

export type Tweet = TweetType & {
  users: UserType | null
  comments?: CommentType[] | null
}
