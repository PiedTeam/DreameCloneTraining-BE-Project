import dotenv from 'dotenv'
import { MongoClient, Db, Collection } from 'mongodb'

dotenv.config()

const uri = `mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@development-cluster.ttg66nv.mongodb.net/`
const client = new MongoClient(uri)
class DatabaseService {
  private client: MongoClient
  private db: Db
  constructor() {
    this.client = new MongoClient(uri)
    this.db = this.client.db(process.env.DB_NAME)
  }
  async connect() {
    try {
      await this.db.command({ ping: 1 })
      console.log('Pinged your deployment. You successfully connected to MongoDB!')
    } catch (error) {
      console.log(error)
    }
  }
}

const databaseService = new DatabaseService()
export default databaseService
