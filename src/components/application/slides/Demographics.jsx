import React, { Component, PropTypes } from 'react'
import Slide from '../Slide'
import DemographicsForm from './DemographicsForm'
import { organization } from '../../../config'
import { observer } from 'mobx-react'

@observer
class Demographics extends Component {
  render() {
    const { students } = this.props

    return (
      <Slide header="Optional" id="optional" showHelp={false}>
        <p className="usa-font-lead">We are required to ask for information about the race and ethnicity of the students that are applying for the program.</p>

        <p>This information is important and helps to make sure we are fully serving our community. Responding to this section is optional and does not affect your children's eligibility for free or reduced price meals.</p>

        <p>Please complete the following questions:</p>

        {students.map(student =>
          <DemographicsForm student={student} key={student.id} />
         )}
        </div>
      </Slide>
    )
  }
}

Demographics.propTypes = {
  students: PropTypes.object.isRequired
}

export default Demographics
