import { Container } from "./styles";
import Header from '../../components/header';
import NavBar from '../../components/NavBar';

const Teste = ({ navigation }) => {
    return (
        <Container>
            <Header
                isHome={true}
                navigation={navigation}
            />
            <NavBar />
        </Container>
    );
}

export default Teste;