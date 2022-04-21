// Order events by date, ascending
const CLOUDINARY_LINK =
  'https://res.cloudinary.com/buraiyen/image/upload/v1650481565/All_Elite_Network';
const payperview = [
  {
    title: 'Double or Nothing 2022',
    runtime: '4 hours',
    date: new Date(2022, 4, 29),
    description: 'temp',
    imgSrc:
      'https://staticg.sportskeeda.com/editor/2022/02/d50fa-16457460219022-1920.jpg',
  },
  {
    title: 'Revolution 2022',
    runtime: '4 hours',
    date: new Date(2022, 2, 26),
    description: 'temp',
    imgSrc:
      'https://www.cnet.com/a/img/hub/2022/03/06/26b2b84e-532d-4350-a4c2-a31ed0b5b267/crop-exact-aew-revolution-2022-twitter-1920x1080.jpg',
  },
  {
    title: 'Full Gear 2021',
    runtime: '4 hours',
    date: new Date(2021, 10, 13),
    description: 'temp',
    imgSrc:
      'https://149566639.v2.pressablecdn.com/wp-content/uploads/2021/11/aew-full-gear-1.jpg',
  },
];

const dynamite = [
  {
    title: 'Dynamite 4/13/22',
    runtime: '2 hours',
    date: new Date(2022, 3, 13),
    description: `Live from New Orleans! Eddie Kingston, Santana and Ortiz vs Jericho Appreciation Society. ROH World TV Title: Champion Minoru Suzuki vs Samoa Joe. MJF vs Captain Shawn Dean. AEW Tag Team Champs Jungle Boy and Luchasaurus vs reDRagon. `,
    imgSrc: `${CLOUDINARY_LINK}/Media/Dynamite/4-13-22.jpg`,
  },
  {
    title: 'Dynamite 4/6/22',
    runtime: '2 hours',
    date: new Date(2022, 3, 6),
    description: `The Butcher and The Blade take on Jeff and Matt Hardy. The Young Bucks wrestle the ROH and AAA Tag Team Champions FTR. Christian Cage vs. Adam Cole. Qualifying matches in both the men's and women's Owen Hart Foundation Tournament. Samoa Joe arrives!`,
    imgSrc: `${CLOUDINARY_LINK}/Media/Dynamite/4-6-22.jpg`,
  },
  {
    title: 'Dynamite 3/30/22',
    runtime: '2 hours',
    date: new Date(2022, 2, 30),
    description: `Darby Allin vs. Andrade El Idolo. FTR vs. Gunn Club. Owen Hart Foundation Women's Tournament Qualifier: The Bunny vs. newest member of the AEW roster. Adam Cole & ReDragon promise to hold a "Championship Celebration".`,
    imgSrc: `${CLOUDINARY_LINK}/Media/Dynamite/3-30-22.jpg`,
  },
];

const rampage = [
  {
    title: 'Rampage 4/15/22',
    runtime: '44 min',
    date: new Date(2022, 3, 15),
    description: `AEW World Title Texas Death Match: Champion Hangman Adam Page vs. Adam Cole. Trios Debut of the Blackpool Combat Club against The Gunn Club. Owen Hart Foundation Women's Tournament Qualifying Match: Ruby Soho vs. Robyn Renegade.`,
    imgSrc: `${CLOUDINARY_LINK}/Media/Rampage/4-15-22.jpg`,
  },
  {
    title: 'Rampage 4/8/22',
    runtime: '45 min',
    date: new Date(2022, 3, 8),
    description: `Wheeler Yuta faces Blackpool Combat Club’s Jon Moxley. Bryan Danielson vs. Trent Beretta. Owen Hart Foundation Women’s Qualifying Match: Red Velvet vs. Willow Nightingale. Swerve Strickland in action.`,

    imgSrc: `${CLOUDINARY_LINK}/Media/Rampage/4-8-22.jpg`,
  },
  {
    title: 'Rampage 4/1/22',
    runtime: '44 min',
    date: new Date(2022, 3, 1),
    description: `Top Flight vs. The Young Bucks. Powerhouse Hobbs collides with Keith Lee. Fuego Del Sol, Evil Uno and Stu Grayson face the House of Black (Brody King, Buddy Matthews and Malakai Black). Jamie Hayter vs. Skye Blue.`,
    imgSrc: `${CLOUDINARY_LINK}/Media/Rampage/4-1-22.jpg`,
  },
  {
    title: 'Rampage 3/25/22',
    runtime: '44 min',
    date: new Date(2022, 2, 25),
    description: `Swerve Strickland vs. FTW Champion Ricky Starks. Lance Archer vs. Dustin Rhodes. Bobby Fish & Kyle O'Reilly vs. Dark Order. QT Marshall presents his "certificate of accomplishment" to Team Taz's Hook. Nyla Rose in action.`,
    imgSrc: `${CLOUDINARY_LINK}/Media/Rampage/3-25-22.jpg`,
  },
];

const dark = [
  {
    title: 'Dark EP. 139',
    runtime: '44 min',
    date: new Date(2022, 3, 19),
    description: `6 Matches With Swerve Strickland & Keith Lee, Toni Storm, Ricky Starks & More`,
    imgSrc: `${CLOUDINARY_LINK}/Media/Dark/4-19-22.jpg`,
  },
  {
    title: 'Dark EP. 138',
    runtime: '44 min',
    date: new Date(2022, 3, 12),
    description: `6 Matches: Powerhouse Hobbs, Diamanté, Max Caster + Special Look at Championship Week`,
    imgSrc: `${CLOUDINARY_LINK}/Media/Dark/4-12-22.jpg`,
  },

  {
    title: 'Dark EP. 137',
    runtime: '44 min',
    date: new Date(2022, 3, 5),
    description: `6 Matches: Dark Order, Abadon, Sonny, Lance Archer, The Factory, Ryan Nemeth & More!`,
    imgSrc: `${CLOUDINARY_LINK}/Media/Dark/4-5-22.jpg`,
  },
];

const darkElevation = [
  {
    title: 'Dark Elevation EP. 59',
    runtime: '44 min',
    date: new Date(2022, 3, 18),
    description: `7 Matches Featuring The Hardys, Shida, Top Flight, Ruby Soho, Andrade & More`,
    imgSrc: `${CLOUDINARY_LINK}/Media/Dark_Elevation/4-18-22.jpg`,
  },
  {
    title: 'Dark Elevation EP. 58',
    runtime: '44 min',
    date: new Date(2022, 3, 11),
    description: `76 Matches Featuring Penta, Dark Order, Ruby Soho, Top Flight, Kazarian & More`,
    imgSrc: `${CLOUDINARY_LINK}/Media/Dark_Elevation/4-11-22.jpg`,
  },
  {
    title: 'Dark Elevation EP. 57',
    runtime: '44 min',
    date: new Date(2022, 3, 4),
    description: `8 Matches Featuring Paul Wight, Best Friends, Ruby Soho, Anna Jay, Kaz & More`,
    imgSrc: `${CLOUDINARY_LINK}/Media/Dark_Elevation/4-4-22.jpg`,
  },
];
export { payperview, dynamite, rampage, dark, darkElevation };
