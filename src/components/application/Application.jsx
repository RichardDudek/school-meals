import React, { Component } from 'react'
import { observer } from 'mobx-react'

import Welcome from './slides/Welcome'
import BeforeYouBegin from './slides/BeforeYouBegin'
import LegalStatements from './slides/LegalStatements'
import Attestation from './slides/Attestation'
import Students from './slides/Students'
import AssistancePrograms from './slides/AssistancePrograms'

@observer
class Application extends Component {
  render() {
    const {
      attestation,
      students,
      assistancePrograms
    } = this.props.applicationData

    return (
      <div>
        <Welcome />
        <BeforeYouBegin />
        <LegalStatements />
        <Attestation attestation={attestation} />
        <Students attestation={attestation} students={students} />
        <AssistancePrograms assistancePrograms={assistancePrograms}
                            students={students} />
{/*
        <OtherPrograms />
        <OtherProgramsStudent />
        <OtherStudents />
        <YoungChildren />
        <OtherChildren />
        <ChildIncome />
        <Military />
        <MilitaryDetails />
        <OtherHouseholdMembers />

        <Ssn />
        <Demographics />
        <Summary />
        <ThankYou />
*/}
      </div>
    )
  }
}

export default Application
