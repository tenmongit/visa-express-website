import { Box, Heading, Text, Stack } from "@chakra-ui/react";

const reviews = [
  { name: "Анна", text: "Все понравилось! Подобрали идеальный тур и помогли с визой." },
  { name: "Иван", text: "Очень быстро ответили и оформили поездку. Спасибо!" },
  { name: "Мария", text: "Лучшее агентство! Уже третий раз летаем через них." },
];

export default function Reviews() {
  return (
    <Box my={12}>
      <Heading size="lg" mb={6}>Отзывы клиентов</Heading>
      <Stack spacing={4}>
        {reviews.map((r, idx) => (
          <Box key={idx} bg="white" p={6} borderRadius="lg" boxShadow="sm">
            <Text fontWeight="bold">{r.name}</Text>
            <Text mt={2}>{r.text}</Text>
          </Box>
        ))}
      </Stack>
    </Box>
  );
}
