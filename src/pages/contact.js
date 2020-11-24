import React, { useMemo, useState } from "react"
import { AnimatePresence, motion } from "framer-motion"
import { useForm } from "react-hook-form"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Cursor from "../components/cursor"

const ContactPage = ({ transitionStatus, entry }) => {
  const greetingArray = ["HELLO", "LET'S TALK", "DON'T BE SHY", "TALK TO ME"]
  const greeting = useMemo(() => {
    return greetingArray[Math.floor(Math.random() * greetingArray.length)]
  }, [])
  const placeholderArray = [
    "type your message here...",
    "type your message HERE please.",
    "type anything.",
    "literally anything.",
    "have you used a keyboard before?",
    "Escribe tu mensaje aquí",
    "ここにメッセージを入力してください",
    "Пишите ваше сообщение здесь",
  ]

  const [placeholderIndex, setPlaceholderIndex] = useState(0)
  const placeholder = placeholderArray[placeholderIndex]
  const [value, setValue] = useState("")
  const [modal, toggleModal] = useState(false)
  const [success, toggleSuccess] = useState(false)
  const [error, toggleError] = useState(false)
  const [clicked, toggleClicked] = useState(false)

  const endpoints = {
    contact: "/.netlify/functions/sendEmail",
  }
  const axios = require("axios")

  const { register, handleSubmit, errors } = useForm()
  const onSubmit = values => {
    let { name, email, message } = values
    let data = { name, email, message }
    axios.post(endpoints.contact, JSON.stringify(data)).then(response => {
      if (response.status !== 200) {
        handleError()
      } else {
        handleSuccess()
      }
    })
  }

  const handleSuccess = () => {
    toggleModal(false)
    toggleSuccess(true)
    // console.log("message sent!")
  }

  const handleError = () => {
    toggleError(true)
    // console.log("error!")
  }

  const handleMouseEnter = () => {
    const cursor = document.getElementById("cursor")
    cursor.classList.add("cursor--modal-hover")
  }
  const handleMouseLeave = () => {
    const cursor = document.getElementById("cursor")
    cursor.classList.remove("cursor--modal-hover")
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
              animate={{ opacity: 0.6 }}
            />
          ) : null}
          <form onSubmit={handleSubmit(onSubmit)} className="contact-form">
            {success ? (
              <h3 className="contact-form-header outline">
                MESSAGE SENT
                <span id="wave-emoji" role="img" aria-label="Thumbs up emoji">
                  👍
                </span>
              </h3>
            ) : error ? (
              <h3 className="contact-form-header outline">
                ERROR. REFRESH + TRY AGAIN
                <span id="wave-emoji" role="img" aria-label="Thumbs down emoji">
                  👎
                </span>
              </h3>
            ) : (
              <h3 className="contact-form-header outline">
                {greeting}{" "}
                <span id="wave-emoji" role="img" aria-label="Email emoji">
                  ✉️
                </span>
              </h3>
            )}
            <textarea
              name="message"
              className="contact-form-content hover-this--chat"
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
              defaultValue={value}
              onChange={e => setValue(e.target.value)}
              style={
                success
                  ? { border: "1px ridge green" }
                  : error
                  ? { border: "1px ridge red" }
                  : { border: "0.5px ridge rgba(240, 245, 243, 0.1)" }
              }
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
            <AnimatePresence>
              {modal ? (
                <motion.div
                  id="modal"
                  initial={{ y: "100%", x: "-50%" }}
                  animate={{ y: "-50%", x: "-50%" }}
                  exit={{ y: "55vh", x: "-50%" }}
                  onMouseEnter={() => handleMouseEnter()}
                  onMouseLeave={() => handleMouseLeave()}
                >
                  <h3 className="my-name-is outline">name:</h3>
                  <input
                    // size={15}
                    className="name-field hover-this--chat"
                    ref={register({
                      required: true,
                    })}
                    type="text"
                    name="name"
                  />
                  <h3 className="my-email-is outline">email:</h3>
                  <input
                    className="email-field hover-this--chat"
                    ref={register({
                      required: true,
                      pattern: {
                        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                        message: "Invalid email address.",
                      },
                    })}
                    type="text"
                    name="email"
                    style={
                      errors.email && clicked
                        ? { border: "1px ridge red" }
                        : { border: "0.5px ridge rgba(240, 245, 243, 0.1)" }
                    }
                  />
                  <input
                    className="btn"
                    id="send-confirm"
                    type="submit"
                    value="confirm"
                    onClick={() => toggleClicked(true)}
                  />
                  {errors.email && errors.email.message && clicked ? (
                    <span className="error-section">
                      {errors.email.message}
                    </span>
                  ) : null}
                </motion.div>
              ) : null}
            </AnimatePresence>
            <Cursor />
          </form>
        </motion.div>
      )}
    </Layout>
  )
}

export default ContactPage
