export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export interface Database {
  public: {
    Tables: {
      comments: {
        Row: {
          content: string
          created_at: string
          id: string
          tweet_id: string
          user_id: string
        }
        Insert: {
          content: string
          created_at?: string
          id?: string
          tweet_id: string
          user_id: string
        }
        Update: {
          content?: string
          created_at?: string
          id?: string
          tweet_id?: string
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: 'comments_tweet_id_fkey'
            columns: ['tweet_id']
            referencedRelation: 'tweets'
            referencedColumns: ['id']
          },
          {
            foreignKeyName: 'comments_user_id_fkey'
            columns: ['user_id']
            referencedRelation: 'users'
            referencedColumns: ['id']
          }
        ]
      }
      tweets: {
        Row: {
          contenido: string
          created_at: string
          id: string
          user_id: string
        }
        Insert: {
          contenido: string
          created_at?: string
          id?: string
          user_id: string
        }
        Update: {
          contenido?: string
          created_at?: string
          id?: string
          user_id?: string
        }
        Relationships: [
          {
            foreignKeyName: 'tweets_user_id_fkey'
            columns: ['user_id']
            referencedRelation: 'users'
            referencedColumns: ['id']
          }
        ]
      }
      users: {
        Row: {
          avatar_url: string
          created_at: string
          description: string | null
          id: string
          name: string
          user_name: string
          website: string | null
        }
        Insert: {
          avatar_url: string
          created_at?: string
          description?: string | null
          id: string
          name: string
          user_name: string
          website?: string | null
        }
        Update: {
          avatar_url?: string
          created_at?: string
          description?: string | null
          id?: string
          name?: string
          user_name?: string
          website?: string | null
        }
        Relationships: [
          {
            foreignKeyName: 'users_id_fkey'
            columns: ['id']
            referencedRelation: 'users'
            referencedColumns: ['id']
          }
        ]
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      [_ in never]: never
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}
