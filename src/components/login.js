import React, { useState } from "react"
import { navigate } from "gatsby"
import { handleLogin, isLoggedIn } from "../utils/auth"

const Login = () => {
  if (isLoggedIn()) {
    navigate(`/app/profile`)
    return null
  }

  return (
    <div className="container mx-auto max-w-md">
      <h2 className="text-center text-4xl">You must login</h2>
      <button
        onClick={() => handleLogin(() => navigate("/app/profile"))}
        className="btn w-full"
      >
        Login
      </button>
    </div>
  )
}

export default Login
