import { Box, Stack, Input, Button, Select, Flex, Text, Heading, Grid, GridItem, FormControl, FormLabel, NumberInput, NumberInputField, NumberInputStepper, NumberIncrementStepper, NumberDecrementStepper } from "@chakra-ui/react";
import { motion } from "framer-motion";
import { FaSearch, FaPlane, FaCalendarAlt, FaMapMarkerAlt, FaUsers, FaMoneyBillWave } from "react-icons/fa";
import { useState } from "react";

const MotionBox = motion(Box);

export default function TourSearch() {
  const [searchData, setSearchData] = useState({
    country: '',
    departureDate: '',
    budget: 50000,
  });
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setSearchData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleNumberInputChange = (value: string) => {
    setSearchData(prev => ({ ...prev, budget: Number(value) }));
  };

  const handleSearch = async () => {
    setLoading(true);
    setError('');
    setResult(null);
    try {
      const response = await fetch('http://localhost:5000/api/search', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(searchData),
      });
      if (response.ok) {
        const data = await response.json();
        setResult(data);
      } else {
        setError('Ошибка поиска. Попробуйте позже.');
      }
    } catch (err) {
      setError('Ошибка поиска. Попробуйте позже.');
    }
    setLoading(false);
  };

  return (
    <MotionBox 
      bg="white" 
      boxShadow="xl" 
      borderRadius="lg" 
      p={{ base: 4, md: 6 }} 
      mb={10}
      mt={{ base: 5, md: 0 }} // Исправлено смещение, чтобы не заезжал наверх
      position="relative"
      zIndex={10}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.2 }}
    >
      <Heading size="md" mb={5} color="brand.500" textAlign="center">Поиск тура</Heading>
      
      <Grid
        templateColumns={{ base: "1fr", md: "repeat(3, 1fr) auto" }}
        gap={{ base: 3, md: 5 }}
        alignItems={{ base: "stretch", md: "end" }}
      >
        <GridItem>
          <FormControl>
            <FormLabel fontSize="sm" fontWeight="medium" color="gray.600">
              <Flex align="center">
                <FaMapMarkerAlt color="#0066ff" />
                <Text ml={2}>Куда</Text>
              </Flex>
            </FormLabel>
            <Select 
              name="country"
              value={searchData.country}
              onChange={handleInputChange}
              placeholder="Выберите страну"
              focusBorderColor="brand.500"
              bg="gray.50"
              _hover={{ bg: "gray.100" }}
              transition="all 0.2s"
            >
              <option value="turkey">Турция</option>
              <option value="egypt">Египет</option>
              <option value="uae">ОАЭ</option>
              <option value="thailand">Таиланд</option>
            </Select>
          </FormControl>
        </GridItem>
        
        <GridItem>
          <FormControl>
            <FormLabel fontSize="sm" fontWeight="medium" color="gray.600">
              <Flex align="center">
                <FaCalendarAlt color="#0066ff" />
                <Text ml={2}>Дата вылета</Text>
              </Flex>
            </FormLabel>
            <Input 
              name="departureDate"
              value={searchData.departureDate}
              onChange={handleInputChange}
              type="date" 
              focusBorderColor="brand.500"
              bg="gray.50"
              _hover={{ bg: "gray.100" }}
              transition="all 0.2s"
            />
          </FormControl>
        </GridItem>
        
        <GridItem>
          <FormControl>
            <FormLabel fontSize="sm" fontWeight="medium" color="gray.600">
              <Flex align="center">
                <FaMoneyBillWave color="#0066ff" />
                <Text ml={2}>Бюджет</Text>
              </Flex>
            </FormLabel>
            <NumberInput 
              min={0} 
              max={1000000} 
              step={5000}
              value={searchData.budget}
              onChange={handleNumberInputChange}
              focusBorderColor="brand.500"
            >
              <NumberInputField 
                name="budget"
                placeholder="Бюджет, ₽"
                bg="gray.50"
                _hover={{ bg: "gray.100" }}
                transition="all 0.2s"
              />
              <NumberInputStepper>
                <NumberIncrementStepper color="brand.500" />
                <NumberDecrementStepper color="brand.500" />
              </NumberInputStepper>
            </NumberInput>
          </FormControl>
        </GridItem>
        
        <GridItem alignSelf={{ base: "stretch", md: "end" }}>
          <Button
            colorScheme="brand"
            size="lg"
            width={{ base: "100%", md: "180px" }}
            minWidth="140px"
            leftIcon={<FaSearch />}
            _hover={{ transform: "translateY(-2px)", boxShadow: "lg" }}
            transition="all 0.2s ease"
            onClick={handleSearch}
            isLoading={loading}
          >
            Найти
          </Button>
        </GridItem>
      </Grid>
      {error && <Text color="red.500" mt={4}>{error}</Text>}
      {result && <Box mt={4} p={4} bg="gray.50" borderRadius="md">Результаты поиска: {JSON.stringify(result)}</Box>}
      <Flex justify="center" mt={4} flexWrap="wrap" gap={2}>
        <Button size="sm" variant="outline" colorScheme="brand" borderRadius="full">Горящие туры</Button>
        <Button size="sm" variant="outline" colorScheme="brand" borderRadius="full">Раннее бронирование</Button>
        <Button size="sm" variant="outline" colorScheme="brand" borderRadius="full">Семейный отдых</Button>
        <Button size="sm" variant="outline" colorScheme="brand" borderRadius="full">Пляжный отдых</Button>
      </Flex>
    </MotionBox>
  );
}
