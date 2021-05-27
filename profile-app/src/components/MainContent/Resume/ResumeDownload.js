import React, { Component } from 'react'
import { PDFDownloadLink } from '@react-pdf/renderer';
import MyDocument from './ResumePdf'

export default class ResumeDownload extends Component {
    render() {
        return (
            <div>
                <div className="dowload-button">
                    <PDFDownloadLink className="btn btn-primary" document={<MyDocument /> } fileName="Nakul_Resume.pdf">
                        {({ blob, url, loading, error }) => (loading ? 'Loading document...' : 'Download Resume')}
                    </PDFDownloadLink>
                </div>
            </div>
        )
    }
}
