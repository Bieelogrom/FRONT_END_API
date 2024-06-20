import { useState } from 'react'
import axios from 'axios';

import { FormularioWrapper, FormularioLabel, FormularioDiv, FormularioInput, Formolario } from './Style'

function Cadastro() {
  const [nomeUsuario, setNomeUsuario] = useState('');
  const [sobrenomeUsuario, setSobrenomeUsuario] = useState('');
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
  const [logradouro, setLogradouro] = useState('');
  const [bairro, setBairro] = useState('');
  const [uf, setUf] = useState('');
  const [numero, setNumero] = useState('')


  const realizarCadastro = (nome, sobrenome, senha, email, telefone, cpf, codPostal, complement, data, sexo, nacionalidade, tipo, logradouro, bairro, uf, numero) => {
    axios.post("http://localhost:8080/API/salvarUsuario", {
        nacionalidadeUsuario: nacionalidade,
        tipoDePerfilUsuario: tipo,
        nomeUsuario: nome,
        sobrenomeUsuario: sobrenome,
        emailUsuario: email,
        senhaUsuario: senha,
        cpfUsuario: cpf,
        dataNascimentoUsuario: data,
        sexoUsuario: sexo,
        enderecoDto: {
            cep: codPostal,
            logradouro: logradouro,
            bairro: bairro,
            complemento: complement,
            numero: numero,
            uf: uf,
    }}).then(function (response){
      alert("Cadastro realizado com sucesso!")
    }).catch(function (error){
      alert("Erro")
    })}

    const BuscarDadosCep = (cep) => {
      fetch(`https://viacep.com.br/ws/${cep}/json/`).then(res => res.json()).then(data => {
        setLogradouro(data.logradouro)
        setBairro(data.bairro)
        setUf(data.uf)
        setNumero(data.ddd)
        console.log(data)
      });
    }

  const handleSubmit = (e) => {
    e.preventDefault();
    BuscarDadosCep(cepUsuario)
    realizarCadastro(nomeUsuario,sobrenomeUsuario, senhaUsuario, emailUsuario, telefoneUsuario, cpfUsuario, cepUsuario, complementoUsuario, dataNascimentoUsuario, sexoUsuario, nacionalidadeUsuario, tipoDePerfilUsuario, logradouro, bairro, uf, numero)
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
            <FormularioLabel>Logradouro do Usuário</FormularioLabel>
            <FormularioInput type='text' value={logradouro} mask="00000-000" placeholder="Logradouro"  onChange={(e) => setLogradouro(e.target.value)} />
          </FormularioDiv>
          <FormularioDiv>
            <FormularioLabel>Bairro do Usuário</FormularioLabel>
            <FormularioInput type='text' value={bairro} mask="00000-000" placeholder="Bairro"  onChange={(e) => setBairro(e.target.value)} />
          </FormularioDiv>
          <FormularioDiv>
            <FormularioLabel>UF do Usuário</FormularioLabel>
            <FormularioInput type='text' value={uf} mask="00000-000" placeholder="Unidade Federal"  onChange={(e) => setUf(e.target.value)}/>
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
