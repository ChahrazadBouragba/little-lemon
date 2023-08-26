
import logo from '../imges/Logo.png';
import basket from '../imges/basket.png';

export default function Heading() {
    return (
        <>
        <header>
                <img src={logo} alt="logo" className="heading-logo"/>
                    <ul>
                        <li><a href="/Hero"/>Home</li>
                        <li><a href="/About"/>About</li>
                        <li><a href="/Highlights"/>Menu</li>
                        <li><a href="/Hero"/>Reservations</li>
                    </ul>
                <button>Order Online</button>
                <img src={basket} className="heading-basket"/>
        </header>
        </>
    )
}