import { createBrowserRouter } from "react-router-dom";
import Layout from "./layouts/Layout";
import Products, { loader as productsLoader, action as updateAvailabilityAction } from "./views/Products";
import NewProduct, { action as newProductAction} from "./views/NewProduct";
import EditartProduct, {loader as editProductLoader, action as editProductAction, action as deleteProductAction} from "./views/EditarProduct";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Layout/>,
        children: [
            {
                index: true,
                element: <Products/>,
                loader: productsLoader,
                action: updateAvailabilityAction
            },
            {
                path: 'productos/nuevo',
                element: <NewProduct/>,
                action: newProductAction
            },
            {
                path: 'productos/:id/editar', // ROA pattern - resource-oriented desing
                element: <EditartProduct/>,
                loader: editProductLoader,
                action: editProductAction
            },
            {
                path: 'productos/:id/eliminar', // ROA pattern - resource-oriented desing
                action: deleteProductAction
            }
        ]
    },
])