import { ButtonBackground } from "./styled";
import { useTheme } from "styled-components";
import { MotiView, useAnimationState } from "moti";

const CTAButton = ({
  onPress,
  children,
  style = '',
  color = 'primary',
}) => {
  const theme = useTheme();

  const toggleAnimationState = useAnimationState({
    default: {
      backgroundColor: theme.colors[color].main,
    },
    hover: {
      backgroundColor: theme.colors[color].variant,
    }
  })

  function handlePressIn() {
    toggleAnimationState.transitionTo('hover');
  }

  function handlePressOut() {
    toggleAnimationState.transitionTo('default');
  }

  return (
    <ButtonBackground
      style={style}
      onPress={onPress}
      onPressIn={handlePressIn}
      onPressOut={handlePressOut}
    >
      <MotiView
        style={{
          flex: 1,
          height: 58,
          width: '100%',
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: theme.colors[color].main
        }}
        transition={{
          type: 'spring',
        }}
        state={toggleAnimationState}
      >
        {children}
      </MotiView>
    </ButtonBackground>
  )
}

export default CTAButton;