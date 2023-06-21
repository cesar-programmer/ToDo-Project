import {
  Alert,
  AlertIcon,
  AlertTitle,
  AlertDescription,
} from '@chakra-ui/react'
import React from 'react'

function TodoAlert() {
  return (
  <Alert status='error'>
    <AlertIcon />
    <AlertTitle>Ocurrio un error</AlertTitle>
    <AlertDescription>Entra en panico</AlertDescription>
  </Alert>
  )
}

export { TodoAlert }