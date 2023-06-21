import React from 'react'

// aqui se crea un custom hook para guardar los todos en el local storage
function useLocalStorage(itemName, initialValue){
  // aqui se crea el estado del item, si no hay nada en el local storage se crea un array vacio y si hay algo se convierte a un array de objetos
  const [item, setItem] = React.useState(() => {
    const localStorageItem = localStorage.getItem(itemName)
    // aqui se pregunta si hay algo en el local storage, si hay algo se convierte a un array de objetos y si no hay nada se crea un array vacio
    return localStorageItem ? JSON.parse(localStorageItem) : initialValue
  })

  const [error, setError] = React.useState(false)
  const [loading, setLoading] = React.useState(true)

  // aqui se crea un efecto para guardar los todos en el local storage
  // se usa el hook useEffect para que se ejecute cada vez que el estado del item cambie y se guarda en el local storage
  React.useEffect(() => {
    setTimeout(() => {
      try {
        // aqui se convierte el array de objetos a un string para poder guardarlo en el local storage
        localStorage.setItem(itemName, JSON.stringify(item));
        // aqui se cambia el estado de loading a false para que ya no se muestre el loading
        setLoading(false)
      } catch (error) {
        setError(true)
        setLoading(false)
      }
    }, 2000);
  }, [itemName, item]);
  return {
    item,
    loading,
    error,
    setItem
  }
}

export { useLocalStorage }


// const defaultTodos = [
//   { text: 'Cortar cebolla', completed: true },
//   { text: 'Tomar el curso de intro a React', completed: false },
//   { text: 'Llorar con la llorona', completed: false },
//   { text: 'pelar papas', completed: true },
//   { text: 'Llorar con la llorona', completed: false },
// localStorage.setItem('TODOS_V1', JSON.stringify(defaultTodos))
// localStorage.removeItem('TODOS_V1')
