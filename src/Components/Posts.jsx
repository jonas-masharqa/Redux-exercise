import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { getData } from '../js/actions/index'

const Post = (props) => {
  useEffect(() => {
    props.getData()
  }, [])

  return(
    <></>
  )

}

export default connect(
  null,
  { getData }
)(Post)