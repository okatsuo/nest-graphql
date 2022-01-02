import { Query, Resolver } from '@nestjs/graphql';
import { PostSchema } from './post-model';
import { PostsService } from './posts.service';
import { IPost } from './types';

@Resolver(() => PostSchema)
export class PostsResolver {
  constructor(private readonly postsService: PostsService) {}

  @Query(() => [PostSchema])
  async posts(): Promise<IPost[]> {
    return this.postsService.findAll();
  }
}
