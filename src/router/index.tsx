import {
    createBrowserRouter,
    createRoutesFromElements,
    Route,
    RouterProvider
} from "react-router-dom";
import App from "../App";
import {MainLayout, Login,Products,Error,Worker} from "@pages";

const index = () => {
    const router = createBrowserRouter(
        createRoutesFromElements(
            <Route path="/" element={<App />}>
                <Route index element={<Login />} />
                <Route path="/main/*" element={<MainLayout />}>
                    <Route index element={<Products />} />
                    <Route path="worker" element={<Worker />} />
                </Route>
                <Route path="*" element={<Error/>}/>
            </Route>
        )
    )
    return <RouterProvider router={router} />
}

export default index