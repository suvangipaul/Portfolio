import React from "react";
import "./home.css";
import PrsnlImg from "../../assets/prsnl_img.jpeg";
function Home() {
  return (
    <div className="home">
      <div className="container">
        <div className="row">
          <div className="home-info padd-15">
            <h3 className="hello">
              Hello, my name is <span className="name">Suvangi Paul</span>
            </h3>
            <h3 className="my-profession">
              I'm a <span className="typing">Web Developer</span>
            </h3>
            <p>
              I'm a Web developer who is basically learning to build up new
              problem solving projects. My expertise is to create website and
              design UI/UX using the concepts of HTML, CSS, Javascript and React
              and many more....
            </p>
            <a href="/contact" class="btn">
              Hire Me
            </a>
          </div>
          <div className="home-img">
            <img src={PrsnlImg} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}
export default Home;
