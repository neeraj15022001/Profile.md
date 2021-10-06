import React from 'react';

function DockButton({ url, icon, label }) {
    return (
        <div className="my-2 text-white d-flex align-content-center justify-content-start">
            <button className="btn button-theme-red-100 text-white border-0 p-3 fs-1">
                <a href={url}>{icon}</a>
            </button>
            <span className="text-capitalize ms-2 align-self-center">{label}</span>
        </div>
    );
}

export default DockButton;
