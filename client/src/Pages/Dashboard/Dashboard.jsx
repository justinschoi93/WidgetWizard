import './dashboard.css';
// import Widgets from '../../Components/Widgets/Widgets';
import Draggable from "react-draggable";
import Clock from '../../Components/Widgets/Clock/Clock';
import NASAofficial from '../../Components/Widgets/NASA/NASAofficial';
import Pokedex from '../../Components/Widgets/Pokedex/Pokedex';
import SoundCloud from '../../Components/Widgets/SoundCloud/SoundCloud';


const Dashboard = () => {
    return (
        <section className="dashboard__container">
            <Draggable handle=".drag-handle">
                <div>
                    <div className="drag-handle">Drag here</div>
                    <NASAofficial/>
                </div>
            </Draggable>
            <Draggable handle=".drag-handle">
                <div>
                    <div className="drag-handle">Drag here</div>
                    <Pokedex/>
                </div>
            </Draggable>
            <Draggable handle=".drag-handle">
                <div>
                    <div className="drag-handle">Drag here</div>
                    <Clock/>
                </div>
            </Draggable>
            <Draggable handle=".drag-handle">
                <div>
                    <div className="drag-handle">Drag here</div>
                    <SoundCloud/>
                </div>
            </Draggable>
        </section>
    )
}

export default Dashboard;


{/* {Widgets.map((Widget, index) => {
                return <Widget key={index} />
            })} */}