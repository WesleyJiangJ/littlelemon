import ChefA from '../assets/Mario and Adrian A.jpg'
import RestaurantFood from '../assets/restauranfood.jpg'

export default function LittleLemon() {
    return (
        <div className="littlelemon-section">
            <div className="left-section">
                <h1>Little Lemon</h1>
                <h3>Chicago</h3>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Magni quisquam cumque facilis qui quia ipsam molestiae, sint, sed quaerat, ut inventore! Culpa veritatis distinctio unde fugit perferendis, sequi quam ducimus!</p>
            </div>

            <div className="right-section">
                <img src={ChefA} alt="Chef" />
                <img src={RestaurantFood} alt="Chef" />
            </div>
        </div>
    );
}