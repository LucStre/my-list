import userStore from "@/stores/UserStore";
import {
  Image,
  Table,
  TableContainer,
  Tbody,
  Td,
  Th,
  Thead,
  Tr,
} from "@chakra-ui/react";
import { useEffect, useState } from "react";

export function List() {
  const [data, setData] = useState<any[]>([]);
  useEffect(() => {
    userStore.fetchData({ size: 5 }).then(() => setData(userStore.data));
  }, []);

  return (
    <TableContainer mt={"20px"}>
      <Table variant="simple" size="lg">
        <Thead>
          <Tr>
            <Th>Avatar</Th>
            <Th>Id</Th>
            <Th>Name</Th>
            <Th>Email</Th>
            <Th>State</Th>
          </Tr>
        </Thead>
        <Tbody>
          {data.map((user) => {
            return (
              <Tr key={user.id}>
                <Td>
                  <Image boxSize="80px" src={user.avatar} alt={user.id} />
                </Td>
                <Td>{user.id}</Td>
                <Td>{user.first_name + " " + user.last_name}</Td>
                <Td>{user.email}</Td>
                <Td>{user.address.state}</Td>
              </Tr>
            );
          })}
        </Tbody>
      </Table>
    </TableContainer>
  );
}
