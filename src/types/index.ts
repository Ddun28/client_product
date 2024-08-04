import { array, number, object, string} from "valibot";
import * as v from 'valibot';

export const DraftProductSchema = object({
    name: string(),
    price: number()
})

export const ProductSchema = object({
    id: v.number(),
    name: v.string(),
    price: v.number(),
    availability: v.boolean()
})

export const ProductsSchema = array(ProductSchema)
export type Product = v.InferInput<typeof ProductSchema>