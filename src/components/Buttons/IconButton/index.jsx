import { useTheme } from "styled-components";
import { PressableContainer } from "./styled";
import { MotiView, useAnimationState } from "moti";
import { ArrowLeft, Image, List } from 'phosphor-react-native';

const IconButton = ({ onPress, iconName, backgroundColor, size = 58, style = '' }) => {
  const theme = useTheme();

  const color = backgroundColor !== 'transparent'
    && backgroundColor !== 'background'
    ? 'background'
    : 'typography';

  const Icons = {
    List: <List color={theme.colors[color].main} size={40} weight='bold' />,
    Image: <Image color={theme.colors[color].main} size={40} weight='bold' />,
    ArrowLeft: <ArrowLeft color={theme.colors[color].main} size={40} weight='bold' />,
  }

  const toggleAnimationState = useAnimationState({
    default: {
      backgroundColor: theme.colors[backgroundColor].main
    },
    hover: {
      backgroundColor: theme.colors[backgroundColor].variant
    }
  });

  function handlePressIn() {
    toggleAnimationState.transitionTo('hover');
  }

  function handlePressOut() {
    toggleAnimationState.transitionTo('default');
  }

  return (
    <PressableContainer
      style={style}
      onPress={onPress}
      onPressIn={handlePressIn}
      onPressOut={handlePressOut}
    >
      <MotiView
        style={{
          flex: 1,
          width: size,
          height: size,
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: theme.colors[backgroundColor].main
        }}
        transition={{
          type: 'spring'
        }}
        state={toggleAnimationState}
      >
        {Icons[iconName]}
      </MotiView>
    </PressableContainer>
  );
}

export default IconButton;