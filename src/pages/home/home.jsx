import React from "react";
import "./style.css";
import Typed from "react-typed";
import Footer from "../../components/footer/foote";

const Home = () => {
  return (
    <div className="home">
      <Typed
        strings={[`<h1 className='home__title'>CPANAX TEST REACTJS</h1>`]}
        typeSpeed={100}
      />

      <article>
        <Footer />
      </article>
    </div>
  );
};

export default Home;
