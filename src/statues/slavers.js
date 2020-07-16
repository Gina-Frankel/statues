const slaversStatueList = [
  {
    name: "William Penn",
    wikiArticleURI: "https://en.wikipedia.org/wiki/William_Penn",
    artworkTitle: "William Penn",
    artworkURI: "https://artuk.org/discover/artworks/william-penn-244578/",
    artworkArtist: "Eli Johnson (1850â1881)",
  },
  {
    name: "William Penn",
    wikiArticleURI: "https://en.wikipedia.org/wiki/William_Penn",
    artworkTitle: "William Penn",
    artworkURI: "https://artuk.org/discover/artworks/william-penn-244564/",
    artworkArtist: "Eli Johnson (1850â1881)",
  },
  {
    name: "Adam Sedgwick",
    wikiArticleURI: "https://en.wikipedia.org/wiki/Adam_Sedgwick",
    artworkTitle: "Adam Sedgwick (1785â1873)",
    artworkURI:
      "https://artuk.org/discover/artworks/adam-sedgwick-17851873-253304/",
    artworkArtist: "Thomas Woolner (1825â1892)",
  },
  {
    name: "Adam Sedgwick",
    wikiArticleURI: "https://en.wikipedia.org/wiki/Adam_Sedgwick",
    artworkTitle: "Adam Sedgwick (1785â1873)",
    artworkURI:
      "https://artuk.org/discover/artworks/adam-sedgwick-17851873-256509/",
    artworkArtist: "Henry Weekes I (1807â1877)",
  },
  {
    name: "Augustus Caesar",
    wikiArticleURI: "https://en.wikipedia.org/wiki/Augustus_Caesar",
    artworkTitle: "Caesar Augustus (63 BCâ14 AD)",
    artworkURI:
      "https://artuk.org/discover/artworks/caesar-augustus-63-bc14-ad-262408/",
    artworkArtist: "Leone Clerici (active 1875)",
  },
  {
    name: "Charles McGarel",
    wikiArticleURI: "https://en.wikipedia.org/wiki/Charles_McGarel",
    artworkTitle: "Charles McGarel (1788â1876)",
    artworkURI:
      "https://artuk.org/discover/artworks/charles-mcgarel-17881876-252527/",
    artworkArtist: "Hamo Thornycroft (1850â1925)",
  },
  {
    name: "Demosthenes",
    wikiArticleURI: "https://en.wikipedia.org/wiki/Demosthenes",
    artworkTitle: "Demosthenes",
    artworkURI: "https://artuk.org/discover/artworks/demosthenes-248475/",
    artworkArtist: "unknown artist",
  },
  {
    name: "Demosthenes",
    wikiArticleURI: "https://en.wikipedia.org/wiki/Demosthenes",
    artworkTitle: "Demosthenes (384 BCâ322 BC)",
    artworkURI:
      "https://artuk.org/discover/artworks/demosthenes-384-bc322-bc-270673/",
    artworkArtist:
      "Filippo Albacini (1777â1858) and Carlo Albacini (1734â1813)",
  },
  {
    name: "Demosthenes",
    wikiArticleURI: "https://en.wikipedia.org/wiki/Demosthenes",
    artworkTitle: "Demosthenes (c.384 BCâ322 BC)",
    artworkURI:
      "https://artuk.org/discover/artworks/demosthenes-c-384-bc322-bc-254002/",
    artworkArtist: "British (English) School",
  },
  {
    name: "Edward Colston",
    wikiArticleURI: "https://en.wikipedia.org/wiki/Edward_Colston",
    artworkTitle: "Edward Colston (1636â1721)",
    artworkURI:
      "https://artuk.org/discover/artworks/edward-colston-16361721-266037/",
    artworkArtist: "John Michael Rysbrack (1694â1770)",
  },
  {
    name: "Edward Colston",
    wikiArticleURI: "https://en.wikipedia.org/wiki/Edward_Colston",
    artworkTitle: "Edward Colston (1636â1721)",
    artworkURI:
      "https://artuk.org/discover/artworks/edward-colston-16361721-266112/",
    artworkArtist: "John Cassidy (1860â1939)",
  },
  {
    name: "Edward Colston",
    wikiArticleURI: "https://en.wikipedia.org/wiki/Edward_Colston",
    artworkTitle: "Edward Colston (1636â1721)",
    artworkURI:
      "https://artuk.org/discover/artworks/edward-colston-16361721-276045/",
    artworkArtist: "Coalbrookdale and John Cassidy (1860â1939)",
  },
  {
    name: "Horace",
    wikiArticleURI: "https://en.wikipedia.org/wiki/Horace",
    artworkTitle: "Horace",
    artworkURI: "https://artuk.org/discover/artworks/horace-254597/",
    artworkArtist: "unknown artist",
  },
  {
    name: "Horace",
    wikiArticleURI: "https://en.wikipedia.org/wiki/Horace",
    artworkTitle: "Horace",
    artworkURI: "https://artuk.org/discover/artworks/horace-272403/",
    artworkArtist: "John Cheere (1709â1787)",
  },
  {
    name: "William Beckford",
    wikiArticleURI: "https://en.wikipedia.org/wiki/William_Beckford_(novelist)",
    artworkTitle: "William Beckford (1760â1844)",
    artworkURI:
      "https://artuk.org/discover/artworks/william-beckford-17601844-263006/",
    artworkArtist: "Anne Snow",
  },
  {
    name: "Sulla",
    wikiArticleURI: "https://en.wikipedia.org/wiki/Sulla",
    artworkTitle: "Sulla (138â78 BC)",
    artworkURI: "https://artuk.org/discover/artworks/sulla-13878-bc-270693/",
    artworkArtist:
      "Filippo Albacini (1777â1858) and Carlo Albacini (1734â1813)",
  },
  {
    name: "Pompey",
    wikiArticleURI: "https://en.wikipedia.org/wiki/Pompey",
    artworkTitle: "Pompey (106 BCâ48 BC)",
    artworkURI:
      "https://artuk.org/discover/artworks/pompey-106-bc48-bc-270803/",
    artworkArtist:
      "Filippo Albacini (1777â1858) and Carlo Albacini (1734â1813)",
  },
  {
    name: "Plato",
    wikiArticleURI: "https://en.wikipedia.org/wiki/Plato",
    artworkTitle: "Plato (c.428 BCâc.348 BC)",
    artworkURI:
      "https://artuk.org/discover/artworks/plato-c-428-bcc-348-bc-252348/",
    artworkArtist: "unknown artist",
  },
  {
    name: "Plato",
    wikiArticleURI: "https://en.wikipedia.org/wiki/Plato",
    artworkTitle: "Plato",
    artworkURI: "https://artuk.org/discover/artworks/plato-277150/",
    artworkArtist: "unknown artist",
  },
  {
    name: "Plato",
    wikiArticleURI: "https://en.wikipedia.org/wiki/Plato",
    artworkTitle: "Plato",
    artworkURI: "https://artuk.org/discover/artworks/plato-263269/",
    artworkArtist:
      "Filippo Albacini (1777â1858) and Carlo Albacini (1734â1813)",
  },
  {
    name: "Plato",
    wikiArticleURI: "https://en.wikipedia.org/wiki/Plato",
    artworkTitle: "Plato",
    artworkURI: "https://artuk.org/discover/artworks/plato-255912/",
    artworkArtist: "unknown artist",
  },
  {
    name: "Plato",
    wikiArticleURI: "https://en.wikipedia.org/wiki/Plato",
    artworkTitle: "Plato",
    artworkURI: "https://artuk.org/discover/artworks/plato-254603/",
    artworkArtist: "unknown artist",
  },
  {
    name: "Plato",
    wikiArticleURI: "https://en.wikipedia.org/wiki/Plato",
    artworkTitle: "Plato",
    artworkURI: "https://artuk.org/discover/artworks/plato-248993/",
    artworkArtist: "unknown artist",
  },
  {
    name: "Nero",
    wikiArticleURI: "https://en.wikipedia.org/wiki/Nero",
    artworkTitle: "Nero (37â68)*",
    artworkURI: "https://artuk.org/discover/artworks/nero-3768-269698/",
    artworkArtist: "unknown artist",
  },
  {
    name: "Nero",
    wikiArticleURI: "https://en.wikipedia.org/wiki/Nero",
    artworkTitle: "Nero",
    artworkURI: "https://artuk.org/discover/artworks/nero-258612/",
    artworkArtist: "Ercole Rosa (1846â1943)",
  },
  {
    name: "Julius Caesar",
    wikiArticleURI: "https://en.wikipedia.org/wiki/Julius_Caesar",
    artworkTitle: "Julius Caesar (100 BCâ44 BC)",
    artworkURI:
      "https://artuk.org/discover/artworks/julius-caesar-100-bc44-bc-270804/",
    artworkArtist:
      "Filippo Albacini (1777â1858) and Carlo Albacini (1734â1813)",
  },
  {
    name: "Julius Caesar",
    wikiArticleURI: "https://en.wikipedia.org/wiki/Julius_Caesar",
    artworkTitle: "Julius Caesar (100 BCâ44 BC)",
    artworkURI:
      "https://artuk.org/discover/artworks/julius-caesar-100-bc44-bc-255256/",
    artworkArtist: "unknown artist",
  },
  {
    name: "Julius Caesar",
    wikiArticleURI: "https://en.wikipedia.org/wiki/Julius_Caesar",
    artworkTitle: "Julius Caesar (100 BCâ44 BC)",
    artworkURI:
      "https://artuk.org/discover/artworks/julius-caesar-100-bc44-bc-248992/",
    artworkArtist: "Domenico Brucciani (1815â1880)",
  },
  {
    name: "Julius Caesar",
    wikiArticleURI: "https://en.wikipedia.org/wiki/Julius_Caesar",
    artworkTitle: "Julius Caesar (100 BCâ44 BC)",
    artworkURI:
      "https://artuk.org/discover/artworks/julius-caesar-100-bc44-bc-248684/",
    artworkArtist: "British School",
  },
  {
    name: "Hadrian",
    wikiArticleURI: "https://en.wikipedia.org/wiki/Hadrian",
    artworkTitle: "Hadrian",
    artworkURI: "https://artuk.org/discover/artworks/hadrian-257042/",
    artworkArtist: "Ercole Rosa (1846â1943)",
  },
  {
    name: "George Washington",
    wikiArticleURI: "https://en.wikipedia.org/wiki/George_Washington",
    artworkTitle: "George Washington (1732â1799)",
    artworkURI:
      "https://artuk.org/discover/artworks/george-washington-17321799-274000/",
    artworkArtist: "unknown artist",
  },
  {
    name: "George Washington",
    wikiArticleURI:
      "https://en.wikipedia.org/wiki/George_Washington_and_slavery",
    artworkTitle: "George Washington (1732â1799)",
    artworkURI:
      "https://artuk.org/discover/artworks/george-washington-17321799-274000/",
    artworkArtist: "unknown artist",
  },
  {
    name: "George Washington",
    wikiArticleURI: "https://en.wikipedia.org/wiki/George_Washington",
    artworkTitle: "George Washington (1732â1799)",
    artworkURI:
      "https://artuk.org/discover/artworks/george-washington-17321799-265480/",
    artworkArtist:
      "Jean-Antoine Houdon (1741â1828) (posthumous cast) and Gorham Manufacturing Company",
  },
  {
    name: "George Washington",
    wikiArticleURI:
      "https://en.wikipedia.org/wiki/George_Washington_and_slavery",
    artworkTitle: "George Washington (1732â1799)",
    artworkURI:
      "https://artuk.org/discover/artworks/george-washington-17321799-265480/",
    artworkArtist:
      "Jean-Antoine Houdon (1741â1828) (posthumous cast) and Gorham Manufacturing Company",
  },
  {
    name: "George Washington",
    wikiArticleURI: "https://en.wikipedia.org/wiki/George_Washington",
    artworkTitle: "George Washington (1732â1799)",
    artworkURI:
      "https://artuk.org/discover/artworks/george-washington-17321799-261870/",
    artworkArtist: "unknown artist",
  },
  {
    name: "George Washington",
    wikiArticleURI:
      "https://en.wikipedia.org/wiki/George_Washington_and_slavery",
    artworkTitle: "George Washington (1732â1799)",
    artworkURI:
      "https://artuk.org/discover/artworks/george-washington-17321799-261870/",
    artworkArtist: "unknown artist",
  },
  {
    name: "George Washington",
    wikiArticleURI: "https://en.wikipedia.org/wiki/George_Washington",
    artworkTitle: "George Washington (1732â1799)",
    artworkURI:
      "https://artuk.org/discover/artworks/george-washington-17321799-251071/",
    artworkArtist: "unknown artist",
  },
  {
    name: "George Washington",
    wikiArticleURI:
      "https://en.wikipedia.org/wiki/George_Washington_and_slavery",
    artworkTitle: "George Washington (1732â1799)",
    artworkURI:
      "https://artuk.org/discover/artworks/george-washington-17321799-251071/",
    artworkArtist: "unknown artist",
  },
  {
    name: "Claudius",
    wikiArticleURI: "https://en.wikipedia.org/wiki/Claudius",
    artworkTitle:
      "Claudius (10 BCâAD 54), with a Wreath (labelled as Augustus)",
    artworkURI:
      "https://artuk.org/discover/artworks/claudius-10-bcad-54-with-a-wreath-270812/",
    artworkArtist:
      "Filippo Albacini (1777â1858) and Carlo Albacini (1734â1813)",
  },
  {
    name: "Claudius",
    wikiArticleURI: "https://en.wikipedia.org/wiki/Claudius",
    artworkTitle: "Claudius (10 BCâAD 54)",
    artworkURI:
      "https://artuk.org/discover/artworks/claudius-10-bcad-54-255258/",
    artworkArtist: "unknown artist",
  },
  {
    name: "Cicero",
    wikiArticleURI: "https://en.wikipedia.org/wiki/Cicero",
    artworkTitle: "Cicero",
    artworkURI: "https://artuk.org/discover/artworks/cicero-248487/",
    artworkArtist: "unknown artist",
  },
  {
    name: "Cicero",
    wikiArticleURI: "https://en.wikipedia.org/wiki/Cicero",
    artworkTitle: "Cicero (106 BCâ43 BC)",
    artworkURI:
      "https://artuk.org/discover/artworks/cicero-106-bc43-bc-272412/",
    artworkArtist: "John Cheere (1709â1787)",
  },
  {
    name: "Christopher Columbus",
    wikiArticleURI: "https://en.wikipedia.org/wiki/Christopher_Columbus",
    artworkTitle: "Christopher Columbus (1451â1506)",
    artworkURI:
      "https://artuk.org/discover/artworks/christopher-columbus-14511506-265459/",
    artworkArtist: "TomÃ¡s BaÃ±uelos (b.1958)",
  },
  {
    name: "Christopher Columbus",
    wikiArticleURI: "https://en.wikipedia.org/wiki/Christopher_Columbus",
    artworkTitle: "Christopher Columbus (1451â1506)",
    artworkURI:
      "https://artuk.org/discover/artworks/christopher-columbus-14511506-261190/",
    artworkArtist: "unknown artist",
  },
  {
    name: "Christopher Codrington",
    wikiArticleURI: "https://en.wikipedia.org/wiki/Christopher_Codrington",
    artworkTitle: "Christopher Codrington (1668â1710)",
    artworkURI:
      "https://artuk.org/discover/artworks/christopher-codrington-16681710-275554/",
    artworkArtist: "Henry Cheere (1703â1781)",
  },
  {
    name: "Christopher Codrington",
    wikiArticleURI:
      "https://en.wikipedia.org/wiki/Christopher_Codrington_(colonial_administrator)",
    artworkTitle: "Christopher Codrington (1668â1710)",
    artworkURI:
      "https://artuk.org/discover/artworks/christopher-codrington-16681710-275554/",
    artworkArtist: "Henry Cheere (1703â1781)",
  },
  {
    name: "Augustus Caesar",
    wikiArticleURI: "https://en.wikipedia.org/wiki/Augustus_Caesar",
    artworkTitle: "Augustus Caesar (63 BCâAD 14)",
    artworkURI:
      "https://artuk.org/discover/artworks/augustus-caesar-63-bcad-14-277152/",
    artworkArtist: "Ferdinand Barbedienne (1810â1892)",
  },
  {
    name: "Augustus Caesar",
    wikiArticleURI: "https://en.wikipedia.org/wiki/Augustus_Caesar",
    artworkTitle: "Augustus Caesar (63 BCâAD 14)",
    artworkURI:
      "https://artuk.org/discover/artworks/augustus-caesar-63-bcad-14-255255/",
    artworkArtist: "unknown artist",
  },
  {
    name: "Simón Bolívar",
    wikiArticleURI: "https://en.wikipedia.org/wiki/Sim%C3%B3n_Bol%C3%ADvar",
    artworkTitle: "Simon Bolivar (1783â1830)",
    artworkURI:
      "https://artuk.org/discover/artworks/simon-bolivar-17831830-265458/",
    artworkArtist: "Hugo Daini (1919â1976)",
  },
  {
    name: "Robert Clayton",
    wikiArticleURI:
      "https://en.wikipedia.org/wiki/Robert_Clayton_(City_of_London_MP)",
    artworkTitle: "Sir Robert Clayton (1629â1707)",
    artworkURI:
      "https://artuk.org/discover/artworks/sir-robert-clayton-16291707-271729/",
    artworkArtist: "Grinling Gibbons (1648â1721)",
  },
  {
    name: "Hadrian",
    wikiArticleURI: "https://en.wikipedia.org/wiki/Hadrian",
    artworkTitle: "Hadrianus (AD 76âAD 138)",
    artworkURI:
      "https://artuk.org/discover/artworks/hadrianus-ad-76ad-138-255257/",
    artworkArtist: "unknown artist",
  },
  {
    name: "Julius Caesar",
    wikiArticleURI: "https://en.wikipedia.org/wiki/Julius_Caesar",
    artworkTitle: "Gaius Julius Caesar (100 BCâ44 BC)",
    artworkURI:
      "https://artuk.org/discover/artworks/gaius-julius-caesar-100-bc44-bc-252387/",
    artworkArtist: "unknown artist",
  },
  {
    name: "Benjamin Franklin",
    wikiArticleURI: "https://en.wikipedia.org/wiki/Benjamin_Franklin",
    artworkTitle: "Benjamin Franklin (1706â1790)",
    artworkURI:
      "https://artuk.org/discover/artworks/benjamin-franklin-17061790-252386/",
    artworkArtist: "unknown artist",
  },
  {
    name: "Benjamin Franklin",
    wikiArticleURI: "https://en.wikipedia.org/wiki/Benjamin_Franklin",
    artworkTitle: "Benjamin Franklin (1706â1790)",
    artworkURI:
      "https://artuk.org/discover/artworks/benjamin-franklin-17061790-249118/",
    artworkArtist: "unknown artist",
  },
];

export default slaversStatueList;
