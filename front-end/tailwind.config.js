/** @type {import('tailwindcss').Config} */

const withMT = require("@material-tailwind/react/utils/withMT");

const config ={ content: ["./components/**/*.{js,ts,jsx,tsx}",
                          "./pages/**/*.{js,ts,jsx,tsx,mdx}",
],
theme: {

  colors:{
      white:"#ffffff",
      primary:{ /* on vas commencer a declarer comme text-red-500 ==> text-primary-200 */
         200:"#efeffc",
         300:"#cfd0f6",
         400:"#7f81e8",
         DEFAULT:"#5F62E2", /* ca sera elle la couleur par defaut quand j'appel text-primary (mauve) */
         600:"#5658CB",
},
     secondary:{  // couleur verte
         200:"#eaf8f4",
         300:"#bfe9de",
         400:"#56c4a7",
         DEFAULT:"#2AB691", 
         600:"#26a482",
},
      gray:{
        300:"#fafafa",
        400:"#f2f2f2",
        500:"#e5e5e5",
        600:"#b2b2b2", // les autres gris
        700:"#808080",
        800:"#333333",
        901:"#EFECEE", // box actualite et evenement
       1000:"#DDDEDE", //box departement
        DEFAULT:"#1D1D1D", // couleur Noir
  
},

blue:{
  900:"#1e3a8a",
  DEFAULT:"#38bdf8",
},


green:{
  300:"#6ee7b7",
  600:"#059669",
  DEFAULT:"#14b8a6",
},

red:{
 300:"#E74C3C",
 400:"#C0392B",
 500:"#922B21",
 DEFAULT:"#FF0000", // couleur Noir

},
alert:{
danger:"#FF4E4E",
success:"#90DA1",
warning:"#FEB72F",
}
},

  fontSize:{ /*style de text que je configure */
    "8xl":["120px" /*font size */,{
      lineHeight:"120px",
      letterSpacing:"-6px",
      fontWeight:"500",
      }, 
    ],
    "7xl":["72px",{
      lineHeight:"80px",
      letterSpacing:"-4.5px",
      fontWeight:"600",
      },
    ],
    "6xl":["55px",{
    lineHeight:"60px",
    letterSpacing:"-2.5px",
    fontWeight:"500",
    },
   ],
    "5xl":["48px",{
    lineHeight:"54px",
    letterSpacing:"-1.600000023841858px",
    fontWeight:"500",
    },
   ],
    "4xl":["36px",{
    lineHeight:"44px",
    letterSpacing:"-1.200000076837158px",
    fontWeight:"500",
    },
   ],
    "3xl":["28px",{
    lineHeight:"34px",
    letterSpacing:"-0.800000011928929px",
    fontWeight:"500",
    },
   ],
    "2xl":["24px",{
    lineHeight:"30px",
    letterSpacing:"-1px",
    fontWeight:"400",
    },
   ],
    xl:["24px",{
    lineHeight:"30px",
    letterSpacing:"-1px",
    fontWeight:"400",
    },
   ], 
    lg:["21px",{
    lineHeight:"30px",
    letterSpacing:"-0.800000011920929px",
    fontWeight:"400",
    },
   ],
    base:["17px",{
    lineHeight:"25px",
    letterSpacing:"-0.699999988079071px",
    fontWeight:"400",
    },
   ],
    sm:["15px",{
    lineHeight:"23px",
    letterSpacing:"-0.6000000238418579px",
    fontWeight:"400",
    },
   ],
    caption1:["20px",{
    lineHeight:"24px",
    letterSpacing:"-0.6000000238418579px",
    fontWeight:"400",
    },
   ],
    caption2:["18px",{
    lineHeight:"20px",
    letterSpacing:"-0.30000001192092896px",
    fontWeight:"400",
    },
   ],
    caption3:["16px",{
    lineHeight:"18px",
    letterSpacing:"-0.5px",
    fontWeight:"400",
    },
   ],
    caption4:["13px",{
    lineHeight:"15px",
    letterSpacing:"-0.20000000298023224px",
    fontWeight:"400",
    },
   ],         
  },

  borderRadius:{  // dimension du bouton sur la forme des rondelle sur les cotes
      DEFAULT:"10px",
      full:"9999px", // proprieté qui permet de faire le cercle
      },

  extend: {},
},
plugins: [],
};




module.exports = withMT(config);
 

