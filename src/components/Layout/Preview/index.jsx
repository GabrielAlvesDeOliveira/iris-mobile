import CTAButton from '../../Buttons/CTAButton'
import { ButtonGroup, ButtonLabel, PreviewBackground, PreviewContainer } from "./styled";

const Preview = ({
  photo,
  onNextButtonPress,
  onCancelButtonPress,
}) => {
  const { uri } = photo;

  const style = `
    width: 48%;
  `

  return (
    <PreviewContainer>
      <PreviewBackground
        source={{ uri }}
      />

      <ButtonGroup>
        <CTAButton
          style={style}
          color='background'
          onPress={onCancelButtonPress}
        >
          <ButtonLabel color={'subtext'}>Tirar outra</ButtonLabel>
        </CTAButton>

        <CTAButton
          style={style}
          color='secondary'
          onPress={onNextButtonPress}
        >
          <ButtonLabel color={'background'}>Prosseguir</ButtonLabel>
        </CTAButton>
      </ButtonGroup>
    </PreviewContainer>
  );
}

export default Preview;