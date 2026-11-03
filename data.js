// Everything shown on the desktop lives here. Add a project = add an object.
// file: path under media/ without extension (expects .mp4 + .jpg)
// ratio: "16:9" | "9:16" | "21:9"

window.PORTFOLIO = {
  owner: "Connie",
  role: "I do GTM for startups",
  // about me window; **word** = bold, **Belo** opens the Belo app
  aboutTitle: "Hi, I'm Connie! ♡",
  about: [
    "I'm a UCLA grad with a background in Statistics & Data Science, currently based in San Francisco and working in GTM, where I get to mix creativity, strategy, and a little bit of everything.",
    "I'm a people person at heart. I love meeting new people, spontaneous hangouts, exploring new places, and finding little pockets of community wherever I go.",
    "Outside of work, I'm probably traveling somewhere, taking way too many photos, trying a new restaurant, or stopping to pet every cat I see. I love good food, good company, and collecting little moments along the way. 🐈",
    "I'm also building **Belo**, a project inspired by something I genuinely care about: making it easier for people to find their people, make plans, and turn online connections into real-life experiences.",
    "I love bringing people and ideas together, whether that's through technology, community, or a spontaneous dinner plan.",
    "Always down for a coffee, a food adventure, a spontaneous trip, or meeting a new cat. :)",
  ],
  // the phone on the desktop: messages are sent to this inbox via formsubmit.co (no backend)
  phone: {
    title: "DM for collabs",
    status: "usually replies within a day",
    greeting: ["hiii 👋", "DM me for collabs, launches, GTM help, or just a coffee chat ☕", "leave your email so I can write back ♡"],
    sent: "got it! it's in my inbox now ♡ talk soon",
  },
  email: "conniew0319@gmail.com",
  // sticker colors/glyphs are drawn in app.js, keyed by id
  socials: [
    { id: "x", label: "@lwqconnie", url: "https://x.com/lwqconnie" },
    { id: "xhs", label: "@carinabonbon", url: "https://www.xiaohongshu.com/search_result?keyword=carinabonbon" },
    { id: "ig", label: "@lwqconnie", url: "https://www.instagram.com/lwqconnie" },
    { id: "in", label: "Connie Lin", url: "https://www.linkedin.com/in/connie-lin-174b2b263" },
  ],

  // printed by the printer on the desktop
  resume: {
    pdf: "media/connie-lin-resume.pdf",
    name: "Connie (Wenqi) Lin",
    headline: "GTM for startups",
    school: "UCLA · B.S. Statistics & Data Science · 2026",
    now: [
      "GTM & content for AI startups: Teamily, Hellyeah (all the films on this desktop)",
      "Vibe-coded Belo, a live map of plans nearby (iOS, TestFlight beta)",
      "Founder, Kairo: product, iOS app, branding & go-to-market (2026–)",
    ],
    before: [
      "Data Science Intern, Yale: epidemiological modeling in R (2023)",
      "Data projects: enrollment demand modeling, Bayesian MCMC, experiment design",
    ],
    skills: ["GTM", "launch films", "AI video", "social", "Python", "SQL", "R", "A/B testing", "LLM eval", "SwiftUI", "Supabase"],
  },

  // vibe-coded apps live in their own cartridge, not a folder
  apps: [
    {
      id: "belo",
      name: "Belo",
      icon: "media/belo/icon.png",
      tagline: "See what's happening around you.",
      about: "A live map of plans nearby. Land in a new neighborhood and instantly see who's hiking, grabbing coffee or heading to a show, then ask to join. Hosts approve every request, so each group is one they chose.",
      steps: ["Find a plan nearby", "Ask to join", "Host says yes", "Meet up"],
      built: "Designed, built and shipped solo with AI coding tools: native iOS app, backend, website and TestFlight releases.",
      stack: ["SwiftUI", "MapKit", "Supabase", "Cloudflare Workers", "TestFlight"],
      screens: ["media/belo/screen-1.jpg", "media/belo/screen-2.jpg", "media/belo/screen-3.jpg", "media/belo/screen-4.jpg", "media/belo/screen-5.jpg"],
      website: "media/belo/website.jpg",
      url: "https://belowith.com",
    },
  ],

  // the big PUBLISH key on the desktop: a short intro window, then out to GitHub
  github: {
    user: "thisisconnielin",
    url: "https://github.com/thisisconnielin",
    title: "Skills I'm shipping ✿",
    intro: [
      "Lately I've been building **Claude skills**: little packaged playbooks that teach Claude to do a real GTM job, start to finish.",
      "I take a workflow I'd normally do by hand, write down exactly how I do it, and turn it into something anyone can install.",
    ],
    skills: [
      {
        name: "Tripwire",
        url: "https://github.com/thisisconnielin/tripwire",
        about: "Finds your competitors, tracks what they change, launch and post, then gives you a short GTM readout: top moves, why they matter, what to do next.",
      },
      {
        name: "Piltover Forge",
        url: "https://github.com/thisisconnielin/piltover-forge",
        about: "A set of GTM runes forged from real work. First up, Eyeball Collection: give it a company URL and get a brand report built from evidence, down to their real colors and fonts.",
      },
    ],
    more: "more skills on the way ✿",
  },

  folders: [
    {
      id: "work",
      name: "watch me cook 🍳",
      color: "#ffb84d",
      blurb: "Launch films, ads & product videos for AI startups",
      // brand shows as a chip in the player; order here = order in the folder (TraceRoot last)
      groups: [
        {
          brand: "Teamily", name: "Teamily · Creative showcase",
          items: [
            { file: "teamily/choose-your-squad", title: "Choose Your Squad", dur: "20s", ratio: "16:9", note: "Fighting-game character select, but your fighters are AI agents." },
            { file: "teamily/tetris-week", title: "Tetris Week", dur: "22s", ratio: "16:9", note: "A whole week of tasks clearing like Tetris lines." },
          ],
        },
        {
          brand: "Teamily", name: "Teamily · Use cases",
          items: [
            { file: "teamily/launch-squad", title: "Launch Squad", dur: "15s", ratio: "16:9", note: "Light/green UI film: a squad of agents ships a launch." },
            { file: "teamily/work-with-teamily", title: "Work With Teamily", dur: "20s", ratio: "16:9", note: "Product walkthrough on phone + desktop." },
            { file: "teamily/agents-fighting", title: "Agents Fighting", dur: "25s", ratio: "16:9", note: "Vinyl-toy agents fight it out over the quarterly report." },
            { file: "teamily/agents-arguing", title: "Agents Arguing", dur: "20s", ratio: "9:16", note: "Vertical: what happens when your agents disagree." },
            { file: "teamily/group-chat", title: "Group Chat", dur: "19s", ratio: "16:9", note: "Early chat-format concept." },
          ],
        },
        {
          brand: "Hellyeah", name: "Hellyeah · Brand films",
          items: [
            { file: "hellyeah/brand-film", title: "Brand Film", dur: "53s", ratio: "16:9", note: "The numbers story: what an AI ad team does for a small business." },
            { file: "hellyeah/launch-film-60s", title: "Launch Film", dur: "60s", ratio: "16:9", note: "60s launch reel, product UI front and center. Approve → done." },
            { file: "hellyeah/launch-and-grow", title: "Launch & Grow", dur: "58s", ratio: "16:9", note: "Clean, light brand story built around the Hellyeah mark." },
            { file: "hellyeah/2am-agent", title: "The 2AM Agent", dur: "59s", ratio: "16:9", note: "Silent short film — the agent working while you sleep. Real UI comped into live action." },
            { file: "hellyeah/born-for-this", title: "Born For This", dur: "60s", ratio: "21:9", note: "Muse-parody cinema film starring the crown-1 mascot. Shot in 21:9." },
            { file: "hellyeah/born-for-this-pinball", title: "Born For This — Pinball Cut", dur: "38s", ratio: "21:9", note: "Faster re-cut of Born For This." },
            { file: "hellyeah/this-is-the-shift", title: "This Is The Shift", dur: "51s", ratio: "16:9", note: "Narrated launch film, duotone stills + fast VO." },
            { file: "hellyeah/the-switch", title: "The Switch", dur: "20s", ratio: "16:9", note: "Gray agency loop → orange Hellyeah flow." },
            { file: "hellyeah/performance-max-reel", title: "Performance Max Reel", dur: "60s", ratio: "16:9", note: "Founder × AIMA dialogue showreel for the Video Ads launch." },
            { file: "hellyeah/we-do-the-rest", title: "We Do The Rest", dur: "30s", ratio: "16:9", note: "Tap Approve → lifestyle payoff." },
            { file: "hellyeah/what-if-we-never-met", title: "What If We Never Met", dur: "30s", ratio: "9:16", note: "Vertical brand piece about the work you never have to do." },
          ],
        },
        {
          brand: "Hellyeah", name: "Hellyeah · Ads",
          items: [
            { file: "hellyeah/fast-cut", title: "Fast Cut", dur: "32s", ratio: "9:16", note: "No-VO 120 BPM product cut for social." },
            { file: "hellyeah/game-has-changed", title: "The Game Has Changed", dur: "33s", ratio: "16:9", note: "Crown-1 army vs. the agency horde. Epic mass-battle ad." },
            { file: "hellyeah/its-how-you-use-it", title: "It's How You Use It", dur: "22s", ratio: "16:9", note: "Edgy topic, cute visuals — budget size isn't everything." },
            { file: "hellyeah/budget-vampires", title: "Budget Vampires", dur: "19s", ratio: "16:9", note: "Halloween B2B ad: who's draining your ad budget?" },
            { file: "hellyeah/what-went-wrong", title: "What Went Wrong", dur: "36s", ratio: "16:9", note: "Report → run → campaigns, cut like a rocket launch." },
            { file: "hellyeah/while-you-slept", title: "While You Slept", dur: "16s", ratio: "16:9", note: "3AM bots burned your budget. Hellyeah didn't." },
            { file: "hellyeah/moms-fridge-pixel", title: "Mom's Fridge", dur: "21s", ratio: "16:9", note: "16-bit pixel ad with a chiptune score." },
            { file: "hellyeah/fridge-to-feed", title: "From The Fridge To The Feed", dur: "30s", ratio: "16:9", note: "Claymation-style one-take." },
            { file: "hellyeah/agency-switch", title: "Agency → Switch", dur: "30s", ratio: "16:9", note: "Pure-UI ad: kickoff needs a kickoff… or just Switch." },
            { file: "hellyeah/meet-hellyeah-ai-ads", title: "Meet Hellyeah AI Ads", dur: "30s", ratio: "16:9", note: "Mascot-led product intro." },
          ],
        },
        {
          brand: "Hellyeah", name: "Hellyeah · Product & events",
          items: [
            { file: "hellyeah/website-demo", title: "Website Demo", dur: "60s", ratio: "16:9", note: "Campaign builder walkthrough rendered straight from the code repo." },
            { file: "hellyeah/launch-demo-1-0", title: "Launch Demo 1.0", dur: "90s", ratio: "16:9", note: "Talking head + screen demo with pop-ups." },
            { file: "hellyeah/ooo-techno-recap", title: "OOO Techno Night Recap", dur: "64s", ratio: "16:9", note: "Event recap cut to a 140 BPM techno track." },
          ],
        },
        {
          brand: "TraceRoot", name: "TraceRoot · Launch films",
          items: [
            { file: "traceroot/introducing-traceroot", title: "Introducing TraceRoot", dur: "15s", ratio: "16:9", note: "Short 'Introducing' launch film." },
            { file: "traceroot/traceroot-showcase", title: "TraceRoot Showcase", dur: "34s", ratio: "16:9", note: "Find the pattern: logs → root cause → fix." },
          ],
        },
      ],
    },
  ],
};
