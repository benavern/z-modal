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

    // defaults options
    var defaults = {
      className : "",
      title : "Z-MODAL",
      content : '<p>Thank you for using Z-Modal plugin.</p>\
                <p>Author: <a href="http://caradeuc.info/">Benjamin Caradeuc</a></p>',
      closeBtn : true,

      btn : [
        { label: "ok", half: false, close: true, callback:function() { console.log('Thank you for using Z-Modal plugin.'); } }
      ]
    }

    if(arguments[0] && typeof arguments[0] === "object"){
      this.options = __createOptions(defaults, arguments[0]);
    }

  }


  // fonctions privées

  function __createOptions(defaults, props){
      // create the options object

      var opt = defaults;
      for (var prop in props){
        if (props.hasOwnProperty(prop)) {
          opt[prop] = props[prop];
        }
      }
      return opt;
  }

  function __build() {

  }

  // fonctions publiquesS

  this.ZMODAL.prototype.open = function() {
    __build()
  }
  this.ZMODAL.prototype.close = function() {
    __build()
  }


}());


var test = new ZMODAL({title : "coucou", truc : "hhé"});
