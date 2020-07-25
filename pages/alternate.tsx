import styled from "styled-components/native";
import Layout from "../app/features/layout/Layout";
const LayoutIndex = styled.View`
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme }) => theme.delete};
`;
const Text = styled.Text`
  font-size: 1.6rem;
`;
export default function Alternate() {
  return (
    <Layout>
      <LayoutIndex>
        <Text accessibilityRole="header">Alternate Page</Text>
      </LayoutIndex>
    </Layout>
  );
}
