export default function Card2() {
  return (
    <>
      <div className="card">
        <img className="card-img-top project-image" src="singleweatherapp.png" alt="Weather-React-App" />
        <div className="card-body">
          <h5 className="card-title">React Weather App | API</h5>
          <p className="card-text">
            A single weather React App that uses an API and gives data on weather from the city that is entered.
          </p>
          <button className="headerbtn"><a href="https://single-day-weather.netlify.app/">Visit Site</a></button>
        </div>
      </div>
    </>
  );
}