import React from "react"
import ContentLoader from "react-content-loader"
import "./loader.css"

const MyLoader = (props) => (
  <ContentLoader>
  <span className="loader"></span>
  </ContentLoader>
)

export default MyLoader