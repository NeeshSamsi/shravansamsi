import * as prismic from "@prismicio/client";
import * as prismicNext from "@prismicio/next";
import config from "../slicemachine.config.json";

export const repositoryName = config.repositoryName;

interface CreateClientConfig extends prismicNext.CreateClientConfig {
  previewData?: any;
  req?: any;
}

export const createClient = (config: CreateClientConfig = {}) => {

  const client = prismic.createClient(repositoryName, {
    ...config,
  });

  // TODO: enableAutoPreviews was causing build failures during static generation. 
  // Investigate proper usage with Next.js 16 and @prismicio/next v2.
  if (config.req) {
     try {
       prismicNext.enableAutoPreviews({
         client,
         previewData: config.previewData,
         req: config.req,
       } as any);
     } catch (e) {
       console.error("enableAutoPreviews failed", e);
     }
  }

  return client;
};

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

export interface YouTubeVideoType {
  id: string;
  url: string;
}
