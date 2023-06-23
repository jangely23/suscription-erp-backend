import { Controller, UseGuards } from '@nestjs/common';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { ApikeyGuard } from 'src/auth/guards/apikey.guard';
import { JwtAuthGuard } from 'src/auth/guards/jwt-auth.guard';
import { RoleGuard } from 'src/auth/guards/role.guard';

@ApiBearerAuth()
@ApiTags('Campaign')
@UseGuards(ApikeyGuard, JwtAuthGuard, RoleGuard)
@Controller('campaign')
export class CampaignController {}
