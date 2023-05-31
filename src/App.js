import Header,{HeaderPhone} from "./components/Header";
import Home from "./components/Home";
import Work from "./components/Work";
import TimeLine from "./components/TimeLine";
import Services from "./components/Services";
import Testimonial from "./components/Testimonial";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import { Toaster } from "react-hot-toast";
import { useState } from "react";

function App() {
  const [menuOpen, setMenuOpen] = useState(false)
  return (
<>
<HeaderPhone menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
<Header menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
<Home/>
<Work/>
<TimeLine/>
<Services/>
<Testimonial/>
<Contact/>
<Toaster/>    
<Footer/>

    </>
  );
}

export default App;
