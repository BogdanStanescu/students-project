import { Flex, Stack } from '@chakra-ui/react';
import { useOutlet } from 'react-router-dom';
import { BreadcrumbNavigator } from './Breadcrumb';
import { Footer } from './Footer';
import { Nav } from './Nav';

export const MainLayout = () => {
  const outlet = useOutlet();

  return (
    <Stack w="full" h="100vh" direction={['column']} spacing={4}>
      <Flex w="full">
        <Nav />
      </Flex>

      <Flex w="full" px={4}>
        <BreadcrumbNavigator />
      </Flex>

      <Flex w="full" px={4}>
        {outlet}
      </Flex>

      <Flex w="full">
        <Footer />
      </Flex>
    </Stack>
  );
};
