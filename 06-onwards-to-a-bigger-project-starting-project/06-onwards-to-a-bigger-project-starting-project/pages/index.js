//import { useEffect, useState } from "react";
import { Fragment } from "react";
import MeetupList from "../components/meetups/MeetupList";
import { MongoClient } from "mongodb";
import Head from "next/head";
const DUMMY_MEETUPS = [
  {
    id: "m1",
    title: "A first Meetup",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/0/00/Kanch_Mandir%2C_Indore.jpg/800px-Kanch_Mandir%2C_Indore.jpg ",
    address: "Some address 5 12452 Indore",
    description: "This is a first meetup ",
  },
  {
    id: "m2",
    title: "A second Meetup",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/0/00/Kanch_Mandir%2C_Indore.jpg/800px-Kanch_Mandir%2C_Indore.jpg",
    address: "Some address 10 5 12452 Indore",
    description: "This is a second meetup ",
  },
];

function HomePage(props) {
  // const [loadedMeetups,setLoadedMeetups]=useState([]);
  // useEffect(()=>{
  //     setLoadedMeetups(DUMMY_MEETUPS);
  // },[]);
  return (
    <Fragment>
      <Head>
        <title>react Meetups</title>
        <meta
          name="description"
          content="Browse a huge list highly active react meetups"
        />
      </Head>
      <MeetupList meetups={props.meetups} />
    </Fragment>
  );
}
// export async function getServerSideProps(context){
//     const req = context.req;
//     const res = context.res;
//     return{
//         props:{
//             meetups:DUMMY_MEETUPS
//         }
//     };

// }
export async function getStaticProps() {
  const client = MongoClient.connect(
    "mongodb+srv://sdgsnehal:6pX8gfKGuCMzG1E1@cluster0.zutjjrv.mongodb.net/?retryWrites=true&w=majority"
  );
  const db = client.db();
  const meetupsCollection = db.collection("meetups");
  const meetups = await meetupsCollection.find().toArray();
  (await client).close();
  return {
    props: {
      meetups: meetups.map((meetup) => ({
        title: meetup.title,
        address: meetup.address,
        image: meetup.image,
        id: meetup._id.toString(),
      })),
    },
    revalidate: 10,
  };
}
export default HomePage;
