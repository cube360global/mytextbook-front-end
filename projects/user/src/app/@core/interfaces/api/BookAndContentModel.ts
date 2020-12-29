import {BookModel} from './BookModel';
import {ContentModel} from './ContentModel';

export interface BookAndContentModel {
  book: BookModel;
  contents: ContentModel[];
}
