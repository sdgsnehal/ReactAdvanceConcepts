import { Suspense } from "react";
import { useRouteLoaderData,json ,redirect,Await,defer} from "react-router-dom";
import EventItem from "../components/EventItem";
function EventDetailPage(){
    const {event,events} = useRouteLoaderData('event-detail');
    
    return (
        <>
        <Suspense fallback={<p style={{textAlign:'center'}}>Loading...</p>}>
        <Await resolve={event}>{loadedEvent=> <EventItem event={loadedEvent} />}</Await>
        </Suspense>
        <Suspense fallback={<p style={{textAlign:'center'}}>Loading...</p>}>
        <Await resolve={events}>{loadedEvent=> <EventItem event={loadedEvent} />}</Await>
        </Suspense>
        </>
      );;
}
export default EventDetailPage;
async function loadEvent(id){
    const response =  await fetch('http://localhost:8080/events/'+id ,{
      method:request.method, 
    });
    if(!response.ok){
        throw json({message:'could not fetch details for selected even'},{
            status:500
        })

    }else{
        const resData =await response.json();
        return resData.events;

    }

}
async function loadEvents() {
    const response = await fetch("http://localhost:8080/events");
  
    if (!response.ok) {
      //return {isError:true, message:'Could Not fetch events'};
      throw new Response(JSON.stringify({ message: "Could not fetch events." }), {
        status: 500,
      });
    } else {
      const resData =await response.json();
      return resData.events;
    }
  }

export async function loader({request,params}){
  const id=  params.eventId;
  return defer({
    event:await loadEvent(id),
    events:loadEvents()
  })
   
}export async function action({params}) {
    const eventId = params.eventId
    const response = await fetch('http://localhost:8080/events/'+eventId);
    if(!response.ok){
        throw json({message:'could not delete event.'},{
            status:500
        });

    }
    return redirect('/events')
}