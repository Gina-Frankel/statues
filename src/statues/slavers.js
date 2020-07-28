import georgeWashington from "../static/statueImages/george_washington_3.jpg";
import robertClaytonImage from "../static/statueImages/robert_clayton.jpg";
import benjaminFranklinImage from "../static/statueImages/benjamin_franklin_2.jpg";

const slaversStatueList = [
  // {
  //   statueId: 1,
  //   name: "William Penn",
  //   wikiArticleURI: "https://en.wikipedia.org/wiki/William_Penn",
  //   artworkTitle: "William Penn",
  //   artworkURI: "https://artuk.org/discover/artworks/william-penn-244578/",
  //   artworkArtist: "Eli Johnson (1850â1881)",
  //   slaverSummary: "",
  //   artworkSummary: "",
  //   image: "",
  // },
  // {
  //   statueId: 2,
  //   name: "William Penn",
  //   wikiArticleURI: "https://en.wikipedia.org/wiki/William_Penn",
  //   artworkTitle: "William Penn",
  //   artworkURI: "https://artuk.org/discover/artworks/william-penn-244564/",
  //   artworkArtist: "Eli Johnson (1850â1881)",
  //   slaverSummary: "",
  //   artworkSummary: "",
  // },
  // {
  //   statueId: 1,
  //   name: "Adam Sedgwick",
  //   wikiArticleURI: "https://en.wikipedia.org/wiki/Adam_Sedgwick",
  //   artworkTitle: "Adam Sedgwick (1785â1873)",
  //   artworkURI:
  //     "https://artuk.org/discover/artworks/adam-sedgwick-17851873-253304/",
  //   artworkArtist: "Thomas Woolner (1825â1892)",
  //   slaverSummary: "",
  //   artworkSummary: "",
  // },
  // {
  //   statueId: 2,
  //   name: "Adam Sedgwick",
  //   wikiArticleURI: "https://en.wikipedia.org/wiki/Adam_Sedgwick",
  //   artworkTitle: "Adam Sedgwick (1785â1873)",
  //   artworkURI:
  //     "https://artuk.org/discover/artworks/adam-sedgwick-17851873-256509/",
  //   artworkArtist: "Henry Weekes I (1807â1877)",
  //   slaverSummary: "",
  //   artworkSummary: "",
  // },
  // {
  //   statueId: 1,
  //   name: "Augustus Caesar",
  //   wikiArticleURI: "https://en.wikipedia.org/wiki/Augustus_Caesar",
  //   artworkTitle: "Caesar Augustus (63 BCâ14 AD)",
  //   artworkURI:
  //     "https://artuk.org/discover/artworks/caesar-augustus-63-bc14-ad-262408/",
  //   artworkArtist: "Leone Clerici (active 1875)",
  //   slaverSummary: "",
  //   artworkSummary: "",
  // },
  // {
  //   statueId: 1,
  //   name: "Charles McGarel",
  //   wikiArticleURI: "https://en.wikipedia.org/wiki/Charles_McGarel",
  //   artworkTitle: "Charles McGarel (1788â1876)",
  //   artworkURI:
  //     "https://artuk.org/discover/artworks/charles-mcgarel-17881876-252527/",
  //   artworkArtist: "Hamo Thornycroft (1850â1925)",
  //   slaverSummary: "",
  //   artworkSummary: "",
  // },
  // {
  //   statueId: 1,
  //   name: "Demosthenes",
  //   wikiArticleURI: "https://en.wikipedia.org/wiki/Demosthenes",
  //   artworkTitle: "Demosthenes",
  //   artworkURI: "https://artuk.org/discover/artworks/demosthenes-248475/",
  //   artworkArtist: "unknown artist",
  //   slaverSummary: "",
  //   artworkSummary: "",
  // },
  // {
  //   statueId: 2,
  //   name: "Demosthenes",
  //   wikiArticleURI: "https://en.wikipedia.org/wiki/Demosthenes",
  //   artworkTitle: "Demosthenes (384 BCâ322 BC)",
  //   artworkURI:
  //     "https://artuk.org/discover/artworks/demosthenes-384-bc322-bc-270673/",
  //   artworkArtist:
  //     "Filippo Albacini (1777â1858) and Carlo Albacini (1734â1813)",
  //   slaverSummary: "",
  //   artworkSummary: "",
  // },
  // {
  //   statueId: 3,
  //   name: "Demosthenes",
  //   wikiArticleURI: "https://en.wikipedia.org/wiki/Demosthenes",
  //   artworkTitle: "Demosthenes (c.384 BCâ322 BC)",
  //   artworkURI:
  //     "https://artuk.org/discover/artworks/demosthenes-c-384-bc322-bc-254002/",
  //   artworkArtist: "British (English) School",
  //   slaverSummary: "",
  //   artworkSummary: "",
  // },
  // {
  //   statueId: 1,
  //   name: "Edward Colston",
  //   wikiArticleURI: "https://en.wikipedia.org/wiki/Edward_Colston",
  //   artworkTitle: "Edward Colston (1636â1721)",
  //   artworkURI:
  //     "https://artuk.org/discover/artworks/edward-colston-16361721-266037/",
  //   artworkArtist: "John Michael Rysbrack (1694â1770)",
  //   slaverSummary: "",
  //   artworkSummary: "",
  // },
  // {
  //   statueId: 2,
  //   name: "Edward Colston",
  //   wikiArticleURI: "https://en.wikipedia.org/wiki/Edward_Colston",
  //   artworkTitle: "Edward Colston (1636â1721)",
  //   artworkURI:
  //     "https://artuk.org/discover/artworks/edward-colston-16361721-266112/",
  //   artworkArtist: "John Cassidy (1860â1939)",
  //   slaverSummary: "",
  //   artworkSummary: "",
  // },
  // {
  //   statueId: 3,
  //   name: "Edward Colston",
  //   wikiArticleURI: "https://en.wikipedia.org/wiki/Edward_Colston",
  //   artworkTitle: "Edward Colston (1636â1721)",
  //   artworkURI:
  //     "https://artuk.org/discover/artworks/edward-colston-16361721-276045/",
  //   artworkArtist: "Coalbrookdale and John Cassidy (1860â1939)",
  //   slaverSummary: "",
  //   artworkSummary: "",
  // },
  // {
  //   statueId: 1,
  //   name: "Horace",
  //   wikiArticleURI: "https://en.wikipedia.org/wiki/Horace",
  //   artworkTitle: "Horace",
  //   artworkURI: "https://artuk.org/discover/artworks/horace-254597/",
  //   artworkArtist: "unknown artist",
  //   slaverSummary: "",
  //   artworkSummary: "",
  // },
  // {
  //   statueId: 2,
  //   name: "Horace",
  //   wikiArticleURI: "https://en.wikipedia.org/wiki/Horace",
  //   artworkTitle: "Horace",
  //   artworkURI: "https://artuk.org/discover/artworks/horace-272403/",
  //   artworkArtist: "John Cheere (1709â1787)",
  //   slaverSummary: "",
  //   artworkSummary: "",
  // },
  {
    statueId: 1,
    name: "William Beckford",
    wikiArticleURI: "https://en.wikipedia.org/wiki/William_Beckford_(novelist)",
    artworkTitle: "William Beckford (1760â1844)",
    artworkURI:
      "https://artuk.org/discover/artworks/william-beckford-17601844-263006/",
    artworkArtist: "Anne Snow",
    slaverSummary:
      "William Beckford (1760 -1844) was a famous writer and collector. He inherited one of the greatest individual fortunes in England. His wealth was a result of numerous sugar plantations in Jamaica and the forced labour of  more than a 1000 African slaves on these plantations. The families connection with slavery began in 1661 when Peter Beckford, William Beckford’s great grandfather travelled to Jamaica in search of wealth. Here he started to amass political power, land and slaves. On his death he had £1.5. million in the bank, 20 estates and 1200 slaves. His son, also Peter Beckford continued building the plantations and amassing slaves. On his death he was in ownership of 1737 slaves.\n Alderman Beckford, the son of Peter Beckford and father of William Beckford strove to raise the social standing of the Beckford family in England. He was involved in politics and was an Alderman and later a Lord Mayer (1762) of London. He used his political power to influence trade and colonial polices. As an absentee planter, he ruled with brutal force. In 1970 there was a slave rebellion. Over 400 slaves were killed and the leader of the rebellion was burnt alive.\nWilliam Beckford, was 10 when he inherited all his families legacy including at 1356 slaves. Beckford was minimally involved in the running of the Jamaican plantations. However he was very happy to spent the plantation profits. He used the money on a vast collection of  books, furniture, objects and art; and on building extravagant architecture structures which included Fronthill Abbey, a large Gothic Revival country house and Landown Tower. Following the abolition of slavery in 1838 Beckford received financial compensation, which he used to add to his collection.",
    artworkSummary: "",
  },
  // {
  //   statueId: 1,
  //   name: "Sulla",
  //   wikiArticleURI: "https://en.wikipedia.org/wiki/Sulla",
  //   artworkTitle: "Sulla (138â78 BC)",
  //   artworkURI: "https://artuk.org/discover/artworks/sulla-13878-bc-270693/",
  //   artworkArtist:
  //     "Filippo Albacini (1777â1858) and Carlo Albacini (1734â1813)",
  //   slaverSummary: "",
  //   artworkSummary: "",
  // },
  // {
  //   statueId: 1,
  //   name: "Pompey",
  //   wikiArticleURI: "https://en.wikipedia.org/wiki/Pompey",
  //   artworkTitle: "Pompey (106 BCâ48 BC)",
  //   artworkURI:
  //     "https://artuk.org/discover/artworks/pompey-106-bc48-bc-270803/",
  //   artworkArtist:
  //     "Filippo Albacini (1777â1858) and Carlo Albacini (1734â1813)",
  //   slaverSummary: "",
  //   artworkSummary: "",
  // },
  // {
  //   statueId: 1,
  //   name: "Plato",
  //   wikiArticleURI: "https://en.wikipedia.org/wiki/Plato",
  //   artworkTitle: "Plato (c.428 BCâc.348 BC)",
  //   artworkURI:
  //     "https://artuk.org/discover/artworks/plato-c-428-bcc-348-bc-252348/",
  //   artworkArtist: "unknown artist",
  //   slaverSummary: "",
  //   artworkSummary: "",
  // },
  // {
  //   statueId: 2,
  //   name: "Plato",
  //   wikiArticleURI: "https://en.wikipedia.org/wiki/Plato",
  //   artworkTitle: "Plato",
  //   artworkURI: "https://artuk.org/discover/artworks/plato-277150/",
  //   artworkArtist: "unknown artist",
  //   slaverSummary: "",
  //   artworkSummary: "",
  // },
  // {
  //   statueId: 3,
  //   name: "Plato",
  //   wikiArticleURI: "https://en.wikipedia.org/wiki/Plato",
  //   artworkTitle: "Plato",
  //   artworkURI: "https://artuk.org/discover/artworks/plato-263269/",
  //   artworkArtist:
  //     "Filippo Albacini (1777â1858) and Carlo Albacini (1734â1813)",
  //   slaverSummary: "",
  //   artworkSummary: "",
  // },
  // {
  //   statueId: 4,
  //   name: "Plato",
  //   wikiArticleURI: "https://en.wikipedia.org/wiki/Plato",
  //   artworkTitle: "Plato",
  //   artworkURI: "https://artuk.org/discover/artworks/plato-255912/",
  //   artworkArtist: "unknown artist",
  //   slaverSummary: "",
  //   artworkSummary: "",
  // },
  // {
  //   statueId: 5,
  //   name: "Plato",
  //   wikiArticleURI: "https://en.wikipedia.org/wiki/Plato",
  //   artworkTitle: "Plato",
  //   artworkURI: "https://artuk.org/discover/artworks/plato-254603/",
  //   artworkArtist: "unknown artist",
  //   slaverSummary: "",
  //   artworkSummary: "",
  // },
  // {
  //   statueId: 6,
  //   name: "Plato",
  //   wikiArticleURI: "https://en.wikipedia.org/wiki/Plato",
  //   artworkTitle: "Plato",
  //   artworkURI: "https://artuk.org/discover/artworks/plato-248993/",
  //   artworkArtist: "unknown artist",
  //   slaverSummary: "",
  //   artworkSummary: "",
  // },
  // {
  //   statueId: 1,
  //   name: "Nero",
  //   wikiArticleURI: "https://en.wikipedia.org/wiki/Nero",
  //   artworkTitle: "Nero (37â68)*",
  //   artworkURI: "https://artuk.org/discover/artworks/nero-3768-269698/",
  //   artworkArtist: "unknown artist",
  //   slaverSummary: "",
  //   artworkSummary: "",
  // },
  // {
  //   statueId: 2,
  //   name: "Nero",
  //   wikiArticleURI: "https://en.wikipedia.org/wiki/Nero",
  //   artworkTitle: "Nero",
  //   artworkURI: "https://artuk.org/discover/artworks/nero-258612/",
  //   artworkArtist: "Ercole Rosa (1846â1943)",
  //   slaverSummary: "",
  //   artworkSummary: "",
  // },
  // {
  //   statueId: 1,
  //   name: "Julius Caesar",
  //   wikiArticleURI: "https://en.wikipedia.org/wiki/Julius_Caesar",
  //   artworkTitle: "Julius Caesar (100 BCâ44 BC)",
  //   artworkURI:
  //     "https://artuk.org/discover/artworks/julius-caesar-100-bc44-bc-270804/",
  //   artworkArtist:
  //     "Filippo Albacini (1777â1858) and Carlo Albacini (1734â1813)",
  //   slaverSummary: "",
  //   artworkSummary: "",
  // },
  // {
  //   statueId: 2,
  //   name: "Julius Caesar",
  //   wikiArticleURI: "https://en.wikipedia.org/wiki/Julius_Caesar",
  //   artworkTitle: "Julius Caesar (100 BCâ44 BC)",
  //   artworkURI:
  //     "https://artuk.org/discover/artworks/julius-caesar-100-bc44-bc-255256/",
  //   artworkArtist: "unknown artist",
  //   slaverSummary: "",
  //   artworkSummary: "",
  // },
  // {
  //   statueId: 3,
  //   name: "Julius Caesar",
  //   wikiArticleURI: "https://en.wikipedia.org/wiki/Julius_Caesar",
  //   artworkTitle: "Julius Caesar (100 BCâ44 BC)",
  //   artworkURI:
  //     "https://artuk.org/discover/artworks/julius-caesar-100-bc44-bc-248992/",
  //   artworkArtist: "Domenico Brucciani (1815â1880)",
  //   slaverSummary: "",
  //   artworkSummary: "",
  // },
  // {
  //   statueId: 4,
  //   name: "Julius Caesar",
  //   wikiArticleURI: "https://en.wikipedia.org/wiki/Julius_Caesar",
  //   artworkTitle: "Julius Caesar (100 BCâ44 BC)",
  //   artworkURI:
  //     "https://artuk.org/discover/artworks/julius-caesar-100-bc44-bc-248684/",
  //   artworkArtist: "British School",
  //   slaverSummary: "",
  //   artworkSummary: "",
  // },
  // {
  //   statueId: 1,
  //   name: "Hadrian",
  //   wikiArticleURI: "https://en.wikipedia.org/wiki/Hadrian",
  //   artworkTitle: "Hadrian",
  //   artworkURI: "https://artuk.org/discover/artworks/hadrian-257042/",
  //   artworkArtist: "Ercole Rosa (1846â1943)",
  //   slaverSummary: "",
  //   artworkSummary: "",
  // },
  {
    statueId: 1,
    name: "George Washington",
    wikiArticleURI: "https://en.wikipedia.org/wiki/George_Washington",
    artworkTitle: "George Washington (1732â1799)",
    artworkURI:
      "https://artuk.org/discover/artworks/george-washington-17321799-274000/",
    artworkArtist: "unknown artist",
    slaverSummary:
      "George Washington (1732 –1799) was an American political leader, military general, statesman, and founding father who served as the first president of the United States from 1789 to 1797. George Washington became a slave owner aged just 11, when his father died and he inherited his farm and its 10 slaves. He bought dozens more in the course of his life and obtained more through his marriage. Upon his death he had more than 100 slaves. Washington believed he treated his slaves fairly. However there were occasions were slaves approached Washington to tell them they did not have enough rations, and that they had to supplement their diet with hunting and fishing, they were only given two outfits of clothing per year and they were punished with whipping, and being sold to other plantations. \n His views of slavery began to change during the US revolution. He expressed support for the gradual emancipation of slavery. However he never took any action to abolish slavery, and even supported measures passed by Congress to protect slavery. His only practical anti-slavery action come in his will, where he stipulated that all his slaves should be emancipated upon the death of his wife.  She decided to free them before her death and in January 1801,  they were emancipated. ",
    artworkSummary: "",
    image: georgeWashington,
  },
  // {
  //   statueId: 2,
  //   name: "George Washington",
  //   wikiArticleURI:
  //     "https://en.wikipedia.org/wiki/George_Washington_and_slavery",
  //   artworkTitle: "George Washington (1732â1799)",
  //   artworkURI:
  //     "https://artuk.org/discover/artworks/george-washington-17321799-274000/",
  //   artworkArtist: "unknown artist",
  //   slaverSummary:
  //     "George Washington (1732 –1799) was an American political leader, military general, statesman, and founding father who served as the first president of the United States from 1789 to 1797. George Washington became a slave owner aged just 11, when his father died and he inherited his farm and its 10 slaves. He bought dozens more in the course of his life and obtained more through his marriage. Upon his death he had more than 100 slaves. Washington believed he treated his slaves fairly. However there were occasions were slaves approached Washington to tell them they did not have enough rations, and that they had to supplement their diet with hunting and fishing, they were only given two outfits of clothing per year and they were punished with whipping, and being sold to other plantations. \n His views of slavery began to change during the US revolution. He expressed support for the gradual emancipation of slavery. However he never took any action to abolish slavery, and even supported measures passed by Congress to protect slavery. His only practical anti-slavery action come in his will, where he stipulated that all his slaves should be emancipated upon the death of his wife.  She decided to free them before her death and in January 1801,  they were emancipated. ",
  //   artworkSummary: "",
  // },
  // {
  //   statueId: 3,
  //   name: "George Washington",
  //   wikiArticleURI: "https://en.wikipedia.org/wiki/George_Washington",
  //   artworkTitle: "George Washington (1732â1799)",
  //   artworkURI:
  //     "https://artuk.org/discover/artworks/george-washington-17321799-265480/",
  //   artworkArtist:
  //     "Jean-Antoine Houdon (1741â1828) (posthumous cast) and Gorham Manufacturing Company",
  //   slaverSummary:
  //     "George Washington (1732 –1799) was an American political leader, military general, statesman, and founding father who served as the first president of the United States from 1789 to 1797. George Washington became a slave owner aged just 11, when his father died and he inherited his farm and its 10 slaves. He bought dozens more in the course of his life and obtained more through his marriage. Upon his death he had more than 100 slaves. Washington believed he treated his slaves fairly. However there were occasions were slaves approached Washington to tell them they did not have enough rations, and that they had to supplement their diet with hunting and fishing, they were only given two outfits of clothing per year and they were punished with whipping, and being sold to other plantations. \n His views of slavery began to change during the US revolution. He expressed support for the gradual emancipation of slavery. However he never took any action to abolish slavery, and even supported measures passed by Congress to protect slavery. His only practical anti-slavery action come in his will, where he stipulated that all his slaves should be emancipated upon the death of his wife.  She decided to free them before her death and in January 1801,  they were emancipated. ",
  //   artworkSummary: "",
  // },
  // {
  //   statueId: 4,
  //   name: "George Washington",
  //   wikiArticleURI:
  //     "https://en.wikipedia.org/wiki/George_Washington_and_slavery",
  //   artworkTitle: "George Washington (1732â1799)",
  //   artworkURI:
  //     "https://artuk.org/discover/artworks/george-washington-17321799-265480/",
  //   artworkArtist:
  //     "Jean-Antoine Houdon (1741â1828) (posthumous cast) and Gorham Manufacturing Company",
  //   slaverSummary:
  //     "George Washington (1732 –1799) was an American political leader, military general, statesman, and founding father who served as the first president of the United States from 1789 to 1797. George Washington became a slave owner aged just 11, when his father died and he inherited his farm and its 10 slaves. He bought dozens more in the course of his life and obtained more through his marriage. Upon his death he had more than 100 slaves. Washington believed he treated his slaves fairly. However there were occasions were slaves approached Washington to tell them they did not have enough rations, and that they had to supplement their diet with hunting and fishing, they were only given two outfits of clothing per year and they were punished with whipping, and being sold to other plantations. \n His views of slavery began to change during the US revolution. He expressed support for the gradual emancipation of slavery. However he never took any action to abolish slavery, and even supported measures passed by Congress to protect slavery. His only practical anti-slavery action come in his will, where he stipulated that all his slaves should be emancipated upon the death of his wife.  She decided to free them before her death and in January 1801,  they were emancipated. ",
  //   artworkSummary: "",
  // },
  // {
  //   statueId: 5,
  //   name: "George Washington",
  //   wikiArticleURI: "https://en.wikipedia.org/wiki/George_Washington",
  //   artworkTitle: "George Washington (1732â1799)",
  //   artworkURI:
  //     "https://artuk.org/discover/artworks/george-washington-17321799-261870/",
  //   artworkArtist: "unknown artist",
  //   slaverSummary: "",
  //   artworkSummary: "",
  // },
  // {
  //   statueId: 6,
  //   name: "George Washington",
  //   wikiArticleURI:
  //     "https://en.wikipedia.org/wiki/George_Washington_and_slavery",
  //   artworkTitle: "George Washington (1732â1799)",
  //   artworkURI:
  //     "https://artuk.org/discover/artworks/george-washington-17321799-261870/",
  //   artworkArtist: "unknown artist",
  //   slaverSummary:
  //     "George Washington (1732 –1799) was an American political leader, military general, statesman, and founding father who served as the first president of the United States from 1789 to 1797. George Washington became a slave owner aged just 11, when his father died and he inherited his farm and its 10 slaves. He bought dozens more in the course of his life and obtained more through his marriage. Upon his death he had more than 100 slaves. Washington believed he treated his slaves fairly. However there were occasions were slaves approached Washington to tell them they did not have enough rations, and that they had to supplement their diet with hunting and fishing, they were only given two outfits of clothing per year and they were punished with whipping, and being sold to other plantations. \n His views of slavery began to change during the US revolution. He expressed support for the gradual emancipation of slavery. However he never took any action to abolish slavery, and even supported measures passed by Congress to protect slavery. His only practical anti-slavery action come in his will, where he stipulated that all his slaves should be emancipated upon the death of his wife.  She decided to free them before her death and in January 1801,  they were emancipated. ",
  //   artworkSummary: "",
  // },
  // {
  //   statueId: 7,
  //   name: "George Washington",
  //   wikiArticleURI: "https://en.wikipedia.org/wiki/George_Washington",
  //   artworkTitle: "George Washington (1732â1799)",
  //   artworkURI:
  //     "https://artuk.org/discover/artworks/george-washington-17321799-251071/",
  //   artworkArtist: "unknown artist",
  //   slaverSummary: "",
  //   artworkSummary: "",
  // },
  // {
  //   statueId: 8,
  //   name: "George Washington",
  //   wikiArticleURI:
  //     "https://en.wikipedia.org/wiki/George_Washington_and_slavery",
  //   artworkTitle: "George Washington (1732â1799)",
  //   artworkURI:
  //     "https://artuk.org/discover/artworks/george-washington-17321799-251071/",
  //   artworkArtist: "unknown artist",
  //   slaverSummary:
  //     "George Washington (1732 –1799) was an American political leader, military general, statesman, and founding father who served as the first president of the United States from 1789 to 1797. George Washington became a slave owner aged just 11, when his father died and he inherited his farm and its 10 slaves. He bought dozens more in the course of his life and obtained more through his marriage. Upon his death he had more than 100 slaves. Washington believed he treated his slaves fairly. However there were occasions were slaves approached Washington to tell them they did not have enough rations, and that they had to supplement their diet with hunting and fishing, they were only given two outfits of clothing per year and they were punished with whipping, and being sold to other plantations. \n His views of slavery began to change during the US revolution. He expressed support for the gradual emancipation of slavery. However he never took any action to abolish slavery, and even supported measures passed by Congress to protect slavery. His only practical anti-slavery action come in his will, where he stipulated that all his slaves should be emancipated upon the death of his wife.  She decided to free them before her death and in January 1801,  they were emancipated. ",
  //   artworkSummary: "",
  // },
  // {
  //   statueId: 1,
  //   name: "Claudius",
  //   wikiArticleURI: "https://en.wikipedia.org/wiki/Claudius",
  //   artworkTitle:
  //     "Claudius (10 BCâAD 54), with a Wreath (labelled as Augustus)",
  //   artworkURI:
  //     "https://artuk.org/discover/artworks/claudius-10-bcad-54-with-a-wreath-270812/",
  //   artworkArtist:
  //     "Filippo Albacini (1777â1858) and Carlo Albacini (1734â1813)",
  //   slaverSummary: "",
  //   artworkSummary: "",
  // },
  // {
  //   statueId: 2,
  //   name: "Claudius",
  //   wikiArticleURI: "https://en.wikipedia.org/wiki/Claudius",
  //   artworkTitle: "Claudius (10 BCâAD 54)",
  //   artworkURI:
  //     "https://artuk.org/discover/artworks/claudius-10-bcad-54-255258/",
  //   artworkArtist: "unknown artist",
  //   slaverSummary: "",
  //   artworkSummary: "",
  // },
  // {
  //   statueId: 1,
  //   name: "Cicero",
  //   wikiArticleURI: "https://en.wikipedia.org/wiki/Cicero",
  //   artworkTitle: "Cicero",
  //   artworkURI: "https://artuk.org/discover/artworks/cicero-248487/",
  //   artworkArtist: "unknown artist",
  //   slaverSummary: "",
  //   artworkSummary: "",
  // },
  // {
  //   statueId: 2,
  //   name: "Cicero",
  //   wikiArticleURI: "https://en.wikipedia.org/wiki/Cicero",
  //   artworkTitle: "Cicero (106 BCâ43 BC)",
  //   artworkURI:
  //     "https://artuk.org/discover/artworks/cicero-106-bc43-bc-272412/",
  //   artworkArtist: "John Cheere (1709â1787)",
  //   slaverSummary: "",
  //   artworkSummary: "",
  // },
  // {
  //   statueId: 1,
  //   name: "Christopher Columbus",
  //   wikiArticleURI: "https://en.wikipedia.org/wiki/Christopher_Columbus",
  //   artworkTitle: "Christopher Columbus (1451â1506)",
  //   artworkURI:
  //     "https://artuk.org/discover/artworks/christopher-columbus-14511506-265459/",
  //   artworkArtist: "TomÃ¡s BaÃ±uelos (b.1958)",
  //   slaverSummary: "",
  //   artworkSummary: "",
  // },
  // {
  //   statueId: 2,
  //   name: "Christopher Columbus",
  //   wikiArticleURI: "https://en.wikipedia.org/wiki/Christopher_Columbus",
  //   artworkTitle: "Christopher Columbus (1451â1506)",
  //   artworkURI:
  //     "https://artuk.org/discover/artworks/christopher-columbus-14511506-261190/",
  //   artworkArtist: "unknown artist",
  //   slaverSummary: "",
  //   artworkSummary: "",
  // },
  // {
  //   statueId: 1,
  //   name: "Christopher Codrington",
  //   wikiArticleURI: "https://en.wikipedia.org/wiki/Christopher_Codrington",
  //   artworkTitle: "Christopher Codrington (1668â1710)",
  //   artworkURI:
  //     "https://artuk.org/discover/artworks/christopher-codrington-16681710-275554/",
  //   artworkArtist: "Henry Cheere (1703â1781)",
  //   slaverSummary: "",
  //   artworkSummary: "",
  // },
  // {
  //   statueId: 2,
  //   name: "Christopher Codrington",
  //   wikiArticleURI:
  //     "https://en.wikipedia.org/wiki/Christopher_Codrington_(colonial_administrator)",
  //   artworkTitle: "Christopher Codrington (1668â1710)",
  //   artworkURI:
  //     "https://artuk.org/discover/artworks/christopher-codrington-16681710-275554/",
  //   artworkArtist: "Henry Cheere (1703â1781)",
  //   slaverSummary: "",
  //   artworkSummary: "",
  // },
  // {
  //   statueId: 1,
  //   name: "Augustus Caesar",
  //   wikiArticleURI: "https://en.wikipedia.org/wiki/Augustus_Caesar",
  //   artworkTitle: "Augustus Caesar (63 BCâAD 14)",
  //   artworkURI:
  //     "https://artuk.org/discover/artworks/augustus-caesar-63-bcad-14-277152/",
  //   artworkArtist: "Ferdinand Barbedienne (1810â1892)",
  //   slaverSummary: "",
  //   artworkSummary: "",
  // },
  // {
  //   statueId: 2,
  //   name: "Augustus Caesar",
  //   wikiArticleURI: "https://en.wikipedia.org/wiki/Augustus_Caesar",
  //   artworkTitle: "Augustus Caesar (63 BCâAD 14)",
  //   artworkURI:
  //     "https://artuk.org/discover/artworks/augustus-caesar-63-bcad-14-255255/",
  //   artworkArtist: "unknown artist",
  //   slaverSummary: "",
  //   artworkSummary: "",
  // },
  // {
  //   statueId: 1,
  //   name: "Simón Bolívar",
  //   wikiArticleURI: "https://en.wikipedia.org/wiki/Sim%C3%B3n_Bol%C3%ADvar",
  //   artworkTitle: "Simon Bolivar (1783â1830)",
  //   artworkURI:
  //     "https://artuk.org/discover/artworks/simon-bolivar-17831830-265458/",
  //   artworkArtist: "Hugo Daini (1919â1976)",
  //   slaverSummary: "",
  //   artworkSummary: "",
  // },
  {
    statueId: 1,
    name: "Robert Clayton",
    wikiArticleURI:
      "https://en.wikipedia.org/wiki/Robert_Clayton_(City_of_London_MP)",
    artworkTitle: "Sir Robert Clayton (1629â1707)",
    artworkURI:
      "https://artuk.org/discover/artworks/sir-robert-clayton-16291707-271729/",
    artworkArtist: "Grinling Gibbons (1648â1721)",
    slaverSummary:
      "Sir Robert Clayton (1629–1707) was a British merchant banker, politician and Lord Mayor of London.  Clayton was a major player in the early development of the slave trade and the Atlantic slave-economy. Clayton  was on the Court of Assistants (the management board) of the Royal African Company. The Royal African Company shipped more African slaves to the Americas than any other institution in the history of the Atlantic slave trade.",
    artworkSummary:
      "Sir Robert Clayton was a benefactor to St Thomas’s hospital and served as its president, and hence a statue was put up of him at the entrance of hospital. The hospital on 11 June 2020, announced that statue was to be removed due to his involvement with the slavery.",
    image: robertClaytonImage,
  },
  // {
  //   statueId: 2,
  //   name: "Hadrian",
  //   wikiArticleURI: "https://en.wikipedia.org/wiki/Hadrian",
  //   artworkTitle: "Hadrianus (AD 76âAD 138)",
  //   artworkURI:
  //     "https://artuk.org/discover/artworks/hadrianus-ad-76ad-138-255257/",
  //   artworkArtist: "unknown artist",
  //   slaverSummary: "",
  //   artworkSummary: "",
  // },
  // {
  //   statueId: 5,
  //   name: "Julius Caesar",
  //   wikiArticleURI: "https://en.wikipedia.org/wiki/Julius_Caesar",
  //   artworkTitle: "Gaius Julius Caesar (100 BCâ44 BC)",
  //   artworkURI:
  //     "https://artuk.org/discover/artworks/gaius-julius-caesar-100-bc44-bc-252387/",
  //   artworkArtist: "unknown artist",
  //   slaverSummary: "",
  //   artworkSummary: "",
  // },
  // {
  //   statueId: 1,
  //   name: "Benjamin Franklin",
  //   wikiArticleURI: "https://en.wikipedia.org/wiki/Benjamin_Franklin",
  //   artworkTitle: "Benjamin Franklin (1706â1790)",
  //   artworkURI:
  //     "https://artuk.org/discover/artworks/benjamin-franklin-17061790-252386/",
  //   artworkArtist: "unknown artist",
  //   slaverSummary:
  //     "Benjamin Franklin (1706- 1790) was one of the Founding Father’s of the United States, and was also an inventor and scientist, who was for his discoveries and theories regarding electricity. \n As a young man Franklin owned slaves, and his newspaper the Pennsylvania Gazette, advertised slaves for sale.  However in his later years, he became vocal as an abolitionist. In 1787 he began to serve as President of the Pennsylvania Society for Promoting the Abolition of Slavery. In 1789 he wrote and published essays calling for the abolition of slavery. His last political act was to send to Congress a petition on behalf of his Society asking for the emancipation of slavery and an end to the slave trade. The petition was denounced on the basis that the Constitution restrains any prohibition on trade and emancipation. ",
  //   artworkSummary: "",
  // },
  {
    statueId: 2,
    name: "Benjamin Franklin",
    wikiArticleURI: "https://en.wikipedia.org/wiki/Benjamin_Franklin",
    artworkTitle: "Benjamin Franklin (1706â1790)",
    artworkURI:
      "https://artuk.org/discover/artworks/benjamin-franklin-17061790-249118/",
    artworkArtist: "unknown artist",
    slaverSummary:
      "Benjamin Franklin (1706- 1790) was one of the Founding Father’s of the United States, and was also an inventor and scientist, who was for his discoveries and theories regarding electricity. \n As a young man Franklin owned slaves, and his newspaper the Pennsylvania Gazette, advertised slaves for sale.  However in his later years, he became vocal as an abolitionist. In 1787 he began to serve as President of the Pennsylvania Society for Promoting the Abolition of Slavery. In 1789 he wrote and published essays calling for the abolition of slavery. His last political act was to send to Congress a petition on behalf of his Society asking for the emancipation of slavery and an end to the slave trade. The petition was denounced on the basis that the Constitution restrains any prohibition on trade and emancipation. ",
    artworkSummary: "",
    image: benjaminFranklinImage,
  },
];

export default slaversStatueList;
