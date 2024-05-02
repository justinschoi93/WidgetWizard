import './dashboard.css';
// import Widgets from '../../Components/Widgets/Widgets';
import Clock from '../../Components/Widgets/Clock/Clock';

const Dashboard = () => {
    return (
        <section className="dashboard__container">
            {/* {Widgets.map((Widget, index) => {
                return <Widget key={index} />
            })} */}
            <Clock />
        </section>
    )
}

export default Dashboard;