import { Router} from 'express';
import { createCategory } from './app/useCases/categories/createCategory';
import { listCategories } from './app/useCases/categories/listCategories';
import { createProduct } from './app/useCases/products/createProduct';
import { listProducts } from './app/useCases/products/listProducts';
import multer from 'multer';
import path from 'node:path';
import { listProductsByCategory } from './app/useCases/categories/listProductsByCategory';
import { createOrder } from './app/useCases/orders/createOrder';
import { listOrders } from './app/useCases/orders/listOrders';
import { changeOrderStatus } from './app/useCases/orders/changeOrderStatus';
import { cancelOrder } from './app/useCases/orders/cancelOrder';

export const router = Router();
// Multer is a node.js middleware for handling multipart/form-data , which is primarily used for uploading files
const upload = multer({
  storage: multer.diskStorage({
    destination(req, file, callback){
      callback(null, path.resolve(__dirname, '..', 'uploads'));
    },
    filename(req, file, callback) {
      callback(null, `${Date.now()}-${file.originalname}`);
    },
  })

});
//List Categories
router.get('/categories', listCategories);

//Create Categories
router.post('/categories', createCategory);
//List Products
router.get('/products', listProducts);
//Create Product
router.post('/products', upload.single('image'), createProduct);
//Get product by category
router.get('/categories/:categoryId/products', listProductsByCategory);
// List Orders
router.get('/orders', listOrders);
// Create Order
router.post('/orders', createOrder);
// Change Order Status
//patch é quando atualizamos uma parte do dado, diferentemente do put
router.patch('/orders/:orderId', changeOrderStatus);
// Delete/cancel order
router.delete('/orders/:orderId', cancelOrder);
