import './NotFound.css';
import { ThemeContext } from "../context/ThemeContextProvider";
import { useContext } from 'react';


export default function NotFound () {

    const { theme } = useContext(ThemeContext);

    return (
        <div className='container-not-found text-light d-flex align-intems-center justify-content-center'>
            <div className='mt-5'>
                <img src="" alt="" />
                <div>
                    <h2>Ci dispiace, ma questa storia non è ancora stata scritta...</h2>
                    <h1>404 Pagina non trovata</h1>
                </div>
            </div>            
        </div>
    )
}