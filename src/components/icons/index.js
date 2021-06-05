import React from "react"
import PropTypes from "prop-types"

import IconLinkedIn from "./linkedin"
import IconGitHub from "./github"
import IconMail from "./mail"
import IconTwitter from "./twitter"
import IconGatsby from "./gatsby"

// Utility function to grab Icons by name
const Icon = ({ name, color }) => {
  switch (name.toLowerCase()) {
    case "linkedin":
      return <IconLinkedIn color={color} />
    case "github":
      return <IconGitHub color={color} />
    case "mail":
      return <IconMail color={color} />
    case "twitter":
      return <IconTwitter color={color} />
    case "gatsby":
      return <IconGatsby color={color} />
    default:
      return null
  }
}

Icon.propTypes = {
  name: PropTypes.string.isRequired,
  color: PropTypes.string,
}

export default Icon
