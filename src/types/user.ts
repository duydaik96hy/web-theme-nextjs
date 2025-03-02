export interface IUser {
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

export interface IGetListUserResponse {
    users: IUser[];
    pagination: {
      current_page: number;
      page_size: number;
      total_items: number;
    }
  }

  export interface IUserFilter {
    id: number;                  
    email?: string;               
    phone_number?: string;        
    fullname?: string;    
    address?: string;  
    search?: string;
}