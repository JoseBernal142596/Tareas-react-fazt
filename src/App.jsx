import TaskList from './TaskList'
import TaskForm from './TaskForm'
import React, {useState,useEffect} from 'react'
import {tasks as data} from './tasks.js' //el as sirve para cambiarle el nombre al componente 
function App() {
  

  
  return (
   <main className='bg-zinc-900 h-screen'>
    <div className="container mx-auto p-10">
      <TaskForm/>
      <TaskList/>
    </div>
      
   </main> 

  )
}

export default App
