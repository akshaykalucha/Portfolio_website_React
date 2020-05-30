import React from 'react';
import './blogarticle.css'

function BlogArticle() {
    return (
        <div>
            <div className="blogArticle__main">
                <div className="main-component">
                    <div className="headings">
                        <h1>Popular Articles</h1>
                    </div>
                    <div className="cards">
                        <div className="thumbnail">
                            <img src="" alt=""/>
                        </div>
                        <div className="card__heading">
                            <h1>Card Heading</h1>
                        </div>
                        <div className="card__intro">
                            <p></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default BlogArticle
