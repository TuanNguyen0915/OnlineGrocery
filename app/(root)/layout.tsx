import Footer from '@/components/shared/footer/Footer'
import Header from '@/components/shared/header/Header'

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <main className='max-w-[1920px] mx-auto flexCol min-h-screen gap-10'>
      <Header />
      <section className='flex-1'>
        {children}
        <div className='bg-slate-600 w-full h-[1000px]' />
      </section>
      <Footer />
    </main>
  )
}

export default RootLayout
