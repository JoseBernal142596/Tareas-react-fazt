import { createContext, useState,useEffect  } from "react"
import {tasks as data} from '../tasks' //el as sirve para cambiarle el nombre al componente 

export const TaskContext=createContext()

export function TaskContextProvider(props) {
    const [tasks, setTasks] = useState([])
    function createTask(task){

        setTasks([...tasks,{
          title: task.title,
          id: tasks.length,
          description: task.description
    
        }])//acá vamos a crear el objeto tarea recibiendo el title y la descripción de TaskForm
      }
      function deleteTask(taskId){
        setTasks(tasks.filter(task => task.id !== taskId)) 
    }
    useEffect(()=>{
        setTasks(data)
    },[])//Esto se va a ejecutar cuando cargue el componente TaskList
  
  return (
    <TaskContext.Provider value={
        {
            tasks:tasks,
            deleteTask:deleteTask,
            createTask:createTask
        }
    }>
        {props.children}
    </TaskContext.Provider>
  )
}
 