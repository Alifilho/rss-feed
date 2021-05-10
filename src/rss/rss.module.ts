import { Module } from '@nestjs/common';
import { RssService } from './rss.service';
import { RssController } from './rss.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Rss } from './entities/rss.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Rss])],
  controllers: [RssController],
  providers: [RssService],
})
export class RssModule {}
