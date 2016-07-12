import React, { Component, PropTypes } from 'react'
import Slide from '../Slide'
import InputField from '../InputField'
import { observer } from 'mobx-react'

@observer
class Contact extends Component {
  render() {
    const { contact } = this.props

    return (
      <Slide header="Contact Info" id="contact" beginsSection>
        <p>OPTIONAL—please enter your contact information so that we can reach you in case there are any issues with your application.</p>

        <InputField
            name="phone"
            label="Phone number"
            type="tel"
            object={contact}
        />

        <InputField
            name="email"
            label="Email"
            type="email"
            object={contact}
        />

        <InputField
            name="address1"
            label="Address"
            object={contact}
        />

        <InputField
            name="address2"
            label="Apartment/Unit Number"
            object={contact}
        />

        <InputField
            name="city"
            label="City"
            object={contact}
        />

        <InputField
            name="state"
            label="State"
            object={contact}
        />

        <InputField
            name="zip"
            label="ZIP Code"
            object={contact}
        />

      </Slide>
    )
  }
}

Contact.propTypes = {
  contact: PropTypes.shape({
    email: PropTypes.string,
    phone: PropTypes.string,
    address1: PropTypes.string,
    address2: PropTypes.string,
    city: PropTypes.string,
    state: PropTypes.string,
    zip: PropTypes.string
  })
}

export default Contact
