import { EventDetails } from "../components/EventModal";

const defaultRules = [
  "Participants must register before the deadline.",
  "Teams must arrive 15 minutes before the event starts.",
  "Use of unfair means will lead to immediate disqualification.",
  "Decision of the judges and coordinators is final.",
  "Participants must carry a valid college ID card.",
];

const defaultCoordinators = [
  { name: "Prof. R. Meenakshi", role: "Student Coordinator", phone: "9400000001" },
  { name: "Arjun Krishnan", role: "Student Coordinator", phone: "9400000002" },
];

export const technicalEvents: EventDetails[] = [
 {
  title: "INTRUDEX45",
  shortName: "Intrudex45",
  category: "Technical",
  participants: 4,
  format: "Team of 4",

  description:
  "INTRUDEX45 is a rapid machine learning challenge where teams bid for datasets and build a working ML model within a strict time limit.",

  fullDescription:
  "INTRUDEX45 – Rapid Model Development Challenge is a technical competition designed to test participants’ strategic thinking and machine learning implementation skills. Teams first participate in a dataset auction where they bid using virtual credits to acquire a dataset. After securing a dataset, teams must quickly preprocess the data, select an appropriate machine learning model, train it, and generate performance metrics within a limited time. The event evaluates participants’ ability to make strategic decisions, build efficient models, and explain their approach effectively.",

  image: "/image/Indrudex.png",
  posterImage: "/Posters/Indrudex.jpeg",
  altText: "Machine learning model development challenge",

  rounds: [
    {
      name: "Round 1 – Dataset Auction",
      description:
      "Each team receives virtual credits and strategically bids for one dataset displayed with details such as domain, problem type, dataset size, and feature information."
    },
    {
      name: "Round 2 – Rapid Model Challenge",
      description:
      "Teams use the acquired dataset to perform data preprocessing, select a suitable machine learning model, train the model, and generate performance metrics within the time limit."
    }
  ],

  rules: [
    "Each team must consist of 4 participants.",
    "Internet usage may not be allowed depending on lab policy.",
    "Pre-trained models are strictly prohibited.",
    "External datasets cannot be used.",
    "Participants must submit their code at the end of the event.",
    "Judges’ decisions will be final."
  ],

  coordinators: [{ name: "Vignesh K", role: "Coordinator", phone: "+91 7695968502" }, { name: "Ranjith Kumar K", role: "Coordinator", phone: "+91 979190758" }], documentUrl: "/Indrudex-45.pdf"
},


  {
    title: "UI Matrix",
    shortName: "UI Matrix",
    category: "Technical",
    participants: 2,
    format: "Team",

    description:
      "UI Matrix is a fast-paced frontend interface coding challenge where teams design and develop a creative user interface from scratch within a limited time.",

    fullDescription:
      "UI Matrix challenges teams to transform a given concept into a clean, responsive interface within limited time, using HTML, CSS and JavaScript creativity.",

    image: "/image/UI matrix.png",
    posterImage: "/Posters/UI Matrix.jpeg", // 👈 Replace with your actual poster file
    altText: "Frontend UI design and development concept",

    rounds: [
      {
        name: "Step 1  UI Idea Announcement",
        description:
          "A UI concept such as an e-commerce product page, event registration interface, student dashboard, travel booking interface, or fitness app homepage will be given on the spot. Teams must quickly plan the layout and structure the UI components."
      },
      {
        name: "Step 2  UI Development",
        description:
          "Teams must build the complete interface within the given time, focusing on structured layout, proper spacing, visually appealing design, clean code, and responsive behavior. Bonus features such as animations or interactive elements may be added if time permits."
      }
    ],

    rules: [
      "Each team must consist of two participants.",
      "Internet connection will not be provided during the competition.",
      "Mobile phones are strictly prohibited.",
      "Pre-built templates are not allowed.",
      "Copying code from external sources is strictly prohibited.",
      "Participants must build the UI completely from scratch.",
      "Only offline tools and software may be used.",
      "Judges decisions will be final."
    ],
    coordinators: [{ name: "Dharani M P", role: "Coordinator", phone: "+91 9042078814" }, { name: "ParvinKumar K", role: "Coordinator", phone: "+91 7010910428" }],
    documentUrl: "/UI_MATRIX.pdf"
  },
  // prompt to pick
  {
    title: "Prompt To Pick", shortName: "Prompt To Pick", category: "Technical", participants: 1, format: "Individual",
    description: "Prompt to Pick is an AI prompt engineering competition where participants design effective prompts to generate accurate and creative AI outputs.",
    fullDescription: "Prompt to Pick is an interactive competition that tests participants creativity and skills in AI prompt engineering. The event has two rounds: the first focuses on creating a structured prompt using given elements such as topic, audience, format, and tone, while the second requires participants to generate an AI image similar to a reference image using a descriptive prompt. The competition helps participants improve creative thinking, prompt design, and effective communication with AI tools.",
    image: "/image/P2P.png",
    posterImage: "/Posters/p2p.jpeg", // 👈 Replace with your actual poster file
    altText: "Illustration representing debugging",
    rounds: [{
      name: "Round 1  Prompt Puzzle",
      description:
        "Participants receive prompt elements such as Topic, Audience, Format, and Tone. They must combine these elements logically to create a clear and structured prompt."
    },
    {
      name: "Round 2  Vision to Visual",
      description:
        "Participants are shown a reference image and must recreate a similar image using an AI image generation tool by writing a detailed descriptive prompt."
    }],
    rules: [
      "Each participant must work individually.",
      "Participants must use all provided prompt elements in Round 1.",
      "AI tools may only be used for prompt testing or image generation.",
      "Uploading the reference image directly into the generator is not allowed.",
      "Participants must complete each round within the given time limit.",
      "Judges' decisions will be final.",
    ],
    coordinators: [{ name: "Sriharipriya", role: "Coordinator", phone: "+91 9360767536" }, { name: "Charnika", role: "Coordinator", phone: "+91 9095807580" }], documentUrl: "/P2P-description.pdf"
  },
  // Rev Arena
  {
    title: "Reverse Arena",
    shortName: "RevArena",
    category: "Technical",
    participants: 3,
    format: "Team",

    description:
      "Reverse Arena is an intense cybersecurity challenge where participants analyze binaries, encoded files, and scripts to uncover hidden logic and capture flags.",

    fullDescription:
      "Reverse Arena is a reverse engineering competition designed to test analytical thinking, technical expertise, and problem-solving skills under pressure. Participants are given compiled programs, binaries, encoded files, or obfuscated scripts and must analyze them to uncover hidden logic, vulnerabilities, or secrets. The goal is to reverse engineer the challenges and extract the correct flags within the allotted time. This event simulates real-world cybersecurity scenarios such as malware analysis and vulnerability discovery.",

    image: "/image/Rev Arena.jpg",
    posterImage: "/Posters/RevArena.jpeg", // 👈 Replace with your actual poster file
    altText: "Cybersecurity reverse engineering concept",

    rounds: [
      {
        name: "Reverse Engineering Challenge",
        description:
          "Teams analyze provided binaries, executables, or scripts to identify hidden logic, decode protected content, and capture the correct flags within the time limit."
      }
    ],

    rules: [
      "Participants may compete individually or in teams of up to three members.",
      "Participants must analyze the provided files and extract the correct flags.",
      "Sharing flags between teams is strictly prohibited.",
      "Internet access may be restricted depending on organizer rules.",
      "Fair play must be maintained throughout the competition.",
      "Judges' decisions will be final."
    ],
    coordinators: [{ name: "Abarnesh S", role: "Coordinator", phone: "+91 9944254586" }, { name: "Yuvaraja A", role: "Coordinator", phone: "+91 7200080804" }], documentUrl: "/Revarena_Event.pdf"
  },
];

export const nonTechnicalEvents: EventDetails[] = [
  // E- sports
{
  title: "E-Sports",
  shortName: "E-Sports",
  category: "Fun",
  participants: 4,
  format: "Team",

  description:
  "E-Sports is a competitive gaming event where participants compete in popular mobile games such as BGMI, Free Fire, and eFootball, testing teamwork, strategy, and gaming skills.",

  fullDescription:
  "E-Sports is an exciting gaming competition designed for students who are passionate about competitive mobile gaming. Participants will compete in popular games such as BGMI, Free Fire, and eFootball. The tournament focuses on teamwork, quick decision-making, and strategic gameplay. Matches will be conducted depending on the number of registered teams and players, with participants competing in different battle modes to determine the winners.",

  image: "/image/Esports.jpeg",
  posterImage: "/Posters/E-Sports.jpeg", // 👈 Replace with your actual poster file
  altText: "Competitive mobile gaming tournament",

  rounds: [
    {
      name: "BGMI Tournament",
      description:
      "Teams compete in BGMI using Team Deathmatch (Warehouse) or Classic mode (Livik). In TDM, the team that reaches 40 kills first wins, while in Classic mode the last surviving team wins."
    },
    {
      name: "Free Fire Tournament",
      description:
      "Teams compete in Free Fire using Clash Squad or Battle Royale mode depending on the number of teams. The winning team is determined based on survival and match performance."
    },
    {
      name: "eFootball Tournament",
      description:
      "Players compete in 1v1 eFootball mobile matches where victory is determined by goals scored, match result, and fair gameplay."
    }
  ],

  rules: [
    "Only mobile devices such as smartphones or tablets are allowed.",
    "Each BGMI and Free Fire team must consist of 4 players.",
    "No substitute players are allowed during matches.",
    "Use of hacks, illegal apps, or unfair methods is strictly prohibited.",
    "Participants must maintain respectful behavior during the tournament.",
    "Breaking tournament rules or misconduct will lead to disqualification.",
    "Organizers’ decisions will be final."
  ],

  coordinators: [{ name: "Bharath", role: "Coordinator", phone: "+91 8667308494" }, { name: "Siva", role: "Coordinator", phone: "+91 8675015407" }],
 documentUrl: "/E-sports.pdf"
  },
  // spot and solve
  {
    title: "Spot and Solve",
    shortName: "Spot & Solve",
    category: "Technical",
    participants: 1,
    format: "Individual",

    description:
      "Spot and Solve is an image-based OSINT quiz where participants analyze real-world images and identify locations, landmarks, and other visual clues using logical reasoning and research.",

    fullDescription:
      "Spot and Solve is an image-based Open Source Intelligence (OSINT) challenge where participants examine real-world images to extract visual clues and answer location-based questions. Using publicly available tools, AI platforms, maps, and search engines, participants must identify locations, landmarks, coordinates, and time of day from the images. The event tests visual intelligence, analytical thinking, and online research skills while encouraging participants to apply logical reasoning and investigative techniques.",

    image: "/image/Spot and Solve.jpeg",
    posterImage: "/Posters/spotand solve.jpeg", // 👈 Replace with your actual poster file
    altText: "Visual clue analysis and location identification concept",

    rounds: [
      {
        name: "Image Analysis Quiz",
        description:
          "Participants will be given 5 image-based questions where they must identify details such as location, time of day, or geographic coordinates using logical reasoning and publicly available tools."
      }
    ],

    rules: [
      "Individual participation only.",
      "The total time limit for the event is 30 minutes.",
      "Participants may use publicly available tools, AI platforms, search engines, maps, and public databases.",
      "Participants can revisit previous questions within the time limit.",
      "No discussion or collaboration with other participants is allowed.",
      "Each correct answer carries 2 points.",
      "All answers must be verified using Google Maps.",
      "Unverified answers will not be considered.",
      "Any unethical practices or rule violations will lead to disqualification."
    ],
    coordinators: [{ name: "Dhiyanamoorthy M", role: "Coordinator", phone: "+91 8680864850" }, { name: "Vaishnavi", role: "Coordinator", phone: "+91 9043617369" }], documentUrl: "/spot_and_solve_zenith.pdf"
  },

  // chess
  {
    title: "Inter-College Blitz Chess Championship",
    shortName: "Blitz Chess",
    category: "Non-Technical",
    participants: 1,
    format: "Individual",

    description:
      "Inter-College Blitz Chess Championship is a competitive chess event featuring an online qualification round followed by an over-the-board knockout stage to determine the final champion.",

    fullDescription:
      "The Inter-College Blitz Chess Championship is a competitive inter-college event that combines an online qualification stage with an over-the-board knockout stage. Participants first compete in a fast-paced online arena tournament using the Lichess mobile platform. The top four players from the qualification stage advance to the physical knockout rounds, including semifinals and a final match, where a single overall champion will be crowned.",

    image: "/image/Chess.jpeg",
    posterImage: "/Posters/Chess.jpeg", // 👈 Replace with your actual poster file
    altText: "Chess board representing a blitz chess competition",

    rounds: [
      {
        name: "Stage 1  Online Qualification",
        description:
          "Participants compete in a 3+2 blitz arena tournament on the Lichess mobile application. Rankings are determined by total points and performance rating, and the top four players qualify for the knockout stage."
      },
      {
        name: "Stage 2  Knockout Stage",
        description:
          "The top four players compete in over-the-board matches with semifinals and a final. Semifinals are played with 5+0 time control and the final with 5+3 time control using a digital chess clock."
      }
    ],

    rules: [
      "Each participant must compete individually.",
      "Only verified Lichess accounts are allowed for the online qualification stage.",
      "Participants must use the Lichess mobile application on their personal device.",
      "No headphones, Bluetooth devices, or smartwatches are allowed during the game.",
      "Phone must remain on the table with Do Not Disturb mode enabled.",
      "Network stability is the participant's responsibility.",
      "Judges and the Chief Arbiter's decision will be final in all matters.",
    ],
    coordinators: [{ name: "Hanish", role: "Coordinator", phone: "+91 8248421320" }, { name: "ParvinKumar K", role: "Coordinator", phone: "+91 7010910428" }], documentUrl: "/Chess_zenith.pdf"
  },
    {
    title: "IPL Auction",
    shortName: "IPL Auction",
    category: "Fun",
    participants: 4,
    format: "Team",

    description:
    "IPL Auction is an interactive simulation where teams build a cricket squad by bidding for players using virtual money, testing their cricket knowledge, strategy, and budget management skills.",

    fullDescription:
    "The IPL Auction Simulation is an engaging competition where participants experience the excitement of forming a cricket team similar to the Indian Premier League auction. Teams compete by answering cricket-related quiz questions, strategically bidding for players using virtual money, and building a balanced squad. The event evaluates participants' cricket knowledge, decision-making ability, team strategy, and budget management skills while encouraging teamwork and strategic thinking.",

    image: "/image/IPL Auction.jpeg",
    posterImage: "/Posters/IPL auction.jpeg",
    altText: "Cricket auction strategy and team building concept",

    rounds: [
  {
    name: "Round 1 – Player Knowledge Quiz",
    description:
      "Teams answer multiple-choice questions related to IPL players, teams, cricket roles, and auction concepts. Teams with the highest scores qualify for the next round."
  },
  {
    name: "Round 2 – Mini IPL Auction",
    description:
      "Teams participate in a simulated IPL auction using virtual money. Each team receives a fixed budget and must bid strategically to build a balanced squad."
  },
  {
    name: "Round 3 – Team Strategy Presentation",
    description:
      "Teams present their final squad and explain their strategy, player selection, and budget planning to the judges."
  }
],

rules: [
  "Each team must consist of 3 to 4 participants.",
  "All teams will receive the same virtual auction budget.",
  "Teams must follow the time limits for each round.",
  "Fair play and discipline must be maintained throughout the event.",
  "Unfair practices or cheating will lead to disqualification.",
  "The organizers' decision will be final."
],
    coordinators: [{ name: "Muthu Kumar", role: "Coordinator", phone: "+91 9043625680" }, { name: "Mukil Kumar", role: "Coordinator", phone: "+91 8248372754" }], documentUrl: "/IPL_AUCTION.pdf"
  },
];

export const funEvents: EventDetails[] = [
  {
  title: "Find the Song",
  shortName: "Find the Song",
  category: "Fun",
  participants: 1,
  format: "Individual",

  description:
  "Find the Song is a music-based challenge where participants listen to short audio clips and identify the correct song title, movie, or artist within the given time.",

  fullDescription:
  "Find the Song is an exciting music quiz where participants listen to short audio clips and identify the song title, movie name, or singer associated with the clip. The clips may include instrumental music, background tunes, or short lyric segments. Participants must rely on their listening skills, memory, and quick thinking to recognize the songs. The event tests musical knowledge, attention to detail, and speed of identification.",

  image: "/image/Find the song.png",
  posterImage: "/Posters/Find the song.jpeg",
  altText: "Music quiz and song identification challenge",

  rounds: [
    {
      name: "Audio Quiz Round",
      description:
      "Participants will listen to 10 short audio clips and identify the correct song title, movie, or artist. Each correct answer carries one point."
    }
  ],

  rules: [
    "Individual participation only.",
    "The total event duration is 30 minutes.",
    "Participants must not discuss answers with others during the event.",
    "Use of music recognition apps or external assistance is strictly prohibited.",
    "Participants may revisit previous questions within the given time limit.",
    "Each correct answer will be awarded one point.",
    "Any misconduct or cheating will lead to disqualification."
  ],

  coordinators: [{ name: "Dharshinipriya", role: "Coordinator", phone: "+91 9655579278" }, { name: "Yasheeka", role: "Coordinator", phone: "+91 9025930191" }],
  documentUrl: "/find the song.pdf"
},

];
