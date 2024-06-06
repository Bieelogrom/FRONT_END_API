import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { FormularioWrapper, FormularioLabel, FormularioDiv, FormularioInput, Formolario } from './Style'

function App() {
  const [nomeUsuario, setNomeUsuario] = useState('');
  const [senhaUsuario, setSenhaUsuario] = useState('');
  const [emailUsuario, setEmailUsuario] = useState('');
  const [telefoneUsuario, setTelefoneUsuario] = useState('');
  const [cpfUsuario, setCpfUsuario] = useState('');
  const [cepUsuario, setCepUsuario] = useState('');
  const [complementoUsuario, setComplementoUsuario] = useState('');
  const [dataNascimentoUsuario, setDataNascimentoUsuario] = useState('');
  const [sexoUsuario, setSexoUsuario] = useState('');
  const [nacionalidadeUsuario, setNacionalidadeUsuario] = useState('');
  const [tipoDePerfilUsuario, setTipoDePerfilUsuario] = useState('');

  const realizarCadastro = async (nomeUsuario, senhaUsuario, emailUsuario, telefoneUsuario, cpfUsuario, cepUsuario, complementoUsuario, dataNascimentoUsuario, sexoUsuario, nacionalidadeUsuario, tipoDePerfilUsuario) => {
    await fetch('http://localhost:8080/api/v1/usuario', {
      method: 'POST',
      body: JSON.stringify({
        nomeUsuario: nomeUsuario,
        senhaUsuario: senhaUsuario,
        emailUsuario: emailUsuario,
        telefoneUsuario: telefoneUsuario,
        cpfUsuario: cpfUsuario,
        cepUsuario: cepUsuario,
        complementoUsuario: complementoUsuario,
        dataNascimentoUsuario: dataNascimentoUsuario,
        sexoUsuario: sexoUsuario,
        nacionalidadeUsuario: nacionalidadeUsuario,
        tipoDePerfilUsuario: tipoDePerfilUsuario
      }),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'POST,PATCH,OPTIONS'
      },
    })
      .then((response) => response.json())
      .then((data) => {
        alert("Funcionou");
        setNomeUsuario('');
        setSenhaUsuario('');
        setEmailUsuario('');
        setTelefoneUsuario('');
        setCpfUsuario('');
        setCepUsuario('');
        setComplementoUsuario('');
        setDataNascimentoUsuario('');
        setSexoUsuario('');
        setNacionalidadeUsuario('');
        setTipoDePerfilUsuario('');
      })
      .catch((err) => {
        console.log(err.message)
      })
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    realizarCadastro(nomeUsuario, senhaUsuario, emailUsuario, telefoneUsuario, cpfUsuario, cepUsuario, complementoUsuario, dataNascimentoUsuario, sexoUsuario, nacionalidadeUsuario, tipoDePerfilUsuario)
  }

  return (
    <>
      <Formolario method='post' onSubmit={handleSubmit}>
        <FormularioWrapper>
          <FormularioDiv>
            <FormularioLabel>Nome do Usuário</FormularioLabel>
            <FormularioInput type='text' value={nomeUsuario} required onChange={(e) => setNomeUsuario(e.target.value)} />
          </FormularioDiv>
          <FormularioDiv>
            <FormularioLabel>Email do Usuário</FormularioLabel>
            <FormularioInput type='email' value={emailUsuario} required onChange={(e) => setEmailUsuario(e.target.value)} />
          </FormularioDiv>
          <FormularioDiv>
            <FormularioLabel>Senha do Usuário</FormularioLabel>
            <FormularioInput type='password' value={senhaUsuario} required onChange={(e) => setSenhaUsuario(e.target.value)} />
          </FormularioDiv>
          <FormularioDiv>
            <FormularioLabel>Telefone do Usuário</FormularioLabel>
            <FormularioInput type='text' value={telefoneUsuario} required onChange={(e) => setTelefoneUsuario(e.target.value)} />
          </FormularioDiv>
          <FormularioDiv>
            <FormularioLabel>Identidade do Usuário</FormularioLabel>
            <FormularioInput type='text' value={cpfUsuario} required onChange={(e) => setCpfUsuario(e.target.value)} />
          </FormularioDiv>
          <FormularioDiv>
            <FormularioLabel>CEP do Usuário</FormularioLabel>
            <FormularioInput type='text' value={cepUsuario} required onChange={(e) => setCepUsuario(e.target.value)} />
          </FormularioDiv>
          <FormularioDiv>
            <FormularioLabel>Complemento do Usuário</FormularioLabel>
            <FormularioInput type='text' value={complementoUsuario} required onChange={(e) => setComplementoUsuario(e.target.value)} />
          </FormularioDiv>
          <FormularioDiv>
            <FormularioLabel>Data de Nascimento do Usuário</FormularioLabel>
            <FormularioInput type='date' value={dataNascimentoUsuario} required onChange={(e) => setDataNascimentoUsuario(e.target.value)} />
          </FormularioDiv>
          <FormularioDiv>
            <FormularioLabel>Sexo do Usuário</FormularioLabel>
            <select value={sexoUsuario} onChange={e => setSexoUsuario(e.target.value)}>
              <option value="M">Masculino</option>
              <option value="F">Feminino</option>
            </select>
          </FormularioDiv>
          <FormularioDiv>
            <FormularioLabel>Nacionalidade do Usuário</FormularioLabel>
            <select value={nacionalidadeUsuario} onChange={e => setNacionalidadeUsuario(e.target.value)}>
              <option value="BR">Brasileiro</option>
              <option value="AR">Argentino</option>
            </select>
          </FormularioDiv>
          <FormularioDiv>
            <FormularioLabel>Tipo de Perfil</FormularioLabel>
            <select value={tipoDePerfilUsuario} onChange={e => setTipoDePerfilUsuario}>
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
