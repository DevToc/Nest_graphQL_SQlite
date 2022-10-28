import { Module } from '@nestjs/common';
import { PostResolvers } from './posts.resolvers';
import { PostsService } from './posts.service';
import { PrismaService } from 'src/prisma.service';


@Module({
  providers: [PostResolvers, PostsService, PrismaService],
})
export class PostModule {}