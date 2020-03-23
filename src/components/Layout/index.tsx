import React, { FunctionComponent } from 'react'
import PropTypes from 'prop-types'
import {} from '../Header'
import {} from '../Footer'

const Layout: FunctionComponent<any> = ({ children }) => <div>
    <header >spotify</header>
    {children}
    <footer >test  @2020 </footer>
    </div>

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export { Layout }
