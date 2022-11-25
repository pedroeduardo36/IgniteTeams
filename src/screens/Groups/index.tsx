import React, { useState } from "react";
import { FlatList } from "react-native";
import { Header } from "@components/Header";
import { Highlight } from "@components/Highlight";
import { GroupCard } from "@components/GroupCard";
import { Container } from "./styles";

export function Groups() {
  const [groups, setGroups] = useState<string[]>(["Grupo do amigo", 'amigos']);

  return (
    <Container>
      <Header />
      <Highlight title="Turma" subtitle="Jogue com sua turma" />

      <FlatList
        data={groups}
        keyExtractor={(item) => item}
        renderItem={({ item }) => (
          <GroupCard title={item} />
        )}
      />
    </Container>
  );
}
