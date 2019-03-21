import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

class IndexPage extends React.Component {
  constructor(props){
    super(props);
    this.props = props;
    }
  render() {
    return (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <h1>Hi people</h1>
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>
    <p></p>
    <ul>
      {this.props.data.allStrapiRealties.edges.map(re => (
        <li key={re.node.name}>
          
          <p>{re.node.description}</p>
        </li>
      ))}
    </ul>
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Image />
    </div>
    <Link to="/page-2/">Go to page 2</Link>
  </Layout>
    );
  }
}

export default IndexPage


export const pageQuery = graphql`  
  query IndexQuery {
    allStrapiRealties {
        edges {
            node {
                id
                name
                description
                visible
                images {
                url
                }
                lease {
                id
                }
                sale {
                id
                }
            }
        }
    }
  }
`