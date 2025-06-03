// src/post/post.service.ts
import { Injectable, NotFoundException } from '@nestjs/common';
import { Post } from './entities/post.entity';

@Injectable()
export class PostService {
  private posts: Post[] = [];
  private id = 1;

  create(post: Omit<Post, 'id'>): Post {
    const newPost = { id: this.id++, ...post };
    this.posts.push(newPost);
    return newPost;
  }

  findAll(): Post[] {
    return this.posts;
  }

  findOne(id: number): Post {
    const post = this.posts.find(p => p.id === id);
    if (!post) throw new NotFoundException('Post not found');
    return post;
  }

  update(id: number, updatedPost: Partial<Post>): Post {
    const post = this.findOne(id);
    Object.assign(post, updatedPost);
    return post;
  }

  remove(id: number): void {
    const index = this.posts.findIndex(p => p.id === id);
    if (index === -1) throw new NotFoundException('Post not found');
    this.posts.splice(index, 1);
  }
}
