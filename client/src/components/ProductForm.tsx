import { Product } from "../types"

type ProductFormProps = {
    product?: Product
}
export default function ProductForm({product}:ProductFormProps) {
    return (
        <>
            <div className="mb-4">
                    <label
                        className="text-gray-800"
                        htmlFor="name"
                    >Name Product:</label>
                    <input
                        id="name"
                        type="text"
                        className="mt-2 block w-full p-3 bg-gray-50"
                        placeholder="Name of Product"
                        name="name"
                        defaultValue={product?.name}
                    />
                </div>
                <div className="mb-4">
                    <label
                        className="text-gray-800"
                        htmlFor="price"
                    >Price:</label>
                    <input
                        id="price"
                        type="number"
                        className="mt-2 block w-full p-3 bg-gray-50"
                        placeholder="Price Product. ej. 200, 300"
                        name="price"
                        defaultValue={product?.price}
                    />
                </div>
        </>
    )
}
