import { Box, Container, Heading, Text, SimpleGrid, Image, Stack, Badge, Button, Flex, Select, Input, HStack, VStack, useColorModeValue } from "@chakra-ui/react";
import { motion } from "framer-motion";
import { FaFilter, FaMapMarkerAlt, FaStar, FaCalendarAlt } from "react-icons/fa";
import Header from "../components/Header";
import Footer from "../components/Footer";

const MotionBox = motion(Box);
const MotionHeading = motion(Heading);

const tours = [
  { 
    name: "Солнечная Турция", 
    destination: "Турция",
    img: "/images/turkey.jpg", 
    price: "от 250 000 ₸",
    days: "7-14 дней",
    rating: 4.8,
    isHot: true,
    description: "Отдых на лазурном побережье с белоснежными пляжами и системой «всё включено»."
  },
  { 
    name: "Загадочный Египет", 
    destination: "Египет",
    img: "/images/egypt.jpg", 
    price: "от 300 000 ₸",
    days: "7-10 дней",
    rating: 4.6,
    isHot: true,
    description: "Погрузитесь в мир древних пирамид и насладитесь прекрасным Красным морем."
  },
  { 
    name: "Роскошные Эмираты", 
    destination: "ОАЭ",
    img: "/images/uae.jpg", 
    price: "от 330 000 ₸",
    days: "5-12 дней",
    rating: 4.9,
    isHot: false,
    description: "Откройте для себя мир роскоши, небоскребов и восточного гостеприимства."
  },
  { 
    name: "Экзотический Таиланд", 
    destination: "Таиланд",
    img: "/images/thailand.jpg", 
    price: "от 380 000 ₸",
    days: "10-14 дней",
    rating: 4.7,
    isHot: false,
    description: "Насладитесь тропическим раем с белоснежными пляжами и экзотической кухней."
  },
  { 
    name: "Солнечный Кипр", 
    destination: "Кипр",
    img: "/images/cyprus.jpg", 
    price: "от 350 000 ₸",
    days: "7-10 дней",
    rating: 4.5,
    isHot: true,
    description: "Идеальное сочетание пляжного отдыха и богатой истории Средиземноморья."
  },
  { 
    name: "Классическая Греция", 
    destination: "Греция",
    img: "/images/greece.jpg", 
    price: "от 320 000 ₸",
    days: "7-14 дней",
    rating: 4.7,
    isHot: false,
    description: "Колыбель европейской цивилизации с прекрасными островами и пляжами."
  },
  { 
    name: "Испанские каникулы", 
    destination: "Испания",
    img: "/images/spain.jpg", 
    price: "от 410 000 ₸",
    days: "7-14 дней",
    rating: 4.8,
    isHot: false,
    description: "Страна фламенко, корриды и бесконечных пляжей Коста Бравы."
  },
  { 
    name: "Итальянская классика", 
    destination: "Италия",
    img: "/images/italy.jpg", 
    price: "от 440 000 ₸",
    days: "7-10 дней",
    rating: 4.9,
    isHot: false,
    description: "Познакомьтесь с историей, искусством и непревзойденной кухней Италии."
  }
];

export default function Tours() {
  return (
    <Box>
      <Header />
      
      <Box 
        bg="brand.500" 
        color="white" 
        py={20} 
        bgImage="linear-gradient(to right, rgba(0, 102, 255, 0.8), rgba(0, 102, 255, 0.6)), url('/images/hero-bg.jpg')"
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
            Туры по всему миру
          </MotionHeading>
          <MotionBox
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <Text fontSize="xl" maxW="2xl">
              Подберите идеальный тур по лучшей цене с Tour Express. Мы предлагаем отдых на любой вкус и бюджет.
            </Text>
          </MotionBox>
        </Container>
      </Box>
      
      <Container maxW="6xl" py={10}>
        <Box 
          bg="white" 
          p={6} 
          borderRadius="lg" 
          boxShadow="md" 
          mb={10}
        >
          <Flex 
            direction={{ base: "column", md: "row" }} 
            justify="space-between" 
            align={{ base: "stretch", md: "flex-end" }} 
            gap={4}
          >
            <HStack spacing={4} flex={{ base: 1, md: 2 }} flexWrap="wrap">
              <Box flex={1} minW="150px">
                <Text fontWeight="medium" mb={2}>Направление</Text>
                <Select placeholder="Все страны">
                  <option value="turkey">Турция</option>
                  <option value="egypt">Египет</option>
                  <option value="uae">ОАЭ</option>
                  <option value="thailand">Таиланд</option>
                  <option value="cyprus">Кипр</option>
                  <option value="greece">Греция</option>
                </Select>
              </Box>
              
              <Box flex={1} minW="150px">
                <Text fontWeight="medium" mb={2}>Дата вылета</Text>
                <Input type="date" />
              </Box>
              
              <Box flex={1} minW="150px">
                <Text fontWeight="medium" mb={2}>Длительность</Text>
                <Select placeholder="Любая">
                  <option value="7">7 дней</option>
                  <option value="10">10 дней</option>
                  <option value="14">14 дней</option>
                </Select>
              </Box>
            </HStack>
            
            <Button 
              leftIcon={<FaFilter />} 
              colorScheme="brand" 
              size="lg"
              minW="150px"
            >
              Показать
            </Button>
          </Flex>
        </Box>
        
        <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={6}>
          {tours.map((tour, index) => (
            <MotionBox 
              key={tour.name} 
              bg="white" 
              borderRadius="lg" 
              boxShadow="md" 
              overflow="hidden"
              _hover={{ transform: "translateY(-10px)", boxShadow: "xl" }}
              position="relative"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 * (index % 3) }}
              style={{ transition: "all 0.3s ease" }}
              height="100%"
              display="flex"
              flexDirection="column"
            >
              {tour.isHot && (
                <Badge 
                  position="absolute" 
                  top={3} 
                  right={3} 
                  colorScheme="red" 
                  borderRadius="full"
                  px={3}
                  py={1}
                  zIndex={1}
                >
                  Горящий
                </Badge>
              )}
              <Box position="relative" overflow="hidden">
                <Image 
                  src={tour.img} 
                  alt={tour.name} 
                  objectFit="cover" 
                  h="200px" 
                  w="100%" 
                  transition="transform 0.5s ease"
                  _hover={{ transform: "scale(1.1)" }}
                />
              </Box>
              <Stack p={4}>
                <Heading size="md" color="brand.700">{tour.name}</Heading>
                
                <Flex align="center" color="gray.600">
                  <FaMapMarkerAlt size="14px" />
                  <Text ml={2} fontSize="sm">{tour.destination}</Text>
                </Flex>
                
                <Flex align="center" color="gray.600">
                  <FaCalendarAlt size="14px" />
                  <Text ml={2} fontSize="sm">{tour.days}</Text>
                </Flex>
                
                <Flex align="center" mt={1}>
                  <FaStar color="#FFD700" />
                  <Text ml={1} fontWeight="bold">{tour.rating}</Text>
                </Flex>
                
                <Text fontSize="sm" color="gray.600" mt={2} noOfLines={2}>
                  {tour.description}
                </Text>
                
                <Flex justify="space-between" align="center" mt={3}>
                  <Text fontWeight="bold" fontSize="lg" color="brand.500">{tour.price}</Text>
                  <Button 
                    size="sm" 
                    colorScheme="brand" 
                    variant="outline"
                    _hover={{ bg: "brand.50" }}
                  >
                    Подробнее
                  </Button>
                </Flex>
              </Stack>
            </MotionBox>
          ))}
        </SimpleGrid>
        
        <Flex justify="center" mt={10}>
          <Button colorScheme="brand" size="lg">Показать еще</Button>
        </Flex>
      </Container>
      
      <Footer />
    </Box>
  );
}
