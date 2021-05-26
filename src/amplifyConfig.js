import Amplify from '@aws-amplify/core'
import PubSub from '@aws-amplify/pubsub'
import { AWSIoTProvider } from '@aws-amplify/pubsub/lib/Providers'
import awsmobile from './aws-exports'


window.LOG_LEVEL = 'VERBOSE';
export default function amplifyConfigure() {

   Amplify.addPluggable(new AWSIoTProvider({
      aws_pubsub_region: awsmobile.aws_project_region,
      aws_pubsub_endpoint: "a21rbj31evykw3-ats.iot.us-east-1.amazonaws.com",
   }))

   PubSub.subscribe('ATopic').subscribe({
      next: data => console.log('Message received', data),
      error: error => console.error(error),
      close: () => console.log('Done'),
    });
}