'use client'
import { useState } from 'react'

export default function Login({ closeLogin, openSignup }) {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log({ email, password })
  }

  const stopClick = (e) => {
    e.stopPropagation()
  }

  return (
    <div
      className="fixed inset-0 z-50 bg-black/60 flex justify-center items-center text-black"
      onMouseDown={closeLogin}
    >
      <div
        className="bg-white p-6 rounded-xl w-[400px] relative"
        onMouseDown={stopClick}
      >
        <button
          className="absolute top-2 right-4 text-xl font-bold"
          type="button"
          onClick={closeLogin}
        >
          X
        </button>

        <h2 className="text-2xl font-bold text-center mb-4 ">Login</h2>

        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email"
            className="w-full border p-2 rounded "
            required
          />
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
            className="w-full border p-2 rounded "
            required
          />
          <button className="w-full bg-blue-600 text-white py-2 rounded">
            Sign In
          </button>
        </form>

        <p className="text-sm text-center mt-4">
          Don’t have an account?{' '}
          <span
            className="text-blue-600 cursor-pointer"
            onClick={() => {
              openSignup()
              closeLogin()
            }}
          >
            Register
          </span>
        </p>
      </div>
    </div>
  )
}