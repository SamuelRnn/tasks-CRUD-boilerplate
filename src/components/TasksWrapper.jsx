import CreateForm from "./CreateForm";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { deleteTask } from "../redux/tasksSlice";

const TasksWrapper = () => {
  const tasks = useSelector(state => state.tasks);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  return (
    <div>
      <CreateForm/>
      <div>
        {
          tasks.length
          ? tasks.map(t => (
            <div>
              <h2>{t.name}</h2>
              <p>{t.description}</p>
              <button onClick={()=>dispatch(deleteTask(t.id))}>Delete</button>
              <button onClick={()=>navigate(`/update/${t.id}`)}>Update</button>
            </div>
          ))
          : <h1>There's no tasks, create one</h1>
        }
      </div>
    </div>
  )
}

export default TasksWrapper