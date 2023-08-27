import star from '../imges/star.png';
import customer1 from '../imges/customer1.jpg';
import customer2 from '../imges/customer2.jpg';
import customer3 from '../imges/customer3.jpg';
import customer4 from '../imges/customer4.jpg';
import customer5 from '../imges/customer5.jpg';

export default function Testimonials() {
    return (
        <>
        <section className="feedbacks-section">
        <h1>What Our Customers Say!</h1>

        <div className="feedbacks-container">

            <div className="feedbsck-card">
                <div className="stars-div">
                <img src={star} className="star"/>
                <img src={star} className="star"/>
                <img src={star} className="star"/>
                <img src={star} className="star"/>
                </div>
                <div className="feedback-intro">
                    <img src={customer5} className="customer-img"/>
                    <div className="name-country-div">
                        <h4>Sarah Nelson</h4>
                        <p><i>Italy</i></p>
                    </div>
                </div>
            <p>When we think about celebrations, Hungrybuzz is always our first choice and it never disappoints. From lemon appetizers to desserts, the quality and taste of everything was outstanding.</p>
            </div>

            <div className="feedbsck-card">
                <div className="stars-div">
                <img src={star} className="star"/>
                <img src={star} className="star"/>
                <img src={star} className="star"/>
                <img src={star} className="star"/>
                </div>
                <div className="feedback-intro">
                    <img src={customer2} className="customer-img" />
                    <div className="name-country-div">
                        <h4>Christopher Nil</h4>
                        <p><i>France</i></p>
                    </div>
                </div>
            <p>the quality and taste of everything was outstanding, my Steak, Foie Gras was possibly the best meal I have ever been served. Very professional service. 10/10, Foie Gras was possibly the best meal.</p>
            </div>

            <div className="feedbsck-card">
                <div className="stars-div">
                <img src={star} className="star"/>
                <img src={star} className="star"/>
                <img src={star} className="star"/>
                <img src={star} className="star"/>
                </div>
                <div className="feedback-intro">
                    <img src={customer3} className="customer-img"/>
                    <div className="name-country-div">
                        <h4> Camilia Mackenzie</h4>
                        <p><i>NewYork</i></p>
                    </div>
                </div>
            <p>I have to say, I enjoyed every single bite of the meal in Hungrybuzz. I had a 3 course meal, with a couple of beers. Considering the quality, the price is reasonable. It's my favorate restaurant so far!</p>
            </div>

            <div className="feedbsck-card">
                <div className="stars-div">
                <img src={star} className="star"/>
                <img src={star} className="star"/>
                <img src={star} className="star"/>
                <img src={star} className="star"/>
                </div>
                <div className="feedback-intro">
                    <img src={customer4} className="customer-img"/>
                    <div className="name-country-div">
                        <h4>Frederick S. Eastland</h4>
                        <p><i>California</i></p>
                    </div>
                </div>
            <p>First time in Hungrybuzz and YOU have to go! It's the cutest little spot with amazing food. The Foie Gras is to die for. IT WAS FIRE!! The service we received was so amazing and we will definitely be back again.</p>
            </div>

            {/* <div className="feedbsck-card">
                <div className="stars-div">
                <img src={star} className="star"/>
                <img src={star} className="star"/>
                <img src={star} className="star"/>
                <img src={star} className="star"/>
                </div>
                <div className="feedback-intro">
                    <img src={customer5} className="customer-img"/>
                    <div className="name-country-div">
                        <h4>Sarah</h4>
                        <p><i>Italy</i></p>
                    </div>
                </div>
            <p>When we think about celebrations, Hungrybuzz is always our first choice and it never disappoints. From appetizers to desserts, the quality and taste of everything was outstanding, my Steak, Foie Gras was possibly the best meal I have ever been served. Very professional service. 10/10</p>
            </div> */}
        </div>
        </section>
        </>
    )
}