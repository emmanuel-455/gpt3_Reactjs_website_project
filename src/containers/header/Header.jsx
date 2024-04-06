import React from 'react'
import "./header.css"
import people from "../../asset/people.png"
import ai from "../../asset/ai.png";

const Header = () => (
  <div className="gpt3__header section__padding" id="home">
    <div className="gpt3__header-content">
      <h1 className="gradient__text">Let&apos;s Build Something amazing with GPT-3 OpenAI</h1>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio totam ratione ducimus quod voluptate assumenda rem maiores animi exercitationem consequatur reprehenderit, unde iure fugiat. Ducimus odio totam nisi aut blanditiis!</p>

      <div className="gpt3__header-content__input">
        <input type="email" placeholder="Your Email Address" />
        <button type="button">Get Started</button>
      </div>

      <div className="gpt3__header-content__people">
        <img src={people} alt=''/>
        <p>1,600 people requested access a visit in last 24 hours</p>
      </div>
    </div>

    <div className="gpt3__header-image">
      <img src={ai} alt=''/>
    </div>
  </div>
);

export default Header
