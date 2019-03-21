/* components/realtyList.js */
import React from "react"
import Link from "gatsby-link"
import {
    CardText,
    CardTitle,
    Card,
    CardBody,
    CardImg,
  } from "reactstrap";

class RealtyList extends React.Component {
  render() {
console.log("__________________________________");
console.log(this);
    
    return (
        <div>
            <p>Hola {this.props.ejemplo} </p>
            {/* <p>{ JSON.stringify(this.props.data, null, 2) }</p> */}

         <div className="h-100">
          {this.props.data.allStrapiRealties.edges.map(res => (
            <Card
              style={{ width: "30%", margin: "0 10px" }}
              className="h-100"
              key={res.node.id}
            >
              <CardImg
                top={true}
                style={{ height: 250 }}
                src={`http://localhost:1337${res.node.images[0].url}`}
              />
              <CardBody>
                <CardTitle>{res.node.name}</CardTitle>
                <CardText>{res.node.description}</CardText>
              </CardBody>
               <div className="card-footer">
               {res.node.lease && <Link
                  as={`/lease/${res.node.lease.id}`}
                  href={`/lease?id=${res.node.lease.id}`}
                >
                  <a className="btn btn-primary">Arriendo</a>
                </Link>}
                {res.node.sale && <Link
                  as={`/sale/${res.node.sale.id}`}
                  href={`/sale?id=${res.node.sale.id}`}
                >
                  <a className="btn btn-primary">Venta</a>
                </Link>}
              </div>
            </Card>
          ))}
        </div> 
        <style jsx global>
          {`
            a {
              color: white;
            }
            a:link {
              text-decoration: none;
              color: white;
            }
            a:hover {
              color: white;
            }
            .card-columns {
              column-count: 3;
            }
          `}
        </style>
        
        </div>
    )
  }
}

export default RealtyList
