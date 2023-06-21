import { Container, Box, Text } from '@chakra-ui/react';

function TodoList({ children }) {
  return (
    <Container
      maxW="sm"
      centerContent
      borderRadius="lg"
      boxShadow="lg"
      bg="gray.100"
      padding={4}
      marginBottom={4}
    >
      <Box marginBottom={4}>
        <Text fontSize="2xl">Tareas pendientes</Text>
      </Box>
      <ul>{children}</ul>
    </Container>
  );
}

export { TodoList }
