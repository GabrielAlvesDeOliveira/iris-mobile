import styled from 'styled-components/native';

export const HeaderWrapper = styled.View`
    top: 0;
    width: 100%;
    height: 70px;
    display: flex;
    z-index: 999999;
    padding: 0 24px;
    position: absolute;     
    align-items: center;
    flex-direction: row;
    justify-content: space-between;
    background-color: ${({ theme }) => theme.colors.background.main};
`;

export const HeaderButton = styled.Pressable`
    padding: 12px;
    background-color: ${({ theme }) => theme.colors.background.main};
`;