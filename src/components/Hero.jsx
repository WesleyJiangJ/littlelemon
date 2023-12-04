import RestaurantFood from '../assets/restauranfood.jpg'

export default function Hero() {
  return (
    <div className="hero-section">
      <div className="main-content">
        <h1>Little Lemon</h1>
        <h2>Chicago</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. 
          Asperiores amet quidem omnis tempore expedita sequi hic 
          laborum voluptatibus, minima nesciunt accusamus.
        </p>
        <a href="">
          <button className='button-class'>Reserve a Table</button>
        </a>
      </div>
      <div className="feature-image">
        <img src={RestaurantFood} alt="Hero Section" />
      </div>
    </div>
  )
}