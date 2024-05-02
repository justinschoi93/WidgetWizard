import { useState, useEffect } from 'react';
import dayjs from 'dayjs';
import './clock.css';

const Clock = () => {
    const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];  
    const [position, setPosition] = useState({ x: 0, y: 0 });
    const [dragging, setDragging] = useState(false);

    const makeRequest = () => ({
        
        time: dayjs().format('h:mm:ss A'),
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

    const handleMouseDown = (e) => {
        setDragging(true);
        setPosition({ x: e.clientX, y: e.clientY });
    };

    const handleMouseUp = () => {
        setDragging(false);
    };

    const handleMouseMove = (e) => {
        console.log(e.pageX, e.pageY)
        
        if (dragging) {
            setPosition({ x: e.pageX, y: e.pageY });
        }
    };

    return (
        <div className="clock__container" 
            draggable="true"
            onMouseDown={handleMouseDown} 
            onMouseUp={handleMouseUp} 
            onMouseMove={handleMouseMove} 
            style={{ 
                left: `${position.x}px`, 
                top: `${position.y}px` 
            }}
        >
            <div className="digital__clock">
                
                    <div className="calendar__block">
                        <div className="day">{data.day}</div>
                        <div className="date">{data.month} {data.date}, {data.year}</div>
                    </div>
                    <div className="time__block">{ `${data.time}`}</div>
               
            </div>
        </div>
    );
}

export default Clock;