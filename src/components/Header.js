import React, {useEffect} from 'react';
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import {listAircraftDatas} from '../graphql/queries'
import { API, graphqlOperation } from 'aws-amplify'


export default function Header() { 

    async function setAircraftData(){
        let aircraftData = await API.graphql(graphqlOperation(listAircraftDatas))
        console.log(aircraftData)
    }

    useEffect(() => {
        setAircraftData()
    },[])

    return (
        <>
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                <Navbar.Brand href="#home">PiAware Test View</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="mr-auto">
                        <Nav.Link href="#home">Home</Nav.Link>
                        <Nav.Link href="/mapReactGL">Map</Nav.Link>
                        <Nav.Link href="https://github.com/ericYagerPractice/piAwareFront">Repo</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </>
    );
}


/*export 
const listAircraftDatas = 
query ListAircraftDatas(
    $filter: ModelAircraftDataFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listAircraftDatas(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        data
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;*/