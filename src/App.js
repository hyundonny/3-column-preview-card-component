import GlobalStyle from "./styles/GlobalStyles";
import CardContainer from "./styles/CardsContainer";
import Card from "./components/Card";

function App() {
  return (
    <>
      <GlobalStyle />
      <CardContainer>
        <Card />
        <Card />
        <Card />
      </CardContainer>
    </>
  );
}

export default App;
