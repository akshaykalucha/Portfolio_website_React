import React, { Component } from 'react'
import 'react-quill/dist/quill.snow.css'
import 'react-quill/dist/quill.bubble.css'
import ReactQuill, { Quill } from 'react-quill'
import './blogmain.css'
// import Parser from 'html-react-parser';
// import parse from 'html-react-parser';


class BlogMain extends Component {

    state = {
        text: '',
        toolbar: ['bold'],
        deltaData : null
    }

    handleChange(value) {
      this.setState({
        text: value
      })
      const editor = this.reactQuillRef.getEditor();
      // console.log(Parser(value))
      // console.log(editor.getContents())
      this.setState({
        deltaData: editor.getContents()
      })
      console.log(this.state.text)


      //---> getting text from editor
      // const editor = this.reactQuillRef.getEditor();
      // const unprivilegedEditor = this.reactQuillRef.makeUnprivilegedEditor(editor);
      // this.inpText = unprivilegedEditor.getText();
      // console.log("unprivilegedEditor.getText()", unprivilegedEditor.getText());
      //----<
    }

  render() {
    // var ColorClass = Quill.import('attributors/class/color');
    var SizeStyle = Quill.import('attributors/style/align')
    // Quill.register(ColorClass, true);
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
      'link', 'image', 'code-block', 'formula', 'video'
    ]




    return (
      <div>
            <div className="myEditor">
                <ReactQuill
                theme="snow" value={this.state.text} onChange={this.handleChange.bind(this)}
                formats={BlogMain.formats} modules={BlogMain.modules}
                ref={(el) => { this.reactQuillRef = el }} />
            </div>
            <div className="submitButton">
              <button type="submit">Submit Content</button>
            </div>

            <ReactQuill
              value={this.state.deltaData}
              readOnly={true}
              theme={"bubble"}
            />
      </div>
    );
  }
}

export default BlogMain;

