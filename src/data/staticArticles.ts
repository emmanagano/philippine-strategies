export interface Article {
  id: number;
  title: string;
  description: string;
  date: string;
  slug: string;
  category: string;
}

export const staticArticles: Article[] = [
  {
    id: 1,
    title: "When the Koreans have Gone - a reflective poem",
    description: "Examining the impact of South Korean influence in the Philippines and what could happen if they were to leave.",
    date: "September 14, 2019",
    slug: "when-the-koreans-have-gone",
    category: "all-article",
  },
  {
    id: 2,
    title: "Sun Exposure may be the Reason why there were few Covid-19 cases among the poor in the Philippines",
    description: "Investigating the possible link between increased sun exposure among lower-income Filipinos and lower Covid-19 infection rates.",
    date: "April 18, 2020",
    slug: "sun-exposure-covid19-philippines",
    category: "all-article",
  },
  {
    id: 3,
    title: "Why is the Philippines so Backward?",
    description: "A controversial take on the systemic and cultural issues that contribute to the Philippines' slow progress compared to its neighbors.",
    date: "December 10, 2021",
    slug: "why-is-philippines-backward",
    category: "all-article",
  },
  {
    id: 4,
    title: "The Problem with Squid Game",
    description: "A critical analysis of the popular Korean show Squid Game and its social, economic, and political messages.",
    date: "October 25, 2021",
    slug: "problem-with-squid-game",
    category: "all-article",
  },
  {
    id: 5,
    title: "Tribes and Bribes",
    description: "An exploration of how tribalism and corruption shape Philippine politics and business dealings.",
    date: "February 8, 2023",
    slug: "tribes-and-bribes",
    category: "all-article",
  },
  {
    id: 6,
    title: "A Chinese Philippines",
    description: "An analysis of China's influence on the Philippines and what it means for the country's future.",
    date: "July 1, 2023",
    slug: "a-chinese-philippines",
    category: "all-article",
  },
  {
    id: 7,
    title: "Artificial Sweeteners Lower Mental Illness Philippines Study",
    description: "Lack of artificial sweeteners in the Philippine food supply linked to lower rates of mental illness compared to 1st world countries.",
    date: "February 20, 2025",
    slug: "artificial-sweeteners-mental-illness",
    category: "all-article",
  },
  {
    id: 8,
    title: "Climate Change Impact Due to Increased Population and Social Media",
    description: "A discussion on how climate change is exacerbated by rising population numbers and the influence of social media in shaping public perception.",
    date: "January 28, 2025",
    slug: "climate-change-impact-philippines",
    category: "all-article",
  },
  {
    id: 9,
    title: "Rodrigo Duterte: The Uncooked Dialectic of a Nation in Heat",
    description: "A searing reflection on Rodrigo Duterte’s presidency as a raw, postmodern rupture in Filipino politics, exposing the nation’s contradictions through the aesthetics of violence and unapologetic power.",
    date: "March 20, 2025",
    slug: "rodrigo-duterte-uncooked",
    category: "all-article",
  },
  {
    id: 10,
    title: "The Duterte Propaganda Machine: How Young Filipinos Are Saying, “Hey, Wait Just a Darned Minute - That Can’t Be Right!”",
    description: "A look at how tech-savvy Filipino youth are challenging pro-Duterte disinformation and reshaping the fight for truth online.",
    date: "March 25, 2025",
    slug: "young-filipinos-vs-dds-propaganda",
    category: "all-article",
  },
  {
    id: 11,
    title: "Civil War Coming to a Philippines Near You?",
    description: "Duterte's arrest at The Hague ignites a national political crisis, threatening Sara Duterte's career, stirring Mindanaoan secessionist talk, and courting China into the mix.",
    date: "April 4, 2025",
    slug: "civil-war-philippines-duterte-impeachment-secession",
    category: "all-article",
  },
  {
    id: 12,
    title: "Persistent Corruption In The Philippines",
    description: "A first-person account of enduring political dysfunction, historical comparisons, and the urgent call to reform Philippine governance from the top down.",
    date: "April 19th, 2025",
    slug: "persistent-corruption-philippines",
    category: "all-article",
  }
];
