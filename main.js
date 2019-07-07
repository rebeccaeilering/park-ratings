const parks = [
  {
    "name": "Barker",
    "class": "barker",
    "rating": 0,
    "latatude": "",
    "longitude": "",
    "url": "",
    "notes": "Haven't visited yet."
  },
  {
    "name": "Cadigan",
    "class": "cadigan",
    "rating": 0,
    "latatude": "",
    "longitude": "",
    "url": "",
    "notes": "Haven't visited yet."
  },
  {
    "name": "Carpenter",
    "class": "carpenter",
    "rating": 4,
    "latatude": "39.8701363",
    "longitude": "-89.6342159",
    "url": "",
    "notes": "This is a good park to go hiking at. Nice views of the Sangamon River. Ranges from wooded to grassland. Trail difficulties vary. Nice stone pavilion."
  },
  {
    "name": "Centinnial",
    "class": "centinnial",
    "rating": 3.5,
    "latatude": "39.7568039",
    "longitude": "-89.7582963",
    "url": "",
    "notes": "Large flat park with pond/wetland area. Has a nice walking trail and access to bike trail. The mound adds some variety to the flat terrain and offers a nice view of the area. Lots of open field and skatepark. Not a whole lot of shade."
  },
  {
    "name": "Corner Cox",
    "class": "cornercox",
    "rating": 0,
    "latatude": "",
    "longitude": "",
    "url": "",
    "notes": "Haven't visited yet."
  },
  {
    "name": "Douglas",
    "class": "douglas",
    "rating": 3,
    "latatude": "39.806994",
    "longitude": "-89.6669917",
    "url": "",
    "notes": "Lots of shade. Big trees. Has Pickleball and tennis courts and disc golf. Has concerts durning the warm seasons. Terrain varies. No walking trail."
  },
  {
    "name": "Dreamland",
    "class": "dreamland",
    "rating": 2.5,
    "latatude": "39.7752931",
    "longitude": "-89.6202532",
    "url": "",
    "notes": "Has a paved walking trail with moderate terrain and shade, a small pond, some pavilions and a playground. Wish the park was cleaner."
  },
  {
    "name": "Eisenhower",
    "class": "eisenhower",
    "rating": 0,
    "latatude": "",
    "longitude": "",
    "url": "",
    "notes": "Haven't visited yet."
  },
  {
    "name": "Enos",
    "class": "enos",
    "rating": 0,
    "latatude": "",
    "longitude": "",
    "url": "",
    "notes": "Haven't visited yet."
  },
  {
    "name": "Fairview",
    "class": "fairview",
    "rating": 0,
    "latatude": "",
    "longitude": "",
    "url": "",
    "notes": "Haven't visited yet."
  },
  {
    "name": "Gehrmann",
    "class": "gehrmann",
    "rating": 0,
    "latatude": "",
    "longitude": "",
    "url": "",
    "notes": "Haven't visited yet."
  },
  {
    "name": "Gietl",
    "class": "gietl",
    "rating": 3,
    "latatude": "",
    "longitude": "",
    "url": "",
    "notes": ""
  },
  {
    "name": "Gurgens",
    "class": "gurgens",
    "rating": 0,
    "latatude": "",
    "longitude": "",
    "url": "",
    "notes": "Haven't visited yet."
  },
  {
    "name": "Hobbs",
    "class": "hobbs",
    "rating": 0,
    "latatude": "",
    "longitude": "",
    "url": "",
    "notes": "Haven't visited yet."
  },
  {
    "name": "Iles",
    "class": "iles",
    "rating": 0,
    "latatude": "",
    "longitude": "",
    "url": "",
    "notes": "Haven't visited yet."
  },
  {
    "name": "Indian Hills",
    "class": "indianhills",
    "rating": 0,
    "latatude": "",
    "longitude": "",
    "url": "",
    "notes": "Haven't visited yet."
  },
  {
    "name": "Jaycee",
    "class": "jaycee",
    "rating": 0,
    "latatude": "",
    "longitude": "",
    "url": "",
    "notes": "Haven't visited yet."
  },
  {
    "name": "Jefferson",
    "class": "jefferson",
    "rating": 2,
    "latatude": "39.8055385",
    "longitude": "-89.6993749",
    "url": "",
    "notes": "Small flat park with lots of open grassy areas and a playground. Some shaded areas."
  },
  {
    "name": "Kennedy",
    "class": "kennedy",
    "rating": 0,
    "latatude": "",
    "longitude": "",
    "url": "",
    "notes": "Haven't visited yet."
  },
  {
    "name": "Kiwanis",
    "class": "kiwanis",
    "rating": 0,
    "latatude": "",
    "longitude": "",
    "url": "",
    "notes": "Haven't visited yet."
  },
  {
    "name": "Lake Victoria",
    "class": "lakevictoria",
    "rating": 0,
    "latatude": "",
    "longitude": "",
    "url": "",
    "notes": "Haven't visited yet."
  },
  {
    "name": "Lanphier",
    "class": "lanphier",
    "rating": 0,
    "latatude": "",
    "longitude": "",
    "url": "",
    "notes": "Haven't visited yet."
  },
  {
    "name": "Lawless",
    "class": "lawless",
    "rating": 0,
    "latatude": "",
    "longitude": "",
    "url": "",
    "notes": "Haven't visited yet."
  },
  {
    "name": "Lewis Memorial Acres",
    "class": "lewismemorial",
    "rating": 4.5,
    "latatude": "39.7964572",
    "longitude": "-89.7196405",
    "url": "",
    "notes": "Woodland hiking trails. Relatively flat. Near creek and trails can get rather muddy. Trails are well marked. Easy to get to from bike trail."
  },
  {
    "name": "Lincoln",
    "class": "lincoln",
    "rating": 4.5,
    "latatude": "39.8270151",
    "longitude": "-89.6539577",
    "url": "",
    "notes": "Large park with lots of ammenities from swimming pool, indoor ice rink, lots of ball fields, places to walk. Disc golf, little pond with picturesque stone bridge. Close to Lincoln's tomb. Variety of shaded and open areas."
  },
  {
    "name": "Lincoln Memorial Gardens and Nature Center",
    "class": "lincolngardens",
    "rating": 4.75,
    "latatude": "39.696931",
    "longitude": "-89.5989867",
    "url": "",
    "notes": "Mostly flat woodland/prairie hiking trails that hug Lake Springfield. Lots of well marked trails. Great views of the lake."
  },
  {
    "name": "Lindbergh",
    "class": "lindbergh",
    "rating": 2,
    "latatude": "39.7532283",
    "longitude": "-89.7007989",
    "url": "",
    "notes": "Flat park with a lot of open space for soccer fields. Has a playground, some ball fields, and a tennis court. Tennis court could use some work. There's shade around the playground."
  },
  {
    "name": "Riverside",
    "class": "riverside",
    "rating": 2.5,
    "latatude": "39.8657833",
    "longitude": "-89.6179024",
    "url": "",
    "notes": "Large park on the Sangamon River. Seems to flood a lot. Has lots of access to the river and a BMX track."
  },
  {
    "name": "Rotary",
    "class": "rotary",
    "rating": 3,
    "latatude": "39.7726318",
    "longitude": "-89.7380387",
    "url": "",
    "notes": "Has a paved walking trail, tennis courts, ballfields and playground. Grass was a bit overgrown. Some shaded areas."
  },
  {
    "name": "Schlitt",
    "class": "schlitt",
    "rating": 2,
    "latatude": "39.7892312",
    "longitude": "-89.6974299",
    "url": "",
    "notes": "Small and  mostly just a ball fields"
  },
  {
    "name": "Southern View Community Park",
    "class": "southernview",
    "rating": 3.25,
    "latatude": "39.7513021",
    "longitude": "-89.6531666",
    "url": "",
    "notes": "Mostly flat with a paved walking trail. Has a pond, some ball fields, a street hockey rink, pavilions, playgroud. Looked clean and well kept. Not a lot of shade."
  },
  {
    "name": "Southwind",
    "class": "southwind",
    "rating": 3.75,
    "latatude": "39.7291233",
    "longitude": "-89.6578016",
    "url": "",
    "notes": "Large flat park with lots of walking trails, an overlook, play areas and sculptures. Not a lot of shade."
  },
  {
    "name": "Stuart",
    "class": "stuart",
    "rating": 4,
    "latatude": "39.8240904",
    "longitude": "-89.7054642",
    "url": "",
    "notes": "Access to bike trail, lots of open fields, play areas, and a dog park. There is 'trail' that goes around a pond."
  },
  {
    "name": "Timberbrooke",
    "class": "timberbrooke",
    "rating": 0,
    "latatude": "",
    "longitude": "",
    "url": "",
    "notes": "Once I figure out how to get to the park, I'll go."
  },
  {
    "name": "Vredenburgh",
    "class": "vredenburgh",
    "rating": 2.5,
    "latatude": "39.7576775",
    "longitude": "-89.7058144",
    "url": "",
    "notes": "Small park. Clean. Some areas of trees and shade on the peremeter of the park. Has playground area, ballfield, and a couple basketball hoops. Has access to bike trail."
  },
  {
    "name": "Washington",
    "class": "washington",
    "rating": 5,
    "latatude": "39.7899972",
    "longitude": "-89.6780544",
    "url": "",
    "notes": "This is my favorite park. Lots of walking areas from hiking types of trails, paved trails, and marked off areas on the road. Has a botanical garden with lots of outdoor landscaping, has carillon that you can tour. Great views. Plus there's concerts. Nice play area. Tennis and pickleball center, some ornate pavilions, lakes, a 'boardwalk' along one of the lakes. Varied terrain. Lots of large trees and shade. Ice cream stand in the Summer. Can get rather crowded around the botanical garden as it attracts weddings and other events. Wish there were more bathrooms."
  },
  {
    "name": "Westchester",
    "class": "westchester",
    "rating": 2.5,
    "latatude": "39.7572753",
    "longitude": "-89.6926362",
    "url": "",
    "notes": "Small park. Just playground equipment,some benches and picnic tables. Looks well kept with plenty of shade."
  }
];

const starsTotal = 5;

document.addEventListener('DOMContentLoaded', getParks);
document.addEventListener('DOMContentLoaded', getLocations);

function getParks() {
  let output = '';
  for(let park in parks) {
    const starPercentage = (parks[park].rating / starsTotal) * 100;
    const starPercentageRounded = `${Math.floor(starPercentage / 10) * 10}%`;
    output += 
    `<div class="park ${parks[park].class}">
      <h2>${parks[park].name}</h2>
      <div class="rating-outer">
        <div class="rating">
          <span>Score: </span>
          <div class="stars-outer">
            <div class="stars-inner" style="width:${starPercentageRounded}";></div>
          </div>
          <span class="number-rating">${parks[park].rating}/5</span>
          <div class="review"><p>Notes: ${parks[park].notes}</p>
          </div>
        </div>
      </div>
    </div>`;
  }
  document.getElementById('parks').innerHTML = output;
}

function getLocations() {
  const mymap = L.map('mapid').setView([39.7817213, -89.6501481], 11);
  const attribution = '&copy; <a href="https://www.openstreetmap.org/copyright">Open Street Map</a> contributors';
  const tileURL = 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png';
  const tiles = L.tileLayer(tileURL, {
    attribution
  });
  tiles.addTo(mymap);
  for(let park in parks) {
    let parkName = parks[park].name;
    parkName = L.marker([parks[park].latatude, parks[park].longitude]).addTo(mymap);
    parkName.bindTooltip(parks[park].name);    
  }
}




