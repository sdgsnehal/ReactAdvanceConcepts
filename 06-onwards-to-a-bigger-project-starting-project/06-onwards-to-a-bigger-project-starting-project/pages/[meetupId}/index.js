import { Fragment } from "react";
import MeetupDetail from "../../components/meetups/MeetupDetail";
import {MongoClient ,ObjectId} from "mongodb";
import Head from "next/head";

function MeetupDetails(props) {
  return;
  <Fragment>
    <Head> <title>{props.meetupData.title}</title></Head>
    <meta name="description" content={props.meetupData.description}/>
    <MeetupDetail
 
    image={selectedMeetup.meetupData.image}
    name={props.meetupData.title}
    address={props.meetupData.address}
    description={props.meetupData.description}
  />
  </Fragment>
  ;
}
export async function getStaticPaths() {
    const client= MongoClient.connect('mongodb+srv://sdgsnehal:6pX8gfKGuCMzG1E1@cluster0.zutjjrv.mongodb.net/?retryWrites=true&w=majority');
      const db = client.db();
      const meetupsCollection = db.collection('meetups');
      const meetups = await meetupsCollection.find({},{_id:1}).toArray();
      client.close();
  return {
    fallback:'blocking',
    paths:meetups.map(meetups=>({params:{meetupId:meetup._id.toString()}}))
    
    
  };
}

export async function getStaticProps(context) {
  const meetupId = context.params.meetupId;
  const client= MongoClient.connect('mongodb+srv://sdgsnehal:6pX8gfKGuCMzG1E1@cluster0.zutjjrv.mongodb.net/?retryWrites=true&w=majority');
      const db = client.db();
      const meetupsCollection = db.collection('meetups');
      const selectedMeetup = await meetupsCollection.findOne({_id:ObjectId(meetupId)})
      client.close();

  return {
    props: {
      meetupData:{
        id:selectedMeetup._id.toString(),
        title:selectedMeetup.title,
        address:selectedMeetup.address,
        image:selectedMeetup.image,
        description:selectedMeetup.description,

      }
    },
  };
}
export default MeetupDetails;
