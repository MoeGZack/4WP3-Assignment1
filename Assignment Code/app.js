let title=document.getElementById("title");
let lat=document.getElementById("latitude");
let lon=document.getElementById("longitude");
const img=document.querySelector('#img');
let landmarkList=document.getElementById("landmarkList");
let details=document.getElementById("details");
let description=document.getElementById("description");
let useLocationBtn=document.getElementById("useLocation");
let deleteLandmark=document.getElementById("deleteLandmark");
let landmarkform=document.getElementById("landmarkform");
let selectedLandmark=null;
let landmarkdeleted=null;
const landmarks=[];
let map;



    function handleFindMe(){
    
      navigator.geolocation.getCurrentPosition( showPosition);
     
    }

   window.addEventListener("load",handleFindMe);
    document.getElementById("useLocation").addEventListener("click",handleFindMe);



function showPosition(position){
    
      lat.value=position.coords.latitude;
      lon.value=position.coords.longitude;
    console.log("Latitude: " + lat.value +
    " Longitude: " + lon.value);

  const latitudeStart=parseFloat(lat.value);
  const lonStart=parseFloat(lon.value);
  
if (!map){
    
        map = new google.maps.Map(document.getElementById("map"), {
                center: {lat: latitudeStart, lng: lonStart},
            zoom: 12,
            mapId: "89d95e771da5be8b5be36e75",
            clickableIcons: false
          });
    } else {
      
      map.setCenter({lat: latitudeStart, lng: lonStart});
      map.setZoom(12);
    }
landmarkform.reset();
  }

function renderLandmarkList() {
    landmarkList.innerHTML = "";
   landmarks.forEach(appendArray);

function appendArray(item) {

const node = document.createElement("li");

const textnode = document.createTextNode(item.title);

node.appendChild(textnode);
landmarkList.appendChild(node);

node.addEventListener("click", function() {
  selectedLandmark=item.id;
  landmarkdeleted=item.title;
  
  console.log("Clicked on landmark:", item.title);
    
  details.innerHTML = "Landmark ID:" +item.id + "<br>" +
  "Location:" + item.title + "<br>" +
  "Latitude: " + item.latitude + "<br>" +
  "Longitude: " + item.longitude + "<br>" +
  "Description: " + item.description + "<br>" +
  "<img src='" + item.imageUrl + "' width='200' height='200'><br>";

  map.setCenter({lat: item.latitude, lng: item.longitude});
    map.setZoom(14);
});
}

}; 

landmarkform.addEventListener("submit",function(event){
    
    event.preventDefault();


    const reader=new FileReader();
    reader.addEventListener("load",function(){
    let titleValue=title.value;
    let latValue=parseFloat(lat.value);
    let lonValue=parseFloat(lon.value);
    const imgValue=reader.result;
    let descriptionValue=description.value;

  const Landmark = {
  id: crypto.randomUUID(),
  title: titleValue,
  latitude: latValue,
  longitude: lonValue,
  imageUrl: imgValue,
  description: descriptionValue
};

landmarks.push(Landmark);
console.log("landmarks", landmarks);

const marker= new google.maps.Marker({
position: {lat: latValue, lng: lonValue},
map: map,
title: titleValue,
zIndex: 100000
});

Landmark.marker=marker;

marker.addListener("click", function() {
  selectedLandmark=Landmark.id;
  landmarkdeleted=Landmark.title;


details.innerHTML = "Landmark ID:" +Landmark.id + "<br>" +
  "Location:" + Landmark.title + "<br>" +
  "Latitude: " + Landmark.latitude + "<br>" +
  "Longitude: " + Landmark.longitude + "<br>" +
  "Description: " + Landmark.description + "<br>" +
  "<img src='" + Landmark.imageUrl + "' width='200' height='200'><br>";
map.setCenter({lat: Landmark.latitude, lng: Landmark.longitude});
    map.setZoom(14);
});

renderLandmarkList();
landmarkform.reset();
  });
reader.readAsDataURL(img.files[0]);
});
deleteLandmark.addEventListener("click", function() {

    console.log("Deleting landmark ID:", selectedLandmark, "Title:", landmarkdeleted);
    const newlandmarks = landmarks.filter(deletelandmark);
    const lm = landmarks.find(l => l.id === selectedLandmark);
    if (lm && lm.marker) {
        lm.marker.setMap(null);
    }
     function deletelandmark(landmark) {
        return landmark.id !== selectedLandmark;
    }
    landmarks.length = 0;
    landmarks.push(...newlandmarks);

    renderLandmarkList();
    details.innerHTML = "";
    selectedLandmark = null;
    landmarkdeleted=null;
});