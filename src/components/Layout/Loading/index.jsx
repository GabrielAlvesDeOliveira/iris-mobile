import { MotiView } from "moti";
import LoadingSVG from "../../Images/loading";
import { Explanation, LoadingIndicatorContainer, ScreenContainer, TextWrapper, Title } from "./styled";

const LoadingIndicator = () => {
  return (
    <LoadingIndicatorContainer>
      <MotiView
        from={{
          width: 140,
          height: 140,
          borderWidth: 0,
          borderRadius: 140 / 2,
        }}
        animate={{
          width: 140 + 20,
          height: 140 + 20,
          borderWidth: 140 / 10,
          borderRadius: (140 + 20) / 2,
        }}
        transition={{
          type: 'timing',
          duration: 1000,
          loop: true,
        }}
        style={{
          width: 140,
          height: 140,
          borderRadius: 140 / 2,
          borderWidth: 140 / 10,
          borderColor: '#A17EFF',
        }}
      />
    </LoadingIndicatorContainer>
  );
}

const Loading = () => {
  return (
    <ScreenContainer>
      <LoadingSVG />
      <TextWrapper>
        <Title>Carregando...</Title>
        <Explanation>Calma calma, estamos conectando ao nosso servidor. Em alguns segundos você verá os resultados de sua pesquisa.</Explanation>
      </TextWrapper>
      <LoadingIndicator />
    </ScreenContainer>
  );
}

export default Loading;