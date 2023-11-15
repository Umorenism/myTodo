import { createBrowserRouter } from "react-router-dom"
import Register from "../page/Todo"
import Todo from "../page/Todo"

export const mainRouter = createBrowserRouter([
    {
        path: "/",
        element: <Todo />
    }
])