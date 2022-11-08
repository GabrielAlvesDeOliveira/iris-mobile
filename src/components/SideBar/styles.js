import styled from "styled-components/native";

export const SideBarView = styled.View`
  top: 0;
  height: 100%;
  width: 100%;
  flex: 1
  flex-direction: column;
`;

export const SideBarHeader = styled.View`
  top: 20;
  right: 20;
  height: 20px;
  width: 100%;
  align-items: flex-end;
`;

export const SideBarThemeSwitcher = styled.View`
  text-align: left;
  align-items: flex-start;
  top: 70;
  flex-direction: row;
  left: 20
  align-items:center;
  justify-content: space-between;
`;

export const SideBarThemeText = styled.Text`
  font-size: ${({ theme }) => theme.text.h5};
  font-family: ${({ theme }) => theme.font.regular};
  color: ${({ theme }) => theme.colors.typography.main};
  left: 20
`;

