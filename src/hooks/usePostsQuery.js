import { useStaticQuery, graphql } from "gatsby";

export const usePostsQuery = () => {
  const data = useStaticQuery(graphql`
    query PostsQuery {
      allWpPost {
        nodes {
          link
          title
        }
      }
    }
  `)

  return data
}