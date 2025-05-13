import { Box, Stack, Input, Button, Select, Flex, Text, Heading, Grid, GridItem, FormControl, FormLabel, NumberInput, NumberInputField, NumberInputStepper, NumberIncrementStepper, NumberDecrementStepper } from "@chakra-ui/react";
import { motion } from "framer-motion";
import { FaSearch, FaPlane, FaCalendarAlt, FaMapMarkerAlt, FaUsers, FaMoneyBillWave } from "react-icons/fa";

const MotionBox = motion(Box);

export default function TourSearch() {
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
              defaultValue={50000}
              focusBorderColor="brand.500"
            >
              <NumberInputField 
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
  >
    Найти
  </Button>
</GridItem>
      </Grid>
      
      <Flex justify="center" mt={4} flexWrap="wrap" gap={2}>
        <Button size="sm" variant="outline" colorScheme="brand" borderRadius="full">Горящие туры</Button>
        <Button size="sm" variant="outline" colorScheme="brand" borderRadius="full">Раннее бронирование</Button>
        <Button size="sm" variant="outline" colorScheme="brand" borderRadius="full">Семейный отдых</Button>
        <Button size="sm" variant="outline" colorScheme="brand" borderRadius="full">Пляжный отдых</Button>
      </Flex>
    </MotionBox>
  );
}
