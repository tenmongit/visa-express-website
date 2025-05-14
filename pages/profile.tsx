import { useState } from 'react';
import { 
  Box, 
  Container, 
  Grid, 
  GridItem, 
  Heading, 
  Text, 
  VStack, 
  HStack, 
  Avatar, 
  Button, 
  Divider, 
  Input, 
  FormControl, 
  FormLabel,
  Flex,
  Icon,
  useColorModeValue,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  Badge
} from '@chakra-ui/react';
import { 
  FaUser, 
  FaGift, 
  FaHeart, 
  FaSuitcase, 
  FaCog, 
  FaBell, 
  FaSignOutAlt,
  FaCamera,
  FaCheck
} from 'react-icons/fa';
import Header from '../components/Header';
import Footer from '../components/Footer';

// Компонент элемента бокового меню
interface SidebarItemProps {
  icon: React.ElementType;
  text: string;
  isActive: boolean;
  onClick: () => void;
}

const SidebarItem = ({ icon, text, isActive, onClick }: SidebarItemProps) => {
  const activeBg = useColorModeValue('brand.50', 'brand.900');
  const activeColor = useColorModeValue('brand.600', 'brand.200');
  const hoverBg = useColorModeValue('gray.100', 'gray.700');
  
  return (
    <Flex
      align="center"
      p={3}
      mb={2}
      borderRadius="md"
      cursor="pointer"
      bg={isActive ? activeBg : 'transparent'}
      color={isActive ? activeColor : 'inherit'}
      _hover={{ bg: isActive ? activeBg : hoverBg }}
      onClick={onClick}
      transition="all 0.2s"
    >
      <Icon as={icon} boxSize={5} mr={3} />
      <Text fontWeight={isActive ? "medium" : "normal"}>{text}</Text>
    </Flex>
  );
};

export default function Profile() {
  const [activeTab, setActiveTab] = useState('profile');
  const [orderFilter, setOrderFilter] = useState('active');
  
  // Данные пользователя (в реальном приложении будут загружаться с сервера)
  const userData = {
    name: 'Мадияр',
    surname: 'Мустафин',
    email: 'iluvtravel@gmail.com',
    phone: '+7 778 308-84-30'
  };
  
  // Функция для отображения активного раздела
  const renderActiveSection = () => {
    switch(activeTab) {
      case 'profile':
        return (
          <Box bg="white" p={6} borderRadius="lg" boxShadow="sm">
            <Heading size="md" mb={6}>Настройка профиля</Heading>
            
            <Flex direction={{ base: 'column', md: 'row' }} mb={8}>
              <Box mr={{ base: 0, md: 8 }} mb={{ base: 6, md: 0 }} width={{ base: "100%", md: "auto" }}>
                {/* Аватар в стиле kaztour */}
                <Flex direction="column" align="center" justify="center">
                  <Avatar 
                    size="2xl" 
                    name={`${userData.name} ${userData.surname}`} 
                    bg="#6b0f6b"
                    color="white"
                    mb={4}
                  />
                  <Text fontSize="sm" color="gray.500" mb={2}>
                    JPG или PNG до 800 KB
                  </Text>
                  <Button 
                    leftIcon={<FaCamera />} 
                    size="sm" 
                    colorScheme="blue" 
                    width={{ base: "100%", md: "auto" }}
                  >
                    Добавить фото
                  </Button>
                </Flex>
              </Box>
              
              <Box flex="1">
                <Grid templateColumns={{ base: "1fr", md: "1fr 1fr" }} gap={6}>
                  <Box>
                    <Text fontWeight="medium" mb={2}>Имя</Text>
                    <Input 
                      value={userData.name} 
                      focusBorderColor="blue.500"
                      bg="white"
                      borderColor="gray.300"
                      size="lg"
                    />
                  </Box>
                  
                  <Box>
                    <Text fontWeight="medium" mb={2}>Фамилия</Text>
                    <Input 
                      value={userData.surname} 
                      focusBorderColor="blue.500"
                      bg="white"
                      borderColor="gray.300"
                      size="lg"
                    />
                  </Box>
                  
                  <Box>
                    <Text fontWeight="medium" mb={2}>Email</Text>
                    <Input 
                      value={userData.email} 
                      focusBorderColor="blue.500"
                      bg="white"
                      borderColor="gray.300"
                      size="lg"
                    />
                  </Box>
                  
                  <Box>
                    <Text fontWeight="medium" mb={2}>Телефон</Text>
                    <Input 
                      value={userData.phone} 
                      focusBorderColor="blue.500"
                      bg="white"
                      borderColor="gray.300"
                      size="lg"
                    />
                  </Box>
                </Grid>
              </Box>
            </Flex>
            
            <Flex justify="flex-end" mt={6}>
              <Button colorScheme="blue" leftIcon={<FaCheck />} size="md">
                Сохранить
              </Button>
            </Flex>
          </Box>
        );
        
      case 'orders':
        return (
          <Box bg="white" p={6} borderRadius="lg" boxShadow="sm">
            <Heading size="md" mb={6}>Мои заказы</Heading>
            
            <Tabs variant="soft-rounded" colorScheme="brand" mb={6}>
              <TabList>
                <Tab 
                  px={5} 
                  onClick={() => setOrderFilter('active')}
                  fontWeight={orderFilter === 'active' ? 'medium' : 'normal'}
                >
                  Активные
                </Tab>
                <Tab 
                  px={5} 
                  onClick={() => setOrderFilter('archived')}
                  fontWeight={orderFilter === 'archived' ? 'medium' : 'normal'}
                >
                  Архивные
                </Tab>
                <Tab 
                  px={5} 
                  onClick={() => setOrderFilter('canceled')}
                  fontWeight={orderFilter === 'canceled' ? 'medium' : 'normal'}
                >
                  Завершенные
                </Tab>
              </TabList>
            </Tabs>
            
            <Box textAlign="center" py={10}>
              <Text fontSize="lg" color="gray.500">
                В заказах пока ничего нет
              </Text>
              <Text color="gray.500" fontSize="sm" mt={2} mb={6}>
                Забронируйте или оплатите тур
              </Text>
              <Button colorScheme="brand" size="lg">
                Выбрать тур
              </Button>
            </Box>
          </Box>
        );
        
      case 'favorites':
        return (
          <Box bg="white" p={6} borderRadius="lg" boxShadow="sm">
            <Heading size="md" mb={6}>Избранное</Heading>
            <Box textAlign="center" py={10}>
              <Text fontSize="lg" color="gray.500">
                У вас пока нет избранных туров
              </Text>
              <Text color="gray.500" fontSize="sm" mt={2} mb={6}>
                Добавляйте понравившиеся туры в избранное
              </Text>
              <Button colorScheme="brand" size="lg">
                Выбрать тур
              </Button>
            </Box>
          </Box>
        );
        
      case 'bonuses':
        return (
          <Box bg="white" p={6} borderRadius="lg" boxShadow="sm">
            <Heading size="md" mb={6}>Бонусы</Heading>
            <Flex 
              direction="column" 
              align="center" 
              justify="center" 
              bg="gray.50" 
              p={8} 
              borderRadius="md"
            >
              <Text fontSize="4xl" fontWeight="bold" color="brand.500">0</Text>
              <Text color="gray.600">бонусов</Text>
              <Text fontSize="sm" color="gray.500" mt={4} textAlign="center">
                Бонусы начисляются за покупку туров и могут быть использованы для оплаты будущих путешествий
              </Text>
            </Flex>
          </Box>
        );
        
      default:
        return null;
    }
  };
  
  return (
    <Box minH="100vh" bg="gray.50">
      <Header />
      
      <Container maxW="6xl" py={10}>
        <Grid templateColumns={{ base: "1fr", md: "250px 1fr" }} gap={8}>
          {/* Боковое меню */}
          <GridItem>
            <Box bg="white" p={4} borderRadius="lg" boxShadow="sm">
              <Flex align="center" mb={6}>
                <Avatar 
                  size="md" 
                  name={`${userData.name} ${userData.surname}`} 
                  mr={3}
                />
                <Box>
                  <Text fontWeight="medium">{userData.name} {userData.surname}</Text>
                  <Text fontSize="sm" color="gray.500">{userData.email}</Text>
                </Box>
              </Flex>
              
              <Divider mb={4} />
              
              <VStack align="stretch" spacing={1}>
                <SidebarItem 
                  icon={FaUser} 
                  text="Настройка профиля" 
                  isActive={activeTab === 'profile'} 
                  onClick={() => setActiveTab('profile')}
                />
                <SidebarItem 
                  icon={FaSuitcase} 
                  text="Мои заказы" 
                  isActive={activeTab === 'orders'} 
                  onClick={() => setActiveTab('orders')}
                />
                <SidebarItem 
                  icon={FaHeart} 
                  text="Избранное" 
                  isActive={activeTab === 'favorites'} 
                  onClick={() => setActiveTab('favorites')}
                />
                <SidebarItem 
                  icon={FaGift} 
                  text="Бонусы" 
                  isActive={activeTab === 'bonuses'} 
                  onClick={() => setActiveTab('bonuses')}
                />
                <SidebarItem 
                  icon={FaBell} 
                  text="Уведомления" 
                  isActive={activeTab === 'notifications'} 
                  onClick={() => setActiveTab('notifications')}
                />
                <Divider my={2} />
                <SidebarItem 
                  icon={FaSignOutAlt} 
                  text="Выйти" 
                  isActive={false} 
                  onClick={() => console.log('Logout')}
                />
              </VStack>
            </Box>
          </GridItem>
          
          {/* Основной контент */}
          <GridItem>
            {renderActiveSection()}
          </GridItem>
        </Grid>
      </Container>
      
      <Footer />
    </Box>
  );
}
