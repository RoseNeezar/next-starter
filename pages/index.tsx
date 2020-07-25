import styled from "styled-components/native";
import Hoverable from "../app/utils/hover/Hoverable";
import { observer } from "mobx-react-lite";
import { useContext } from "react";
import { RootStoreContext } from "../app/store/rootStore";
import Layout from "../app/features/layout/Layout";

interface IStyle {
  ishover?: boolean;
}
const LayoutIndex = styled.View`
  background-color: ${({ theme }) => theme.delete};
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
const Button = styled.TouchableHighlight``;

const index = () => {
  const rootStore = useContext(RootStoreContext);
  const { openLight, setOpenLight } = rootStore.lightStore;
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
        {openLight && <Text>BUKAK</Text>}
      </LayoutIndex>
    </Layout>
  );
};
export default observer(index);
