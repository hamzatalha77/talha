'use client'
import { UploadDropzone } from '@/app/lib/uplaodthing'
import { Button } from '@/components/ui/button'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle
} from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue
} from '@/components/ui/select'
import { Switch } from '@/components/ui/switch'
import { Textarea } from '@/components/ui/textarea'

import { ChevronLeft } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

const ProductCreateRoute = () => {
  return (
    <form>
      <div className="flex items-center gap-4">
        <Button variant="outline" size="icon" asChild>
          <Link href="/dashboard/products">
            <ChevronLeft className="h-4 w-4" />
          </Link>
        </Button>
        <h1 className="text-xl font-semibold tracking-tight">New Product</h1>
      </div>
      <Card className="mt-5">
        <CardHeader>
          <CardTitle>Product Details</CardTitle>
          <CardDescription>in this form you can create product</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex flex-col gap-6">
            <div className="flex flex-col gap-3">
              <Label>Name</Label>
              <Input
                type="text"
                className="w-full"
                placeholder="Product Name"
              />
            </div>
            <div className="flex flex-col gap-3">
              <Label>Description</Label>
              <Textarea placeholder="Write a description of the product" />
            </div>
            <div className="flex flex-col gap-3">
              <Label>Price</Label>
              <Input type="number" placeholder="$0.00" />
            </div>
            <div className="flex flex-col gap-3">
              <Label>Featured Product</Label>
              <Switch />
            </div>
            <div className="flex flex-col gap-3">
              <Label>Status</Label>
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="Select Status" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="draft">Draft</SelectItem>
                  <SelectItem value="published">Publiched</SelectItem>
                  <SelectItem value="archived">Archived</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="flex flex-col gap-3">
              <Label>Images</Label>
              <UploadDropzone endpoint="imageUploader" />
            </div>
          </div>
        </CardContent>
      </Card>
    </form>
  )
}

export default ProductCreateRoute
