import { Button } from '@/components/ui/button'
import { PlusCircle } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

const ProductsPage = () => {
  return (
    <>
      <div className="flex items-center justify-end">
        <Button asChild className="flex items-center gap-x-2">
          <Link href="/dashboard/products/create">
            <PlusCircle className="w-3.5 h-3.5">
              <span>Add Products</span>
            </PlusCircle>
          </Link>
        </Button>
      </div>
    </>
  )
}

export default ProductsPage
