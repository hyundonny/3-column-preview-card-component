import GlobalStyle from "./styles/GlobalStyles";
import CardsContainer from "./styles/CardsContainer";
import Card from "./components/Card";

function App() {
  return (
    <>
      <GlobalStyle />
      <CardsContainer>
        <Card type={"sedans"} />
        <Card type={"suvs"} />
        <Card type={"luxury"} />
      </CardsContainer>
    </>
  );
}

export default App;
