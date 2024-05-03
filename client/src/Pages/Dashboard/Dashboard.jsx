import './dashboard.css';
// import Widgets from '../../Components/Widgets/Widgets';
import Clock from '../../Components/Widgets/Clock/Clock';
import Pokedex from '../../Components/Widgets/Pokedex/Pokedex';
import SoundCloud from '../../Components/Widgets/SoundCloud/SoundCloud';
import Draggable, { DraggableCore } from "react-draggable";



const Dashboard = () => {
    return (
        <section className="dashboard__container">
            {/* <Pokedex /> */}
            <Draggable>
                <Clock />
            </Draggable>
            <SoundCloud />

        </section>
    )
}

export default Dashboard;


{/* {Widgets.map((Widget, index) => {
                return <Widget key={index} />
            })} */}