import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import TasksWrapper from './components/TasksWrapper';
import UpdateForm from './components/UpdateForm';

const App = () => {

  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<TasksWrapper/>}/>
          <Route path='update/:id' element={<UpdateForm/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App