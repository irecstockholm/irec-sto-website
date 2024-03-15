import { gql } from '@apollo/client';

export const getPage = (id: string) => {
  return gql`
  {
    page(id: "${id}", idType: URI) {
      id
      databaseId
      title
      content
      featuredImage {
        node {
          id
        }
      }
      uri
    }
  }
  `
}
