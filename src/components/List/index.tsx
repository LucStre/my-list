import userStore from "@/stores/UserStore";
import { DeleteIcon } from "@chakra-ui/icons";
import {
  AlertDialog,
  AlertDialogBody,
  AlertDialogContent,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogOverlay,
  Button,
  Image,
  Input,
  LinkBox,
  LinkOverlay,
  Stack,
  Table,
  TableContainer,
  Tbody,
  Td,
  Th,
  Thead,
  Tr,
  useDisclosure,
} from "@chakra-ui/react";
import { observer } from "mobx-react";
import { useEffect, useRef, useState } from "react";

export const List = observer(() => {
  const [data, setData] = useState<any[]>([]);
  const [deleteId, setDeleteId] = useState([]);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const cancelRef = useRef<any>();
  const { myUsers } = userStore;

  useEffect(() => {
    setData(myUsers);
  }, [myUsers]);

  const handleFilter = (event: any) => {
    setData(userStore.filterData(event.target.value));
  };

  const handleDelete = () => {
    userStore.deleteData(deleteId);
    onClose();
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
              <Th></Th>
            </Tr>
          </Thead>
          <Tbody>
            {data.map((user) => {
              return (
                <Tr key={user.id}>
                  <Td>
                    <LinkBox>
                      <LinkOverlay
                        href={`/user/${user.id}`}
                        onClick={() =>
                          localStorage.setItem("user", JSON.stringify(user))
                        }
                      >
                        <Image boxSize="80px" src={user.avatar} alt={user.id} />
                      </LinkOverlay>
                    </LinkBox>
                  </Td>
                  <Td>{user.id}</Td>
                  <Td>{user.first_name + " " + user.last_name}</Td>
                  <Td>{user.email}</Td>
                  <Td>{user.address.state}</Td>

                  <Td>
                    <Button
                      colorScheme="red"
                      leftIcon={<DeleteIcon />}
                      onClick={() => {
                        setDeleteId(user.id);
                        onOpen();
                      }}
                    >
                      Delete
                    </Button>
                  </Td>
                </Tr>
              );
            })}
          </Tbody>
        </Table>
        <AlertDialog
          isOpen={isOpen}
          leastDestructiveRef={cancelRef}
          onClose={onClose}
        >
          <AlertDialogOverlay>
            <AlertDialogContent>
              <AlertDialogHeader fontSize="lg" fontWeight="bold">
                Delete user
              </AlertDialogHeader>

              <AlertDialogBody>
                Are you sure you want to delete user with id {deleteId}?
              </AlertDialogBody>

              <AlertDialogFooter>
                <Button ref={cancelRef} onClick={onClose}>
                  Cancel
                </Button>
                <Button colorScheme="red" onClick={handleDelete} ml={3}>
                  Delete
                </Button>
              </AlertDialogFooter>
            </AlertDialogContent>
          </AlertDialogOverlay>
        </AlertDialog>
      </TableContainer>
    </Stack>
  );
});
