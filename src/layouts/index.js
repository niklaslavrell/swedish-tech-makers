import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'

const Layout = ({ children, data }) => (
  <div>
    <Helmet
      title={data.site.siteMetadata.title}
      meta={[
        { name: 'description', content: 'Private community of tech makers' },
        { name: 'keywords', content: 'swedish, tech, maker, nomad, freelance' }
      ]}
    />
    <div
      style={{
        margin: '6rem auto',
        maxWidth: 870,
        padding: '20px',
        paddingTop: 0
      }}
    >
      {children()}
    </div>
  </div>
)

Layout.propTypes = {
  children: PropTypes.func
}

export default Layout

export const query = graphql`
  query SiteTitleQuery {
    site {
      siteMetadata {
        title
      }
    }
  }
`
