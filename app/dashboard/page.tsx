'use client'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { DollarSign } from 'lucide-react'
import React from 'react'

const dashboard = () => {
  return (
    <div className="grid gap-4 md:grid-cols-2 md:gap-8 lg:grid-cols-4">
      <Card>
        <CardHeader className="flex flxr-row items-center justify-between pb-2">
          <CardTitle>Total Sales</CardTitle>
          <DollarSign className="h-4 w-4 text-blue-500" />
        </CardHeader>
        <CardContent>
          <p className="text-2xl font-bold">+50</p>
          <p className="text-xs text-muted-foreground Based on 100 Charges">
            Total Sales on Talha
          </p>
        </CardContent>
      </Card>
    </div>
  )
}

export default dashboard
