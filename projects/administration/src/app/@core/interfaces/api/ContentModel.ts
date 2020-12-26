export interface ContentModel{
  id: number;
  name: string;
  description: string;
  chapter: number;
  pageNumber: number;
  dateOfUpload: number;
  viewCount: number;
  likeCount: number;
  unLikeCount: number;
  contentURL: string;
  markerImageURL: string;
  status: boolean;
  book: string;
}
