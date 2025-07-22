import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import About from "../components/About";
import StoryCarousel from "../components/Story";
import OurPartner from "../components/OurPartner";
import Footer from "../components/Footer";
import DonationSection from "../components/Donation";
export default function Home() {
  return (
   <div>
<Navbar/>
<Hero/>
<About/>
<StoryCarousel/>
<OurPartner/>
<DonationSection/>
<Footer/>
   </div>
  );
}
