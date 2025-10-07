export default function Card3({title, description, imageUrl}) {

        return (
          
          <div className="card">
            <img className="card-img-top project-image" src={imageUrl} alt="img" />
            <div className="card-body">
              <h5 className="card-title">{title}</h5>
              <p className="card-text">
                {description}
              </p>
              <button className="headerbtn"><a href="https://capstone2025.netlify.app/">Visit Site</a></button>
            </div>
          </div>

)
    }
            
