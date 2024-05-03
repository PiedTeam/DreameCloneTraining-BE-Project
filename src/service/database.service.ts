import { config } from 'dotenv';
import { Db, Document, MongoClient, WithId } from 'mongodb';
import { IProductEN, ProductEN } from '~/module/product/product.schema';
config();

const uri = process.env.DEVELOPMENT_DATABASE_URL!;

class DatabaseService {
  private client: MongoClient;
  private db: Db;
  constructor() {
    this.client = new MongoClient(uri);
    this.db = this.client.db(process.env.DB_NAME);
  }

  async connect(): Promise<void> {
    try {
      await this.db.command({ ping: 1 });
    } catch (error) {
      console.log(error);
      throw error;
    }
  }

  async getProductById(id: string): Promise<ProductEN | undefined> {
    const product = (await this.db.collection('product_en').findOne({ id })) as IProductEN;
    if (product) {
      return new ProductEN(product);
    } else {
      throw new Error('Product does not exist');
    }
  }

  async getAllProducts(): Promise<WithId<Document>[] | null> {
    try {
      const productList = await this.db.collection('product_en').find().toArray();
      return productList;
    } catch (error) {
      throw new Error('Error while fetching all products');
    }
  }
}

const databaseService = new DatabaseService();
export default databaseService;
