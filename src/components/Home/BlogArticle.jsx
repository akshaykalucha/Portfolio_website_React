import React, { useState, useEffect } from 'react';
import './blogarticle.css'
import { connect } from 'react-redux'

// function WordCount(str) { 
//     return str.split(" ").length;
// }


function BlogArticle(props) {

    const[reactTag, setReactTag] = useState(null)
    const[gatsbyTag, setGatsbyTag] = useState(null)
    const[devTag, setDevTag] = useState(null)
    const[travelTag, setTravelTag] = useState(null)
    const[bioTag, setBioTag] = useState(null)

    const [cardContent, setCardContent] = useState([
        {
            thumbnail: "https://smakosh.com/static/e8dbd829bff5e2fd426674eee81d98cb/bc549/seo.png",
            title: "Handling SEO in React apps",
            content: "I have landed successfully in Bali, rented a scooter and been enjoying my ride from my place to Dojo Bali where I’m currently writing this article. SEO definition Search engine optimization (SEO) is the process of increasing",
            tags: ["react", "gatsby", "dev"]
        },
        {
            thumbnail: "https://smakosh.com/static/e6960ef7eace9ab85feadcdfc6a2b6e2/bc549/custom-hook.png",
            title: "How To add dark mode easily with a custom React hook",
            content: "In this quick article, I will be implementing dark mode to a quick React app with a custom React hook, Before we start, let’s see how is this supposed to work in three easy steps: We will check first if the chosen theme",
            tags: ["dev"]
        },        
        {
            thumbnail: "https://smakosh.com/static/51d00c9f7ae97844492ca7737a6e139a/0a89a/flight.jpg",
            title: "My trip to Istanbul & why I hate traveling",
            content: "I wanted to visit Istanbul 3 years ago and even told my friends about it, but 2 years after that moment, I didn’t really want to travel anywhere anymore because in my opinion, the Internet (even if it’s not decentralized) saves",
            tags: ["travel", "bio"]
        }
    ])

    useEffect(()=> {
        /* eslint-disable */
        cardContent.map((content) => 
            content.tags.map((tag) => {
                if(tag==="react"){
                    setReactTag({
                        backgroundColor: '#61dafb'
                    })
                }else if(tag==="dev"){
                    setDevTag({
                        backgroundColor: '#263238'
                    })
                }else if(tag==="gatsby"){
                    setGatsbyTag({
                        backgroundColor: '#663399'
                    })
                }else if(tag==="travel"){
                    setTravelTag({
                        backgroundColor: '#ff9800'
                    })
                }else if(tag==="bio"){
                    setBioTag({
                        backgroundColor: '#f44336'
                    })
                }
            })
        )
        for (let i = 0; i<cardContent.length; i++){
            let res = cardContent[i].title.slice(0, 17)
            let newTitle = res + '...'
            cardContent[i]["DesktopTitle"] = newTitle
        }
        setCardContent([...cardContent])
        console.log(cardContent)
    }, [])

    useEffect(() => {
        /* eslint-disable */
        if(props.isMobileStore){
            console.log("yes mobile blog")
            for (let i = 0; i<cardContent.length; i++){
                let res1 = cardContent[i].title.slice(0, 20)
                let newTitle = res1 + '...'
                cardContent[i]["MobileTitle"] = newTitle
                let res = cardContent[i].content.slice(0, 29)
                let newContent = res + '...'
                cardContent[i]["Mobilecontent"] = newContent
                console.log(newContent)
            }
            setCardContent([...cardContent])
        }
        console.log(cardContent)
    },[props.isMobileStore])


    return(
            <div>
                <div className="blogArticle__main">
                    <div className="main-component">
                        <div className="headings">
                            <h1>Popular Articles</h1>
                        </div>
                        <div className="cards">
                        {cardContent.map((content) => 
                            <div key={Math.random()} className="card-content">
                                <div className="img-card">
                                    <div className="thumbnail">
                                        <img src={content.thumbnail} alt=""/>
                                    </div>
                                </div>
                                <div className="mov__view">
                                    <div className="card__heading">
                                        <h1>{props.isMobileStore ? content.MobileTitle : content.DesktopTitle}</h1>
                                    </div>
                                    <div className="card__intro">
                                        <p>{props.isMobileStore ? content.Mobilecontent : content.content}</p>
                                    </div>
                                    <div className="tags__view">
                                        <div className="tags">
                                            {content.tags.map((tag) => 
                                                <div key={Math.random()} style={
                                                    tag==="gatsby" ? gatsbyTag
                                                    : tag==="react" ? reactTag
                                                    : tag==="dev" ? devTag
                                                    : tag==="travel" ? travelTag
                                                    : tag==="bio" ? bioTag
                                                    : null
                                                } className="tag"><a className="tagLink" href="/">{tag}</a></div>
                                            )}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )}
                        </div>
                    </div>
                </div>
            </div>
    )



    // return (
        // <div>
        //     <div className="blogArticle__main">
        //         <div className="main-component">
        //             <div className="headings">
        //                 <h1>Popular Articles</h1>
        //             </div>
        //             <div className="cards">
        //                 <div className="thumbnail">
        //                     <img src="" alt=""/>
        //                 </div>
        //                 <div className="card__heading">
        //                     <h1>Card Heading</h1>
        //                 </div>
        //                 <div className="card__intro">
        //                     <p></p>
        //                 </div>
        //             </div>
        //         </div>
        //     </div>
        // </div>
    // )
}

const mapStateToProps = state => {
    return {
        isMobileStore: state.isMobile,
    }
}

export default connect(mapStateToProps)(BlogArticle)