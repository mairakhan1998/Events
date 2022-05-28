import { Comment } from './comments';

export class Dish{
    id: number | undefined;
    name:string | undefined;
    image: string | undefined;
    category: string | undefined;
    featured: boolean | undefined;
    label:string | undefined;
    price: number | undefined;
    description: string | undefined;
    comments: Comment[] | undefined;
}