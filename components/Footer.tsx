import { Box, Flex, Text, Link, HStack, SimpleGrid, VStack, Heading, Divider, Image, Button, Icon, Grid, GridItem } from "@chakra-ui/react";
import { FaInstagram, FaTelegram, FaWhatsapp, FaFacebook, FaYoutube, FaPhone, FaClock, FaCreditCard, FaMapMarkerAlt } from "react-icons/fa";
import { motion } from "framer-motion";

const MotionBox = motion(Box);

export default function Footer() {
  return (
    <Box as="footer" bg="#eaf1fb" borderTop="1px" borderColor="gray.200" mt={16}>
      {/* Основной контент футера */}
      <Box maxW="1400px" mx="auto" px={{ base: 4, md: 8 }} py={10}>
        <SimpleGrid columns={{ base: 1, sm: 2, md: 4 }} spacing={8} mb={10}>
          {/* Колонка 1: Туры */}
          <VStack align="start" spacing={4}>
            <Heading size="md" color="brand.600" mb={2}>Туры</Heading>
            <Link href="/tours" color="gray.600" _hover={{ color: "brand.500" }}>Все туры</Link>
            <Link href="/hot" color="gray.600" _hover={{ color: "brand.500" }}>Горящие туры</Link>
            <Link href="/countries" color="gray.600" _hover={{ color: "brand.500" }}>Страны</Link>
            <Link href="/destinations" color="gray.600" _hover={{ color: "brand.500" }}>Популярные направления</Link>
          </VStack>
          
          {/* Колонка 2: Информация */}
          <VStack align="start" spacing={4}>
            <Heading size="md" color="brand.600" mb={2}>Информация</Heading>
            <Link href="/about" color="gray.600" _hover={{ color: "brand.500" }}>О компании</Link>
            <Link href="/contacts" color="gray.600" _hover={{ color: "brand.500" }}>Контакты</Link>
            <Link href="/faq" color="gray.600" _hover={{ color: "brand.500" }}>Вопросы и ответы</Link>
            <Link href="/payment" color="gray.600" _hover={{ color: "brand.500" }}>Способы оплаты</Link>
          </VStack>
          
          {/* Колонка 3: Контакты */}
          <VStack align="start" spacing={4}>
            <Heading size="md" color="brand.600" mb={2}>Контакты</Heading>
            <HStack>
              <Icon as={FaPhone} color="brand.500" />
              <Link href="tel:+77771234567" color="gray.600" _hover={{ color: "brand.500" }}>+7 (777) 123-45-67</Link>
            </HStack>
            <HStack>
              <Icon as={FaClock} color="brand.500" />
              <Text color="gray.600" fontSize="sm">Ежедневно с 10:00 до 20:00</Text>
            </HStack>
            <HStack>
              <Icon as={FaMapMarkerAlt} color="brand.500" />
              <Text color="gray.600" fontSize="sm">г. Алматы, ул. Примерная, 1</Text>
            </HStack>
          </VStack>
          
          {/* Колонка 4: Мы в соцсетях */}
          <VStack align="start" spacing={4}>
            <Heading size="md" color="brand.600" mb={2}>Мы в соцсетях</Heading>
            <HStack spacing={4}>
              <Link href="#" isExternal aria-label="Instagram">
                <Icon as={FaInstagram} boxSize={6} color="brand.500" _hover={{ color: "brand.600" }} />
              </Link>
              <Link href="#" isExternal aria-label="Telegram">
                <Icon as={FaTelegram} boxSize={6} color="brand.500" _hover={{ color: "brand.600" }} />
              </Link>
              <Link href="#" isExternal aria-label="WhatsApp">
                <Icon as={FaWhatsapp} boxSize={6} color="brand.500" _hover={{ color: "brand.600" }} />
              </Link>
              <Link href="#" isExternal aria-label="Facebook">
                <Icon as={FaFacebook} boxSize={6} color="brand.500" _hover={{ color: "brand.600" }} />
              </Link>
            </HStack>
            
            <Box mt={4}>
              <Heading size="sm" color="brand.600" mb={2}>Способы оплаты</Heading>
              <HStack spacing={2} mt={2}>
                <Image src="/images/visa.png" alt="Visa" h="30px" fallbackSrc="https://via.placeholder.com/50x30?text=Visa" />
                <Image src="/images/mastercard.png" alt="MasterCard" h="30px" fallbackSrc="https://via.placeholder.com/50x30?text=MC" />
              </HStack>
            </Box>
          </VStack>
        </SimpleGrid>
        
        <Divider my={6} borderColor="gray.300" />
        
        {/* Нижняя часть футера */}
        <Flex direction={{ base: "column", md: "row" }} justify="space-between" align={{ base: "center", md: "center" }} textAlign={{ base: "center", md: "left" }}>
          <Text color="gray.500" fontSize="sm" mb={{ base: 4, md: 0 }}>
            © 2025 Tour Express. Все права защищены.
          </Text>
          <HStack spacing={4}>
            <Link href="/privacy" color="gray.500" fontSize="sm" _hover={{ color: "brand.500" }}>Политика конфиденциальности</Link>
            <Link href="/terms" color="gray.500" fontSize="sm" _hover={{ color: "brand.500" }}>Пользовательское соглашение</Link>
          </HStack>
        </Flex>
      </Box>
    </Box>
  );
}
