const Store = (function() {
  let id = JSON.parse(localStorage.getItem('cards'))?.length || 0
  
  const getNotes = () => JSON.parse(localStorage.getItem('cards')) || []
  const addNote = (title, content) => localStorage.setItem('cards', JSON.stringify([...getNotes('cards'), { title, content, id: ++id }]))

  return {
    getNotes,
    addNote,
  }
})()

export default Store;