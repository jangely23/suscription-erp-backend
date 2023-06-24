import { SetMetadata } from "@nestjs/common";
import { UserRole } from "../models/userRole.model";


export const USER_ROLES_KEY = 'userRoles';

export const UserRoles = (...userRoles: UserRole[]) => SetMetadata(USER_ROLES_KEY, userRoles); 