module.exports = {
  port: 8080,
  dbURL: process.env.MONGODB_URI || 'mongodb://localhost/articles',
  dbOptions: {
    useCreateIndex: true,
    useNewUrlParser: true
  }
}
