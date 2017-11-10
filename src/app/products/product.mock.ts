import {Product} from './product';

export const products: Product[] = [
  {
    id: 1,
    name: 'Kajak',
    categoryId: 1,
    description: 'Łódka dla jednej osoby',
    price: {
      value: 150,
      currency: 'USD'
    }
  },
  {
    id: 2,
    name: 'Wiosło',
    categoryId: 1,
    description: 'Kijek do napędu',
    price: {
      value: 40,
      currency: 'USD'
    }
  },
  {
    id: 3,
    name: 'Piłka',
    categoryId: 2,
    description: 'Z odciskiem buta Lewandowskiego',
    price: {
      value: 123.55,
      currency: 'USD'
    }
  },
];
