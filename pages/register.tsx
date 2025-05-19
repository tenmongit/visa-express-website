import { useState, useEffect } from 'react';
import { Box, Container, Heading, Text, Input, Button, FormControl, FormLabel, VStack, useToast, Flex, Link as ChakraLink } from '@chakra-ui/react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import Header from '../components/Header';
import Footer from '../components/Footer';

export default function Register() {
  const [email, setEmail] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');
  const [isClient, setIsClient] = useState(false);
  const [loading, setLoading] = useState(false);
  const toast = useToast();
  const router = useRouter();

  useEffect(() => { setIsClient(true); }, []);

  const validate = () => {
    if (!email) return 'Пожалуйста, введите email';
    if (!/^\S+@\S+\.\S+$/.test(email)) return 'Некорректный email';
    if (!firstName) return 'Пожалуйста, введите имя';
    if (!lastName) return 'Пожалуйста, введите фамилию';
    if (!phone) return 'Пожалуйста, введите телефон';
    if (!/^\+?\d{10,15}$/.test(phone.replace(/\D/g, ''))) return 'Некорректный номер телефона';
    if (!password) return 'Пожалуйста, введите пароль';
    if (password.length < 6) return 'Пароль должен содержать минимум 6 символов';
    return null;
  };

  const handleRegister = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const error = validate();
    if (error) {
      toast({ title: error, status: 'error', duration: 4000 });
      return;
    }
    setLoading(true);
    try {
      const res = await fetch('http://localhost:5000/api/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, first_name: firstName, last_name: lastName, phone, password })
      });
      const data = await res.json();
      if (res.ok) {
        toast({ title: 'Регистрация прошла успешно', status: 'success', duration: 3000 });
        router.push('/login');
      } else {
        toast({ title: data.error || 'Ошибка регистрации', status: 'error', duration: 4000 });
      }
    } catch {
      toast({ title: 'Ошибка регистрации', status: 'error' });
    }
    setLoading(false);
  };

  if (!isClient) return <Box minH="100vh" bg="gray.50"><Header /></Box>;

  return (
    <Box minH="100vh" bg="gray.50">
      <Header />
      <Container maxW="md" py={12}>
        <Box bg="white" p={8} borderRadius="md" boxShadow="lg">
          <Heading mb={6} size="lg">Регистрация</Heading>
          <form onSubmit={handleRegister}>
            <VStack spacing={4} align="stretch">
              <FormControl id="email" isRequired>
                <FormLabel>Email</FormLabel>
                <Input value={email} onChange={e => setEmail(e.target.value)} placeholder="Введите email" />
              </FormControl>
              <FormControl id="firstName" isRequired>
                <FormLabel>Имя</FormLabel>
                <Input value={firstName} onChange={e => setFirstName(e.target.value)} placeholder="Введите имя" />
              </FormControl>
              <FormControl id="lastName" isRequired>
                <FormLabel>Фамилия</FormLabel>
                <Input value={lastName} onChange={e => setLastName(e.target.value)} placeholder="Введите фамилию" />
              </FormControl>
              <FormControl id="phone" isRequired>
                <FormLabel>Телефон</FormLabel>
                <Input value={phone} onChange={e => setPhone(e.target.value)} placeholder="Введите телефон" />
              </FormControl>
              <FormControl id="password" isRequired>
                <FormLabel>Пароль</FormLabel>
                <Input value={password} onChange={e => setPassword(e.target.value)} type="password" placeholder="Введите пароль" />
              </FormControl>
              <Button type="submit" colorScheme="blue" isLoading={loading}>Зарегистрироваться</Button>
              <Text fontSize="sm">Уже есть аккаунт? <ChakraLink as={Link} href="/login" color="blue.500">Войти</ChakraLink></Text>
            </VStack>
          </form>
        </Box>
      </Container>
      <Footer />
    </Box>
  );
}
