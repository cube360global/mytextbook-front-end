import {UserProfileSubModel} from './UserProfileSubModel';

export interface UserProfileModel {
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
  subscriptions: UserProfileSubModel[];
  contents: any[];
}
