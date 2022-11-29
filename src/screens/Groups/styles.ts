import styled from "styled-components/native";

export const Container = styled.SafeAreaView`
  height: 100%;
  width: 100%;
  background-color: ${({theme}) => theme.COLORS.GRAY_600};
  padding: 24px;
  align-items: center;
`;

