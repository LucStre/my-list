import { Form } from "@/components/Form";
import { myForm } from "@/utils/UserModel";
import { AddIcon } from "@chakra-ui/icons";
import {
  Button,
  HStack,
  Heading,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  useDisclosure,
} from "@chakra-ui/react";

export function Header() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <HStack columnGap={"13rem"}>
      <Heading>List of users</Heading>
      <Button colorScheme="green" leftIcon={<AddIcon />} onClick={onOpen}>
        New user
      </Button>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Add new user</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Form form={myForm} closeModal={() => onClose()}></Form>
          </ModalBody>
          <ModalFooter></ModalFooter>
        </ModalContent>
      </Modal>
    </HStack>
  );
}
