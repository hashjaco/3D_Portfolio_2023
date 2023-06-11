import React from "react";
import Tilt from "react-tilt";
import {motion} from "framer-motion";
import {styles} from "../styles";
import {services, certifications} from "../constants";
import {SectionWrapper} from "../hoc";
import {fadeIn, textVariant} from "../utils/motion";

const ServiceCard = ({index, title, icon}) => (
    <Tilt className='xs:w-[250px] w-full'>
        <motion.div
            variants={fadeIn("right", "spring", index * 0.5, 0.75)}
            className='w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card'
        >
            <div
                options={{
                    max: 45,
                    scale: 1,
                    speed: 450,
                }}
                className='bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col'
            >
                <img
                    src={icon}
                    alt='web-development'
                    className='w-16 h-16 object-contain'
                />

                <h3 className='text-white text-[20px] font-bold text-center'>
                    {title}
                </h3>
            </div>
        </motion.div>
    </Tilt>
);

const About = () => {
    return (
        <>
            <motion.div variants={textVariant()}>
                <p className={styles.sectionSubText}>Introduction</p>
                <h2 className={styles.sectionHeadText}>Overview.</h2>
            </motion.div>

            <motion.p
                variants={fadeIn("", "", 0.1, 1)}
                className='mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]'
            >
                I'm a seasoned Software Engineer and Certified Scrum Master with extensive experience in
                full-stack development, cloud security, automation, and UI/UX design. I've served in a broad range of
                roles, from co-founding software architect to teaching game development. I'm proficient in multiple
                programming languages, libraries, and excel in creating
                high-quality, reliable software solutions while implementing efficient security measures. A mentor at
                heart, I leverage a project-based approach to teach and foster critical thinking skills. With my
                unique blend of skills and commitment to innovation, I could be the next great asset to your
                organization.
            </motion.p>
            <br/><br/>
            <motion.div><h2 className={styles.sectionHeadText}>Expertise.</h2></motion.div>

            <div className='mt-20 flex flex-wrap gap-10'>
                {services.map((service, index) => (
                    <ServiceCard key={service.title} index={index} {...service} />
                ))}
            </div>
            <br/><br/>
            <motion.div><h2 className={styles.sectionHeadText}>Certifications.</h2></motion.div>

            <div className='mt-20 flex flex-wrap gap-10'>
                {certifications.map((certification, index) => (
                    <ServiceCard key={certification.title} index={index} {...certification} />
                ))}
            </div>
        </>
    );
};

export default SectionWrapper(About, "about");
