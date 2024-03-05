import userStore from "@/stores/UserStore";
import {
  Image,
  Input,
  Stack,
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
  const [filteredData, setFilteredData] = useState<any[]>([]);
  useEffect(() => {
    userStore.fetchData({ size: 5 }).then(() => {
      setData(userStore.data);
      setFilteredData(userStore.data);
    });
  }, []);

  const handleFilter = (event: any) => {
    setFilteredData(
      data.filter((item) =>
        item.address.state
          .toLowerCase()
          .includes(event.target.value.toLowerCase())
      )
    );
  };
  return (
    <Stack>
      <Stack align="stretch" direction="row">
        <Input
          placeholder="Filter users by state"
          onChange={handleFilter}
        ></Input>
      </Stack>
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
            {filteredData.map((user) => {
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
    </Stack>
  );
}
