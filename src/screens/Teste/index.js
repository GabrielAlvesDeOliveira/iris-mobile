import Header from '../../components/Header'
import RouterBottom from '../../RouterBottom';
import { Container, Title } from "./styles";

const Teste = ({ navigation }) => {
    return (
        <Container>
            <Header
                navigation={navigation}
            />
            <Title>Teste</Title>
            <RouterBottom />
        </Container>
    );
}

export default Teste;