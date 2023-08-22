export interface IconProps {
  className?: string
  width?: number
  height?: number
  strokeWidth?: number
  stroke?: string
  fill?: string
  strokeLinecap?: 'butt' | 'square' | 'round' | 'inherit'
  strokeLinejoin?: 'miter' | 'bevel' | 'round' | 'inherit'
}
export const IconBrandGithub = (props: IconProps) => (
  <svg width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round"
    {...props}>
    <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
    <path d="M9 19c-4.3 1.4 -4.3 -2.5 -6 -3m12 5v-3.5c0 -1 .1 -1.4 -.5 -2c2.8 -.3 5.5 -1.4 5.5 -6a4.6 4.6 0 0 0 -1.3 -3.2a4.2 4.2 0 0 0 -.1 -3.2s-1.1 -.3 -3.5 1.3a12.3 12.3 0 0 0 -6.2 0c-2.4 -1.6 -3.5 -1.3 -3.5 -1.3a4.2 4.2 0 0 0 -.1 3.2a4.6 4.6 0 0 0 -1.3 3.2c0 4.6 2.7 5.7 5.5 6c-.6 .6 -.6 1.2 -.5 2v3.5"></path>
  </svg>
)

export const IconLogout = (props: IconProps) => (
  <svg width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round"
    {...props}>
    <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
    <path d="M14 8v-2a2 2 0 0 0 -2 -2h-7a2 2 0 0 0 -2 2v12a2 2 0 0 0 2 2h7a2 2 0 0 0 2 -2v-2"></path>
    <path d="M9 12h12l-3 -3"></path>
    <path d="M18 15l3 -3"></path>
  </svg>
)

export const IconRepeat = (props: IconProps) => (
  <svg width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round"
    {...props}>
    <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
    <path d="M4 12v-3a3 3 0 0 1 3 -3h13m-3 -3l3 3l-3 3"></path>
    <path d="M20 12v3a3 3 0 0 1 -3 3h-13m3 3l-3 -3l3 -3"></path>
  </svg>
)

export const IconHeart = (props: IconProps) => (
  <svg width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round"
    {...props}>
    <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
    <path d="M19.5 12.572l-7.5 7.428l-7.5 -7.428a5 5 0 1 1 7.5 -6.566a5 5 0 1 1 7.5 6.572"></path>
  </svg>
)

export const IconHeartFilled = (props: IconProps) => (
  <svg width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round"
    {...props}>
    <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
    <path d="M6.979 3.074a6 6 0 0 1 4.988 1.425l.037 .033l.034 -.03a6 6 0 0 1 4.733 -1.44l.246 .036a6 6 0 0 1 3.364 10.008l-.18 .185l-.048 .041l-7.45 7.379a1 1 0 0 1 -1.313 .082l-.094 -.082l-7.493 -7.422a6 6 0 0 1 3.176 -10.215z" strokeWidth="0" fill="currentColor"></path>
  </svg>
)

export const IconMessageCircle2 = (props: IconProps) => (
  <svg width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round"
    {...props}>
    <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
    <path d="M3 20l1.3 -3.9a9 8 0 1 1 3.4 2.9l-4.7 1"></path>
  </svg>
)

export const Loader = (props: IconProps) => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
    {...props}>
    <path d="M21 12a9 9 0 1 1-6.219-8.56" />
  </svg>
)
