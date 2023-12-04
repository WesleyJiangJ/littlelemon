import GreekSalad from '../assets/greek salad.jpg'
import Bruschetta from '../assets/bruchetta.svg'
import LemonCake from '../assets/lemon dessert.jpg'

export default function Highlights() {
    return(
        <div className="highlight-section">
            <div className="highlight-head">
                <h3>Specials</h3>
                <a href="">
                    <button className="button-class">Online Menu</button>
                </a>
            </div>

            <div className="cards">
                <div className="card">
                    <div className="card-image">
                        <img src={GreekSalad} alt="Greek Salad" />
                    </div>
                    <div className="card-title">
                        <h3>Greek Salad</h3>
                    </div>
                    <div className="card-body">
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla, officia? Delectus deleniti atque perspiciatis, quibusdam expedita pariatur ad minima sapiente alias dolores modi sit? Eveniet impedit non ipsam quas quos!</p>
                    </div>
                    <button className='order-delivery-button'>Order Delivery</button>
                </div>

                <div className="card">
                    <div className="card-image">
                        <img src={Bruschetta} alt="Bruschetta" />
                    </div>
                    <div className="card-title">
                        <h3>Bruschetta</h3>
                    </div>
                    <div className="card-body">
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla, officia? Delectus deleniti atque perspiciatis, quibusdam expedita pariatur ad minima sapiente alias dolores modi sit? Eveniet impedit non ipsam quas quos!</p>
                    </div>
                    <button className='order-delivery-button'>Order Delivery</button>
                </div>

                <div className="card">
                    <div className="card-image">
                        <img src={LemonCake} alt="Lemon Cake" />
                    </div>
                    <div className="card-title">
                        <h3>Lemon Cake</h3>
                    </div>
                    <div className="card-body">
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla, officia? Delectus deleniti atque perspiciatis, quibusdam expedita pariatur ad minima sapiente alias dolores modi sit? Eveniet impedit non ipsam quas quos!</p>
                    </div>
                    <button className='order-delivery-button'>Order Delivery</button>
                </div>
            </div>
        </div>
    );
}