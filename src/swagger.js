const options = {
    swaggerDefinition: {
      openapi: "3.0.0",
      info: {
        title: "Express Service with Swagger!",
        version: "1.0.0",
        description: "A REST API using swagger and express.",
      },
      servers: [
        {
          url: "http://localhost:3000",
        },
      ],
    },
    apis: [`${__dirname}/router/*.js`] // swagger 문서 연동
  };
  
  export default options;