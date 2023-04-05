import { useReducer } from "react";
import NewMeetupForm from "../../components/meetups/NewMeetupForm";
import { useRouter } from "next/router";
import { Fragment } from "react";
import Head from "next/head";
function NewMeetupPage(){
    const router = useRouter();
    async function addMeetupHandler(enteredMeetupData){
        const response =await fetch('/api/new-meetup',{
            method:'POST',
            body:JSON.stringify(enteredMeetupData),
            headers:{
                'Content-Type':'application/Json'

            }
        });
        const data= await response.json();
        console.log(data);
        router.push('/');

    }
return <Fragment>
<Head>
  <title>add new Meetups</title>
  <meta
    name="description"
    content="add your meetup active react meetups"
  />
</Head>
<NewMeetupForm onAddMeetup={addMeetupHandler}/>
</Fragment>


}

export default NewMeetupPage;