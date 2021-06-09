import React, { useState, useEffect } from 'react';
import {getAircraftData } from '../graphql/queries'
import {onCreateAircraftData} from '../customQueries/subscriptions'
import { API, graphqlOperation } from 'aws-amplify'

export default function Map() {
  const [aircraftData, setAircraftData]=useState("Awaiting next data push")

  async function aircraftAPICall(){

    await API.graphql(graphqlOperation(onCreateAircraftData)).subscribe({
        next: ({ provider, value }) => {
            API.graphql(graphqlOperation(getAircraftData, {id: value.data.onCreateAircraftData.id}))
            .then(value=>{
              try{
                console.log(value)
                //let currentDataString = value.data.getAircraftData.data.split(",")[3].split("=")[1]
                //let base64String = currentDataString.concat("==")
                //console.log(base64String)
                //console.log(atob(base64String))
                //let base64DataString = (value.data.getAircraftData.data).split("=")[6].split(",")[0]
                //console.log(atob(base64DataString.concat("==")))//JSON.parse(atob(base64DataString.concat("=="))))
                //setAircraftData({"Aircraft":atob(base64DataString.concat("=="))})
              }catch(error) {
                console.log(error, ": ", value.data.getAircraftData.data)
              }
            })
            
        },
        error: error => console.log(error)
    });
    
}

useEffect(() => {
    aircraftAPICall()
},[])

  return (
    <div>
      <p>{aircraftData}</p>
    </div>
  );
}