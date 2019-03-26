
const Promise = require('bluebird')
const path = require('path')

exports.createPages = ({ graphql, boundActionCreators }) => {
  const { createPage } = boundActionCreators

  return new Promise((resolve, reject) => {
    const WhatOurCustomerSay = path.resolve('./src/components/home/what-our-customer-say.js')
    resolve(
      graphql(`
      {
        allContentfulTestimonials {
          edges {
            node {
              title
              slug
              shortDescription
              testimonialPost{
                name
                address
                description {
                  id
                  description
                }
              }
               
            } 
          }
        }
      }
        `
      ).then(result => {
          console.log(result.allContentfulTestimonials);
        if (result.errors) {
          console.log(result.errors)
          reject(result.errors)
        }

        const posts = result.data.allContentfulTestimonials.edges
        posts.forEach((post, index) => {
          createPage({
            path: post.node.slug ,
            component: WhatOurCustomerSay,
            context: {
              slug: post.node.slug
            },
          })
        })
      })
    )
  })
}