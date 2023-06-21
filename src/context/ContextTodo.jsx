import React from "react";
import { useLocalStorage } from "../hooks/useLocalStorage";

const ContextTodo = React.createContext();

function ContextProvider({ children }) {
  // aqui se crea el estado de todos los ToDos, si no hay nada en el local storage se crea un array vacio y si hay algo se convierte a un array de objetos
  const {
    item : todos, // aqui se le cambia el nombre al item para que sea mas facil de entender
    setItem: saveTodos ,
    loading,
    error
  } = useLocalStorage('TODOS_V1', [])
  const [searchValue, setSearchValue] = React.useState('')
  //  !! se usa para convertir un valor a booleano preguntando si existe o no existe el valor
  // lenght nos dice cuantos elementos lograron pasar por parametro
  const completedTodos = todos.filter(todo => !!todo.completed).length
  const totalTodos = todos.length
  // aqui se filtran los todos que contengan el texto que se esta buscando en  el input de busqueda
  // despues se convierte el texto del todo y el texto de busqueda a minusculas para que no haya problemas
  const searchedTodos = todos.filter(todo => {
    const todoText = todo.text.toLowerCase()
    const searchText = searchValue.toLowerCase()
    return todoText.includes(searchText)
  })


  const completeTodo = (text) => {
    // aqui se busca el indice del todo que se quiere completar a partir del texto
    const newTodos = [...todos]
    const todoIndex = todos.findIndex(todo => todo.text === text)
    newTodos[todoIndex].completed = true
    saveTodos(newTodos)
  }

  const uncompleteTodo = (text) => {
    const newTodos = [...todos]
    const todoIndex = todos.findIndex(todo => todo.text === text)
    newTodos[todoIndex].completed = false
    saveTodos(newTodos)
  }

  const deleteTodo = (text) => {
      const newTodos = [...todos]
      const todoIndex = todos.findIndex(todo => todo.text === text)
      newTodos.splice(todoIndex, 1)
      saveTodos(newTodos)
  }

  const addTodo = (text) => {
    const newTodos = [...todos]
    newTodos.push({
      completed: false,
      text
    })
    saveTodos(newTodos)
  }


  return (
  <ContextTodo.Provider value={{
  completedTodos,
  totalTodos,
  searchValue,
  searchedTodos,
  error,
  loading,
  setSearchValue,
  completeTodo,
  deleteTodo,
  uncompleteTodo,
  addTodo
  }}>
    {children}
    </ContextTodo.Provider>
  )
}



export { ContextTodo, ContextProvider }