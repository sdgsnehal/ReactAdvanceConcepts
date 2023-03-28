import { useRouteLoaderData,json ,redirect} from "react-router-dom";
import EventItem from "../components/EventItem";
function EventDetailPage(){
    const data = useRouteLoaderData('event-detail');
    
    return (
        <EventItem event={data.event} />
      );;
}
export default EventDetailPage;
export async function loader({request,params}){
  const id=  params.eventId;
    const response =  await fetch('http://localhost:8080/events/'+id ,{
      method:request.method, 
    });
    if(!response.ok){
        throw json({message:'could not fetch details for selected even'},{
            status:500
        })

    }else{
        return response

    }
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