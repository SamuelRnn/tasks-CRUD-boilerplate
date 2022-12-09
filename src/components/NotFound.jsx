import { useRouteError } from "react-router-dom";

const NotFound = () => {
  const error = useRouteError();
  console.log(error) 
  return (
    <div>NotFound</div>
  )
}

export default NotFound