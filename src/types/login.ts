import exp from "constants";

export interface ILoginRequest {
  phone_or_email?: string;
  password?: string;
  fb_id_token?: string;
  gg_id_token?: string;
}

export interface ISignupRequest {
  fullname?: string;
  phone_number?: string;
  email?: string;
  password?: string;
}

export interface ISignupresponse {
  id: number;
}
export interface ILoginResponse {
  token: string;
}

export interface IUserResponse {
  id: number;                  
  email?: string;               
  phone_number?: string;        
  fullname?: string;           
  avatar_url?: string;         
  status?: string; 
  type?: string;
  role?: string;      
  gender?: string; 
  age?: number;                 
  birthday?: string;             
  address?: string;            
  code?: string;                 
  balance?: number;
}
