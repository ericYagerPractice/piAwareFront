import React, { useState, useEffect } from 'react';
import {getAircraftData } from '../graphql/queries'
import {onCreateAircraftData} from '../customQueries/subscriptions'
import { API, graphqlOperation } from 'aws-amplify'

export default function Map() {
  const [aircraftData, setAircraftData]=useState("Data will show up here")

  async function aircraftAPICall(){

    await API.graphql(graphqlOperation(onCreateAircraftData)).subscribe({
        next: ({ provider, value }) => {
            API.graphql(graphqlOperation(getAircraftData, {id: value.data.onCreateAircraftData.id}))
            .then(value=>{
              setAircraftData(value.data.getAircraftData.data)
              try{
                console.log(value.data.getAircraftData.data)
              }catch(error) {
                console.log(error)
              }
            })
            
        },
        error: error => console.log(error)
    });
    
}
//
//
//
//.replacingOccurrences(of: "(\\\"(.*?)\\\"|(\\w+))(\\s*:\\s*(\\\".*?\\\"|.))", with: "\"$2$3\"$4", options: .regularExpression)

useEffect(() => {
    aircraftAPICall()
},[])

  return (
    <div>
      <p>{aircraftData}</p>
    </div>
  );
}