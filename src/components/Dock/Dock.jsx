import React, { useState } from 'react';
import DockButton from './DockButton/DockButton';
import './Dock.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BugFill, Diagram2Fill, CaretRightFill, CaretLeftFill } from 'react-bootstrap-icons';

function Dock() {
    const [isOpen, setOpen] = useState(false);
    const toggleOpeningButton = () => {
        setOpen((isOpen) => !isOpen);
    };
    return (
        <div
            className="p-3 dock d-flex flex-column align-content-center justify-content-center"
            style={{ left: isOpen ? 0 : -200 }}
        >
            <DockButton
                url="https://github.com/victor-thescuti/Profile.md/issues"
                label="issues"
                icon={<BugFill color="white" />}
            />
            <DockButton
                url="https://github.com/victor-thescuti/Profile.md/pulls"
                label="pull requests"
                icon={<Diagram2Fill color="white" />}
            />
            <button className="opening-button border-0" onClick={toggleOpeningButton}>
                {isOpen ? <CaretLeftFill /> : <CaretRightFill />}
            </button>
        </div>
    );
}
export default Dock;
