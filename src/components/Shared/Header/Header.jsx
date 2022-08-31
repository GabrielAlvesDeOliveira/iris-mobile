import Logo from '../../Logo/Logo'
import { List } from "phosphor-react-native";
import { ArrowLeft } from 'phosphor-react-native';
import { HeaderWrapper, HeaderButton } from "./styles";
import { TouchableOpacity } from "react-native";

const Header = ({
    navigation,
    isHome = false,
    isTransparent = false,
    previousScreen = 'Home',
}) => {
    return (
        <HeaderWrapper>
            {
                isHome ? (
                    <TouchableOpacity onPress={() => navigation.navigate('Start')}>
                        <Logo />
                    </TouchableOpacity>
                ) : (
                    <HeaderButton
                        onPress={() => {
                            navigation.navigate(previousScreen)
                        }}
                    >
                        <ArrowLeft
                            size={32}
                            weight={'regular'}
                            color={'#000000'}
                        />
                    </HeaderButton>
                )
            }

            <HeaderButton
                onPress={() => {
                    console.log('sim')
                }}
            >
                <List
                    size={36}
                    weight="fill"
                    color="#000000"
                />
            </HeaderButton>
        </HeaderWrapper>
    );
}

export default Header;