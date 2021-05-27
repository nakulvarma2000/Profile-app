import React, { Component } from 'react'
import ResumeContent from './ResumeContent'
import ResumeDownload from './ResumeDownload'

export default class Resume extends Component {
    render() {
        return (
            <div className="bg1">
                <div className="Resume-page">
                    <div className="h2 page-title">Resume</div>
                    <ResumeDownload />
                    <ResumeContent />
                </div>
            </div>
        )
    }
}
