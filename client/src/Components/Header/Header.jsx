import Gandalf from '../../assets/images/gandalf_the_grey.jpg'
import './header.css';

const Header = () => {
    return (
        <header className="header__container">
            <div className="logo__container">
                <img src={Gandalf} alt="gandalf_the_grey.jpg" className="logo__img" />
            </div>
            <h1 className="header__title">Widget Wizard</h1>
            
            <button className="auth__button">Login</button>
        </header>
    )
}

export default Header;