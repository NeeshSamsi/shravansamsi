import * as prismic from "@prismicio/client";

const repoName = "shravan";
const endpoint = prismic.getEndpoint(repoName);
const client = prismic.createClient(endpoint);

export interface EventType {
  id: string;
  type: string;
  href: string;
  tags: string[];
  first_publication_date: string;
  last_publication_date: string;
  data: {
    name: string;
    location: {
      name: string;
      url: string;
    };
    date: string;
    time: string;
    paid: boolean;
    ticket_link: string;
    poster: {
      url: string;
      alt: string;
    };
  };
}

export interface GalleryImageType {
  id: string;
  dimensions: string;
  url: string;
  alt: string;
  featured: boolean;
}

export default client;
