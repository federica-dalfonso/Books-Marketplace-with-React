import { Alert } from 'react-bootstrap';
import './WelcomeAlert.css'
import { useState, useEffect } from 'react';

export default function WelcomeAlert () {
    //gestione scomparsa alert dopo 2s:    
    const [welcome, setWelcome] = useState(true);

    useEffect(() => {
        setTimeout(() => { setWelcome(false) }, 2000)
        }, []);    

    return (
    <>
    {welcome && 
    <div className='d-flex justify-content-center mt-4 position-up'>
        <Alert className='welcome-message d-flex flex-column align-items-center'>
            <span className='fs-6 mb-4'>Welcome to my first React App!</span>
                <h1 className='text-uppercase'>epibooks</h1>
        </Alert>
    </div>}
    </>
    )
}
    