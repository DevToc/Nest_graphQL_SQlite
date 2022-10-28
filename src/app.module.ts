import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { GraphQLModule } from '@nestjs/graphql';
import { PostModule } from './posts/posts.module';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';


@Module({
  imports: [PostModule, GraphQLModule.forRoot<ApolloDriverConfig>({
    typePaths: ['./**/*.graphql'],
    driver:ApolloDriver
  }),],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
