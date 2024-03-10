import { Route, Routes } from "react-router-dom";
import { SignInForm, SignUpForm, Todo } from "./screens";
const App = () => {
  return (
    <Routes>
      <Route path="/" element={<SignInForm />} />
      <Route path="/register" element={<SignUpForm />} />
      <Route path="tasks" element={<Todo />} />
      <Route path="tasks/:id" element={<Todo />} />
    </Routes>
  );
};

export default App;
