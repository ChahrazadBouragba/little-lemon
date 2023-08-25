
import logo from '../imges/Logo.png';

export default function Heading() {
    return (
        <>
        <header>
            <img src={logo} alt="logo"/>
            <nav>
                <ul>
                    <li><a href="/Hero"/>Home</li>
                    <li><a href="/About"/>About</li>
                    <li><a href="/Highlights"/>Menu</li>
                    <li><a href="/Hero"/>Reservations</li>
                    <li><a href="/Highlights"/>Order Online</li>
                    <li><a href="/Home"/>Login</li>
                </ul>
            </nav>
        </header>
        </>
    )
}