import React from "react";
import logo from "./logo.svg";
import logoLarge from "./assets/logo_large.png";
import iphoneBankLogo from "./assets/ip_bank_logo.png";
import iphoneCardLogo from "./assets/ip_card_logo_large.png";
import iphoneFoodLogo from "./assets/ip_food_logo.png";
import playStore from "./assets/google_large.png";
import appStore from "./assets/appstore_large.png";
import guyTwoLarge from "./assets/guy_2_large.png";
import womanOneLarge from "./assets/woman_1_large.png";
import womanTwoLarge from "./assets/woman_2_large.png";
import womanThreeLarge from "./assets/woman_3_large.png";
import guyOneLarge from "./assets/guy_1_large.png";
import footerLogo from "./assets/footer_logo.png";

import "./App.scss";

function App() {
  return (
    <div className="App">
      <div className="">
        <div className="container header d-flex justify-content-between align-items-center py-4">
          <img className="header__logo header__logo--small" src={logoLarge} />
          <button className="btn btn-primary">Download</button>
        </div>
        <div className="container banner d-flex">
          <div className="banner__text font-weight-bold">
            <div className="banner__text--header">
              Fast&Secure <p>Money transfer</p>
            </div>
            <div className="banner__text--subheader">
              With this app in hand, you'll have more money in your pocket.
              Because every time you send, spend or receive money
              internationally, you'll pay the lowest possible price
              <div className="mt-5">
                <img
                  className="banner__text__logo banner__text__logo--apple"
                  src={appStore}
                />
                <img
                  className="banner__text__logo banner__text__logo--google"
                  src={playStore}
                />
              </div>
            </div>
          </div>
          <div className="d-flex banner__phone-logos">
            <img
              className="banner__phone-logos__ip banner__phone-logos__ip--overlap"
              src={iphoneBankLogo}
            />
            <img
              className="banner__phone-logos__ip banner__phone-logos__ip--under"
              src={iphoneCardLogo}
            />
          </div>
        </div>
        <div className="container d-flex justify-content-center about">
          <div>
            <h2 className="about__main-header">
              The key stuff you'd want <br /> to know about our app
            </h2>
            <div className="about__promos d-flex">
              <div className="about__box">
                <h2>0%</h2>
                <div className="box__subtitle">No Fee</div>
                <div className="box__description">
                  Save when you spend around the World. There's no fee. Don't
                  need interruption
                </div>
              </div>
              <div className="about__box">
                <h2>5%</h2>
                <div className="box__subtitle">Zivmi Points</div>
                <div className="box__description">
                  Earn hundreds of Zivmi points everytime you pay. You can use
                  these points in cafes, malls, petrol stations and more.
                </div>
              </div>
              <div className="about__box about__box--active">
                <h2>300k</h2>
                <div className="box__subtitle">Trusted by</div>
                <div className="box__description">
                  So far, we have worked with 300 thousand customers and all of
                  them continue to use it with pleasure.
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="rewards d-flex">
          <div className="rewards__logo">
            <div className="rewards__logo__wrapper">
              <img src={iphoneFoodLogo} />
            </div>
          </div>
          <div className="rewards__content d-flex align-items-center">
            <div className="rewards__content__wrapper">
              <div className="warning--headers">REWARDS</div>
              <h1 className="dark-blue--headers">
                Use Zivmi Points in over 500 shops and malls
              </h1>
              <div className="gray--description">
                You can shop from the most famous shops and malls in the world.
                With the Zivmi application, you can spend your points in more
                than 500 shops
              </div>
              <button className="shared-button--large shared-button--warning btn btn-warning">
                EXPLORE
              </button>
            </div>
          </div>
        </div>
        <div className="payments d-flex">
          <div className="payments__content d-flex align-items-center justify-content-center">
            <div className="payments__content__wrapper">
              <div className="warning--headers">PAYMENTS</div>
              <h1 className="dark-blue--headers">
                Pay like a local - Get the real exchange rate
              </h1>
              <div className="gray--description">
                Spend abroad in over 150 currencies at the Real (Interbank)
                exchange rates - with no hidden fees. All payments will be
                instantly transferred to the account of the person you want
                within seconds.
              </div>
              <button className="shared-button--large shared-button--dark-blue btn btn-primary">
                GET STARTED
              </button>
            </div>
          </div>
          <div className="payments__logo">
            <div className="payments__logo__card-wrapper d-flex align-items-center">
              <div className="payments__card shadow">
                <div className="text-center">
                  <img className="m-auto" src={guyTwoLarge} />
                  <p>Send money to John</p>
                </div>
                <div className="d-flex justify-content-between">
                  <div>
                    <div className="text-muted">You send</div>
                    <div className="payments__card__amount">$ 250</div>
                  </div>
                  <div className="payments__card__currency">USD</div>
                </div>
                <hr />
                <div className="d-flex justify-content-between">
                  <div>
                    <div className="text-muted">Johny gets</div>
                    <div className="payments__card__amount">$ 3,937.38</div>
                  </div>
                  <div className="payments__card__currency">EGP</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="testimonials">
          <div className="warning--headers header--spacing-large">
            TESTIMONIAL
          </div>
          <h1 className="dark-blue--headers">What people say about us</h1>
          <div className="d-flex justify-content-around align-items-center testimonials__image-container">
            <img className="testimonials__image--small" src={womanThreeLarge} />
            <img className="testimonials__image--small" src={womanTwoLarge} />
            <img className="testimonials__image--large" src={guyOneLarge} />
            <img className="testimonials__image--small" src={womanOneLarge} />
            <img className="testimonials__image--small" src={guyTwoLarge} />
          </div>
          <div>
            <div className="text-muted">
              I can send money instantly whenever I want
            </div>
            <div className="text-muted mb-4">
              I earn points whenever I send money
            </div>
            <div className="font-weight-bold">Johny mellow</div>
          </div>
        </div>
        <div className="contact">
          <div className="contact__subheader">CONTACT US</div>
          <h1 className="contact__header text-white mt-2 mb-3">
            Get In Touch With Us
          </h1>
          <div className="contact__description--small my-4">
            Contact us immediately and have an opportunity to take <br />{" "}
            advantage of special opportunities for you.
          </div>
          <div className="d-flex contact__form justify-content-center">
            <input
              className="form-control w-25 pl-4"
              placeholder="Enter your business email"
            />
            <button className="mx-3 btn contact__button shared-button--warning shared-button--small">
              Get started
            </button>
          </div>
        </div>
        <footer className="container">
          <div className="footer__links row">
            <div className="col-md-4">
              <img src={footerLogo} />
            </div>
            <div className="col-md-4 d-flex footer__links__container">
              <span>Features</span>
              <span>About Us</span>
              <span>Services</span>
              <span>Contact</span>
            </div>
            <div className="col-md-4" />
          </div>
          <div className="footer__copyright text-center py-3 text-muted">
            © 2020 Zivmi. All Rights Reserved
          </div>
        </footer>
      </div>
    </div>
  );
}

export default App;
