'use client' // if using in Next.js App Router

import { useState } from 'react'

export default function Login({setisLoginSection}) {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log('Logging in with:', { email, password })
  }

  return (
    <div className="min-h-screen flex items-center justify-center text-black px-4">
      <div className="flex flex-col max-w-md w-full bg-white rounded-2xl shadow-lg p-8">
        <button className='self-end font-extrabold rounded-full' type='button' onClick={() => setisLoginSection(false)}>X</button>
        <h2 className="text-3xl font-bold text-center mb-6 text-gray-800">Login</h2>
        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-600 mb-1">
              Email
            </label>
            <input
              type="email"
              id="email"
              className="w-full px-4 py-2 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              placeholder="you@example.com"
            />
          </div>

          <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-600 mb-1">
              Password
            </label>
            <input
              type="password"
              id="password"
              className="w-full px-4 py-2 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              placeholder="••••••••"
            />
          </div>

          <button
            type="submit"
            className="w-full py-2 px-4 bg-blue-600 hover:bg-blue-700 text-white rounded-xl font-semibold transition duration-300"
          >
            Sign In
          </button>
        </form>
        <p className="text-sm text-gray-500 text-center mt-4">
          Don&apos;t have an account? <a href="#" className="text-blue-600 hover:underline">Register</a>
        </p>
      </div>
    </div>
  )
}
