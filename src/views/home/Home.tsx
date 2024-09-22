import React from 'react'
import { Link } from 'react-router-dom'

export default function Home() {
  return (
    <div className=' text-white'>
      <Link to={'/register-passkey'}>
        To Register Pass Key
      </Link>
    </div>
  )
}
