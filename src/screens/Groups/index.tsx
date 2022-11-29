import React, { useState } from "react";
import { FlatList } from "react-native";

import {
  Header,
  Highlight,
  GroupCard,
  ListEmpty,
  Button,
} from "@components/index";
import { Container } from "./styles";

export function Groups() {
  const [groups, setGroups] = useState<string[]>(["RODRIGO"]);

  return (
    <Container>
      <Header />
      <Highlight title="Turma" subtitle="Jogue com sua turma" />

      <FlatList
        data={groups}
        keyExtractor={(item) => item}
        renderItem={({ item }) => <GroupCard title={item} />}
        contentContainerStyle={groups.length === 0 && { flex: 1 }}
        ListEmptyComponent={() => (
          <ListEmpty message="Sua lista de turmas está vazia." />
        )}
      />
      <Button title="Criar nova turma" />
    </Container>
  );
}
