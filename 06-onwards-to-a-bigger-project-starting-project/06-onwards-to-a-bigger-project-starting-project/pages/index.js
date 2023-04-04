
import { useEffect, useState } from "react";
import MeetupList from "../components/meetups/MeetupList";
const DUMMY_MEETUPS =[
    {
        id:'m1',
        title:'A first Meetup',
        image:'https://upload.wikimedia.org/wikipedia/commons/thumb/0/00/Kanch_Mandir%2C_Indore.jpg/800px-Kanch_Mandir%2C_Indore.jpg ',
        address:'Some address 5 12452 Indore',
        description:'This is a first meetup '

    },
    {
        id:'m2',
        title:'A second Meetup',
        image:'https://upload.wikimedia.org/wikipedia/commons/thumb/0/00/Kanch_Mandir%2C_Indore.jpg/800px-Kanch_Mandir%2C_Indore.jpg',
        address:'Some address 10 5 12452 Indore',
        description:'This is a second meetup '

    }
]

function HomePage(){
    const [loadedMeetups,setLoadedMeetups]=useState([]);
    useEffect(()=>{
        setLoadedMeetups(DUMMY_MEETUPS);
    },[]);
    return <MeetupList meetups={loadedMeetups}/>

}
export default HomePage;