import { Button } from '@/components/ui/button'
import { LoginLink, RegisterLink } from '@kinde-oss/kinde-auth-nextjs'
import React from 'react'

const Home = () => {
  return (
    <div>
      <Button asChild>
        <LoginLink>Log in</LoginLink>
      </Button>
      <Button asChild>
        <RegisterLink>Sign Up</RegisterLink>
      </Button>
    </div>
  )
}

export default Home
