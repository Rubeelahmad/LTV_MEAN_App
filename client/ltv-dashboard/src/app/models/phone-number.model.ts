export interface PhoneNumber {
  id: string;
  number: string; // Change 'phone' to 'number' to match API
  status: 'active' | 'inactive';
  messages: number; // Change 'messages' to 'messageCount' for consistency
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
