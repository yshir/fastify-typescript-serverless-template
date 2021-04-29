export const getProductsSchema = {
  response: {
    200: {
      type: 'object',
      properties: {
        count: {
          type: 'number',
        },
        products: {
          type: 'array',
          items: {
            type: 'object',
            properties: {
              id: { type: 'string', format: 'uuid' },
              name: { type: 'string' },
              status: { type: 'string' },
            },
          },
        },
      },
      additionalProperties: false,
    },
  },
} as const;

export const getProductByIdSchema = {
  params: {
    type: 'object',
    properties: {
      id: { type: 'string', format: 'uuid' },
    },
    required: ['id'],
    additionalProperties: false,
  },
  response: {
    200: {
      type: 'object',
      properties: {
        product: {
          type: 'object',
          properties: {
            id: { type: 'string', format: 'uuid' },
            name: { type: 'string' },
            status: { type: 'string' },
          },
        },
      },
      additionalProperties: false,
    },
  },
} as const;
