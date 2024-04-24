'use client'
import Image from 'next/image'
import { useState } from 'react'
import { useRouter } from 'next/navigation'
import Category from './Category'
import { Search, ShoppingCart } from 'lucide-react'
import { ThemeToggle } from '../ThemeToggle'
import { Button } from '@/components/ui/button'

const Header = () => {
  const router = useRouter()
  const [searchTerm, setSearchTerm] = useState('')
  return (
    <header className='w-full flex items-center gap-4  max-xl:p-2 shadow-sm'>
      <Image
        src='/logo.png'
        onClick={() => router.push('/')}
        width={80}
        height={80}
        alt='logo'
        className='max-md:w-16 max-md:h-16'
      />
      <div className='w-full flexBetween'>
        <div className='flex-1 max-lg:justify-end flex items-center gap-4'>
          <Category />
          <div className='max-md:hidden flex items-center gap-2 border border-border p-2 rounded-full hover:border-primary transition-all'>
            <Search className='h-5 w-5' />
            <input
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder='Search'
              className='bg-transparent focus:outline-none'
            />
          </div>
        </div>
        <div className='max-lg:hidden flexBetween justify-end gap-4'>
          <ThemeToggle />
          <div className='flexCenter gap-2'>
            <ShoppingCart className='h-8 w-8 text-primary' /> (1)
          </div>
          <Button>Login</Button>
        </div>
      </div>
    </header>
  )
}

export default Header
