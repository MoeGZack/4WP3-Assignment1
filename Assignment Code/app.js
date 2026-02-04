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
    console.log("Form Submitted");

    titleValue=title.value;
    console.log("Title Value:",titleValue);

    latValue=lat.value;
    console.log("Latitude Value:",latValue);

    lonValue=lon.value;
    console.log("Longitude Value:",lonValue);
    
    imgValue=img.value;
    console.log("Image URL:",imgValue);

    descriptionValue=description.value;
    console.log("Description:",descriptionValue);
    
});

