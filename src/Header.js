import React from 'react';
import styles from '../src/App.css'
import { Link } from 'react-router-dom';

const header = () => {
    return (
        <div className='header_main_container'>
            <div className='template_items'> <Link to='/template1' style={{ textDecoration: 'none', color: 'inherit' }}>Template 1</Link> </div>
            <div className='template_items'> <Link to='/template2' style={{ textDecoration: 'none', color: 'inherit' }}> Template 2 </Link></div>
            <div className='template_items'> <Link to='/template3' style={{ textDecoration: 'none', color: 'inherit' }}>Template 3 </Link></div>
        </div>
    )
}

export default header