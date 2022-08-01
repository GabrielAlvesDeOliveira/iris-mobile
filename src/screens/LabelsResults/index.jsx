import CameraImage from '../../../assets/images/Camera.png';
import { Text } from "react-native";
import { Screen, ImageBackground } from "./styled";
import RecognitionLabelsCard from '../../components/ResultsCard/RecognitionLabels';

const LabelsResults = () => {
    return (
        <Screen>
            <RecognitionLabelsCard
                image={CameraImage}
                label={'Almofada'}
                percentage={'100%'}
            />
            <Text>Rodrigo</Text>
            <ImageBackground
                source={CameraImage}
            />
        </Screen>
    );
}

export default LabelsResults;