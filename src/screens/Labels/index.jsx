import styles from "./styles";
import { View, Text, Image, SectionList, SafeAreaView } from "react-native";
import Icon from 'react-native-vector-icons/AntDesign'
import { TouchableHighlight } from "react-native";
import LabelItem from "../../components/labelItem";

const labelsList = [
    {
        title: 'Visão Geral',
        data: [
            {
                label: 'Relógio',
                percentage: '99%',
            },
            {
                label: 'Despertador',
                percentage: '88%',
            },
            {
                label: 'Alarme',
                percentage: '75%',
            },
        ]
    }, {
        title: 'Especifícos',
        data: [
            {
                label: 'Relógio',
                percentage: '99%',
            },
            {
                label: 'Despertador',
                percentage: '88%',
            },
            {
                label: 'Alarme',
                percentage: '75%',
            },
        ]
    }
]

const LabelsPage = ({ navigation }) => {
    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.header}>
                <TouchableHighlight
                    style={styles.button}
                    onPress={() =>
                        navigation.navigate('Home', { })
                    }
                >
                    <View style={styles.buttonContent}>
                        <Icon name='arrowleft' color={'black'} size={30} />
                        <Text style={styles.headerText}>
                            Voltar
                        </Text>
                    </View>
                </TouchableHighlight>
            </View>

            <View style={styles.screenBody}>
                <View>
                    <Image 
                        source={{uri: 'https://images.unsplash.com/photo-1531379410502-63bfe8cdaf6f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8aGFuZHxlbnwwfHwwfHw%3D&w=1000&q=80'}} 
                        style={styles.imageLabelled}
                    />
                    <Text style={styles.screenTitle}>
                        Rótulos
                    </Text>

                    <SectionList
                        sections={labelsList}
                        stickySectionHeadersEnabled={false}
                        renderItem={({ item }) => <LabelItem label={item.label} percentage={item.percentage}/>}
                        renderSectionHeader={({section}) => <Text style={styles.sectionHeader}>{section.title}</Text>}
                        keyExtractor={(item, index) => index}
                    />
                </View>
            </View>
        </SafeAreaView>
    );
}

export default LabelsPage;