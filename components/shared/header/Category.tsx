'use client'

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'

import { LayoutGrid } from 'lucide-react'

const Category = () => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <div className='flexCenter gap-4 px-4 py-2 bg-muted-foreground rounded-full'>
          <LayoutGrid className='h-5 w-5' />
          <p>Category</p>
        </div>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuLabel>Browse Category</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuItem>Fruits</DropdownMenuItem>
        <DropdownMenuItem>Candy</DropdownMenuItem>
        <DropdownMenuItem>Cookies </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}

export default Category
