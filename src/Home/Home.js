import { Link } from "react-router-dom";
import '../Styles/Home.css'
function Home(){
const gods=[
    {
        id:1,
        imgSrc:[
            "https://images.pexels.com/photos/57901/pexels-photo-57901.jpeg?auto=compress&cs=tinysrgb&w=600",
            "https://t4.ftcdn.net/jpg/05/97/92/25/240_F_597922554_NchpW6uj35RPOI4yeJeT4ElPxIHbHJlx.jpg",
        ],
        }
           ];
    
    return(
      <>
       <div className="homeBackground">
       <div className="container my-5">
            <h4 className="text-center mt-4" style={{color:"white"}}>75 Hard Challenge</h4>
            <div className="row">
                <div className="col-sm">
                <div className="image-container">
            <img
              className="img-fluid homeImage"
              src="https://images.pexels.com/photos/1629998/pexels-photo-1629998.jpeg?auto=compress&cs=tinysrgb&w=600"
              alt="image-container"
            />
            <div className="overlay-text">The greatest accomplishment is not in never failing<hr/>
            but in rising again and again, every time we fail.<br/>
            <span className="textRam">Jai Sree Ram</span>
                  </div>
                  </div>
                </div>
            </div>
        </div>
        <div className="container mb-4">
        <div className="row equal-images">
          {gods[0].imgSrc.map((src, index) => (
            <div key={index} className="col-6">
              <img className="img-fluid gridImage mx-2" src={src} alt={`image-${index}`} />
            </div>
          ))}
        </div>
      </div>
      <div className="text-center mb-4">
      <Link to={'/challenges'}><button className="btn btn-warning my-4 customButton">Take Challenge</button></Link>
      </div>
       </div>
      </>
    )
}
export default Home;