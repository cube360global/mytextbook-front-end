import {SubjectModel} from './api/SubjectModel';
import {BookModel} from './api/BookModel';

export interface SubjectBookModel {
  subjects: SubjectModel[];
  book: BookModel;
}
