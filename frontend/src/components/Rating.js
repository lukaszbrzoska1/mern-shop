import React from 'react'
import PropTypes from 'prop-types'

const Rating = ({ value, text, color = 'gold' }) => {
  return (
    <div className='rating'>
      <span>
        {[...Array(5)].map((_, index) => {
          const cls = value >= index + 1
            ? 'fas fa-star'
            : value >= index + 0.5
              ? 'fas fa-star-half-alt'
              : 'far fa-star'
          return <i key={'Star' + index} style={{ color }} className={cls} />
        })}
      </span>
      <span>{text && text}</span>
    </div>
  )
}

Rating.propTypes = {
  value: PropTypes.number.isRequired,
  text: PropTypes.string.isRequired,
}

export default Rating
