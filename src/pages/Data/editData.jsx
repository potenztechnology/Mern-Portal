import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

function EditData() {
    const { id } = useParams()
    const navigate = useNavigate()
    const [name, setName] = useState('')
    const [role, setRole] = useState('')

    const fetchData = async () => {
        try {
            const response = await axios.get(`http://localhost:9000/name/details/${id}`)
            setName(response.data.name)
            setRole(response.data.role)
        } catch (error) {
            console.log(error);
        }
    }

    const handleUpdate = async () => {
        try {
            await axios.put(`http://localhost:9000/name/update/${id}`, {
                "name": name,
                "role": role
            }).then((response) => {
                console.log(response);
                navigate(-1)
            }).catch((err) => console.log(err))
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        fetchData()
    }, [])

    return (
        <>
            <div className='card container'>
                <div className='card-header d-flex justify-content-between'>
                    <h3 className=''>Edit Data</h3>
                    <button className='btn' onClick={() => navigate(-1)}> <span className="material-symbols-outlined">
                        close
                    </span></button>
                </div>
                <div className='card-body'>

                    <div className="row">
                        <div className='col-md-4 mt-4'>
                            <label className='form-label'>Name:-</label>
                            <input type='text' className='form-control' value={name} onChange={(e) => setName(e.target.value)} />
                        </div>
                        <div className='col-md-4 mt-4'>
                            <label className='form-label'>Role:-</label>
                            <input type='text' className='form-control' value={role} onChange={(e) => setRole(e.target.value)} />
                        </div>
                    </div>

                </div>
                <div className='card-footer d-flex justify-content-between'>
                    <div></div>
                    <button className='btn btn-primary' onClick={handleUpdate}>Submit</button>
                    <div></div>
                </div>
            </div>
        </>
    )
}

export default EditData