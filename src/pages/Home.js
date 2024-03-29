import { Link } from "react-router-dom";
import ImageCard from "../components/ImageCard";
import bruchetta from "../images/bruchetta.svg";
import Testimonials from "../components/Testimonials";
//import desset from "../images/lemon dessert.jpg";

const salad = new URL("../images/greek salad.jpg", import.meta.url);
const lemonDessert = new URL("../images/lemon dessert.jpg", import.meta.url);
const restaurantfood = new URL("../images/restauranfood.jpg", import.meta.url);
const restaurant = new URL("../images/restaurant.jpg", import.meta.url);
const restaurantChef = new URL("../images/restaurantChefB.jpg", import.meta.url);

const Home = () => {
  return (
    <>
      <section className="jumbotron p-2">
        <div className="container p-2">
          <div className="row m-2 p-2">
            <div className="col-12 col-md-6">
              <h1>Little Lemon</h1>
              <h5>Chicago</h5>
              <p>
                We are a family owned Mediterranean restaurant, focused on
                traditional recipes served with a modern twist.
              </p>
              <Link to={'/reservation'} className="btn btn-action">Reserve a Table</Link>
            </div>
            <div className="col-12 col-md-6">
              <div className="rounded-2 ">
                <img
                    className="img-fluid rounded-1 "
                    alt="food"
                    src={restaurantfood}
                    style={{ borderRadius: "10px" }}
                  />
              </div>
            </div>
          </div>
        </div>
      </section>

     <section className="week-special-section">
      <div className="container">
          <div className="d-flex flex-wrap justify-content-between mt-4 p-4">
            <h3 className="m-1">This weeks specials!</h3>
            <Link to={'/order-online'} className="btn btn-action m-1"> Online Menu</Link>
          </div>
          <div className="d-flex flex-wrap justify-content-center w-100 ">
            
              <ImageCard
                image={salad}
                title={"Greek desset"}
                itemPrice={"$12.99"}
                bodyText={
                  "The famous greek salad of crispy lettuce, peppers, olives and our Chicago style leta cheesa, garnished with crunchy farlic and rosemary croutons"
                }
                footerText={"Order a Delivery"}
              />
            
            
              <ImageCard
                image={bruchetta}
                title={"Bruchetta"}
                itemPrice={"$5.99"}
                bodyText={
                  "Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil crunchy farlic and rosemary croutons."
                }
                footerText={"Order a Delivery"}
              />
            
            
              <ImageCard
                image={lemonDessert}
                title={"Lemon Dessert"}
                itemPrice={"$5.00"}
                bodyText={
                  "This comos straight from grandmas recipe book, every last ingredient hass been sourced and is as authentic as can be imagined."
                }
                footerText={"Order a Delivery"}
              />
            
          </div>
        </div>
      </section>

      <section className="testimonials mt-2 mb-4 py-4 d-flex justify-content-center bg-light">
       <Testimonials />
      </section>

      <section className="about my-4 py-4 d-flex justify-content-center">
        <div className="container p-3 ">
          <div className="row m-2 ">
            <div className="col-12 col-lg-6 mb-3 py-2">
              <h1>Little Lemon</h1>
              <h5>Chicago</h5>
              <p>
                We are a family owposition-relativened Mediterranean restaurant,
                focused on traditional recipes served with a modern twist.
              </p>
            </div>

            <div className="col col-12 col-lg-6 position-relative mb-3 py-2">
              <div className="rounded-2 d-flex justify-content-center">
                <img
                  className="img-fluid rounded-1 "
                  alt="food"
                  src={restaurant}
                  style={{ borderRadius: "10px" }}
                />
              </div>
              <div className="rounded-2  position-absolute d-flex justify-content-center">
                <img
                  className="img-fluid rounded-1 "
                  alt="food"
                  src={restaurantChef}
                  style={{ borderRadius: "10px" }}
                />
              </div>
            </div>
          </div>
        </div>
      </section>


    </>
  );
};

export default Home;
