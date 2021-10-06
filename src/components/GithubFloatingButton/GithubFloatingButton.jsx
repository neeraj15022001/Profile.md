import React from 'react'
import { Github } from 'react-bootstrap-icons'
import "./GithubFloatingButton.css"
import "bootstrap/dist/css/bootstrap.min.css"

function GithubFloatingButton() {
    return (
        <div className="github-button-container d-flex align-items-center justify-content-center">
            <button className="github-button btn d-flex align-items-center justify-content-center">
                <a className="d-flex align-content-center justify-content-center" href="https://github.com/victor-thescuti/Profile.md"><Github className="github-icon" color="white" /></a>
            </button>
        </div>
    )
}

export default GithubFloatingButton
