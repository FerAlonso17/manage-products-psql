import { ActionFunctionArgs, Form, redirect, useFetcher, useNavigate } from "react-router-dom"
import { Product } from "../types"
import { formatCurrency } from "../utils"
import { deleteProduct } from "../services/ProductService"

type ProductDetailProps = {
    product: Product
}

export async function action({ params }: ActionFunctionArgs) {
    if (params.id !== undefined) {
        await deleteProduct(+params.id)
        return redirect('/')
    }
}

export default function ProductDetails({ product }: ProductDetailProps) {

    const fetcher = useFetcher()

    const navigate = useNavigate()

    const isAvailable = product.availability

    return (
        <tr className="border-b border-dotted text-center">
            <td className="p-3 text-lg text-gray-800">
                {product.name}
            </td>

            <td className="p-3 text-lg text-gray-800">
                {formatCurrency(product.price)}
            </td>

            <td className="p-3 text-lg text-gray-800">
                <fetcher.Form method="POST">
                    <button
                        type="submit"
                        name="id"
                        value={product.id}
                        className={`${isAvailable ? 'text-white bg-green-400 border-none' : 'bg-gray-300 border-gray-400'} rounded-lg p-2 text-xs uppercase font-semibold min-w-full border border-dashed cursor-pointer`}
                    >
                        {isAvailable ? 'A' : 'NA'}
                    </button>
                </fetcher.Form>
            </td>

            <td className="p-3 text-lg text-gray-800 ">
                <div className="flex gap-2 items-center">
                    <button
                        onClick={() => navigate(`/products/${product.id}/edit`)}
                        className="bg-indigo-600 cursor-pointer hover:bg-indigo-500 text-white rounded-lg w-full p-2 font-bold text-xs text-center"
                    >
                        Edit
                    </button>
                    <Form
                        method="POST"
                        className="w-full"
                        action={`products/${product.id}/delete`}
                        onSubmit={(e) => {
                            if (!confirm('Delete product?')) {
                                e.preventDefault()
                            }
                        }}
                    >
                        <input
                            type="submit"
                            value="Delete"
                            className="bg-red-600 hover:bg-red-500 text-white rounded-lg w-full p-2 font-bold text-xs text-center cursor-pointer"
                        />
                    </Form>
                </div>
            </td>
        </tr>
    )
}
