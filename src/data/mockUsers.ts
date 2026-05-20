import type { User } from '../types';

export const mockUsers: User[] = [
  {
    id: 'user-1',
    email: 'user@fintrace.com',
    password: 'user123',
    fullName: 'Nayla Sasha Meliana',
    phoneNumber: '+62 812-3456-7890',
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&h=200&fit=crop',
    role: 'user',
    status: 'active',
  },
  {
    id: 'admin-1',
    email: 'admin@fintrace.com',
    password: 'admin123',
    fullName: 'Muhammad Raka Razzani',
    phoneNumber: '+62 811-2222-3333',
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200&h=200&fit=crop',
    role: 'admin',
    status: 'active',
  },
];