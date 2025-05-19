import { Box, Container, Heading, Text, SimpleGrid, Button, Flex, Input, Textarea, FormControl, FormLabel, VStack, HStack, Icon, useToast } from "@chakra-ui/react";
import { motion } from "framer-motion";
import { FaMapMarkerAlt, FaPhone, FaEnvelope, FaClock, FaTelegram, FaWhatsapp, FaInstagram } from "react-icons/fa";
import { useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

const MotionBox = motion(Box);
const MotionHeading = motion(Heading);

export default function Contacts() {
  const toast = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: ""
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();
  try {
    const response = await fetch('http://localhost:5000/api/contacts', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        message: formData.message,
      }),
    });
    if (response.ok) {
      toast({
        title: "Сообщение отправлено",
        description: "Мы свяжемся с вами в ближайшее время",
        status: "success",
        duration: 5000,
        isClosable: true,
      });
      setFormData({
        name: "",
        email: "",
        phone: "",
        message: ""
      });
    } else {
      toast({
        title: "Ошибка",
        description: "Не удалось отправить сообщение. Попробуйте позже.",
        status: "error",
        duration: 5000,
        isClosable: true,
      });
    }
  } catch (error) {
    toast({
      title: "Ошибка",
      description: "Не удалось отправить сообщение. Попробуйте позже.",
      status: "error",
      duration: 5000,
      isClosable: true,
    });
  }
};

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
            Контакты
          </MotionHeading>
          <MotionBox
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <Text fontSize="xl" maxW="2xl">
              Свяжитесь с нами любым удобным способом, и мы поможем организовать ваш идеальный отдых.
            </Text>
          </MotionBox>
        </Container>
      </Box>
      
      <Container maxW="6xl" py={10}>
        <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10}>
          <MotionBox
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Heading size="lg" mb={6} color="brand.600">Наши контакты</Heading>
            
            <VStack align="start" spacing={6}>
              <HStack align="start" spacing={4}>
                <Box bg="brand.50" p={3} borderRadius="full" color="brand.500">
                  <FaMapMarkerAlt size="20px" />
                </Box>
                <Box>
                  <Text fontWeight="bold" mb={1}>Адрес</Text>
                  <Text color="gray.600">г. Москва, ул. Туристическая, д. 42</Text>
                  <Text color="gray.600">Бизнес-центр "Горизонт", офис 310</Text>
                </Box>
              </HStack>
              
              <HStack align="start" spacing={4}>
                <Box bg="brand.50" p={3} borderRadius="full" color="brand.500">
                  <FaPhone size="20px" />
                </Box>
                <Box>
                  <Text fontWeight="bold" mb={1}>Телефоны</Text>
                  <Text color="gray.600">+7 (777) 123-45-67 (основной)</Text>
                  <Text color="gray.600">+7 (777) 765-43-21 (отдел бронирования)</Text>
                </Box>
              </HStack>
              
              <HStack align="start" spacing={4}>
                <Box bg="brand.50" p={3} borderRadius="full" color="brand.500">
                  <FaEnvelope size="20px" />
                </Box>
                <Box>
                  <Text fontWeight="bold" mb={1}>Email</Text>
                  <Text color="gray.600">info@tourexpress.ru</Text>
                  <Text color="gray.600">booking@tourexpress.ru</Text>
                </Box>
              </HStack>
              
              <HStack align="start" spacing={4}>
                <Box bg="brand.50" p={3} borderRadius="full" color="brand.500">
                  <FaClock size="20px" />
                </Box>
                <Box>
                  <Text fontWeight="bold" mb={1}>Режим работы</Text>
                  <Text color="gray.600">Пн-Пт: 9:00 - 20:00</Text>
                  <Text color="gray.600">Сб: 10:00 - 18:00</Text>
                  <Text color="gray.600">Вс: выходной</Text>
                </Box>
              </HStack>
              
              <Box>
                <Text fontWeight="bold" mb={3}>Мы в социальных сетях</Text>
                <HStack spacing={4}>
                  <Button leftIcon={<FaTelegram />} colorScheme="telegram" variant="outline">Telegram</Button>
                  <Button leftIcon={<FaWhatsapp />} colorScheme="green" variant="outline">WhatsApp</Button>
                  <Button leftIcon={<FaInstagram />} colorScheme="pink" variant="outline">Instagram</Button>
                </HStack>
              </Box>
            </VStack>
          </MotionBox>
          
          <MotionBox
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <Box bg="white" p={6} borderRadius="lg" boxShadow="md">
              <Heading size="lg" mb={6} color="brand.600">Напишите нам</Heading>
              
              <form onSubmit={handleSubmit}>
                <VStack spacing={4}>
                  <FormControl isRequired>
                    <FormLabel>Ваше имя</FormLabel>
                    <Input 
                      name="name" 
                      value={formData.name} 
                      onChange={handleInputChange} 
                      placeholder="Иван Иванов"
                      focusBorderColor="brand.500"
                    />
                  </FormControl>
                  
                  <FormControl isRequired>
                    <FormLabel>Телефон</FormLabel>
                    <Input 
                      name="phone" 
                      value={formData.phone} 
                      onChange={handleInputChange} 
                      placeholder="+7 (___) ___-__-__"
                      focusBorderColor="brand.500"
                    />
                  </FormControl>
                  
                  <FormControl>
                    <FormLabel>Email</FormLabel>
                    <Input 
                      name="email" 
                      value={formData.email} 
                      onChange={handleInputChange} 
                      placeholder="example@mail.com"
                      focusBorderColor="brand.500"
                    />
                  </FormControl>
                  
                  <FormControl isRequired>
                    <FormLabel>Сообщение</FormLabel>
                    <Textarea 
                      name="message" 
                      value={formData.message} 
                      onChange={handleInputChange} 
                      placeholder="Ваш вопрос или комментарий"
                      focusBorderColor="brand.500"
                      rows={5}
                    />
                  </FormControl>
                  
                  <Button 
                    type="submit" 
                    colorScheme="brand" 
                    size="lg" 
                    width="100%" 
                    mt={4}
                  >
                    Отправить сообщение
                  </Button>
                </VStack>
              </form>
            </Box>
          </MotionBox>
        </SimpleGrid>
        
        <Box mt={16} mb={8}>
          <Heading size="lg" mb={6} color="brand.600" textAlign="center">Как нас найти</Heading>
          <Box borderRadius="lg" overflow="hidden" boxShadow="md" h="400px">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2245.5802238429557!2d37.6206627!3d55.7539557!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46b54a50b315e573%3A0xa886bf5a3d9b2e68!2z0JzQvtGB0LrQvtCy0YHQutC40Lkg0JrRgNC10LzQu9GM!5e0!3m2!1sru!2sru!4v1652345678901!5m2!1sru!2sru" 
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              allowFullScreen 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </Box>
        </Box>
      </Container>
      
      <Footer />
    </Box>
  );
}
