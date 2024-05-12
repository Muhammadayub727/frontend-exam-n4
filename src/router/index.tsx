import {
    createBrowserRouter,
    createRoutesFromElements,
    Route,
    RouterProvider
} from "react-router-dom";
import App from "../App";
import {MainLayout, Login,Products,Error,Worker,Category} from "@pages";

const index = () => {
    const router = createBrowserRouter(
        createRoutesFromElements(
            <Route path="/" element={<App />}>
                <Route index element={<Login />} />
                <Route path="/main/*" element={<MainLayout />}>
                    <Route path="products" element={<Products />} />
                    <Route index element={<Category/>}/>
                    <Route path="workers" element={<Worker />} />
                </Route>
                <Route path="*" element={<Error/>}/>
            </Route>
        )
    )
    return <RouterProvider router={router} />
}

export default index