const parks = [
  {
    "name": "Barker",
    "rating": 0,
    "notes": ""
  },
  {
    "name": "Cadigan",
    "rating": 0,
    "notes": ""
  },
  {
    "name": "Carpenter",
    "rating": 0,
    "notes": ""
  },
  {
    "name": "Centinnial",
    "rating": 3.3,
    "notes": ""
  },
  {
    "name": "Corner Cox",
    "rating": 0,
    "notes": ""
  },
  {
    "name": "Douglas",
    "rating": 3,
    "notes": ""
  },
  {
    "name": "Dreamland",
    "rating": 2.3,
    "notes": ""
  },
  {
    "name": "Eisenhower",
    "rating": 0,
    "notes": ""
  },
  {
    "name": "Enos",
    "rating": 0,
    "notes": ""
  },
  {
    "name": "Fairview",
    "rating": 0,
    "notes": ""
  },
  {
    "name": "Gehrmann",
    "rating": 0,
    "notes": ""
  },
  {
    "name": "Gietl",
    "rating": 3.3,
    "notes": ""
  },
  {
    "name": "Gurgens",
    "rating": 0,
    "notes": ""
  },
  {
    "name": "Hobbs",
    "rating": 0,
    "notes": ""
  },
  {
    "name": "Iles",
    "rating": 0,
    "notes": ""
  },
  {
    "name": "Indian Hills",
    "rating": 0,
    "notes": ""
  },
  {
    "name": "Jaycee",
    "rating": 0,
    "notes": ""
  },
  {
    "name": "Jefferson",
    "rating": 2.2,
    "notes": ""
  },
  {
    "name": "Kennedy",
    "rating": 0,
    "notes": ""
  },
  {
    "name": "Kiwanis",
    "rating": 0,
    "notes": ""
  },
  {
    "name": "Lake Victoria",
    "rating": 0,
    "notes": ""
  },
  {
    "name": "Lamphier",
    "rating": 0,
    "notes": ""
  },
  {
    "name": "Lawless",
    "rating": 0,
    "notes": ""
  },
  {
    "name": "Lincoln",
    "rating": 4.5,
    "notes": ""
  },
  {
    "name": "Lindbergh",
    "rating": 0,
    "notes": ""
  },
  {
    "name": "Riverside",
    "rating": 2.3,
    "notes": ""
  },
  {
    "name": "Rotary",
    "rating": 3.5,
    "notes": ""
  },
  {
    "name": "Schlitt",
    "rating": 2,
    "notes": ""
  },
  {
    "name": "Southwind",
    "rating": 3.3,
    "notes": ""
  },
  {
    "name": "Stewart",
    "rating": 4,
    "notes": ""
  },
  {
    "name": "Timberbrooke",
    "rating": 0,
    "notes": ""
  },
  {
    "name": "Vredenburgh",
    "rating": 0,
    "notes": ""
  },
  {
    "name": "Washington",
    "rating": 4.8,
    "notes": ""
  },
  {
    "name": "Winchester",
    "rating": 0,
    "notes": ""
  },
];


// imital ratings
 const ratings = {
  barker: 0,
  cadigan: 0,
  carpenter: 4,
  centinnial: 3.3,
  cornercox: 0,
  douglas: 3,
  dreamland: 2.3,
  eisenhower: 0,
  enos: 0,
  fairview: 0,
  gehrmann: 0,
  gietl: 3.3,
  gurgens: 0,
  hobbs: 0,
  iles: 0,
  indianhills: 0,
  jaycee: 0,
  jefferson: 2.2,
  kennedy: 0,
  kiwanis: 0,
  lakevictoria: 0,
  lanphier: 0,
  lawless: 0,
  lincoln: 4.5,
  lindbergh: 0,
  riverside: 2.3,
  rotary: 3.5,
  schlitt: 2,
  southwind: 3.3,
  stuart: 4,
  timberbrooke: 0,
  vredenburgh: 0,
  washington: 4.8,
  winchester: 0
}

    // total stars
    const starsTotal = 5;

    // run getRatings when DOM loads
    document.addEventListener('DOMContentLoaded', getRatings);

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

    // get ratings
    function getRatings() {
      for(let rating in ratings) {
        const starPercentage = (ratings[rating] / starsTotal) * 100;
        const starPercentageRounded = `${Math.round(starPercentage / 10) * 10}%`;
        document.querySelector(`.${rating} .stars-inner`).style.width = starPercentageRounded;
        document.querySelector(`.${rating} .number-rating`).innerHTML = ratings[rating];
      }
    }

