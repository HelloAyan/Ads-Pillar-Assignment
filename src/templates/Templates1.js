import React, { useState } from 'react';
import logo_1 from '../assets/images/logo_1.png';
import { SketchPicker } from 'react-color';

const Templates1 = () => {
    const [color, setColor] = useState('#000000'); // Default color: black

    const handleChangeComplete = (color) => {
        setColor(color.hex);
    };

    return (
        <div className='template_main_container'>
            <div className='template_inner_container'>
                <div className='left_template'>
                    <div className='left_template_text_container'>
                        <img src={logo_1} className='left_side_logo'></img>
                        <div className='left_side_title'>Experience car <br /> repair services</div>
                        <div className='left_side_content'>Rev Up Your Engine! <br /> Experience Top-Notch <br /> Car Repair Services. <br /> We keep you rolling <br /> smoothly.</div>
                        <div className='left_side_phone_number'>+123-456-7890</div>
                    </div>
                </div>
                <div className='right_template'>
                    <div className='right_template_image'></div>
                </div>
            </div>
        </div>
    )
}

export default Templates1