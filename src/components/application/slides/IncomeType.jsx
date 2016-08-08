import React, { Component, PropTypes } from 'react'
import Slide from '../Slide'
import IncomeTypeDefaultText from './IncomeTypeDefaultText'
import { computed } from 'mobx'
import { observer } from 'mobx-react'
import { Alert, Button } from 'react-bootstrap'
import { incomeTypeIsValid } from '../../../helpers'

@observer
class IncomeType extends Component {
  @computed get allSourcesFalse() {
    const { person, name } = this.props
    const sources = person.incomeTypes[name].sources

    for (let key in sources) {
      if (sources[key].has === false) {
        continue
      } else {
        return false
      }
    }

    return true
  }

  render() {
    const { person, name, label, showDefaultText, showMilitaryCaveat } = this.props
    const incomeType = person.incomeTypes[name]
    const defaultTextProps = { person, showMilitaryCaveat }

    return(
      <Slide header={person.firstName}
             id={`income/${person.id}/${name}`}
             helpArticle={`${name}-income`}
             nextDisabled={!incomeTypeIsValid(incomeType)}>
        {showDefaultText && <IncomeTypeDefaultText {...defaultTextProps} />}
        {this.props.children}

        { this.allSourcesFalse &&
          <Alert bsStyle="danger">
            <h4>Missing Income</h4>
            <p>
              On a previous page, you indicated that
              <strong>{person.firstName}</strong> receives income from one of
              the above sources. Please enter your income above or correct
              your previous answer.
            </p>
            <Button href={`#/income/${person.id}`}>Change previous answer</Button>
          </Alert>
        }
      </Slide>
    )
  }
}

IncomeType.propTypes = {
  person: PropTypes.object.isRequired,
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  showDefaultText: PropTypes.bool,
  showMilitaryCaveat: PropTypes.bool
}

IncomeType.defaultProps = {
  showDefaultText: true,
  showMilitaryCaveat: false
}

export default IncomeType
