import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "./pages/home-page";
import ResultPage from "./pages/result-page";
import { VideoProvider } from "./context/VideoProvider";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "/result",
    element: (
      <VideoProvider>
        <ResultPage />
      </VideoProvider>
    ),
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
