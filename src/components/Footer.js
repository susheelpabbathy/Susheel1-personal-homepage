import React from 'react'
import PropTypes from 'prop-types'

const Footer = (props) => (
    <footer id="footer" style={props.timeout ? {display: 'none'} : {}}>
        
        <p className="copyright">
         Built with <a href="http://gatsby-dimension.surge.sh">Gatsby.js</a> and ❤️ by <a href="https://drive.google.com/file/d/1OnlejTOM6SIezyD54TjQHnVLxu1AH2MD/view?usp=sharing">SusheelPabbathy</a>  
        <br/>
        </p>
    </footer>
)

Footer.propTypes = {
    timeout: PropTypes.bool
}

export default Footer
