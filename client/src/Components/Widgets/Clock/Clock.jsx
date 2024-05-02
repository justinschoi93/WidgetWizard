import React, { useState, useEffect } from 'react';
import dayjs from 'dayjs';
import './clock.css';

const Clock = () => {
    const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];  

    const makeRequest = () => ({
        
        hour: dayjs().hour(),
        minute: dayjs().minute(),
        second: dayjs().second(),
        ampm: dayjs().hour() >= 12 ? 'PM' : 'AM',
        day: days[dayjs().day()],
        month: months[dayjs().month()],
        date: dayjs().date(),
        year: dayjs().year()
    });

    const [data, setData] = useState(makeRequest());

    useEffect(() => {
        const timer = setInterval(() => {
            setData(makeRequest());
        }, 1000);

        return () => { // will only run when component unmounts
            clearInterval(timer);
        };
    }, []);

    return (
        <div className="clock__container">
            <div className="digital__clock">
                <div className="clock__display">
                    {`${data.month} ${data.date}, ${data.day} ${data.hour}:${data.minute}:${data.second} ${data.ampm}`}</div>
            </div>
        </div>
    );
}

export default Clock;