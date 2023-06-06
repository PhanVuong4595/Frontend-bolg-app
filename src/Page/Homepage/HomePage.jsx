import Articles from "./Articles";
import CTA from "./CTA";
import Hero from "./Hero";

const HomePage = () => {
  return (
    <section className="homePage">
      <Hero />
      <Articles />
      <CTA />
    </section>
  );
};

export default HomePage;
