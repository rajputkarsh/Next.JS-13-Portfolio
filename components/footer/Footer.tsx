import { textAlign } from "@mui/system"
import { CONTENT_PROPERTIES } from "../../utils/constant"

function Footer() {
  return (
    <footer style={{textAlign:"center"}}>
      <p>
        Made with 
        <span>❤️</span>
        by {
          CONTENT_PROPERTIES.NAME.TITLE
        }
      </p>
    </footer>
  )
}

export default Footer