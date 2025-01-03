import "./App.css";
import SignUp from "./pages.jsx/signUp";
import Hero from "./pages.jsx/Home";
import HowItWorks from "./components/howItWorks";
import Footer from "./components/footer";
import { ReviewSection } from "./components/review";

export default function App() {
  return (
    <div className="w-full h-fit bg-[#ebebeb] overflow-hidden">
      <Hero />
      <HowItWorks />
      <ReviewSection />
      <Footer />
    </div>
  );
}
