import Header from '../../components/Header';
import CameraImage from '../../../assets/images/CameraPreview.png';
import { View, Dimensions, FlatList } from "react-native";
import { Screen, ImageBackground, LabelsWrapper, GeneralLabelsWrapper, SectionTitle, BackgroundRounded } from "./styled";
import RecognitionLabelsCard from '../../components/ResultsCard/RecognitionLabels';

const data = [{
    key: 1,
    label: 'Almofada',
    percentage: '100%'
}, {
    key: 2,
    label: 'Vaso sanitário',
    percentage: '100%'
},
{
    key: 3,
    label: 'Cabiceira sem graça',
    percentage: '100%'
}]

const LabelsResults = ({ navigation }) => {
    const windowWidth = Dimensions.get('window').width;
    const topMargin = (62 * windowWidth) / 100;

    return (
        <Screen>
            <Header navigation={navigation} />
            <ImageBackground
                size={windowWidth}
                source={CameraImage}
            />

            <LabelsWrapper
                topMargin={topMargin}
            >
                <View>
                    <FlatList
                        data={data}
                        horizontal={true}
                        contentContainerStyle={{ paddingHorizontal: 24 }}
                        ItemSeparatorComponent={() => (<View style={{ width: 18 }}></View>)}
                        renderItem={({ item, index, separators }) => (
                            <RecognitionLabelsCard
                                key={index}
                                label={item.label}
                                image={CameraImage}
                                percentage={item.percentage}
                            />
                        )}
                    />
                </View>

                <GeneralLabelsWrapper>
                    <SectionTitle>Rótulos</SectionTitle>
                    <FlatList
                        data={data}
                        horizontal={false}
                        contentContainerStyle={{ paddingHorizontal: 24, paddingBottom: 24 }}
                        ItemSeparatorComponent={() => (<View style={{ height: 16 }}></View>)}
                        renderItem={({ item, index, separators }) => (
                            <RecognitionLabelsCard
                                key={index}
                                label={item.label}
                                image={CameraImage}
                                isHorizontal={true}
                                percentage={item.percentage}
                            />
                        )}
                    />
                </GeneralLabelsWrapper>
            </LabelsWrapper>
        </Screen>
    );
}

export default LabelsResults;