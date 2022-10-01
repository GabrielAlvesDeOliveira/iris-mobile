import styled from "styled-components/native";

export const PressableContainer = styled.Pressable`
  overflow: hidden;
  border-radius: 16px;
  ${({ style }) => style}
`;