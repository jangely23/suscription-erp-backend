import { CanActivate, ExecutionContext, ForbiddenException, Injectable } from '@nestjs/common';
import { Reflector } from '@nestjs/core';

import { Observable } from 'rxjs';
import { ROLES_KEY } from '../decorators/role.decorator';
import { PayloadToken } from '../models/token.model';
import { Role } from '../models/role.model';

@Injectable()
export class RoleGuard implements CanActivate {
  constructor(private reflector: Reflector) {}

  canActivate(
    context: ExecutionContext,
  ): boolean | Promise<boolean> | Observable<boolean> {

    const roles = this.reflector.get<Role[]>(ROLES_KEY, context.getHandler());

    if(!roles){
      return true;
    }

    const request = context.switchToHttp().getRequest();
    const user = request.user as PayloadToken;

    const isAuthRole = roles.some((role) => role === user.role)

    if(!isAuthRole) {
      throw new ForbiddenException('Your role is wrong');
    }

    return isAuthRole;
  }
}
