import { Box, Heading, Text, Button, Stack, Container, Flex } from "@chakra-ui/react";
import { motion } from "framer-motion";
import { FaPlane, FaMapMarkerAlt, FaCalendarAlt } from "react-icons/fa";

// Компоненты с анимацией
const MotionBox = motion(Box);
const MotionHeading = motion(Heading);
const MotionText = motion(Text);
const MotionButton = motion(Button);
const MotionFlex = motion(Flex);

export default function Hero() {
  return (
    <Box
      bgImage="linear-gradient(to right, rgba(0, 102, 255, 0.8), rgba(0, 102, 255, 0.6)), url('/images/hero-bg.jpg')"
      bgSize="cover"
      bgPosition="center"
      py={{ base: 16, md: 24 }}
      color="white"
      position="relative"
      overflow="hidden"
    >
      {/* Декоративные элементы */}
      <MotionBox
        position="absolute"
        top="-50px"
        right="-50px"
        width="200px"
        height="200px"
        borderRadius="full"
        bg="rgba(255,255,255,0.1)"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      />
      <MotionBox
        position="absolute"
        bottom="-30px"
        left="-30px"
        width="150px"
        height="150px"
        borderRadius="full"
        bg="rgba(255,255,255,0.1)"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.4 }}
      />
      
      <Container maxW="6xl">
        <Flex direction={{ base: "column", md: "row" }} align="center" justify="space-between">
          <Stack spacing={6} maxW={{ base: "100%", md: "60%" }} textAlign={{ base: "center", md: "left" }}>
            <MotionHeading 
              as="h1" 
              size="2xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              Влюбляйтесь в путешествия вместе с нами!
            </MotionHeading>
            <MotionText 
              fontSize="xl" 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Подберите идеальный тур по лучшей цене с Tour Express
            </MotionText>
            <MotionButton 
              colorScheme="accent" 
              size="lg"
              leftIcon={<FaPlane />}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              _hover={{ transform: "translateY(-5px)", boxShadow: "xl" }}
            >
              Подобрать тур
            </MotionButton>
          </Stack>
          
          <MotionFlex 
            display={{ base: "none", md: "flex" }}
            direction="column"
            bg="white" 
            color="gray.800"
            p={6}
            borderRadius="lg"
            boxShadow="xl"
            mt={{ base: 8, md: 0 }}
            width={{ base: "100%", md: "35%" }}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <Heading size="md" mb={4} color="brand.500">Популярные направления</Heading>
            <Stack spacing={3}>
              <Flex align="center" p={2} borderRadius="md" _hover={{ bg: "gray.50" }} cursor="pointer">
                <FaMapMarkerAlt color="#0066ff" />
                <Text ml={3} fontWeight="medium">Турция от 250 000 ₸</Text>
              </Flex>
              <Flex align="center" p={2} borderRadius="md" _hover={{ bg: "gray.50" }} cursor="pointer">
                <FaMapMarkerAlt color="#0066ff" />
                <Text ml={3} fontWeight="medium">Египет от 300 000 ₸</Text>
              </Flex>
              <Flex align="center" p={2} borderRadius="md" _hover={{ bg: "gray.50" }} cursor="pointer">
                <FaMapMarkerAlt color="#0066ff" />
                <Text ml={3} fontWeight="medium">ОАЭ от 330 000 ₸</Text>
              </Flex>
              <Flex align="center" p={2} borderRadius="md" _hover={{ bg: "gray.50" }} cursor="pointer">
                <FaCalendarAlt color="#0066ff" />
                <Text ml={3} fontWeight="medium">Горящие туры</Text>
              </Flex>
            </Stack>
          </MotionFlex>
        </Flex>
      </Container>
    </Box>
  );
}
