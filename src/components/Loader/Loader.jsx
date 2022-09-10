import React from "react"
import ContentLoader from "react-content-loader"

const MyLoader = (props) => (
  <ContentLoader 
    speed={2}
    width={1200}
    height={600}
    viewBox="0 0 640 300"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
    {...props}
  >
    <circle cx="60" cy="60" r="40" /> 
    <circle cx="61" cy="260" r="40" /> 
    <circle cx="60" cy="160" r="40" /> 
    <circle cx="260" cy="160" r="40" /> 
    <circle cx="262" cy="261" r="40" /> 
    <circle cx="260" cy="60" r="40" /> 
    <circle cx="460" cy="160" r="40" /> 
    <circle cx="460" cy="260" r="40" /> 
    <circle cx="460" cy="60" r="40" />
  </ContentLoader>
)

export default MyLoader