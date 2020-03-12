import React, { useState, Fragment,useEffect } from 'react'
import AddUserForm from '../forms/AddUserForm'
import EditUserForm from '../forms/EditUserForm'
import UserTable from '../tables/UserTable'
import {useHistory,Link} from 'react-router-dom'

const Dashboard = () => {
    const usersData = [
		{ id: 1, name: 'Tania', username: 'floppydiskette', alamat: 'Tabanan', phone: '0878731' },
		{ id: 2, name: 'Craig', username: 'siliconeidolon',alamat: 'Tabanan', phone: '08543534'},
		{ id: 3, name: 'Ben', username: 'benisphere', alamat: 'Tabanan', phone: '0897637'},
	]
	 let history =  useHistory();

	const initialFormState = { id: null, name: '', username: '', alamat: '', phone: '', }
	useEffect(() => {
		console.log("dashboard")
		let Auth = localStorage.getItem("authenticated");
		
		if(Auth == null || Auth ==  "false"){
			history.push("/");
			return
		}
	},[])
	// Setting state
	const [ users, setUsers ] = useState(usersData)
	const [ currentUser, setCurrentUser ] = useState(initialFormState)
	const [ editing, setEditing ] = useState(false)

	// CRUD operations
	const addUser = user => {
		user.id = users.length + 1
		setUsers([ ...users, user ])
	}

	const deleteUser = id => {
		setEditing(false)

		setUsers(users.filter(user => user.id !== id))
	}

	const updateUser = (id, updatedUser) => {
		setEditing(false)

		setUsers(users.map(user => (user.id === id ? updatedUser : user)))
	}

	const editRow = user => {
		setEditing(true)

		setCurrentUser({ id: user.id, 
						name: user.name, 
						username: user.username, 
						alamat: user.alamat,
						phone: user.phone })
	}
	
	const handleLogout = (e) => {
        e.preventDefault();
		localStorage.removeItem("authenticated");
		history.push("/")
    }

	return (
		<div className="container">
			<h1>CRUD App with Hooks</h1>
			
			<a href="#" onClick={handleLogout}>
       LogoutBaru
      </a>
		
			<div className="flex-row">
				<div className="flex-large">
					{editing ? (
						<Fragment>
							<h2>Edit user</h2>
							<EditUserForm
								editing={editing}
								setEditing={setEditing}
								currentUser={currentUser}
								updateUser={updateUser}
							/>
						</Fragment>
					) : (
						<Fragment>
							<h2>Add user</h2>
							<AddUserForm addUser={addUser} />
						</Fragment>
					)}
				</div>
				<div className="flex-large">
					<h2>View users</h2>
					<UserTable users={users} editRow={editRow} deleteUser={deleteUser} />
				</div>
			</div>
		</div>
	)

}


export default Dashboard;
