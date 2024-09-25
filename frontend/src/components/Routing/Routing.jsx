import {Routes,Route} from 'react-router-dom'
import React from 'react'
import HomeComp from '../pages/HomeComp'
import AboutComp from '../pages/AboutComp'
import ContactComp from '../pages/ContactComp'
import BlogComp from '../pages/BlogComp'
import BlogDetailComp from '../pages/BlogDetailComp'
import EventComp from '../pages/EventComp'
import EventDeatilComp from '../pages/EventDeatilComp'
import AcountComp from '../LoginSignup/AcountComp'
import Admin from '../Admin/Admin'
import Exhibitor from '../Exhibitor/Exhibitor'
import Attendee from '../Attendee/Attendee'

const Routing = () => {
  return (
    <>

<Routes >
  <Route path="/" element={<HomeComp/>} />
  <Route path="/about" element={<AboutComp/>} />
  <Route path="/contact" element={<ContactComp/>} />
  <Route path="/blog" element={<BlogComp/>} />
  <Route path="/blogDetail" element={<BlogDetailComp/>} />
  <Route path="/event" element={<EventComp/>} />
  <Route path="/eventDetail" element={<EventDeatilComp/>} />
  <Route path="/account" element={<AcountComp/>} />
  <Route path="/admin" element={<Admin/>}/>
  <Route path="/exhibitor" element={<Exhibitor/>}/>
  <Route path="/attendee" element={<Attendee/>}/>
</Routes>
    </>
  )
}

export default Routing