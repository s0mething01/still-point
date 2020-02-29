const path = require(`path`)

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions
  const blogPostTemplate = path.resolve(`src/layouts/BlogPostPage.js`)
    return graphql(`
      query query {
      allDatoCmsArticle {
        nodes {
          slug
          title
					hashtags
					content {
            ... on DatoCmsText {
            	contentvalue
						}
						... on DatoCmsImage {
							imageValue {
									url
							}	
						}
					}
          meta {
            createdAt
          }
        }
      }
    }
  `).then(result => {
    if (result.errors) throw result.errors;
    result.data.allDatoCmsArticle.nodes.forEach(({slug, meta, content, title, hashtags}) => {
      createPage({
        path: `blog/${slug}`,
        component: blogPostTemplate,
        context: {
          title,
          meta,
          content,
          hashtags,
        },
      })
    })
  })
}