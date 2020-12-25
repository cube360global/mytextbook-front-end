import {UserSubscriptionModel} from './UserSubscriptionModel';

export interface UserModel {
  id: number;
  email: string;
  firstName: string;
  lastName: string;
  telephoneNumber: string;
  active: boolean;
  subscriptionCount: number;
  role: string;
  district: string;
  salesLead?: any;
  birthDay: number;
  school: string;
  subscriptions: UserSubscriptionModel[];
  contents: any[];
}
