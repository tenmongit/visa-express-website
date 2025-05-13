import { Box, Container } from "@chakra-ui/react";
import Header from "../components/Header";
import Hero from "../components/Hero";
import TourSearch from "../components/TourSearch";
import PopularDestinations from "../components/PopularDestinations";
import Advantages from "../components/Advantages";
import Reviews from "../components/Reviews";
import ApplicationStepper from "../components/ApplicationStepper";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <Box bg="gray.50">
      <Header />
      <Hero />
      <Container maxW="6xl" py={8}>
        <TourSearch />
        <PopularDestinations />
        <Advantages />
        <Reviews />
        <ApplicationStepper />
      </Container>
      <Footer />
    </Box>
  );
}
