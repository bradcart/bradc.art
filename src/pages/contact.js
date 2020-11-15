import React, { useMemo, useState } from "react"
import { motion } from "framer-motion"
import { useForm } from "react-hook-form"
import Layout from "../components/layout"
// import Button from "../components/button"
// import WavingEmoji from "../assets/WavingEmoji.svg"

const Modal = () => {
  return (
    <motion.div
      initial={{ y: 1000 }}
      animate={{ y: 0 }}
      className="modal"
    ></motion.div>
  )
}

const ContactPage = ({ transitionStatus, entry }) => {
  const greetingArray = ["HELLO", "LET'S TALK", "DON'T BE SHY", "TALK TO ME"]
  const greeting = useMemo(() => {
    return greetingArray[Math.floor(Math.random() * greetingArray.length)]
  }, [])

  const [value, setValue] = useState("")

  const { register, handleSubmit, errors } = useForm()
  const onSubmit = values => {
    console.log(values)
  }

  return (
    <Layout page="contact">
      <motion.div
        initial={entry.state}
        animate={
          transitionStatus === "exiting" ? { y: window.innerHeight } : { y: 0 }
        }
        transition={{ duration: 0.4 }}
        className="contact-page"
      >
        <form onSubmit={handleSubmit(onSubmit)} className="contact-form">
          <h3 className="contact-form-header outline">
            {greeting}{" "}
            <span id="wave-emoji" role="img" aria-label="Email emoji">
              ✉️
            </span>
          </h3>
          <div className="error-section">
            {errors.comment && "You forgot your message!"}
            {/* <br />
            {errors.name && errors.name.message} */}
            <br />
            {errors.email && errors.email.message}
          </div>
          <textarea
            name="message"
            className="contact-form-content"
            ref={register({
              required: true,
              validate: value => value !== "type your message here...",
            })}
            wrap="hard"
            rows={5}
            cols={5}
            placeholder="type your message here..."
            // onFocus={e => (e.target.placeholder = "")}
            // onBlur={e => (e.target.placeholder = "type your message here...")}
            value={value}
            onChange={e => setValue(e.target.value)}
          />
          {/* <label className="name-section">
            <h3 className="my-name-is outline">name:</h3>
            <input
              size={15}
              className="name-field"
              ref={register({
                required: true,
                maxLength: {
                  value: 20,
                  message: "Please enter a name with fewer than 20 characters.",
                },
              })}
              type="text"
              name="name"
            />
          </label> */}
          <label className="email-section">
            <h3 className="my-email-is outline">email address:</h3>
            <input
              className="email-field"
              ref={register({
                required: true,
                pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                  message: "Invalid email address.",
                },
              })}
              type="text"
              name="email"
            />
          </label>
          <input className="btn" id="send" type="submit" value="send" />
        </form>
      </motion.div>
    </Layout>
  )
}

export default ContactPage
