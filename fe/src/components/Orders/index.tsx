import { OrdersBoard } from '../OrdersBoard';
import { Container} from './style';

export function Orders(){
  const orders = [
    {
      '_id': '63850bbb5fa96b685c3c531f',
      'table': '123',
      'status': 'IN PRODUCTION',
      'products': [
        {
          'product': {
            '_id': '637944c5bf2b7014e2f06e2e',
            'name': 'Pizza quatro queijos',
            'description': 'Deliciosa pizza quatro queijos com borda simples',
            'imagePath': '1668891845022-quatro-queijos.png',
            'price': 40,
            'ingredients': [
              {
                'name': 'Mussarela',
                'icon': '🧀',
                '_id': '637944c5bf2b7014e2f06e2f'
              },
              {
                'name': 'Parmesão',
                'icon': '🧀',
                '_id': '637944c5bf2b7014e2f06e30'
              },
              {
                'name': 'Gouda',
                'icon': '🧀',
                '_id': '637944c5bf2b7014e2f06e31'
              },
              {
                'name': 'Brie',
                'icon': '🧀',
                '_id': '637944c5bf2b7014e2f06e32'
              }
            ],
            'category': '6379353a47b1347080c3be08',
            '__v': 0
          },
          'quantity': 3,
          '_id': '63850bbb5fa96b685c3c5320'
        },
        {
          'product': {
            '_id': '6385094d76d5aec8d7a64ffc',
            'name': 'Coca-cola',
            'description': 'coca gelada gostosinha',
            'imagePath': '1669663052753-coca-cola.png',
            'price': 7,
            'ingredients': [],
            'category': '637935a247b1347080c3be0a',
            '__v': 0
          },
          'quantity': 2,
          '_id': '63850bbb5fa96b685c3c5321'
        }
      ],
      'createdAt': '2022-11-28T19:27:55.745Z',
      '__v': 0
    }
  ];
  return(
    <Container>
      <OrdersBoard
        icon='🕑'
        title='Fila de espera'
        orders={orders}
      />
      <OrdersBoard
        icon='👨‍🍳'
        title='Em preparação'
        orders={orders}
      />
      <OrdersBoard
        icon='✅'
        title='Pronto!'
        orders={orders}
      />
    </Container>
  );
}
