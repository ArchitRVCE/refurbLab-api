import { FastifyInstance } from 'fastify';

export async function productRoutes(app: FastifyInstance) {
  // Placeholder route to prevent import errors
  app.get('/products', async (request, reply) => {
    return { message: 'Product route working!' };
  });
}
