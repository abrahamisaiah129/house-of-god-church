import ChurchLayout from "@/app/layout/ChurchLayout";
import ChurchHero from "@/components/ChurchHero";
import AboutChurch from "@/components/AboutChurch";
import WatchSermons from "@/components/WatchSermons";
import Programmes from "@/components/Programmes";
import BookSection from "@/components/BookSection";
import ContactSection from "@/components/ContactSection";
import WelcomeVideoPopup from "./WelcomeVideoPopup"; // From src/components
export default function Home() {
  return (
    <ChurchLayout>
      <ChurchHero />
      <AboutChurch />
      <WatchSermons />
      <Programmes />
      <BookSection />
      <ContactSection />
      <WelcomeVideoPopup />
    </ChurchLayout>
  );
}
