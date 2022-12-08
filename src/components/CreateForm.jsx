import { addTask } from "../redux/tasksSlice";
import { useDispatch } from "react-redux";
import { useState } from "react";
import { v4 as uuid } from "uuid";

const CreateForm = () => {
  const dispatch = useDispatch();
  const [form, setForm] = useState({
    name: "",
    description: "",
  });
  const handleChange = (e) => setForm(state => ({ ...state, [e.target.name]: e.target.value }));
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addTask({
      ...form,
      id: uuid(),
    }));
  };
  return (
    <form onSubmit={handleSubmit}>
      <input type="text" name="name" placeholder="task name..." onChange={handleChange}/>
      <input type="text" name="description" placeholder="task description..." onChange={handleChange}/>
      <button type="submit">Create</button>
    </form>
  );
};

export default CreateForm;
