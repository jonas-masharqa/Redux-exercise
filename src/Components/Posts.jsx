import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { getData } from '../js/actions/index'

const Post = (props) => {
  useEffect(() => {
    props.getData()
  }, [])

  return (
    <>
      <ul>
        {props.articles.map(el => (
          <li key={el.id}>{el.title}</li>
        ))}
      </ul>
    </>
  )
}

function mapStateToProps(state) {
  return {
    articles: state.remoteArticles.slice(0, 10)
  }
}

export default connect(
  mapStateToProps,
  { getData }
)(Post)
