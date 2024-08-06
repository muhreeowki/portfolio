export interface Metadata {
  author: {
    firstName: string;
    lastName: string;
    username: string;
    label: string;
  };
  site: {
    title: string;
    description: string;
    ogImage: string;
    url: string;
    keywords: string[];
    language: string;
    charset: string;
  };
}
