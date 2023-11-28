import React from 'react'

export default function ForgotPassword() {
    return (
        <form action="/user/forgot" >
            <h1>Forgot Password</h1>
            <input type="text" name="username" placeholder="Your username" required/>
            <button type="submit">Send reset password link</button>
        </form>
  )
}
