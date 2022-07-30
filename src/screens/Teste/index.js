import Header from '../../components/Header'
import RouterBottom from '../../RouterBottom';
import { Container, Title } from "./styles";

const Teste = ({ navigation }) => {
    return (
        <Container>
            <Header
                isHome={true}
                navigation={navigation}
            />
            <RouterBottom />
        </Container>
    );
}

export default Teste;