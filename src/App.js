
import './App.css';

function App() {
  return (
    <div className="">

      <div className='hero'>
        <div className="container top">

          <div className='topNav d-flex justify-content-between align-items-start pt-5'>
            <img src="https://upload.wikimedia.org/wikipedia/commons/7/7a/Logonetflix.png" alt="Logo1" width='180px'/>
            <button className='btn btn-red btn-danger border-0 px-3'>sign in</button>
          </div>

          <div className='text-center middle'>
            <div>
              <h2 className='text-white fw-bold display-4'> Unlimited movies, TV shows, and more</h2>
              <p className='text-white fw-200 fs-3'>Plans now start at US$2.99/month.</p>
              <p className='text-white fw-200 fs-4'>Ready to watch? Enter your email to create or restart your membership.</p>
              <div className='input-email'>
                <input type="text" className='email-input' placeholder='Email Address'/>
                <button>Get Started <i class="fa-solid fa-angle-right"></i></button>
              </div>
            </div>
            
          </div>
        </div>
        <div className='overlay'></div>
      </div>

      <div className='container-fluid m-0 bg-black my-3'>
        <div className="container py-5 ">
          <div className="row align-items-center">
            <div className="col-md-6">
              <h2 className='text-white fw-bold display-5 '> Enjoy on your TV.</h2>
              <p className='fs-4 text-white'>Watch on Smart TVs, Playstation, Xbox, Chromecast, <br /> Apple TV, Blu-ray players, and more.</p>
            </div>

            <div className="col-md-6">
              <img src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/tv.png" alt="" className='img-fluid'/>
            </div>
          </div>
        </div>
      </div>

      
      
    </div>
  );
}

export default App;
