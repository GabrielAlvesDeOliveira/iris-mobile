import { StyleSheet } from "react-native";
import styled from "styled-components/native";

export const ButtonBackground = styled.Pressable`
  height: 58px;
  overflow: hidden;
  border-radius: 24px;
  ${({ style }) => style}
`;