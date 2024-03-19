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

export const getEvents = (filterType: string, filterValue: string) => {
  return gql`
  {
    posts(where: {${filterType}: "${filterValue}"}){
      nodes {
        date
        id
        content
        title
        excerpt
        link
        uri
        tags {
          edges {
            node {
              id
              name
            }
          }
        }
        featuredImage {
          node {
            id
            mediaItemUrl
            caption
            title
          }
        }
      }
    }
  }
  `;
}

export const getPostBySlug = (slug: string) => {
  return gql`
  {
    post(id: "${slug}", idType: SLUG) {
      id
      excerpt
      content
      date
      link
      title
      uri
      featuredImage {
        node {
          id
          mediaItemUrl
        }
      }
    }
  }
  `;
}
