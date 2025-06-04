import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PostModule } from './post/post.module';
import { Post } from './post/entities/post.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'nestuser',
      password: 'password123',
      database: 'nest_blog',
      entities: [Post], // map db table to typescript class
      synchronize: true,
    }),    
    PostModule, // A feature module that probably includes routes and logic for blog posts
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}