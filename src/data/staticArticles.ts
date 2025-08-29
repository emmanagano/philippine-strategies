export interface Article {
  id: number;
  title: string;
  description: string;
  date: string;
  slug: string;
  category: string;
  alt: string;
}

export const staticArticles: Article[] = [
  {
    id: 1,
    title: "When the Koreans have Gone - a reflective poem",
    description: "Examining the impact of South Korean influence in the Philippines and what could happen if they were to leave.",
    date: "September 14, 2019",
    slug: "when-the-koreans-have-gone",
    category: "Information Sovereignty & Media Influence",
    alt: "A densely lit urban street in South Korea at dusk, glowing with neon signage in Hangul. Restaurants, karaoke bars, and adult entertainment venues line both sides of the alley as electrical wires crisscross the sky—symbolizing the commercial vibrance and nightlife culture that has extended its reach into Southeast Asian cities like Angeles, Subic, and Cebu."
  },
  {
    id: 2,
    title: "Sun Exposure may be the Reason why there were few Covid-19 cases among the poor in the Philippines",
    description: "Investigating the possible link between increased sun exposure among lower-income Filipinos and lower Covid-19 infection rates.",
    date: "April 18, 2020",
    slug: "sun-exposure-covid19-philippines",
    category: "Population & Health Policy",
    alt: "Healthcare workers in full-body PPE and face masks standing outdoors during the Covid-19 pandemic in the Philippines, symbolizing frontline safety measures and public health response."
  },
  {
    id: 3,
    title: "Why is the Philippines so Backward?",
    description: "A controversial take on the systemic and cultural issues that contribute to the Philippines' slow progress compared to its neighbors.",
    date: "December 10, 2021",
    slug: "why-is-philippines-backward",
    category: "Labor, OFW & Migration Economics",
    alt: "Filipino wet market scene bustling with activity — an elderly woman selects dried fish from a wooden crate, while shoppers in casual clothes navigate narrow aisles filled with local produce, eggs, and other goods under a canopy of makeshift tarps and hanging lights."
  },
  {
    id: 4,
    title: "The Problem with Squid Game",
    description: "A critical analysis of the popular Korean show Squid Game and its social, economic, and political messages.",
    date: "October 25, 2021",
    slug: "problem-with-squid-game",
    category: "Information Sovereignty & Media Influence",
    alt: "Crowded urban street scene featuring a massive Netflix billboard of the Squid Game robot doll, illustrating the global cultural reach of Korean media and its presence in everyday public life."
  },
  {
    id: 5,
    title: "Tribes and Bribes",
    description: "An exploration of how tribalism and corruption shape Philippine politics and business dealings.",
    date: "February 8, 2023",
    slug: "tribes-and-bribes",
    category: "Federalism & Local Autonomy",
    alt: "Scattered Philippine 500-peso bills featuring Benigno and Corazon Aquino, symbolizing systemic corruption, political patronage, and the role of money in regional and tribal power struggles across the Philippines."
  },
  {
    id: 6,
    title: "A Chinese Philippines",
    description: "An analysis of China's influence on the Philippines and what it means for the country's future.",
    date: "July 1, 2023",
    slug: "a-chinese-philippines",
    category: "Information Sovereignty & Media Influence",
    alt: "The red national flag of the People’s Republic of China waving against a clear sky, symbolizing Chinese geopolitical influence and state presence central to the Philippines–China dispute over the South China Sea."
  },
  {
    id: 7,
    title: "Artificial Sweeteners Lower Mental Illness Philippines Study",
    description: "Lack of artificial sweeteners in the Philippine food supply linked to lower rates of mental illness compared to 1st world countries.",
    date: "February 20, 2025",
    slug: "artificial-sweeteners-mental-illness",
    category: "Population & Health Policy",
    alt: "Granulated artificial sweetener being poured from a spoon into a ceramic container, representing the widespread dietary presence of substances like aspartame and their potential link to mental health disorders such as ADHD and OCD."
  },
  {
    id: 8,
    title: "Climate Change Impact Due to Increased Population and Social Media",
    description: "A discussion on how climate change is exacerbated by rising population numbers and the influence of social media in shaping public perception.",
    date: "January 28, 2025",
    slug: "climate-change-impact-philippines",
    category: "Population & Health Policy",
    alt: "Crowded urban street scene surrounded by high-rise buildings, illustrating the impact of rapid population growth and dense urbanization on climate vulnerability and environmental sustainability."
  },
  {
    id: 9,
    title: "Rodrigo Duterte: The Uncooked Dialectic of a Nation in Heat",
    description: "A searing reflection on Rodrigo Duterte’s presidency as a raw, postmodern rupture in Filipino politics, exposing the nation’s contradictions through the aesthetics of violence and unapologetic power.",
    date: "March 20, 2025",
    slug: "rodrigo-duterte-uncooked",
    category: "Public Sector Integrity & Governance",
    alt: "Black-and-white photo of an elderly Filipino man sitting on a wooden cart beside a jeepney, capturing the raw street-level realities of life under Duterte’s presidency and the socioeconomic struggles often overshadowed by his rhetoric."
  },
  {
    id: 10,
    title: "The Duterte Propaganda Machine: How Young Filipinos Are Saying, “Hey, Wait Just a Darned Minute - That Can’t Be Right!”",
    description: "A look at how tech-savvy Filipino youth are challenging pro-Duterte disinformation and reshaping the fight for truth online.",
    date: "March 25, 2025",
    slug: "young-filipinos-vs-dds-propaganda",
    category: "Information Sovereignty & Media Influence",
    alt: "Young Filipino woman using laptop to challenge online disinformation and engage in digital activism"
  },
  {
    id: 11,
    title: "Civil War Coming to a Philippines Near You?",
    description: "Duterte's arrest at The Hague ignites a national political crisis, threatening Sara Duterte's career, stirring Mindanaoan secessionist talk, and courting China into the mix.",
    date: "April 4, 2025",
    slug: "civil-war-philippines-duterte-impeachment-secession",
    category: "Security, Foreign Policy & Defense",
    alt: "Archival black-and-white photo of soldiers advancing through wooded terrain during a military offensive, evoking themes of civil war, armed rebellion, and secessionist conflict relevant to the political unrest surrounding the Duterte impeachment crisis in the Philippines."
  },
  {
    id: 12,
    title: "The Present Military Environment in the Philippines",
    description: "An in-depth analysis of the evolving military landscape in the Philippines—from Duterte’s pivot to China, PLA infiltration, and POGO operations, to Marcos Jr.'s renewed alliance with the U.S. and the strategic role of EDCA military bases amid rising tensions in the West Philippine Sea.",
    date: "April 6, 2025",
    slug: "military",
    category: "Security, Foreign Policy & Defense",
    alt: "Philippine and U.S. Marines conducting an amphibious landing exercise during joint military drills, symbolizing renewed defense cooperation under the EDCA agreement amid rising tensions in the West Philippine Sea."

  },
  {
    id: 13,
    title: "Foreign Investment in the Philippines",
    description: "Foreign direct investment (FDI) in the Philippines has struggled under the weight of political infighting, outdated ownership laws, and broken promises. From Duterte’s pivot to China and policy unpredictability, to Marcos Jr.’s stalled reforms and constitutional roadblocks, this article dissects why foreign investors are hesitant—and what must change for the country to regain its footing in Southeast Asia.",
    date: "April 6, 2025",
    slug: "foreign-investment",
    category: "Economic Liberalization & Innovation",
    alt: "Illustration of a dollar sack and red upward arrow between the United States flag and a Philippine map colored in national colors—symbolizing the flow of foreign investment and economic ties between the U.S. and the Philippines."
  },
  {
    id: 14,
    title: "How the Current Political Landscape Could Impact American Diplomatic Endeavors in the Philippines",
    description: "How the impeachment of Vice President Sara Duterte could influence American diplomatic operations, regional stability, and U.S.-Philippines relations.",
    date: "April 6, 2025",
    slug: "politics",
    category: "Security, Foreign Policy & Defense",
    alt: "Protesters marching in Manila holding red flags and placards demanding justice, accountability, and the junking of the anti-terror law—highlighting political unrest tied to the impeachment of Vice President Sara Duterte."
  },

  {
    id: 15,
    title: "Persistent Corruption In The Philippines",
    description: "A first-person account of enduring political dysfunction, historical comparisons, and the urgent call to reform Philippine governance from the top down.",
    date: "April 19th, 2025",
    slug: "persistent-corruption-philippines",
    category: "Public Sector Integrity & Governance",
    alt: "Graffiti-covered wall featuring the phrase 'money make the world go around,' visually emphasizing the article’s central theme of endemic corruption and the overpowering influence of money in Philippine politics and governance."
  },
  {
    id: 16,
    title: "How an Open Conflict between the US and China in the West Philippine Sea might Unfold and Manifest",
    description: "An in-depth scenario analysis of a potential US-China conflict in the West Philippine Sea—covering military escalation, global impact, and strategic outcomes.",
    date: "May 3, 2025",
    slug: "us-china-conflict-west-philippine-sea",
    category: "Security, Foreign Policy & Defense",
    alt: "Illustrated map of the South China Sea showing Chinese warships and fighter jets, symbolizing rising military tensions and strategic posturing in contested waters involving China, the Philippines, and other Southeast Asian nations."
  },
  {
    id: 17,
    title: "Is China “Winning Without Fighting”?",
    description: "How China’s maritime strategy in the South China Sea reflects Sun Tzu’s Art of War—achieving dominance through shaping operations, deception, and lawfare without firing a shot.",
    date: "May 8, 2025",
    slug: "china-winning-without-fighting-south-china-sea",
    category: "Security, Foreign Policy & Defense",
    alt: "Illustration of Chinese military strategist Sun Tzu beside the book cover of The Art of War, referencing the philosophical and strategic foundations of China’s maritime approach in the South China Sea."
  },
  {
    id: 18,
    title: "Evaluating the Likelihood of Rodrigo Duterte Being Convicted by the ICC, and What His Penalties Might Be.",
    description: "Could Rodrigo Duterte be convicted by the ICC? This analysis breaks down the case, evidence, legal hurdles, and possible penalties—including life imprisonment.",
    date: "May 17, 2025",
    slug: "duterte-icc-trial-conviction-penalty-assessment",
    category: "Justice & Judiciary Reform",
    alt: "Former Philippine President Rodrigo Duterte speaking at a podium with the presidential seal, captured mid-speech in front of the Philippine flag—highlighting his central role in the ICC trial for alleged crimes against humanity during his war on drugs."
  },
  {
    id: 19,
    title: "Potential Impact an Impeachment Acquittal of Sara Duterte on the Philippine Political Environment",
    description: "What happens if Sara Duterte is acquitted? This analysis explores the potential impact on the Duterte dynasty, Marcos rivalry, public trust, and foreign policy.",
    date: "May 24, 2025",
    slug: "sara-duterte-impeachment-acquittal-impact",
    category: "Justice & Judiciary Reform",
    alt: "Philippine Vice President Sara Duterte in a formal barong-style blouse standing in front of uniformed military officials, symbolizing her embattled but resilient position amid impeachment proceedings and political tensions."
  },
  {
    id: 20,
    title: "Do Filipinos Really Aspire for Societal Discipline and Justice?",
    description: "Exploring the tension between cultural norms and the pursuit of societal discipline and justice in the Philippines.",
    date: "June 11, 2025",
    slug: "filipinos-discipline-justice",
    category: "Public Sector Integrity & Governance",
    alt: "Filipino tricycle drivers and their dogs wearing face shields during the COVID-19 pandemic, with a 'Jesus is Lord' sign displayed—capturing the intersection of faith, public compliance, and cultural expression in a time of crisis."
  },
  {
    id: 21,
    title: "Why the BBC Exhibits Anti-US Bias",
    description: "A critical look at the BBC’s growing anti-American tone, its political leanings after Trump’s return, and how editorial changes at the network reflect broader media bias concerns.",
    date: "July 14, 2025",
    slug: "bbc-anti-us-bias",
    category: "Information Sovereignty & Media Influence",
    alt: "Close-up of a smartphone screen displaying the BBC News app icon with quick access menu options like “Top Stories” and “My News,” symbolizing the digital reach and editorial influence of the British Broadcasting Corporation."
  },
  {
    id: 22,
    title: "10 Measures To Fix The Philippines",
    description: "From reinstating the jury system to economic liberalization and population reform, here are 10 bold proposals to fix the Philippines’ governance, economy, and justice system.",
    date: "July 23, 2025",
    slug: "10-measures-to-fix-the-philippines",
    category: "Public Sector Integrity & Governance",
    alt: "Aerial view of a densely populated urban neighborhood in Metro Manila, with a mix of low-rise residential houses and high-rise condominium buildings under a bright blue sky — representing the socioeconomic disparity and urban congestion addressed in Philippine reform proposals."
  },
  {
    id: 23,
    title: "The 'Rat People' Trend and China's Demographic Crisis: A Threat to Xi Jinping's Global Ambitions",
    description: "China’s emerging “Rat People” youth movement and plummeting birth rates threaten to derail President Xi Jinping’s economic and geopolitical ambitions. This article explores how social disillusionment, gender resistance, and an aging population are creating a demographic time bomb.",
    date: "August 6, 2025",
    slug: "rat-people-china-demographic-crisis",
    category: "Population & Health Policy",
    alt: "Black-and-white graffiti art of a rat painted on a brick wall, symbolizing the 'Rat People' movement in China where disillusioned youth reject societal expectations and economic pressures."
  },
  {
    id: 24,
    title: "What would the Philippines look like today had the U.S. NOT won in the Pacific Theater of World War II?",
    description: "What if the United States hadn’t defeated Japan in World War II? This counterfactual deep-dive explores an alternate 2025 Philippines under prolonged Japanese control—an authoritarian client state marked by economic stagnation, cultural suppression, and geopolitical subservience to Tokyo.",
    date: "August 16, 2025",
    slug: "philippines-if-us-lost-wwii",
    category: "Security, Foreign Policy & Defense",
    alt: "Dystopian city street at night with hovering surveillance drones and silhouetted pedestrians under neon-lit buildings"
  },
  {
    id: 25,
    title: "An Alternate Archipelago: The Philippines in 2025 Under Continued American Stewardship",
    description: "What if the Philippines had been retained as a US Territory?  This alternate history imagines the country under continued American stewardship, resulting in far better political stability, much less corruption, and economic equitability that would allow all ships to float atop a rising tide.",
    date: "August 20, 2025",
    slug: "philippines-if-us-retained-control",
    category: "Security, Foreign Policy & Defense",
    alt: "Filipino children smiling and waving U.S. and Philippine flags during a community event"
  },
  {
    id: 26,
    title: "Potential Diplomatic Repercussions for the US Following the Extradition of Apollo Quiboloy from the Philippines",
    description: "The potential extradition of Apollo Quiboloy tests US-Philippine relations, balancing justice, political sensitivities, and regional diplomacy. Will this move strengthen the alliance—or provoke lasting backlash?",
    date: "August 25, 2025",
    slug: "quiboloy-extradition-us-philippines-relations",
    category: "Security, Foreign Policy & Defense",
    alt: "FBI wanted poster for Apollo Carreon Quiboloy, listing charges of sex trafficking, conspiracy, and bulk cash smuggling.",
  }
];
