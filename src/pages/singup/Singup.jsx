import React from 'react'

function Singup() {
  return (
    <div className="pt-24">
    <form
      action=""
      className="flex flex-col gap-8 w-96 mx-auto my-auto text-xl"
    >
      <label htmlFor="input1">
        email: <br />
        <input
         laceholder="email kiritin..."
          className="border border-black w-full rounded px-2 py-1 mt-1"
          id="input1"
          type="email"
          placeholder='email kiriting...'
        />
      </label>
      <label htmlFor="input2">
        password: <br />
        <input
         placeholder="password kiriting..."
          className="border  border-black w-full rounded px-2 py-1 mt-1"
          id="input2"
          type="text"
        />
      </label>
      <label htmlFor="input3">
        displayName: <br />
        <input
          onChange={(e) => {
            setName(e.target.value);
          }}
          placeholder="Ismingizni kiriting kiriting..."
          className="border  border-black w-full rounded px-2 py-1 mt-1"
          id="input3"
          type="text"
        />
      </label>
        <button className="hover:bg-green-600 hover:text-white transition-all delay-150 ease-linear border-green-600 p-1 w-32 rounded border-2 text-green-600 font-bold">
          Signup
        </button>
     
    </form>
  </div>
  )
}

export default Singup