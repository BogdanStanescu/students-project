import { Box, Heading } from '@chakra-ui/react';
import { StudentsTable } from '../components/StudentsTable';

export const Home = () => {
  return (
    <Box h="100vh" w="full">
      <Heading as="h1" size="xl" textDecoration="underline" textAlign="center">
        Students
      </Heading>

      <StudentsTable />
    </Box>
  );
};
