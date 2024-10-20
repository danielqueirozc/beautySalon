import { About } from "./components/about";
import { Contact } from "./components/contact";
import { Footer } from "./components/footer";
import { Header } from "./components/header";
import { Main } from "./components/main";
import { Services } from "./components/services";
import { Testimonials } from "./components/testimonials";

export function App() {
  return (
  <>
     <Header />
     <Main />
     <About />
     <Services />
     <Testimonials />
     <Contact />
     <Footer />
  </>
  );
}

