import { type SchemaTypeDefinition } from 'sanity'
import { product } from '../Schemas/product-schema'
import { order } from '../Schemas/order'


export const schema: { types: SchemaTypeDefinition[] } = {
  types: [product ,order],
}
