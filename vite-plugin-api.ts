import type { Plugin } from 'vite';

export function devApiPlugin(): Plugin {
  return {
    name: 'dev-api-plugin',
    configureServer(server) {
      server.middlewares.use((req, res, next) => {
        const products = [
          { id: "1", name: "Laptop", price: 10000 },
          { id: "2", name: "Phone", price: 5000 },
          { id: "3", name: "Keyboard", price: 100 }
        ];

        if (req.url === '/api/products' || req.url === '/api/products/') {
          res.setHeader('Content-Type', 'application/json');
          res.end(JSON.stringify(products));
          return;
        }

        if (req.url?.startsWith('/api/products/')) {
          const id = req.url.split('/').pop();
          const product = products.find(p => p.id === id);

          if (product) {
            res.setHeader('Content-Type', 'application/json');
            res.end(JSON.stringify(product));
          } else {
            res.statusCode = 404;
            res.end(JSON.stringify({ error: 'Product not found' }));
          }
          return;
        }
        next();
      });
    },
  };
}