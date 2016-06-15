(function() {
  createSocialLinks();
  demo1();
  demo2();
  demo3();
  demo4();
  preloadImages(["img/download_white.png","img/github_white.png"]);
})();

// social links made easy
function createSocialLinks() {
  var here = window.location.href;
  var URL = {
    facebook: "http://www.facebook.com/sharer.php?u=" + here,
    twitter: "https://twitter.com/share?url="+ here +"&text=Just%20found%20something%20awesome!&via=benavern",
    googlePlus: "https://plus.google.com/share?url=" + here,
    mail: "mailto:?subject=Just%20found%20something%20awesome!&body=Hey!%20What%20do%20you%20think%20about%20" + here + " ?"
  }
  var socialPlaces = document.getElementsByClassName('social-wrapper');
  for(var n=0; n<socialPlaces.length; n++){
    var sp = socialPlaces[n];
    for(var x in URL){
      var el = document.createElement("a");
      el.title = "Share via " + x;
      el.className = "social-btn " + x;
      el.href = URL[x];
      sp.appendChild(el);
    }
  }

}



// demos for z-modal plugin

function demo1() {
  var btnTest = document.getElementById('demo1');
  var demo;
  btnTest.addEventListener('click', function(){
    demo = new ZMODAL();
  })
}

function demo2() {
  var btndemo2 = document.getElementById('demo2');
  var demo2;
  var options2 = {
    title : "Demo 2",
    content : 'You can close the modal by clicking the overlay...',
    closeBtn : false,
    buttons : []
  };
  btndemo2.addEventListener('click', function(){
    demo2 = new ZMODAL(options2);
  });
}

function demo3() {
  var btndemo3 = document.getElementById('demo3');
  var htmlContent = document.createElement('p');
  htmlContent.innerHTML = "This content is an HTML node!";
  var demo3;
  var options3 = {
    title : "Demo 3",
    content : htmlContent,
    buttons : [
      {
        label: "Cancel",
        half: true,
		className: "default"
      },
      {
        label: "Ok",
        half: true,
        callback: function (){
          alert("you are awesome!");
      }}
    ]
  };
  btndemo3.addEventListener('click', function(){
    demo3 = new ZMODAL(options3);
  });
}

function demo4() {
  var btndemo4 = document.getElementById("demo4");
  var demo4;
  var options4 = {
    title: "Demo 4",
    content: "This works too ;-)",
    buttons: [
      {
        label: "Yeah!",
        half: false
      }
    ],
    autoload: false
  }
  btndemo4.addEventListener('click', function(){
    demo4 = new ZMODAL(options4);
    demo4.open();
  });
}


function preloadImages(imgs) {
  if(imgs && typeof imgs == "object"){
    var images = [];
    for(var i=0; i<imgs.length; i++){
      var img = imgs[i];
      images[i] = new Image();
			images[i].src = img;
    }

  }
}
