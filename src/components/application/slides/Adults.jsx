import React, { Component, PropTypes } from 'react'
import Slide from '../Slide'
import PersonCollection from '../PersonCollection'
import { organization } from '../../../config'
import { observer } from 'mobx-react'

@observer
class Adults extends Component {
  render() {
    const { adults, allChildren } = this.props

    return (
      <Slide header="Adults" id="adults" nextDisabled={!adults.isValid}
             beginsSection>
        <p>Not including the people the people listed below, who else lives in the household?</p>

        <ul>
          {adults.items.filter(person => person.isAttestor).map(person =>
            <li key={person.id}><strong>{person.firstName}</strong></li>
           )}
          {allChildren.map(person =>
            <li key={person.id}><strong>{person.firstName}</strong></li>
           )}
        </ul>

        <p>Keep in mind the definition of a household. Don’t forget about grandparents or other extended family members that are living with you. Also include people that are not currently living with you, but are only away on a temporary basis, like kids that are away at college. Include people regardless of age or whether they earn or receive income.</p>

        <PersonCollection collection={adults}
                          filter={person => !person.isAttestor} />
      </Slide>
    )
  }
}

export default Adults
