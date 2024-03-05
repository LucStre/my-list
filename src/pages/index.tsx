import { Header } from "@/components/Header";
import { List } from "@/components/List";
import { VStack } from "@chakra-ui/react";

export default function Home() {
  return (
    <VStack>
      <Header></Header>
      <List></List>
    </VStack>
  );
}
