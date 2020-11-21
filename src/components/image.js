import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image/withIEPolyfill"

/*
 * This component is built using `gatsby-image` to automatically serve optimized
 * images with lazy loading and reduced file sizes. The image is loaded using a
 * `useStaticQuery`, which allows us to load the image from directly within this
 * component, rather than having to pass the image data down from pages.
 *
 * For more information, see the docs:
 * - `gatsby-image`: https://gatsby.dev/gatsby-image
 * - `useStaticQuery`: https://www.gatsbyjs.com/docs/use-static-query/
 */

const Image = ({ src, imageClass }) => {
  const data = useStaticQuery(graphql`
    query {
      gradient1: file(relativePath: { eq: "plastic1-tiny.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1440, quality: 85) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      gradient2: file(relativePath: { eq: "plastic2-tiny.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1440, quality: 85) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      gradient3: file(relativePath: { eq: "plastic3-tiny.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1440, quality: 85) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      brad2: file(relativePath: { eq: "brad-2.jpg" }) {
        childImageSharp {
          fluid(fit: COVER, maxWidth: 1440, quality: 50) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  const styling = {
    // position: "absolute",
    // top: 0,
    // left: 0,
    width: "100vw",
    height: "100vh",
    // mixBlendMode: "hue",
    // pointerEvents: "none",
    // zIndex: 2,
    // transition: "filter 0.8s ease-out",
  }

  // const imageStyling = h => {
  //   return {
  //     filter: `hue-rotate(${h}deg)`,
  //     // transition: "filter 0.8s ease-out",
  //   }
  // }

  return (
    <>
      {src === 1 ? (
        <Img
          fluid={data.gradient1.childImageSharp.fluid}
          loading="eager"
          alt="Projects gradient text"
          fadeIn={false}
          // objectFit="cover"
          // placeholderStyle={{ mixBlendMode: "hue" }}
          // style={{ height: "100vh", width: "100vw" }}
          // className="oi-1"
          style={styling}
          // imgStyle={{filter: "hue-rotate(0deg)"}}
        />
      ) : src === 2 ? (
        <Img
          fluid={data.gradient2.childImageSharp.fluid}
          loading="eager"
          // fadeIn={false}
          // placeholderClassName={imageClass}
          alt="About Me gradient text"
          // style={{ height: "100vh", width: "100vw" }}
          // className="oi-2"
          style={styling}
          // imgStyle={{filter: "hue-rotate(120deg)"}}
        />
      ) : src === 3 ? (
        <Img
          fluid={data.gradient3.childImageSharp.fluid}
          loading="eager"
          // fadeIn={false}
          // placeholderClassName={imageClass}
          alt="Contact gradient text"
          // className="oi-3"
          style={styling}
          // imgStyle={{filter: "hue-rotate(240deg)"}}
        />
      ) : src === 8 ? (
        <Img
          fluid={data.brad2.childImageSharp.fluid}
          alt="brad and a tree"
          objectPosition="50% 0%"
          style={{ height: "100%", width: "100%" }}
        />
      ) : null}
    </>
  )
}

export default Image
