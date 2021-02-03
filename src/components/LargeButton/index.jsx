import React from 'react';
import './styles.css';

const LargeButton = ({url}) => {

    return (
        <div className="large-button-box">
            <button className="gradient-button" onClick={()=>window.location.href = url }>
                See Live
            </button>
        </div>
    )
}

export default LargeButton;