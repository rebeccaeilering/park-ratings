const parks = [
  {
    "name": "Barker",
    "class": "barker",
    "rating": 0,
    "notes": ""
  },
  {
    "name": "Cadigan",
    "class": "cadigan",
    "rating": 0,
    "notes": ""
  },
  {
    "name": "Carpenter",
    "class": "carpenter",
    "rating": 0,
    "notes": ""
  },
  {
    "name": "Centinnial",
    "class": "centinnial",
    "rating": 3.3,
    "notes": ""
  },
  {
    "name": "Corner Cox",
    "class": "cornercox",
    "rating": 0,
    "notes": ""
  },
  {
    "name": "Douglas",
    "class": "douglas",
    "rating": 3,
    "notes": ""
  },
  {
    "name": "Dreamland",
    "class": "dreamland",
    "rating": 2.3,
    "notes": ""
  },
  {
    "name": "Eisenhower",
    "class": "eisenhower",
    "rating": 0,
    "notes": ""
  },
  {
    "name": "Enos",
    "class": "enos",
    "rating": 0,
    "notes": ""
  },
  {
    "name": "Fairview",
    "class": "fairview",
    "rating": 0,
    "notes": ""
  },
  {
    "name": "Gehrmann",
    "class": "gehrmann",
    "rating": 0,
    "notes": ""
  },
  {
    "name": "Gietl",
    "class": "gietl",
    "rating": 3.3,
    "notes": ""
  },
  {
    "name": "Gurgens",
    "class": "gurgens",
    "rating": 0,
    "notes": ""
  },
  {
    "name": "Hobbs",
    "class": "hobbs",
    "rating": 0,
    "notes": ""
  },
  {
    "name": "Iles",
    "class": "iles",
    "rating": 0,
    "notes": ""
  },
  {
    "name": "Indian Hills",
    "class": "indianhills",
    "rating": 0,
    "notes": ""
  },
  {
    "name": "Jaycee",
    "class": "jaycee",
    "rating": 0,
    "notes": ""
  },
  {
    "name": "Jefferson",
    "class": "jefferson",
    "rating": 2.2,
    "notes": ""
  },
  {
    "name": "Kennedy",
    "class": "kennedy",
    "rating": 0,
    "notes": ""
  },
  {
    "name": "Kiwanis",
    "class": "kiwanis",
    "rating": 0,
    "notes": ""
  },
  {
    "name": "Lake Victoria",
    "class": "lakevictoria",
    "rating": 0,
    "notes": ""
  },
  {
    "name": "Lanphier",
    "class": "lanphier",
    "rating": 0,
    "notes": ""
  },
  {
    "name": "Lawless",
    "class": "lawless",
    "rating": 0,
    "notes": ""
  },
  {
    "name": "Lincoln",
    "class": "lincoln",
    "rating": 4.5,
    "notes": ""
  },
  {
    "name": "Lindbergh",
    "class": "lindbergh",
    "rating": 0,
    "notes": ""
  },
  {
    "name": "Riverside",
    "class": "riverside",
    "rating": 2.3,
    "notes": ""
  },
  {
    "name": "Rotary",
    "class": "rotary",
    "rating": 3.5,
    "notes": ""
  },
  {
    "name": "Schlitt",
    "class": "schlitt",
    "rating": 2,
    "notes": ""
  },
  {
    "name": "Southwind",
    "class": "southwind",
    "rating": 3.3,
    "notes": ""
  },
  {
    "name": "Stuart",
    "class": "stuart",
    "rating": 4,
    "notes": ""
  },
  {
    "name": "Timberbrooke",
    "class": "timberbrooke",
    "rating": 0,
    "notes": ""
  },
  {
    "name": "Vredenburgh",
    "class": "vredenburgh",
    "rating": 0,
    "notes": ""
  },
  {
    "name": "Washington",
    "class": "washington",
    "rating": 4.8,
    "notes": ""
  },
  {
    "name": "Winchester",
    "class": "winchester",
    "rating": 0,
    "notes": ""
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
        const starPercentageRounded = `${Math.round(starPercentage / 10) * 10}%`;
        output += 
        // '<div class="park ' + parks[park].name + '">' +
        //     '<h2>' + parks[park].name + '</h2>' +
        //     '<div class="rating-outer">' +
        //       '<div class="rating">' +
        //         '<span>Score: </span>' +
        //         '<div class="stars-outer">' +
        //           '<span class="number-rating">' + parks[park].rating + '</span>' +
        //           '<div class="stars-inner" style="width:' + starPercentageRounded + '";></div>' +
        //         '</div>' +
        //         '<div class="review"><p>A short description of what I think of the park.</p>' +
        //         '</div>' +
        //       '</div>' +
        //     '</div>' +
        // '</div>';
      `<div class="park ${parks[park].class}">
        <h2>${parks[park].name}</h2>
        <div class="rating-outer">
          <div class="rating">
            <span>Score: </span>
            <div class="stars-outer">
              <span class="number-rating">${parks[park].rating}</span>
              <div class="stars-inner" style="width:${starPercentageRounded}";></div>
            </div>
            <div class="review"><p>${parks[park].notes}</p>
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


