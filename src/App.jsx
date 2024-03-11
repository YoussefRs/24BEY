import { useEffect, useState } from "react";
import Logo from "./assets/24bey_logo.png";
import "./App.css";
import Dot from "./assets/cards/card-seasonality-dot.png";

function App() {
  useEffect(() => {
    const activate = (e) => {
      const slider = document.querySelector(".slider");
      const items = document.querySelectorAll(".item");

      if (e.target.matches(".next")) {
        slider.appendChild(items[0]);
      } else if (e.target.matches(".prev")) {
        slider.prepend(items[items.length - 1]);
      }
    };

    document.addEventListener("click", activate, false);

    return () => {
      document.removeEventListener("click", activate, false);
    };
  }, []);
  return (
    <>
      <div class="container">
        <header class="header">
          <a href="/" aria-label="Homepage" class="header-logo">
            <img src={Logo} alt="24Bey" style={{ width: 100 }} />
          </a>
          <div class="header-actions">
            <button class="header-button header-button-ghost">Home</button>
            <button class="header-button header-button-ghost">Projects</button>
            <button class="header-button header-button-ghost">About</button>
            <div
              // style="--animation-speed:4s"
              class="glowing-box glowing-box-active"
            >
              <div class="glowing-box-animations">
                <div class="glowing-box-glow"></div>
                <div class="glowing-box-stars-masker">
                  <div class="glowing-box-stars"></div>
                </div>
              </div>
              <div class="glowing-box-borders-masker">
                <div class="glowing-box-borders"></div>
              </div>
              <button class="glowing-box-button">
                <span>Contact</span>
              </button>
            </div>
          </div>
        </header>
      </div>

      <div class="hero-background">
        <div class="hero-background-top">
          <div
            class=" lazy-background-image lazy-background-image-maskImage lazy-background-image-loaded hero-background-top-animation"
            style={{
              backgroundImage:
                "url('https://wope.com/images/hero/hero-background-top-mask.png')",
            }}
          >
            <div></div>
          </div>
        </div>
        <div class="hero-background-bottom">
          <div class="hero-background-bottom-background">
            <picture>
              <source
                srcset="https://wope.com/images/hero-background.png"
                media="(max-width:100%)"
              />
            </picture>
            <img
              src="https://wpengine.com/wp-content/uploads/2022/07/WP-Trends_1200x627.jpeg"
              alt=""
            />
          </div>
          <div class="lazy-background-image lazy-background-image-maskImage lazy-background-image-hidden hero-background-bottom-line-animation">
            <div></div>
          </div>
          <div class="lazy-background-image lazy-background-image-maskImage lazy-background-image-hidden hero-background-bottom-line-animation">
            <div></div>
          </div>
          <div class="lazy-background-image lazy-background-image-maskImage lazy-background-image-hidden hero-background-bottom-line-animation">
            <div></div>
          </div>
          <div class="lazy-background-image lazy-background-image-maskImage lazy-background-image-hidden hero-background-bottom-line-animation">
            <div></div>
          </div>
          <div class="lazy-background-image lazy-background-image-maskImage lazy-background-image-hidden hero-background-bottom-ray-animation">
            <div></div>
          </div>
        </div>
        <div class="hero-background-lights"></div>
      </div>

      <section class="hero">
        <div id="star-animation-40" class="star-animation"></div>
        <div class="hero-lights"></div>
        <div class="container">
          <div class="hero-content">
            <h1 class="hero-title">New Era of Websites</h1>
            <p class="hero-description">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Asperiores quae officiis in quidem aperiam est architecto
              voluptates ex atque enim natus quaerat illo unde, quos laborum sit
              esse libero ipsa?
            </p>
            <div class="try-demo"></div>
            <div class="hero-video">
              <div class="hero-video-content">
                <div class="magical-borders">
                  <div class="magical-borders-content">
                    <div class="hero-video-preview">
                      <div class="magical-borders-inner">
                        <picture>
                          <source
                            srcset="https://wope.com/images/hero-video-preview.png"
                            media="(max-width: 1248px)"
                          />
                          <img
                            src="https://www.charliemorecraft.com/wp-content/uploads/2021/03/v_review.jpg"
                            alt="alt_text_2"
                          />
                        </picture>
                        Copy to Clipboard
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="hero-video-play">
                <div
                  // style="--animation-speed:2s"
                  class="glowing-box glowing-box-active"
                >
                  <div class="glowing-box-animations">
                    <div class="glowing-box-glow"></div>
                    <div class="glowing-box-stars-masker">
                      <div class="glowing-box-stars"></div>
                    </div>
                  </div>
                  <div class="glowing-box-borders-masker">
                    <div class="glowing-box-borders"></div>
                  </div>
                  <button class="glowing-box-button">
                    <span>
                      <svg
                        width="16"
                        height="18"
                        viewBox="0 0 16 18"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M15 7.26795C16.3333 8.03775 16.3333 9.96225 15 10.7321L3 17.6603C1.66667 18.4301 1.01267e-06 17.4678 1.07997e-06 15.9282L1.68565e-06 2.0718C1.75295e-06 0.532196 1.66667 -0.430055 3 0.339746L15 7.26795Z"
                          fill="white"
                        ></path>
                      </svg>
                      <div class="hero-video-play-text">
                        <div class="hero-video-play-title">Play The Video</div>
                      </div>
                    </span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section class="cards">
        <div class="container">
          <div class="cards-video">
            <div class="cards-video-inner">
              <video muted autoPlay loop>
                //{" "}
                <source
                  src="https://wope.com/images/cards/cards-video.webm"
                  type="video/mp4"
                />
                //{" "}
              </video>
            </div>
          </div>
          <div class="cards-content">
            <div class="section-header">
              <div class="section-header-badge">Services</div>
              <h2 class="section-header-title">
                <div class="section-header-title-desktop">
                  <span>Make Your business grow</span>
                  <span>with our services</span>
                </div>
                <div class="section-header-title-mobile">
                  <span>Make Your business</span>
                  <span>grow</span>
                  <span>with our services</span>
                </div>
              </h2>
            </div>
            <div class="magical-borders">
              <div class="cards-grid magical-borders-content">
                <div
                  class="card"
                  style={{ "--mouse-x": "569px", "--mouse-y": "372.5px" }}
                >
                  <div class="card-inner magical-borders-inner">
                    <img
                      height="1"
                      width="1"
                      alt="alt_text_3"
                      src="https://wope.com/images/cards/card-gridline.png"
                      class="lazy-image card-gridline lazy-image-loaded"
                    />

                    <div class="card-animation">
                      <div class="card-animation-seasonality">
                        <div class="card-animation-seasonality-chart">
                          <div class="card-animation-seasonality-chart-inner">
                            <img
                              alt="alt_text_13"
                              src="https://wope.com/images/cards/card-seasonality-chart-background.png"
                              class="lazy-image card-animation-seasonality-chart-background lazy-image-loaded"
                            />
                          </div>
                        </div>
                        <img
                          height="1"
                          width="1"
                          alt="alt_text_cardSeasonalityDot_0"
                          src={Dot}
                          class="lazy-image card-animation-seasonality-dot card-animation-seasonality-dot-1 lazy-image-loaded"
                        />
                        <img
                          height="1"
                          width="1"
                          alt="alt_text_cardSeasonalityDot_1"
                          src={Dot}
                          class="lazy-image card-animation-seasonality-dot card-animation-seasonality-dot-2 lazy-image-loaded"
                        />
                        <img
                          height="1"
                          width="1"
                          alt="alt_text_cardSeasonalityDot_2"
                          src={Dot}
                          class="lazy-image card-animation-seasonality-dot card-animation-seasonality-dot-3 lazy-image-loaded"
                        />
                        <div class="card-animation-seasonality-keyword">
                          <div class="card-animation-seasonality-keyword-label">
                            Example:
                          </div>
                          <div class="card-animation-seasonality-keyword-badge">
                            Ice Cream
                          </div>
                        </div>
                        <img
                          height="1"
                          width="1"
                          alt="alt_text_14"
                          src="images/card-seasonality-light-bottom.png"
                          class="lazy-image card-animation-seasonality-light card-animation-seasonality-light-bottom lazy-image-loaded"
                        />
                        <img
                          height="1"
                          width="1"
                          alt="alt_text_15"
                          src="images/card-seasonality-light-top.png"
                          class="lazy-image card-animation-seasonality-light card-animation-seasonality-light-top lazy-image-loaded"
                        />
                        <div class="card-animation-popup card-animation-seasonality-season card-animation-seasonality-season-low">
                          <div class="card-animation-popup-icon">
                            <svg
                              width="24"
                              height="24"
                              viewBox="0 0 24 24"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M12 3.25C12.3452 3.25 12.625 3.52982 12.625 3.875V5.75C12.625 6.09518 12.3452 6.375 12 6.375C11.6548 6.375 11.375 6.09518 11.375 5.75V3.875C11.375 3.52982 11.6548 3.25 12 3.25Z"
                                fill="#FAAF46"
                              ></path>
                              <path
                                fill-rule="evenodd"
                                clip-rule="evenodd"
                                d="M8.25 12C8.25 9.92893 9.92893 8.25 12 8.25C14.0711 8.25 15.75 9.92893 15.75 12C15.75 14.0711 14.0711 15.75 12 15.75C9.92893 15.75 8.25 14.0711 8.25 12Z"
                                fill="#FAAF46"
                              ></path>
                              <path
                                d="M12.625 18.25C12.625 17.9048 12.3452 17.625 12 17.625C11.6548 17.625 11.375 17.9048 11.375 18.25V20.125C11.375 20.4702 11.6548 20.75 12 20.75C12.3452 20.75 12.625 20.4702 12.625 20.125V18.25Z"
                                fill="#FAAF46"
                              ></path>
                              <path
                                d="M5.81282 5.81282C6.0569 5.56874 6.45262 5.56874 6.6967 5.81282L8.02253 7.13864C8.2666 7.38272 8.2666 7.77845 8.02253 8.02253C7.77845 8.26661 7.38272 8.26661 7.13864 8.02253L5.81282 6.6967C5.56874 6.45262 5.56874 6.0569 5.81282 5.81282Z"
                                fill="#FAAF46"
                              ></path>
                              <path
                                d="M16.8614 15.9775C16.6173 15.7334 16.2216 15.7334 15.9775 15.9775C15.7334 16.2216 15.7334 16.6173 15.9775 16.8614L17.3033 18.1872C17.5474 18.4313 17.9431 18.4313 18.1872 18.1872C18.4313 17.9431 18.4313 17.5474 18.1872 17.3033L16.8614 15.9775Z"
                                fill="#FAAF46"
                              ></path>
                              <path
                                d="M18.1872 5.81282C17.9431 5.56874 17.5474 5.56874 17.3033 5.81282L15.9775 7.13864C15.7334 7.38272 15.7334 7.77845 15.9775 8.02253C16.2216 8.26661 16.6173 8.26661 16.8614 8.02253L18.1872 6.6967C18.4313 6.45262 18.4313 6.0569 18.1872 5.81282Z"
                                fill="#FAAF46"
                              ></path>
                              <path
                                d="M7.13864 15.9775C7.38271 15.7334 7.77844 15.7334 8.02252 15.9775C8.2666 16.2216 8.2666 16.6173 8.02252 16.8614L6.6967 18.1872C6.45262 18.4313 6.05689 18.4313 5.81281 18.1872C5.56873 17.9431 5.56873 17.5474 5.81281 17.3033L7.13864 15.9775Z"
                                fill="#FAAF46"
                              ></path>
                              <path
                                d="M3.25 12C3.25 11.6548 3.52982 11.375 3.875 11.375H5.75C6.09518 11.375 6.375 11.6548 6.375 12C6.375 12.3452 6.09518 12.625 5.75 12.625H3.875C3.52982 12.625 3.25 12.3452 3.25 12Z"
                                fill="#FAAF46"
                              ></path>
                              <path
                                d="M18.25 11.375C17.9048 11.375 17.625 11.6548 17.625 12C17.625 12.3452 17.9048 12.625 18.25 12.625H20.125C20.4702 12.625 20.75 12.3452 20.75 12C20.75 11.6548 20.4702 11.375 20.125 11.375H18.25Z"
                                fill="#FAAF46"
                              ></path>
                            </svg>
                          </div>
                          <div>
                            <div class="card-animation-popup-title">
                              Top Months: May, Jun, Jul
                            </div>
                            <div class="card-animation-popup-description">
                              Prepare yourself for the upcoming season.
                            </div>
                          </div>
                        </div>
                        <div class="card-animation-popup card-animation-seasonality-season card-animation-seasonality-season-high">
                          <div class="card-animation-popup-icon">
                            <svg
                              width="24"
                              height="24"
                              viewBox="0 0 24 24"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                fill-rule="evenodd"
                                clip-rule="evenodd"
                                d="M9.98461 4.12252C10.1524 4.34396 10.1539 4.64961 9.98828 4.87268C9.18117 5.95948 8.70389 7.30478 8.70389 8.76337C8.70389 12.3713 11.6287 15.2962 15.2367 15.2962C16.6953 15.2962 18.0406 14.8189 19.1274 14.0118C19.3504 13.8461 19.6561 13.8476 19.8775 14.0154C20.099 14.1833 20.183 14.4771 20.0838 14.7367C18.8799 17.8864 15.8293 20.125 12.2543 20.125C7.62652 20.125 3.875 16.3735 3.875 11.7458C3.875 8.17073 6.11362 5.12011 9.26337 3.91623C9.52291 3.81703 9.81678 3.90109 9.98461 4.12252ZM7.93017 6.07692C6.22465 7.37992 5.125 9.43488 5.125 11.7458C5.125 15.6832 8.31688 18.875 12.2543 18.875C14.5652 18.875 16.6201 17.7754 17.9231 16.0699C17.0856 16.3779 16.1805 16.5462 15.2367 16.5462C10.9384 16.5462 7.45389 13.0617 7.45389 8.76337C7.45389 7.81955 7.62211 6.91449 7.93017 6.07692Z"
                                fill="#8566FF"
                              ></path>
                            </svg>
                          </div>
                          <div>
                            <div class="card-animation-popup-title">
                              {" "}
                              Worst Months: Dec, Jan, Feb
                            </div>
                            <div class="card-animation-popup-description">
                              {" "}
                              It is not the right time to focus on this keyword.
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="card-text">
                      <div class="card-title"> Seasonality</div>
                      <div class="card-description">
                        {" "}
                        Spot when any keywords' seasonality is trending and when
                        losing
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  class="card"
                  style={{ "--mouse-x": "145px", "--mouse-y": "372.5px" }}
                >
                  <div class="card-inner magical-borders-inner">
                    <img
                      height="1"
                      width="1"
                      alt="alt_text_3"
                      src="https://wope.com/images/cards/card-gridline.png"
                      class="lazy-image card-gridline lazy-image-loaded"
                    />
                    <div class="card-animation">
                      <div class="card-animation-mobile">
                        <div class="card-animation-mobile-chart">
                          <div class="card-animation-mobile-chart-inner">
                            <img
                              height="1"
                              width="1"
                              alt="alt_text_10"
                              src="https://wope.com/images/cards/card-mobile-chart.png"
                              class="lazy-image lazy-image-loaded"
                            />
                          </div>
                        </div>
                        <div class="card-animation-mobile-lights">
                          <img
                            height="1"
                            width="1"
                            alt="alt_text_lights_0"
                            src="https://wope.com/images/cards/card-mobile-lights-1.png"
                            class="lazy-image lazy-image-loaded"
                          />
                          <img
                            height="1"
                            width="1"
                            alt="alt_text_lights_1"
                            src="https://wope.com/images/cards/card-mobile-lights-2.png"
                            class="lazy-image lazy-image-loaded"
                          />
                        </div>
                        <div class="card-animation-mobile-high-season">
                          <div class="card-animation-mobile-high-season-item">
                            <span>Desktop</span>
                          </div>
                          <div class="card-animation-mobile-high-season-item">
                            <span>Mobile</span>
                          </div>
                        </div>
                        <div class="card-animation-big-popup">
                          <div class="card-animation-big-popup-title">
                            Mobile Issue
                          </div>
                          <div class="card-animation-big-popup-description">
                            The landing page has mobile friendlyness issues.
                            Focus on them to avoid problems.
                          </div>
                          <div class="card-animation-big-popup-footer">
                            <div class="card-animation-big-popup-footer-item">
                              <svg
                                width="17"
                                height="16"
                                viewBox="0 0 17 16"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  fill-rule="evenodd"
                                  clip-rule="evenodd"
                                  d="M5 13.5C5 13.2239 5.22386 13 5.5 13H11.5C11.7761 13 12 13.2239 12 13.5C12 13.7761 11.7761 14 11.5 14H5.5C5.22386 14 5 13.7761 5 13.5Z"
                                  fill="#713DFF"
                                ></path>
                                <path
                                  fill-rule="evenodd"
                                  clip-rule="evenodd"
                                  d="M5.97812 2H11.0219C11.7034 2 12.2454 1.99999 12.6827 2.03572C13.1305 2.07231 13.5123 2.14884 13.862 2.32698C14.4265 2.6146 14.8854 3.07354 15.173 3.63803C15.3512 3.98765 15.4277 4.36949 15.4643 4.81729C15.5 5.25458 15.5 5.79659 15.5 6.47811V7.52189C15.5 8.20341 15.5 8.74542 15.4643 9.18271C15.4277 9.63051 15.3512 10.0123 15.173 10.362C14.8854 10.9265 14.4265 11.3854 13.862 11.673C13.5123 11.8512 13.1305 11.9277 12.6827 11.9643C12.2454 12 11.7034 12 11.0219 12H5.97811C5.29659 12 4.75458 12 4.31729 11.9643C3.86949 11.9277 3.48765 11.8512 3.13803 11.673C2.57354 11.3854 2.1146 10.9265 1.82698 10.362C1.64884 10.0123 1.57231 9.63051 1.53572 9.18271C1.49999 8.74542 1.5 8.2034 1.5 7.52188V6.47812C1.5 5.7966 1.49999 5.25458 1.53572 4.81729C1.57231 4.36949 1.64884 3.98765 1.82698 3.63803C2.1146 3.07354 2.57354 2.6146 3.13803 2.32698C3.48765 2.14884 3.86949 2.07231 4.31729 2.03572C4.75458 1.99999 5.2966 2 5.97812 2ZM4.39872 3.0324C4.01276 3.06393 3.77717 3.12365 3.59202 3.21799C3.21569 3.40973 2.90973 3.71569 2.71799 4.09202C2.62365 4.27717 2.56393 4.51276 2.5324 4.89872C2.50039 5.29052 2.5 5.79168 2.5 6.5V7.5C2.5 8.20832 2.50039 8.70948 2.5324 9.10128C2.56393 9.48724 2.62365 9.72283 2.71799 9.90798C2.90973 10.2843 3.21569 10.5903 3.59202 10.782C3.77717 10.8764 4.01276 10.9361 4.39872 10.9676C4.79052 10.9996 5.29168 11 6 11H11C11.7083 11 12.2095 10.9996 12.6013 10.9676C12.9872 10.9361 13.2228 10.8764 13.408 10.782C13.7843 10.5903 14.0903 10.2843 14.282 9.90798C14.3764 9.72283 14.4361 9.48724 14.4676 9.10128C14.4996 8.70948 14.5 8.20832 14.5 7.5V6.5C14.5 5.79168 14.4996 5.29052 14.4676 4.89872C14.4361 4.51276 14.3764 4.27717 14.282 4.09202C14.0903 3.71569 13.7843 3.40973 13.408 3.21799C13.2228 3.12365 12.9872 3.06393 12.6013 3.0324C12.2095 3.00039 11.7083 3 11 3H6C5.29168 3 4.79052 3.00039 4.39872 3.0324Z"
                                  fill="#713DFF"
                                ></path>
                              </svg>
                              <div class="card-animation-big-popup-footer-item-label">
                                Desktop
                              </div>
                              <div class="card-animation-big-popup-footer-item-value">
                                3
                              </div>
                            </div>
                            <div class="card-animation-big-popup-footer-item">
                              <svg
                                width="17"
                                height="16"
                                viewBox="0 0 17 16"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  fill-rule="evenodd"
                                  clip-rule="evenodd"
                                  d="M7 3.5C7 3.22386 7.22386 3 7.5 3H9.5C9.77614 3 10 3.22386 10 3.5C10 3.77614 9.77614 4 9.5 4H7.5C7.22386 4 7 3.77614 7 3.5Z"
                                  fill="#FAAF46"
                                ></path>
                                <path
                                  fill-rule="evenodd"
                                  clip-rule="evenodd"
                                  d="M8.47812 1.5H8.52188C9.2034 1.5 9.74542 1.49999 10.1827 1.53572C10.6305 1.57231 11.0123 1.64884 11.362 1.82698C11.9265 2.1146 12.3854 2.57354 12.673 3.13803C12.8512 3.48765 12.9277 3.86949 12.9643 4.31729C13 4.75458 13 5.29659 13 5.97811V10.0219C13 10.7034 13 11.2454 12.9643 11.6827C12.9277 12.1305 12.8512 12.5123 12.673 12.862C12.3854 13.4265 11.9265 13.8854 11.362 14.173C11.0123 14.3512 10.6305 14.4277 10.1827 14.4643C9.74542 14.5 9.20341 14.5 8.52189 14.5H8.47811C7.79659 14.5 7.25458 14.5 6.81729 14.4643C6.36949 14.4277 5.98765 14.3512 5.63803 14.173C5.07354 13.8854 4.6146 13.4265 4.32698 12.862C4.14884 12.5123 4.07231 12.1305 4.03572 11.6827C3.99999 11.2454 4 10.7034 4 10.0219V5.97812C4 5.2966 3.99999 4.75458 4.03572 4.31729C4.07231 3.86949 4.14884 3.48765 4.32698 3.13803C4.6146 2.57354 5.07354 2.1146 5.63803 1.82698C5.98765 1.64884 6.36949 1.57231 6.81729 1.53572C7.25458 1.49999 7.7966 1.5 8.47812 1.5ZM6.89872 2.5324C6.51276 2.56393 6.27717 2.62365 6.09202 2.71799C5.71569 2.90973 5.40973 3.21569 5.21799 3.59202C5.12365 3.77717 5.06393 4.01276 5.0324 4.39872C5.00039 4.79052 5 5.29168 5 6V10C5 10.7083 5.00039 11.2095 5.0324 11.6013C5.06393 11.9872 5.12365 12.2228 5.21799 12.408C5.40973 12.7843 5.71569 13.0903 6.09202 13.282C6.27717 13.3764 6.51276 13.4361 6.89872 13.4676C7.29052 13.4996 7.79168 13.5 8.5 13.5C9.20832 13.5 9.70948 13.4996 10.1013 13.4676C10.4872 13.4361 10.7228 13.3764 10.908 13.282C11.2843 13.0903 11.5903 12.7843 11.782 12.408C11.8764 12.2228 11.9361 11.9872 11.9676 11.6013C11.9996 11.2095 12 10.7083 12 10V6C12 5.29168 11.9996 4.79052 11.9676 4.39872C11.9361 4.01276 11.8764 3.77717 11.782 3.59202C11.5903 3.21569 11.2843 2.90973 10.908 2.71799C10.7228 2.62365 10.4872 2.56393 10.1013 2.5324C9.70948 2.50039 9.20832 2.5 8.5 2.5C7.79168 2.5 7.29052 2.50039 6.89872 2.5324Z"
                                  fill="#FAAF46"
                                ></path>
                              </svg>
                              <div class="card-animation-big-popup-footer-item-label">
                                Mobile
                              </div>
                              <div class="card-animation-big-popup-footer-item-value">
                                14
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="card-text">
                      <div class="card-title">Mobile Issue Detector</div>
                      <div class="card-description">
                        {" "}
                        When you have issues on mobile pages, we find them out
                        by ranking differences.
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  class="card"
                  style={{ "--mouse-x": "-279px", "--mouse-y": "372.5px" }}
                >
                  <div class="card-inner magical-borders-inner">
                    <img
                      height="1"
                      width="1"
                      alt="alt_text_3"
                      src="https://wope.com/images/cards/card-gridline.png"
                      class="lazy-image card-gridline lazy-image-loaded"
                    />
                    <div class="card-animation">
                      <div class="card-animation-spotter">
                        <div class="card-animation-spotter-chart">
                          <div class="card-animation-spotter-chart-item"></div>
                          <div class="card-animation-spotter-chart-item"></div>
                          <div class="card-animation-spotter-chart-item"></div>
                          <div class="card-animation-spotter-chart-item"></div>
                          <div class="card-animation-spotter-chart-item"></div>
                          <div class="card-animation-spotter-chart-item"></div>
                          <div class="card-animation-spotter-chart-item"></div>
                          <div class="card-animation-spotter-chart-item"></div>
                          <div class="card-animation-spotter-chart-item"></div>
                          <div class="card-animation-spotter-chart-item"></div>
                          <div class="card-animation-spotter-chart-item"></div>
                          <div class="card-animation-spotter-chart-item"></div>
                          <div class="card-animation-spotter-chart-item"></div>
                          <div class="card-animation-spotter-chart-item"></div>
                          <div class="card-animation-spotter-chart-item"></div>
                          <div class="card-animation-spotter-chart-item"></div>
                          <div class="card-animation-spotter-chart-item"></div>
                          <div class="card-animation-spotter-chart-item"></div>
                        </div>
                        <div class="card-animation-popup">
                          <div class="card-animation-popup-icon">
                            <svg
                              width="24"
                              height="24"
                              viewBox="0 0 24 24"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <rect
                                width="24"
                                height="24"
                                rx="4"
                                fill="white"
                                fill-opacity="0.02"
                              ></rect>
                              <path
                                d="M13.75 6.75C13.4278 6.75 13.1667 7.01117 13.1667 7.33333C13.1667 7.6555 13.4278 7.91667 13.75 7.91667H17.25C17.5722 7.91667 17.8333 7.6555 17.8333 7.33333C17.8333 7.01117 17.5722 6.75 17.25 6.75H13.75Z"
                                fill="#F4F1F9"
                              ></path>
                              <path
                                d="M10.8333 14.3333C10.8333 14.6555 10.5722 14.9167 10.25 14.9167H6.75C6.42783 14.9167 6.16667 14.6555 6.16667 14.3333C6.16667 14.0112 6.42783 13.75 6.75 13.75H10.25C10.5722 13.75 10.8333 14.0112 10.8333 14.3333Z"
                                fill="#F4F1F9"
                              ></path>
                              <path
                                d="M13.75 9.08333C13.4278 9.08333 13.1667 9.3445 13.1667 9.66667C13.1667 9.98883 13.4278 10.25 13.75 10.25H17.25C17.5722 10.25 17.8333 9.98883 17.8333 9.66667C17.8333 9.3445 17.5722 9.08333 17.25 9.08333H13.75Z"
                                fill="#F4F1F9"
                              ></path>
                              <path
                                d="M10.8333 16.6667C10.8333 16.9888 10.5722 17.25 10.25 17.25H6.75C6.42783 17.25 6.16667 16.9888 6.16667 16.6667C6.16667 16.3445 6.42783 16.0833 6.75 16.0833H10.25C10.5722 16.0833 10.8333 16.3445 10.8333 16.6667Z"
                                fill="#F4F1F9"
                              ></path>
                              <path
                                fill-rule="evenodd"
                                clip-rule="evenodd"
                                d="M14.9167 12C13.3058 12 12 13.3058 12 14.9167C12 16.5275 13.3058 17.8333 14.9167 17.8333C15.5109 17.8333 16.0641 17.6552 16.5251 17.35L18.0042 18.8291C18.232 19.057 18.6013 19.057 18.8291 18.8291C19.057 18.6013 19.057 18.232 18.8291 18.0042L17.35 16.5251C17.6552 16.0641 17.8333 15.5109 17.8333 14.9167C17.8333 13.3058 16.5275 12 14.9167 12ZM13.1667 14.9167C13.1667 13.9502 13.9502 13.1667 14.9167 13.1667C15.8832 13.1667 16.6667 13.9502 16.6667 14.9167C16.6667 15.4001 16.4714 15.8368 16.1541 16.1541C15.8368 16.4714 15.4001 16.6667 14.9167 16.6667C13.9502 16.6667 13.1667 15.8832 13.1667 14.9167Z"
                                fill="#F4F1F9"
                              ></path>
                              <path
                                d="M5 8.5C5 7.4128 5 6.8692 5.17761 6.44041C5.41443 5.86867 5.86867 5.41443 6.44041 5.17761C6.8692 5 7.4128 5 8.5 5C9.5872 5 10.1308 5 10.5596 5.17761C11.1313 5.41443 11.5856 5.86867 11.8224 6.44041C12 6.8692 12 7.4128 12 8.5C12 9.5872 12 10.1308 11.8224 10.5596C11.5856 11.1313 11.1313 11.5856 10.5596 11.8224C10.1308 12 9.5872 12 8.5 12C7.4128 12 6.8692 12 6.44041 11.8224C5.86867 11.5856 5.41443 11.1313 5.17761 10.5596C5 10.1308 5 9.5872 5 8.5Z"
                                fill="#F4F1F9"
                              ></path>
                              <rect
                                x="0.5"
                                y="0.5"
                                width="23"
                                height="23"
                                rx="3.5"
                                stroke="white"
                                stroke-opacity="0.04"
                              ></rect>
                            </svg>
                          </div>
                          <div>
                            <div class="card-animation-popup-title">
                              Keyword: iPhone 14 Pro Max
                            </div>
                            <div class="card-animation-popup-description">
                              Find the best moments to celebrate!
                            </div>
                          </div>
                        </div>
                        <div class="card-animation-big-popup">
                          <div class="card-animation-big-popup-title">
                            Best Rank
                          </div>
                          <div class="card-animation-big-popup-description">
                            Reached your peak moment from the day you start to
                            track this keyword.
                          </div>
                          <div class="card-animation-big-popup-footer">
                            <div class="card-animation-big-popup-footer-item">
                              <svg
                                width="17"
                                height="16"
                                viewBox="0 0 17 16"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  fill-rule="evenodd"
                                  clip-rule="evenodd"
                                  d="M8.5 2C5.18629 2 2.5 4.68629 2.5 8C2.5 11.3137 5.18629 14 8.5 14C11.8137 14 14.5 11.3137 14.5 8C14.5 4.68629 11.8137 2 8.5 2ZM1.5 8C1.5 4.13401 4.63401 1 8.5 1C12.366 1 15.5 4.13401 15.5 8C15.5 11.866 12.366 15 8.5 15C4.63401 15 1.5 11.866 1.5 8ZM11.8536 4.64645C12.0488 4.84171 12.0488 5.15829 11.8536 5.35355L9.20711 8L9.35355 8.14645C9.54882 8.34171 9.54882 8.65829 9.35355 8.85355C9.15829 9.04882 8.84171 9.04882 8.64645 8.85355L8.5 8.70711L8.35355 8.85355C8.15829 9.04882 7.84171 9.04882 7.64645 8.85355C7.45118 8.65829 7.45118 8.34171 7.64645 8.14645L7.79289 8L5.64645 5.85355C5.45118 5.65829 5.45118 5.34171 5.64645 5.14645C5.84171 4.95118 6.15829 4.95118 6.35355 5.14645L8.5 7.29289L11.1464 4.64645C11.3417 4.45118 11.6583 4.45118 11.8536 4.64645Z"
                                  fill="#817B8E"
                                ></path>
                              </svg>
                              <div class="card-animation-big-popup-footer-item-label">
                                First Rank
                              </div>
                              <div class="card-animation-big-popup-footer-item-value">
                                12
                              </div>
                            </div>
                            <div class="card-animation-big-popup-footer-item">
                              <svg
                                width="17"
                                height="16"
                                viewBox="0 0 17 16"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  fill-rule="evenodd"
                                  clip-rule="evenodd"
                                  d="M8.5 1C4.63401 1 1.5 4.13401 1.5 8C1.5 11.866 4.63401 15 8.5 15C12.366 15 15.5 11.866 15.5 8C15.5 4.13401 12.366 1 8.5 1ZM2.5 8C2.5 4.68629 5.18629 2 8.5 2C11.8137 2 14.5 4.68629 14.5 8C14.5 11.3137 11.8137 14 8.5 14C5.18629 14 2.5 11.3137 2.5 8Z"
                                  fill="#BAB3FF"
                                ></path>
                                <path
                                  d="M8.3048 4.13174C8.37546 3.95609 8.62454 3.95609 8.69519 4.13174L9.53879 6.22894C9.56888 6.30374 9.6392 6.35474 9.71976 6.36019L11.9784 6.51308C12.1675 6.52589 12.2445 6.76237 12.099 6.88373L10.3618 8.33276C10.2998 8.38444 10.2729 8.46697 10.2926 8.54514L10.8449 10.7368C10.8912 10.9204 10.6897 11.0666 10.5291 10.9659L8.61184 9.76426C8.54346 9.7214 8.45654 9.7214 8.38816 9.76426L6.47088 10.9659C6.3103 11.0666 6.10879 10.9204 6.15505 10.7368L6.70735 8.54514C6.72705 8.46697 6.70019 8.38444 6.63823 8.33276L4.90099 6.88373C4.75548 6.76237 4.83245 6.52589 5.02162 6.51308L7.28024 6.36019C7.36079 6.35474 7.43111 6.30374 7.4612 6.22894L8.3048 4.13174Z"
                                  fill="#BAB3FF"
                                ></path>
                              </svg>
                              <div class="card-animation-big-popup-footer-item-label">
                                Best Rank
                              </div>
                              <div class="card-animation-big-popup-footer-item-value">
                                3
                              </div>
                            </div>
                          </div>
                        </div>
                        <img
                          height="1"
                          width="1"
                          alt="alt_text_16"
                          src="https://wope.com/images/cards/card-spotter-lights.png"
                          class="lazy-image card-animation-spotter-lights lazy-image-loaded"
                        />
                      </div>
                    </div>
                    <div class="card-text">
                      <div class="card-title">Best Rank Spotter</div>
                      <div class="card-description">
                        Analyzes the history of ranking and letting you know
                        when you spot the best rank.
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  class="card"
                  style={{ "--mouse-x": "569px", "--mouse-y": "44.5px" }}
                >
                  <div class="card-inner magical-borders-inner">
                    <img
                      height="1"
                      width="1"
                      alt="alt_text_3"
                      src="https://wope.com/images/cards/card-gridline.png"
                      class="lazy-image card-gridline lazy-image-loaded"
                    />
                    <div class="card-animation">
                      <div class="card-animation-cannibalization">
                        <div class="card-animation-cannibalization-chart">
                          <div class="card-animation-cannibalization-chart-inner">
                            <div class="card-animation-cannibalization-chart-image">
                              <img
                                height="1"
                                width="1"
                                alt="alt_text_4"
                                src="https://wope.com/images/cards/card-cannibalization-chart-1.png"
                                class="lazy-image lazy-image-loaded"
                              />
                            </div>
                            <div class="card-animation-cannibalization-chart-image">
                              <img
                                height="1"
                                width="1"
                                alt="alt_text_5"
                                src="https://wope.com/images/cards/card-cannibalization-chart-2.png"
                                class="lazy-image lazy-image-loaded"
                              />
                            </div>
                          </div>
                        </div>
                        <div>
                          <div class="card-animation-cannibalization-box">
                            <div class="card-animation-cannibalization-box-ghost"></div>
                            <div class="card-animation-cannibalization-box-ghost"></div>
                            <div class="card-animation-cannibalization-box-ghost"></div>
                            <div class="card-animation-cannibalization-box-ghost"></div>
                          </div>
                          <div class="card-animation-cannibalization-box">
                            <div class="card-animation-cannibalization-box-ghost"></div>
                            <div class="card-animation-cannibalization-box-ghost"></div>
                            <div class="card-animation-cannibalization-box-ghost"></div>
                            <div class="card-animation-cannibalization-box-ghost"></div>
                          </div>
                        </div>
                        <img
                          height="1"
                          width="1"
                          alt="alt_text_6"
                          src="images/card-cannibalization-lights.png"
                          class="lazy-image card-animation-cannibalization-lights lazy-image-loaded"
                        />
                      </div>
                    </div>
                    <div class="card-text">
                      <div class="card-title">Cannibalization Finder</div>
                      <div class="card-description">
                        The pages that create cannibalization can be merged for
                        a quick fix to regain positions.
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  class="card"
                  style={{ "--mouse-x": "145px", "--mouse-y": "44.5px" }}
                >
                  <div class="card-inner magical-borders-inner">
                    <img
                      height="1"
                      width="1"
                      alt="alt_text_3"
                      src="https://wope.com/images/cards/card-gridline.png"
                      class="lazy-image card-gridline lazy-image-loaded"
                    />

                    <div class="card-animation">
                      <div class="card-animation-market">
                        <img
                          height="1"
                          width="1"
                          alt="alt_text_7"
                          src="images/card-market-lights.png"
                          class="lazy-image card-animation-market-lights lazy-image-loaded"
                        />
                        <div class="card-animation-market-background-borders">
                          <div class="card-animation-market-background-borders-inner">
                            <div class="card-animation-market-background-border"></div>
                            <div class="card-animation-market-background-border"></div>
                            <div class="card-animation-market-background-border"></div>
                            <div class="card-animation-market-background-border"></div>
                            <div class="card-animation-market-background-border"></div>
                            <div class="card-animation-market-background-border"></div>
                            <div class="card-animation-market-background-border"></div>
                          </div>
                        </div>
                        <div class="card-animation-market-circle">
                          <img
                            height="1"
                            width="1"
                            alt="alt_text_8"
                            src="https://wope.com/images/cards/card-market-circle.png"
                            class="lazy-image lazy-image-loaded"
                          />
                          <img
                            height="1"
                            width="1"
                            alt="alt_text_9"
                            src="https://wope.com/images/cards/card-market-circle.png"
                            class="lazy-image card-animation-market-circle-blur lazy-image-loaded"
                          />
                          <div class="card-animation-market-circle-borders">
                            <div class="card-animation-market-circle-border"></div>
                            <div class="card-animation-market-circle-border"></div>
                            <div class="card-animation-market-circle-border"></div>
                            <div class="card-animation-market-circle-border"></div>
                            <div class="card-animation-market-circle-border"></div>
                            <div class="card-animation-market-circle-border"></div>
                            <div class="card-animation-market-circle-border"></div>
                          </div>
                          <div class="card-animation-market-circle-middle"></div>
                        </div>
                        <div class="card-animation-market-pointers">
                          <div class="card-animation-market-pointer"></div>
                          <div class="card-animation-market-pointer"></div>
                          <div class="card-animation-market-pointer"></div>
                          <div class="card-animation-market-pointer"></div>
                          <div class="card-animation-market-pointer"></div>
                          <div class="card-animation-market-pointer"></div>
                          <div class="card-animation-market-pointer"></div>
                        </div>
                        <div class="card-animation-market-domains">
                          <div class="card-animation-market-domain">
                            etsy.com
                          </div>
                          <div class="card-animation-market-domain">
                            ebay.com
                          </div>
                          <div class="card-animation-market-domain">
                            amazon.com
                          </div>
                        </div>
                        <div class="card-animation-market-text">
                          <div class="card-animation-market-text-label">
                            MARKET Traffic
                          </div>
                          <div class="card-animation-market-text-value">
                            240K
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="card-text">
                      <div class="card-title">
                        Market Intelligence Based on AI
                      </div>
                      <div class="card-description">
                        The best market intelligence is provided by SERP
                        feature-based CTR calculation.
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="cards-description">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum
            repellat officiis blanditiis praesentium hic nihil voluptates, fugit
            asperiores laudantium rerum molestias quibusdam commodi aut facere
            sed nostrum porro ea. Omnis?
          </div>
        </div>
      </section>
      
      <section class="technical">
        <div class="container-sm">
          <div class="section-header">
            <div class="section-header-badge">Features</div>
            <h2 class="section-header-title">
              <div class="section-header-title-desktop">
                <span>Lorem ipsum dolor sit amet consectetur</span>
                <span></span>
              </div>
              <div class="section-header-title-mobile">
                <span>Lorem ipsum dolor </span>
                <span>sit amet consectetur</span>
                <span>adipisicing elit.</span>
              </div>
            </h2>
          </div>
          <div class="magical-borders">
            <div class="magical-borders-content technical-boxes">
              <div
                class="technical-excel"
                style={{
                  "--mouse-x": "350px",
                  "--mouse-y": "113.90625px",
                }}
              >
                <div class="technical-excel-inner magical-borders-inner">
                  <img
                    height="1"
                    width="1"
                    alt="alt_text_35"
                    src="https://wope.com/images/technical/technical-excel-lights.png"
                  />
                  <img
                    height="1"
                    width="1"
                    alt="alt_text_36"
                    src="https://wope.com/images/technical/technical-excel-background.png"
                    class="lazy-image technical-excel-background lazy-image-loaded"
                  />
                  <div class="technical-excel-text">
                    Lorem <br />
                    Lorem Lorem
                  </div>
                </div>
              </div>
              <div
                class="technical-automation"
                style={{
                  "--mouse-x": "339px",
                  "--mouse-y": "211.90625px",
                  /* other styles or component content */
                }}
              >
                <div class="technical-automation-inner magical-borders-inner">
                  <div class="technical-excel-text">
                    Lorem <br />
                    Lorem Lorem
                  </div>
                </div>
              </div>
              <div
                class="technical-lightning"
                style={{
                  "--mouse-x": "353px",
                  "--mouse-y": "35.40625px",
                  /* other styles or component content */
                }}
              >
                <div class="technical-lightning-inner magical-borders-inner">
                  <img
                    height="1"
                    width="1"
                    alt="alt_text_39"
                    src="https://wope.com/images/technical/technical-lightning-background.png"
                    class="lazy-image technical-lightning-background lazy-image-loaded"
                  />
                  <div
                    style={{
                      "--background-image":
                        'url("https://wope.com/images/technical/technical-lightning-mask.png")',
                    }}
                    class="lazy-background-image lazy-background-image-maskImage technical-lightning-animation lazy-background-image-loaded"
                  >
                    <div></div>
                  </div>
                  <div class="magical-borders-content">
                    <div
                      style={{
                        "--background-image":
                          'url("https://wope.com/images/technical/technical-lightning-mask.png")',
                        "--mouse-x": "348px",
                        "--mouse-y": "18.40625px",
                      }}
                      class="lazy-background-image lazy-background-image-maskImage technical-lightning-mask-hover lazy-background-image-loaded"
                    ></div>
                  </div>
                  <img
                    height="1"
                    width="1"
                    alt="alt_text_40"
                    src="https://wope.com/images/technical/technical-lightning-text.png"
                    class="lazy-image technical-lightning-text lazy-image-loaded"
                  />
                  <div
                    id="star-animation-152"
                    class="star-animation star-animation-loaded"
                  >
                    <canvas
                      data-generated="true"
                      style={{
                        width: "100%",
                        height: "100%",
                        pointerEvents: "none",
                      }}
                      aria-hidden="true"
                      width="716"
                      height="1184"
                    ></canvas>
                  </div>
                </div>
              </div>
              <div class="technical-tracking">
                <div class="technical-tracking-inner magical-borders-inner">
                  <div class="technical-tracking-title">
                    <span>Tracking</span>
                    <span class="technical-tracking-title-big">SEO</span>
                    <span>in Single Project</span>
                  </div>
                  <img
                    height="1"
                    width="1"
                    alt="alt_text_44"
                    src="https://wope.com/images/technical/technical-tracking-background.png"
                    class="lazy-image lazy-image-hidden technical-tracking-background"
                  />
                  <img
                    height="1"
                    width="1"
                    alt="alt_text_45"
                    src="https://wope.com/images/technical/technical-tracking-lines.png"
                    class="lazy-image lazy-image-hidden technical-tracking-lines"
                  />
                  <img
                    height="1"
                    width="1"
                    alt="alt_text_46"
                    src="https://wope.com/images/technical/technical-tracking-light.png"
                    class="lazy-image lazy-image-hidden technical-tracking-light"
                  />
                  <div
                    style={{ "--background-image": "unset" }}
                    class="lazy-background-image lazy-background-image-maskImage lazy-background-image-hidden technical-tracking-circles-wrapper"
                  >
                    <div class="technical-tracking-circles">
                      <div
                        style={{
                          top: "0%",
                          left: "0%",
                          width: "100%",
                          height: "100%",
                          animationDelay: "3.7s",
                        }}
                      ></div>
                      <div
                        style={{
                          top: "1.3383720930232528%",
                          left: "1.3383720930232528%",
                          width: "97.3232558139535%",
                          height: "97.3232558139535%",
                          animationDelay: "3.6s",
                        }}
                      ></div>
                      <div
                        style={{
                          top: "2.6534883720930225%",
                          left: "2.6534883720930225%",
                          width: "94.69302325581396%",
                          height: "94.69302325581396%",
                          animationDelay: "3.5s",
                        }}
                      ></div>
                      <div
                        style={{
                          top: "3.945348837209302%",
                          left: "3.945348837209302%",
                          width: "92.1093023255814%",
                          height: "92.1093023255814%",
                          animationDelay: "3.4000000000000004s",
                        }}
                      ></div>
                      <div
                        style={{
                          top: "5.213953488372091%",
                          left: "5.213953488372091%",
                          width: "89.57209302325582%",
                          height: "89.57209302325582%",
                          animationDelay: "3.3000000000000003s",
                        }}
                      ></div>
                      <div
                        style={{
                          top: "6.4593023255813975%",
                          left: "6.4593023255813975%",
                          width: "87.0813953488372%",
                          height: "87.0813953488372%",
                          animationDelay: "3.2s",
                        }}
                      ></div>
                      <div
                        style={{
                          top: "7.6813953488372135%",
                          left: "7.6813953488372135%",
                          width: "84.63720930232557%",
                          height: "84.63720930232557%",
                          animationDelay: "3.1s",
                        }}
                      ></div>
                      <div
                        style={{
                          top: "8.88023255813954%",
                          left: "8.88023255813954%",
                          width: "82.23953488372092%",
                          height: "82.23953488372092%",
                          animationDelay: "3s",
                        }}
                      ></div>
                      <div
                        style={{
                          top: "10.055813953488375%",
                          left: "10.055813953488375%",
                          width: "79.88837209302325%",
                          height: "79.88837209302325%",
                          animationDelay: "2.9000000000000004s",
                        }}
                      ></div>
                      <div
                        style={{
                          top: "11.20813953488372%",
                          left: "11.20813953488372%",
                          width: "77.58372093023256%",
                          height: "77.58372093023256%",
                          animationDelay: "2.8000000000000003s",
                        }}
                      ></div>
                      <div
                        style={{
                          top: "12.337209302325583%",
                          left: "12.337209302325583%",
                          width: "75.32558139534883%",
                          height: "75.32558139534883%",
                          animationDelay: "2.7s",
                        }}
                      ></div>
                      <div
                        style={{
                          top: "13.443023255813955%",
                          left: "13.443023255813955%",
                          width: "73.11395348837209%",
                          height: "73.11395348837209%",
                          animationDelay: "2.6s",
                        }}
                      ></div>
                      <div
                        style={{
                          top: "14.525581395348837%",
                          left: "14.525581395348837%",
                          width: "70.94883720930233%",
                          height: "70.94883720930233%",
                          animationDelay: "2.5s",
                        }}
                      ></div>
                      <div
                        style={{
                          top: "15.584883720930236%",
                          left: "15.584883720930236%",
                          width: "68.83023255813953%",
                          height: "68.83023255813953%",
                          animationDelay: "2.4000000000000004s",
                        }}
                      ></div>
                      <div
                        style={{
                          top: "16.620930232558138%",
                          left: "16.620930232558138%",
                          width: "66.75813953488372%",
                          height: "66.75813953488372%",
                          animationDelay: "2.3s",
                        }}
                      ></div>
                      <div
                        style={{
                          top: "17.633720930232556%",
                          left: "17.633720930232556%",
                          width: "64.73255813953489%",
                          height: "64.73255813953489%",
                          animationDelay: "2.2s",
                        }}
                      ></div>
                      <div
                        style={{
                          top: "18.62325581395349%",
                          left: "18.62325581395349%",
                          width: "62.75348837209302%",
                          height: "62.75348837209302%",
                          animationDelay: "2.1s",
                        }}
                      ></div>
                      <div
                        style={{
                          top: "19.589534883720933%",
                          left: "19.589534883720933%",
                          width: "60.82093023255813%",
                          height: "60.82093023255813%",
                          animationDelay: "2s",
                        }}
                      ></div>
                      <div
                        style={{
                          top: "20.532558139534885%",
                          left: "20.532558139534885%",
                          width: "58.93488372093023%",
                          height: "58.93488372093023%",
                          animationDelay: "1.9000000000000001s",
                        }}
                      ></div>
                      <div
                        style={{
                          top: "21.45232558139535%",
                          left: "21.45232558139535%",
                          width: "57.0953488372093%",
                          height: "57.0953488372093%",
                          animationDelay: "1.8s",
                        }}
                      ></div>
                      <div
                        style={{
                          top: "22.348837209302328%",
                          left: "22.348837209302328%",
                          width: "55.302325581395344%",
                          height: "55.302325581395344%",
                          animationDelay: "1.7000000000000002s",
                        }}
                      ></div>
                      <div
                        style={{
                          top: "23.222093023255816%",
                          left: "23.222093023255816%",
                          width: "53.55581395348837%",
                          height: "53.55581395348837%",
                          animationDelay: "1.6s",
                        }}
                      ></div>
                      <div
                        style={{
                          top: "24.072093023255817%",
                          left: "24.072093023255817%",
                          width: "51.855813953488365%",
                          height: "51.855813953488365%",
                          animationDelay: "1.5s",
                        }}
                      ></div>
                      <div
                        style={{
                          top: "24.89883720930233%",
                          left: "24.89883720930233%",
                          width: "50.20232558139534%",
                          height: "50.20232558139534%",
                          animationDelay: "1.4s",
                        }}
                      ></div>
                      <div
                        style={{
                          top: "25.70232558139535%",
                          left: "25.70232558139535%",
                          width: "48.5953488372093%",
                          height: "48.5953488372093%",
                          animationDelay: "1.2999999999999998s",
                        }}
                      ></div>
                      <div
                        style={{
                          top: "26.482558139534884%",
                          left: "26.482558139534884%",
                          width: "47.03488372093023%",
                          height: "47.03488372093023%",
                          animationDelay: "1.2000000000000002s",
                        }}
                      ></div>
                      <div
                        style={{
                          top: "27.23953488372093%",
                          left: "27.23953488372093%",
                          width: "45.52093023255814%",
                          height: "45.52093023255814%",
                          animationDelay: "1.1s",
                        }}
                      ></div>
                      <div
                        style={{
                          top: "27.973255813953486%",
                          left: "27.973255813953486%",
                          width: "44.05348837209303%",
                          height: "44.05348837209303%",
                          animationDelay: "1s",
                        }}
                      ></div>
                      <div
                        style={{
                          top: "28.683720930232557%",
                          left: "28.683720930232557%",
                          width: "42.632558139534886%",
                          height: "42.632558139534886%",
                          animationDelay: "0.8999999999999999s",
                        }}
                      ></div>
                      <div
                        style={{
                          top: "29.370930232558145%",
                          left: "29.370930232558145%",
                          width: "41.25813953488371%",
                          height: "41.25813953488371%",
                          animationDelay: "0.7999999999999998s",
                        }}
                      ></div>
                      <div
                        style={{
                          top: "30.034883720930235%",
                          left: "30.034883720930235%",
                          width: "39.93023255813953%",
                          height: "39.93023255813953%",
                          animationDelay: "0.7000000000000002s",
                        }}
                      ></div>
                      <div
                        style={{
                          top: "30.67558139534884%",
                          left: "30.67558139534884%",
                          width: "38.64883720930232%",
                          height: "38.64883720930232%",
                          animationDelay: "0.6000000000000001s",
                        }}
                      ></div>
                      <div
                        style={{
                          top: "31.293023255813956%",
                          left: "31.293023255813956%",
                          width: "37.41395348837209%",
                          height: "37.41395348837209%",
                          animationDelay: "0.5s",
                        }}
                      ></div>
                      <div
                        style={{
                          top: "31.887209302325584%",
                          left: "31.887209302325584%",
                          width: "36.22558139534883%",
                          height: "36.22558139534883%",
                          animationDelay: "0.3999999999999999s",
                        }}
                      ></div>
                      <div
                        style={{
                          top: "32.45813953488372%",
                          left: "32.45813953488372%",
                          width: "35.08372093023256%",
                          height: "35.08372093023256%",
                          animationDelay: "0.2999999999999998s",
                        }}
                      ></div>
                      <div
                        style={{
                          top: "33.00581395348837%",
                          left: "33.00581395348837%",
                          width: "33.98837209302326%",
                          height: "33.98837209302326%",
                          animationDelay: "0.20000000000000018s",
                        }}
                      ></div>
                      <div
                        style={{
                          top: "33.53023255813954%",
                          left: "33.53023255813954%",
                          width: "32.939534883720924%",
                          height: "32.939534883720924%",
                          animationDelay: "0.10000000000000009s",
                        }}
                      ></div>
                    </div>
                  </div>
                  <div class="technical-tracking-background-ellipse technical-tracking-background-ellipse-1"></div>
                  <div class="technical-tracking-background-ellipse technical-tracking-background-ellipse-2"></div>
                  <div id="star-animation-75" class="star-animation"></div>
                </div>
              </div>
              <div class="technical-accurate">
                <div class="technical-accurate-inner magical-borders-inner">
                  <img
                    height="1"
                    width="1"
                    alt="alt_text_31"
                    src="https://wope.com/images/technical/technical-accurate-background.png"
                    class="lazy-image technical-accurate-background lazy-image-loaded"
                  />
                  <div class="technical-accurate-text">
                    Extremely Accurate Estimations for CTRs
                  </div>
                  <div class="technical-accurate-circles">
                    <div
                      style={{
                        backgroundImage:
                          "url('https://wope.com/images/technical/technical-accurate-circles-small.png')",
                        width: "100%",
                        height: "100%",
                        pointerEvents: "none",
                      }}
                      class="lazy-background-image lazy-background-image-maskImage technical-accurate-circles-item lazy-background-image-loaded"
                    >
                      <img
                        height="1"
                        width="1"
                        alt="alt_text_32"
                        src="https://wope.com/images/technical/technical-accurate-circles-mask.png"
                        class="lazy-image lazy-image-loaded"
                      />
                    </div>
                    <div
                      style={{
                        backgroundImage:
                          "url('https://wope.com/images/technical/technical-accurate-circles-medium.png')",
                        width: "100%",
                        height: "100%",
                        pointerEvents: "none",
                      }}
                      class="lazy-background-image lazy-background-image-maskImage technical-accurate-circles-item lazy-background-image-loaded"
                    >
                      <img
                        height="1"
                        width="1"
                        alt="alt_text_32"
                        src="https://wope.com/images/technical/technical-accurate-circles-mask.png"
                        class="lazy-image lazy-image-loaded"
                      />
                    </div>
                    <div
                      style={{
                        backgroundImage:
                          "url('https://wope.com/images/technical/technical-accurate-circles-big.png')",
                        width: "100%",
                        height: "100%",
                        pointerEvents: "none",
                      }}
                      class="lazy-background-image lazy-background-image-maskImage technical-accurate-circles-item lazy-background-image-loaded"
                    >
                      <img
                        height="1"
                        width="1"
                        alt="alt_text_32"
                        src="https://wope.com/images/technical/technical-accurate-circles-mask.png"
                        class="lazy-image lazy-image-loaded"
                      />
                    </div>
                  </div>
                  <div class="technical-accurate">
                    <div class="technical-accurate-inner magical-borders-inner">
                      <img
                        height="1"
                        width="1"
                        alt="alt_text_31"
                        src="https://wope.com/images/technical/technical-accurate-background.png"
                        class="lazy-image technical-accurate-background lazy-image-loaded"
                      />
                      <div class="technical-accurate-text">
                        Extremely Accurate Estimations for CTRs
                      </div>
                      <div class="technical-accurate-circles">
                        <div
                          style={{
                            backgroundImage:
                              "url('https://wope.com/images/technical/technical-accurate-circles-small.png')",
                            width: "100%",
                            height: "100%",
                            pointerEvents: "none",
                          }}
                          class="lazy-background-image lazy-background-image-maskImage technical-accurate-circles-item lazy-background-image-loaded"
                        >
                          <img
                            height="1"
                            width="1"
                            alt="alt_text_32"
                            src="https://wope.com/images/technical/technical-accurate-circles-mask.png"
                            class="lazy-image lazy-image-loaded"
                          />
                        </div>
                        <div
                          style={{
                            backgroundImage:
                              "url('https://wope.com/images/technical/technical-accurate-circles-medium.png')",
                            width: "100%",
                            height: "100%",
                            pointerEvents: "none",
                          }}
                          class="lazy-background-image lazy-background-image-maskImage technical-accurate-circles-item lazy-background-image-loaded"
                        >
                          <img
                            height="1"
                            width="1"
                            alt="alt_text_32"
                            src="https://wope.com/images/technical/technical-accurate-circles-mask.png"
                            class="lazy-image lazy-image-loaded"
                          />
                        </div>
                        <div
                          style={{
                            backgroundImage:
                              "url('https://wope.com/images/technical/technical-accurate-circles-big.png')",
                            width: "100%",
                            height: "100%",
                            pointerEvents: "none",
                          }}
                          class="lazy-background-image lazy-background-image-maskImage technical-accurate-circles-item lazy-background-image-loaded"
                        >
                          <img
                            height="1"
                            width="1"
                            alt="alt_text_32"
                            src="https://wope.com/images/technical/technical-accurate-circles-mask.png"
                          />
                        </div>
                      </div>
                      <div class="technical-accurate-boxes">
                        <div>
                          <img
                            height="1"
                            width="1"
                            alt="alt_text_33"
                            src="https://wope.com/images/technical/technical-accurate-box.png"
                            class="lazy-image lazy-image-loaded"
                          />
                        </div>
                        <div>
                          <img
                            height="1"
                            width="1"
                            alt="alt_text_33"
                            src="https://wope.com/images/technical/technical-accurate-box.png"
                            class="lazy-image lazy-image-loaded"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* <div
                class="technical-tagging"
                style={{
                  "--mouse-x": "340px",
                  "--mouse-y": "200px"
                }}
              >
                <div class="technical-tagging-inner magical-borders-inner">
                  <div class="technical-tagging-background">
                    ·
                    <img
                      height="1"
                      width="1"
                      alt="alt_text_44"
                      src="https://wope.com/images/technical/technical-tagging-background.png"
                      class="lazy-image technical-tagging-background-image lazy-image-loaded"
                    />
                    <div
                      style={{
                        backgroundImage:
                          "url('https://wope.com/images/technical/technical-tagging-mask.png')",
                        width: "100%",
                        height: "100%",
                        pointerEvents: "none",
                      }}
                      class="lazy-background-image lazy-background-image-maskImage tags-automation-animation-circle lazy-background-image-loaded"
                    >
                      <div class="tags-automation-animation-circle-inner">
                        <img
                          height="1"
                          width="1"
                          alt="alt_text_24"
                          src="https://wope.com/images/tags/tags-automation-circle.png"
                          class="lazy-image lazy-image-loaded"
                        />
                      </div>
                    </div>
                  </div>
                  <div class="technical-tagging-text">
                    AI Tagging by <br />
                    Real Meaning of Keyword
                  </div>
                </div>
              </div>
              <div
                class="technical-keyword"
                style={{ "--mouse-x": "342px", "--mouse-y": "162.5px" }}
              >
                <div class="technical-keyword-inner magical-borders-inner">
                  <img
                    height="1"
                    width="1"
                    alt="alt_text_37"
                    src="https://wope.com/images/technical/technical-keyword-background.png"
                    class="lazy-image technical-keyword-background lazy-image-loaded"
                  />
                  <div class="technical-keyword-text">
                    Keyword-Level <br />
                    Deep-Dive Analysis
                  </div>
                  <div
                    style={{
                      "--circle-left": "163px",
                      "--circle-top": "-20px",
                      "--circle-scale": "1",
                    }}
                    class="technical-keyword-magnify"
                  >
                    <div class="technical-keyword-magnify-masker">
                      <img
                        height="1"
                        width="1"
                        alt="alt_text_38"
                        src="https://wope.com/images/technical/technical-keyword-mask.png"
                        class="lazy-image lazy-image-loaded"
                      />
                    </div>
                    <div class="technical-keyword-magnify-glass"></div>
                    <div class="technical-keyword-magnify-glass-blur"></div>
                  </div>
                </div>
              </div>
              <div
                class="technical-nesting technical-nesting-in-view"
                style={{ "--mouse-x": "292.5px", "--mouse-y": "43px" }}
              >
                <div class="technical-nesting-inner magical-borders-inner">
                  <div class="technical-nesting-circles">
                    <div class="technical-nesting-circles-item"></div>
                    <div class="technical-nesting-circles-item"></div>
                    <img
                      height="1"
                      width="1"
                      alt="alt_text_41"
                      src="	https://wope.com/images/technical/technical-nesting-circle-2.png"
                      class="lazy-image technical-nesting-circles-item lazy-image-loaded"
                    />
                    <img
                      height="1"
                      width="1"
                      alt="alt_text_42"
                      src="https://wope.com/images/technical/technical-nesting-circle-1.png"
                      class="lazy-image technical-nesting-circles-item lazy-image-loaded"
                    />
                    <div class="technical-nesting-circles-item"></div>
                  </div>
                  <div
                    id="star-animation-154"
                    class="star-animation star-animation-loaded"
                  >
                    <canvas
                      data-generated="true"
                      style={{
                        width: "100%",
                        height: "100%",
                        pointerEvents: "none",
                      }}
                      aria-hidden="true"
                      width="716"
                      height="796"
                    ></canvas>
                  </div>
                  <div class="technical-nesting-text">
                    <div class="technical-nesting-text-item">
                      <span>Nested</span>
                    </div>
                    <div class="technical-nesting-text-row">
                      <div class="technical-nesting-text-item">
                        <span>Hierarchy</span>
                      </div>
                      <div class="technical-nesting-text-divider">
                        <div class="technical-nesting-text-divider-circle"></div>
                        <div class="technical-nesting-text-divider-line"></div>
                        <div class="technical-nesting-text-divider-circle"></div>
                      </div>
                      <div class="technical-nesting-text-item">
                        <span>Grouping</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div
                class="technical-shortcuts technical-shortcuts-in-view"
                style={{
                  "--mouse-x": "338.5px",
                  "--mouse-y": "172.5px",
                }}
              >
                <div class="technical-shortcuts-inner magical-borders-inner">
                  <img
                    height="1"
                    width="1"
                    alt="alt_text_43"
                    src="https://wope.com/images/technical/technical-shortcuts-background.png"
                    class="lazy-image technical-shortcuts-background lazy-image-loaded"
                  />
                  <div
                    id="star-animation-155"
                    class="star-animation star-animation-loaded"
                  >
                    <canvas
                      data-generated="true"
                      style={{
                        width: "100%",
                        height: "100%",
                        pointerEvents: "none",
                      }}
                      aria-hidden="true"
                      width="712"
                      height="796"
                    ></canvas>
                  </div>
                  <div class="technical-shortcuts-cmd-lights">
                    <div>
                      <img
                        height="1"
                        width="1"
                        alt="alt_text_technicalShortcutsLightCmd_0"
                        src="https://wope.com/images/technical/technical-shortcuts-light-cmd-1.png"
                        class="lazy-image lazy-image-loaded"
                      />
                    </div>
                    <div>
                      <img
                        height="1"
                        width="1"
                        alt="alt_text_technicalShortcutsLightCmd_1"
                        src="https://wope.com/images/technical/technical-shortcuts-light-cmd-2.png"
                        class="lazy-image lazy-image-loaded"
                      />
                    </div>
                    <div>
                      <img
                        height="1"
                        width="1"
                        alt="alt_text_technicalShortcutsLightCmd_2"
                        src="https://wope.com/images/technical/technical-shortcuts-light-cmd-3.png"
                        class="lazy-image lazy-image-loaded"
                      />
                    </div>
                    <div>
                      <img
                        height="1"
                        width="1"
                        alt="alt_text_technicalShortcutsLightCmd_3"
                        src="https://wope.com/images/technical/technical-shortcuts-light-cmd-4.png"
                        class="lazy-image lazy-image-loaded"
                      />
                    </div>
                    <div>
                      <img
                        height="1"
                        width="1"
                        alt="alt_text_technicalShortcutsLightCmd_4"
                        src="https://wope.com/images/technical/technical-shortcuts-light-cmd-5.png"
                        class="lazy-image lazy-image-loaded"
                      />
                    </div>
                    <div>
                      <img
                        height="1"
                        width="1"
                        alt="alt_text_technicalShortcutsLightCmd_5"
                        src="https://wope.com/images/technical/technical-shortcuts-light-cmd-6.png"
                        class="lazy-image lazy-image-loaded"
                      />
                    </div>
                    <div>
                      <img
                        height="1"
                        width="1"
                        alt="alt_text_technicalShortcutsLightCmd_6"
                        src="https://wope.com/images/technical/technical-shortcuts-light-cmd-7.png"
                        class="lazy-image lazy-image-loaded"
                      />
                    </div>
                  </div>
                  <div class="technical-shortcuts-k-lights">
                    <div>
                      <img
                        height="1"
                        width="1"
                        alt="alt_text_technicalShortcutsLightK_0"
                        src="https://wope.com/images/technical/technical-shortcuts-light-k-1.png"
                        class="lazy-image lazy-image-loaded"
                      />
                    </div>
                    <div>
                      <img
                        height="1"
                        width="1"
                        alt="alt_text_technicalShortcutsLightK_1"
                        src="https://wope.com/images/technical/technical-shortcuts-light-k-2.png"
                        class="lazy-image lazy-image-loaded"
                      />
                    </div>
                    <div>
                      <img
                        height="1"
                        width="1"
                        alt="alt_text_technicalShortcutsLightK_2"
                        src="https://wope.com/images/technical/technical-shortcuts-light-k-3.png"
                        class="lazy-image lazy-image-loaded"
                      />
                    </div>
                    <div>
                      <img
                        height="1"
                        width="1"
                        alt="alt_text_technicalShortcutsLightK_3"
                        src="https://wope.com/images/technical/technical-shortcuts-light-k-4.png"
                        class="lazy-image lazy-image-loaded"
                      />
                    </div>
                    <div>
                      <img
                        height="1"
                        width="1"
                        alt="alt_text_technicalShortcutsLightK_4"
                        src="https://wope.com/images/technical/technical-shortcuts-light-k-5.png"
                        class="lazy-image lazy-image-loaded"
                      />
                    </div>
                    <div>
                      <img
                        height="1"
                        width="1"
                        alt="alt_text_technicalShortcutsLightK_5"
                        src="https://wope.com/images/technical/technical-shortcuts-light-k-6.png"
                        class="lazy-image lazy-image-loaded"
                      />
                    </div>
                  </div>
                  <div class="technical-shortcuts-text">
                    <div class="technical-shortcuts-title">
                      You'll Love the <br />
                      Command Palette &amp; Shortcuts
                    </div>
                    <div class="technical-shortcuts-description">
                      A command palette that speaks your language Enter{" "}
                      <span class="technical-shortcuts-description-badge">
                        CMD+K
                      </span>{" "}
                      <br />
                      and write your query in natural language to get results
                    </div>
                  </div>
                </div>
              </div> */}
            </div>
          </div>
        </div>
        <div
          style={{
            "--background-image":
              "url('https://wope.com/images/cta/cta-background.png')",
          }}
          class="lazy-background-image lazy-background-image-backgroundImage cta"
        >
          <div class="hero-background hero-background-only-animation">
            <div class="hero-background-top">
              <div
                class="lazy-background-image lazy-background-image-maskImage hero-background-top-animation lazy-background-image-loaded"
                style={{
                  "--background-image":
                    "url('https://wope.com/images/hero/hero-background-top-mask.png')",
                }}
              >
                <div
                  style={{
                    transform: "translateY(-202px)",
                  }}
                ></div>
              </div>
            </div>
            <div class="hero-background-bottom">
              <div
                style={{
                  "--background-image":
                    "url('https://wope.com/images/hero/hero-background-bottom-line-1.png')",
                }}
                class="lazy-background-image lazy-background-image-maskImage hero-background-bottom-line-animation lazy-background-image-loaded"
              >
                <div></div>
              </div>
              <div
                style={{
                  "--background-image":
                    "url('https://wope.com/images/hero/hero-background-bottom-line-2.png')",
                }}
                class="lazy-background-image lazy-background-image-maskImage hero-background-bottom-line-animation lazy-background-image-loaded"
              >
                <div></div>
              </div>
              <div
                style={{
                  "--background-image":
                    "url('https://wope.com/images/hero/hero-background-bottom-line-3.png')",
                }}
                class="lazy-background-image lazy-background-image-maskImage hero-background-bottom-line-animation lazy-background-image-loaded"
              >
                <div></div>
              </div>
              <div
                class="lazy-background-image lazy-background-image-maskImage hero-background-bottom-line-animation lazy-background-image-loaded"
                style={{
                  "--background-image":
                    "url('https://wope.com/images/hero/hero-background-bottom-line-4.png')",
                }}
              >
                <div></div>
              </div>
              <div
                style={{
                  "--background-image":
                    "url('https://wope.com/images/hero/hero-background-bottom-ray.png')",
                }}
                class="lazy-background-image lazy-background-image-maskImage hero-background-bottom-ray-animation lazy-background-image-loaded"
              >
                <div></div>
              </div>
            </div>
          </div>
          <div class="cta-text">
            <img
              alt="alt_text_18"
              height="1"
              width="1"
              src={Logo}
              class="lazy-image lazy-image-loaded cta-icon"
            />
            <h2 class="cta-title">Take Control of Your Business</h2>
            <div class="cta-description">
              Get started with 24Bey and stay on top of your business in no
              time!
            </div>
          </div>
          <div id="star-animation-78" class="star-animation"></div>
        </div>
      </section>

      <div class="footer">
        <div class="container-sm">
          <div class="footer-top">
            <div class="footer-brand">
              <img src={Logo} alt="" />
              <div class="footer-description">
                <span>Experience the next generation</span>
                <span>of digital.</span>
              </div>
              <div class="glowing-box glowing-box-active">
                <div class="glowing-box-animations">
                  <div class="glowing-box-glow"></div>
                  <div class="glowing-box-stars-masker">
                    <div class="glowing-box-stars"></div>
                  </div>
                </div>
                <div class="glowing-box-borders-masker">
                  <div class="glowing-box-borders"></div>
                </div>
                {/* <button class="glowing-box-button">
                  <span> Unlimited trial for 14 days</span>
                </button> */}
              </div>
            </div>
            <div class="footer-nav">
              <div class="footer-nav-group">
                <div class="footer-nav-group-title">Product</div>
                <ul>
                  <li>
                    <a href="#" aria-label="Wiki" class="footer-nav-group-item">
                      Wiki
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      aria-label="Pricing"
                      class="footer-nav-group-item"
                    >
                      Pricing
                    </a>
                  </li>
                </ul>
              </div>
              <div class="footer-nav-group">
                <div class="footer-nav-group-title">Legals</div>
                <ul>
                  <li>
                    <a
                      href="#"
                      aria-label="Terms of Services"
                      class="footer-nav-group-item"
                    >
                      Terms of Services
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      aria-label="Privacy Policy"
                      class="footer-nav-group-item"
                    >
                      Privacy Policy
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div class="footer-bottom">
            <div class="footer-copyright">©2024 Si Youssef.</div>
            <div class="footer-social-media">
              <a
                href="https://instagram.com/oguzhan_cart"
                aria-label="Our Instagram account"
                class="footer-social-media-item"
              >
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M12.0007 4C9.82806 4 9.55539 4.0095 8.70205 4.04833C7.85037 4.08733 7.26903 4.22217 6.76036 4.42C6.23419 4.62433 5.78785 4.89767 5.34318 5.3425C4.89818 5.78717 4.62484 6.2335 4.41984 6.7595C4.2215 7.26833 4.0865 7.84983 4.04817 8.70117C4.01 9.5545 4 9.82733 4 12C4 14.1727 4.00967 14.4445 4.04833 15.2978C4.0875 16.1495 4.22234 16.7308 4.42 17.2395C4.62451 17.7657 4.89784 18.212 5.34268 18.6567C5.78719 19.1017 6.23352 19.3757 6.75936 19.58C7.26837 19.7778 7.84987 19.9127 8.70138 19.9517C9.55472 19.9905 9.82723 20 11.9998 20C14.1726 20 14.4444 19.9905 15.2978 19.9517C16.1495 19.9127 16.7315 19.7778 17.2405 19.58C17.7665 19.3757 18.2121 19.1017 18.6567 18.6567C19.1017 18.212 19.375 17.7657 19.58 17.2397C19.7767 16.7308 19.9117 16.1493 19.9517 15.298C19.99 14.4447 20 14.1727 20 12C20 9.82733 19.99 9.55467 19.9517 8.70133C19.9117 7.84967 19.7767 7.26833 19.58 6.75967C19.375 6.2335 19.1017 5.78717 18.6567 5.3425C18.2116 4.8975 17.7666 4.62417 17.24 4.42C16.73 4.22217 16.1483 4.08733 15.2966 4.04833C14.4433 4.0095 14.1716 4 11.9982 4H12.0007ZM11.2831 5.44167C11.4961 5.44133 11.7337 5.44167 12.0007 5.44167C14.1368 5.44167 14.3899 5.44933 15.2335 5.48767C16.0135 5.52333 16.4368 5.65367 16.7188 5.76317C17.0921 5.90817 17.3583 6.0815 17.6381 6.3615C17.9181 6.6415 18.0915 6.90817 18.2368 7.2815C18.3463 7.56317 18.4768 7.9865 18.5123 8.7665C18.5507 9.60983 18.559 9.86317 18.559 11.9982C18.559 14.1332 18.5507 14.3865 18.5123 15.2298C18.4767 16.0098 18.3463 16.4332 18.2368 16.7148C18.0918 17.0882 17.9181 17.354 17.6381 17.6338C17.3581 17.9138 17.0923 18.0872 16.7188 18.2322C16.4371 18.3422 16.0135 18.4722 15.2335 18.5078C14.3901 18.5462 14.1368 18.5545 12.0007 18.5545C9.86456 18.5545 9.61139 18.5462 8.76805 18.5078C7.98804 18.4718 7.5647 18.3415 7.28253 18.232C6.9092 18.087 6.64253 17.9137 6.36252 17.6337C6.08252 17.3537 5.90919 17.0877 5.76385 16.7142C5.65435 16.4325 5.52385 16.0092 5.48835 15.2292C5.45002 14.3858 5.44235 14.1325 5.44235 11.9962C5.44235 9.85983 5.45002 9.60783 5.48835 8.7645C5.52402 7.9845 5.65435 7.56117 5.76385 7.27917C5.90885 6.90583 6.08252 6.63917 6.36252 6.35917C6.64253 6.07917 6.9092 5.90583 7.28253 5.7605C7.56454 5.6505 7.98804 5.5205 8.76805 5.48467C9.50606 5.45133 9.79206 5.44133 11.2831 5.43967V5.44167ZM16.2711 6.77C15.7411 6.77 15.3111 7.1995 15.3111 7.72967C15.3111 8.25967 15.7411 8.68967 16.2711 8.68967C16.8011 8.68967 17.2311 8.25967 17.2311 7.72967C17.2311 7.19967 16.8011 6.76967 16.2711 6.76967V6.77ZM12.0007 7.89167C9.73189 7.89167 7.89237 9.73117 7.89237 12C7.89237 14.2688 9.73189 16.1075 12.0007 16.1075C14.2696 16.1075 16.1085 14.2688 16.1085 12C16.1085 9.73117 14.2694 7.89167 12.0006 7.89167H12.0007ZM12.0007 9.33333C13.4734 9.33333 14.6674 10.5272 14.6674 12C14.6674 13.4727 13.4734 14.6667 12.0007 14.6667C10.5279 14.6667 9.33406 13.4727 9.33406 12C9.33406 10.5272 10.5279 9.33333 12.0007 9.33333Z"
                    fill="currentColor"
                  ></path>
                </svg>
              </a>
              <a
                href="https://youtube.com/wopehq"
                aria-label="Our Youtube channel"
                class="footer-social-media-item"
              >
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M12.3988 18.4349L8.70588 18.3674C7.5102 18.3439 6.31154 18.3908 5.13931 18.147C3.35607 17.7827 3.22973 15.9965 3.09754 14.4982C2.91539 12.3918 2.98591 10.2471 3.32964 8.15831C3.52369 6.98626 4.28736 6.28688 5.46834 6.21078C9.45503 5.93458 13.4682 5.96731 17.4461 6.09617C17.8662 6.10798 18.2892 6.17255 18.7034 6.24604C20.7483 6.60447 20.7981 8.62865 20.9307 10.3326C21.0629 12.0542 21.007 13.7846 20.7544 15.4944C20.5517 16.9101 20.1638 18.0973 18.5271 18.2119C16.4764 18.3618 14.4728 18.4825 12.4164 18.444C12.4165 18.4349 12.4046 18.4349 12.3988 18.4349ZM10.2277 14.8508C11.7731 13.9635 13.289 13.091 14.8255 12.2096C13.2772 11.3224 11.7642 10.4499 10.2277 9.56851V14.8508Z"
                    fill="currentColor"
                  ></path>
                </svg>
              </a>
              <a
                href="https://linkedin.com/company/wopehq"
                aria-label="Our Linkedin account"
                class="footer-social-media-item"
              >
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clip-path="url(#clip0_3007_48641)">
                    <path
                      d="M8.17805 18.9997V9.55356H5.1769V18.9997H8.17836H8.17805ZM6.6781 8.26408C7.72445 8.26408 8.37587 7.53873 8.37587 6.63224C8.35628 5.70511 7.72445 5 6.698 5C5.67085 5 5 5.70511 5 6.63216C5 7.53864 5.65118 8.26399 6.65844 8.26399H6.67787L6.6781 8.26408ZM9.83923 18.9997H12.8401V13.7251C12.8401 13.4432 12.8597 13.1605 12.939 12.9591C13.1559 12.3948 13.6497 11.8107 14.4789 11.8107C15.5646 11.8107 15.9992 12.6768 15.9992 13.9468V18.9997H19V13.5836C19 10.6822 17.5196 9.3321 15.5452 9.3321C13.9264 9.3321 13.2154 10.2787 12.8204 10.9234H12.8404V9.55389H9.83939C9.87856 10.44 9.83915 19 9.83915 19L9.83923 18.9997Z"
                      fill="currentColor"
                    ></path>
                  </g>
                  <defs>
                    <clippath id="clip0_3007_48641">
                      <rect
                        width="18"
                        height="18"
                        fill="white"
                        transform="translate(3 3)"
                      ></rect>
                    </clippath>
                  </defs>
                </svg>
              </a>
              <a
                href="https://twitter.com/wopehq"
                aria-label="Our Twitter account"
                class="footer-social-media-item"
              >
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M8.66082 19.6341C15.4536 19.6341 19.1683 14.0045 19.1683 9.12273C19.1683 8.96285 19.1651 8.80371 19.1579 8.64522C19.8807 8.12202 20.5045 7.47421 21 6.73217C20.3383 7.02646 19.6262 7.22454 18.8792 7.31384C19.6417 6.85649 20.227 6.13294 20.5032 5.27048C19.7783 5.70068 18.9852 6.00395 18.1582 6.16722C17.4843 5.44912 16.5248 5 15.4625 5C13.4231 5 11.7693 6.65446 11.7693 8.69384C11.7693 8.98378 11.8017 9.26571 11.8651 9.53622C8.79574 9.38172 6.07409 7.91165 4.25261 5.67632C3.92454 6.24011 3.75199 6.88087 3.75256 7.53317C3.75256 8.8149 4.40451 9.94638 5.39598 10.6084C4.80951 10.5904 4.23592 10.432 3.72344 10.1463C3.72289 10.1618 3.72289 10.1769 3.72289 10.1935C3.72289 11.9826 4.99584 13.4764 6.68565 13.8149C6.36828 13.9014 6.04079 13.9451 5.71185 13.9449C5.4743 13.9449 5.24279 13.9215 5.01779 13.8783C5.48795 15.3462 6.85127 16.4144 8.46765 16.4442C7.20366 17.4353 5.61143 18.0256 3.8809 18.0256C3.58652 18.0258 3.29237 18.0088 3 17.9744C4.63441 19.0224 6.57494 19.6341 8.66082 19.6341Z"
                    fill="currentColor"
                  ></path>
                </svg>
              </a>
              <a
                href="https://discord.gg/wope"
                aria-label="Our Discord server"
                class="footer-social-media-item"
              >
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clip-path="url(#clip0_2990_46224)">
                    <path
                      d="M18.2378 6.2418C17.0905 5.71539 15.8602 5.32755 14.5739 5.10542C14.5505 5.10114 14.5271 5.11185 14.515 5.13328C14.3568 5.41469 14.1815 5.78181 14.0588 6.07037C12.6753 5.86324 11.2989 5.86324 9.94374 6.07037C9.82099 5.7754 9.63936 5.41469 9.48043 5.13328C9.46836 5.11257 9.44496 5.10185 9.42154 5.10542C8.13593 5.32684 6.90567 5.71468 5.7577 6.2418C5.74776 6.24609 5.73924 6.25324 5.73359 6.26251C3.40004 9.74879 2.76079 13.1494 3.07439 16.5078C3.0758 16.5242 3.08503 16.5399 3.0978 16.5499C4.63741 17.6806 6.12878 18.367 7.59246 18.822C7.61588 18.8291 7.6407 18.8205 7.65561 18.8012C8.00184 18.3284 8.31048 17.8299 8.57511 17.3056C8.59072 17.2749 8.57582 17.2385 8.5439 17.2263C8.05435 17.0406 7.5882 16.8142 7.1398 16.5571C7.10433 16.5364 7.10149 16.4856 7.13412 16.4613C7.22848 16.3906 7.32286 16.3171 7.41297 16.2428C7.42927 16.2292 7.45198 16.2264 7.47115 16.2349C10.417 17.5799 13.6062 17.5799 16.5172 16.2349C16.5364 16.2256 16.5591 16.2285 16.5761 16.2421C16.6662 16.3164 16.7606 16.3906 16.8557 16.4613C16.8883 16.4856 16.8862 16.5364 16.8507 16.5571C16.4023 16.8192 15.9361 17.0406 15.4459 17.2256C15.414 17.2377 15.3998 17.2749 15.4154 17.3056C15.6857 17.8291 15.9943 18.3277 16.3342 18.8005C16.3484 18.8205 16.3739 18.8291 16.3973 18.822C17.8681 18.367 19.3595 17.6806 20.8991 16.5499C20.9126 16.5399 20.9211 16.5249 20.9225 16.5085C21.2978 12.6258 20.2939 9.2531 18.2612 6.26322C18.2562 6.25324 18.2477 6.24609 18.2378 6.2418ZM9.01502 14.4629C8.12812 14.4629 7.39735 13.6486 7.39735 12.6487C7.39735 11.6487 8.11395 10.8345 9.01502 10.8345C9.92315 10.8345 10.6469 11.6558 10.6327 12.6487C10.6327 13.6486 9.91606 14.4629 9.01502 14.4629ZM14.9961 14.4629C14.1092 14.4629 13.3784 13.6486 13.3784 12.6487C13.3784 11.6487 14.095 10.8345 14.9961 10.8345C15.9042 10.8345 16.6279 11.6558 16.6137 12.6487C16.6137 13.6486 15.9042 14.4629 14.9961 14.4629Z"
                      fill="currentColor"
                    ></path>
                  </g>
                  <defs>
                    <clippath id="clip0_2990_46224">
                      <rect
                        width="18"
                        height="13.9437"
                        fill="white"
                        transform="translate(3 5)"
                      ></rect>
                    </clippath>
                  </defs>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
