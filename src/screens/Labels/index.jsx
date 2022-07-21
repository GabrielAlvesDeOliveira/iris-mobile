import styles from "./styles";
import { View, Text, Image, SectionList, SafeAreaView, ScrollView } from "react-native";
import LabelItem from "../../components/labelItem";
import Header from "../../components/header";

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
            <Header path="Home" navigation={navigation} />
            <View style={styles.scrollEl}>
                <View style={styles.screenBody}>
                    <Image 
                        source={{uri: 'https://images.unsplash.com/photo-1531379410502-63bfe8cdaf6f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8aGFuZHxlbnwwfHwwfHw%3D&w=1000&q=80'}} 
                        style={styles.imageLabelled}
                    />
                    <Text style={styles.screenTitle}>
                        Rótulos
                    </Text>
                    <SectionList
                        sections={labelsList}
                        showsVerticalScrollIndicator={false}
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