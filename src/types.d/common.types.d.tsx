type langauge = {
  name: string;
  description: string;
};
type translations = {
  en: langauge;
};
export type category = {
  backgroundImage: string;
  translations: translations;
  cid: number;
  totalPostCount: number;
  totalTopicCount: number;
};
type teaser = {
  content: string;
};
export type topic = {
  tid: number;
  title: string;
  teaser: teaser;
  postcount: number;
};
export type post = {
  pid: number;
  content: string;
};

export type Tloader = { status: boolean; message: string };
export type Terror = { status: boolean; message: string };

export type TtopicsState = {
  topicList: Array<topic>;
  loading: Tloader;
  error: Terror;
};
export type TcategoriesState = {
  categoryList: Array<category>;
  loading: Tloader;
  error: Terror;
};
export type TpostsState = {
  postList: Array<post>;
  loading: Tloader;
  error: Terror;
};
