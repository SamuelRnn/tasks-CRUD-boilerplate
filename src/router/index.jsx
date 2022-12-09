import { createBrowserRouter } from "react-router-dom";
import NotFound from "../components/NotFound";
import TasksWrapper from "../components/TasksWrapper";
import UpdateForm from "../components/UpdateForm";
import Layout from "../layout";

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout/>,
    errorElement: <NotFound/>,
    children: [
      {
        index: true,
        element: <TasksWrapper/>
      },
      {
        path: '/update/:id',
        element: <UpdateForm/>
      }
    ]
  }
])