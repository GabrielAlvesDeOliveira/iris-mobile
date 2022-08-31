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
    percentage,
    isHorizontal = false
}) => {
    const size = !isHorizontal ? '120px' : '80px';
    const corner = !isHorizontal ? 'bottom' : 'right';
    const direction = !isHorizontal ? 'column' : 'row';

    return (
        <CardWrapper
            direction={direction}
        >
            <ObjectFocus
                size={size}
                source={{ uri: image }}
                corner={corner}
            />

            <TextGroup>
                <LabelResponse> {label} </LabelResponse>
                <ConfidencePercentage> {percentage} </ConfidencePercentage>
            </TextGroup>
        </CardWrapper>
    );
}

export default RecognitionLabelsCard;