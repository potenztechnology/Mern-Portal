import axios from 'axios'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

function AddData() {

    const navigate = useNavigate()
    const [name, setName] = useState('')
    const [role, setRole] = useState('')
    const [file, setFile] = useState(null);

    const handleAdd = async () => {
        try {
            await axios.post('http://localhost:9000/name/add', {
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

    const handleAddFile = async () => {
        try {
            const formData = new FormData();
            formData.append('File', file);
            await axios.post('http://localhost:9000/name/add', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
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
                    <h3 className='p-3'>Add Data</h3>
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
                            <label className='form-label'>Role:-</label>
                            <input type="text" className='form-control' value={role} onChange={(e) => setRole(e.target.value)} />
                        </div>
                    </div>

                </div>
                <div className='card-footer d-flex justify-content-between'>
                    <div></div>
                    <button className='btn btn-primary' onClick={handleAdd}>Submit</button>
                    <div>

                        <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
                            Import .xlsx file
                        </button>

                        <div class="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                            <div class="modal-dialog">
                                <div class="modal-content">
                                    <div class="modal-header">
                                        <h5 class="modal-title" id="staticBackdropLabel">Modal title</h5>
                                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                    </div>
                                    <div class="modal-body">
                                        <input type="file" className='form-control' onChange={(e) => setFile(e.target.files[0])} accept=".xlsx, application/vnd.openxmlformats-officedocument.spreadsheetml.sheet, application/vnd.ms-excel" />
                                    </div>
                                    <div class="modal-footer">
                                        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                        <button type="button" class="btn btn-primary" data-bs-dismiss="modal" onClick={handleAddFile}>Upload</button>
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

export default AddData