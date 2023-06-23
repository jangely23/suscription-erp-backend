import { CanActivate, ExecutionContext, Injectable, UnauthorizedException, Inject } from '@nestjs/common';
import { Observable } from 'rxjs';

import { Request } from 'express';
import { Reflector } from '@nestjs/core';
import { ConfigType} from '@nestjs/config';
import { IS_PUBLIC_KEY } from '../decorators/public.decorator';
import configuration from 'src/configuration';


@Injectable()
export class ApikeyGuard implements CanActivate {

  constructor (
    private reflector: Reflector,
    @Inject(configuration.KEY) private configService: ConfigType<typeof configuration>
  ){}

  canActivate(
    context: ExecutionContext,
  ): boolean | Promise<boolean> | Observable<boolean> {

    const routeIsPublic = this.reflector.get(IS_PUBLIC_KEY, context.getHandler());

    if(routeIsPublic){
      return true;
    }

    const request = context.switchToHttp().getRequest<Request>();

    const authHeader = request.header('apikey');

    const isAuth = authHeader === this.configService.apiKey;
    
    if(!isAuth){
      throw new UnauthorizedException('Not allow');
    }
    
    return isAuth;
  }
}
