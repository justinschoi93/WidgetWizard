import './dashboard.css';
// import Widgets from '../../Components/Widgets/Widgets';
import Clock from '../../Components/Widgets/Clock/Clock';
import Pokedex from '../../Components/Widgets/Pokedex/Pokedex';
const Dashboard = () => {
    return (
        <section className="dashboard__container">
            <Pokedex />
            <Clock />
        </section>
    )
}

export default Dashboard;


{/* {Widgets.map((Widget, index) => {
                return <Widget key={index} />
            })} */}