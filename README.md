# Washington Post Graphics feed

There is no tag or page where you can find all the articles published by The Washington Post's graphics team. To address this, I've manually compiled an array of all the names of the authors who work in that team and used the Post's API to fetch data about their articles, including the headline, subtitle, authors, date, image, and URL.

The data is updated daily thanks to a GitHub Actions workflow and the code that fetches and parses the data can be found in the `api` folder of the repository. To avoid overloading the Post's API, only the latest ten articles from each author are requested.

This project is open source and aims to allow everyone to follow the incredible work published by this outstanding team. If you work here and are not on the list or want to add someone, please open a pull request.

Currently, the authors used are:

[Aaron Steckelberg](https://www.washingtonpost.com/people/aaron-steckelberg), [Adrián Blanco](https://www.washingtonpost.com/people/adrian-blanco), [Alyssa Fowers](https://www.washingtonpost.com/people/alyssa-fowers), [Armand Emamdjomeh](https://www.washingtonpost.com/people/armand-emamdjomeh), [Artur Galocha](https://www.washingtonpost.com/people/artur-galocha), [Atthar Mirza](https://www.washingtonpost.com/people/atthar-mirza), [Bonnie Berkowitz](https://www.washingtonpost.com/people/bonnie-berkowitz), [Caitlin Gilbert](https://www.washingtonpost.com/people/caitlin-gilbert), [Carson TerBush](https://www.washingtonpost.com/people/carson-terbush), [Chiqui Esteban](https://www.washingtonpost.com/people/chiqui-esteban), [Chris Alcantara](https://www.washingtonpost.com/people/chris-alcantara), [Daniel Wolfe](https://www.washingtonpost.com/people/daniel-wolfe), [Daniela Santamarina](https://www.washingtonpost.com/people/daniela-santamarina), [Derek Hawkins](https://www.washingtonpost.com/people/derek-hawkins), [Dylan Moriarty](https://www.washingtonpost.com/people/dylan-moriarty), [Hanna Zakharenko](https://www.washingtonpost.com/people/hanna-zakharenko), [Hannah Dormido](https://www.washingtonpost.com/people/hannah-dormido), [Harry Stevens](https://www.washingtonpost.com/people/harry-stevens), [Imogen Piper](https://www.washingtonpost.com/people/imogen-piper), [Janice Kai Chen](https://www.washingtonpost.com/people/janice-kai-chen), [Joe Fox](https://www.washingtonpost.com/people/joe-fox), [John Muyskens](https://www.washingtonpost.com/people/john-muyskens), [Júlia Ledur](https://www.washingtonpost.com/people/julia-ledur), [Kate Rabinowitz](https://www.washingtonpost.com/people/kate-rabinowitz), [Kati Perry](https://www.washingtonpost.com/people/kati-perry), [Kevin Schaul](https://www.washingtonpost.com/people/kevin-schaul), [Laris Karklis](https://www.washingtonpost.com/people/laris-karklis), [Lauren Tierney](https://www.washingtonpost.com/people/lauren-tierney), [Leslie Shapiro](https://www.washingtonpost.com/people/leslie-shapiro), [Luis Melgar](https://www.washingtonpost.com/people/luis-melgar), [Manuel Canales](https://www.washingtonpost.com/people/manuel-canales), [Maria Aguilar](https://www.washingtonpost.com/people/maria-aguilar/) [Naema Ahmed](https://www.washingtonpost.com/people/naema-ahmed), [Nick Kirkpatrick](https://www.washingtonpost.com/people/nick-kirkpatrick), [Nick Mourtoupalas](https://www.washingtonpost.com/people/nick-mourtoupalas), [Niko Kommenda](https://www.washingtonpost.com/people/niko-kommenda), [Reuben Fischer-Baum](https://www.washingtonpost.com/people/reuben-fischer-baum), [Samuel Granados](https://www.washingtonpost.com/people/samuel-granados), [Shelly Tan](https://www.washingtonpost.com/people/shelly-tan), [Simon Ducroquet](https://www.washingtonpost.com/people/simon-ducroquet), [Szu Yu Chen](https://www.washingtonpost.com/people/szuyu-chen), [Tim Meko](https://www.washingtonpost.com/people/tim-meko), [Veronica Penney](https://www.washingtonpost.com/people/veronica-penney), [William Neff](https://www.washingtonpost.com/people/william-neff), [Yan Wu](https://www.washingtonpost.com/people/yan-wu), [Youjin Shin](https://www.washingtonpost.com/people/youjin-shin) and [Youyou Zhou](https://www.washingtonpost.com/people/youyou-zhou).

## Acknowledgments

Special thanks to [Iguacel](https://github.com/iguacel) for their invaluable advice on the project's internal structure and page look improvements.
