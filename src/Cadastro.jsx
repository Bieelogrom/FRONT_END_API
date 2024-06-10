import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'

import { FormularioWrapper, FormularioLabel, FormularioDiv, FormularioInput, Formolario } from './Style'

function Cadastro() {
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
            <FormularioInput  type='text' placeholder="Digite seu nome completo" value={nomeUsuario} required onChange={(e) => setNomeUsuario(e.target.value)} />
          </FormularioDiv>
          <FormularioDiv>
            <FormularioLabel>Email do Usuário</FormularioLabel>
            <FormularioInput type='email' placeholder="Digite seu email" value={emailUsuario} required onChange={(e) => setEmailUsuario(e.target.value)} />
          </FormularioDiv>
          <FormularioDiv>
            <FormularioLabel>Senha do Usuário</FormularioLabel>
            <FormularioInput type='password' placeholder="Digite sua senha" value={senhaUsuario} required onChange={(e) => setSenhaUsuario(e.target.value)} />
          </FormularioDiv>
          <FormularioDiv>
            <FormularioLabel>Telefone do Usuário</FormularioLabel>
            <FormularioInput mask="(00)00000-0000" placeholder="Digite seu contato" type='text' value={telefoneUsuario} required onChange={(e) => setTelefoneUsuario(e.target.value)} />
          </FormularioDiv>
          <FormularioDiv>
            <FormularioLabel>Identidade do Usuário</FormularioLabel>
            <FormularioInput mask="000.000.000-00" placeholder="Digite seu CPF" type='text' value={cpfUsuario} required onChange={(e) => setCpfUsuario(e.target.value)} />
          </FormularioDiv>
          <FormularioDiv>
            <FormularioLabel>CEP do Usuário</FormularioLabel>
            <FormularioInput type='text' value={cepUsuario} mask="00000-000" placeholder="Digite seu cep" required onChange={(e) => setCepUsuario(e.target.value)} />
          </FormularioDiv>
          <FormularioDiv>
            <FormularioLabel>Complemento do Usuário</FormularioLabel>
            <FormularioInput type='text' placeholder="Digite seu complemento" value={complementoUsuario} required onChange={(e) => setComplementoUsuario(e.target.value)} />
          </FormularioDiv>
          <FormularioDiv>
            <FormularioLabel>Data de Nascimento do Usuário</FormularioLabel>
            <FormularioInput type='date' value={dataNascimentoUsuario} required onChange={(e) => setDataNascimentoUsuario(e.target.value)} />
          </FormularioDiv>
          <FormularioDiv>
            <FormularioLabel>Sexo do Usuário</FormularioLabel>
            <select value={sexoUsuario} required onChange={e => setSexoUsuario(e.target.value)}>
              <option value="">Selecione algum tipo</option>
              <option value="M">Masculino</option>
              <option value="F">Feminino</option>
            </select>
          </FormularioDiv>
          <FormularioDiv>
            <FormularioLabel>Nacionalidade do Usuário</FormularioLabel>
            <select value={nacionalidadeUsuario} required onChange={e => setNacionalidadeUsuario(e.target.value)}>
              <option value="">Selecione algum tipo</option>
              <option value="BR">Brasileiro</option>
              <option value="AR">Argentino</option>
            </select>
          </FormularioDiv>
          <FormularioDiv>
            <FormularioLabel>Tipo de Perfil</FormularioLabel>
            <select value={tipoDePerfilUsuario} required onChange={e => setTipoDePerfilUsuario(e.target.value)}>
              <option value="">Selecione algum tipo</option>
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

export default Cadastro
