interface ICreateUserDTO {
  id?: string;
  name: string;
  email: string;
  password: string;
  driver_license: string;
  isAdmin?: boolean;
  created_at?: Date;
}

export { ICreateUserDTO };
