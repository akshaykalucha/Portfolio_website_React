import React from 'react'

function SectionBottom() {
    return (
        <div>
            <section className="Techno__Stack">
                <div className="intro">
                    <p>Technology Stack</p>
                    <p className="intro-p1">MY WEBSITE ARCHITECTURE</p>
                </div>
                <div className="web__architecture-software">
                    <div>
                        <h3>Front-End</h3>
                        <sub>HTML/CSS + JavaScript</sub>
                        <ul>
                            <li>Single page Web apps written in create-react-app</li>
                            <li>Elements in table injected using Django template tags having</li>
                            <li>Multi-page, server rendered apps written in Next js + React</li>
                        </ul>
                    </div>
                    <div>
                        <h3>Thin Backend Servers (non CPU-bound)</h3>
                        <sub>Python + Django</sub>
                        <ul>
                            <li>Django app for each service.</li>
                            <li>Single thread event-driven architecture, good for simple services that are mostly waiting on I/O.</li>
                        </ul>
                    </div>
                    <div>
                        <h3>Database</h3>
                        <sub>Sqlite</sub>
                        <ul>
                            <li>Storage for JWT Identity, Hangfire, and Application Servers.</li>
                            <li>Low level/embedded IoT programming</li>
                            <li>Single instance backed by persistent volume (would like to deploy a cluster someday).</li>
                        </ul>
                    </div>
                    <div>
                        <h3>Deployment</h3>
                        <sub>Pythonanywhere</sub>
                        <ul>
                            <li>In-browser interactive consoles with code running on hosted servers, shareable between multiple users.</li>
                            <li>WSGI-based web hosting</li>
                            <li>Many popular Python modules pre-installed</li>
                        </ul>
                    </div>
                </div>

                <div className="software-services">
                    <h2>Services</h2>
                    <table className="service_table">
                        <thead>
                            <tr>
                                <th scope="col">Name</th>
                                <th scope="col">Endpoint</th>
                                <th scope="col">Description</th>
                            </tr>
                        </thead>
                        <tbody>
                        <tr>
                            <td>jwtidentity</td>
                            <td>Akshaykalucha.io/api/auth</td>
                            <td>JWT Authentication Server used to secure all other services (hangfire, mailer)</td>
                        </tr>
                        <tr>
                            <td>mysql</td>
                            <td>private. only accessible within cluster</td>
                            <td>Database for jwtidentity, hangfire, hangfire_github, hangfire_youtube</td>
                        </tr>
                        <tr>
                            <td>Django+Node</td>
                            <td>Akshaykalucha.io/api/hangfire</td>
                            <td>Background processing server</td>
                        </tr>
                        <tr>
                            <td>front</td>
                            <td>Akshaykalucha.io/</td>
                            <td>What you see</td>
                        </tr>
                        <tr>
                            <td className="lastchild">mailer</td>
                            <td className="lastchild">Akshaykalucha.io/api/mailer</td>
                            <td className="lastchild">	Mailing service secured by JWT</td>
                        </tr>
                        </tbody>
                    </table>
                </div>
            </section>
        </div>
    )
}

export default SectionBottom
