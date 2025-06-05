import {
  Controller, Get, Post as HttpPost, Body,
  Param, Delete, Patch, Optional
} from '@nestjs/common';
import { PostService } from './post.service';
import { Post as BlogPost } from './entities/post.entity';

@Controller('posts')
export class PostController {
// postService(injection token) will be used in future methods to handle post-related business logic such as creating, retrieving, updating, or deleting posts. 
// PostService is a service class that contains reusable methods for interacting with the posts data
  constructor(private postService: PostService) {}
 // nestjs internally use body parser, @Body() decorator is used to access the request body (i.e., the data sent by the client in a POST, PUT, or PATCH request
  @HttpPost()
  create(@Body() post: Omit<BlogPost, 'id'>) {
    return this.postService.create(post);
  }
// decorator keep the code clean, understandable, easier to define routes and handling incoming request
  @Get()
  findAll() {
    return this.postService.findAll();
  }
// dynamically send value by client side to fetch that value use @param
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.postService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() post: Partial<BlogPost>) {
    return this.postService.update(+id, post);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.postService.remove(+id);
  }
}
