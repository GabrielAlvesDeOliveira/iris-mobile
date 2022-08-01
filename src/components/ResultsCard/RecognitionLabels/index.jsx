import {
    TextGroup,
    CardWrapper,
    ObjectFocus,
    LabelResponse,
    ConfidencePercentage
} from './styled';

const RecognitionLabelsCard = ({
    image,
    label,
    percentage
}) => {
    return (
        <CardWrapper>
            <ObjectFocus
                source={image}
            />

            <TextGroup>
                <LabelResponse> {label} </LabelResponse>
                <ConfidencePercentage> {percentage} </ConfidencePercentage>
            </TextGroup>
        </CardWrapper>
    );
}

export default RecognitionLabelsCard;