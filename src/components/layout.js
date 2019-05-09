/**
 * Layout component that queries for data
 * with Gatsby's StaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/static-query/
 */

import React from "react"

import Header from "./header"
import "./base.css"

const Layout = ({ children }) => (
  <div>
    <Header siteTitle="Asaff"/>
    { children }
  </div>
)


export default Layout
