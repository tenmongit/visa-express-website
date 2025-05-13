import { Box, Heading, Text, Stack } from "@chakra-ui/react";

export default function Contacts() {
  return (
    <Box my={12} bg="white" p={8} borderRadius="lg" boxShadow="sm">
      <Heading size="lg" mb={4}>Контакты</Heading>
      <Stack spacing={2}>
        <Text>Телефон: <b>+7 (777) 123-45-67</b></Text>
        <Text>Email: <b>info@visaexpress.kz</b></Text>
        <Text>Адрес: г. Алматы, ул. Примерная, 1</Text>
      </Stack>
    </Box>
  );
}
