import React, { Component } from 'react'
import 'react-quill/dist/quill.snow.css'
import 'react-quill/dist/quill.bubble.css'
import ReactQuill, { Quill } from 'react-quill'
import './blogmain.css'
import CircularProgress from '@material-ui/core/CircularProgress';
import axios from 'axios';
import $ from 'jquery';



var Size = Quill.import('attributors/style/size');
Size.whitelist = ['14px', '16px', '18px', '20px', '21px', '22px', '24px', '26px'];
Quill.register(Size, true);

class BlogMain extends Component {

    state = {
        title: '',
        deltaData : null,
        returnedDelta: null,
        progress: false,
        tag1: '',
        tag2: '',
        tag3: ''
    }


    handleInput = (event) => {
      console.log("redfghjm,")
      this.setState({
        [event.target.name]: event.target.value
      })
    }

    componentDidMount(){
      let _this = this;
      $('select[data-menu]').each(function() {
        /* eslint-disable */
        let select = $(this),
            type = select.data('menu'),
            menu = $('<div />').addClass('select-menu ' + type),
            button = $('<button />'),
            buttonDiv = $('<div />'),
            current = $('<span />').text(select.find('option:selected').text()).appendTo(buttonDiv),
            arrow = $('<em />').prependTo(button);
        
        button.css({
            '--h': select.outerHeight(),
            '--w': select.outerWidth()
        });
    
        select.wrap(menu);
    
        button.append(buttonDiv).insertAfter(select);
    
    });
    
    $(document).on('click', '.select-menu', function(e) {
      console.log("selecteddd")
    
        let menu = $(this),
            select = menu.children('select'),
            options = select.find('option'),
            active = select.find('option:selected'),
            button = menu.children('button'),
            buttonDiv = button.children('div'),
            current = buttonDiv.children('span');
        // console.log(menu[0].innerText)
        // console.log(current[0].innerText)
        if(!menu.hasClass('change')) {
    
            let nextOption = options.eq(active.index() === options.length - 1 ? 0 : active.index() + 1),
                next = $('<span />').addClass('next').text(nextOption.text()).appendTo(buttonDiv);
            console.log(nextOption[0].value)
            console.log(nextOption[0].innerHTML)
            if(nextOption[0].value=== "val1"){
                _this.setState(state => {
                  var tag1 = state.tag1
                  tag1 = nextOption[0].innerHTML;
                  return {
                    tag1,
                  };
                });

            }

            if(nextOption[0].value=== "val2"){
              _this.setState(state => {
                var tag2 = state.tag2
                tag2 = nextOption[0].innerHTML;
                return {
                  tag2,
                };
              });

          }

          if(nextOption[0].value=== "val3"){
            _this.setState(state => {
              var tag3 = state.tag3
              tag3 = nextOption[0].innerHTML;
              return {
                tag3,
              };
            });

        }
    
            options.attr('selected', false);
            nextOption.attr('selected', true);
    
            menu.addClass('change');
    
            setTimeout(() => {
    
                next.removeClass('next');
                menu.removeClass('change');
                current.remove();
    
            }, 650);
    
        }
    
    });
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
      var taglist = []
      if(this.state.tag1 === "None" || this.state.tag1 === ""){
          console.log()
      }else{
        taglist.push(this.state.tag1)
      }
      if(this.state.tag2 === "None" || this.state.tag2 === ""){
        console.log()
      }else{
        taglist.push(this.state.tag2)
      }
      if(this.state.tag3 === "None" || this.state.tag3 === ""){
        console.log()
      }else{
        taglist.push(this.state.tag3)
      }

      console.log(taglist, "seding to sevrer")
      this.setState({
        progress: true
      })
      const headers = {
        'Content-Type': 'application/json',
        'X-Requested-With': 'XMLHttpRequest',
        'Access-Control-Allow-Origin': 'http://localhost:300'
      }
      axios.post(`http://localhost:8000/api/v1/backend1/test/`,
       {title: this.state.title, deltaData: JSON.stringify(this.state.deltaData), tags: taglist},
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

    handleSelects = () => {
      console.log("changeddd")
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

              <div className="tagsd">
                <div className="selecttags">
                  <p>Select Tags:</p>
                </div>
                <div className="main_tags">

                  <select onChange={event => this.handleSelects(event)} data-menu="vertical">
                      <option value="val1" name="none" defaultValue>None</option>
                      <option value="val1" name="Tech">Tech</option>
                      <option value="val1" name="Dev">Dev</option>
                      <option value="val1" name="Travel">Travel</option>
                      <option value="val1" name="Bio">Bio</option>
                      <option value="val1" name="React">React</option>
                      <option value="val1" name="Stack">Stack</option>
                  </select>

                  <select data-menu="vertical">
                      <option value="val2" defaultValue>None</option>
                      <option value="val2">Tech</option>
                      <option value="val2">Dev</option>
                      <option value="val2">Travel</option>
                      <option value="val2">Bio</option>
                      <option value="val2">React</option>
                      <option value="val2">Stack</option>
                  </select>

                  <select data-menu="vertical">
                      <option value="val3" defaultValue>None</option>
                      <option value="val3">Tech</option>
                      <option value="val3">Dev</option>
                      <option value="val3">Travel</option>
                      <option value="val3">Bio</option>
                      <option value="val3">React</option>
                      <option value="val3">Stack</option>
                  </select>

                </div>
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

