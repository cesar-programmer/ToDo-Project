import React from 'react'
import { TodoCounter } from '../components/TodoCounter';
import { TodoSearch } from '../components/TodoSearch';
import { TodoList } from '../components/TodoList';
import { TodoItem } from '../components/TodoItem';
import { TodoAlert } from '../components/TodoAlert';
import { ContextTodo } from '../context/ContextTodo';
import { ModalTodo } from '../components/modal/ModalTodo';
import { Container } from '@chakra-ui/react'
import { Spinner } from '@chakra-ui/react';

function AppUI() {
  const {
    error,
    loading : loadingTodos,
    searchedTodos,
    completeTodo,
    uncompleteTodo,
    deleteTodo
  } = React.useContext(ContextTodo)

  return (
      <>
        <Container maxW="container.sm" marginTop={4} marginBottom={4} centerContent>
          <TodoCounter/>
          <TodoSearch />
          <TodoList>
            {loadingTodos ? <Spinner color='blue.500'  size='xl' /> : null}
            {searchedTodos.length === 0 && <p>¡No hay TODOs que mostrar!</p>}
            {error && <TodoAlert />}
            {!loadingTodos && searchedTodos.map(todo => (
    //aqui se le pasa el key que es el texto del todo para que react sepa que elemento es el que esta cambiando
    // a partir de searchTodos.map se crea un nuevo array con los todos que contengan el texto que se esta buscando
    // onComplete es la funcion que se le pasa al componente TodoItem para que se ejecute cuando se haga click en el checkbox
            <TodoItem
              key={todo.text}
              text={todo.text}
              completed={todo.completed}
              onComplete={() => completeTodo(todo.text)}
              onUncomplete={() => uncompleteTodo(todo.text)}
              onDelete={() => deleteTodo(todo.text)}
            />
            ))}
          </TodoList>
          <ModalTodo />
        </Container>
      </>
  );
  }

export { AppUI }