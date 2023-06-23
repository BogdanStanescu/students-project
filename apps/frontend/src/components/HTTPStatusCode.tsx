import { Stack, Text } from '@chakra-ui/react';

export const HTTPStatusCode = () => {
  return (
    <Stack
      w="full"
      h="100vh"
      spacing={4}
      direction="column"
      justify="center"
      textAlign="center"
    >
      <Text fontSize={80} fontWeight="bold">
        404
      </Text>

      <Text fontSize={40}>Page not found</Text>
    </Stack>
  );
};
