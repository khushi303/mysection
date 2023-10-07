import towelimg from './assets/images/png/towelimg.png';
import card1img from './assets/images/png/small-towel-img.png';
import card2img from './assets/images/png/girl-img.png';
import card3img from './assets/images/png/wrap-towel.png'
import card4img from './assets/images/png/wrap-towel-2.png'
import './App.css';

function App() {
  return (
    <div className="App">
      <div class="container">
        <h2 className='ff-hind fs-36 fw-600 text-black23 py-50 text-center'>Featured Product</h2>
        <div class="row justify-content-center">
          <div class="col-xl-5 col-md-8 col-12 position-relative">
            <img src={towelimg} alt='towelimg' className='w-100 br-30 h-100' />
            <p className='ff-hind fs-58 fs-36 fw-600 text-white lh-117 px-24 text-center position-absolute start-0 end-0 top-20'>Explore More
              Product</p>
          </div>
          <div class="col-xl-7 col-12 pt-xl-0 pt-35">
            <div className='row'>
              <div className='col-md-6 col-12 pt-35 pt-md-0'>
                <div className='card'>
                  <img src={card1img} alt='towelimg' className='w-100 card-img' />
                  <p className='pt-22 ff-open fs-16 fw-400 text-black23'>Concetti Di-Lusso ALESANDRDO Luxury
                    Turkish Spa Towels and ganic Bamboo
                    Robes 12 PC set</p>
                  <div className='d-flex justify-content-between align-items-center pt-29 w-100'>
                    <p className='ff-hind fs-24 fw-600 text-darkred'>$169.99</p>
                    <p className='ff-hind fs-16 fw-400 text-gray68 text-decoration-line-through'>$199.99</p>
                    <button className='ff-hind fs-16 fw-600 text-white btn-add'>ADD CART</button>
                  </div>
                </div>
              </div>
              <div className='col-md-6 col-12 pt-35 pt-md-0'>
                <div className='card'>
                  <img src={card2img} alt='towelimg' className='w-100 card-img' />
                  <p className='pt-22 ff-open fs-16 fw-400 text-black23'>Concetti Di-Lusso ALESANDRDO Luxury
                    Turkish Spa Towels and ganic Bamboo
                    Robes 12 PC set</p>
                  <div className='d-flex justify-content-between align-items-center pt-29 w-100'>
                    <p className='ff-hind fs-24 fw-600 text-darkred'>$169.99</p>
                    <p className='ff-hind fs-16 fw-400 text-gray68 text-decoration-line-through'>$199.99</p>
                    <button className='ff-hind fs-16 fw-600 text-white btn-add'>ADD CART</button>
                  </div>
                </div>
              </div>
              <div className='col-md-6 col-12 pt-50 pt-35'>
                <div className='card'>
                  <img src={card3img} alt='towelimg' className='w-100 card-img' />
                  <p className='pt-22 ff-open fs-16 fw-400 text-black23'>Concetti Di-Lusso ALESANDRDO Luxury
                    Turkish Spa Towels and ganic Bamboo
                    Robes 12 PC set</p>
                  <div className='d-flex justify-content-between align-items-center pt-29 w-100'>
                    <p className='ff-hind fs-24 fw-600 text-darkred'>$169.99</p>
                    <p className='ff-hind fs-16 fw-400 text-gray68 text-decoration-line-through'>$199.99</p>
                    <button className='ff-hind fs-16 fw-600 text-white btn-add'>ADD CART</button>
                  </div>
                </div>
              </div>
              <div className='col-md-6 col-12 pt-50 pt-35'>
                <div className='card'>
                  <img src={card4img} alt='towelimg' className='w-100 card-img' />
                  <p className='pt-22 ff-open fs-16 fw-400 text-black23'>Concetti Di-Lusso ALESANDRDO Luxury
                    Turkish Spa Towels and ganic Bamboo
                    Robes 12 PC set</p>
                  <div className='d-flex justify-content-between align-items-center pt-29 w-100'>
                    <p className='ff-hind fs-24 fw-600 text-darkred'>$169.99</p>
                    <p className='ff-hind fs-16 fw-400 text-gray68 text-decoration-line-through'>$199.99</p>
                    <button className='ff-hind fs-16 fw-600 text-white btn-add'>ADD CART</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='d-flex align-items-center justify-content-center pt-85 pt-40 pb-30'>
          <button className='fs-18 ff-hind fw-600 text-white btn-show'>SHOW MORE</button>
        </div>
      </div>
    </div>
  );
}

export default App;
