import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { FormularioWrapper, FormularioLabel, FormularioDiv, FormularioInput, Formolario } from './Style'


const realizarCadastro = () => {
  
}


function App() {
  return (
    <>
      <Formolario action="" method='post'>
        <FormularioWrapper>
          <FormularioDiv>
            <FormularioLabel>Nome do Usuário</FormularioLabel>
            <FormularioInput type='text' required />
          </FormularioDiv>
          <FormularioDiv>
            <FormularioLabel>Email do Usuário</FormularioLabel>
            <FormularioInput type='email' required />
          </FormularioDiv>
          <FormularioDiv>
            <FormularioLabel>Senha do Usuário</FormularioLabel>
            <FormularioInput type='password' required />
          </FormularioDiv>
          <FormularioDiv>
            <FormularioLabel>Telefone do Usuário</FormularioLabel>
            <FormularioInput type='text' required />
          </FormularioDiv>
          <FormularioDiv>
            <FormularioLabel>Identidade do Usuário</FormularioLabel>
            <FormularioInput type='text' required />
          </FormularioDiv>
          <FormularioDiv>
            <FormularioLabel>CEP do Usuário</FormularioLabel>
            <FormularioInput type='text' required />
          </FormularioDiv>
          <FormularioDiv>
            <FormularioLabel>Complemento do Usuário</FormularioLabel>
            <FormularioInput type='text' required />
          </FormularioDiv>
          <FormularioDiv>
            <FormularioLabel>Data de Nascimento do Usuário</FormularioLabel>
            <FormularioInput type='date' required />
          </FormularioDiv>
          <FormularioDiv>
            <FormularioLabel>Sexo do Usuário</FormularioLabel>
            <select name="" id="">
              <option value="M">Masculino</option>
              <option value="F">Feminino</option>
            </select>
          </FormularioDiv>
          <FormularioDiv>
            <FormularioLabel>Nacionalidade do Usuário</FormularioLabel>
            <select name="" id="">
              <option value="BR">Brasileiro</option>
              <option value="AR">Argentino</option>
            </select>
          </FormularioDiv>
          <FormularioDiv>
            <FormularioLabel>Tipo de Perfil</FormularioLabel>
            <select name="" id="">
              <option value="1">Cliente</option>
              <option value="2">Prestador de Serviços</option>
            </select>
          </FormularioDiv>
          <FormularioDiv>
            <button type='submit'>Cadastrar</button>
          </FormularioDiv>
        </FormularioWrapper>
      </Formolario>

    </>
  )
}

export default App
