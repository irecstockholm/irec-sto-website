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