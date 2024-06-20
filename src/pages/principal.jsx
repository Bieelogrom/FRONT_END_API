import CadastroCAxios from '../components/CadastroCAxios.jsx';
import Cadastro from '../components/Cadastro.jsx';
import Login from '../components/Login.jsx';
import { GlobalStyle } from '../components/Style.jsx'

const Principal = () => {
    return (
        <>
        <Cadastro />
        <Login />
        <GlobalStyle />
        </>
    )
}

export default Principal;