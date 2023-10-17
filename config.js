const DATABASE_URL = `mongodb+srv://process.env.DB_USERNAME:process.env.DB_PASSWORD@moviewatcher.l9cvehy.mongodb.net/?retryWrites=true&w=majority`

const PORT = process.env.PORT || 8000;

module.exports = { DATABASE_URL, PORT }