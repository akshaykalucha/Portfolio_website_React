import React from 'react'
import { TableBody, Tableheading } from './content'

function Software() {



    return (
        <div>
            <div style={{marginTop:"9rem"}} className="softwareTable">
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
        </div>
    )
}

export default Software
