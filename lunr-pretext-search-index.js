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
  "body": " Introduction to the course     Explication of the different course resources.    Keys to success in the course.    Calculus as the science of functions.       Course resources  There are a large variety of resources for this course, all of which you should make use of. Let's take a quick tour.   The Canvas site for the course. This is where you find all information about the course, including the syllabus, your current grades in the course, important announcements, and links to other course resources, including the ones below.    The MyLab Math site for the course. This site has two important features you will use:   Online homework. This is where you will access and submit your online homework assignments.    Online version of the textbook. A complete electronic version of the course textbook, Thomas's Calculus , can be accessed through this site. Click on eText Contents on the left menu, then click the link to the full text under the eText heading in the central panel.       The Kursobjekt for the course. The Kursobjekt (German for course object ) serves as an official and concise document of all and only the material we cover in the course. There will be a section for each of our 27 class meetings that serves as lecture notes for that meeting, complete with all statements of definitions, theory, examples and their solutions, and the occasional interactive cell. Furthermore, it contains a series of reference appendices that allow you to easily find specific definitions, bits of theory, procedures, and examples covered in class, making it an excellent review tool. So why the funny name? I like German compound nouns and sometimes give in to fits of pretension.    Executive summaries, lecture notes, videos will be posted on the detailed Course Schedule as the quarter unfolds.       Keys to success     Attend lectures and discussions. We give our own unique treatment of the topics in the textbook that includes a particular approach and a particular emphasis. Class meetings give you the opportunity to make a connection with your classmates, instructors, and TAs.    Show up to office hours. Students of Math 220-1 are permitted to attend any office hour of any one of the 15 instructors and TAs. As above this is a good way to make contact with students, instructors, and TAs.    Read our Canvas announcements carefully. Among other things, these give valuable clues about what to expect on quizzes and exams.    Do as many exercises as possible by hand , with pencil and paper, without technological distractions. Where can you find exercises? Your textbook is the best source. At the end of each section you find a large number of exercises of different flavors. The MLM online homework questions are drawn from these. Doing the exercises by hand (and asking about them in office hours) is one of the best ways to prepare for quizzes and exams.    Do the MLM homework. Doing the online versions of the textbook exercises is not as useful as doing them by hand with pencil and paper, however, this is a good way to stay connected with the course, and an easy way to shore up your grade. (MLM homework is worth 20% of your grade.)    Take advantage of the various programs offered through Academic Support and Learning Advancement (ASLA) . The most effective option is the Peer Guided Study Group (PGSG) , which requires enrolling in one of the PGSG sections for Math 220-1.       Calculus as the science of functions  Calculus in its modern form, and as it will be presented to you at Northwestern, can be concisely described as the science of functions . We will make this statement more precise in . To do so we first recall the definition of a function and some related concepts.   Function    a function from to     range of function    Let and be sets. A function  from to , denoted , is a rule which, given any input  , returns an output  . We write in this case, and call the image of under , or the value of at . Similarly, we say  maps (or sends ) the input to the output .  The set is called the domain of ; the set is called the codomain of . The range of , denoted , is the set of all outputs of . Using set-builder notation , we have .     Domain and codomain  The domain and codomain of a function are, strictly speaking, part of its definition. In this regard, the statement is not a complete definition of a function, as it does not specify the domain and codomain. We will take more care than the text does in this regard. A completed version of looks something like .   As mentioned above, the textbook is less careful about dealing with the domain and codomain of a function. For example, you will find exercises in the book of the form ? To reconcile our approach with this particular issue, we make the following official declaration, or fiat .   Implied domain   If a function is introduced via a formula without specifying a domain or codomain, we will assume that the codomain is and that the implied domain  is the set of all real numbers for which the formula can be meaningfully evaluated.     Implied domain   Compute the implied domain of the function .    Since is defined only for , and since further a fraction is defined only if , we can evaluate if and only if . Solving this system of inequalities, we see that we must have and and . We conclude that .     Range versus codomain  The range of a function is by definition a subset of the codomain , but it need not be equal to the entire set . Using set inclusion notation, we always have , but it is not always the case that : , it is possible for to be a proper subset of , written .    Range versus codomain   Define as . Compute and the codomain of . Show that .    The codomain of is and the range of is (the set of nonnegative real numbers). Clearly , thus is a proper subset of the codomain of .    With these notions in place we can finally describe the particular kind of functions that (single-variable) calculus is concerned with. We do so officially, as a dictum , or saying.   Calculus is the science of functions   Single-variable calculus is the study of functions of the form , where is a subset of ( , ). This study is conducted in large part with the help of two fundamental tools: the derivative and the integral . The definitions of the derivative and integral rely in turn on an even more fundamental concept: the limit .    In Math 220-1 (single-variable differential calculus), we introduce the limit and develop the theory of the derivative; in Math 220-2 (single-variable integral calculus), we study the integral. From now on, for the sake of convenience, we will assume that all functions considered in this course are of the particular form described in .   Calculus functions   Unless stated otherwise, any function considered in this course will be assumed to be of the form , where is a subset of ( , ).     Calculus functions   allows us a small shortcut when defining a function: namely, we do not need to specify the codomain, as this is always . Thus the the function defined by can now be described as the function with domain defined as .   What is so important about studying functions, and what sort of properties of functions do we wish to examine? The short answer is that functions are one of the most fundamental tools for modeling empirical phenomena. Scientific inquiry will often begin by treating one empirical quantity as being determined or dependent on some other empirical quantity (or even multiple quantities in a multivariable model). In this situation it is natural to model the quantity as a function of these other quantities: , we assume there is a function satisfying (or in a multivariable model). Some examples:   Model the vertical velocity of a skydiver in free fall as a function of the time elapsed since jumping from the plane. In this case we assume for some function .    Model the atmospheric temperature as a function of altitude . In this case we assume for some function .    A marketing firm models the yearly sales of a certain product as a function of its price and the yearly amount the producer spends on advertising. In this case we assume for some (multivariable) function .   Observe how in these modeling situations the defining characteristic of a function , that each input  determines a fixed output , captures our intuitive idea of one quantity being dependent on another. This is what motivates the language of dependent and independent variables sometimes used in function theory: , given a function , we often call the dependent variable, and the independent variable.  Continuing with the empirical modeling context, suppose we are modeling quantity as a function of quantity ( , quantity is dependent on, or determined by quantity ). Here are natural questions about we are interested in when studying the relation between and .   Maximum\/minimum values  Is there a maximum value of that can be attained? Is there a minumum value? In terms of , we are asking whether has a maximum and\/or minimum value. If it does, we would also like to know which inputs give rise to these maximum and minimum values.    Asymptotic values\/asymptotic behavior  Perhaps does not reach a maximum value. Does it approach some maximum value as varies, without ever attaining that value? Suppose quantity ranges naturally over the set of all nonnegative numbers: how does the output vary as gets infinitely large?    Increasing\/decreasing  How do the values change as we vary ? More specifically, does increase as we increase ? Does decrease as we increase ?    Average\/instantaneous rates of change  Fix a particular value of our quantity , and let be the value of corresponding to that input. How does change as we vary by arbitrarily small amounts about . More specifically, call the average rate of change with respect to as we vary from to . What happens to these average rates of change if we keep fixed, and pick to be arbitrarily close to . Do they approach a well-defined instantaneous rate of change ?   All the questions above can be phrased as questions about the function that models the relation between and , and we will be able to answer all of these questions, using calculus, by the end of the quarter!  Historically, the development of calculus was most plagued by the challenge of coming up with rigorous mathematical definitions for the notions of approaching a value to arbitrarily close degree without necessarily attaining it. Much nonsense was produced in this endeavor (Isaac Newton's fluxions and fluents , and Gottfried Wilhelm Leibniz's infinitesimals , for example), as well as a fair dose of vitriolic recriminations (George Berkeley accusing Newton and Leibniz of peddling in dubious ghosts of departed quantities ).  If you are interested in the history of calculus, which is fascinating, you might check out The History of the calculus and its conceptual development by Carl B. Boyer.  These shaky foundations were not firmed up until the 19th century, when the modern definition of the limit was developed by mathematicians like Augustin-Louis Cauchy and Karl Weierstrass. Fittingly, it is with the limit that this course will begin in earnest!     Set definitions and notation   sets  sets empty sets  sets membership      set membership   Sets and set membership   A set  is a collection of objects, called the members or elements of . We write if the object is a member of , and if is not a member of .     Subsets  sets subset  sets inclusion    set inclusion    A set is a subset of a set , denoted , if every member of is a member of : , implies for any object . The relation is called set inclusion .  If but , we say is a proper subset of , denoted .     Set-builder notation  sets set builder notation   Let be a set, and let be a property that elements of either satisfy or do not satisfy. For an element , let denote the statement that satisfies . The set of all elements of satisfying is denoted .     "
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
  "id": "d_function",
  "level": "2",
  "url": "s_intro.html#d_function",
  "type": "Definition",
  "number": "1.1",
  "title": "Function.",
  "body": " Function    a function from to     range of function    Let and be sets. A function  from to , denoted , is a rule which, given any input  , returns an output  . We write in this case, and call the image of under , or the value of at . Similarly, we say  maps (or sends ) the input to the output .  The set is called the domain of ; the set is called the codomain of . The range of , denoted , is the set of all outputs of . Using set-builder notation , we have .   "
},
{
  "id": "ss_calc_science_-4",
  "level": "2",
  "url": "s_intro.html#ss_calc_science_-4",
  "type": "Remark",
  "number": "1.2",
  "title": "Domain and codomain.",
  "body": " Domain and codomain  The domain and codomain of a function are, strictly speaking, part of its definition. In this regard, the statement is not a complete definition of a function, as it does not specify the domain and codomain. We will take more care than the text does in this regard. A completed version of looks something like .  "
},
{
  "id": "fiat_domain",
  "level": "2",
  "url": "s_intro.html#fiat_domain",
  "type": "Fiat",
  "number": "1.3",
  "title": "Implied domain.",
  "body": " Implied domain   If a function is introduced via a formula without specifying a domain or codomain, we will assume that the codomain is and that the implied domain  is the set of all real numbers for which the formula can be meaningfully evaluated.   "
},
{
  "id": "eg_implied_domain",
  "level": "2",
  "url": "s_intro.html#eg_implied_domain",
  "type": "Example",
  "number": "1.4",
  "title": "Implied domain.",
  "body": " Implied domain   Compute the implied domain of the function .    Since is defined only for , and since further a fraction is defined only if , we can evaluate if and only if . Solving this system of inequalities, we see that we must have and and . We conclude that .   "
},
{
  "id": "ss_calc_science_-8",
  "level": "2",
  "url": "s_intro.html#ss_calc_science_-8",
  "type": "Remark",
  "number": "1.5",
  "title": "Range versus codomain.",
  "body": " Range versus codomain  The range of a function is by definition a subset of the codomain , but it need not be equal to the entire set . Using set inclusion notation, we always have , but it is not always the case that : , it is possible for to be a proper subset of , written .  "
},
{
  "id": "ss_calc_science_-9",
  "level": "2",
  "url": "s_intro.html#ss_calc_science_-9",
  "type": "Example",
  "number": "1.6",
  "title": "Range versus codomain.",
  "body": " Range versus codomain   Define as . Compute and the codomain of . Show that .    The codomain of is and the range of is (the set of nonnegative real numbers). Clearly , thus is a proper subset of the codomain of .   "
},
{
  "id": "dict_calc_science",
  "level": "2",
  "url": "s_intro.html#dict_calc_science",
  "type": "Dictum",
  "number": "1.7",
  "title": "Calculus is the science of functions.",
  "body": " Calculus is the science of functions   Single-variable calculus is the study of functions of the form , where is a subset of ( , ). This study is conducted in large part with the help of two fundamental tools: the derivative and the integral . The definitions of the derivative and integral rely in turn on an even more fundamental concept: the limit .   "
},
{
  "id": "fiat_function_form",
  "level": "2",
  "url": "s_intro.html#fiat_function_form",
  "type": "Fiat",
  "number": "1.8",
  "title": "Calculus functions.",
  "body": " Calculus functions   Unless stated otherwise, any function considered in this course will be assumed to be of the form , where is a subset of ( , ).   "
},
{
  "id": "ss_calc_science_-14",
  "level": "2",
  "url": "s_intro.html#ss_calc_science_-14",
  "type": "Remark",
  "number": "1.9",
  "title": "Calculus functions.",
  "body": " Calculus functions   allows us a small shortcut when defining a function: namely, we do not need to specify the codomain, as this is always . Thus the the function defined by can now be described as the function with domain defined as .  "
},
{
  "id": "d_sets",
  "level": "2",
  "url": "s_intro.html#d_sets",
  "type": "Definition",
  "number": "1.10",
  "title": "Sets and set membership.",
  "body": " sets  sets empty sets  sets membership      set membership   Sets and set membership   A set  is a collection of objects, called the members or elements of . We write if the object is a member of , and if is not a member of .   "
},
{
  "id": "d_set_inclusion",
  "level": "2",
  "url": "s_intro.html#d_set_inclusion",
  "type": "Definition",
  "number": "1.11",
  "title": "Subsets.",
  "body": " Subsets  sets subset  sets inclusion    set inclusion    A set is a subset of a set , denoted , if every member of is a member of : , implies for any object . The relation is called set inclusion .  If but , we say is a proper subset of , denoted .   "
},
{
  "id": "d_set_builder_notation",
  "level": "2",
  "url": "s_intro.html#d_set_builder_notation",
  "type": "Definition",
  "number": "1.12",
  "title": "Set-builder notation.",
  "body": " Set-builder notation  sets set builder notation   Let be a set, and let be a property that elements of either satisfy or do not satisfy. For an element , let denote the statement that satisfies . The set of all elements of satisfying is denoted .   "
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
