import React from 'react'
import NavbarUI from './navbar'
import Link from 'next/link'
import Button from './button'
import { Links } from '../lib/Data'
import { useAuth } from '@clerk/nextjs'

const LinlsMnue = () => {
    const { isSignedIn } = useAuth(); 

  return (
    <div>
      							<div className='flex flex-col space-y-2'>
								<div>
									{Links.map((link) => (
										<NavbarUI
											key={link.id}
											name={link.name}
											path={link.path}
										/>
									))}
									{isSignedIn ? null : (
										<div className='flex md:hidden flex-col w-[300px] gap-2 mt-3'>
											<Link href='/sign-in'>
												<Button title={'Login'} />
											</Link>
											<Link href='/sign-up'>
												<Button title={'Sign up'} />
											</Link>
										</div>
									)}
								</div>
							</div>
    </div>
  )
}

export default LinlsMnue
