import swaggerJSDoc from "swagger-jsdoc";
import swaggerUi from "swagger-ui-express";
import dotenv from "dotenv";
dotenv.config();
const options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "XT Management System API",
      version: "1.0.0",
      description: "API documentation for the XT Management System",
    },
    servers: [
      {
        url: process.env.BASE_URL,
        description: `${process.env.NODE_ENV}`,
      },
    ],
    components: {
      securitySchemes: {
        bearerAuth: {
          type: "http",
          scheme: "bearer",
          bearerFormat: "JWT",
        },
      },
      schemas: {
        SuccessResponse: {
          type: "object",
          properties: {
            success: {
              type: "boolean",
              example: true,
            },
            code: {
              type: "integer",
              example: 200,
            },
            message: {
              type: "string",
              example: "OK",
            },
            data: {
              type: "object",
              nullable: true,
              description: "Dữ liệu trả về (null nếu không có)",
            },
          },
        },
        PaginatedResponse: {
          type: "object",
          properties: {
            success: {
              type: "boolean",
              example: true,
            },
            code: {
              type: "integer",
              example: 200,
            },
            message: {
              type: "string",
              example: "OK",
            },
            data: {
              type: "object",
              properties: {
                items: {
                  type: "array",
                  description: "Danh sách dữ liệu",
                  items: { type: "object" },
                },
                pageNumber: {
                  type: "integer",
                  description: "Trang hiện tại",
                  example: 1,
                },
                pageSize: {
                  type: "integer",
                  description: "Số lượng mỗi trang",
                  example: 10,
                },
                totalPages: {
                  type: "integer",
                  description: "Tổng số trang",
                  example: 5,
                },
                totalRecords: {
                  type: "integer",
                  description: "Tổng số bản ghi",
                  example: 50,
                },
                hasNextPage: {
                  type: "boolean",
                  description: "Có trang tiếp theo không",
                  example: true,
                },
                hasPrevPage: {
                  type: "boolean",
                  description: "Có trang trước không",
                  example: false,
                },
              },
            },
          },
        },
        ErrorResponse: {
          type: "object",
          properties: {
            success: {
              type: "boolean",
              example: false,
            },
            code: {
              type: "integer",
              example: 400,
            },
            message: {
              type: "string",
              example: "Lỗi",
            },
            errors: {
              type: "array",
              nullable: true,
              description: "Chi tiết lỗi validation (nếu có)",
              items: {
                type: "object",
                properties: {
                  field: { type: "string" },
                  message: { type: "string" },
                },
              },
            },
          },
        },
      },
    },
    security: [
      {
        bearerAuth: [],
      },
    ],
  },
  apis: ["./src/router/*.js"],
};

const swaggerSpec = swaggerJSDoc(options);

const setupSwagger = (app) => {
  app.use("/api/docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));
};

export default setupSwagger;
