
import Accordian from './Accordian';
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
                <input type="text" className='email-input py-3 px-3 w-50' placeholder='Email Address'/>
                <button className=' text-white mx-1 py-3 px-3 fw-bold fs-5'>Get Started <i class="fa-solid fa-angle-right"></i></button>
              </div>
            </div>
            
          </div>
        </div>
        <div className='overlay'></div>
      </div>

      {/* section 2 */}

      <div className='container-fluid m-0 bg-black my-3 text-sm-center'>
        <div className="container py-5 ">
          <div className="row align-items-center">
            <div className="col-md-6 md:text-left">
              <h2 className='text-white fw-bold display-5 '> Enjoy on your TV.</h2>
              <p className='fs-4 text-white'>Watch on Smart TVs, Playstation, Xbox, Chromecast, <br /> Apple TV, Blu-ray players, and more.</p>
            </div>
            <div className="col-md-6">
              <img src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/tv.png" alt="" className='img-fluid'/>
            </div>
          </div>
        </div>
      </div>


      {/* setion 3 */}

      <div className='container-fluid m-0 bg-black my-3 text-sm-center'>
        <div className="container py-5 ">
          <div className="row align-items-center">
            
            <div className="col-md-6">
              <img src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/mobile-0819.jpg" alt="" className='img-fluid'/>
            </div>

            <div className="col-md-6 md:text-left">
              <h2 className='text-white fw-bold display-5 '> Download your shows to watch offline.</h2>
              <p className='fs-4 text-white'>Save your favorites easily and always have <br/> something to watch.</p>
            </div>
          </div>
        </div>
      </div>

      {/* section 4 */}

      <div className='container-fluid m-0 bg-black my-3'>
        <div className="container py-5 ">
          <div className="row align-items-center">

            <div className="col-md-6 md:text-left">
              <h1 className='text-white fw-bold display-5 '>Watch <br/> everywhere.</h1>
              <p className='fs-4 text-white'>Stream unlimited movies and TV <br/> shows on your phone, tablet, laptop, <br/> and TV.</p>
            </div>
          </div>
        </div>
      </div>


    {/* section 5 */}
      <div className='container-fluid m-0 bg-black my-3 text-sm-center'>
        <div className="container py-5 ">
          <div className="row align-items-center">
            
            <div className="col-md-6">
              <img src="https://occ-0-1799-768.1.nflxso.net/dnm/api/v6/19OhWN2dO19C9txTON9tvTFtefw/AAAABfpnX3dbgjZ-Je8Ax3xn0kXehZm_5L6-xe6YSTq_ucht9TI5jwDMqusWZKNYT8DfGudD0_wWVVTFLiN2_kaQJumz2iivUWbIbAtF.png?r=11f" alt="" className='img-fluid'/>
            </div>

            <div className="col-md-6 md:text-left">
              <h2 className='text-white fw-bold display-5 '> Create profiles for kids.</h2>
              <p className='fs-4 text-white'>Send kids on adventures with their favorite characters in a space made just for them—free with your membership.</p>
            </div>
          </div>
        </div>
      </div>


      
      {/* section 8 */}

      <div className='container-fluid m-0 bg-black my-3 text-center'>
        <div className="container py-5 ">
          <div className="row align-items-center">

            <div className="col-md-12">
              <h1 className='text-white fw-bold display-4 '>Frequently Asked Questions</h1>
              {/* accordian  */}
              <Accordian/>
            </div>
            <p className='text-white fs-4 my-4'>Ready to watch? Enter your email to create or restart your membership.</p>

            <div className='input-email'>
                <input type="text" className='email-input py-3 px-3 w-25' placeholder='Email Address'/>
                <button className=' text-white mx-1 py-3 px-3 fw-bold'>Get Started <i class="fa-solid fa-angle-right"></i></button>
            </div>
          </div>
        </div>
      </div>


      
    {/* section 7 */}
    <div className='container-fluid m-0 bg-black my-3'>
        <div className="container py-5 ">
          <a href="" className='text-white'>Questions? Contact us.</a>
          <div className="row align-items-center mt-4">
            <div className="col-lg-3 col-md-4 col-sm-6 col-12">
              <p><a href="" className='text-white'>FAQ</a></p>
              <p><a href="" className='text-white'>Investor Relations</a></p>
              <p><a href="" className='text-white'>Privacy</a></p>
              <p><a href="" className='text-white'>Speed Test</a></p>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6 col-12">
              <p><a href="" className='text-white'>Help Center</a></p>
              <p><a href="" className='text-white'>Jobs</a></p>
              <p><a href="" className='text-white'>Cookie Preferences</a></p>
              <p><a href="" className='text-white'>Legal Notices</a></p>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6 col-12">
              <p><a href="" className='text-white'>Account</a></p>
              <p><a href="" className='text-white'>Ways to Watch</a></p>
              <p><a href="" className='text-white'>Corporate Information</a></p>
              <p><a href="" className='text-white'>Only on Netflix</a></p>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6 col-12">
              <p><a href="" className='text-white'>Media Center</a></p>
              <p><a href="" className='text-white'>Terms of Use</a></p>
              <p><a href="" className='text-white'>Contact Us</a></p>

            </div>
            
          </div>

          <button className='d-flex justify-content-between gap-2 my-3 py-2 align-items-center bg-transparent border text-white p-0 px-3 rounded'>
            
              <i class="fa-solid fa-globe"></i>
              <p className='p-0 m-0'>English</p>
              <i class="fa-solid fa-caret-down"></i>
          </button>

          <p className='text-white'>Netflix Ghana</p>
        </div>
      </div>


      

      
      
    </div>
  );
}

export default App;
