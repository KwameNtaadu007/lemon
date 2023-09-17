import Button from "../components/Button";
import ImageCard from "../components/ImageCard";

import bruchetta from "../images/bruchetta.svg";
//import desset from "../images/lemon dessert.jpg";
import Logo from '../images/icon/Logo.svg';
const salad = new URL("../images/greek salad.jpg", import.meta.url);
const restaurantfood = new URL("../images/restauranfood.jpg", import.meta.url);

const Home = () => {
  return (
    <>
      <section className="jumbotron p-2">
        <div className="container p-2">
          <div className="row m-2 ">
            <div className="col-12 col-md-6">
              <h1>Little Lemon</h1>
              <h5>Chicago</h5>
              <p>
                We are a family owned Mediterranean restaurant, focused on
                traditional recipes served with a modern twist.
              </p>
              <button className="btn btn-action">Reserve a Table</button>
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
          <div className="d-flex justify-content-between m-4">
            <h3>This weeks specials!</h3>
            <Button styles="btn-action"> Online Menu</Button>
          </div>
          <div className="row">
            <div className="col">
              <ImageCard
                image={salad}
                title={"Greek desset"}
                itemPrice={"$12.99"}
                bodyText={
                  "The famous greek salad of crispy lettuce, peppers, olives and our Chicago style leta cheesa, garnished with crunchy farlic and rosemary croutons"
                }
                footerText={"Order a Delivery"}
              />
            </div>
            <div className="col">
              <ImageCard
                image={bruchetta}
                title={"Bruchetta"}
                itemPrice={"$5.99"}
                bodyText={
                  "Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil crunchy farlic and rosemary croutons."
                }
                footerText={"Order a Delivery"}
              />
            </div>
            <div className="col">
              <ImageCard
                image={salad}
                title={"Lemon Dessert"}
                itemPrice={"$5.00"}
                bodyText={
                  "This comos straight from grandmas recipe book, every last ingredient hass been sourced and is as authentic as can be imagined."
                }
                footerText={"Order a Delivery"}
              />
            </div>
          </div>
        </div>
      </section>

      <section className="testimonials m-4">
        <div className="container">
          <div className="row p-2 d-flex justify-content-center">
            <h4>Testimonials</h4>
          </div>
        </div>
      </section>

      <section className="about">
        <div className="container p-3">
          <div className="row m-2 ">
            <div className="col">
              <h1>Little Lemon</h1>
              <h5>Chicago</h5>
              <p>
                We are a family owposition-relativened Mediterranean restaurant,
                focused on traditional recipes served with a modern twist.
              </p>
            </div>
            <div className="col position-relative">
              <div className="rounded-2 d-flex justify-content-center">
                <img
                  className="img-fluid rounded-1 "
                  alt="food"
                  src={restaurantfood}
                  style={{ borderRadius: "10px" }}
                />
              </div>
              <div className="rounded-2  position-absolute d-flex justify-content-center">
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

      <footer className="p-4 m-2">
        <div className="container">
          <div className="row p-2">
            <div className="col-3">
            <div className='logo'>
              <img src={Logo} alt=' Little Lemon' />
            </div>
            </div>
            <div className="col-3">Social Media Links</div>
            <div className="col-3">Doormat Navigation</div>
            <div className="col-3">Contact info</div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Home;