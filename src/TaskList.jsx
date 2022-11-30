import React, {useState,useEffect, useContext} from 'react'
import TaskCard from './TaskCard'
import {TaskContext} from './context/TaskContext'
function TaskList() {

    const {tasks}=useContext(TaskContext)
    if(tasks.length===0){
        return <div className='text-4xl font-bold text-white mb-3 text-center'>No hay tareas aún</div>
    }
  return (
    <div className='grid grid-cols-4 gap-2 '>
        {
            tasks.map((task)=>(
                <TaskCard key={task.id} task={task}/>
            ))
        }

    </div>

  )
}

export default TaskList