let title=document.getElementById("title");
let lat=document.getElementById("latitude");
let lon=document.getElementById("longitude");
//let img=document.getElementById("img");
const img=document.querySelector('#img');
let landmarkList=document.getElementById("landmarkList");
let details=document.getElementById("details");
let description=document.getElementById("description");
let useLocationBtn=document.getElementById("useLocation");
let landmarkform=document.getElementById("landmarkform");
const landmarks=[];

console.log(img);
console.log(lat);
console.log(lon);
console.log(title);
console.log(landmarkList);
console.log(description);
console.log(details);
console.log(useLocationBtn);
console.log(landmarkform);

function renderLandmarkList() {
    landmarkList.innerHTML = "";
   landmarks.forEach(myFunction);

function myFunction(item) {

const node = document.createElement("li");

const textnode = document.createTextNode(item.title);

node.appendChild(textnode);
landmarkList.appendChild(node);

node.addEventListener("click", function() {
    console.log("Clicked on landmark:", item.title);
    
    details.innerHTML = "Location:" + item.title + "<br>" +
  "Latitude: " + item.latitude + "<br>" +
   "Longitude: " + item.longitude + "<br>" +
  "Description: " + item.description + "<br>" +
    "<img src='" + item.imageUrl + "' width='200' height='200'><br>"
});
}
}; 

landmarkform.addEventListener("submit",function(event){
    
    event.preventDefault();
    const reader=new FileReader();
    reader.addEventListener("load",function(){
    let titleValue=title.value;
    let latValue=lat.value;
    let lonValue=lon.value;
    const imgValue=reader.result;
    let descriptionValue=description.value;

  const Landmark = {
  title: titleValue,
  latitude: latValue,
  longitude: lonValue,
  imageUrl: imgValue,
  description: descriptionValue
};

landmarks.push(Landmark);
console.log("landmarks", landmarks);


renderLandmarkList.call();

img.value="";
landmarkform.reset();
  });
      
    reader.readAsDataURL(img.files[0]);



});
