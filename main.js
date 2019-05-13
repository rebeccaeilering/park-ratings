const parks = [
  {
    "name": "Barker",
    "class": "barker",
    "rating": 0,
    "location": "",
    "url": "",
    "notes": "Haven't visited yet."
  },
  {
    "name": "Cadigan",
    "class": "cadigan",
    "rating": 0,
    "location": "",
    "url": "",
    "notes": "Haven't visited yet."
  },
  {
    "name": "Carpenter",
    "class": "carpenter",
    "rating": 4,
    "location": "",
    "url": "",
    "notes": "This is a good park to go hiking at. Nice views of the Sangamon River. Ranges from wooded to grassland. Trail difficulties vary. Nice stone pavilion."
  },
  {
    "name": "Centinnial",
    "class": "centinnial",
    "rating": 3.5,
    "location": "",
    "url": "",
    "notes": "Large flat park with pond/wetland area. Has a nice walking trail and access to bike trail. The mound adds some variety to the flat terrain and offers a nice view of the area. Lots of open field and skatepark. Not a whole lot of shade."
  },
  {
    "name": "Corner Cox",
    "class": "cornercox",
    "rating": 0,
    "location": "",
    "url": "",
    "notes": "Haven't visited yet."
  },
  {
    "name": "Douglas",
    "class": "douglas",
    "rating": 3,
    "location": "",
    "url": "",
    "notes": "Lots of shade. Big trees. Has Pickleball and tennis courts and disc golf. Has concerts durning the warm seasons. Terrain varies. No walking trail."
  },
  {
    "name": "Dreamland",
    "class": "dreamland",
    "rating": 2.5,
    "location": "",
    "url": "",
    "notes": "Has a paved walking trail with moderate terrain and shade, a small pond, some pavilions and a playground. Wish the park was cleaner."
  },
  {
    "name": "Eisenhower",
    "class": "eisenhower",
    "rating": 0,
    "location": "",
    "url": "",
    "notes": "Haven't visited yet."
  },
  {
    "name": "Enos",
    "class": "enos",
    "rating": 0,
    "location": "",
    "url": "",
    "notes": "Haven't visited yet."
  },
  {
    "name": "Fairview",
    "class": "fairview",
    "rating": 0,
    "location": "",
    "url": "",
    "notes": "Haven't visited yet."
  },
  {
    "name": "Gehrmann",
    "class": "gehrmann",
    "rating": 0,
    "location": "",
    "url": "",
    "notes": "Haven't visited yet."
  },
  {
    "name": "Gietl",
    "class": "gietl",
    "rating": 3,
    "location": "",
    "url": "",
    "notes": ""
  },
  {
    "name": "Gurgens",
    "class": "gurgens",
    "rating": 0,
    "location": "",
    "url": "",
    "notes": "Haven't visited yet."
  },
  {
    "name": "Hobbs",
    "class": "hobbs",
    "rating": 0,
    "location": "",
    "url": "",
    "notes": "Haven't visited yet."
  },
  {
    "name": "Iles",
    "class": "iles",
    "rating": 0,
    "location": "",
    "url": "",
    "notes": "Haven't visited yet."
  },
  {
    "name": "Indian Hills",
    "class": "indianhills",
    "rating": 0,
    "location": "",
    "url": "",
    "notes": "Haven't visited yet."
  },
  {
    "name": "Jaycee",
    "class": "jaycee",
    "rating": 0,
    "location": "",
    "url": "",
    "notes": "Haven't visited yet."
  },
  {
    "name": "Jefferson",
    "class": "jefferson",
    "rating": 2,
    "location": "",
    "url": "",
    "notes": "Small flat park with lots of open grassy areas and a playground. Some shaded areas."
  },
  {
    "name": "Kennedy",
    "class": "kennedy",
    "rating": 0,
    "location": "",
    "url": "",
    "notes": "Haven't visited yet."
  },
  {
    "name": "Kiwanis",
    "class": "kiwanis",
    "rating": 0,
    "location": "",
    "url": "",
    "notes": "Haven't visited yet."
  },
  {
    "name": "Lake Victoria",
    "class": "lakevictoria",
    "rating": 0,
    "location": "",
    "url": "",
    "notes": "Haven't visited yet."
  },
  {
    "name": "Lanphier",
    "class": "lanphier",
    "rating": 0,
    "location": "",
    "url": "",
    "notes": "Haven't visited yet."
  },
  {
    "name": "Lawless",
    "class": "lawless",
    "rating": 0,
    "location": "",
    "url": "",
    "notes": "Haven't visited yet."
  },
  {
    "name": "Lincoln",
    "class": "lincoln",
    "rating": 4.5,
    "location": "",
    "url": "",
    "notes": "Large park with lots of ammenities from swimming pool, indoor ice rink, lots of ball fields, places to walk. Disc golf, little pond with picturesque stone bridge. Close to Lincoln's tomb. Variety of shaded and open areas."
  },
  {
    "name": "Lindbergh",
    "class": "lindbergh",
    "rating": 0,
    "location": "",
    "url": "",
    "notes": "Haven't visited yet."
  },
  {
    "name": "Riverside",
    "class": "riverside",
    "rating": 2.5,
    "location": "",
    "url": "",
    "notes": "Large park on the Sangamon River. Seems to flood a lot. Has lots of access to the river and a BMX track."
  },
  {
    "name": "Rotary",
    "class": "rotary",
    "rating": 3,
    "location": "",
    "url": "",
    "notes": "Has a paved walking trail, tennis courts, ballfields and playground. Grass was a bit overgrown. Some shaded areas."
  },
  {
    "name": "Schlitt",
    "class": "schlitt",
    "rating": 2,
    "location": "",
    "url": "",
    "notes": "Small and  mostly just a ball fields"
  },
  {
    "name": "Southwind",
    "class": "southwind",
    "rating": 3.5,
    "location": "",
    "url": "",
    "notes": "Large flat park with lots of walking trails, an overlook, play areas and sculptures. Not a lot of shade."
  },
  {
    "name": "Stuart",
    "class": "stuart",
    "rating": 4,
    "location": "",
    "url": "",
    "notes": "Access to bike trail, lots of open fields, play areas, and a dog park. There is 'trail' that goes around a pond."
  },
  {
    "name": "Timberbrooke",
    "class": "timberbrooke",
    "rating": 0,
    "location": "",
    "url": "",
    "notes": "Once I figure out how to get to the park, I'll go."
  },
  {
    "name": "Vredenburgh",
    "class": "vredenburgh",
    "rating": 0,
    "location": "",
    "url": "",
    "notes": "Haven't visited yet."
  },
  {
    "name": "Washington",
    "class": "washington",
    "rating": 5,
    "location": "",
    "url": "",
    "notes": "This is my favorite park. Lots of walking areas from hiking types of trails, paved trails, and marked off areas on the road. Has a botanical garden with lots of outdoor landscaping, has carillon that you can tour. Great views. Plus there's concerts. Nice play area. Tennis and pickleball center, some ornate pavilions, lakes, a 'boardwalk' along one of the lakes. Varied terrain. Lots of large trees and shade. Ice cream stand in the Summer. Can get rather crowded around the botanical garden as it attracts weddings and other events. Wish there were more bathrooms."
  },
  {
    "name": "Winchester",
    "class": "winchester",
    "rating": 0,
    "location": "",
    "url": "",
    "notes": "Haven't visited yet."
  }
];

    // total stars
    const starsTotal = 5;

    // run getRatings when DOM loads
    document.addEventListener('DOMContentLoaded', getParks);
    // document.addEventListener('DOMContentLoaded', getRatings);


    // form elements
    // const parkSelect = document.getElementById('park-select');
    // const ratingControl = document.getElementById('rating-control');

    // init park
    // let park;

    // park select change
    // parkSelect.addEventListener('change', (e) => {
    //   park = e.target.value;
    //   console.log(park);
      //enable rating control
    //   ratingControl.disabled = false;
    //   ratingControl.value = ratings[park];
    // });

    // rating control change
    // ratingControl.addEventListener('blur', (e) => {
    //   const rating = e.target.value;
      // make sure 5 or under
      // if(rating > 5) {
      //   alert('Please rate 1 - 5');
      //   return;
      // }
      // change rating
    //   ratings[park] = rating;
    //   getRatings();
    // })

    function getParks() {
      let output = '';
      for(let park in parks) {
        const starPercentage = (parks[park].rating / starsTotal) * 100;
        console.log(starPercentage);
        const starPercentageRounded = `${Math.floor(starPercentage / 10) * 10}%`;
        console.log(starPercentageRounded);
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

    // function getRatings() {
    //   for(let park in parks) {
    //     const starPercentage = (parks[park].rating / starsTotal) * 100;
    //     const starPercentageRounded = `${Math.round(starPercentage / 10) * 10}%`;
    //     document.querySelector(`.${parks[park].name} .stars-inner`).style.width = starPercentageRounded;
    //     document.querySelector(`.${parks[park].name} .number-rating`).innerHTML = parks[park].rating;
    //   }
    // }


