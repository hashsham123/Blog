import { useEffect, useRef, useState } from "react";
import "./Experience.css";
import "animate.css";

type RefObject = HTMLDivElement | null;

function Experience() {
  const [visibleStates, setVisibleStates] = useState<boolean[]>([]);

  const elementRefs = useRef<RefObject[]>([]);

  const handleIntersection = (
    entries: IntersectionObserverEntry[],
    observer: IntersectionObserver
  ) => {
    entries.forEach((entry) => {
      const index = elementRefs.current.indexOf(entry.target as HTMLDivElement);

      if (entry.isIntersecting) {
        setVisibleStates((prevStates) => {
          const updatedStates = [...prevStates];
          updatedStates[index] = true;
          return updatedStates;
        });

        observer.unobserve(entry.target);
      }
    });
  };

  useEffect(() => {
    const observer = new IntersectionObserver(handleIntersection, {
      threshold: 0.01,
    });

    elementRefs.current.forEach((ref) => {
      if (ref) {
        observer.observe(ref);
      }
    });

    return () => {
      elementRefs.current.forEach((ref) => {
        if (ref) {
          observer.unobserve(ref);
        }
      });
    };
  }, []);

  const setRef = (el: HTMLDivElement | null, index: number) => {
    elementRefs.current[index] = el;
  };

  return (
    <div className="main_exp">
  
      <p className="title_exp" id="experience">
        My Experience
      </p>
      <div className="content_exp">
        <section className="section_exp">
          <div
            ref={(el) => setRef(el, 0)}
            className={`box_text_exp ${
              visibleStates[0] ? "animate__animated animate__backInLeft" : ""
            }`}
          >
            <div className="text_container_exp">
              <p className="title_text_exp">
                worked as a Full Stack Developer, <a href="">Know More</a>
              </p>
              <p>
                As a Full Stack Developer at CDN, I contributed to the
                development of MERN stack websites. My primary responsibilities
                included designing responsive web pages and integrating APIs. On
                the backend, I primarily worked with AWS DynamoDB, where I also
                developed APIs to enhance functionality and ensure seamless data
                management.
              </p>
              <p className="date_exp"> 24 jul 23 - 24 dec 24</p>
            </div>
          </div>
          <div className="box_img_exp">
            <div
              ref={(el) => setRef(el, 1)}
              className={`img_exp ${
                visibleStates[1] ? "animate__animated animate__backInRight" : ""
              }`}
            >
              <div className="know_landing">
                <button>Know More</button>
              </div>
              <img src="/download (1).png" alt="image" />
            </div>
          </div>
        </section>

        <section className="section_exp">
          <div className="box_img_exp">
            <div
              ref={(el) => setRef(el, 2)}
              className={`img_exp ${
                visibleStates[2] ? "animate__animated animate__backInLeft" : ""
              }`}
            >
              <div className="know_landing">
                <button>Know More</button>
              </div>

              <img
                src="https://mavoix.in/_next/image?url=%2Fassets%2FMavoix_Logo-removebg-preview.png&w=256&q=75"
                alt="image"
              />
            </div>
          </div>

          <div
            ref={(el) => setRef(el, 3)}
            className={`box_text_exp left_exp ${
              visibleStates[3] ? "animate__animated animate__backInRight" : ""
            }`}
          >
            <div className="text_container_exp">
              <p className="title_text_exp">
                worked as a Full Stack Developer, <a href="">Know More</a>
              </p>
              <p>
                At Mavoix Solutions Private Limited, I worked as a Full Stack
                Developer where I contributed significantly to both front-end
                development and Node.js API integration. My responsibilities
                included implementing JWT authentication for secure user access,
                integrating Google Firebase for OTP verification, and setting up
                Razorpay for seamless payment gateway transactions.
              </p>
              <p className="date_exp"> 24 jul 23 - 24 dec 24</p>
            </div>
          </div>
        </section>

        <section className="section_exp">
          <div
            ref={(el) => setRef(el, 4)}
            className={`box_text_exp ${
              visibleStates[4] ? "animate__animated animate__backInLeft" : ""
            }`}
          >
            <div className="text_container_exp">
              <p className="title_text_exp">
                worked as a Full Stack Developer, <a href="">Know More</a>
              </p>
              <p>
                At Mavoix Solutions Private Limited, I worked as a Full Stack
                Developer where I contributed significantly to both front-end
                development and Node.js API integration. My responsibilities
                included implementing JWT authentication for secure user access,
                integrating Google Firebase for OTP verification, and setting up
                Razorpay for seamless payment gateway transactions.
              </p>
              <p className="date_exp"> 24 jul 23 - 24 dec 24</p>
            </div>
          </div>
          <div className="box_img_exp">
            <div
              ref={(el) => setRef(el, 5)}
              className={`img_exp ${
                visibleStates[5] ? "animate__animated animate__backInRight" : ""
              }`}
            >
              <div className="know_landing">
                <button>Know More</button>
              </div>

              <img src="/downloadt.png" alt="image" />
            </div>
          </div>
        </section>

        <section className="section_exp">
          <div className="box_img_exp">
            <div
              ref={(el) => setRef(el, 6)}
              className={`img_exp ${
                visibleStates[6] ? "animate__animated animate__backInLeft" : ""
              }`}
            >
              <div className="know_landing">
                <button>Know More</button>
              </div>

              <img src="download.png" alt="image" />
            </div>
          </div>

          <div
            ref={(el) => setRef(el, 7)}
            className={`box_text_exp left_exp ${
              visibleStates[7] ? "animate__animated animate__backInRight" : ""
            }`}
          >
            <div className="text_container_exp">
              <p className="title_text_exp">
                worked as a Full Stack Developer, <a href="">Know More</a>
              </p>
              <p>
                At Devtown Solutions Private Limited, I worked as a Full Stack
                Developer where I contributed significantly to both front-end
                development and Node.js API integration. My responsibilities
                included implementing JWT authentication for secure user access,
                integrating Google Firebase for OTP verification, and setting up
                Razorpay for seamless payment gateway transactions.
              </p>
              <p className="date_exp"> 24 jul 23 - 24 dec 24</p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default Experience;
