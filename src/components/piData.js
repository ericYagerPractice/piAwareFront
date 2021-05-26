
import awsmobile from '../aws-exports';
import Amplify from '@aws-amplify/core';
import React from 'react'
import { PubSub } from '@aws-amplify/pubsub';
import { AWSIoTProvider } from '@aws-amplify/pubsub';
import Card from 'react-bootstrap/Card';
import '@aws-amplify/ui/dist/style.css';


Amplify.addPluggable(new AWSIoTProvider({
  aws_pubsub_region: awsmobile.aws_project_region,
  aws_pubsub_endpoint: "wss://a21rbj31evykw3-ats.iot.us-east-1.amazonaws.com/mqtt",
}))

class PiClient extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
          piMsg: '{"null": 0}'
        };
    }

    componentDidMount(){
        console.log("mounted")
        PubSub.subscribe('KBNA').subscribe({
          next: data => {
            try{
              this.setState({ piMsg: data.value });
              console.log(data)
            }
            catch (error){
              console.log("Error, no data found or other error: ", error);
            }
          },
          error: error => console.error("Subscription error: ", error),
          close: () => console.log('Done'),
        });
      }

    render(){
        const { piMsg } = this.state;
        let sensorData = piMsg[this.props.name];

        return(
            <div className="Sensor">
                <Card style={{ width: '18rem' }}>
                    <Card.Body>
                        <Card.Title>{this.props.name}</Card.Title>
                        <Card.Text> 
                            { sensorData } { this.props.unit }
                        </Card.Text>
                    </Card.Body>
                </Card>
            </div>
        )
    }
}

export default PiClient;