import photo from '../imges/restauranfood1.jpg';


export default function Hero() {
    return (
        <main className="hero-backgrund">
        <div className="hero-main">
            <div className="hero-description">
                <h1>Little Lemon</h1>
                <h2>Chicago</h2>
                <p>We are a family owned meditterranean restaurant, focusd on traditional recipes served with a modern twist.</p>
                <button>Reserve a Table</button>
            </div>
            <img src={photo} className="hero-img"/>
        </div>
        </main>
    )
}
