import React from 'react'

import './calendar.css'
import eyelet from './../../../assets/eyelet.jpg' 

const Calendar = () => {
  return (
    <div class="calendar_container">
            <div class="calendar">
                <div class="left_eyelet">
                    <img  src={eyelet} alt="eyelet image"/>
                </div>
                <div class="right_eyelet">
                    <img  src={eyelet} alt="eyelet image"/>
                </div>
                <div class="month_year">
                    <button title="Previous"><i class="fa-solid fa-angle-left"></i></button>
                    <h3><i class="fa-regular fa-calendar-days"></i>March <span>"2024"</span></h3>
                    <button title="Next"><i class="fa-solid fa-angle-right"></i></button>
                </div>
                <div class="week first_week">
                    <a href="">
                        <div class="day today">
                            <div class="delivery">
                                <span>3</span>
                            </div>
                            <h6>1</h6>
                            <span>Fri</span>
                        </div>
                    </a>
                    <div class="day">
                        <div class="delivery">
                            <span>3</span>
                        </div>
                        <h6>2</h6>
                        <span>Sat</span>
                    </div>
                    <div class="day">
                        <h6>1</h6>
                        <span>Sun</span>
                    </div>
                    <div class="day">
                        <h6>1</h6>
                        <span>Sun</span>
                    </div>
                    <div class="day">
                        <h6>1</h6>
                        <span>Sun</span>
                    </div>
                
                    <div class="day">
                        <h6>1</h6>
                        <span>Sun</span>
                    </div>
                </div>
                <div class="week">
                    <div class="day">
                        <h6>1</h6>
                        <span>Sun</span>
                    </div>
                    <div class="day">
                        <div class="delivery">
                            <span>3</span>
                        </div>
                        <h6>2</h6>
                        <span>Mon</span>
                    </div>
                    <div class="day">
                        <h6>3</h6>
                        <span>Tue</span>
                    </div>
                    <div class="day today">
                        <h6>4</h6>
                        <span>Wed</span>
                    </div>
                    <div class="day">
                        <div class="delivery">
                            <span>3</span>
                        </div>
                        <h6>5</h6>
                        <span>Thu</span>
                    </div>
                    <div class="day">
                        <h6>6</h6>
                        <span>Fri</span>
                    </div>
                    <div class="day">
                        <h6>7</h6>
                        <span>Sat</span>
                    </div>
                </div>
                <div class="week">
                    <div class="day">
                        <h6>1</h6>
                        <span>Sun</span>
                    </div>
                    <div class="day">
                        <div class="delivery">
                            <span>3</span>
                        </div>
                        <h6>2</h6>
                        <span>Mon</span>
                    </div>
                    <div class="day">
                        <h6>3</h6>
                        <span>Tue</span>
                    </div>
                    <div class="day today">
                        <h6>4</h6>
                        <span>Wed</span>
                    </div>
                    <div class="day">
                        <div class="delivery">
                            <span>3</span>
                        </div>
                        <h6>5</h6>
                        <span>Thu</span>
                    </div>
                    <div class="day">
                        <h6>6</h6>
                        <span>Fri</span>
                    </div>
                    <div class="day">
                        <h6>7</h6>
                        <span>Sat</span>
                    </div>
                </div>
                <div class="week">
                    <div class="day">
                        <h6>1</h6>
                        <span>Sun</span>
                    </div>
                    <div class="day">
                        <div class="delivery">
                            <span>3</span>
                        </div>
                        <h6>2</h6>
                        <span>Mon</span>
                    </div>
                    <div class="day">
                        <h6>3</h6>
                        <span>Tue</span>
                    </div>
                    <div class="day today">
                        <h6>4</h6>
                        <span>Wed</span>
                    </div>
                    <div class="day">
                        <div class="delivery">
                            <span>3</span>
                        </div>
                        <h6>5</h6>
                        <span>Thu</span>
                    </div>
                    <div class="day">
                        <h6>6</h6>
                        <span>Fri</span>
                    </div>
                    <div class="day">
                        <h6>7</h6>
                        <span>Sat</span>
                    </div>
                </div>
                <div class="week last_week">
                    <div class="day">
                        <h6>1</h6>
                        <span>Sun</span>
                    </div>
                    <div class="day">
                        <div class="delivery">
                            <span>3</span>
                        </div>
                        <h6>2</h6>
                        <span>Mon</span>
                    </div>
                    <div class="day">
                        <h6>3</h6>
                        <span>Tue</span>
                    </div>
                </div>
            </div>
        </div>
  )
}

export default Calendar