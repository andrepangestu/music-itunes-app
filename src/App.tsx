import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "./pages/home-page";
import ResultPage from "./pages/result-page";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "/result",
    element: <ResultPage />,
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
