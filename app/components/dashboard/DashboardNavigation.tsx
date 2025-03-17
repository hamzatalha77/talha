import Link from 'next/link'
import React from 'react'

const links = [
  { name: 'Dashboard', href: '/dashboard' },
  { name: 'Orders', href: '/dashboard/orders' },
  { name: 'Products', href: '/dashboard/products' },
  { name: 'Categories', href: '/categories' },
  { name: 'Reports', href: '/reports' }
]
const DashboardNavigation = () => {
  return (
    <>
      {links.map((link) => (
        <Link key={link.name} href={link.href}>
          <a className="text-gray-900">{link.name}</a>
        </Link>
      ))}
    </>
  )
}

export default DashboardNavigation
