import GlobalStyle from "./styles/GlobalStyles";
import CardContainer from "./styles/CardsContainer";
import Card from "./components/Card";

function App() {
  return (
    <>
      <GlobalStyle />
      <CardContainer>
        <Card type={"sedans"} bgColor={"orange"} />
        <Card type={"suvs"} bgColor={"dark-cyan"} />
        <Card type={"luxury"} bgColor={"darker-cyan"} />
      </CardContainer>
    </>
  );
}

export default App;
