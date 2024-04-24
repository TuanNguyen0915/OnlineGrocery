'use client'
import { Button } from '@/components/ui/button'
import { Home, ShoppingCart, User } from 'lucide-react'
import React from 'react'
import { ThemeToggle } from '../ThemeToggle'
import SearchFooter from './SearchFooter'
import { useRouter } from 'next/navigation'

const Footer = () => {
  const router = useRouter()
  return (
    <footer className='lg:hidden w-full flexBetween gap-4 py-1 px-2 bg-muted-foreground/80 backdrop-blur-lg sticky bottom-0'>
      <Button variant={'ghost'} onClick={() => router.push('/')}>
        <Home />
      </Button>
      <Button variant={'ghost'}>
        <User />
      </Button>
      <Button variant={'ghost'} className='gap-1'>
        <ShoppingCart />
        <p className='text-base'>(1)</p>
      </Button>
      <SearchFooter />
      <ThemeToggle />
    </footer>
  )
}

export default Footer
