import styled from 'styled-components/native';

export const Container = styled.View`
    background: ${({ theme }) => theme.colors.primary.main };
`;

export const Title = styled.Text`
    font-size: ${({ theme }) => theme.text.h1 };
    font-family: ${({ theme }) => theme.font.semibold };
`;