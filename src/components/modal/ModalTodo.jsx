import React from 'react';
import { useDisclosure } from '@chakra-ui/react';
import { ContextTodo } from '../../context/ContextTodo';

import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
  Input
} from '@chakra-ui/react';

function ModalTodo() {
  const { addTodo } = React.useContext(ContextTodo);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [Text, setText] = React.useState('');

  const handleText = (e) => {
    setText(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addTodo(Text);
    setText('');
    onClose();
  };

  return (
    <>
      <Button
        marginTop={3}
        colorScheme="blue"
        size="lg"
        fontWeight="bold"
        borderRadius="md"
        boxShadow="md"
        _hover={{ boxShadow: 'lg' }}
        _focus={{ boxShadow: 'outline' }}
        onClick={onOpen}
      >
        Agregar ➕ TO DO
      </Button>

      <Modal isOpen={isOpen} onClose={onClose} closeOnOverlayClick={false}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Crea tu ToDo</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <form>
              <Input
                errorBorderColor="red.300"
                placeholder="Hacer la tarea"
                size="lg"
                variant="flushed"
                value={Text}
                onChange={handleText}
              />
            </form>
          </ModalBody>
          <ModalFooter>
            <Button colorScheme="red" mr={196} onClick={onClose}>
              Cerrar
            </Button>
            <Button colorScheme="blue" type="submit" onClick={handleSubmit}>
              Crear ToDo
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}

export { ModalTodo };
