import React, { useState } from 'react';
import Button from './components/Button';
import Titulo from './components/Titulo';
import { FaDownload, FaReact } from 'react-icons/fa';
import Input from './components/Input';
import Lista from './components/Lista';


const App = () => {

    const [name, setName] = useState("");
    const [password, setPassword] = useState("");

    const [nombres] = useState([
        "Hugo", "Paco", "Luis"
    ])

    const handleClick = (event) => {
        console.log(event.target.innerText);
    }

    const cambiarNombre = (event) => {
        console.log(event.target.innerText);
    }

    return (
        <>
            <div className="container">
                <div className="row">
                    <div className="col-md-12 pb-3">
                        <Titulo text={"Practica de Props React and Hooks"} />
                    </div>
                    <div className="col-md-12 pb-3">
                        {/* Implementacion o Uso */}
                        <Button onClick={handleClick} className={"btn btn-primary mx-1"} text={"Click Me 1"} icon={<FaDownload />} />
                        <Button onClick={cambiarNombre} className={"btn btn-warning mx-1"} text={"Click Me 2"} icon={<FaReact />} />
                    </div>
                    <div className="col-md-12 pb-3">
                        <Input type={"text"} id={'name'} name={'name'} value={name} placeholder={'Insert Name'} onChange={(event) => setName(event.target.value)} className={"form-control"} />
                    </div>
                    <div className="col-md-12 pb-3">
                        <Input type={"password"} id={'password'} name={'password'} value={password} placeholder={'Insert Password'} onChange={(event) => setPassword(event.target.value)} className={"form-control"} />
                    </div>
                    <div className="col-md-12 pb-3">
                        <Lista nombres={nombres} name={name} />
                    </div>
                </div>
            </div>
        </>
    )
}

export default App;