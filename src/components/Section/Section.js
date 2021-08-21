import React from 'react';
import s from './Section.module.css';

const Section = ({title, children}) => (
    <div className={s.container}>
    <h2 className={s.title}>{title}</h2>
    {children}
    </div>
);

export default Section;