import React, { useState } from 'react'
import { connect } from 'react-redux'
import { addArticle } from '../js/actions/index'

const ConnectedForm = (props) => {
  const [title, setTitle] = useState([])

  const handleChange = event => {
    setTitle(event.target.value)
  }

  const handleSubmit = event => {
    event.preventDefault()
    props.dispatch(addArticle({ title }))
    setTitle('')
  }

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="title">Title</label>
        <input
          type="text"
          id="title"
          value={title}
          onChange={handleChange}
        />
      </div>
      <button type="submit">SAVE</button>
    </form>
  )
}

const mapDispatchToProps = dispatch => {
  return {
    dispatch
  }
}

const Form = connect(null, mapDispatchToProps)(ConnectedForm)

export default Form
