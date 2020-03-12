import React, { useState } from 'react'

const AddUserForm = props => {
	const initialFormState = { id: null, name: '', username: '', alamat: '', phone: '' }
	const [ user, setUser ] = useState(initialFormState)

	const handleInputChange = event => {
		const { name, value } = event.target

		setUser({ ...user, [name]: value })
	}

	return (
		<form
			onSubmit={event => {
				event.preventDefault()
				if (!user.name || !user.username) return

				props.addUser(user)
				setUser(initialFormState)
			}}
		>
			<label>Name</label>
			<input type="text" name="name" value={user.name} onChange={handleInputChange} />
			<label>Username</label>
			<input type="text" name="username" value={user.username} onChange={handleInputChange} />
			<label>Alamat</label>
			<input type="text" name="alamat" value={user.alamat} onChange={handleInputChange} />
			<label>Phone</label>
			<input type="text" name="phone" value={user.phone} onChange={handleInputChange} />


			<button>Add new user</button>
		</form>
	)
}

export default AddUserForm
