import React from 'react';
import { XCircleFill } from 'react-bootstrap-icons';
import ReactMd from '../ReactMarkdown/ReactMd';
import 'bootstrap/dist/css/bootstrap.min.css';
import './PopUp.css';

function PopUp({ data }) {
    return (
        <section id="popup" className="bg-black">
            <div className="d-flex align-items-center justify-content-between">
                <div className="breadcrumb bg-success text-white d-flex align-items-center justify-content-center p-3 position-fixed">
                    <p className="m-0 p-0">Text Copied Successfully</p>
                </div>
                <button
                    className="btn btn-lg btn-success"
                    onClick={() => {
                        navigator.clipboard.writeText(data);
                        breadCrumbShow();
                    }}
                >
                    Copy
                </button>
                <button className="btn btn-lg button-theme-red-100 rounded-circle d-flex align-items-center justify-content-center ms-auto close-button flex-shrink-0 flex-grow-0">
                    <a
                        href="#"
                        className="text-decoration-none p-0- m-0 fs-2 d-flex align-items-center justify-content-center"
                    >
                        <XCircleFill color="white" />
                    </a>
                </button>
            </div>
            <div className="bg-theme-black-rasin text-white px-3 py-5 mt-3 overflow-auto">
                <ReactMd input={data} />
            </div>
        </section>
    );
}

const breadCrumbShow = () => {
    const breadcrumb = document.querySelector('.breadcrumb');
    console.log(breadcrumb);
    breadcrumb.style.right = '0';
    setTimeout(() => {
        breadcrumb.style.right = '-300px';
    }, 1500);
};
export default PopUp;
