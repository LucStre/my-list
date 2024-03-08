import { UserCard } from "@/components/UserCard";
import { Stack } from "@chakra-ui/react";
import { useEffect, useState } from "react";

export default function User() {
  const [user, setUser] = useState<any>("");

  useEffect(() => {
    setUser(JSON.parse(localStorage.getItem("user") || ""));
  }, []);

  return <Stack>{user && <UserCard user={user}></UserCard>}</Stack>;
}
