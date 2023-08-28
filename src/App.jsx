import { RouterProvider } from "react-router-dom";
import './App.css';
import { route } from "./routes/Route";
import { Toaster } from "react-hot-toast";

function App() {
  return (
<div>
  <RouterProvider router={route}></RouterProvider>
  <Toaster/>
</div>
  )
}

export default App;