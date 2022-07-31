import styled from 'styled-components/native';

export const HeaderWrapper = styled.View`
    width: 100%;
    height: 70px;
    display: flex;
    padding: 0 24px;
    align-items: center;
    flex-direction: row;
    justify-content: space-between;
    background-color: ${({ theme }) => theme.colors.background.main};
`;

export const HeaderButton = styled.Pressable`
    padding: 12px;
    background-color: ${({ theme }) => theme.colors.background.main};
`;