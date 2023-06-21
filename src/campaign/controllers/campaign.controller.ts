import { Controller, UseGuards } from '@nestjs/common';
import { ApikeyGuard } from 'src/auth/guards/apikey.guard';
import { JwtAuthGuard } from 'src/auth/guards/jwt-auth.guard';
import { RoleGuard } from 'src/auth/guards/role.guard';
@UseGuards(ApikeyGuard, JwtAuthGuard, RoleGuard)
@Controller('campaign')
export class CampaignController {}
