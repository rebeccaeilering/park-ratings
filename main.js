const parks = [
  {
    "name": "barker",
    "rating": 0,
    "notes": ""
  },
  {
    "name": "cadigan",
    "rating": 0,
    "notes": ""
  },
  {
    "name": "carpenter",
    "rating": 0,
    "notes": ""
  },
  {
    "name": "centinnial",
    "rating": 3.3,
    "notes": ""
  },
  {
    "name": "cornercox",
    "rating": 0,
    "notes": ""
  },
  {
    "name": "douglas",
    "rating": 3,
    "notes": ""
  },
  {
    "name": "dreamland",
    "rating": 2.3,
    "notes": ""
  },
  {
    "name": "eisenhower",
    "rating": 0,
    "notes": ""
  },
  {
    "name": "enos",
    "rating": 0,
    "notes": ""
  },
  {
    "name": "fairview",
    "rating": 0,
    "notes": ""
  },
  {
    "name": "gehrmann",
    "rating": 0,
    "notes": ""
  },
  {
    "name": "gietl",
    "rating": 3.3,
    "notes": ""
  },
  {
    "name": "gurgens",
    "rating": 0,
    "notes": ""
  },
  {
    "name": "hobbs",
    "rating": 0,
    "notes": ""
  },
  {
    "name": "iles",
    "rating": 0,
    "notes": ""
  },
  {
    "name": "indianhills",
    "rating": 0,
    "notes": ""
  },
  {
    "name": "jaycee",
    "rating": 0,
    "notes": ""
  },
  {
    "name": "jefferson",
    "rating": 2.2,
    "notes": ""
  },
  {
    "name": "kennedy",
    "rating": 0,
    "notes": ""
  },
  {
    "name": "kiwanis",
    "rating": 0,
    "notes": ""
  },
  {
    "name": "lakevictoria",
    "rating": 0,
    "notes": ""
  },
  {
    "name": "lanphier",
    "rating": 0,
    "notes": ""
  },
  {
    "name": "lawless",
    "rating": 0,
    "notes": ""
  },
  {
    "name": "lincoln",
    "rating": 4.5,
    "notes": ""
  },
  {
    "name": "lindbergh",
    "rating": 0,
    "notes": ""
  },
  {
    "name": "riverside",
    "rating": 2.3,
    "notes": ""
  },
  {
    "name": "rotary",
    "rating": 3.5,
    "notes": ""
  },
  {
    "name": "schlitt",
    "rating": 2,
    "notes": ""
  },
  {
    "name": "southwind",
    "rating": 3.3,
    "notes": ""
  },
  {
    "name": "stuart",
    "rating": 4,
    "notes": ""
  },
  {
    "name": "timberbrooke",
    "rating": 0,
    "notes": ""
  },
  {
    "name": "vredenburgh",
    "rating": 0,
    "notes": ""
  },
  {
    "name": "washington",
    "rating": 4.8,
    "notes": ""
  },
  {
    "name": "winchester",
    "rating": 0,
    "notes": ""
  }
];

    // total stars
    const starsTotal = 5;

    // run getRatings when DOM loads
    document.addEventListener('DOMContentLoaded', getParks);

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
      for(let park in parks) {
        console.log(`This is ${parks[park].name}`);
        const starPercentage = (parks[park].rating / starsTotal) * 100;
        const starPercentageRounded = `${Math.round(starPercentage / 10) * 10}%`;
        console.log(starPercentageRounded);
        document.querySelector(`.${parks[park].name} .stars-inner`).style.width = starPercentageRounded;
        document.querySelector(`.${parks[park].name} .number-rating`).innerHTML = parks[park].rating;
      }
    }

