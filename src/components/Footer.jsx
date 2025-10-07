
export default function Footer() {
  return (
    <>
      <footer>
        <div className="card text-center">
          <div className="card-body">
            <h5 className="card-title">Thank you for visting!</h5>
            <div className="icon-div">
            <a href="#" className="icons"><img src="linkedin.png" alt="linked-in-image" /></a>
            <a href="#" className="icons"><img src="facebook.png" alt="linked-in-image" /></a>
            <a href="#" className="icons"><img src="instagram.png" alt="linked-in-image" /></a>
            <a href="#" className="icons"><img src="tik-tok.png" alt="linked-in-image" /></a>
           </div>
            <button className="headerbtn">Contact Me</button>
            <button className="headerbtn">Back to the top</button>
            <p className="card-text">
              © 2025 Keyla Welcome. All rights reserved. Designed & developed
              with passion.
            </p>
          </div>
        </div>
      </footer>
    </>
  );
}
