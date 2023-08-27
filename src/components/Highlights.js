import fish from '../imges/fish1.png'
import brushetta from '../imges/bruchetta.png'
import lemonDessert from '../imges/lemon dessert.jpg'

export default function Highlights() {
    return (
        <>
        <section className="highlights-container">
            <div className="highlights-heading">
                <h1>This weeks specials!</h1>
                <button>Online Menu</button>
            </div>

            <div className="cards-container">
            <article>
                <img src={fish} className="fishImg"/>
                <div className="card-description">
                    <div>
                        <h2>Greek Salad</h2>
                        <p>$12.99</p>
                    </div>
                    <p>The famous greek salad of crispy lettuce, peppers,olives and our Chicago style teta cheese, garnished with crunchy garlic and rosemary croutons.</p>
                    <div>
                        <h3>Order a delivery</h3>
                        <img/>
                    </div>
                </div>
            </article>

            <article>
                <img src={brushetta} className="brushettaImg"/>
                <div className="card-description">
                    <div>
                        <h2>Bruchetta</h2>
                        <p>$5.99</p>
                    </div>
                    <p>Our Bruschetta is made from grilled bread that has been smeared with garlic, olive, fresh farm tomato, cheese and seasoned with salt and olive oil.</p>
                    <div>
                        <h3>Order a delivery</h3>
                        <img/>
                    </div>
                </div>
            </article>

            <article>
                <img src={lemonDessert} className="dessertImg"/>
                <div className="card-description">
                <div>
                    <h2>Lemon Dessert</h2>
                    <p>$12.99</p>
                </div>
                <p>This sweet lemon dessert comes straight from grandma's recipe book, every last ingredient has been sourced and is as authentic as can be imagined.</p>
                <div>
                    <h3>Order a delivery</h3>
                    <img/>
                </div>
                </div>
            </article>
            </div>
        </section>
        </>
    )
}