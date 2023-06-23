import {
  Flex,
  Button,
  useColorModeValue,
  Stack,
  useColorMode,
  Text,
  Icon,
} from '@chakra-ui/react';
import { MoonIcon, SunIcon } from '@chakra-ui/icons';
import { FaUniversity } from 'react-icons/fa';
import { Link } from 'react-router-dom';

export const Nav = () => {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <Flex
      h={16}
      w="full"
      align="center"
      bg={useColorModeValue('gray.100', 'gray.900')}
      px={4}
    >
      <Stack
        w="20%"
        spacing={4}
        direction="row"
        align="center"
        cursor="pointer"
      >
        <Icon as={FaUniversity} boxSize={8} />

        <Link to="/">
          <Text fontSize="3xl" fontWeight="extrabold">
            University
          </Text>
        </Link>
      </Stack>
      <Flex flex="1" alignItems="center" flexDirection="row-reverse">
        <Stack direction="row" spacing={7}>
          <Button onClick={toggleColorMode}>
            {colorMode === 'light' ? <MoonIcon /> : <SunIcon />}
          </Button>
        </Stack>
      </Flex>
    </Flex>
  );
};
