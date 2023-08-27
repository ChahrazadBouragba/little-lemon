import img1 from '../imges/restauranfood.jpg';
import img2 from '../imges/fish.png';

export default function About() {
    return (
        <>
        <section className="about-section">
            <div className="about-description">
                <h1>Little Lemon</h1>
                <h2>Chicago</h2>
                <p>We are a family owned meditterranean restaurant, focusd on traditional recipes served with care and a modern twist. <br></br>
                Discover a hassle-free way to book your favorite experiences with the Little Lemon Booking App. Our platform makes it easy to reserve and enjoy moments that matter.</p>
            </div>
            <div className="about-imgs">
                <img src={img1} className="about-img1"/>
                <img src={img2} className="about-img2"/>
            </div>
        </section>
        </>
    )
}