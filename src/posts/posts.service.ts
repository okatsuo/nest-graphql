import { Injectable } from '@nestjs/common';
import { PostSchema } from './post-model';
import { IPost } from './types';

@Injectable()
export class PostsService {
  async findAll(): Promise<IPost[]> {
    const posts = new PostSchema();
    posts.id = '1';
    posts.text = 'my first post 🚀';

    return [posts];
  }
}
