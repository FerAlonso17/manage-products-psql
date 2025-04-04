import {Request,Response} from 'express'
import Product from '../models/Product.model'

export const getProducts = async (req: Request, res: Response) => {
    try {
        const products = await Product.findAll({
            order: [
                ['id', 'DESC']
            ]
            // ,attributes:{exclude:['createdAt','updatedAt','availability']} Esto es si no se quiere traer todos los campos
        })
        res.json({data: products})
    } catch (error) {
        console.log(error)
    }
}

export const getProductById = async (req: Request, res: Response) => {
    try {
        const {id} = req.params
        const product = await Product.findByPk(id)

        if (!product) {
            res.status(404).json({
                error:'Producto no encontrado'
            })
            return
        }
        res.json({data: product})
    } catch (error) {
        console.log(error)
    }
}

export const createProduct = async (req : Request, res : Response) => {
    try {
        const product = await Product.create(req.body)
        res.status(201).json({data: product})
    } catch (error) {
        console.log(error)
    }
}

//con put
export const updateProduct = async (req : Request, res : Response)=>{
    const {id} = req.params
    const product = await Product.findByPk(id)

    if(!product){
        res.status(404).json({
            error:'Producto no encontrado'
        })
        return
    }

    //Actualizar
    await product.update(req.body)
    await product.save()

    res.json({data:product})
}

//con patch
export const updateAvailability = async (req: Request, res: Response) => {
    const { id } = req.params
    const product = await Product.findByPk(id)

    if(!product){
        res.status(404).json({
            error:'Producto no encontrado'
        })
        return
    }
    
    // Actualizar
    product.availability = !product.dataValues.availability
    await product.save()
    res.json({data: product})
}

export const deleteProduct = async (req: Request, res: Response) => {
    const { id } = req.params
    const product = await Product.findByPk(id)

    if(!product){
        res.status(404).json({
            error:'Producto no encontrado'
        })
        return
    }
    
    await product.destroy()
    res.json({data: 'Producto Eliminado'})
}