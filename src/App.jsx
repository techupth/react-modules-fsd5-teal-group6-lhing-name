import "./App.css";

import {
  Header,
  MainContent,
  Footer,
  ProductSection,
  FAQ,
} from "./components/storage";

function App() {
  return (
    <div>
      <Header />
      <MainContent />
      <ProductSection />
      <FAQ />
      <Footer />
    </div>
  );
}

export default App;
