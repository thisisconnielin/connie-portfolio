// Everything shown on the desktop lives here. Add a project = add an object.
// file: path under media/ without extension (expects .mp4 + .jpg)
// ratio: "16:9" | "9:16" | "21:9"

window.PORTFOLIO = {
  owner: "Connie",
  role: "AI video & motion designer",
  about: [
    "Hi! I'm Connie ✿",
    "I make launch films, ads and product videos for AI startups — mixing AI video (Seedance, Kling), code-driven motion (HyperFrames) and hand-tuned sound.",
    "Everything here was made in 2026 for Hellyeah, Teamily and TraceRoot.",
  ],
  links: [
    { label: "GitHub", url: "https://github.com/" },
    { label: "Email", url: "mailto:hello@example.com" },
  ],

  folders: [
    {
      id: "hellyeah",
      name: "Hellyeah",
      color: "#ff6a3d",
      blurb: "AI marketing agent — brand films, ads, product demos & events.",
      groups: [
        {
          name: "Brand films",
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
          name: "Ads",
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
          name: "Product & events",
          items: [
            { file: "hellyeah/website-demo", title: "Website Demo", dur: "60s", ratio: "16:9", note: "Campaign builder walkthrough rendered straight from the code repo." },
            { file: "hellyeah/launch-demo-1-0", title: "Launch Demo 1.0", dur: "90s", ratio: "16:9", note: "Talking head + screen demo with pop-ups." },
            { file: "hellyeah/ooo-techno-recap", title: "OOO Techno Night Recap", dur: "64s", ratio: "16:9", note: "Event recap cut to a 140 BPM techno track." },
          ],
        },
      ],
    },
    {
      id: "teamily",
      name: "Teamily",
      color: "#3ddc84",
      blurb: "AI teammates in your group chat — showcase films & use cases.",
      groups: [
        {
          name: "Creative showcase",
          items: [
            { file: "teamily/choose-your-squad", title: "Choose Your Squad", dur: "20s", ratio: "16:9", note: "Fighting-game character select, but your fighters are AI agents." },
            { file: "teamily/tetris-week", title: "Tetris Week", dur: "22s", ratio: "16:9", note: "A whole week of tasks clearing like Tetris lines." },
          ],
        },
        {
          name: "Use cases",
          items: [
            { file: "teamily/launch-squad", title: "Launch Squad", dur: "15s", ratio: "16:9", note: "Light/green UI film: a squad of agents ships a launch." },
            { file: "teamily/work-with-teamily", title: "Work With Teamily", dur: "20s", ratio: "16:9", note: "Product walkthrough on phone + desktop." },
            { file: "teamily/agents-fighting", title: "Agents Fighting", dur: "25s", ratio: "16:9", note: "Vinyl-toy agents fight it out over the quarterly report." },
            { file: "teamily/agents-arguing", title: "Agents Arguing", dur: "20s", ratio: "9:16", note: "Vertical: what happens when your agents disagree." },
            { file: "teamily/group-chat", title: "Group Chat", dur: "19s", ratio: "16:9", note: "Early chat-format concept." },
          ],
        },
      ],
    },
    {
      id: "traceroot",
      name: "TraceRoot",
      color: "#8b7bff",
      blurb: "AI debugging for production — launch films.",
      groups: [
        {
          name: "Launch films",
          items: [
            { file: "traceroot/introducing-traceroot", title: "Introducing TraceRoot", dur: "15s", ratio: "16:9", note: "Short 'Introducing' launch film." },
            { file: "traceroot/traceroot-showcase", title: "TraceRoot Showcase", dur: "34s", ratio: "16:9", note: "Find the pattern: logs → root cause → fix." },
          ],
        },
      ],
    },
  ],
};
