import { gql } from '@apollo/client';

export const getFeaturedImage = (id: string) => {
  return gql`
  {
    mediaItem(id: "${id}", idType: SLUG) {
      id
      mediaItemUrl
      link
      uri
    }
  }
  `
}

export const getYearlyGallery = () => {
  return gql`
  {
    mediaItems(where: {search: "Yearly events"}) {
      edges {
        node {
          id
          slug
          databaseId
          mediaItemUrl
          caption
          description
          title
        }
      }
    }
  }
  `;
}