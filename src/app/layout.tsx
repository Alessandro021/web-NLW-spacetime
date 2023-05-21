import { Hero } from '@/components/Hero'
import { Profile } from '@/components/Profile'
import { SigIn } from '@/components/SigIn'
import './globals.css'
import { Roboto_Flex as Roboto, Bai_Jamjuree as BaiJamjuree} from 'next/font/google'
import { Copyright } from '@/components/Copyright'
import { cookies } from 'next/headers'

const roboto = Roboto({ subsets: ['latin'], variable: "--font-roboto" })
const baiJamjuree = BaiJamjuree({ subsets: ["latin"], weight: "700", variable: "--font-bai-jumjuree" })

export const metadata = {
  title: 'Spacetime',
  description: 'Uma cápsula do tempo construida com React, Next.Js, TailwindCss e TypeScript.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const isAuthenticated = cookies().has("token")
  return (
    <html lang="pt-BR">
      <body className={`${roboto.variable} ${baiJamjuree.variable} font-sans text-gray-100 bg-gray-900`}>
        
        <main className="grid grid-cols-2 min-h-screen">
      {/* LEFT */}
      <div className="flex flex-col items-start justify-between px-28 py-16 relative overflow-hidden border-white/10 
      border-r bg-[url(../assets/bg-stars.svg)] bg-cover">
        {/* BLUR */}
        <div className="absolute right-0 top-1/2 h-[288px] -translate-y-1/2 translate-x-1/2 w-[526px] 
        bg-purple-700 opacity-50 rounded-full blur-full"/>

        {/* STRIPES/REGUA */}
        <div className="absolute bottom-0 right-2 top-0 w-2 bg-stripes" />
        
        {isAuthenticated ? <Profile /> : <SigIn /> }
        <Hero />
        <Copyright />

      </div>

      {/* RIGHT */}
      <div className="flex max-h-screen overflow-y-scroll flex-col bg-[url(../assets/bg-stars.svg)] bg-cover">
      {children}
      </div>

    </main>
        </body>
    </html>
  )
}
