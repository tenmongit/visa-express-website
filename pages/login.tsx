import { useState, useEffect } from 'react';
import { 
  Box, 
  Container, 
  Heading, 
  Text, 
  Input, 
  Button, 
  FormControl, 
  FormLabel, 
  VStack, 
  HStack, 
  Checkbox, 
  Divider, 
  useToast,
  Flex,
  Link as ChakraLink,
  InputGroup,
  InputRightElement,
  Icon
} from '@chakra-ui/react';
import { FaEye, FaEyeSlash, FaGoogle, FaFacebook } from 'react-icons/fa';
import { useRouter } from 'next/router';
import Link from 'next/link';
import Header from '../components/Header';
import Footer from '../components/Footer';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);
  const [isClient, setIsClient] = useState(false);
  
  // Это решит проблему гидратации, так как компонент будет рендериться только на клиенте
  useEffect(() => {
    setIsClient(true);
  }, []);
  const router = useRouter();
  const toast = useToast();

  const handleLogin = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    // В реальном приложении здесь будет запрос к API для аутентификации
    // Для демонстрации просто перенаправляем на страницу профиля
    toast({
      title: "Вход выполнен успешно",
      status: "success",
      duration: 3000,
      isClosable: true,
    });
    
    router.push('/profile');
  };

  // Рендерим контент только на клиенте, чтобы избежать ошибок гидратации
  if (!isClient) {
    return (
      <Box minH="100vh" bg="gray.50">
        <Header />
        <Container maxW="md" py={12}>
          <Box bg="white" p={8} borderRadius="lg" boxShadow="md" height="400px" />
        </Container>
        <Footer />
      </Box>
    );
  }
  
  return (
    <Box minH="100vh" bg="gray.50">
      <Header />
      
      <Container maxW="md" py={12}>
        <Box bg="white" p={8} borderRadius="lg" boxShadow="md">
          <VStack spacing={6} align="stretch">
            <Heading size="lg" textAlign="center" color="brand.600">Вход в личный кабинет</Heading>
            <Text textAlign="center" color="gray.500">
              Войдите в свой аккаунт для доступа к заказам и личным данным
            </Text>
            
            <form onSubmit={handleLogin}>
              <VStack spacing={4} align="stretch">
                <FormControl>
                  <FormLabel fontSize="sm" color="gray.600">Email</FormLabel>
                  <Input 
                    type="email" 
                    value={email} 
                    onChange={(e) => setEmail(e.target.value)} 
                    placeholder="Введите ваш email"
                    focusBorderColor="brand.500"
                    required
                  />
                </FormControl>
                
                <FormControl>
                  <FormLabel fontSize="sm" color="gray.600">Пароль</FormLabel>
                  <InputGroup>
                    <Input 
                      type={showPassword ? "text" : "password"} 
                      value={password} 
                      onChange={(e) => setPassword(e.target.value)} 
                      placeholder="Введите ваш пароль"
                      focusBorderColor="brand.500"
                      required
                    />
                    <InputRightElement>
                      <Button 
                        variant="ghost" 
                        size="sm" 
                        onClick={() => setShowPassword(!showPassword)}
                      >
                        <Icon as={showPassword ? FaEyeSlash : FaEye} />
                      </Button>
                    </InputRightElement>
                  </InputGroup>
                </FormControl>
                
                <Flex justify="space-between" align="center">
                  <Checkbox 
                    colorScheme="brand" 
                    isChecked={rememberMe}
                    onChange={(e) => setRememberMe(e.target.checked)}
                  >
                    <Text fontSize="sm">Запомнить меня</Text>
                  </Checkbox>
                  
                  <ChakraLink 
                    fontSize="sm" 
                    color="brand.500" 
                    _hover={{ textDecoration: 'underline' }}
                  >
                    Забыли пароль?
                  </ChakraLink>
                </Flex>
                
                <Button 
                  type="submit" 
                  colorScheme="brand" 
                  size="lg" 
                  w="100%"
                  mt={2}
                >
                  Войти
                </Button>
              </VStack>
            </form>
            
            <HStack my={4}>
              <Divider />
              <Text fontSize="sm" color="gray.500" whiteSpace="nowrap">или войти через</Text>
              <Divider />
            </HStack>
            
            <HStack spacing={4}>
              <Button 
                leftIcon={<FaGoogle />} 
                w="100%" 
                colorScheme="red" 
                variant="outline"
              >
                Google
              </Button>
              <Button 
                leftIcon={<FaFacebook />} 
                w="100%" 
                colorScheme="facebook" 
                variant="outline"
              >
                Facebook
              </Button>
            </HStack>
            
            <Text textAlign="center" fontSize="sm" color="gray.600" mt={4}>
              Еще нет аккаунта?{' '}
              <Link href="/register" passHref>
                <ChakraLink color="brand.500" fontWeight="medium">
                  Зарегистрироваться
                </ChakraLink>
              </Link>
            </Text>
          </VStack>
        </Box>
      </Container>
      
      <Footer />
    </Box>
  );
}
