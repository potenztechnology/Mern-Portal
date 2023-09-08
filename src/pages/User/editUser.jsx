import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

function EditUser() {
    const { id } = useParams()
    const navigate = useNavigate()
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [role, setRole] = useState('')
    const [password, setPassword] = useState('')

    const fetchData = async () => {
        try {
            const response = await axios.get(`http://localhost:9000/user/details/${id}`)
            console.log(response.data);
            setName(response.data.name)
            setEmail(response.data.email)
            setRole(response.data.role)
        } catch (error) {
            console.log(error);
        }
    }

    const handleUpdate = async () => {
        try {
            await axios.put(`http://localhost:5000/user/update/${id}`, {
                "name": name,
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

    const handlePassword = async () => {
        try {
            const response = await axios.put(`http://localhost:5000/user/update/${id}`, {
                "password": password,  
            })
            alert(response.data.Message)
        } catch (error) {
            alert(error.response.data.Message)
        }
    }

    useEffect(() => {
        fetchData()
    }, [])


    return (
        <>
            <div className='card container'>
                <div className='card-header d-flex justify-content-between'>
                    <h3 className=''>Edit User</h3>
                    <button className='btn' onClick={() => navigate(-1)}> <span className="material-symbols-outlined">
                        close
                    </span></button>
                </div>
                <div className='card-body'>

                    <div className="row">
                        <div className='col-md-4 mt-4'>
                            <label className='form-label'>name:-</label>
                            <input type='text' className='form-control' value={name} onChange={(e) => setName(e.target.value)} />
                        </div>

                        <div className='col-md-4 mt-4'>
                            <label className='form-label'>Email:-</label>
                            <input type='text' className='form-control' value={email} onChange={(e) => setEmail(e.target.value)} />
                        </div>
                        <div className='col-md-4 mt-4'>
                            <label className='form-label'>Role:-</label>
                            <select value={role} onChange={(e) => setRole(e.target.value)}
                                className='form-control'
                            >
                                <option value="">
                                    --/--
                                </option>
                                <option value="Admin">admin</option>
                                <option value="User">User</option>
                            </select>
                        </div>
                    </div>

                </div>
                <div className='card-footer d-flex justify-content-between'>
                    <div></div>
                    <button className='btn btn-primary' onClick={handleUpdate}>Submit</button>
                    <div>
                        <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
                            Change Your Password
                        </button>
                        <div className="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                            <div className="modal-dialog modal-dialog-centered">
                                <div className="modal-content">
                                    <div className="modal-header">
                                        <h5 className="modal-title" id="staticBackdropLabel">Change Your Password </h5>
                                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                    </div>
                                    <div className="modal-body">
                                        <div className="container">
                                            <div className="row">
                                                <div className=''>
                                                    <label className='form-label'>Enter the New Password:-</label>
                                                    <input className='form-control' type='text' onChange={(e) => setPassword(e.target.value)} />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="modal-footer">
                                        <button type="button" className="btn btn-danger" data-bs-dismiss="modal" >Close</button>
                                        <button type="button" className="btn btn-primary" data-bs-dismiss="modal" onClick={handlePassword}>Submit</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default EditUser