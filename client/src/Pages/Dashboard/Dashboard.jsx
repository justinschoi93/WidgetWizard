import './dashboard.css';
import Widgets from '../../Components/Widgets/Widgets';


const Dashboard = () => {
    return (
        <section className="dashboard__container">
            {/* <Widgets.Clock /> */}
            <Widgets.Pokedex />
        </section>
    )
}

export default Dashboard;