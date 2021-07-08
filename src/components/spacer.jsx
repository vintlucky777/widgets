import React from 'react'
import PropTypes from 'prop-types'

const sizeChart = {
    xs: '.5em',
    sm: '1em',
    md: '2em',
    lg: '4em',
    xl: '8em',
}

export default function Spacer({ style, size='md', ...props }) {
    const finalSize = sizeChart[size] || size
    const finalStyle = {
        width: finalSize,
        height: finalSize,
        ...style
    }
    return <div style={finalStyle} {...props} />
}
Spacer.propTypes = {
    size: PropTypes.oneOfType([
        PropTypes.oneOf(['xl', 'lg', 'md', 'sm', 'xs']),
        PropTypes.string,
    ]),
}
