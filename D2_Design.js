
var canvas = new fabric.Canvas('c1');

var button1 = document.getElementById('addpoly');
var longpress_delay = 0;

document.getElementById('upload_image').onchange = function handleImage(e) {
    var reader = new FileReader();
    reader.onload = function (event) { console.log('fdsf');
        var imgObj = new Image();
        imgObj.src = event.target.result;
        imgObj.onload = function () {
            // start fabricJS stuff

            var image = new fabric.Image(imgObj);
            image.set({
                left: 250,
                top: 250,
                angle: 0,
                padding: 10,
                cornersize: 10
            });

            //image.scale(getRandomNum(0.1, 0.25)).setCoords();
            canvas.add(image);


            // end fabricJS stuff
        }

    }
    reader.readAsDataURL(e.target.files[0]);
}

document.getElementById('horizontalflip').onclick = function flip_X(e) {
  var activeObjects = canvas.getActiveObjects();
  if (activeObjects.length){
    activeObjects.forEach(function(element){
      if(element.flipX == true){
        element.flipX = false;
      }
      else
        element.flipX = true;
    })
  }
  canvas.renderAll();

}

document.getElementById('verticalflip').onclick = function flip_Y(e) {
  var activeObjects = canvas.getActiveObjects();
  if (activeObjects.length){
    activeObjects.forEach(function(element){
      if(element.flipY == true){
        element.flipY = false;
      }
      else
        element.flipY = true;
    })
  }
  canvas.renderAll();

}

canvas.on({
  // 'touch:gesture': function() {
  //   var text = document.createTextNode(' Gesture ');
  //   info.insertBefore(text, info.firstChild);
  // },
  // 'touch:drag': function() {
  //   var text = document.createTextNode(' Dragging ');
  //   info.insertBefore(text, info.firstChild);
  // },
  // 'touch:orientation': function() {
  //   var text = document.createTextNode(' Orientation ');
  //   info.insertBefore(text, info.firstChild);
  // },
   'touch:shake': function() {
     var activeObjects = canvas.getActiveObjects();
     if (activeObjects.length){
       canvas.clear();
     }

   },
  'touch:longpress': function() {
    var activeObjects = canvas.getActiveObjects();
    if (longpress_delay%2 == 0){
      if (activeObjects.length){
        activeObjects.forEach(function(element){
          if(element.flipY == true){
            element.flipY = false;
          }
          else
            element.flipY = true;
        })
      }
    }

    longpress_delay+=1;
    canvas.renderAll();

  }
});


// button1.onclick = function() {
// 	var pts = document.getElementById('polypoints').value.split(' ');
//   var ptsx = [];
//   var ptsy = [];
//   for (i=0;i<pts.length;i++){
//       x=
//   }
//   var polygon = new fabric.Polyline({
//
//   });
//   alert(pts.length);
//   canvas.add(polygon);

//
// function createpoly(){
//   document.getElementById('polypoints').value.split(' ')
//   var polygon = new fabric.Polyline({
//   });
// }
