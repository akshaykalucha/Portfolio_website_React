import React, { Component } from 'react'
import 'react-quill/dist/quill.snow.css'
import 'react-quill/dist/quill.bubble.css'
import ReactQuill, { Quill } from 'react-quill'
import './blogmain.css'
import CircularProgress from '@material-ui/core/CircularProgress';
import axios from 'axios';


var Size = Quill.import('attributors/style/size');
Size.whitelist = ['14px', '16px', '18px', '20px', '21px', '22px', '24px', '26px'];
Quill.register(Size, true);

class BlogMain extends Component {

    state = {
        title: '',
        deltaData : null,
        returnedDelta: null,
        progress: false
    }


    handleInput = (event) => {
      this.setState({
        [event.target.name]: event.target.value
      })
    }


    handleChange = (value) => {

      const editor = this.reactQuillRef.getEditor();

      this.setState({
        deltaData: editor.getContents()
      })
    }

    handleSubmit = (event) => {
      event.preventDefault()
      if(this.state.deltaData === null){
        return alert("there is no blog data")
      }
      if(this.state.deltaData.ops.length === 1){
        if(this.state.deltaData.ops[0].insert === '\n'){
          return alert("please write the blog first")
        }
      }
      if(this.state.title.length <= 20){
        return alert("Blog title too small")
      }
      this.setState({
        progress: true
      })
      const headers = {
        'Content-Type': 'application/json',
        'X-Requested-With': 'XMLHttpRequest',
        'Access-Control-Allow-Origin': 'http://localhost:300'
      }
      axios.post(`http://localhost:8000/api/v1/backend1/test/`,
       {title: this.state.title, deltaData: JSON.stringify(this.state.deltaData)},
       {headers: headers, withCredentials: true, xsrfCookieName: 'csrftoken_testtest', xsrfHeaderName: 'X-CSRFToken',}
       )
      .then(res=> {
        this.setState({
          returnedDelta: JSON.parse(res.data.Data.deltaData),
          progress: false
        })
        console.log(res)
      })
      .catch(err=>{
        console.log(err)
      })
    }
    

  render() {
    let Cirprogress = <CircularProgress />
    var SizeStyle = Quill.import('attributors/style/align')
    Quill.register(SizeStyle, true);


    BlogMain.modules = {}
    BlogMain.modules.syntax = true
    BlogMain.modules.toolbar = [
      ['bold', 'italic', 'underline', 'strike'],       // toggled buttons
      ['blockquote', 'code-block'],                    // blocks
      [{ 'header': 1 }, { 'header': 2 }],              // custom button values
      ['image'],
      [{ 'list': 'ordered'}, { 'list': 'bullet' }],    // lists
      // [{ 'script': 'sub'}, { 'script': 'super' }],     // superscript/subscript
      [{ 'indent': '-1'}, { 'indent': '+1' }],         // outdent/indent
      [{ 'direction': 'rtl' }],                        // text direction
      // [{ 'size': ['small', false, 'large', 'huge'] }], // custom dropdown
      [{ 'size': ['14px', '16px', '18px', '20px', '21px', '22px', '24px', '26px'] }],
      // [{ 'header': [1, 2, 3, 4, 5, 6, false] }],       // header dropdown
      [{ 'color': [] }, { 'background': [] }],         // dropdown with defaults
      [{ 'font': [] }],                                // font family
      [{ 'align': [] }],                               // text align
      ['clean'],                                       // remove formatting
    ]

    BlogMain.formats = [
      'header', 'font', 'background', 'color', 'code', 'size',
      'bold', 'italic', 'underline', 'strike', 'blockquote', 'image',
      'list', 'bullet', 'indent', 'script', 'align', 'direction',
      'link', 'image', 'code-block', 'formula', 'video', 'size'
    ]




    return (
      <div>
            <div className="myEditor">
                <h1 className="blogheading">Design a Blog:</h1>
                <ReactQuill
                theme="snow" onChange={this.handleChange}
                formats={BlogMain.formats} modules={BlogMain.modules}
                ref={(el) => { this.reactQuillRef = el }} />
            </div>
            <div className="titlepost">
              <p>Give your Blog a Title....</p>
              <input type="text" className="postTitle" name="title" value={this.state.title} onChange={event => this.handleInput(event)} />
            </div>

            <div className="quilltextview">
              <ReactQuill
                value={this.state.returnedDelta}
                readOnly={true}
                theme={"bubble"}
              />
            </div>

            <div className="submitButton">
              <button type="submit" onClick={event => this.handleSubmit(event)}>Submit Content</button>
              {this.state.progress ? 
                <div className="cirLoading">
                  {Cirprogress}
                </div>
               : null}
            </div>

      </div>
    );
  }
}

export default BlogMain;

