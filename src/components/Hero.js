import photo from '../imges/restauranfood1.jpg';


export default function Hero() {
    return (
        <>
            <div className="hero-container">
                <div className="hero-description">
                    <h1>Little Lemon</h1>
                    <h2>Chicago</h2>
                    <p>We are a family owned meditterranean restaurant, focusd on traditional recipes served with care and a modern twist. <br></br>
                    Discover a hassle-free way to book your favorite experiences with the Little Lemon Booking App. Our platform makes it easy to reserve and enjoy moments that matter.
                    </p>
                    <button>Reserve a Table</button>
                </div>
                <div>
                <img src={photo} className="hero-img"/>
                </div>
            </div>
        </>

    )
}
