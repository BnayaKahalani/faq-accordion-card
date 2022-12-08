import MobileImg from "./assets/images/illustration-woman-online-mobile.svg";
import MobileShadow from "./assets/images/bg-pattern-mobile.svg";
import DesktopImg from "./assets/images/illustration-woman-online-desktop.svg";
import DesktopShadow from "./assets/images/bg-pattern-desktop.svg";
import DesktopBox from "./assets/images/illustration-box-desktop.svg";
import iconArrowDown from "./assets/images/icon-arrow-down.svg";
import { questionsAnswers } from "./QA"
import React, { useState } from "react";

function Faq() {

  const [isText, setIsText] = useState("")

  const handleClick = ({ target }) => {
    if (isText === target.innerText) return setIsText("")
    setIsText(target.innerText)
  }


  return (
    <>
      <picture className="faq__box-img">
        <source media="(min-width: 1440px)" srcSet={DesktopBox} />
        <img src="" alt="" />
      </picture>

      <div className="faq" onClick={handleClick}>
        <div className="faq__img-container">
          <picture className="faq__main-img">
            <source media="(min-width: 1440px)" srcSet={DesktopImg} />
            <source media="(min-width: 1440px)" srcSet={DesktopBox} />
            <img src={MobileImg} alt="" />
          </picture>

          <picture className="faq__shadow-img">
            <source media="(min-width: 1440px)" srcSet={DesktopShadow} />
            <img src={MobileShadow} alt="" />
          </picture>
        </div>
        <div className="faq__text-container">
          <h1>FAQ</h1>
          <ul className="faq__questions-answers">
            {questionsAnswers.map((q, idx) => {
              return (
                <li id={idx}>
                  <div className="faq__question-container">
                    <p className="faq__q" style={{ fontWeight: isText === q.q ? "bold" : "" }}>{q.q}</p>
                    <span className="faq__arrow-container">
                      <img className="faq__arrow" style={{ transform: isText === q.q ? "rotate(180deg)" : "" }} src={iconArrowDown} alt="" />
                    </span>
                  </div>
                  <p className="faq__a">
                    {isText === q.q ? q.a : ''}
                  </p>
                </li>
              )
            })}

          </ul>

        </div>
      </div>
    </>
  )
}

export default Faq;
