/*============================================================================
 Tests .....
*/

var test,
  modalArgs = {
    title: "Coucou!",
    content : "<p>Bonjour le monde!</p>",
    closeBtn : false,
    buttons : [
      { label : "YOLO!", half: false },
      { label : "YOLO!", half: true },
      { label : "YOLO!", half: true }
    ]
  };
var btnTest = document.getElementById('test');
btnTest.addEventListener('click', function(e){
  e.preventDefault();
  test = new ZMODAL(modalArgs);
  test.open()
})
