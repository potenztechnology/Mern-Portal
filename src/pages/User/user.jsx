import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { confirmAlert } from 'react-confirm-alert';
import 'react-confirm-alert/src/react-confirm-alert.css';

function User() {
    const navigate = useNavigate()
    const [data, setData] = useState('')

    const fetchData = async () => {
        try {
            const response = await axios.get('http://localhost:9000/user/all')
            setData(response.data)
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        fetchData()
    }, [])

    const handleDelete = async (id) => {
        try {
            await axios.delete(`http://localhost:9000/user/delete/${id}`)
        } catch (error) {
            console.log(error);
        }
    }
    return (
        <>
            <div className="card">
                <div className="card-header d-flex justify-content-between">
                    <h2 className='p-3'>User Data</h2>

                    <button className='btn' onClick={() => navigate('add')}>
                        <span className="material-symbols-outlined pt-3">
                            add
                        </span>
                    </button>
                </div>
                <div className="card-body">
                    <div className="table table-striped">
                        <thead>
                            <tr>
                                <th>Name</th>
                                <th>Email</th>
                                <th>Role</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {data && data.map((dataObj) => {
                                const submit = () => {
                                    confirmAlert({
                                        title: 'Are you sure to do this ?',
                                        message: '',
                                        buttons: [
                                            {
                                                label: 'Yes',
                                                onClick: () => {
                                                    handleDelete(dataObj._id).then(() => {
                                                        navigate('/admin/user')
                                                        window.location.reload(false);
                                                    })
                                                }
                                            },
                                            {
                                                label: 'No',
                                                onClick: () => { }
                                            }
                                        ]
                                    });
                                };
                                return (
                                    <>
                                        <tr>
                                            <td>{dataObj.name}</td>
                                            <td>{dataObj.email}</td>
                                            <td>{dataObj.role}</td>
                                            <td>
                                                <button className='btn' onClick={() => {
                                                    navigate(`edit/${dataObj._id}`)
                                                }}>
                                                    <span className="material-symbols-outlined">
                                                        edit
                                                    </span>
                                                </button>
                                                <button className='btn' onClick={submit} >
                                                    <span className="material-symbols-outlined">
                                                        delete
                                                    </span>
                                                </button>
                                            </td>
                                        </tr>
                                    </>
                                )
                            })}
                        </tbody>
                    </div>
                </div>
            </div>
        </>
    )
}

export default User