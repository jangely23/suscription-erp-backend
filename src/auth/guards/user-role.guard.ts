import { CanActivate, ExecutionContext, ForbiddenException, Injectable } from '@nestjs/common';
import { ContextIdFactory, Reflector } from '@nestjs/core';
import { Observable } from 'rxjs';
import { UserRole } from '../models/userRole.model';
import { USER_ROLES_KEY } from '../decorators/userRole.decorator';
import { PayloadToken } from '../models/token.model';

@Injectable()
export class UserRoleGuard implements CanActivate {

  constructor(private reflector: Reflector){}

  canActivate(
    context: ExecutionContext,
  ): boolean | Promise<boolean> | Observable<boolean> {

    const userRoles = this.reflector.get<UserRole[]>(USER_ROLES_KEY, context.getHandler())

    if(!userRoles){
      throw new ForbiddenException('You are not allow');
    }

    const request = context.switchToHttp().getRequest();
    const user = request.user as PayloadToken;

    const isAuthUserRole = userRoles.some((userRoles) => userRoles === user.typeCustomer)

    return isAuthUserRole;
  }
}
