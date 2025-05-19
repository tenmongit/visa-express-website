        import { Box, Flex, HStack, Link, Button, Text, Container, Image, IconButton, Drawer, DrawerBody, DrawerHeader, DrawerOverlay, DrawerContent, DrawerCloseButton, useDisclosure, VStack } from "@chakra-ui/react";
import NextLink from "next/link";
import { FaUser, FaPhone, FaSearch, FaBars, FaMapMarkerAlt, FaFire, FaGlobe, FaEnvelope } from "react-icons/fa";
import { motion } from "framer-motion";

const MotionFlex = motion(Flex);
const MotionLink = motion(Link);

export default function Header() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  
  const menuItems = [
    { name: "Туры", href: "/tours", icon: <FaMapMarkerAlt color="#0066ff" /> },
    { name: "Страны", href: "/countries", icon: <FaGlobe color="#0066ff" /> },
    { name: "Горящие туры", href: "/hot", icon: <FaFire color="#0066ff" /> },
    { name: "Контакты", href: "/contacts", icon: <FaEnvelope color="#0066ff" /> }
  ];
  
  return (
    <>
      <Box as="header" bg="white" boxShadow="lg" position="sticky" top={0} zIndex={100}>
        {/* Верхняя часть с контактами */}
        <Box bg="brand.500" color="white" py={2}>
          <Container maxW="6xl">
            <Flex justify="space-between" align="center">
              <Flex align="center">
                <FaPhone size="14px" />
                <Text ml={2} fontSize="sm">+7 (777) 123-45-67</Text>
              </Flex>
              <Flex display={{ base: "none", md: "flex" }}>
                <Link href="#" fontSize="sm" mx={3} color="white" _hover={{ color: "accent.500" }}>Акции</Link>
                <Link href="#" fontSize="sm" mx={3} color="white" _hover={{ color: "accent.500" }}>Статьи</Link>
                <Link href="#" fontSize="sm" mx={3} color="white" _hover={{ color: "accent.500" }}>О компании</Link>
              </Flex>
            </Flex>
          </Container>
        </Box>
        
        {/* Основная часть меню */}
        <Container maxW="6xl" py={3}>
          <Flex align="center" justify="space-between">
            <MotionFlex 
              align="center"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              <Link href="/">
                <Image src="/images/logo.svg" alt="Tour Express" h="40px" objectFit="contain" mr={2} display="inline-block" />
              </Link>
            </MotionFlex>
            
            <HStack spacing={8} as="nav" display={{ base: "none", md: "flex" }}>
              {menuItems.map((item, index) => (
                <MotionLink 
                  key={item.name}
                  href={item.href} 
                  fontWeight="medium"
                  fontSize="md"
                  color="gray.700"
                  position="relative"
                  _hover={{ color: "brand.500" }}
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: 0.1 * index }}
                  _after={{
                    content: '""',
                    position: "absolute",
                    width: "0%",
                    height: "2px",
                    bottom: "-4px",
                    left: "0",
                    bg: "brand.500",
                    transition: "all 0.3s ease"
                  }}
                  sx={{
                    "&:hover::after": {
                      width: "100%"
                    }
                  }}
                >
                  {item.name}
                </MotionLink>
              ))}
            </HStack>
            
            <Flex>
              <Button 
                leftIcon={<FaSearch />} 
                colorScheme="brand" 
                variant="ghost" 
                size="sm"
                mr={3}
                display={{ base: "none", md: "flex" }}
                _hover={{ bg: "brand.50" }}
              >
                Поиск
              </Button>
              <Flex ml={4} display={{ base: "none", md: "flex" }}>
                <Button 
                  as={NextLink} 
                  href="/login" 
                  variant="outline" 
                  colorScheme="brand" 
                  mr={2} 
                  size="sm"
                >
                  Вход
                </Button>
                <Button 
                  as={NextLink} 
                  href="/register" 
                  variant="outline" 
                  colorScheme="brand" 
                  mr={2} 
                  size="sm"
                >
                  Регистрация
                </Button>
                <Button
                  as={NextLink}
                  href="/profile"
                  leftIcon={<FaUser />}
                  colorScheme="brand"
                  variant="solid"
                  size="sm"
                  _hover={{ transform: "translateY(-2px)", boxShadow: "md" }}
                  transition="all 0.2s"
                >
                  Личный кабинет
                </Button>
              </Flex>
              
              {/* Мобильное меню */}
              <IconButton
                aria-label="Открыть меню"
                icon={<FaBars />}
                display={{ base: "flex", md: "none" }}
                colorScheme="brand"
                onClick={onOpen}
              />
            </Flex>
          </Flex>
        </Container>
      </Box>
      
      {/* Мобильное меню-гамбургер */}
      <Drawer isOpen={isOpen} placement="right" onClose={onClose}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader borderBottomWidth="1px">
            <Image src="/images/logo.svg" alt="Tour Express" h="30px" objectFit="contain" />
          </DrawerHeader>
          <DrawerBody>
            <VStack spacing={4} align="stretch" mt={4}>
              {menuItems.map((item) => (
                <Link key={item.name} href={item.href} onClick={onClose}>
                  <Flex align="center" p={2} borderRadius="md" _hover={{ bg: "brand.50" }}>
                    {item.icon}
                    <Text ml={3}>{item.name}</Text>
                  </Flex>
                </Link>
              ))}
              
              <Box pt={4} mt={4} borderTopWidth="1px">
                <VStack spacing={2} width="100%">
                  <Button
                    as={NextLink}
                    href="/login"
                    colorScheme="brand"
                    variant="outline"
                    size="sm"
                    width="100%"
                  >
                    Вход
                  </Button>
                  
                  <Button
                    as={NextLink}
                    href="/register"
                    colorScheme="brand"
                    variant="outline"
                    size="sm"
                    width="100%"
                  >
                    Регистрация
                  </Button>
                  
                  <Button
                    as={NextLink}
                    href="/profile"
                    leftIcon={<FaUser />}
                    colorScheme="brand"
                    variant="solid"
                    size="sm"
                    width="100%"
                    _hover={{ transform: "translateY(-2px)", boxShadow: "md" }}
                    transition="all 0.2s"
                  >
                    Личный кабинет
                  </Button>
                </VStack>
              </Box>
            </VStack>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
}
