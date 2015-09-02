/**
 * Z-MODAL
 * By Benjamin Caradeuc (benjamin@caradeuc.info)
 * benavern.github.io
 */

(function() {

  // constructor
  this.ZMODAL = function() {
    // global element
    this.closeBtn = null;
    this.modal = null;
    this.btns = [];
    // defaults options
    var defaults = {
      className : "",
      title : "Z-MODAL",
      content : '<h1>Congratulations!!!</h1>\
          <p>You are using the realy awesome Z-Modal javascript plugin. <b>Thank You!</b></p>\
          <p>Author: <a href="http://caradeuc.info/">Benjamin Caradeuc</a></p>',
      closeBtn : true,
      autoload:true,
      buttons : [
        { label: "ok", half: false, callback:function() { console.log('Thank you for using Z-Modal plugin.'); } }
      ]
    }
    if(arguments[0] && typeof arguments[0] === "object"){
      this.options = __createOptions(defaults, arguments[0]);
    }
    if(this.options.autoload === true){
      this.open.call(this);
    }
  }


  /*============================================================================
   fonctions privées
  */

  // create the options object
  function __createOptions(defaults, props){
    var opt = defaults; // the options to return
    for (var prop in props){
      if (props.hasOwnProperty(prop)) {
        opt[prop] = props[prop];
      }
    }
    return opt;
  }

  // build the html markup
  function __build() {
    /**
     * If content is a string, append it.
     * If content is a Dome node, append its content.
     */
    var theContent;
        _this = this;;
    if (typeof this.options.content === "string") {
      theContent = this.options.content;
    } else {
      theContent = this.options.content.innerHTML;
    }
    // modal element creation
    this.modal = document.createElement("div");
    this.modal.className = "z-modal " + this.options.className;
    __initListener(this.modal, "click", function (){
      _this.close.call(_this);
    }, true)
    // the box
    var box = document.createElement("div");
    box.className = "z-modal-box";
    this.modal.appendChild(box);
    // the box header (title - closeBtn)
    var header = document.createElement("div");
    header.className = "z-modal-header";
    // title
    var title = document.createElement("div");
    title.className = "z-modal-title";
    title.innerHTML = this.options.title;
    header.appendChild(title);
    // closeBtn
    if(this.options.closeBtn === true){
      this.closeBtn = document.createElement("div");
      this.closeBtn.className="z-modal-close";
      this.closeBtn.innerHTML = "&#215;";
      __initListener(this.closeBtn, "click", function() {
        _this.close.call(_this);
      });
      header.appendChild(this.closeBtn)
    }
    // the box content
    var content = document.createElement("div");
    content.className="z-modal-content";
    content.innerHTML = theContent;
    // the box footer
    var footer = document.createElement("div");
    footer.className="z-modal-footer";
    // the buttons
    for(var i=0; i<this.options.buttons.length; i++){
      // closure...
      (function(i) {
        var theBtn = _this.options.buttons[i];
        var btn = document.createElement("div");
        btn.className = "z-modal-btn";
        btn.innerHTML = theBtn.label;
        if(theBtn.half === true){
          btn.className += " z-modal-btn-half";
        }
        // listeners
        __initListener(btn, "click", function(){
          _this.close.call(_this, _this.options.buttons[i].callback);
        })
        footer.appendChild(btn);
      })(i);
    }

    // populate the box
    box.appendChild(header);
    box.appendChild(content);
    box.appendChild(footer);

    // add the modal to the dom ! finally!
    document.body.appendChild(this.modal)

  }

  function __initListener(node, type, func, noDeep){
    var _this = this;
    node.addEventListener(type, function(e) {
      // e.preventDefault();
      if(noDeep === true){
        if(e.target == this){
          func();
        }
      }
      else{
        func();
      }
    }, false);
  }


  /*============================================================================
   fonctions publiques
  */

  // open the modal (create it before ...)
  this.ZMODAL.prototype.open = function() {
  __build.call(this)
  }

  // close the modal (and delete it ...)
  this.ZMODAL.prototype.close = function(callback) {
    // remove the modal
     this.modal.parentNode.removeChild(this.modal);

    // execute the callback function...
    if(callback){
      callback();
    }
  }

}());
