export default function Card() {
  return (
    <>
      <div className="card">
        <img className="card-img-top project-image" src="tailwindproject.png" alt="Card image cap" />
        <div className="card-body">
          <h5 className="card-title">Keyla's Corner | Tailwind & React</h5>
          <p className="card-text">
            A Capstone Project that is a personal blog. Feel free to explore the page, read the blogs and leave a comment!
          </p>
          <button className="headerbtn"><a href="https://keylascorner.netlify.app/">Visit Site</a></button>
        </div>
      </div>
    </>
  );
}
