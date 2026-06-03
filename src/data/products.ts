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
    imageUrl: 'https://via.placeholder.com/320x200?text=Coffee',
  },
  {
    id: 'arts-1',
    name: 'Handwoven Agaseke Basket',
    price: 35,
    category: 'Arts',
    imageUrl: 'https://via.placeholder.com/320x200?text=Agaseke',
  },
  {
    id: 'fabrics-1',
    name: 'Kitenge Fabric (2m)',
    price: 18,
    category: 'Fabrics',
    imageUrl: 'https://via.placeholder.com/320x200?text=Fabrics',
  },
  {
    id: 'coffee-2',
    name: 'Single Origin Arabica (500g)',
    price: 20,
    category: 'Coffee',
    imageUrl: 'https://via.placeholder.com/320x200?text=Coffee+2',
  },
  {
    id: 'arts-2',
    name: 'Imigongo Art Panel',
    price: 120,
    category: 'Arts',
    imageUrl: 'https://via.placeholder.com/320x200?text=Imigongo',
  },
  {
    id: 'fabrics-2',
    name: 'Traditional Shuka',
    price: 42,
    category: 'Fabrics',
    imageUrl: 'https://via.placeholder.com/320x200?text=Shuka',
  },
]
