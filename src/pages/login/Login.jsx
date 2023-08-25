import React from 'react'

function Login() {
  return (
    <div className="flex justify-between bg-green-400  p-6 px-24">
    <div>
      <Link to="/">
        <h1>MyMoney</h1>
      </Link>
    </div>
    <div className="flex gap-4">
      <Link to="/signup">SignUp</Link>
      <Link to="/login">Login</Link>
    </div>
  </div>
  )
}

export default Login