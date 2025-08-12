"use client";

import Exp_prop from "./Exp_prop";
import Skills from "./Skills";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const Experience = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <>
      <section
        id="experience"
        className="p-5 mx-20 mb-10 font-medium font-['Poppins'] max-sm:p-2 max-sm:mx-5"
      >
        <div className="WRAPPER mt-12 ">
          <h1 className="text-[#00040f] dark:text-slate-300 font-extrabold text-5xl text-center">
            EXPERIENCE
          </h1>

          <div
            className="EXPERIENCE mt-16 grid gap-20 max-sm:gap-10 max-sm:grid-cols-1 grid-cols-3"
            data-aos="zoom-in-up"
          >
            {/* <Exp_prop
              img={Oppia}
              title="Oppia Foundation"
              subtitle="LAcE Team Member"
              date="November 2023 - present"
              para="- Worked collabartively with developers from Russia and United States to remove the bugs, improving user experience."
            />
            <Exp_prop
              img={KDE}
              title="Season of KDE'24"
              subtitle="Mentee"
              date="January 2023 - present"
              para="- SoK'24 mentee for the cantor project converting the documentation for several programming languages into QT Help files. "
            />
            <Exp_prop
              img={GDSC}
              title="GDSC IIIT Kota"
              subtitle="Web Development Lead"
              date="August 2023 - present"
              para="- Web Development Lead in Google Developers Student Club IIIT Kota"
            />
            <Exp_prop
              img={IIIT_KOTA}
              title="Webteam Trainee, IIIT Kota"
              subtitle="Trainee"
              date="August 2023 - present"
              para="- Webteam Trainee for the maintaining and developing the official website of IIIT Kota"
            />
            <Exp_prop
              img={IIITians}
              title="IIITians Network"
              subtitle="Tech Team Lead"
              date="April 2023 - present"
              para="- Worked collaboratively within a team to develop a captivating college social network website."
            />
            <Exp_prop
              img={Sports}
              title="Sports Council, IIIT Kota"
              subtitle="Technical Team"
              date="June 2023 - present"
              para="- Worked collaboratively within a team to develop a captivating college sports website."
            />
            <Exp_prop
              img={GSSOC}
              title="GSSoC'23 Contributor"
              subtitle="Contributor"
              date="June 2023 - present"
              para="- Contributed in open source repositories like GameSphere, OpenTech, Moksh, Community Website etc. "
            /> */}
           <Exp_prop
              img={"/image2.png"}
              title="Softgains technologies"
              subtitle="Digital Marketing and Web development lead"
              date="Jan2023- July2023"
              para="- Contributed as a Digital marketer and social media specialist on the different projects. "
            />
            <Exp_prop
              img={"/image.png"}
              title="Omniserve Infotech "
              subtitle="Web development lead and Digital marketing "
              date="July 2024 -Dec 2024"
              para="- Worked on several projects which includes web development and Digital Marketing of the websites. "
            />
          </div>
        </div>
      </section>
      <Skills></Skills>
    </>
  );
};
export default Experience;
