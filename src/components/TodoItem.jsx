import React from 'react';
import { List, ListItem, Checkbox, Text, IconButton } from '@chakra-ui/react';
import { DeleteIcon } from '@chakra-ui/icons';

function TodoItem(props) {
  const handleComplete = () => {
    props.onComplete(); // Llama a la función onComplete pasada como prop
  };

  const handleDelete = () => {
    props.onDelete(); // Llama a la función onDelete pasada como prop
  };

  const handleUncomplete = () => {
    props.onUncomplete(); // Llama a la función onUncomplete pasada como prop
  }

  return (
    <List margin={5} boxShadow="md" p={3}>
      <ListItem display="flex" alignItems="center">
        <Checkbox
          isChecked={props.completed}
          onChange={props.completed ? handleUncomplete : handleComplete } // Usa la función handleComplete para el evento onChange
          marginRight={2}
          marginLeft={2}
        />
        <Text marginRight={6} textDecoration={props.completed ? 'line-through' : 'none'}>
          {props.text}
        </Text>
        <IconButton
          icon={<DeleteIcon />}
          aria-label="Delete todo"
          onClick={handleDelete} // Usa la función handleDelete para el evento onClick
          marginLeft="auto"
        />
      </ListItem>
    </List>
  );
}

export {TodoItem};
