import scss from "./Main.module.scss";
import logo from "../../../assets/image 6.png";
import logo2 from "../../../assets/image 7.png";
 
const Main = () => {
  return (
    <div className="container">
      <div className={scss.main}>
        <div className={scss.text}>
          <h1 className={scss.h1}>
            Get Your <br />
            Payment Faster
          </h1>
          <p style={{ fontSize: "20px" }}>
            Blinqpay helps businesses in Africa get paid by anyone, <br />{" "}
            anywhere in the world
          </p>
          <button
            style={{
              display: "flex",
              padding: "10px 40px",
              marginTop: "10px",
              background: "rgb(121, 138, 201)",
              color: "white",
              border: "none",
              cursor: "pointer",
              borderRadius: "10px",
            }}
          >
            Start Now
          </button>
        </div>
        <div className={scss.image}>
          <img className={scss.image1} src={logo} alt="" />
          <img className={scss.image2} src={logo2} alt="" />
        </div>
       
      </div>
    </div>
  );
};

export default Main;
