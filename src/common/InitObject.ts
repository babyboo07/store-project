export interface IFile {
  name: string;
}

export const File: IFile = {
  name: "",
};

export interface IUsers {
  id: number;
  username: string;
  email: string;
  role: number;
  avatar: string;
}

export const Users: IUsers = {
  id: 0,
  username: "",
  email: "",
  role: 0,
  avatar: "",
};

export interface IColors {
  id: number;
  color: string;
  rgb: string;
}

export const Colors: IColors = {
  id: 0,
  color: "",
  rgb: "",
};

export interface ICategory {
  id: number;
  name: string;
  parent_id: number;
}

export const Category: ICategory = {
  id: 0,
  name: "",
  parent_id: 0,
};

export interface ICateWithChildren {
  id: number;
  name: string;
  parent_id: number;
  children: [
    {
      id: number;
      name: string;
      parent_id: number;
    }
  ];
  parent: [
    {
      id: number;
      name: string;
      parent_id: number;
    }
  ];
}

export const CateWithChildren: ICateWithChildren = {
  id: 0,
  name: "",
  parent_id: 0,
  children: [
    {
      id: 0,
      name: "",
      parent_id: 0,
    },
  ],
  parent: [
    {
      id: 0,
      name: "",
      parent_id: 0,
    },
  ],
};

export interface IOrder {
  id: number;
  product_id: number;
  qty: number;
  total: number;
  user_id: number;
  name: string;
  user: string;
  shop: string;
  created_at: Date;
  color: string;
  price: number;
  address: string;
  phone_number: number;
}

export const Order: IOrder = {
  id: 0,
  product_id: 0,
  qty: 0,
  total: 0,
  user_id: 0,
  created_at: new Date(),
  name: "",
  user: "",
  shop: "",
  color: "",
  price: 0,
  address: "",
  phone_number: 0,
};
