import { useEffect, useState } from 'react';
import { FormularioWrapper, FormularioLabel, FormularioDiv, FormularioInput, Formolario } from './Style'
import axios from 'axios'

function Login() {
    const [emailUsuario, setEmailUsuario] = useState('');
    const [senhaUsuario, setSenhaUsuario] = useState('');

    const realizarCadastro = (emailUsuario, senhaUsuario) => {
        axios.post("http://localhost:8080/API/login", {
            email: `${emailUsuario}`,
            senha: `${senhaUsuario}`
        }).then(function (response) {
            alert(response.data)
        })
        .catch(function (error) {
                console.log(error)
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        realizarCadastro(emailUsuario, senhaUsuario)
    }

    return (
        <>
            <Formolario onSubmit={handleSubmit}>
                <FormularioWrapper>
                    <FormularioDiv>
                        <FormularioLabel>Email do Usuário</FormularioLabel>
                        <FormularioInput type='email' value={emailUsuario} required onChange={(e) => setEmailUsuario(e.target.value)} />
                    </FormularioDiv>
                    <FormularioDiv>
                        <FormularioLabel>Senha do Usuário</FormularioLabel>
                        <FormularioInput type='password' value={senhaUsuario} required onChange={(e) => setSenhaUsuario(e.target.value)} />
                    </FormularioDiv>
                    <FormularioDiv>
                        <button type='submit'>Login</button>
                    </FormularioDiv>
                </FormularioWrapper>

            </Formolario>
        </>
    );
}

export default Login