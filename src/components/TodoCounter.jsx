import React from 'react';
import { Heading, Text } from '@chakra-ui/react';
import { ContextTodo } from '../context/ContextTodo';

function TodoCounter() {
const {
  totalTodos,
  completedTodos
} = React.useContext(ContextTodo)

const completedTodosMessage = (completedTodos) => {
  if(completedTodos === totalTodos) {
    return '¡Felicidades! ¡Completaste todos tus pendientes! 🎉🥳🥳'
  }
  if(completedTodos === 0) {
    return '¡No has completado ningún pendiente! 😴😴😴'
  }
}
return (
  <Heading as="h2" size="lg" color="gray.500" textAlign="center" mb="10px" marginTop={2}>
    Has completado&nbsp;
    <Text as="span" color="green.500">
      {completedTodos}
    </Text>
    &nbsp;de&nbsp;
    <Text as="span" color="blue.500">
      {totalTodos}
    </Text>
    &nbsp;TODOs
    <Text as="p" color="gray.600" fontSize="md" marginTop={2}>
      {completedTodosMessage(completedTodos)}
    </Text>
  </Heading>
);
}

export { TodoCounter }
