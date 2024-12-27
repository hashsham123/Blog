import { useEffect, useRef, useState } from "react";
import "../../styles/Experience.scss";

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
                Worked onsite at CDN Solutions, Indore, designing responsive
                pages with React.js and integrating seamless APIs. Built
                production-grade applications from scratch using Next.js and
                developed robust APIs and databases. Leveraged Mongoose ODM for
                MongoDB and TypeORM for SQL databases, ensuring efficient data
                operations.
              </p>
              <p className="date_exp">Jun, 2024 - Dec, 2024</p>
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
                worked as a Full Stack Developer Intern,{" "}
                <a href="">Know More</a>
              </p>
              <p>
                Designed and developed the product website UI/UX with React.js,
                integrating Firebase for phone OTP authentication and JWT token
                generation using Firebase UID. Implemented Razorpay payment
                gateway for dynamic billing via Node.js APIs. Utilized AWS
                Lambda with the Serverless Framework for scalable backend
                functions, enhancing the platform's efficiency and user
                experience.
              </p>
              <p className="date_exp">Sep, 2023 - Feb, 2024</p>
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
                worked as a Node.js Developer Intern, <a href="">Know More</a>
              </p>
              <p>
                Created and updated APIs, ensuring efficient functionality and
                seamless integration. Managed version control using Git and
                streamlined API deployment processes with Vercel, enhancing
                performance and scalability.
              </p>
              <p className="date_exp">Jun, 2023-Aug, 2023</p>
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
      </div>
    </div>
  );
}

export default Experience;
