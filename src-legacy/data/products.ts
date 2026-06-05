export type Product = {
  id: string
  name: string
  price: number
  category: string
  imageUrl?: string
}

export const products: Product[] = [
  {
    id: 'coffee-1',
    name: 'Rwandan Bourbon Coffee (250g)',
    price: 12.5,
    category: 'Coffee',
    imageUrl: '/assets/product-coffee-farm.jpg',
  },
  {
    id: 'arts-1',
    name: 'Handwoven Agaseke Basket',
    price: 35,
    category: 'Arts',
    imageUrl: '/assets/product-agaseke.jpg',
  },
  {
    id: 'fabrics-1',
    name: 'Kitenge Fabric (2m)',
    price: 18,
    category: 'Fabrics',
    imageUrl: '/assets/product-kitenge.jpg',
  },
  {
    id: 'coffee-2',
    name: 'Single Origin Arabica (500g)',
    price: 20,
    category: 'Coffee',
    imageUrl: '/assets/product-barista.jpg',
  },
  {
    id: 'arts-2',
    name: 'Imigongo Art Panel',
    price: 120,
    category: 'Arts',
    imageUrl: '/assets/product-imigongo.jpg',
  },
  {
    id: 'fabrics-2',
    name: 'Traditional Shuka',
    price: 42,
    category: 'Fabrics',
    imageUrl: '/assets/product-shuka.jpg',
  },
]
