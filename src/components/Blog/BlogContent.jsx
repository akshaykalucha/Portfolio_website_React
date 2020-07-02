import React, { useState } from 'react'
import ReactQuill from 'react-quill'
import 'react-quill/dist/quill.bubble.css';
// import Parser from 'html-react-parser';


function BlogContent() {

    const[content] = useState(`
        <p>hi this is a normal code block</p><p><br></p><blockquote>My shakespeare quote...</blockquote><pre class="ql-syntax" spellcheck="false"><span class="hljs-built_in">print</span>(<span class="hljs-string">"hello world"</span>)
        </pre>
    `)
    
    return (
        <div>
            <ReactQuill
              value={content}
              readOnly={true}
              theme={"bubble"}
            />
        </div>
    )
}

export default BlogContent
