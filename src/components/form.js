import React from 'react'

export default () => (
  <form
    name="Demo form"
    method="POST"
    data-netlify="true"
    style={{ display: 'flex', flexDirection: 'column' }}
  >
    <input type="hidden" name="form-name" name="Demo form" />
    <label htmlFor="name">Name</label>
    <input
      name="name"
      id="name"
      type="text"
    />

    <label htmlFor="email">Email</label>
    <input
      name="email"
      id="email"
      type="email"
    />

    <label htmlFor="message">Message</label>
    <textarea
      name="message"
      id="message"
    />

    <button type="submit">
      Submit
    </button>
  </form>
)
