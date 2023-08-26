import fish from '../imges/fish.png'
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
                <img src={fish}/>
                <div>
                    <h2>Greek Salad</h2>
                    <p>$12.99</p>
                </div>
                <p>The famous greek salad of crispy lettuce, peppers,olives and our Chicago style teta cheese, garnished with crunchy garlic and rosemary croutons.</p>
                <div>
                    <h2>Order a delivery</h2>
                    <img/>
                </div>
            </article>

            <article>
                <img src={brushetta}/>
                <div>
                    <h2>Bruchetta</h2>
                    <p>$5.99</p>
                </div>
                <p>Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil.</p>
                <div>
                    <h2>Order a delivery</h2>
                    <img/>
                </div>
            </article>

            <article>
                <img src={lemonDessert}/>
                <div>
                    <h2>Lemon Dessert</h2>
                    <p>$12.99</p>
                </div>
                <p>The comes straight from grandma's recipe book, every last ingredient has been sourced and is as authentic as can be imagined.</p>
                <div>
                    <h2>Order a delivery</h2>
                    <img/>
                </div>
            </article>
            </div>
        </section>
        </>
    )
}