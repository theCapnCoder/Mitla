import Container from "@mui/material/Container";
import Header from "./containers/Header";
import Main from "./containers/Main";
import Discount from "./containers/Discount";
import Explanation from "./containers/Explanation";
import Service from "./containers/Service";
import ExtraService from "./containers/ExtraService";
import Questions from "./containers/Questions";
import Partners from "./containers/Partners";
import Branches from "./containers/Branches";
import News from "./containers/News";
import Order from "./containers/Order";
import Footer from "./containers/Footer";
import { Box, useMediaQuery } from "@mui/material";
import { Warning } from "./containers/Warning";

function App() {
  const matches = useMediaQuery("(min-width:1920px)");

  return (
    <Container maxWidth="xl" disableGutters>
      {matches ? (
        <>
          <Header />
          <Main />
          <Discount />
          <Explanation />
          <Service />
          <ExtraService />
          <Questions />
          <Partners />
          <Branches />
          <News />
          <Order />
          <Footer />
        </>
      ) : (
        <Warning />
      )}
    </Container>
  );
}

export default App;
