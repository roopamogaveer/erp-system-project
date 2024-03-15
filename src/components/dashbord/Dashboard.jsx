import React from 'react'
import Calendar from './calendar/Calendar'
import Overview from './overview/Overview'

import './dashboard.css'


/*
Dashboard component : 
-- To show the project overview and calendar
*/
const Dashboard = () => {
  return (
    <section>
        <Overview/>
        <Calendar/>
    </section>
  )
}

export default Dashboard