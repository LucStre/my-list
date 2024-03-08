import {
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Heading,
  Image,
  SimpleGrid,
  Stack,
  Text,
  VStack,
} from "@chakra-ui/react";
import NextLink from "next/link";

export function UserCard({ user }: { user: any }) {
  return (
    <Card
      direction={{ base: "column", sm: "row" }}
      overflow="hidden"
      variant="outline"
    >
      <VStack>
        <Image objectFit="cover" src={user.avatar} alt={user.id} />
        <Heading>{user.username}</Heading>
      </VStack>

      <Stack>
        <CardBody display="flex" flexWrap="wrap">
          <SimpleGrid columns={3} spacing={4}>
            <Card key={user.id}>
              <CardHeader>
                <Heading size="md">Id</Heading>
              </CardHeader>
              <CardBody>
                <Text>{user.id}</Text>
              </CardBody>
            </Card>

            <Card key={user.first_name}>
              <CardHeader>
                <Heading size="md">Name</Heading>
              </CardHeader>
              <CardBody>
                <Text>First name: {user.first_name}</Text>
                <Text>Last name: {user.last_name}</Text>
              </CardBody>
            </Card>

            <Card key={user.email}>
              <CardHeader>
                <Heading size="md">Contact</Heading>
              </CardHeader>
              <CardBody>
                <Text>Email: {user.email}</Text>
                <Text>Phone number: {user.phone_number}</Text>
              </CardBody>
            </Card>

            <Card key={user.address.state}>
              <CardHeader>
                <Heading size="md">Address</Heading>
              </CardHeader>
              <CardBody>
                <Text>
                  State: {user.address.state}, {user.address.country}
                </Text>
                <Text>City: {user.address.city}</Text>
              </CardBody>
            </Card>

            <Card key={user.date_of_birth}>
              <CardHeader>
                <Heading size="md">Date of birth</Heading>
              </CardHeader>
              <CardBody>
                <Text>{user.date_of_birth}</Text>
              </CardBody>
            </Card>

            <Card key={user.employment.title}>
              <CardHeader>
                <Heading size="md">Employment</Heading>
              </CardHeader>
              <CardBody>
                <Text>Title: {user.employment.title}</Text>
                <Text>Skill: {user.employment.key_skill}</Text>
              </CardBody>
            </Card>
          </SimpleGrid>
        </CardBody>

        <CardFooter>
          <Button as={NextLink} href={"/"} variant="solid" colorScheme="blue">
            Back to list
          </Button>
        </CardFooter>
      </Stack>
    </Card>
  );
}
