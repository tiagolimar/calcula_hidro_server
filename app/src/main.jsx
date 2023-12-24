/* eslint-disable no-unused-vars */
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Error from "./pages/Error.jsx";
import Tubos from './pages/Tubos.jsx';
import App from "./App.jsx";
import Cadastro from "./pages/Cadastro.jsx";

const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        errorElement: <Error />,
        children: [
            {
                path: "/",
                element: <Cadastro />,
                errorElement: <Error />,
            },
            {
                path: "/Tubos",
                element: <Tubos />,
                errorElement: <Error />,
            },
        ]
    },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
    <RouterProvider router={router} />
);
