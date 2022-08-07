import styled from 'styled-components/native';

export const Screen = styled.View`
    top: 0;
    width: 100%;
    height: 100%;
    background-color: ${({ theme }) => theme.colors.background.main};
`;

export const ImageBackground = styled.Image`
    top: 0;
    position: absolute; 
    width: ${({ size }) => size}px;
    height: ${({ size }) => size}px;
`;

export const LabelsWrapper = styled.View`
    flex: 1;
    top: ${({ topMargin }) => topMargin}px;
`;

export const GeneralLabelsWrapper = styled.View`
    margin-top: 28px;
`;

export const SectionTitle = styled.Text`
    margin-left: 24px;
    margin-bottom: 24px;
    font-size: ${({ theme }) => theme.text.h3};
    font-family: ${({ theme }) => theme.font.bold};
    color: ${({ theme }) => theme.colors.typography.main};
`;

export const BackgroundRounded = styled.View`
    flex: 1;
    top: 87px;
    position: absolute;
    background: blue;
`;