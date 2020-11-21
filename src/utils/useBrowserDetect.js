import React from "react"

export default function useDeviceDetect() {
  const [isSafari, setSafari] = React.useState(false)

  React.useEffect(() => {
    if (window !== `undefined`) {
      const userAgentString = window.navigator.userAgent
      let chromeAgent = Boolean(userAgentString.indexOf("Chrome") > -1)
      let safariAgent = Boolean(userAgentString.indexOf("Safari") > -1)
      if (chromeAgent && safariAgent) {
        safariAgent = false
      }
      setSafari(safariAgent)
    }
  }, [])

  return { isSafari }
}
