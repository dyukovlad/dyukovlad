import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

import containerStyles from "../less/main.module.less";

const Header = ({ siteTitle }) => (
  <header>
    <div className={containerStyles.container}>
        <Link to="/">{siteTitle}</Link>
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
