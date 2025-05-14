import { Box, Heading, Step, StepIndicator, StepSeparator, StepStatus, StepTitle, Stepper, useSteps, Button, Stack, FormControl, FormLabel, Input, Textarea, Select, Flex, Text, useToast, VStack, HStack, Radio, RadioGroup, Image, InputGroup, InputLeftElement, SimpleGrid, Icon } from "@chakra-ui/react";
import { motion } from "framer-motion";
import { FaUser, FaPhone, FaEnvelope, FaMapMarkerAlt, FaCalendarAlt, FaUsers, FaCommentAlt, FaCheck } from "react-icons/fa";
import { useState } from "react";

const steps = [
  { title: "Данные поездки" },
  { title: "Контактная информация" },
  { title: "Подтверждение" },
];

const MotionBox = motion(Box);

const ApplicationStepper = () => {
  const { activeStep, setActiveStep } = useSteps({ index: 0, count: steps.length });
  const toast = useToast();
  
  const prevStep = () => setActiveStep(Math.max(0, activeStep - 1));
  const nextStep = () => setActiveStep(Math.min(steps.length - 1, activeStep + 1));
  
  const [formData, setFormData] = useState({
    destination: "",
    departureDate: "",
    returnDate: "",
    adults: "2",
    children: "0",
    budget: "",
    accommodation: "Отель 4-5*",
    name: "",
    phone: "",
    email: "",
    comment: ""
  });
  
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };
  
  const handleSubmit = () => {
    toast({
      title: "Заявка отправлена",
      description: "Наш менеджер свяжется с вами в ближайшее время",
      status: "success",
      duration: 5000,
      isClosable: true,
    });
    // Сбросить форму и шаги
    setFormData({
      destination: "",
      departureDate: "",
      returnDate: "",
      adults: "2",
      children: "0",
      budget: "",
      accommodation: "Отель 4-5*",
      name: "",
      phone: "",
      email: "",
      comment: ""
    });
    setActiveStep(0);
  };
  
  // Рендер шагов формы
  const renderStep = (step: number) => {
    switch (step) {
      case 0:
        return (
          <MotionBox
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            bg="white"
            p={6}
            borderRadius="md"
            boxShadow="sm"
          >
            <VStack spacing={6} align="stretch">
              <FormControl>
                <FormLabel>
                  <Flex align="center">
                    <FaMapMarkerAlt color="#0066ff" />
                    <Text ml={2}>Направление</Text>
                  </Flex>
                </FormLabel>
                <Select 
                  name="destination" 
                  value={formData.destination} 
                  onChange={handleInputChange}
                  placeholder="Выберите страну"
                  focusBorderColor="brand.500"
                >
                  <option value="Турция">Турция</option>
                  <option value="Египет">Египет</option>
                  <option value="ОАЭ">ОАЭ</option>
                  <option value="Таиланд">Таиланд</option>
                  <option value="Кипр">Кипр</option>
                  <option value="Греция">Греция</option>
                  <option value="Другое">Другое</option>
                </Select>
              </FormControl>
              
              <SimpleGrid columns={{ base: 1, md: 2 }} spacing={{ base: 4, md: 6 }}>
                <FormControl>
                  <FormLabel display="flex" alignItems="center" mb={1}>
                    <Icon as={FaCalendarAlt} color="brand.500" boxSize={5} />
                    <Text ml={2} fontWeight="medium">Дата вылета</Text>
                    <Text as="span" color="gray.500" ml={2} fontSize="xs" fontStyle="italic">(обязательно)</Text>
                  </FormLabel>
                  <InputGroup size="lg">
                    <InputLeftElement pointerEvents="none">
                      <Icon as={FaCalendarAlt} color="gray.400" />
                    </InputLeftElement>
                    <Input 
                      type="date" 
                      name="departureDate" 
                      value={formData.departureDate} 
                      onChange={handleInputChange}
                      focusBorderColor="brand.500"
                      bg="white"
                      borderColor="gray.300"
                      _hover={{ borderColor: "brand.400" }}
                      h="50px"
                      pl="40px"
                    />
                  </InputGroup>
                </FormControl>
                
                <FormControl>
                  <FormLabel>
                    <Flex align="center">
                      <Icon as={FaCalendarAlt} color="brand.500" boxSize={5} />
                      <Text ml={2} fontWeight="medium">Дата возвращения</Text>
                    </Flex>
                  </FormLabel>
                  <InputGroup size="lg">
                    <InputLeftElement pointerEvents="none">
                      <Icon as={FaCalendarAlt} color="gray.400" />
                    </InputLeftElement>
                    <Input 
                      type="date" 
                      name="returnDate" 
                      value={formData.returnDate} 
                      onChange={handleInputChange}
                      focusBorderColor="brand.500"
                      bg="white"
                      borderColor="gray.300"
                      _hover={{ borderColor: "brand.400" }}
                      h="50px"
                      pl="40px"
                    />
                  </InputGroup>
                </FormControl>
              </SimpleGrid>
              
              <HStack spacing={4}>
                <FormControl>
                  <FormLabel>
                    <Flex align="center">
                      <FaUsers color="#0066ff" />
                      <Text ml={2}>Взрослых</Text>
                    </Flex>
                  </FormLabel>
                  <Select 
                    name="adults" 
                    value={formData.adults} 
                    onChange={handleInputChange}
                    focusBorderColor="brand.500"
                  >
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5+">5+</option>
                  </Select>
                </FormControl>
                
                <FormControl>
                  <FormLabel>
                    <Flex align="center">
                      <FaUsers color="#0066ff" />
                      <Text ml={2}>Детей</Text>
                    </Flex>
                  </FormLabel>
                  <Select 
                    name="children" 
                    value={formData.children} 
                    onChange={handleInputChange}
                    focusBorderColor="brand.500"
                  >
                    <option value="0">0</option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4+">4+</option>
                  </Select>
                </FormControl>
              </HStack>
              
              <FormControl>
                <FormLabel>
                  <Flex align="center">
                    <FaMapMarkerAlt color="#0066ff" />
                    <Text ml={2}>Размещение</Text>
                  </Flex>
                </FormLabel>
                <RadioGroup value={formData.accommodation} onChange={(val) => setFormData(prev => ({ ...prev, accommodation: val }))}>
                  <Stack direction="row" spacing={5} flexWrap="wrap">
                    <Radio value="Отель 4-5*">Отель 4-5*</Radio>
                    <Radio value="Отель 3*">Отель 3*</Radio>
                    <Radio value="Апартаменты">Апартаменты</Radio>
                  </Stack>
                </RadioGroup>
              </FormControl>
            </VStack>
          </MotionBox>
        );
      case 1:
        return (
          <MotionBox
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            bg="white"
            p={6}
            borderRadius="md"
            boxShadow="sm"
          >
            <VStack spacing={6} align="stretch">
              <FormControl>
                <FormLabel>
                  <Flex align="center">
                    <FaUser color="#0066ff" />
                    <Text ml={2}>Ваше имя</Text>
                  </Flex>
                </FormLabel>
                <InputGroup>
                  <InputLeftElement pointerEvents="none">
                    <FaUser color="gray" />
                  </InputLeftElement>
                  <Input 
                    name="name" 
                    value={formData.name} 
                    onChange={handleInputChange} 
                    placeholder="Иван Иванов"
                    focusBorderColor="brand.500"
                  />
                </InputGroup>
              </FormControl>
              
              <FormControl>
                <FormLabel>
                  <Flex align="center">
                    <FaPhone color="#0066ff" />
                    <Text ml={2}>Телефон</Text>
                  </Flex>
                </FormLabel>
                <InputGroup>
                  <InputLeftElement pointerEvents="none">
                    <FaPhone color="gray" />
                  </InputLeftElement>
                  <Input 
                    name="phone" 
                    value={formData.phone} 
                    onChange={handleInputChange} 
                    placeholder="+7 (___) ___-__-__"
                    focusBorderColor="brand.500"
                  />
                </InputGroup>
              </FormControl>
              
              <FormControl>
                <FormLabel>
                  <Flex align="center">
                    <FaEnvelope color="#0066ff" />
                    <Text ml={2}>Email</Text>
                  </Flex>
                </FormLabel>
                <InputGroup>
                  <InputLeftElement pointerEvents="none">
                    <FaEnvelope color="gray" />
                  </InputLeftElement>
                  <Input 
                    name="email" 
                    value={formData.email} 
                    onChange={handleInputChange} 
                    placeholder="example@mail.com"
                    focusBorderColor="brand.500"
                  />
                </InputGroup>
              </FormControl>
              
              <FormControl>
                <FormLabel>
                  <Flex align="center">
                    <FaCommentAlt color="#0066ff" />
                    <Text ml={2}>Комментарий</Text>
                  </Flex>
                </FormLabel>
                <Textarea 
                  name="comment" 
                  value={formData.comment} 
                  onChange={handleInputChange} 
                  placeholder="Дополнительная информация о поездке"
                  focusBorderColor="brand.500"
                />
              </FormControl>
            </VStack>
          </MotionBox>
        );
      case 2:
        return (
          <MotionBox
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            textAlign="center"
            bg="white"
            p={8}
            borderRadius="md"
            boxShadow="sm"
          >
            <Box mb={6} display="flex" justifyContent="center">
              <Box bg="green.100" borderRadius="full" p={3} color="green.500">
                <FaCheck size="30px" />
              </Box>
            </Box>
            
            <Heading size="md" mb={2} color="brand.500">Подтвердите заявку</Heading>
            <Text mb={6}>Пожалуйста, проверьте введенные данные и нажмите "Отправить"</Text>
            
            <VStack spacing={3} align="stretch" bg="gray.50" p={4} borderRadius="md" mb={6}>
              <Flex justify="space-between">
                <Text fontWeight="bold">Направление:</Text>
                <Text>{formData.destination || "-"}</Text>
              </Flex>
              <Flex justify="space-between">
                <Text fontWeight="bold">Даты:</Text>
                <Text>{formData.departureDate} - {formData.returnDate || "открытая"}</Text>
              </Flex>
              <Flex justify="space-between">
                <Text fontWeight="bold">Туристы:</Text>
                <Text>{formData.adults} взр. {formData.children !== "0" ? `+ ${formData.children} дет.` : ""}</Text>
              </Flex>
              <Flex justify="space-between">
                <Text fontWeight="bold">Размещение:</Text>
                <Text>{formData.accommodation}</Text>
              </Flex>
              <Flex justify="space-between">
                <Text fontWeight="bold">Контакт:</Text>
                <Text>{formData.name}, {formData.phone}</Text>
              </Flex>
            </VStack>
            
            <Button 
              colorScheme="brand" 
              size="lg" 
              width="100%" 
              onClick={handleSubmit}
              leftIcon={<FaCheck />}
            >
              Отправить заявку
            </Button>
          </MotionBox>
        );
      default:
        return null;
    }
  };

  return (
    <Box 
      bg="white" 
      py={12} 
      px={{ base: 4, md: 8 }} 
      borderRadius="lg" 
      boxShadow="md"
      position="relative"
      overflow="hidden"
      maxW="1200px"
      mx="auto"
      my={10}
    >
      <Box 
        position="absolute" 
        top={0} 
        left={0} 
        right={0} 
        height="8px" 
        bgGradient="linear(to-r, brand.400, brand.600)" 
      />
      
      <Heading 
        as="h2" 
        size="lg" 
        textAlign="center" 
        mb={3}
        color="brand.700"
      >
        Оставить заявку
      </Heading>
      <Text 
        textAlign="center" 
        mb={10} 
        color="gray.600"
        fontSize="lg"
      >
        Заполните форму, и наш менеджер подберет для вас идеальный тур
      </Text>
      
      <Stepper 
        index={activeStep} 
        colorScheme="brand" 
        mb={10}
        size="lg"
        gap="0"
        width="100%"
        maxW="800px"
        mx="auto"
      >
        {steps.map((step, index) => (
          <Step key={index}>
            <StepIndicator>
              <StepStatus 
                complete={<Box color="white"><FaCheck /></Box>} 
                incomplete={<StepTitle>{index + 1}</StepTitle>} 
                active={<StepTitle>{index + 1}</StepTitle>} 
              />
            </StepIndicator>
            <Box display={{ base: "none", md: "block" }}>
              <StepTitle>{step.title}</StepTitle>
            </Box>
            <StepSeparator />
          </Step>
        ))}
      </Stepper>
      
      <Box mt={10} maxW="700px" mx="auto" px={4}>
        {renderStep(activeStep)}
      </Box>
      
      <Flex mt={10} justifyContent="center" gap={4}>
        <Button
          onClick={prevStep}
          isDisabled={activeStep === 0}
          colorScheme="gray"
          variant="outline"
          leftIcon={<Box transform="rotate(180deg)">→</Box>}
          size="lg"
          minW="120px"
          boxShadow="sm"
        >
          Назад
        </Button>
        
        {activeStep === steps.length - 1 ? (
          <Button
            onClick={handleSubmit}
            colorScheme="brand"
            rightIcon={<FaCheck />}
            size="lg"
            minW="120px"
            boxShadow="md"
          >
            Отправить
          </Button>
        ) : (
          <Button
            onClick={nextStep}
            colorScheme="brand"
            rightIcon={<Box>→</Box>}
            size="lg"
            minW="120px"
            boxShadow="md"
          >
            Далее
          </Button>
        )}
      </Flex>
    </Box>
  );
};

export default ApplicationStepper;
