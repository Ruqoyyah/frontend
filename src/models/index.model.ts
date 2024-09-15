export type IFaq = {
  id?: number;
  question: string;
  answer: string;
  created_by?: number;
  created_at?: string;
  last_updated_by?: number;
  updated_at?: string;
};

export type CreateRoleDto = {
  name: string;
  description: string;
  is_active: true;
  permissions: number[];
};
export type EditRoleDto = {
  name: string;
  description: string;
  is_active: boolean;
};
export type CreateFaqDto = {
  question: string;
  answer: string;
};
export type LoginDto = {
  email: string;
  password: string;
};

export type CreateAccessPlanDto = {
  title: string;
  subtext: string;
  amount: number;
  duration: number;
  features: string[];
};

export type CreateUserDto = {
  firstname: string;
  lastname: string;
  email: string;
  role_id: number;
  password: string;
};
export type EditUserDto = {
  firstname: string;
  lastname: string;
  email: string;
  role_id: number;
};
export type IUser = {
  id: number;
  firstname: string;
  lastname: string;
  email: string;
  is_active: boolean;
  role_id: number;
  created_by: any;
  last_updated_by: any;
  created_at: string;
  updated_at: string;
  role?: IRole;
};
export type IMockUser = {
  name: string;
  grade: string;
  sport: string;
  email: string;
};
export type IComplaint = {
  id: number;
  name: string;
  email: string;
  reason: string;
  message: string;
  submitted_at: string;
};

export type IAccessPlan = {
  id: number;
  title: string;
  subtext: string;
  amount: number;
  duration: string;
  features: any;
  created_by: number;
  created_at: string;
  last_updated_by: number;
  updated_at: string;
};
export type ICount = {
  plan: string;
  count: number;
};
export type ISubscription = {
  id: number;
  subscriber_id: number;
  access_plan_id: number;
  start_date: string;
  end_date: string;
  status: "Cancelled";
  date_purchased: string;
  updated_at: string;
  plan: IAccessPlan;
};
export type ISubscriber = {
  id: number;
  firstname: string;
  lastname: string;
  email: string;
  nin: string;
  phone: string;
  password: string;
  is_active: boolean;
  is_nin_validated: boolean;
  last_updated_by: any;
  created_at: string;
  updated_at: string;
  subcriptions: ISubscription[];
};

export type Ipermission = {
  id: number;
  name: string;
  description: string;
  is_active: boolean;
  last_updated_by: any;
  updated_at: string;
};
export type IpermissionDetails = {
  id: number;
  role_id: number;
  permission_id: number;
  permission: {
    id: number;
    permission_id: string;
    name: string;
    description: string;
    is_active: boolean;
    last_updated_by: any;
    updated_at: string;
  };
};
export type IRole = {
  id: number;
  name: string;
  description: string;
  is_active: boolean;
  created_by: any;
  last_updated_by: any;
  created_at: string;
  updated_at: any;
  users?: IUser[];
};
export type IRoleDetails = {
  id: number;
  name: string;
  description: string;
  is_active: boolean;
  created_by: any;
  last_updated_by: any;
  created_at: string;
  updated_at: any;
  permissions: IpermissionDetails;
};
