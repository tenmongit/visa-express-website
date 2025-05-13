import { Box, Heading, Image, Text, Stack, Flex, Button, Link, Badge, IconButton } from "@chakra-ui/react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { motion } from "framer-motion";
import { FaMapMarkerAlt, FaPlane, FaCalendarAlt, FaStar, FaChevronLeft, FaChevronRight } from "react-icons/fa";

const MotionBox = motion(Box);
const MotionHeading = motion(Heading);
const MotionFlex = motion(Flex);

const destinations = [
  { 
    name: "Турция", 
    img: "/images/turkey.jpg", 
    price: "от 250 000 ₸",
    days: "7-14 дней",
    rating: 4.8,
    isHot: true
  },
  { 
    name: "Египет", 
    img: "/images/egypt.jpg", 
    price: "от 300 000 ₸",
    days: "7-10 дней",
    rating: 4.6,
    isHot: true
  },
  { 
    name: "ОАЭ", 
    img: "/images/uae.jpg", 
    price: "от 330 000 ₸",
    days: "5-12 дней",
    rating: 4.9,
    isHot: false
  },
  { 
    name: "Таиланд", 
    img: "/images/thailand.jpg", 
    price: "от 380 000 ₸",
    days: "10-14 дней",
    rating: 4.7,
    isHot: false
  },
  { 
    name: "Кипр", 
    img: "/images/cyprus.jpg", 
    price: "от 350 000 ₸",
    days: "7-10 дней",
    rating: 4.5,
    isHot: true
  },
  { 
    name: "Греция", 
    img: "/images/greece.jpg", 
    price: "от 320 000 ₸",
    days: "7-12 дней",
    rating: 4.7,
    isHot: false
  },
  { 
    name: "Испания", 
    img: "/images/spain.jpg", 
    price: "от 370 000 ₸",
    days: "8-14 дней",
    rating: 4.8,
    isHot: false
  },
  { 
    name: "Италия", 
    img: "/images/italy.jpg", 
    price: "от 360 000 ₸",
    days: "7-12 дней",
    rating: 4.9,
    isHot: true
  },
  { 
    name: "Греция", 
    img: "/images/greece.jpg", 
    price: "от 320 000 ₸",
    days: "7-14 дней",
    rating: 4.7,
    isHot: false
  },
  { 
    name: "Испания", 
    img: "/images/spain.jpg", 
    price: "от 410 000 ₸",
    days: "7-14 дней",
    rating: 4.8,
    isHot: false
  },
  { 
    name: "Италия", 
    img: "/images/italy.jpg", 
    price: "от 440 000 ₸",
    days: "7-10 дней",
    rating: 4.9,
    isHot: false
  }
];

// Кастомные стрелки для слайдера
const PrevArrow = (props: any) => {
  const { onClick } = props;
  return (
    <IconButton
      aria-label="Previous"
      icon={<FaChevronLeft />}
      onClick={onClick}
      position="absolute"
      left="10px"
      top="50%"
      transform="translateY(-50%)"
      zIndex={2}
      colorScheme="brand"
      rounded="full"
      size="md"
      boxShadow="xl"
      display={{ base: "none", md: "flex" }}
      bg="white"
      opacity="0.9"
      _hover={{ bg: "white", opacity: 1 }}
    />
  );
};

const NextArrow = (props: any) => {
  const { onClick } = props;
  return (
    <IconButton
      aria-label="Next"
      icon={<FaChevronRight />}
      onClick={onClick}
      position="absolute"
      right="10px"
      top="50%"
      transform="translateY(-50%)"
      zIndex={2}
      colorScheme="brand"
      rounded="full"
      size="md"
      boxShadow="xl"
      display={{ base: "none", md: "flex" }}
      bg="white"
      opacity="0.9"
      _hover={{ bg: "white", opacity: 1 }}
    />
  );
};

export default function PopularDestinations() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 800,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    pauseOnHover: true,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    cssEase: "cubic-bezier(0.45, 0, 0.55, 1)", // Более плавная анимация
    swipeToSlide: true,
    centerPadding: "0px",
    className: "center",
    centerMode: false,
    adaptiveHeight: false,
    vertical: false,
    verticalSwiping: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        }
      }
    ]
  };
  return (
    <Box my={16}>
      <MotionFlex 
        justify="space-between" 
        align="center" 
        mb={8}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <MotionHeading 
          size="lg" 
          color="brand.600"
          position="relative"
          _after={{
            content: '""',
            position: "absolute",
            bottom: "-10px",
            left: 0,
            width: "60px",
            height: "3px",
            bg: "brand.500"
          }}
        >
          Популярные направления
        </MotionHeading>
        <Link 
          href="/destinations" 
          color="brand.500" 
          fontWeight="medium"
          _hover={{ textDecoration: "none", color: "brand.600" }}
        >
          Смотреть все →
        </Link>
      </MotionFlex>

      <Box 
        position="relative" 
        px={{ base: 2, md: 6 }} 
        className="popular-destinations-slider" 
        mx="auto"
        maxW="1400px"
        sx={{
          '.slick-slide': {
            padding: '0 10px', // Уменьшаем расстояние между слайдами
            height: 'auto',
          },
          '.slick-track': {
            display: 'flex',
            gap: '10px',
            margin: '0 auto',
          },
          '.slick-list': {
            margin: '0 -10px',
            overflow: 'hidden',
            padding: '10px 0',
          },
          '.slick-dots': {
            bottom: '-30px',
          },
          '.slick-dots li button:before': {
            fontSize: '10px',
          },
          '.slick-prev, .slick-next': {
            width: '40px',
            height: '40px',
            zIndex: 10,
          },
          '.slick-prev': {
            left: '5px',
          },
          '.slick-next': {
            right: '5px',
          },
          '.slick-arrow': {
            boxShadow: 'lg',
          }
        }}
      >
        <Slider {...settings}>
          {destinations.map((d, index) => (
          <MotionBox 
            key={d.name} 
            bg="white" 
            borderRadius="lg" 
            boxShadow="md" 
            overflow="hidden"
            _hover={{ transform: "translateY(-10px)", boxShadow: "xl" }}
            position="relative"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 * index }}
            style={{ transition: "all 0.3s ease" }}
            height="100%" // Фиксированная высота для всех карточек
            display="flex"
            flexDirection="column"
          >
            {d.isHot && (
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
                src={d.img} 
                alt={d.name} 
                objectFit="cover" 
                h="200px" 
                w="100%" 
                transition="transform 0.5s ease"
                _hover={{ transform: "scale(1.1)" }}
              />
            </Box>
            <Stack p={4}>
              <Flex justify="space-between" align="center">
                <Heading size="md" color="brand.700">{d.name}</Heading>
                <Flex align="center">
                  <FaStar color="#FFD700" />
                  <Text ml={1} fontWeight="bold">{d.rating}</Text>
                </Flex>
              </Flex>
              <Flex align="center" color="gray.600" mt={2}>
                <FaCalendarAlt size="14px" />
                <Text ml={2} fontSize="sm">{d.days}</Text>
              </Flex>
              <Flex justify="space-between" align="center" mt={3}>
                <Text fontWeight="bold" fontSize="lg" color="brand.500">{d.price}</Text>
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
        </Slider>
      </Box>
    </Box>
  );
}
