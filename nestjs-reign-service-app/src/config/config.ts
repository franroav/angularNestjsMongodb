const config = {
    qa: {
        port: 3000,
        mongodb: 'mongodb://mongo_db:2717/nestjs-reign-service-app', // mongodb://localhost/nestjs-reign-service-app
        serviceUrl: "https://hn.algolia.com/api/v1/search_by_date?"
    },
    develoment: {
        port: 3000,
        mongodb: 'mongodb://mongo_db:2717/nestjs-reign-service-app', // mongodb://mongo_db:2717/nestjs-reign-service-app
        serviceUrl: "https://hn.algolia.com/api/v1/search_by_date?"
    },
    production: {
        port: 3000,
        mongodb: 'mongodb://mongo_db:2717/nestjs-reign-service-app',
        serviceUrl: "https://hn.algolia.com/api/v1/search_by_date?"
    }
}
export default config