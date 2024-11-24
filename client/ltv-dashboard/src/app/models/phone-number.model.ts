export interface PhoneNumber {
  id: string;
  number: string;
  status: 'active' | 'inactive';
  messages: number;
}

export interface PhoneListResponse {
  data: PhoneNumber[];
  pagination: {
    total: number;
    totalPages: number;
    currentPage: number;
    itemsPerPage: number;
    hasNextPage: boolean;
    hasPrevPage: boolean;
  };
}

export interface LoginRequest {
  email: string;
  password: string;
}

export interface SignupRequest {
  username: string;
  email: string;
  phone: string;
  password: string;
}

export interface AuthResponse {
  token: string;
  message: string;
  user: {
    id: string;
    email: string;
    name: string;
  };
}

export interface FilterOptions {
  status?: 'active' | 'inactive' | 'all';
}
