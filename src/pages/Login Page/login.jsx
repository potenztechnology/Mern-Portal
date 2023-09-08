import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

function Login() {
    const navigate = useNavigate()
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    useEffect(() => {
        const token = JSON.parse(localStorage.getItem('token'))
        if (token) {
            navigate('/admin')
        }
    }, [navigate])


    const SubmitForm = async () => {
        try {
            await axios.post('http://localhost:9000/auth/login', {
                email: email,
                password: password
            }).then((response) => {
                console.log(response.data.Token);
                const token = response.data.Token
                localStorage.setItem('token', JSON.stringify(token))
            }).then(async () => {
                const token = JSON.parse(localStorage.getItem('token'))
                console.log(token);
                const response = await axios.post('http://localhost:9000/auth/profile', {}, {
                    headers: {
                        "authorization": token
                    }
                })
                localStorage.setItem('User', JSON.stringify(response.data.User))
                navigate('/admin')

            }).catch((err) => {
                alert(err.response.data.Error)
            })
        } catch (error) {
            console.log(error);
        }
    }


    return (
        <>
            <section className="vh-100">
                <div className="container-fluid h-custom">
                    <div className="row d-flex justify-content-center align-items-center h-100">
                        <div className="col-md-9 col-lg-6 col-xl-5">
                            <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp"
                                className="img-fluid" alt="Sample" />
                        </div>
                        <div className="col-md-8 col-lg-6 col-xl-4 offset-xl-1">
                            <form>
                                <div className="form-outline mb-4">
                                    <label className="form-label" htmlFor="form3Example3">Email address</label>
                                    <input type="email" id="form3Example3" className="form-control form-control-lg"
                                        placeholder="Enter a valid email address" onChange={(e) => setEmail(e.target.value)} />

                                </div>

                                <div className="form-outline mb-3">
                                    <label className="form-label" htmlFor="form3Example4">Password</label>
                                    <input type="password" id="form3Example4" className="form-control form-control-lg"
                                        placeholder="Enter password" onChange={(e) => setPassword(e.target.value)} />

                                </div>
                                <div className="text-center text-lg-start mt-4 pt-2">
                                    <button type="button" className="btn btn-primary btn-lg" onClick={SubmitForm}
                                    >Login</button>
                                </div>

                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Login