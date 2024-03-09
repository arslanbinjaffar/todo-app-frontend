import { Route, Routes } from "react-router-dom";
import CreateTask from "./screens/Task/create";
import Tasks from "./screens/Task/task";
import Edit from "./screens/Task/edit";
import SignInForm from "./screens/auth/login";
import SignUpForm from "./screens/auth/register";

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<SignInForm />} />
      <Route path="/register" element={<SignUpForm/>}/>
      <Route path="create" element={<CreateTask />} />
      <Route path="tasks" element={<Tasks />} />
      <Route path="edit/:id" element={<Edit />} />
    </Routes>
  );
};

export default App;
