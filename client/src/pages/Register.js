import { useState } from 'react'

function Register() {

	const [nick, setName] = useState('')
	const [email, setEmail] = useState('')
	const [password, setPassword] = useState('')

	async function registerUser(event) {
		event.preventDefault()

		const response = await fetch('http://localhost:5000/register', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({
				email,
                nick,
				password,
			}),
		})

		const data = await response.json()

		if (data.status === 'ok') {
			window.location.href = '/login'
            alert("Register uccesful")
		}
        else {
            alert("User with that email exists")
        }
	}

	return (
		<div>
			<h1>Register</h1>
			<form onSubmit={registerUser}>
				<input
					value={nick}
					onChange={(e) => setName(e.target.value)}
					type="text"
					placeholder="Nick"
				/>
				<br />
				<input
					value={email}
					onChange={(e) => setEmail(e.target.value)}
					type="email"
					placeholder="Email"
				/>
				<br />
				<input
					value={password}
					onChange={(e) => setPassword(e.target.value)}
					type="password"
					placeholder="Password"
				/>
				<br />
				<input type="submit" value="Register" />
			</form>
		</div>
	)
}

export default Register