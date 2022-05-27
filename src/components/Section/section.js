import React from 'react';
import PropTypes from 'prop-types';
import s from './section.module.css'

const Section = ({ title, children }) => {
    return (
        <div className={s.section}>
            <h1>{title}</h1>
            {children}
        </div>
    )
}

Section.propTypes = {
    title: PropTypes.string.isRequired,
    children: PropTypes.any.isRequired,

}

export default Section;