import { Box, Container, Heading, Text, SimpleGrid, Image, Stack, Badge, Button, Flex, HStack, VStack, Icon, Divider } from "@chakra-ui/react";
import { motion } from "framer-motion";
import { FaFire, FaMapMarkerAlt, FaStar, FaCalendarAlt, FaPlane, FaHotel, FaUtensils } from "react-icons/fa";
import Header from "../components/Header";
import Footer from "../components/Footer";

const MotionBox = motion(Box);
const MotionHeading = motion(Heading);
const MotionText = motion(Text);

const hotTours = [
  { 
    name: "Горящий тур в Испанию", 
    destination: "Испания, Барселона",
    img: "/images/destinations/spain.jpg", 
    price: "250 000 ₸",
    oldPrice: "350 000 ₸",
    days: "7 дней / 6 ночей",
    rating: 4.8,
    departure: "Завтра",
    hotel: "Senza Hotels Grand Santana 5*",
    meal: "Всё включено",
    discount: "-30%"
  },
  { 
    name: "Срочное предложение: Египет", 
    destination: "Египет, Хургада",
    img: "/images/destinations/egypt.jpg", 
    price: "290 000 ₸",
    oldPrice: "400 000 ₸",
    days: "10 дней / 9 ночей",
    rating: 4.6,
    departure: "Через 3 дня",
    hotel: "Steigenberger Aqua Magic 5*",
    meal: "Всё включено",
    discount: "-28%"
  },
  { 
    name: "Горящие Эмираты", 
    destination: "ОАЭ, Дубай",
    img: "/images/destinations/uae.jpg", 
    price: "320 000 ₸",
    oldPrice: "415 000 ₸",
    days: "5 дней / 4 ночи",
    rating: 4.9,
    departure: "Через 2 дня",
    hotel: "Millennium Place Marina 4*",
    meal: "Завтраки",
    discount: "-23%"
  },
  { 
    name: "Кипр: горящее предложение", 
    destination: "Кипр, Айя-Напа",
    img: "/images/destinations/cyprus.jpg", 
    price: "270 000 ₸",
    oldPrice: "375 000 ₸",
    days: "7 дней / 6 ночей",
    rating: 4.5,
    departure: "Через 5 дней",
    hotel: "Nissi Beach Resort 4*",
    meal: "Полупансион",
    discount: "-28%"
  },
  { 
    name: "Срочно: Греция", 
    destination: "Греция, о. Крит",
    img: "/images/destinations/greece.jpg", 
    price: "300 000 ₸",
    oldPrice: "390 000 ₸",
    days: "7 дней / 6 ночей",
    rating: 4.7,
    departure: "Через 4 дня",
    hotel: "Stella Palace Resort & Spa 5*",
    meal: "Всё включено",
    discount: "-23%"
  },
  { 
    name: "Горящий Таиланд", 
    destination: "Таиланд, Пхукет",
    img: "/images/destinations/thailand.jpg", 
    price: "360 000 ₸",
    oldPrice: "470 000 ₸",
    days: "11 дней / 10 ночей",
    rating: 4.7,
    departure: "Через 3 дня",
    hotel: "Novotel Phuket Resort 4*",
    meal: "Завтраки",
    discount: "-24%"
  }
];

export default function HotTours() {
  return (
    <Box>
      <Header />
      
      <Box 
        bg="brand.500" 
        color="white" 
        py={20} 
        bgImage="linear-gradient(to right, rgba(255, 153, 0, 0.8), rgba(255, 102, 0, 0.6)), url('/images/hero-bg.jpg')"
        bgSize="cover"
        bgPosition="center"
      >
        <Container maxW="6xl">
          <MotionHeading 
            size="2xl" 
            mb={4}
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Горящие туры
          </MotionHeading>
          <MotionText
            fontSize="xl" 
            maxW="2xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Успейте забронировать тур по специальной цене! Горящие предложения обновляются ежедневно.
          </MotionText>
        </Container>
      </Box>
      
      <Container maxW="6xl" py={10}>
        <Box bg="orange.50" p={6} borderRadius="lg" mb={10} borderLeft="4px solid" borderColor="orange.500">
          <Flex align="center" gap={3}>
            <Icon as={FaFire} color="orange.500" boxSize={6} />
            <VStack align="start" spacing={0}>
              <Heading size="md" color="orange.600">Что такое горящие туры?</Heading>
              <Text color="gray.600">
                Это туры со скидкой до 30%, которые нужно быстро продать из-за приближающейся даты вылета или отмены брони.
                Качество отдыха при этом остаётся на высоком уровне!
              </Text>
            </VStack>
          </Flex>
        </Box>
        
        <SimpleGrid columns={{ base: 1, md: 2 }} spacing={6}>
          {hotTours.map((tour, index) => (
            <MotionBox 
              key={tour.name} 
              bg="white" 
              borderRadius="lg" 
              boxShadow="md" 
              overflow="hidden"
              _hover={{ transform: "translateY(-5px)", boxShadow: "xl" }}
              position="relative"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 * (index % 2) }}
              style={{ transition: "all 0.3s ease" }}
              height="100%" // Фиксированная высота для всех карточек
            >
              <Badge 
                position="absolute" 
                top={3} 
                right={3} 
                colorScheme="red" 
                borderRadius="full"
                px={3}
                py={1}
                zIndex={1}
                fontSize="md"
                fontWeight="bold"
              >
                {tour.discount}
              </Badge>
              
              <Flex direction={{ base: "column", sm: "row" }} height="100%">
                <Box 
                  position="relative" 
                  overflow="hidden" 
                  w={{ base: "100%", sm: "40%" }}
                  minH={{ base: "200px", sm: "auto" }}
                >
                  <Image 
                    src={tour.img} 
                    alt={tour.name} 
                    objectFit="cover" 
                    h="100%" 
                    w="100%" 
                    transition="transform 0.5s ease"
                    _hover={{ transform: "scale(1.1)" }}
                  />
                  <Box 
                    position="absolute" 
                    bottom={0} 
                    left={0} 
                    bg="rgba(0,0,0,0.7)" 
                    color="white" 
                    py={1} 
                    px={3}
                  >
                    <Text fontWeight="bold">Вылет: {tour.departure}</Text>
                  </Box>
                </Box>
                
                <Box p={4} w={{ base: "100%", sm: "60%" }} display="flex" flexDirection="column" height="100%">
                  <VStack align="start" spacing={3} height="100%" justify="space-between">
                    <Heading size="md" color="brand.700">{tour.name}</Heading>
                    
                    <Flex align="center" color="gray.600">
                      <FaMapMarkerAlt size="14px" />
                      <Text ml={2} fontSize="sm">{tour.destination}</Text>
                    </Flex>
                    
                    <HStack spacing={4}>
                      <Flex align="center" color="gray.600">
                        <FaCalendarAlt size="14px" />
                        <Text ml={2} fontSize="sm">{tour.days}</Text>
                      </Flex>
                      
                      <Flex align="center">
                        <FaStar color="#FFD700" />
                        <Text ml={1} fontWeight="bold">{tour.rating}</Text>
                      </Flex>
                    </HStack>
                    
                    <Divider />
                    
                    <HStack spacing={4} wrap="wrap">
                      <Flex align="center" color="gray.600" minW="120px">
                        <FaHotel size="14px" />
                        <Text ml={2} fontSize="sm" noOfLines={1}>{tour.hotel}</Text>
                      </Flex>
                      
                      <Flex align="center" color="gray.600">
                        <FaUtensils size="14px" />
                        <Text ml={2} fontSize="sm">{tour.meal}</Text>
                      </Flex>
                    </HStack>
                    
                    <Flex justify="space-between" align="center" w="100%" mt="auto">
                      <Box>
                        <Text as="s" fontSize="sm" color="gray.500">{tour.oldPrice}</Text>
                        <Text fontWeight="bold" fontSize="xl" color="red.500">{tour.price}</Text>
                      </Box>
                      <Button 
                        colorScheme="orange" 
                        rightIcon={<FaPlane />}
                        _hover={{ transform: "translateY(-2px)" }}
                        transition="all 0.2s"
                      >
                        Забронировать
                      </Button>
                    </Flex>
                  </VStack>
                </Box>
              </Flex>
            </MotionBox>
          ))}
        </SimpleGrid>
        
        <Box textAlign="center" mt={10}>
          <Text color="gray.600" mb={4}>
            Не нашли подходящий тур? Мы подберем для вас индивидуальное предложение!
          </Text>
          <Button 
            colorScheme="brand" 
            size="lg" 
            leftIcon={<FaFire />}
            px={8}
          >
            Получить консультацию
          </Button>
        </Box>
      </Container>
      
      <Footer />
    </Box>
  );
}
