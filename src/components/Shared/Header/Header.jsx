import Logo from '../../Logo/Logo'
import { List } from "phosphor-react-native";
import { ArrowLeft } from 'phosphor-react-native';
import { HeaderWrapper, HeaderButton } from "./styles";
import { TouchableOpacity, Modal, Text } from "react-native";
import { useState } from 'react';
import SideBar from './../../SideBar/index';

const Header = ({
    navigation,
    isHome = false,
    isTransparent = false,
    previousScreen = 'Home',
}) => {

    const [ isVisible, setIsVisible ] = useState(false);

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
                onPress={() => { setIsVisible(!isVisible) }}
            >
                <List
                    size={36}
                    weight="fill"
                    color="#000000"
                />
            </HeaderButton>
            <Modal visible={isVisible} >
                <SideBar setVisible={setIsVisible} visible={isVisible}/>
            </Modal>
        </HeaderWrapper>
    );
}

export default Header;