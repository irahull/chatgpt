import React, { useState } from "react";
import "./style.scss";
import BlackBtn from "../utils/black-btn.png";
import WhiteBtn from "../utils/white-btn.png";
import Sparkle from "../utils/icons8-sparkle-96.png";

const Home = () => {
  const [gptToggle, setGptToggle] = useState(true);
  const [sidebarToggle, setSidebarToggle] = useState(true);
  return (
    <div className="home-section">
      <div
        className="home-sidebar"
        style={{
          display: !sidebarToggle && "none",
        }}
      >
        <div className="sidebar-btn">
          <button>
            {" "}
            <span>+</span> New chat
          </button>
          <div className="white-toggle">
            <img
              src={WhiteBtn}
              alt="toggle"
              onClick={() => setSidebarToggle(false)}
            />
          </div>
        </div>
      
        <div className="sidebar-bottom-section">
          <div className="user">
            <i class="fa-regular fa-user"></i>
            <span className="span-one">Upgrade to Plus</span>
            <button>NEW</button>
          </div>
          <div className="user-email">
            <div className="sidebar-box">IT</div>
            <div className="email">itsme@gmail.com</div>
            <div className="dot">&#8226;&#8226;&#8226;</div>
          </div>
        </div>
      </div>
      <div className="right-section">
        <div className="upper-section">
          <div className="gpt-info">
            <div
              className="btn-one"
              onClick={() => setGptToggle(true)}
              style={{ backgroundColor: gptToggle && "white" }}
            >
              <i class="fa-solid fa-bolt"></i> <button>GPT-3.5</button>
            </div>
            <div
              className="btn-two"
              onClick={() => setGptToggle(false)}
              style={{ backgroundColor: !gptToggle && "white" }}
            >
              <img src={Sparkle} alt="" width={16} />
              <button>GPT-4</button> <i class="fa-solid fa-lock"></i>
            </div>
          </div>
          <h2 className="heading-two">ChatGPT</h2>
        </div>
        <div className="bottom-section">
          <div className="right-box">
            <div className="box">
              <h4>Plan a trip</h4>
              <p>for a photography expedition in Iceland</p>
            </div>
            <div className="box">
              <h4>Come up with concepts</h4>
              <p>for a retro-style arcade game</p>
            </div>
            <div className="box">
              <h4>Compare business strategies</h4>
              <p>for transitioning from budget to luxury vs. luxury to..</p>
            </div>
            <div className="box">
              <h4>Show me a code snippet</h4>
              <p>of a website's sticky header</p>
            </div>
          </div>
          <div className="inp">
            <input type="text" placeholder="Send a message" />
            <i class="fa-solid fa-arrow-right"></i>
          </div>
          <div className="bottom-para">
            <p>
              Free Research Preview. ChatGPT may produce inaccurate information
              about people, places, or facts.{" "}
            </p>
          </div>
        </div>
      </div>
      <img
          src={BlackBtn}
          alt="toggle"
          className="black-toggle"
          onClick={() => setSidebarToggle(true)}
          style={{
            display: sidebarToggle && "block",
          }}
        />
    </div>
  );
};

export default Home;
