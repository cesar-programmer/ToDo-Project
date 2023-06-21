import React from 'react'
import { Input } from '@chakra-ui/react'
import { ContextTodo } from '../context/ContextTodo'

function TodoSearch() {
  const {
    searchValue,
    setSearchValue
  } =  React.useContext(ContextTodo)

  const handleSearchValue = (event) => {
    console.log(event.target.value)
    setSearchValue(event.target.value)
  }
  return (
    <Input
    focusBorderColor='lime'
    placeholder='🔎 Search'
    size='lg'
    w='70%'
    mb='10px'
    value={searchValue}
    onChange={(event) => {
      handleSearchValue(event)
    }}
    />
  )
}

export { TodoSearch }