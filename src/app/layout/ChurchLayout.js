import Navigation from "@/components/Navigation";
import BaseFooter from "@/components/BaseFooter";

export default function ChurchLayout({ children }) {
  return (
    <>
      <Navigation />
      <main>{children}</main>
      <BaseFooter />
    </>
  );
}
