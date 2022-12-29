
import Timeline from "@components/timeline/Timeline";
import { STATIC_CONTENT } from "@constant";

function Education() {
  return (
    <Timeline events={STATIC_CONTENT.EDUCATION.TIMELINE} />
  )
}

export default Education