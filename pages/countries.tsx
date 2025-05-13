import { Box, Container, Heading, Text, SimpleGrid, Image, Stack, Button, Flex, Grid, GridItem, VStack, HStack, Icon, useColorModeValue } from "@chakra-ui/react";
import { motion } from "framer-motion";
import { FaMapMarkerAlt, FaSun, FaUmbrella, FaUtensils, FaPlane } from "react-icons/fa";
import Header from "../components/Header";
import Footer from "../components/Footer";

const MotionBox = motion(Box);
const MotionHeading = motion(Heading);
const MotionText = motion(Text);

const countries = [
  {
    name: "Турция",
    img: "/images/turkey.jpg",
    description: "Турция — это удивительное сочетание восточной экзотики и европейского комфорта. Здесь вас ждут прекрасные пляжи, богатая история, вкусная кухня и знаменитое турецкое гостеприимство.",
    climate: "Средиземноморский и континентальный",
    cuisine: "Кебабы, пахлава, турецкий чай",
    attractions: ["Голубая мечеть", "Каппадокия", "Памуккале", "Анталийское побережье"],
    bestTimeToVisit: "Май-октябрь"
  },
  {
    name: "Египет",
    img: "/images/egypt.jpg",
    description: "Египет — это древние пирамиды и сфинксы, роскошные курорты на Красном море и удивительный подводный мир. Идеальное место для любителей истории и пляжного отдыха.",
    climate: "Субтропический и пустынный",
    cuisine: "Кошари, фалафель, шаурма",
    attractions: ["Пирамиды Гизы", "Луксор", "Красное море", "Каир"],
    bestTimeToVisit: "Октябрь-апрель"
  },
  {
    name: "ОАЭ",
    img: "/images/uae.jpg",
    description: "Объединенные Арабские Эмираты — это роскошь, небоскребы, шопинг и пляжный отдых высочайшего уровня. Здесь вы увидите, как традиции Востока сочетаются с ультрасовременными технологиями.",
    climate: "Тропический пустынный",
    cuisine: "Шаурма, хумус, арабские сладости",
    attractions: ["Бурдж-Халифа", "Пальма Джумейра", "Ferrari World", "Мечеть шейха Зайда"],
    bestTimeToVisit: "Ноябрь-апрель"
  },
  {
    name: "Таиланд",
    img: "/images/thailand.jpg",
    description: "Таиланд — это экзотические пляжи, буддийские храмы, вкуснейшая кухня и знаменитый тайский массаж. Страна улыбок подарит вам незабываемый отдых.",
    climate: "Тропический муссонный",
    cuisine: "Том ям, пад тай, зеленое карри",
    attractions: ["Бангкок", "Пхукет", "Паттайя", "Острова Пхи-Пхи"],
    bestTimeToVisit: "Ноябрь-март"
  },
  {
    name: "Кипр",
    img: "/images/cyprus.jpg",
    description: "Кипр — это остров Афродиты, где вас ждут чистейшие пляжи, богатая история и прекрасная средиземноморская кухня. Идеальное место для спокойного отдыха.",
    climate: "Средиземноморский",
    cuisine: "Мезе, халлуми, сувлаки",
    attractions: ["Пафос", "Айя-Напа", "Никосия", "Горы Троодос"],
    bestTimeToVisit: "Май-октябрь"
  },
  {
    name: "Греция",
    img: "/images/greece.jpg",
    description: "Греция — это колыбель европейской цивилизации с древними руинами, белоснежными домиками на фоне синего моря и вкуснейшей кухней. Здесь каждый найдет что-то по душе.",
    climate: "Средиземноморский",
    cuisine: "Мусака, гирос, греческий салат",
    attractions: ["Афины", "Санторини", "Крит", "Метеоры"],
    bestTimeToVisit: "Май-сентябрь"
  }
];

export default function Countries() {
  const bgGradient = useColorModeValue(
    "linear-gradient(to right, rgba(0, 102, 255, 0.8), rgba(0, 102, 255, 0.6))",
    "linear-gradient(to right, rgba(0, 102, 255, 0.9), rgba(0, 102, 255, 0.7))"
  );

  return (
    <Box>
      <Header />
      
      <Box 
        bg="brand.500" 
        color="white" 
        py={20} 
        bgImage={`${bgGradient}, url('/images/hero-bg.jpg')`}
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
            Страны для путешествий
          </MotionHeading>
          <MotionText
            fontSize="xl" 
            maxW="2xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Выберите направление вашей мечты и откройте для себя новые горизонты с Tour Express.
          </MotionText>
        </Container>
      </Box>
      
      <Container maxW="6xl" py={10}>
        <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10}>
          {countries.map((country, index) => (
            <MotionBox
              key={country.name}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 * (index % 2) }}
              height="100%" // Добавляем фиксированную высоту
            >
              <Grid 
                templateColumns={{ base: "1fr", md: "1fr 1fr" }} 
                gap={6} 
                bg="white" 
                borderRadius="lg" 
                overflow="hidden" 
                boxShadow="md"
                _hover={{ boxShadow: "lg" }}
                transition="all 0.3s ease"
                height="100%" // Добавляем фиксированную высоту
              >
                <GridItem>
                  <Box h="100%" overflow="hidden">
                    <Image 
                      src={country.img} 
                      alt={country.name} 
                      objectFit="cover" 
                      h="100%" 
                      w="100%" 
                      transition="transform 0.5s ease"
                      _hover={{ transform: "scale(1.1)" }}
                    />
                  </Box>
                </GridItem>
                
                <GridItem p={5} display="flex" flexDirection="column" height="100%">
                  <VStack align="start" spacing={4} height="100%" justify="space-between">
                    <Heading size="lg" color="brand.600">{country.name}</Heading>
                    
                    <Text fontSize="sm" color="gray.600" minHeight="80px" maxHeight="80px" overflow="hidden" textOverflow="ellipsis">
                      {country.description}
                    </Text>
                    
                    <Box w="100%" flex="1">
                      <HStack spacing={2} mb={2}>
                        <Icon as={FaSun} color="brand.500" />
                        <Text fontWeight="medium" fontSize="sm">Климат:</Text>
                        <Text fontSize="sm">{country.climate}</Text>
                      </HStack>
                      
                      <HStack spacing={2} mb={2}>
                        <Icon as={FaUtensils} color="brand.500" />
                        <Text fontWeight="medium" fontSize="sm">Кухня:</Text>
                        <Text fontSize="sm" noOfLines={1}>{country.cuisine}</Text>
                      </HStack>
                      
                      <HStack spacing={2} mb={2}>
                        <Icon as={FaUmbrella} color="brand.500" />
                        <Text fontWeight="medium" fontSize="sm">Сезон:</Text>
                        <Text fontSize="sm">{country.bestTimeToVisit}</Text>
                      </HStack>
                    </Box>
                    
                    <Button 
                      colorScheme="brand" 
                      size="sm" 
                      rightIcon={<FaPlane />}
                      alignSelf="flex-end"
                      mt="auto"
                      pt={2}
                    >
                      Туры в {country.name}
                    </Button>
                  </VStack>
                </GridItem>
              </Grid>
            </MotionBox>
          ))}
        </SimpleGrid>
      </Container>
      
      <Footer />
    </Box>
  );
}
