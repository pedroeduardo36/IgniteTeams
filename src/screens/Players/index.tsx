import React, { useState } from "react";
import { FlatList } from "react-native";
import {
  Header,
  Highlight,
  ButtonIcon,
  Input,
  Filter,
  PlayerCard,
} from "@components/index";
import { Container, Form, HeaderList, NumbersOfPlayers } from "./styles";

export function Players() {
  const [team, setTeam] = useState("Time 1");
  const [players, setPlayers] = useState(["Pedro", "Guigo", "Nat"]);

  return (
    <Container>
      <Header showBackButton />
      <Highlight
        title="Nome da turma"
        subtitle="Adicione a galera e separe os times"
      />
      <Form>
        <Input placeholder="Nome do participante" autoCorrect={false} />
        <ButtonIcon icon="check" />
      </Form>

      <HeaderList>
        <FlatList
          data={["Time 1", "Time 2", "Time 3"]}
          keyExtractor={(item) => item}
          renderItem={({ item }) => (
            <Filter
              title={item}
              isActive={item === team}
              onPress={() => setTeam(item)}
            />
          )}
          horizontal
        />
        <NumbersOfPlayers>{players.length}</NumbersOfPlayers>
      </HeaderList>

      <FlatList
        data={players}
        keyExtractor={(item) => item}
        renderItem={({ item }) => (
          <PlayerCard name={item} onRemove={() => {}} />
        )}
      />
    </Container>
  );
}
