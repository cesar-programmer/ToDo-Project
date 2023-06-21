import  React  from 'react';
import { AppUI } from './AppUi';
import { ContextProvider } from '../context/ContextTodo';
import { ChakraProvider } from '@chakra-ui/react';

function App() {
  return (
    <ChakraProvider>
      <ContextProvider>
        <AppUI/>
      </ContextProvider>
    </ChakraProvider>
  )
}


export default App;
