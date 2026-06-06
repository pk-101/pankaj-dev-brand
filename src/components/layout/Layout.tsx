import { type ReactNode } from 'react'
import Navbar from './Navbar'
import Footer from './Footer'

type Props = {
  children: ReactNode
}

export default function Layout({ children }: Props) {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900">
      <Navbar />
      <main className="pt-24">
        {children}
      </main>
      <Footer />
    </div>
  )
}