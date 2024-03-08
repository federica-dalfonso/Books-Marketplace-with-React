import { Alert } from 'react-bootstrap';
import './WelcomeAlert.css'

export default function WelcomeAlert () {
    return (
        <div className='d-flex justify-content-center mt-4'>
            <Alert className='welcome-message d-flex flex-column align-items-center'>
                <span className='fs-6 mb-4'>Welcome to my first React App!</span>
                <h1 className='text-uppercase'>epibooks</h1>
            </Alert>
        </div>
    )
}
    