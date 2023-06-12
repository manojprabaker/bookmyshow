let date = new Date();
let hrs = date.getHours();
let mins = date.getMinutes();
let theatreTimingList = [];
console.log(hrs, mins);
if (hrs < 10) {
  theatreTimingList = [
    {
      timings: "10:30 AM",
    },
    {
      timings: "02:30 PM",
    },
    {
      timings: "06:30 PM",
    },
    {
      timings: "10:30 PM",
    },
  ];
} else if (hrs == 10) {
  if (mins < 10) {
    theatreTimingList = [
      {
        timings: "02:30 PM",
      },
      {
        timings: "06:30 PM",
      },
      {
        timings: "10:30 PM",
      },
    ];
  } else {
    theatreTimingList = [
      {
        timings: "02:30 PM",
      },
      {
        timings: "06:30 PM",
      },
      {
        timings: "10:30 PM",
      },
    ];
  }
} else if (hrs < 14) {
  theatreTimingList = [
    {
      timings: "02:30 PM",
    },
    {
      timings: "06:30 PM",
    },
    {
      timings: "10:30 PM",
    },
  ];
  console.log("passed");
} else if (hrs == 14) {
  theatreTimingList = [
    {
      timings: "06:30 PM",
    },
    {
      timings: "10:30 PM",
    },
  ];
} else if (hrs < 18) {
  theatreTimingList = [
    {
      timings: "06:30 PM",
    },
    {
      timings: "10:30 PM",
    },
  ];
} else if (hrs == 18) {
  if(mins<10)
  {
    theatreTimingList = [
      {
        timings: "06:30 PM",
      },
      {
        timings: "10:30 PM",
      },
    ];
  }
  else{
    theatreTimingList = [
      {
        timings: "10:30 PM",
      },
    ];
    console.log("passe2");
  }
  
} else if (hrs < 22) {
  theatreTimingList = [
    {
      timings: "10:30 PM",
    },
  ];
  console.log("passed1");
} 
else if(hrs==22) 
{
  if(mins<10){
  theatreTimingList = [
    {
      timings: "10:30 PM",
      
    },
  ];
  console.log("passed");
  }
  else{
    theatreTimingList = [
      {
        timings: "Please heck out movies timings for tommorow's day",
      },
    ];
  }
}
else{
  theatreTimingList = [
    {
      timings: "Please heck out movies timings for tommorow's day",
    },
  ];
}


//console.log(theatreTimingList);

export default theatreTimingList;

let theatreNamelist = [
  {
    id: 1,
    name: "MAYAJAAL Multiplex: ECR, Chennai",
  },
  {
    id:1,
    name:"INOX National: Arcot Road",
  },
  {
    id:1,
    name:"GK Cinemas RGB + Laser SRL 4D: Porur",
  },
  {
    id:1,
    name:"INOX: LUXE Phoenix Market City, Velachery",
  },
  {
    id:1,
    name:"Rohini Silver Screens: Koyambedu",
  },
  {
    id:1,
    name:"PVR: VR Chennai, Anna Nagar",
  },
  {
    id:2,
    name:"GK Cinemas RGB + Laser SRL 4D: Porur",
  },
  {
    id:2,
    name:"Cinepolis: BSR Mall, OMR, Thoraipakkam",
  },
  {
    id:2,
    name:"EVP Cinemas: Chennai",
  },
  {
    id:2,
    name:"INOX: LUXE Phoenix Market City, Velachery",
  },
  {
    id:2,
    name:"SPI Palazzo: Nexus Vijaya Mall, Vadapalani,Chennai",
  },
  {
    id:2,
    name:"INOX: LUXE Phoenix Market City, Velachery",
  },
  {
    id:3,
    name:"INOX: LUXE Phoenix Market City, Velachery",
  },
  {
    id:3,
    name:"PVR: VR Chennai, Anna Nagar",
  },
  {
    id:3,
    name:"SPI: Escape-Express Avenue Mall, Royapettah",
  },
  {
    id:3,
    name:"INOX National: Arcot Road",
  },
  {
    id:3,
    name:"PVR: SKLS Galaxy Mall, Red Hills Chennai",
  },
  {
    id:3,
    name:"GK Cinemas RGB + Laser SRL 4D: Porur",
  },
  {
    id:4,
    name:"GK Cinemas RGB + Laser SRL 4D: Porur",
  },
  {
    id:4,
    name:"Cinepolis: BSR Mall, OMR, Thoraipakkam",
  },
  {
    id:4,
    name:"EVP Cinemas: Chennai",
  },
  {
    id:4,
    name:"INOX: LUXE Phoenix Market City, Velachery",
  },
  {
    id:4,
    name:"SPI Palazzo: Nexus Vijaya Mall, Vadapalani,Chennai",
  },
  {
    id:4,
    name:"INOX: LUXE Phoenix Market City, Velachery",
  },
  {
    id:5,
    name:"INOX National: Arcot Road",
  },
  {
    id:5,
    name:"GK Cinemas RGB + Laser SRL 4D: Porur",
  },
  {
    id:5,
    name:"INOX: LUXE Phoenix Market City, Velachery",
  },
  {
    id:5,
    name:"Rohini Silver Screens: Koyambedu",
  },
  {
    id:5,
    name:"PVR: VR Chennai, Anna Nagar",
  },
];
export {theatreNamelist};