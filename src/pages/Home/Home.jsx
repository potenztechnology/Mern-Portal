import React, { useEffect } from 'react'
import './Home.css'

function Home() {

    useEffect(() => {
        document.title = "Home"
    }, [])

    return (
        <>
            <section className='mainComp container pb-5'>
                <h1>Job Portal</h1>
            </section>
        </>
    )
}

export default Home           