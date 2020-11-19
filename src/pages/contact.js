import React, { useMemo, useState } from "react"
import { motion } from "framer-motion"
import { useForm } from "react-hook-form"
import Layout from "../components/layout"
import SEO from "../components/seo"
// import Button from "../components/button"
// import WavingEmoji from "../assets/WavingEmoji.svg"

const ContactPage = ({ transitionStatus, entry }) => {
  const greetingArray = ["HELLO", "LET'S TALK", "DON'T BE SHY", "TALK TO ME"]
  const greeting = useMemo(() => {
    return greetingArray[Math.floor(Math.random() * greetingArray.length)]
  }, [])
  const placeholderArray = [
    "type your message here...",
    "type your message HERE please.",
    "TYPE A MESSAGE.",
    "ANY MESSAGE.",
    "have you used a keyboard before?",
    "¡Escribe tu mensaje aquí!",
    "ここにメッセージを入力してください！",
    "Пишите ваше сообщение здесь!",
  ]

  const [placeholderIndex, setPlaceholderIndex] = useState(0)
  const placeholder = placeholderArray[placeholderIndex]
  const [value, setValue] = useState("")
  const [modal, toggleModal] = useState(false)

  const endpoints = {
    contact: "/.netlify/functions/sendEmail",
  }
  const axios = require("axios")

  const { register, handleSubmit, errors } = useForm()
  const onSubmit = values => {
    // console.log(values)
    let { name, email, message } = values
    let data = { name, email, message }
    axios.post(endpoints.contact, JSON.stringify(data)).then(response => {
      if (response.status !== 200) {
        handleError()
        console.log(response)
      } else {
        handleSuccess()
        console.log(response)
      }
    })
  }

  const handleSuccess = () => {
    toggleModal(false)
    console.log("message sent!")
  }

  const handleError = () => {
    console.log("error!")
  }

  return (
    <Layout page="contact">
      <SEO title="contact" />
      {typeof window !== `undefined` && (
        <motion.div
          initial={entry.state}
          animate={
            transitionStatus === "exiting"
              ? { y: window.innerHeight }
              : { y: 0 }
          }
          transition={{ duration: 0.4 }}
          className="contact-page"
        >
          {modal ? (
            <motion.div
              className="backdrop"
              onClick={() => toggleModal(false)}
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.5 }}
            />
          ) : null}
          <form onSubmit={handleSubmit(onSubmit)} className="contact-form">
            <h3 className="contact-form-header outline">
              {greeting}{" "}
              <span id="wave-emoji" role="img" aria-label="Email emoji">
                ✉️
              </span>
            </h3>
            {/* <div className="error-section">
              {errors.comment && "You forgot your message!"}
              <br />
              {errors.name && errors.name.message}
              <br />
              {errors.email && errors.email.message}
            </div> */}
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
              placeholder={placeholder}
              // onFocus={e => (e.target.placeholder = "")}
              // onBlur={e => (e.target.placeholder = "type your message here...")}
              value={value}
              onChange={e => setValue(e.target.value)}
            />
            <button
              className="btn"
              id="send"
              onClick={
                value !== ""
                  ? () => toggleModal(!modal)
                  : placeholderIndex <= placeholderArray.length - 1
                  ? () => setPlaceholderIndex(placeholderIndex + 1)
                  : setPlaceholderIndex(0)
              }
            >
              send
            </button>
            {modal ? (
              <motion.div
                className="modal"
                initial={{ y: "100%", x: "-50%" }}
                animate={{ y: "-50%", x: "-50%" }}
              >
                <h3 className="my-name-is outline">name:</h3>
                <input
                  // size={15}
                  className="name-field"
                  ref={register({
                    required: true,
                  })}
                  type="text"
                  name="name"
                />
                <h3 className="my-email-is outline">email:</h3>
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
                <input
                  className="btn"
                  id="send-confirm"
                  type="submit"
                  value="confirm"
                />
                {errors.email && errors.email.message ? (
                  <div className="errors-section">{errors.email.message}</div>
                ) : null}
              </motion.div>
            ) : null}
          </form>
        </motion.div>
      )}
    </Layout>
  )
}

export default ContactPage
