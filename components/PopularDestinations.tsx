import { Box, Heading, Text, Flex, Button, Link, Grid, GridItem, Badge, Image, Icon } from "@chakra-ui/react";
import { FaCalendarAlt, FaChevronDown, FaChevronUp } from "react-icons/fa";
import { useState } from "react";

// Типы для данных направлений
interface Destination {
  name: string;
  img: string;
  days: string;
  price: string;
  featured?: boolean;
}

// Компонент карточки направления
const DestinationCard = ({ destination }: { destination: Destination }) => {
  const isFeatured = destination.featured;
  
  return (
    <Box
      position="relative"
      borderRadius="md"
      overflow="hidden"
      boxShadow="md"
      bg="white"
      transition="all 0.3s"
      _hover={{ transform: "translateY(-5px)", boxShadow: "lg" }}
      height="100%"
      cursor="pointer"
    >
      {/* Метка 0-0-10 */}
      <Badge
        position="absolute"
        top={3}
        left={3}
        bg="red.500"
        color="white"
        borderRadius="md"
        px={2}
        py={1}
        fontSize="xs"
        fontWeight="bold"
        zIndex={10}
      >
        0-0-10
      </Badge>
      
      {/* Изображение с градиентом */}
      <Box position="relative" height="200px">
        <Image
          src={destination.img}
          alt={destination.name}
          fallbackSrc="https://via.placeholder.com/400x200?text=Страна"
          objectFit="cover"
          width="100%"
          height="100%"
          loading="lazy"
        />
        
        {/* Градиент поверх изображения */}
        <Box
          position="absolute"
          top={0}
          left={0}
          right={0}
          bottom={0}
          bgGradient="linear(to-b, transparent 50%, rgba(0,0,0,0.7))"
          zIndex={1}
        />
        
        {/* Название страны */}
        <Heading
          size={isFeatured ? "lg" : "md"}
          color="white"
          position="absolute"
          bottom={3}
          left={3}
          zIndex={2}
          textShadow="0px 1px 3px rgba(0,0,0,0.5)"
        >
          {destination.name}
        </Heading>
        
        {/* Жёлтая плашка с месячным платежом */}
        <Box
          position="absolute"
          left={0}
          bottom={0}
          bg="yellow.400"
          color="gray.900"
          fontWeight="bold"
          fontSize="xs"
          px={3}
          py={1}
          borderTopRightRadius="md"
          zIndex={2}
        >
          от 12 000 ₸ / мес
        </Box>
      </Box>
      
      {/* Информация о туре */}
      <Box p={4}>
        {/* Дни */}
        <Flex align="center" mb={2}>
          <Icon as={FaCalendarAlt} color="blue.500" boxSize={3.5} />
          <Text ml={2} fontSize="sm" color="gray.600">{destination.days}</Text>
        </Flex>
        
        {/* Цена */}
        <Text 
          fontSize={isFeatured ? "2xl" : "xl"} 
          fontWeight="bold" 
          color="blue.500" 
          mb={1}
        >
          {destination.price}
        </Text>
        
        {/* Дата вылета */}
        <Text fontSize="xs" color="gray.500" mb={2}>28 мая, за 1 взрослого</Text>
        
        {/* Кнопка */}
        <Button
          colorScheme="blue"
          size="sm"
          width="100%"
          borderRadius="md"
          mt={1}
        >
          Подробнее
        </Button>
      </Box>
    </Box>
  );
};

// Данные о направлениях
const destinations: Destination[] = [
  {
    name: "Турция",
    img: "/images/destinations/turkey.jpg",
    days: "7-14 дней",
    price: "от 250 000 ₸",
    featured: true
  },
  {
    name: "Греция",
    img: "/images/destinations/greece.jpg",
    days: "7-12 дней",
    price: "от 320 000 ₸",
    featured: true
  },
  {
    name: "Египет",
    img: "/images/destinations/egypt.jpg",
    days: "7-10 дней",
    price: "от 300 000 ₸"
  },
  {
    name: "ОАЭ",
    img: "/images/destinations/uae.jpg",
    days: "5-12 дней",
    price: "от 330 000 ₸"
  },
  {
    name: "Таиланд",
    img: "/images/destinations/thailand.jpg",
    days: "10-14 дней",
    price: "от 380 000 ₸"
  },
  {
    name: "Кипр",
    img: "/images/destinations/cyprus.jpg",
    days: "7-10 дней",
    price: "от 350 000 ₸"
  }
];

export default function PopularDestinations() {
  const [showAll, setShowAll] = useState(false);
  
  // Разделяем направления на избранные и обычные
  const featuredDestinations = destinations.filter(d => d.featured);
  const regularDestinations = destinations.filter(d => !d.featured);
  
  // Определяем, сколько обычных направлений показывать
  const visibleRegularDestinations = showAll ? regularDestinations : regularDestinations.slice(0, 4);
  
  return (
    <Box as="section" py={12} bg="gray.50">
      <Box maxW="1200px" mx="auto" px={{ base: 4, md: 6 }}>
        {/* Заголовок секции */}
        <Flex justify="space-between" align="center" mb={8}>
          <Heading 
            size="lg" 
            color="blue.700"
            borderBottomWidth="3px"
            borderColor="blue.500"
            pb={2}
          >
            Популярные направления
          </Heading>
          
          <Link href="/destinations" color="blue.500" fontWeight="medium">
            Смотреть все →
          </Link>
        </Flex>
        
        {/* Сетка карточек */}
        <Grid 
          templateColumns={{ base: "1fr", md: "repeat(2, 1fr)", lg: "repeat(4, 1fr)" }}
          gap={6}
          mb={8}
        >
          {/* Большие карточки (featured) */}
          {featuredDestinations.map((destination, index) => (
            <GridItem key={destination.name} colSpan={{ base: 1, lg: 2 }}>
              <DestinationCard destination={destination} />
            </GridItem>
          ))}
          
          {/* Обычные карточки */}
          {visibleRegularDestinations.map((destination) => (
            <GridItem key={destination.name}>
              <DestinationCard destination={destination} />
            </GridItem>
          ))}
        </Grid>
        
        {/* Кнопка показать еще */}
        {regularDestinations.length > 4 && (
          <Flex justify="center" mt={6}>
            <Button
              onClick={() => setShowAll(!showAll)}
              variant="outline"
              colorScheme="blue"
              rightIcon={showAll ? <FaChevronUp /> : <FaChevronDown />}
              borderRadius="md"
              size="md"
            >
              {showAll ? "Скрыть" : "Показать еще"}
            </Button>
          </Flex>
        )}
      </Box>
    </Box>
  );
}
