import { Box, SimpleGrid, Stack, Text, Icon, Heading } from "@chakra-ui/react";
import { FaRegSmile, FaRegClock, FaRegStar } from "react-icons/fa";

const advantages = [
  { icon: FaRegSmile, text: "Персональный подход" },
  { icon: FaRegClock, text: "Быстрая поддержка 24/7" },
  { icon: FaRegStar, text: "Только проверенные туроператоры" },
];

export default function Advantages() {
  return (
    <Box my={12}>
      <Heading size="lg" mb={6}>Наши преимущества</Heading>
      <SimpleGrid columns={{ base: 1, md: 3 }} spacing={8}>
        {advantages.map((a) => (
          <Stack key={a.text} align="center" bg="white" p={8} borderRadius="lg" boxShadow="sm">
            <Icon as={a.icon} w={10} h={10} color="brand.500" />
            <Text fontWeight="medium" fontSize="lg">{a.text}</Text>
          </Stack>
        ))}
      </SimpleGrid>
    </Box>
  );
}
