import "./App.css";
import SignUp from "./pages.jsx/signUp";
import Hero from "./pages.jsx/Home";
import HowItWorks from "./components/howItWorks";
import Footer from "./components/footer";

export default function App() {
  return (
    <div className="w-full h-screen">
      <Hero />
      <HowItWorks />
      <Footer />
    </div>
  );
}
