import { useState } from "react";
import { useSelector, useDispatch } from "react-redux"
import { useParams, useNavigate } from "react-router-dom"
import { updateTask } from "../redux/tasksSlice";

const UpdateForm = () => {
  const { id } = useParams()
  const tasks = useSelector(state => state.tasks);
  const currentTask = tasks.find(t => t.id === id);
  const [form, setForm] = useState(currentTask);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleChange = (e) => setForm(state => ({ ...state, [e.target.name]: e.target.value }))
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(updateTask(form));
    navigate('/')
  } 
  return (
    <form onSubmit={handleSubmit}>
      <input type="text" name='name' value={form.name} onChange={handleChange}/>
      <input type="text" name='description' value={form.description} onChange={handleChange}/>
      <button type="submit">Save</button>
    </form>
  )
}

export default UpdateForm