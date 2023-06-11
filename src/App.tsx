import "react-alice-carousel/lib/alice-carousel.css";
import Router from "./routes";
import "./styles/global.scss";

function App() {
  const pageTitle = "VET | Natália Viscaino";
  const attentionMessage = "Já vai? Obrigado pela visita!";

  document.addEventListener("visibilitychange", function () {
    const isPageActive = !document.hidden;
    document.title = isPageActive ? pageTitle : attentionMessage;
  });

  return (
    <>
      <Router />
    </>
  );
}

export default App;
