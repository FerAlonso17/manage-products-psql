import { createBrowserRouter } from "react-router-dom";
import Layout from "./layouts/Layout";
import Products, {action as updateAvailabilityACtion, loader as productsLoader} from "./views/Products";
import NewProduct, { action as newProductAction } from "./views/NewProduct";
import EditProduct, {loader as editProductLoader, action as editProductAction} from "./views/EditProduct";
import { action as deleteProductAction} from "./components/ProductDetails";

export const router = createBrowserRouter([
    {
        path:'/',
        element: <Layout/>,
        children: [
            {
                index:true,
                element: <Products/>,
                loader: productsLoader,
                action: updateAvailabilityACtion,
                hydrateFallbackElement: <p>Loading...</p>,
            },
            {
                path:'products/new',
                element:<NewProduct/>,
                action: newProductAction
            },
            {
                path:'products/:id/edit',
                element: <EditProduct/>,
                loader: editProductLoader,
                action: editProductAction
            },
            {
                path:'products/:id/delete',
                action: deleteProductAction
            }
        ]
    }
])