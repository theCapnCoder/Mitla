import Container from "@mui/material/Container";
import Header from "./containers/Header";
import Main from "./containers/Main";
import Discount from "./containers/Discount";
import Explanation from "./containers/Explanation";
import Service from "./containers/Service";
import ExtraService from "./containers/ExtraService";
import Questions from "./containers/Questions";
import Support from "./containers/Support";
import Partners from "./containers/Partners";
import Branches from "./containers/Branches";
import News from "./containers/News";
import Order from "./containers/Order";
import Footer from "./containers/Footer";

function App() {
  return (
    <Container maxWidth="xl" sx={{ border: 2, borderColor: "primary.main" }}>
      <Header />
      <Main />
      <Discount />
      <Explanation />
      <Service />
      <ExtraService />
      <Questions />
      <Support />
      <Partners />
      <Branches />
      <News />
      <Order />
      <Footer />
    </Container>
  );
}

export default App;
