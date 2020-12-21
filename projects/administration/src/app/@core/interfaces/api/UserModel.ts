export interface UserModel{
  id: number;
  email: string;
  firstName?: any;
  lastName?: any;
  telephoneNumber?: any;
  active: boolean;
  subscriptionCount: number;
  role: string;
}
