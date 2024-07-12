import "./comp/App.css";
import Video from "./comp/video";
import Footer from "./comp/footer";
import Header from "./comp/header";

function App() {
  return (
    <section>
      <div>
        <Header />
      </div>
      <div>
        <Video />
      </div>
      <div>
        <Footer />
      </div>
    </section>
  );
}

export default App;
