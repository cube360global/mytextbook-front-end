import {BookModel} from './api/BookModel';
import {ContentModel} from './api/ContentModel';

export interface BookContentModel {
  content: ContentModel;
  bookList: BookModel[];
}
