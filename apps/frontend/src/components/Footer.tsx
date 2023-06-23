import {
  Box,
  Container,
  Stack,
  Text,
  useColorModeValue,
} from '@chakra-ui/react';

export const Footer = () => {
  return (
    <Box
      w="full"
      bg={useColorModeValue('gray.50', 'gray.900')}
      color={useColorModeValue('gray.700', 'gray.200')}
    >
      <Container
        as={Stack}
        maxW={'6xl'}
        direction="row"
        spacing={4}
        justify="center"
        align="center"
        py={4}
      >
        <Text>© 2023 Stănescu Bogdan</Text>
      </Container>
    </Box>
  );
};
