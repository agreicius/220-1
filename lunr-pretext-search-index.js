var ptx_lunr_search_style = "textbook";
var ptx_lunr_docs = [
{
  "id": "frontmatter",
  "level": "1",
  "url": "frontmatter.html",
  "type": "Front Matter",
  "number": "",
  "title": "Front Matter",
  "body": "   Aaron Greicius  Department of Mathematics  Northwestern University         copyright   "
},
{
  "id": "s_intro",
  "level": "1",
  "url": "s_intro.html",
  "type": "Section",
  "number": "1",
  "title": "Introduction to the course",
  "body": " Introduction to the course     Explication of the different course resources.    Keys to success in the course.    Calculus as the science of functions.       Course resources  Course resources are .    Blah     "
},
{
  "id": "s_intro-2",
  "level": "2",
  "url": "s_intro.html#s_intro-2",
  "type": "Objectives",
  "number": "1",
  "title": "",
  "body": "   Explication of the different course resources.    Keys to success in the course.    Calculus as the science of functions.    "
},
{
  "id": "def-1",
  "level": "2",
  "url": "s_intro.html#def-1",
  "type": "Definition",
  "number": "1.1",
  "title": "",
  "body": "  Blah   "
},
{
  "id": "s_limits_naive",
  "level": "1",
  "url": "s_limits_naive.html",
  "type": "Section",
  "number": "2",
  "title": "Limits of functions and limit laws",
  "body": " Limits of functions and limit laws       Naive definition of limit    The limit.     "
},
{
  "id": "d_2",
  "level": "2",
  "url": "s_limits_naive.html#d_2",
  "type": "Definition",
  "number": "2.1",
  "title": "",
  "body": "  The limit.   "
},
{
  "id": "appendix-notation",
  "level": "1",
  "url": "appendix-notation.html",
  "type": "Appendix",
  "number": "A",
  "title": "Notation",
  "body": " Notation   "
},
{
  "id": "appendix-defs",
  "level": "1",
  "url": "appendix-defs.html",
  "type": "Appendix",
  "number": "B",
  "title": "Definitions",
  "body": " Definitions   "
},
{
  "id": "appendix-thms",
  "level": "1",
  "url": "appendix-thms.html",
  "type": "Appendix",
  "number": "C",
  "title": "Theory and procedures",
  "body": " Theory and procedures   "
},
{
  "id": "appendix-egs",
  "level": "1",
  "url": "appendix-egs.html",
  "type": "Appendix",
  "number": "D",
  "title": "Examples",
  "body": " Examples   "
},
{
  "id": "appendix-interactives",
  "level": "1",
  "url": "appendix-interactives.html",
  "type": "Appendix",
  "number": "E",
  "title": "Interactives and computational cells",
  "body": " Interactives and computational cells   "
},
{
  "id": "appendix-dicta",
  "level": "1",
  "url": "appendix-dicta.html",
  "type": "Appendix",
  "number": "F",
  "title": "Dicta, fiats, etc.",
  "body": " Dicta, fiats,   "
}
]

var ptx_lunr_idx = lunr(function () {
  this.ref('id')
  this.field('title')
  this.field('body')
  this.metadataWhitelist = ['position']

  ptx_lunr_docs.forEach(function (doc) {
    this.add(doc)
  }, this)
})
