import React, { useState } from 'react';
import L from 'leaflet';
import { motion } from 'framer-motion';
import SectionWrapper from '../hoc';
import { fadeIn, textVariant, slideIn } from '../utils/motion';
import style from './styles/contact.module.css';
import 'leaflet/dist/leaflet.css';

delete L.Icon.Default.prototype._getIconUrl;



const Contact = () => {
  const [form, setForm] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    const { target } = e;
    const { name, value } = target;

    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    const isValid = form.checkValidity();
    if (isValid) {

      form.submit();
      setForm({
        name: '',
        email: '',
        message: '',
      });
    }
  };

  return (
    <>
      <motion.h1 variants={textVariant()} className={style.title}>
        Get in Touch!
      </motion.h1>
      <motion.p variants={fadeIn('', '', 0.15, 1)} className={style.subtitle}>
      I look forward to collaborating with you and achieving remarkable results together.
      </motion.p>
      <div className={style.container}>
        <motion.form
          variants={slideIn('left', '', 0, 1)}
          onSubmit={handleSubmit}
          action="#"
          method="post"
          className={style.form}
        >
          <input
            type="text"
            placeholder="Name"
            required
            maxLength="30"
            name="name"
            value={form.name}
            onChange={handleChange}
            className={style.input}
          />
          <input
            type="email"
            placeholder="Email"
            required
            name="email"
            value={form.email}
            onChange={handleChange}
            className={style.input}
          />
          <textarea
            cols="30"
            rows="10"
            placeholder="Say something"
            required
            maxLength="500"
            name="message"
            value={form.message}
            onChange={handleChange}
            className={`${style.input} ${style.textarea}`}
          />
          <button type="submit" className={style.btn_container}>
            <span className={style.btn_hover}>Get in touch</span>
            <span className={style.btn}>Get in touch</span>
          </button>
        </motion.form>
      </div>
    </>
  );
};

export default SectionWrapper(Contact, 'contact', 'my-0');
