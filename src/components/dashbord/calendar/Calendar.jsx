import React, { useEffect, useState } from 'react'
import moment from 'moment'
import { Link } from 'react-router-dom'

import './calendar.css'
import eyelet from './../../../assets/eyelet.jpg' 


/*
Calendar component : 
-- Fetches date objects and matched with order details and present the data
*/
const Calendar = () => {


    const [dateList, setDatelist]=useState([]);
    const [firstWeek,setFirstWeek]=useState([]);
    const [week,setWeek]=useState([]);
    const [weekList,setWeeklist]=useState([]);
    const [lastWeek,setLastWeek]=useState([]);

    const [month,setMonth] =useState("March");
    const [year,setYear] =useState("2024");



    // to get the date objects with number of delivery on each date
    const getAllDatesOfMonth=(month,year)=>
    {
        const orders=JSON.parse(localStorage.getItem("data")).order;
        const dates=[]
        const lastDate=new Date(year,month+1,0).getDate();

        for(let day=1;day<=lastDate;day++)
        {
            let count=orders.filter(order => order.orderDate.toString()==moment(new Date(year,month,day)).format('DD-MM-yyyy').toString()).length;
            dates.push({["date"]:new Date(year,month,day),["count"]:count});
        }
  
        
        setDatelist(()=>[...dates]);
        setFirstWeek(()=>[]);
    }


    useEffect(()=>
    {
       getAllDatesOfMonth(new Date().getMonth(),new Date().getUTCFullYear());
    },[])


    // update first week dates into firstweek useState hook
    const updateFirstWeek=()=>
    {
        for(let i=0;i<dateList.length;i++)
        {
            if(dateList[i].date.getDay()<=6 && dateList[i].date.getDate()<=7)
            {
                setFirstWeek((prev)=>[...prev,dateList[i]]);
            }
    
            if(dateList[i].date.getDay()==6)
            {
                break;
            }
        }
    }

     // update last week dates into lastweek useState hook
    const updateLastWeek=()=>
    {
        setLastWeek(()=> [...dateList.slice(dateList.length-dateList[dateList.length-1]?.date.getDay()-1,dateList.length)]);
   
    }

     // update other weeks dates into week useState hook
    const updateOtherWeek=()=>
    {
        setWeek(()=>[...dateList.filter(data=>data?.date.getDate()>firstWeek[firstWeek.length-1]?.date.getDate() && data?.date.getDate()<lastWeek[0]?.date.getDate())]);
    }


    useEffect(()=>
    {
        updateFirstWeek();
        updateLastWeek();
    },[dateList])


    useEffect(()=>
    {
        updateOtherWeek();
    },[lastWeek]);


    useEffect(()=>{
        
        let tempWeek=[];
        for(let i=0;i<week.length;i+=7)
        {
             tempWeek.push(week.slice(i,i+7));
        }

        setWeeklist(()=>[...tempWeek])

    },[week]);




// previous month action on calendar : As of now its static with hardcoded month
const handlePrevious=()=>
{
    let currentYear=new Date().getFullYear();
    let nextMonth=new Date().getMonth()-1;

    if(nextMonth<0)
    {
        nextMonth=11;
        currentYear--;
    }

    setMonth(()=> "February");
    getAllDatesOfMonth(nextMonth,currentYear);
}


// next month action on calendar : As of now its static with hardcoded month 
const handleNext=()=>
{
    let currentYear=new Date().getFullYear();
    let nextMonth=new Date().getMonth()+1;

    if(nextMonth>11)
    {
        nextMonth=1;
        currentYear++;
    }

    setMonth(()=> "April");
    getAllDatesOfMonth(nextMonth,currentYear);
}


  return (
    <div className="calendar_container">
            <div className="calendar">
                <div className="left_eyelet">
                    <img  src={eyelet} alt="eyelet image"/>
                </div>
                <div className="right_eyelet">
                    <img  src={eyelet} alt="eyelet image"/>
                </div>
                <div className="month_year">
                    <button title="Previous" onClick={handlePrevious}><i className="fa-solid fa-angle-left"></i></button>
                    <h3><i className="fa-regular fa-calendar-days"></i>{month} <span>{year}</span></h3>
                    <button title="Next" onClick={handleNext}><i className="fa-solid fa-angle-right"></i></button>
                </div>
                <div className="week first_week">
                    {
                        firstWeek.map(data=>
                            {
                                return  <Link key={data.date.getDate()} to={`order?date=${data.date.getDate()}-${data.date.getMonth()+1}-${data.date.getUTCFullYear()}`}>
                                <div className={data?.date.getDate()==new Date().getDate() && data?.date.getMonth()==new Date().getMonth() ? "day today":"day" }>
                                    {
                                    data?.count > 0 &&  
                                    <div className="delivery">
                                        <span>{data?.count}</span>
                                    </div>
                                    }
                                    <h6>{data?.date.getDate()}</h6>
                                    <span>{data?.date.toString().split(" ")[0]}</span>
                                </div>
                            </Link>
                            })
                    }
                  
                    
                </div>

                {
                    weekList.map((weekdata)=>
                    {
                        return <div className="week" key={weekList.indexOf(weekdata)}>
                        {
                            weekdata.map(data=>
                                {
                                    return   <Link key={data.date.getDate()}  to={`order?date=${data.date.getDate()}-${data.date.getMonth()+1}-${data.date.getUTCFullYear()}`}>
                                    <div className={data?.date.getDate()==new Date().getDate() && data?.date.getMonth()==new Date().getMonth() ? "day today":"day" }>
                                        {
                                        data?.count > 0 &&  
                                        <div className="delivery">
                                            <span>{data?.count}</span>
                                        </div>
                                        }
                                        <h6>{data?.date.getDate()}</h6>
                                        <span>{data?.date.toString().split(" ")[0]}</span>
                                    </div>
                                </Link>
                                })
                        }
                    </div>
                    })
                }

              
                <div className="week last_week">
                {
                        lastWeek.map(data=>
                            {
                                return   <Link key={data.date.getDate()}  to={`order?date=${data.date.getDate()}-${data.date.getMonth()+1}-${data.date.getUTCFullYear()}`}>
                                <div className={data?.date.getDate()==new Date().getDate() && data?.date.getMonth()==new Date().getMonth() ? "day today":"day" }>
                                    {
                                    data?.count > 0 &&  
                                    <div className="delivery">
                                        <span>{data?.count}</span>
                                    </div>
                                    }
                                    <h6>{data?.date.getDate()}</h6>
                                    <span>{data?.date.toString().split(" ")[0]}</span>
                                </div>
                            </Link>
                            })
                    }
                </div>
            </div>
        </div>
  )
}

export default Calendar