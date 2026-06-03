import type { User } from '../types';

export const mockUsers: User[] = [
  {
    id: 'user-1',
    email: 'nayla1907@fintrace.com',
    password: 'user123',
    fullName: 'Nayla Sasha Meliana',
    phoneNumber: '+62 812-3456-7890',
    avatar: '/images/Photo-Profile-Nayla-Sasha-Meliana.png',
    role: 'user',
    status: 'active',
  },
  {
    id: 'admin-1',
    email: 'raka1203@fintrace.com',
    password: 'admin123',
    fullName: 'Muhammad Raka Razzani',
    phoneNumber: '+62 811-2222-3333',
    avatar: '/images/cowboy-patrick.jpg',
    role: 'admin',
    status: 'active',
  },
];