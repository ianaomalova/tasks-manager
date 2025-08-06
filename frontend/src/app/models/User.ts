export interface UserProfile {
  id: string;
  name: string;
  avatar: string;
  email: string;
  bio: string;
  createdAt: string;
  lastLoginAt: string;
  position: string;
  projects: string[];
  roles: string[];
  skills: string[];
  teams: string[];
}

export type UserProfileBasicInfo = Omit<UserProfile, 'id' | 'projects' | 'roles' | 'createdAt' | 'lastLoginAt'>;
