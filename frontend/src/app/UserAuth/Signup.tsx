'use client'

import { useState } from 'react'

export default function Signup({ closeSignup, openLogin }) {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    if (password !== confirmPassword) {
      alert('Passwords do not match')
      return
    }
    console.log('Signing up with:', { name, email, password })
  }

  const stopClick = (e) => e.stopPropagation()

  return (
    <div
      className="fixed inset-0 bg-black/60 flex justify-center items-center px-4 z-50 text-black"
      onMouseDown={closeSignup}
    >
      <div
        onMouseDown={stopClick}
        className="bg-white p-6 rounded-2xl shadow-lg w-full max-w-md relative"
      >
        <button
          type="button"
          onClick={closeSignup}
          className="absolute top-4 right-4 text-lg font-bold"
        >
          X
        </button>

        <h2 className="text-3xl font-bold text-center mb-6 ">Sign Up</h2>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium mb-1 ">Name</label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="John Doe"
              className="w-full border px-4 py-2 rounded-xl "
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-1 ">Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="you@example.com"
              className="w-full border px-4 py-2 rounded-xl "
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-1 ">Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="••••••••"
              className="w-full border px-4 py-2 rounded-xl "
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-1 ">Confirm Password</label>
            <input
              type="password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              placeholder="••••••••"
              className="w-full border px-4 py-2 rounded-xl "
              required
            />
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-xl transition"
          >
            Create Account
          </button>
        </form>

        <p className="text-sm text-center text-gray-600 mt-4">
          Already have an account?{' '}
          <span
            onClick={() => {
              openLogin()
              closeSignup()
            }}
            className="text-blue-600 hover:underline cursor-pointer"
          >
            Login
          </span>
        </p>
      </div>
    </div>
  )
}