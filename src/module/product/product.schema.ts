import { ObjectId } from 'mongodb';

export type ProductENType = {
  id: string;
  name: string;
  model: string;
  description: string;
  price: string;
  stockQuantity: string;
  warranty: string;
  weight: string;
  dimensions: string;
  power: string;
  color: string;
  manufacturer: string;
};

export type ProductVIType = {
  id: string;
  tên: string;
  model: string;
  'mô tả': string;
  giá: string;
  'số lượng tồn kho': string;
  'bảo hành': string;
  'khối lượng': string;
  'kích thước': string;
  'công suất': string;
  màu: string;
  'nhà sản xuất': string;
};

export interface IProductEN {
  _id?: ObjectId;
  id: string;
  name: string;
  model: string;
  description: string;
  price: string;
  stockQuantity: string;
  warranty: string;
  weight: string;
  dimensions: string;
  power: string;
  color: string;
  manufacturer: string;
}

// export interface IProductVI {}

export class ProductEN {
  _id?: ObjectId;
  id: string;
  name: string;
  model: string;
  description: string;
  price: string;
  stockQuantity: string;
  warranty: string;
  weight: string;
  dimensions: string;
  power: string;
  color: string;
  manufacturer: string;

  constructor(product: IProductEN) {
    this._id = product._id ?? new ObjectId();
    this.id = product.id;
    this.name = product.name;
    this.model = product.model;
    this.description = product.description;
    this.price = product.price;
    this.stockQuantity = product.stockQuantity;
    this.warranty = product.warranty;
    this.weight = product.weight;
    this.dimensions = product.dimensions;
    this.power = product.power;
    this.color = product.color;
    this.manufacturer = product.manufacturer;
  }
}
