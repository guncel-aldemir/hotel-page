import React from "react";
import "../../assets/styles/Welcome.scss";
import { BsCreditCardFill, BsFillCalendarCheckFill } from "react-icons/bs";
const Welcome = () => {
  return (
    <section className="welcome">
      <div className="welcomeSide-Text">
        <p>Welcome</p>
        <h3>LUXURY AND NATURE IN HARMONY</h3>
      </div>
      <div className="imagesInformationSide">
        <div className="firstSide">
          <img
            src="https://demo2wpopal.b-cdn.net/seasona/wp-content/uploads/2022/04/h1_img1.jpg"
            alt=""
          />
          <div className="firstTextSide">
            <span>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda
              aliquam similique eveniet, adipisci, labore repellendus corporis
              aut dicta est perspiciatis quaerat fuga laborum eum quia ducimus?
              <br></br>
              <br></br>
              Esse eum, numquam nemo recusandae facere cupiditate dolorem
              adipisci.{" "}
            </span>

            <div className="managerInfo">
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Aliquid blanditiis rem recusandae at cupiditate exercitationem
                magnam rerum dolorem qui ratione.
              </p>
              <span className="name">Leonardo P.</span>
              <span className="permission">Resort Manager</span>
            </div>
          </div>
        </div>
        <div className="secondSide">
          <div className="space"></div>
          <div className="secondPhotoTextSide">
            <div className="secondImage">
              <img
                src="https://demo2wpopal.b-cdn.net/seasona/wp-content/uploads/2022/04/h1_img2.jpg"
                alt=""
              />
            </div>

            <div className="secondText">
              <div className="firstIconSecond">
                <BsCreditCardFill size={35} />
                <span>Best rate guarantee</span>
                <p>
                  Amet minim mollit non deserunt ullamco est sit aliqua dolor.
                </p>
              </div>
              <div className="secondIconSecond">
                <BsFillCalendarCheckFill size={35} />
                <span>Best rate guarantee</span>
                <p>
                  Amet minim mollit non deserunt ullamco est sit aliqua dolor.
                </p>
              </div>
              <div className="thirdIconSecond">
                <span>Call us for free <strong>+(406) 555-0120</strong></span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Welcome;
