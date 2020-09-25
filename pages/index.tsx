import styled from "styled-components/native";
import Hoverable from "../app/utils/hover/Hoverable";
import { observer } from "mobx-react-lite";
import Layout from "../app/features/layout/Layout";
import { lightStore } from "../app/store/lightStore";

interface IStyle {
  ishover?: boolean;
}
const LayoutIndex = styled.View`
  background-color: ${({ theme }) => theme.color3};
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Text = styled.Text`
  font-size: 1.6rem;
  background-color: ${(props: IStyle) => (props.ishover ? "purple" : "#39f")};
  cursor: pointer;
  color: ${({ theme }) => theme.primary};
`;

const index = () => {
  const { openLight, setOpenLight } = lightStore;
  return (
    <Layout>
      <LayoutIndex>
        <Hoverable>
          {(hover: boolean) => (
            <Text
              ishover={hover ? true : undefined}
              onPress={() => setOpenLight(!openLight)}
            >
              Hello World
            </Text>
          )}
        </Hoverable>
        {openLight && <Text>BUKAK siniiiiii</Text>}
      </LayoutIndex>
    </Layout>
  );
};
export default observer(index);
