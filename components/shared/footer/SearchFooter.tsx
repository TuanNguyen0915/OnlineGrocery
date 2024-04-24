'use client'

import { Button } from '@/components/ui/button'
import { DropdownMenu, DropdownMenuContent, DropdownMenuTrigger } from '@/components/ui/dropdown-menu'
import { Search } from 'lucide-react'
import { useState } from 'react'

const SearchFooter = () => {
  const [searchTerm, setSearchTerm] = useState('')
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant={'ghost'}>
          <Search />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align='center' className='w-full'>
        <input
          onChange={(e) => setSearchTerm(e.target.value)}
          value={searchTerm}
          type='text'
          placeholder='Search'
          className='bg-transparent focus:outline-none '
        />
      </DropdownMenuContent>
    </DropdownMenu>
  )
}

export default SearchFooter
