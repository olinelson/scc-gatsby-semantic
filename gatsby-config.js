const path = require('path')

module.exports = {
  // pathPrefix: '/inner-wisdom-gatsby',
  siteMetadata: {
    title: 'Inner Wisdom Psychology'
  },
  plugins: [{
    resolve: 'gatsby-source-filesystem',
    options: {
      name: 'images',
      path: path.join(__dirname, 'src')
    }
  },
  'gatsby-transformer-sharp',
  'gatsby-plugin-sharp',
  'gatsby-plugin-react-helmet',
  'gatsby-plugin-styled-components'
  ]
}
