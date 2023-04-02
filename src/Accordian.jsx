import React from 'react'

function Accordian() {
  return (
    <div className="accordion accordion-flush" id="accordionFlushExample">
        <div className="accordion-item my-3 py-2 bg-secondary">
            <h2 className="accordion-header ">
            <button className="accordion-button collapsed bg-secondary text-white fs-3 border-0 outline-0" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
                What is Netflix ?
            </button>
            </h2>
            <div id="flush-collapseOne" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">

            <div className="accordion-body text-start text-white fs-4">Netflix is a streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries, and more on thousands of internet-connected devices.
            <br />
            <br />
            You can watch as much as you want, whenever you want without a single commercial – all for one low monthly price. There's always something new to discover and new TV shows and movies are added every week!</div>
            </div>
        </div>

        <div className="accordion-item my-3 py-2 bg-secondary">
            <h2 className="accordion-header ">
            <button className="accordion-button collapsed bg-secondary text-white fs-3 border-0 outline-0" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
                How much does Netflix cost ?
            </button>
            </h2>
            <div id="flush-collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">

            <div className="accordion-body text-start text-white fs-4">Watch Netflix on your smartphone, tablet, Smart TV, laptop, or streaming device, all for one fixed monthly fee. Plans range from US$2.99 to US$9.99 a month. No extra costs, no contracts.
            </div>
            </div>
        </div>

        <div className="accordion-item my-3 py-2 bg-secondary">
            <h2 className="accordion-header ">
            <button className="accordion-button collapsed bg-secondary text-white fs-3 border-0 outline-0" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
                Where can i watch ?
            </button>
            </h2>
            <div id="flush-collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">

            <div className="accordion-body text-start text-white fs-4">
                <p>Watch anywhere, anytime. Sign in with your Netflix account to watch instantly on the web at netflix.com from your personal computer or on any internet-connected device that offers the Netflix app, including smart TVs, smartphones, tablets, streaming media players and game consoles.</p>
                <p>You can also download your favorite shows with the iOS, Android, or Windows 10 app. Use downloads to watch while you're on the go and without an internet connection. Take Netflix with you anywhere.</p>
            </div>
            </div>
        </div>
    </div>
  )
}

export default Accordian