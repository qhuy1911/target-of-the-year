import { User } from 'firebase/auth';

export type UserModel = User & { accessToken?: string };
