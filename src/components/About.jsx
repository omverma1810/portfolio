import React from 'react';
import { motion } from 'framer-motion';
import SectionWrapper from '../hoc';
import style from './styles/about.module.css';
import { textVariant, slideIn } from '../utils/motion';
import mypicture from '../assets/mypicture.jpg';

const About = () => (
  <>
    <motion.h1 variants={textVariant()} className={style.title}>About Me</motion.h1>
    <div className={style.content}>
      <motion.div variants={slideIn('left', '', 0, 1)} className={style.para}>
        <p className={style.text}>
          My name is
          {' '}
          <a href="https://www.linkedin.com/in/omverma18/" target="_blank" className={style.link} rel="noreferrer">Om Verma</a>
          {' '}
          and I am an accomplished full-stack developer with a deep passion for software development, machine learning, and cloud computing.
        </p>
        <p className={style.text}>With over three years of hands-on experience in the software development field as a remote freelancer, I have honed my skills and expertise in various domains. As a dedicated tech enthusiast, I possess a keen interest in cutting-edge topics such as machine learning, neural networks, Python transformers, and natural language processing (NLP). Additionally, I have a strong foundation in Amazon Web Services, enabling me to leverage cloud-based solutions effectively.</p>
        <p className={style.text}>In addition to my technical proficiency, I possess a range of personal skills that contribute to my professional success. These include exemplary leadership capabilities, a collaborative approach to teamwork, exceptional oratory skills, unwavering loyalty, and a strong work ethic. Furthermore, I excel in delivering compelling presentations, which has been demonstrated through my undergraduate career where I actively participated in presenting research journals. Moreover, I have regularly conducted sessions on emerging technologies within the IT sector, showcasing my ability to disseminate knowledge and drive innovation.</p>
      </motion.div>
      <motion.div variants={slideIn('right', '', 0, 1)} className={style.img_container}>
        <div className={style.overlay} />
        <img className={style.img} src={mypicture} alt="Om Verma" />
      </motion.div>
    </div>
  </>
);

export default SectionWrapper(About, 'about', '');
