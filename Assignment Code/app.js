let title=document.getElementById("title");
let lat=document.getElementById("latitude");
let lon=document.getElementById("longitude");
let img=document.getElementById("img");
let landmarkList=document.getElementById("landmarkList");
let details=document.getElementById("details");
let description=document.getElementById("description");
let useLocationBtn=document.getElementById("useLocation");
let landmarkform=document.getElementById("landmarkform");

console.log(img);
console.log(lat);
console.log(lon);
console.log(title);
console.log(landmarkList);
console.log(description);
console.log(details);
console.log(useLocationBtn);
console.log(landmarkform);

landmarkform.addEventListener("submit",function(event){

    event.preventDefault();

    let titleValue=title.value;
    let latValue=lat.value;
    let lonValue=lon.value;
   let imgValue=img.value;
   let descriptionValue=description.value;


    const Landmark = {
  title: titleValue,
  latitude: latValue,
  longitude: lonValue,
  imageUrl: imgValue,
  description: descriptionValue
};
console.log(Landmark);

    
});

