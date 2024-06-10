import { useEffect, useState } from 'react';
import { FormularioWrapper, FormularioLabel, FormularioDiv, FormularioInput, Formolario } from './Style'

function Login() {
    const [emailUsuario, setEmailUsuario] = useState('');
    const [senhaUsuario, setSenhaUsuario] = useState('');

    


    const handleSubmit = (e) => {
        e.preventDefault;
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