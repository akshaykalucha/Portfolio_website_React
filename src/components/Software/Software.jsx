import React from 'react'
import { TableBody, Tableheading } from './content'
import './software.css'
import SectionBottom from './SectionBottom'

function Software() {

    return (
        <div>
            <div className="software__heading">
            <p>Software Repository</p>
            </div>
            <div className="softwareTable">
                <table className="softwareTab">
                    <thead>
                        <tr>
                            {Tableheading.map(function(heading, index){
                                return <th key={index} scope="col">{heading}</th>
                            })}
                        </tr>
                    </thead>
                    <tbody>
                        {TableBody.map((content, index) =>
                        <tr key={index}>
                            <td>{content.title}</td>
                            <td>{content.description}</td>
                            <td>{content.language}</td>
                            <td>{content.created_on}</td>
                            <td>{content.stars}</td>
                            <td>{content.updates}</td>
                        </tr>
                        )}
                    </tbody>
                </table>
            </div>
            <SectionBottom />
        </div>
    )
}

export default Software
