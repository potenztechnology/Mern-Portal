import axios from 'axios'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

function AddUser() {

        const navigate = useNavigate()
        const [name, setName] = useState('')
        const [email, setEmail] = useState('')
        const [password, setPassword] = useState('')
        const [role, setRole] = useState('')

    const handleAdd = async () => {
        try {
            await axios.post('http://localhost:9000/user/add', {
                "name": name,
                "password": password,
                "email": email,
                "role": role
            }).then((response) => {
                console.log(response);
                navigate(-1)
            }).catch((err) => console.log(err))
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <>
            <div className='card container'>
                <div className='card-header d-flex justify-content-between'>
                    <h3 className='p-3'>Add User</h3>
                    <button className='btn' onClick={() => navigate(-1)}>
                        <span class="material-symbols-outlined pt-3">
                            close
                        </span>
                    </button>
                </div>
                <div className='card-body'>

                    <div className="row">
                        <div className='col-md-4 mt-4'>
                            <label className='form-label'>Name:-</label>
                            <input type='text' className='form-control' value={name} onChange={(e) => setName(e.target.value)} />
                        </div>
                        <div className='col-md-4 mt-4'>
                            <label className='form-label'>Email:-</label>
                            <input type='text' className='form-control' value={email} onChange={(e) => setEmail(e.target.value)} />
                        </div>
                        <div className='col-md-4 mt-4'>
                            <label className='form-label'>Password:-</label>
                            <input type='password' className='form-control' value={password} onChange={(e) => setPassword(e.target.value)} />
                        </div>
                        <div className='col-md-4 mt-4'>
                            <label className='form-label'>Role:-</label>
                            <select value={role} onChange={(e) => setRole(e.target.value)}
                                className='form-control'
                            >
                                <option value="">
                                    --/--
                                </option>
                                <option value="Admin">Admin</option>
                                <option value="User">User</option>
                            </select>
                        </div>
                    </div>

                </div>
                <div className='card-footer'>
                    <button className='btn btn-primary' onClick={handleAdd}>Submit</button>
                </div>
            </div>
        </>
    )
}

export default AddUser