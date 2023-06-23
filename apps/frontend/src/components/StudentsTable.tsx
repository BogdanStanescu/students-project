import {
  Table,
  TableContainer,
  Tbody,
  Td,
  Th,
  Thead,
  Tr,
  useColorModeValue,
} from '@chakra-ui/react';
import { trpc } from '@utils/trpc';
import { Loading } from './Loading';
import { MessageAlert } from './MessageAlert';

export const StudentsTable = () => {
  const studentsResponse = trpc.students.all.useQuery();

  const tableRowHoverColor = useColorModeValue('gray.50', 'gray.700');

  if (studentsResponse.isLoading) {
    return <Loading />;
  }

  if (studentsResponse.isError) {
    return (
      <MessageAlert
        status="error"
        description="Something went wrong while retriving the students"
      />
    );
  }

  if (!studentsResponse.data.length) {
    return (
      <MessageAlert
        status="info"
        description="There are no students available"
      />
    );
  }

  return (
    <TableContainer>
      <Table variant="striped" colorScheme="teal">
        <Thead w="full">
          <Tr>
            <Th w="33.33%">First name</Th>
            <Th w="33.33%"> Last name</Th>
            <Th w="33.33%">Check in time</Th>
          </Tr>
        </Thead>

        <Tbody w="full">
          {studentsResponse.data?.map((student) => (
            <Tr
              key={student.id}
              _hover={{
                bg: tableRowHoverColor,
                cursor: 'pointer',
              }}
            >
              <Td>{student.first_name}</Td>
              <Td>{student.last_name}</Td>
              <Td>{student.check_in_time.toISOString()}</Td>
            </Tr>
          ))}
        </Tbody>
      </Table>
    </TableContainer>
  );
};
