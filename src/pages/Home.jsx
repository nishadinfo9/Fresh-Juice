import HeroSection from "../components/Hero/HeroSection";
import BrandStory from "../components/Sections/BrandStory";
import ProductShowcase from "../components/Sections/ProductShowcase";
import HealthBenefits from "../components/Sections/HealthBenefits";
import FoodProducts from "../components/Sections/FoodProducts";
import DeliveryInfo from "../components/Sections/DeliveryInfo";
import SocialMedia from "../components/Sections/SocialMedia";

const Home = () => {
  return (
    <>
      <HeroSection />
      <BrandStory />
      <ProductShowcase />
      <HealthBenefits />
      <FoodProducts />
      <DeliveryInfo />
      <SocialMedia />
    </>
  );
};

export default Home;
