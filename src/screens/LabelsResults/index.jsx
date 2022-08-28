import Header from '../../components/Header';
import { useState, useEffect } from 'react';
import api_client from '../../config/api_client';
import formatPercentage from '../../utils/formatPercentage';
import { View, Dimensions, FlatList, Text } from "react-native";
import RecognitionLabelsCard from '../../components/ResultsCard/RecognitionLabels';
import { Screen, ImageBackground, LabelsWrapper, GeneralLabelsWrapper, SectionTitle, BackgroundRounded } from "./styled";

const LabelsResults = ({ navigation, route: { params } }) => {
    const windowWidth = Dimensions.get('window').width;
    const topMargin = (62 * windowWidth) / 100;
    const { image, imageName } = params;

    const [labels, setLabels] = useState(null);

    useEffect(() => {
        api_client.post('/detect-object', {
            imageName,
            optionals: {
                maxLabels: 10,
                minConfidence: 10
            }
        }).then((response) => {
            console.warn(response)
            const { data } = response;

            if (data.success) {
                setLabels({
                    newLabels: data.newLabels,
                    general: data.labels
                })
            }
        }).catch((error) => {
            console.warn(error);
        })
    }, [imageName])

    return (
        <Screen>
            <Header navigation={navigation} />
            <ImageBackground
                size={windowWidth}
                source={{ uri: image }}
            />

            {
                labels !== null ? (
                    <LabelsWrapper
                        topMargin={topMargin}
                    >
                        <View>
                            <FlatList
                                data={labels.newLabels}
                                horizontal={true}
                                contentContainerStyle={{ paddingHorizontal: 24 }}
                                ItemSeparatorComponent={() => (<View style={{ width: 18 }}></View>)}
                                renderItem={({ item, index, separators }) => (
                                    <RecognitionLabelsCard
                                        key={index}
                                        label={item.Name}
                                        image={image}
                                        percentage={formatPercentage(item.Confidence)}
                                    />
                                )}
                            />
                        </View>

                        <GeneralLabelsWrapper>
                            <SectionTitle>Rótulos</SectionTitle>
                            <FlatList
                                data={labels.general}
                                horizontal={false}
                                contentContainerStyle={{ paddingHorizontal: 24, paddingBottom: 24 }}
                                ItemSeparatorComponent={() => (<View style={{ height: 16 }}></View>)}
                                renderItem={({ item, index, separators }) => (
                                    <RecognitionLabelsCard
                                        key={index}
                                        label={item.Name}
                                        image={image}
                                        isHorizontal={true}
                                        percentage={formatPercentage(item.Confidence)}
                                    />
                                )}
                            />
                        </GeneralLabelsWrapper>
                    </LabelsWrapper>

                ) : (
                    <Text>Carregando</Text>
                )
            }
        </Screen>
    );
}

export default LabelsResults;