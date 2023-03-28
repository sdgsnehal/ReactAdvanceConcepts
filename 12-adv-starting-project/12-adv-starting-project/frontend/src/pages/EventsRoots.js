import EventNavigation from "../components/EventsNavigation";
import { Outlet } from "react-router-dom";
function EventsRootLayout(){
return <>
<EventNavigation/>
<Outlet/>
</>
}
export default EventsRootLayout;