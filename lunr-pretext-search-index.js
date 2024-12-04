var ptx_lunr_search_style = "textbook";
var ptx_lunr_docs = [
{
  "id": "frontmatter",
  "level": "1",
  "url": "frontmatter.html",
  "type": "Front Matter",
  "number": "",
  "title": "Front Matter",
  "body": " Aaron Greicius  Department of Mathematics  Northwestern University    copyright    "
},
{
  "id": "s_intro",
  "level": "1",
  "url": "s_intro.html",
  "type": "Section",
  "number": "1",
  "title": "Introduction to the course",
  "body": " Introduction to the course     Explanation of the different course resources.    Keys to success in the course.    Calculus as the science of functions.       Course resources  There are a large variety of resources for this course, all of which you should make use of. Let's take a quick tour.   The Canvas site for the course. This is where you find all information about the course, including the syllabus, your current grades in the course, important announcements, and links to other course resources, including the ones below.    The MyLab Math site for the course. This site has two important features you will use:   Online homework. This is where you will access and submit your online homework assignments.    Online version of the textbook. A complete electronic version of the course textbook, Thomas's Calculus , can be accessed through this site. Click on eText Contents on the left menu, then click the link to the full text under the eText heading in the central panel.       The Kursobjekt for the course. The Kursobjekt (German for course object ) serves as an official and concise document of all and only the material we cover in the course. There will be a section for each of our 27 class meetings that serves as lecture notes for that meeting, complete with all statements of definitions, theory, examples and their solutions, and the occasional interactive cell. Furthermore, it contains a series of reference appendices that allow you to easily find specific definitions, bits of theory, procedures, and examples covered in class, making it an excellent review tool. So why the funny name? I like German compound nouns and sometimes give in to fits of pretension.    Executive summaries, lecture notes, videos will be posted on the detailed Course Schedule as the quarter unfolds.       Keys to success     Attend lectures and discussions. We give our own unique treatment of the topics in the textbook that includes a particular approach and a particular emphasis. Class meetings give you the opportunity to make a connection with your classmates, instructors, and TAs.    Show up to office hours. Students of Math 220-1 are permitted to attend any office hour of any one of the 15 instructors and TAs. As above this is a good way to make contact with students, instructors, and TAs.    Read our Canvas announcements carefully. Among other things, these give valuable clues about what to expect on quizzes and exams.    Do as many exercises as possible by hand , with pencil and paper, without technological distractions. Where can you find exercises? Your textbook is the best source. At the end of each section you find a large number of exercises of different flavors. The MLM online homework questions are drawn from these. Doing the exercises by hand (and asking about them in office hours) is one of the best ways to prepare for quizzes and exams.    Do the MLM homework. Doing the online versions of the textbook exercises is not as useful as doing them by hand with pencil and paper, however, this is a good way to stay connected with the course, and an easy way to shore up your grade. (MLM homework is worth 25% of your grade.)    Take advantage of the various programs offered through Academic Support and Learning Advancement (ASLA) . The most effective option is the Peer Guided Study Group (PGSG) , which requires enrolling in one of the PGSG sections for Math 220-1.       Calculus as the science of functions  Calculus in its modern form, and as it will be presented to you at Northwestern, can be concisely described as the science of functions . We will make this statement more precise in . To do so we first recall the definition of a function and some related concepts.   Function    a function from to     range of function    Let and be sets. A function  from to , denoted , is a rule which, given any input  , returns an output  . We write in this case, and call the image of under , or the value of at . Similarly, we say  maps (or sends ) the input to the output .  The set is called the domain of ; the set is called the codomain of . The range of , denoted , is the set of all outputs of . Using set-builder notation , we have .     Domain and codomain  The domain and codomain of a function are, strictly speaking, part of its definition. In this regard, the statement is not a complete definition of a function, as it does not specify the domain and codomain. We will take more care than the text does in this regard. A completed version of looks something like .   As mentioned above, the textbook is less careful about dealing with the domain and codomain of a function. For example, you will find exercises in the book of the form ? To reconcile our approach with this particular issue, we make the following official declaration, or fiat .   Implied domain   If a function is introduced via a formula without specifying a domain or codomain, we will assume that the codomain is and that the implied domain  is the set of all real numbers for which the formula can be meaningfully evaluated.     Implied domain   Compute the implied domain of the function .    Since is defined only for , and since further a fraction is defined only if , we can evaluate if and only if . Solving this system of inequalities, we see that we must have and and . We conclude that .     Range versus codomain  The range of a function is by definition a subset of the codomain , but it need not be equal to the entire set . Using set inclusion notation, we always have , but it is not always the case that : , it is possible for to be a proper subset of , written .    Range versus codomain   Define as . Compute and the codomain of . Show that .    The codomain of is and the range of is (the set of nonnegative real numbers). Clearly , thus is a proper subset of the codomain of .    With these notions in place we can finally describe the particular kind of functions that (single-variable) calculus is concerned with. We do so officially, as a dictum , or saying.   Calculus is the science of functions   Single-variable calculus is the study of functions of the form , where is a subset of ( , ). This study is conducted in large part with the help of two fundamental tools: the derivative and the integral . The definitions of the derivative and integral rely in turn on an even more fundamental concept: the limit .    In Math 220-1 (single-variable differential calculus), we introduce the limit and develop the theory of the derivative; in Math 220-2 (single-variable integral calculus), we study the integral. From now on, for the sake of convenience, we will assume that all functions considered in this course are of the particular form described in .   Calculus functions   Unless stated otherwise, any function considered in this course will be assumed to be of the form , where is a subset of ( , ).     Calculus functions   allows us a small shortcut when defining a function: namely, we do not need to specify the codomain, as this is always . Thus the the function defined by can now be described as the function with domain defined as .   What is so important about studying functions, and what sort of properties of functions do we wish to examine? The short answer is that functions are one of the most fundamental tools for modeling empirical phenomena. Scientific inquiry will often begin by treating one empirical quantity as being determined or dependent on some other empirical quantity (or even multiple quantities in a multivariable model). In this situation it is natural to model the quantity as a function of these other quantities: , we assume there is a function satisfying (or in a multivariable model). Some examples:   Model the vertical velocity of a skydiver in free fall as a function of the time elapsed since jumping from the plane. In this case we assume for some function .    Model the atmospheric temperature as a function of altitude . In this case we assume for some function .    A marketing firm models the yearly sales of a certain product as a function of its price and the yearly amount the producer spends on advertising. In this case we assume for some (multivariable) function .   Observe how in these modeling situations the defining characteristic of a function , that each input  determines a fixed output , captures our intuitive idea of one quantity being dependent on another. This is what motivates the language of dependent and independent variables sometimes used in function theory: , given a function , we often call the dependent variable, and the independent variable.  Continuing with the empirical modeling context, suppose we are modeling quantity as a function of quantity ( , quantity is dependent on, or determined by quantity ). Here are natural questions about we are interested in when studying the relation between and .   Maximum\/minimum values  Is there a maximum value of that can be attained? Is there a minumum value? In terms of , we are asking whether has a maximum and\/or minimum value. If it does, we would also like to know which inputs give rise to these maximum and minimum values.    Asymptotic values\/asymptotic behavior  Perhaps does not reach a maximum value. Does it approach some maximum value as varies, without ever attaining that value? Suppose quantity ranges naturally over the set of all nonnegative numbers: how does the output vary as gets infinitely large?    Increasing\/decreasing  How do the values change as we vary ? More specifically, does increase as we increase ? Does decrease as we increase ?    Average\/instantaneous rates of change  Fix a particular value of our quantity , and let be the value of corresponding to that input. How does change as we vary by arbitrarily small amounts about . More specifically, call the average rate of change with respect to as we vary from to . What happens to these average rates of change if we keep fixed, and pick to be arbitrarily close to . Do they approach a well-defined instantaneous rate of change ?   All the questions above can be phrased as questions about the function that models the relation between and , and we will be able to answer all of these questions, using calculus, by the end of the quarter!  Historically, the development of calculus was most plagued by the challenge of coming up with rigorous mathematical definitions for the notions of approaching a value to arbitrarily close degree without necessarily attaining it. Much nonsense was produced in this endeavor (Isaac Newton's fluxions and fluents , and Gottfried Wilhelm Leibniz's infinitesimals , for example), as well as a fair dose of vitriolic recriminations (George Berkeley accusing Newton and Leibniz of peddling in dubious ghosts of departed quantities ).  Historical reading  If you are interested in the history of calculus, which is fascinating, you might check out The History of the calculus and its conceptual development by Carl B. Boyer.  These shaky foundations were not firmed up until the 19th century, when the modern definition of the limit was developed by mathematicians like Augustin-Louis Cauchy and Karl Weierstrass. Fittingly, it is with the limit that this course will begin in earnest!     Set definitions and notation   sets  sets empty sets  sets membership      set membership   Sets and set membership   A set  is a collection of objects, called the members or elements of . We write if the object is a member of , and if is not a member of .     Subsets  sets subset  sets inclusion    set inclusion     proper set inclusion    A set is a subset of a set , denoted , if every member of is a member of : , implies for any object . The relation is called set inclusion .  If but , we say is a proper subset of , denoted .     Set-builder notation  sets set builder notation   Let be a set, and let be a property that elements of either satisfy or do not satisfy. For an element , let denote the statement that satisfies . The set of all elements of satisfying is denoted .     "
},
{
  "id": "s_intro-2",
  "level": "2",
  "url": "s_intro.html#s_intro-2",
  "type": "Objectives",
  "number": "1",
  "title": "",
  "body": "   Explanation of the different course resources.    Keys to success in the course.    Calculus as the science of functions.    "
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
  "body": " Subsets  sets subset  sets inclusion    set inclusion     proper set inclusion    A set is a subset of a set , denoted , if every member of is a member of : , implies for any object . The relation is called set inclusion .  If but , we say is a proper subset of , denoted .   "
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
  "title": "Limits: informal definition",
  "body": " Limits: informal definition     Give an informal definition of the limit of a function at a given value.    Investigate the existence and\/or value of a function graphically, by examining a a graph.    Use rigorous limit laws to compute limits of functions formed from other functions using common arithmetic operations.      Informal definition of the limit  Many of the questions we will study in regard to functions revolve around how the output of a function changes with respect to its input. As such we want to develop useful and precise language and tools for describing this relation. The limit of a function, defined informally here and rigorously later, is one such tool. Before getting to its informal definition, we illustrate with a graphical example the type of statements we wish to formalize with limit language. First, a reminder about what the graph of a function is.   Graph of function   Given a function , where , its graph is the set . In other words the graph of is the set of all points in the -plane of the form , where .     Function behavior   Suppose is the function whose graph is given below.   Graph of function   Graph of complicated function     Describe how the output behaves as the input approaches each of the values . For some of these values, you might consider how approaches from the left and right separately.    As approaches , either from the left or right, the values of the function get arbitrarily large and negative.  As approaches from the left, the values of get closer and closer to . However, as approaches from the right, the values get closer and closer to .  As approaches from the left or right, the values of the function approach the real number . We also happen to have : , the value of at is equal to .  As approaches from the left, the values of the function approach . However, as approaches from the right, the values oscillate wildly above and below and do not seem to approach any single value.  As approaches from the left or right, the values of the function approach . Interestingly, however, the actual value of at the input is not equal to .     Large and small, greater than and less than  Large and small, greater than and less than  This is a good point to elucidate what we mean in mathematics when we talk about a number being large or small. Both these attributes refer to the size or magnitude of the number, and these in turn are defined as the absolute value of the number. Furthermore, geometrically, the absolute value measures the distance from to the origin. Thus, we say a number is large or small depending on whether its absolute value is large or small, which depends on whether is far away from or close to on the real line. As a result, we say that both of the following are sequences where the numbers get arbitrarily large: . In more detail we say that the first sequence gets arbitrarily large and positive, while the second sequence gets arbitrarily large and negative.  Contrast this with the use of greater than and less than . These refer specifically to the ordering relation defined on : , . The relation is related to, but not completely determined by size of numbers. A good way of thinking of the relation geometrically is in terms of position on the real number line: we have if and only if lies to the left of as points on the number line. Thus, the number is less than the number (since ), even though is smaller than (since ).    Function defined on set   Let be a function with domain . Given , we say that is defined at if is an element of the domain: , . Similarly, given a subset , we say that is defined on if is included in the domain: , .     Limit (informal)   Suppose is a function defined everywhere on an open interval containing the point , except possibly at itself. We say that the limit of as approaches exists if there is a value such that the function value can be made arbitrarily close to provided is sufficiently close (but not equal) to .  When this is the case, we call the limit of as approaches and write . When the limit does not exist we will say that does not exist.     Limit description of graph   Let be the function with graph given in . Use the language and notation of limits to describe the behavior of for inputs near the values .    The limit does not exist. There is no value that approaches for inputs sufficiently close to . Indeed, as gets arbitrarily close to , becomes arbitrarily large and negative.  The limit does not exist. If is arbitrarily close to , and less than (to the left), then the values gets arbitrarily close to ; thus if the limit existed it would have to be equal to . And yet for inputs arbitrarily close to but greater than (to the right), the values are greater than : , they get no closer than a distance of from the value . This implies is not the limit, and hence that no limit exists.  We have . Since , we have in this case.  The limit does not exist. See the explanation in .  We have . Note that in this case is an element of the domain and .     Limit as compared to value   Provide graphs of the following functions on their entire implied domain: . For each function discuss the limit behavior at as compared with the value of the function at .      Graph of   Graph of f      Graph of   Graph of g      Graph of   Graph of h          Limit rules  We now state some useful limit formulas and rules. These will give us a means of breaking down the limit computation of a complicated function into limits of simpler functions. Technically speaking we must prove the validity of each of these rules and formulas; however this would be a fool's errand until we have a rigorous definition of the limit to work with. Such a definition will be provided in the near future, though even then we will not concern ourselves overly with proofs; we are more interested in learning how to make valid use of the rules.  Our first theorem gives us formulas for computing the limits of particular types of functions: constant functions, and the identity function.   Constant and identity functions      Constant function  Fix a real number and let be the constant function defined as for all . Given any we have .    Identity function  Let be the identity function defined as for all . Given any we have .       In contrast to the last theorem, our next theorem does not provide any formulas per se, but rather gives us rules governing how limits interact with various function operations .   Limit rules   Let and be functions, and suppose and exist for the real number .   Sum rule   .    Difference rule   .    Scalar multiple rule   for all .    Product rule   .    Quotient rule  If , then .    Power rule   for all positive integers .    Root rule   for all positive integers , where we must assume is positive if is even.    Replacement rule  If is a function satisfying for all in an open interval about , then .        Limit rules  It is useful to think of as giving us a bunch of algebraic rules for computing limits of functions defined using addition, subtraction, multiplication, etc. For the most part these rules tell us that we can bring the limit into various operations: for example, the first two rules tell us that we can bring the limit into sums and differences of functions. Or better, using plain English, they tell us that the limit of a sum (of functions) is the sum of the limits, and that the limit of a difference (of functions) is the difference of the limits.  In fact most of the rules in can be nicely summarized in plain English ( , the limit of a product is the product of the limits , the limit of an -th power is the -th power of the limit ), and these summaries are helpful for remembering how the limit interacts with function operations.    Quotient rule  Assume as in that and exist and consider the limit . Mark well that we can only make use of the quotient rule if , in which case we can conclude that the limit of the quotient is the quotient of the limits.  Note further that in the case where , we cannot automatically conclude that the limit does not exist; it simply the case that we cannot make use of the quotient rule to evaluate this limit. When this happens, we must look to other means for investigating the limit. See .    Using limit rules  Compute the limit below. Your answer should be a chain of equalities with steps justified by limit rules.     .     Evaluation (polynomials and rational functions)      Polynomial evaluation  Let be a polynomial. Given any , we have .    Rational evaluation  Let and be polynomials. For any satisfying , we have .        Polynomial evaluation  Give a simplified computation of the limit in using .   The polynomial evaluation formula allows us to skip a few steps in our computation from : .     Quotient rule does not apply  Compute the limit below. Your answer should be a chain of equalities with each step justified.    Note that since the limit of the denominator function is 0, we are not able to use the quotient (or rational function) rule. We begin instead with some algebra: .     "
},
{
  "id": "s_limits_naive-2",
  "level": "2",
  "url": "s_limits_naive.html#s_limits_naive-2",
  "type": "Objectives",
  "number": "2",
  "title": "",
  "body": "   Give an informal definition of the limit of a function at a given value.    Investigate the existence and\/or value of a function graphically, by examining a a graph.    Use rigorous limit laws to compute limits of functions formed from other functions using common arithmetic operations.    "
},
{
  "id": "d_function_graph",
  "level": "2",
  "url": "s_limits_naive.html#d_function_graph",
  "type": "Definition",
  "number": "2.1",
  "title": "Graph of function.",
  "body": " Graph of function   Given a function , where , its graph is the set . In other words the graph of is the set of all points in the -plane of the form , where .   "
},
{
  "id": "eg_function_behavior",
  "level": "2",
  "url": "s_limits_naive.html#eg_function_behavior",
  "type": "Example",
  "number": "2.2",
  "title": "Function behavior.",
  "body": " Function behavior   Suppose is the function whose graph is given below.   Graph of function   Graph of complicated function     Describe how the output behaves as the input approaches each of the values . For some of these values, you might consider how approaches from the left and right separately.    As approaches , either from the left or right, the values of the function get arbitrarily large and negative.  As approaches from the left, the values of get closer and closer to . However, as approaches from the right, the values get closer and closer to .  As approaches from the left or right, the values of the function approach the real number . We also happen to have : , the value of at is equal to .  As approaches from the left, the values of the function approach . However, as approaches from the right, the values oscillate wildly above and below and do not seem to approach any single value.  As approaches from the left or right, the values of the function approach . Interestingly, however, the actual value of at the input is not equal to .   "
},
{
  "id": "rm_greater_less_large",
  "level": "2",
  "url": "s_limits_naive.html#rm_greater_less_large",
  "type": "Remark",
  "number": "2.4",
  "title": "Large and small, greater than and less thanLarge and small, greater than and less than",
  "body": " Large and small, greater than and less than  Large and small, greater than and less than  This is a good point to elucidate what we mean in mathematics when we talk about a number being large or small. Both these attributes refer to the size or magnitude of the number, and these in turn are defined as the absolute value of the number. Furthermore, geometrically, the absolute value measures the distance from to the origin. Thus, we say a number is large or small depending on whether its absolute value is large or small, which depends on whether is far away from or close to on the real line. As a result, we say that both of the following are sequences where the numbers get arbitrarily large: . In more detail we say that the first sequence gets arbitrarily large and positive, while the second sequence gets arbitrarily large and negative.  Contrast this with the use of greater than and less than . These refer specifically to the ordering relation defined on : , . The relation is related to, but not completely determined by size of numbers. A good way of thinking of the relation geometrically is in terms of position on the real number line: we have if and only if lies to the left of as points on the number line. Thus, the number is less than the number (since ), even though is smaller than (since ).  "
},
{
  "id": "d_defined_at",
  "level": "2",
  "url": "s_limits_naive.html#d_defined_at",
  "type": "Definition",
  "number": "2.5",
  "title": "Function defined on set.",
  "body": " Function defined on set   Let be a function with domain . Given , we say that is defined at if is an element of the domain: , . Similarly, given a subset , we say that is defined on if is included in the domain: , .   "
},
{
  "id": "d_limit_informal",
  "level": "2",
  "url": "s_limits_naive.html#d_limit_informal",
  "type": "Definition",
  "number": "2.6",
  "title": "Limit (informal).",
  "body": " Limit (informal)   Suppose is a function defined everywhere on an open interval containing the point , except possibly at itself. We say that the limit of as approaches exists if there is a value such that the function value can be made arbitrarily close to provided is sufficiently close (but not equal) to .  When this is the case, we call the limit of as approaches and write . When the limit does not exist we will say that does not exist.   "
},
{
  "id": "subsec-naive-definition-of-limit-8",
  "level": "2",
  "url": "s_limits_naive.html#subsec-naive-definition-of-limit-8",
  "type": "Example",
  "number": "2.7",
  "title": "Limit description of graph.",
  "body": " Limit description of graph   Let be the function with graph given in . Use the language and notation of limits to describe the behavior of for inputs near the values .    The limit does not exist. There is no value that approaches for inputs sufficiently close to . Indeed, as gets arbitrarily close to , becomes arbitrarily large and negative.  The limit does not exist. If is arbitrarily close to , and less than (to the left), then the values gets arbitrarily close to ; thus if the limit existed it would have to be equal to . And yet for inputs arbitrarily close to but greater than (to the right), the values are greater than : , they get no closer than a distance of from the value . This implies is not the limit, and hence that no limit exists.  We have . Since , we have in this case.  The limit does not exist. See the explanation in .  We have . Note that in this case is an element of the domain and .   "
},
{
  "id": "subsec-naive-definition-of-limit-9",
  "level": "2",
  "url": "s_limits_naive.html#subsec-naive-definition-of-limit-9",
  "type": "Example",
  "number": "2.8",
  "title": "Limit as compared to value.",
  "body": " Limit as compared to value   Provide graphs of the following functions on their entire implied domain: . For each function discuss the limit behavior at as compared with the value of the function at .      Graph of   Graph of f      Graph of   Graph of g      Graph of   Graph of h       "
},
{
  "id": "th_lim_const_id",
  "level": "2",
  "url": "s_limits_naive.html#th_lim_const_id",
  "type": "Theorem",
  "number": "2.12",
  "title": "Constant and identity functions.",
  "body": " Constant and identity functions      Constant function  Fix a real number and let be the constant function defined as for all . Given any we have .    Identity function  Let be the identity function defined as for all . Given any we have .      "
},
{
  "id": "th_lim_rules",
  "level": "2",
  "url": "s_limits_naive.html#th_lim_rules",
  "type": "Theorem",
  "number": "2.13",
  "title": "Limit rules.",
  "body": " Limit rules   Let and be functions, and suppose and exist for the real number .   Sum rule   .    Difference rule   .    Scalar multiple rule   for all .    Product rule   .    Quotient rule  If , then .    Power rule   for all positive integers .    Root rule   for all positive integers , where we must assume is positive if is even.    Replacement rule  If is a function satisfying for all in an open interval about , then .      "
},
{
  "id": "ss_limit_laws-7",
  "level": "2",
  "url": "s_limits_naive.html#ss_limit_laws-7",
  "type": "Remark",
  "number": "2.14",
  "title": "Limit rules.",
  "body": " Limit rules  It is useful to think of as giving us a bunch of algebraic rules for computing limits of functions defined using addition, subtraction, multiplication, etc. For the most part these rules tell us that we can bring the limit into various operations: for example, the first two rules tell us that we can bring the limit into sums and differences of functions. Or better, using plain English, they tell us that the limit of a sum (of functions) is the sum of the limits, and that the limit of a difference (of functions) is the difference of the limits.  In fact most of the rules in can be nicely summarized in plain English ( , the limit of a product is the product of the limits , the limit of an -th power is the -th power of the limit ), and these summaries are helpful for remembering how the limit interacts with function operations.  "
},
{
  "id": "ss_limit_laws-8",
  "level": "2",
  "url": "s_limits_naive.html#ss_limit_laws-8",
  "type": "Remark",
  "number": "2.15",
  "title": "Quotient rule.",
  "body": " Quotient rule  Assume as in that and exist and consider the limit . Mark well that we can only make use of the quotient rule if , in which case we can conclude that the limit of the quotient is the quotient of the limits.  Note further that in the case where , we cannot automatically conclude that the limit does not exist; it simply the case that we cannot make use of the quotient rule to evaluate this limit. When this happens, we must look to other means for investigating the limit. See .  "
},
{
  "id": "eg_lim_rules",
  "level": "2",
  "url": "s_limits_naive.html#eg_lim_rules",
  "type": "Example",
  "number": "2.16",
  "title": "Using limit rules.",
  "body": " Using limit rules  Compute the limit below. Your answer should be a chain of equalities with steps justified by limit rules.     .   "
},
{
  "id": "cor_poly_rational",
  "level": "2",
  "url": "s_limits_naive.html#cor_poly_rational",
  "type": "Corollary",
  "number": "2.17",
  "title": "Evaluation (polynomials and rational functions).",
  "body": " Evaluation (polynomials and rational functions)      Polynomial evaluation  Let be a polynomial. Given any , we have .    Rational evaluation  Let and be polynomials. For any satisfying , we have .      "
},
{
  "id": "eg_poly_eval",
  "level": "2",
  "url": "s_limits_naive.html#eg_poly_eval",
  "type": "Example",
  "number": "2.18",
  "title": "Polynomial evaluation.",
  "body": " Polynomial evaluation  Give a simplified computation of the limit in using .   The polynomial evaluation formula allows us to skip a few steps in our computation from : .   "
},
{
  "id": "eg_lim_quot_fail",
  "level": "2",
  "url": "s_limits_naive.html#eg_lim_quot_fail",
  "type": "Example",
  "number": "2.19",
  "title": "Quotient rule does not apply.",
  "body": " Quotient rule does not apply  Compute the limit below. Your answer should be a chain of equalities with each step justified.    Note that since the limit of the denominator function is 0, we are not able to use the quotient (or rational function) rule. We begin instead with some algebra: .   "
},
{
  "id": "s_limit_sandwich",
  "level": "1",
  "url": "s_limit_sandwich.html",
  "type": "Section",
  "number": "3",
  "title": "Limits: algebraic technique and sandwich theorem",
  "body": " Limits: algebraic technique and sandwich theorem     Use algebraic techniques to help compute limits.    Use the sandwich theorem to compute limits.    Apply the sandwich theorem technique to limits involving absolute value, sine, and cosine.      Algebraic techniques  As we saw in , there are limits to usefulness of our limit rules. In many cases, if we run into a dead end, some algebraic manipulation of the function expression can help us find a way forward. The following examples serve to illustrate this technique and remind you of some algebraic techniques.   Algebraic limit technique: factoring   Compute . Your answer should be a chain of equalities with steps justified.    Note that the limit of the denominator expression as is zero, and thus we cannot directly use the quotient rule. Thus we begin with some algebraic manipulation. The key algebraic technique here is factoring. .     Algebraic limit technique: clear denominator   Compute . Your answer should be a chain of equalities with steps justified.    Again, the quotient rule is not available to us, as the limit of the denominator function is zero. Accordingly, we begin with some algebra.      Algebraic limit technique: radicals   Compute . Your answer should be a chain of equalities with steps justified.    We use the technique of multiplying the numerator and denominator by a conjugate radical expression : .      Sandwich theorem  Another situation where our basic limit rules might not suffice to compute a given limit is when the function in question is unreasonably complicated, making its behavior near a point difficult to pin down. The sandwich theorem potentially gives a technique for getting around this issue. You can think of it as a means of replacing the complicated function , whose behavior is a mystery to us, with two simpler bounding functions and , whose behavior we understand. It is called the sandwich theorem as the necessary inequality has  sandwiched between the functions and .   Sandwich theorem   Fix a point and suppose that functions satisfy for all lying in an open interval containing . If , then . Using logical shorthand: .    As with all bits of theory in mathematics, this statement requires proof; and as with most bits of theory in this course, we will not provide that proof. Interested in seeing how one would prove this and other statements from calculus? Take Math 320-1 or Math 321-1!    Making use of the sandwich theorem requires carrying out a number of steps (with justification). The following procedure will be useful for doing this in an organized manner.   Sandwich theorem   To compute using the sandwich theorem, proceed as follows.   Find bounding functions and satisfying the two following conditions:    for all lying in an open interval containing .     for some .   For your own convenience, make sure to name these functions, as opposed to just providing formulas for them.    Conclude (citing the sandwich theorem) that         Sandwich theorem  As the examples below will illustrate, the art of using lies in being able to find useful bounding functions and . Use these examples as a model for your own use of . Note in particular how   the explanations make explicit the two conditions that the bounding functions must satisfy;    the explanations end with a concluding statement explicitly citing the sandwich theorem;    giving the bounding functions names ( , and ), as opposed to just providing formulas ( , , ), makes these explanations more concise.      Sandwich theorem: easy   Suppose the function satisfies for all in the interval . Compute .    We follow the steps of . In this case our bounding functions and are provided for us, making life much easier. By assumption our mystery function satisfies for all . Next we compute . Since holds for all , and since , we conclude that .     Sandwich theorem: less easy   Use the sandwich theorem to compute .    Here we make use of a well-known and important inequality for the cosine function: namely, that for all . It follows that for all . Since for all , the inequalities in still hold after multiplying each expression by : that is for all . Thus, letting and , we have for all in the open inteval . Lastly, we compute . Since holds for all in , and since , we conclude using the sandwich theorem that .    Our next theorem concerns the absolute value, the definition of which we now recall.   Absolute value   The absolute value of a real number , denoted , is defined as .     Absolute value  Below we gather some useful remarks and facts about the absolute value.   We have for all .    Fix a nonnegative number . We have for all .    We have for all .    Fix a real number . Geometrically speaking is the distance between and on the real line. In particular, taking , we see that is the distance between and the origin on the real line.       Limits and absolute value      Absolute value evaluation   for all .    Absolute value implication  Fix . If , then . Using logical shorthand: .          Using the identity , we see that .    To prove this implication ( , if-then statement), we assume that and prove that . We do so using the sandwich theorem. Indeed, since for all , we have for all in the domain of . Thus, letting and , we have for all in the domain of , and . It now follows from the sandwich theorem that .       Our final result uses the sandwich theorem to investigate the limits of sine and cosine at zero.   Sine and cosine evaluation at zero      Sine evaluation at zero   .    Cosine evaluation at zero   .          We use the sandwich theorem to prove this limit formula. Our choice of bounding functions will rely on an important inequality involving the sine function: namely for all . The proof of this inequality (given at the end of this section) is nontrivial, but also instructive: it appeals to some of the unit circle geometry that goes into the definition of the trigonometric functions. In any case, we will simply assume holds for the purpose of this proof. With that in place, our result is an easy consequence of the sandwich theorem. Indeed, setting and , we have for all , by inequality , and , since . The sandwich theorem now implies .    First note that for all , we have , and hence for all . We then have .       As promised in the proof of , we provide a proof of the inequality , or equivalently, for all . You are not responsible for understanding this proof, but you might find the argument instructive nonetheless.   Proof of  We will prove that for all . First, observer that since , we have . Thus the function is even. Since is also even, it suffices to prove for all . Furthermore, since , and since , it suffices to show for all . To this end, take any . The triangle , where , , and lies within the the sector of the unit disc determined by . (Diagram to appear sometime soon.) Elementary trigonometry tells us that ; elementary geometry tells us that . We conclude that , or equivalently, for all . Since furthermore and for , we see that for all , as desired.    "
},
{
  "id": "s_limit_sandwich-2",
  "level": "2",
  "url": "s_limit_sandwich.html#s_limit_sandwich-2",
  "type": "Objectives",
  "number": "3",
  "title": "",
  "body": "   Use algebraic techniques to help compute limits.    Use the sandwich theorem to compute limits.    Apply the sandwich theorem technique to limits involving absolute value, sine, and cosine.    "
},
{
  "id": "eg_lim_factor",
  "level": "2",
  "url": "s_limit_sandwich.html#eg_lim_factor",
  "type": "Example",
  "number": "3.1",
  "title": "Algebraic limit technique: factoring.",
  "body": " Algebraic limit technique: factoring   Compute . Your answer should be a chain of equalities with steps justified.    Note that the limit of the denominator expression as is zero, and thus we cannot directly use the quotient rule. Thus we begin with some algebraic manipulation. The key algebraic technique here is factoring. .   "
},
{
  "id": "eg_limit_clear_denom",
  "level": "2",
  "url": "s_limit_sandwich.html#eg_limit_clear_denom",
  "type": "Example",
  "number": "3.2",
  "title": "Algebraic limit technique: clear denominator.",
  "body": " Algebraic limit technique: clear denominator   Compute . Your answer should be a chain of equalities with steps justified.    Again, the quotient rule is not available to us, as the limit of the denominator function is zero. Accordingly, we begin with some algebra.    "
},
{
  "id": "eg_lim_radical",
  "level": "2",
  "url": "s_limit_sandwich.html#eg_lim_radical",
  "type": "Example",
  "number": "3.3",
  "title": "Algebraic limit technique: radicals.",
  "body": " Algebraic limit technique: radicals   Compute . Your answer should be a chain of equalities with steps justified.    We use the technique of multiplying the numerator and denominator by a conjugate radical expression : .   "
},
{
  "id": "th_sandwich",
  "level": "2",
  "url": "s_limit_sandwich.html#th_sandwich",
  "type": "Theorem",
  "number": "3.4",
  "title": "Sandwich theorem.",
  "body": " Sandwich theorem   Fix a point and suppose that functions satisfy for all lying in an open interval containing . If , then . Using logical shorthand: .    As with all bits of theory in mathematics, this statement requires proof; and as with most bits of theory in this course, we will not provide that proof. Interested in seeing how one would prove this and other statements from calculus? Take Math 320-1 or Math 321-1!   "
},
{
  "id": "proc_sandwich",
  "level": "2",
  "url": "s_limit_sandwich.html#proc_sandwich",
  "type": "Procedure",
  "number": "3.5",
  "title": "Sandwich theorem.",
  "body": " Sandwich theorem   To compute using the sandwich theorem, proceed as follows.   Find bounding functions and satisfying the two following conditions:    for all lying in an open interval containing .     for some .   For your own convenience, make sure to name these functions, as opposed to just providing formulas for them.    Conclude (citing the sandwich theorem) that       "
},
{
  "id": "rm_sandwich",
  "level": "2",
  "url": "s_limit_sandwich.html#rm_sandwich",
  "type": "Remark",
  "number": "3.6",
  "title": "Sandwich theorem.",
  "body": " Sandwich theorem  As the examples below will illustrate, the art of using lies in being able to find useful bounding functions and . Use these examples as a model for your own use of . Note in particular how   the explanations make explicit the two conditions that the bounding functions must satisfy;    the explanations end with a concluding statement explicitly citing the sandwich theorem;    giving the bounding functions names ( , and ), as opposed to just providing formulas ( , , ), makes these explanations more concise.    "
},
{
  "id": "eg_sandwich_easy",
  "level": "2",
  "url": "s_limit_sandwich.html#eg_sandwich_easy",
  "type": "Example",
  "number": "3.7",
  "title": "Sandwich theorem: easy.",
  "body": " Sandwich theorem: easy   Suppose the function satisfies for all in the interval . Compute .    We follow the steps of . In this case our bounding functions and are provided for us, making life much easier. By assumption our mystery function satisfies for all . Next we compute . Since holds for all , and since , we conclude that .   "
},
{
  "id": "ss_sandwich-8",
  "level": "2",
  "url": "s_limit_sandwich.html#ss_sandwich-8",
  "type": "Example",
  "number": "3.8",
  "title": "Sandwich theorem: less easy.",
  "body": " Sandwich theorem: less easy   Use the sandwich theorem to compute .    Here we make use of a well-known and important inequality for the cosine function: namely, that for all . It follows that for all . Since for all , the inequalities in still hold after multiplying each expression by : that is for all . Thus, letting and , we have for all in the open inteval . Lastly, we compute . Since holds for all in , and since , we conclude using the sandwich theorem that .   "
},
{
  "id": "d_absolute_value",
  "level": "2",
  "url": "s_limit_sandwich.html#d_absolute_value",
  "type": "Definition",
  "number": "3.9",
  "title": "Absolute value.",
  "body": " Absolute value   The absolute value of a real number , denoted , is defined as .   "
},
{
  "id": "rm_abs_val",
  "level": "2",
  "url": "s_limit_sandwich.html#rm_abs_val",
  "type": "Remark",
  "number": "3.10",
  "title": "Absolute value.",
  "body": " Absolute value  Below we gather some useful remarks and facts about the absolute value.   We have for all .    Fix a nonnegative number . We have for all .    We have for all .    Fix a real number . Geometrically speaking is the distance between and on the real line. In particular, taking , we see that is the distance between and the origin on the real line.     "
},
{
  "id": "th_abs_lim",
  "level": "2",
  "url": "s_limit_sandwich.html#th_abs_lim",
  "type": "Theorem",
  "number": "3.11",
  "title": "Limits and absolute value.",
  "body": " Limits and absolute value      Absolute value evaluation   for all .    Absolute value implication  Fix . If , then . Using logical shorthand: .          Using the identity , we see that .    To prove this implication ( , if-then statement), we assume that and prove that . We do so using the sandwich theorem. Indeed, since for all , we have for all in the domain of . Thus, letting and , we have for all in the domain of , and . It now follows from the sandwich theorem that .      "
},
{
  "id": "th_lim_sine_cos",
  "level": "2",
  "url": "s_limit_sandwich.html#th_lim_sine_cos",
  "type": "Theorem",
  "number": "3.12",
  "title": "Sine and cosine evaluation at zero.",
  "body": " Sine and cosine evaluation at zero      Sine evaluation at zero   .    Cosine evaluation at zero   .          We use the sandwich theorem to prove this limit formula. Our choice of bounding functions will rely on an important inequality involving the sine function: namely for all . The proof of this inequality (given at the end of this section) is nontrivial, but also instructive: it appeals to some of the unit circle geometry that goes into the definition of the trigonometric functions. In any case, we will simply assume holds for the purpose of this proof. With that in place, our result is an easy consequence of the sandwich theorem. Indeed, setting and , we have for all , by inequality , and , since . The sandwich theorem now implies .    First note that for all , we have , and hence for all . We then have .      "
},
{
  "id": "ss_sandwich-16",
  "level": "2",
  "url": "s_limit_sandwich.html#ss_sandwich-16",
  "type": "Proof",
  "number": "1",
  "title": "Proof of <span xmlns:pf=\"https:\/\/prefigure.org\" class=\"process-math\">\\(\\abs{\\sin\\theta}\\leq \\abs{\\theta}\\)<\/span>.",
  "body": " Proof of  We will prove that for all . First, observer that since , we have . Thus the function is even. Since is also even, it suffices to prove for all . Furthermore, since , and since , it suffices to show for all . To this end, take any . The triangle , where , , and lies within the the sector of the unit disc determined by . (Diagram to appear sometime soon.) Elementary trigonometry tells us that ; elementary geometry tells us that . We conclude that , or equivalently, for all . Since furthermore and for , we see that for all , as desired.  "
},
{
  "id": "s_lim_formal",
  "level": "1",
  "url": "s_lim_formal.html",
  "type": "Section",
  "number": "4",
  "title": "Limits: formal definition",
  "body": " Limits: formal definition     Provide a rigorous definition of the limit.    Understand the quantifier logic underlying the formal definition of a limit in a challenge and response manner.    Use the formal definition of the limit to compute a limit and\/or decide whether a limit exists.     As mentioned before, what makes less than rigorous is the use of the vague phrases arbitrarily close and sufficiently close . The epsilon-delta formulation given in is a mathematically precise way of of capturing these notions.   Limit (formal)   Suppose is a function defined everywhere on an open interval containing the point , except possibly at itself. We say that the limit of as approaches exists if there is a value satisfying the following property: for all , there exists a such that if , then . Using logical shorthand: .     Anatomy of a definition   can come off as forbiddingly technical. This is due to its combination of mathematical and logical details. We endeavor now to unpack and explicate some of these details. We will start with the mathematical nuts and bolts in the interior of the statement and work our way outward through the logical layers.   Absolute value  The absolute value expressions and are measures of how close is to and how close is to . To say is to say is within a distance of ; similarly says is within a distance of .    Conditional  The conditional (or if-then ) statement asserts that if  is within a distance of (but not equal to ), then  is within a distance of .    Existential quantifier  How does adding the existential quantifier  there exists a change the meaning? Considering to be fixed for the moment, the statement asserts that for all  sufficiently close (but not equal) to , is within a distance of . Indeed, it provides a sort of safety distance  and says that as long as is within this safety distance of (but not equal to ), then is within a distance of .    Universal quantifier  Lastly, consider what effect the universal quantifier  for all has. The full statement asserts that for any positive  , the value is within a distance for all sufficiently close to . In particular, choosing to be as small as you like, we have within that small distance of for all sufficiently close to . In other words, we can make  arbitrarily close to for all sufficiently close (but not equal) to .       Challenge and response  It is useful to think of the process of verifying to establish a limit claim as a challenge and response type of procedure:   for each positive , we are challenged to show that for sufficiently close to , ;    to meet this -challenge we respond by providing a for which implies .   Note that the we provide in response to a particular -challenge will typically depend on : and indeed, we typically see that the smaller the , the smaller the . This is illustrated in the examples below.    Epsilon-delta proof for limits   To prove for a function and real numbers , proceed as follows.   Treating as an arbitrary positive constant, solve the inequality for . That is, find the set of all satisfying . This set is typically a union of one or more intervals.    Find a positive such that the set of solutions to contains the interval , with the possible exception of itself. The you provide will be expressed in terms of .    It follows that . Since was arbitrary, conclude that .       Our first example illustrating treats a function of the form . Such functions are called affine functions .   Epsilon-delta: affine function   Let . Verify that using the epsilon-delta definition of the limit.    We follow .   Step 1  Treating as a fixed arbitrary constant we attempt to solve the inequality : .    Step 2  By step 1, we see that the solution to our starting inequality is the set of satisfying . In other words, . Thus itself is of the form , where .    Step 3  Thus given any , setting , we have for all satisfying . We conclude that .      Visualizing epsilon-delta proofs  The Geogebra interactive below provides a means of visualizing the challenge-response nature of the epsilon-delta proof of a limit claim in terms of the graph of . (The window below is a bit narrow. Go to the Geogebra page of the interactive for a larger rendition.) We elucidate how to parse this graphical representation.   The specific -challenge is indicated by a horizontal band centered about .    The -response is indicated by a vertical band centered about .    The game is, given a specific -challenge, find an appropriate such that when is within of , the values are within of . Visually, this is accomplished when all points on the segment of the graph of lying in the vertical band about also lie within the horizontal band about .      Visualizing epsilon-delta proofs. Made with Geogebra      Finding such that  In the final step of applying to a limit statment , we usually have found an open interval containing , and then must find a such that . The following approach is useful in this regard. Observe that and thus , where , are the distances from to the left and right endpoints of the interval.   Visualizing distances to endpoints of interval   Visualizing distances to endpoints of interval     Setting as the minimum of these distances, we now have , as desired.  Depending on the example, we can sometimes easily determine which of and is the minimum, giving us an explicit expression for . When things are too complicated, however, it is perfectly fine to set .    Epsilon-delta: radical function   Let . Verify that using the epsilon-delta definition of the limit.    Following we treat as an arbitrary positive constant and attempt to solve the inequality . We have . We are tempted now to square all terms in the above inequality to get rid of the radical, but recall that in order for the rule to apply, we need and to both be nonnegative. (Example: , but .) To deal with this, we will treat two separate cases: and .   Case:  When , all terms in the last inequality above are positive, and we may continue on to conclude . Thus the set of solutions to our original inequality, assuming , is , where . Note that since , both and are positive. It is clear that . Setting to be the minimum of , guarantees that . We conclude that for any positive , setting , we have for all satisfying .  Note: in fact, it is not difficult to see in this case that and so we could have more explicitly set in this case. Nonetheless, declaring works just as well here, as well as in other examples.    Case:  Now assume . We need to find a such that implies . From the previous case ( ), we know there is a such that implies . But since , we have , as desired.   Our two cases, taken together, show that for all , there exists a such that . Thus .    As the last example illustrates, as our function becomes more complicated, solving the relevant inequality can be a delicate and difficult affair. Mindful of this fact, instead of asking you to give a full epsilon-delta proof of a given limit claim, we will sometimes ask you to give a partial proof: namely we will give you one specific as a challenge, and ask you to find a that satisfies for this particular .   Finding for specific : quadratic function   Let . It is a fact that . Verify the epsilon-delta definition for this limit statement for the specific epsilon .    We wish to find satisfying . Proceeding as in , we first solve the inequality : . Notice that in this case, the set of solutions to the inequality is a union of two intervals: . Notice further that our limit point is an element of the second interval, and that we have , where . Thus, setting , we have . It follows that , as desired.    We gather here some inequality properties that came to light in the examples above. These are essential for solving inequalities, and thus for performing epsilon-delta proofs.   Inequality rules      Multiply by constant  Assume is a positive constant and is a negative one. For all we have .    Absolute value  Assume is a nonnegative constant. For all , we have .    Squaring and square-rooting  Assume is a nonnegative constant. For all , we have . It follows that for all nonnegative , we have .       "
},
{
  "id": "s_lim_formal-2",
  "level": "2",
  "url": "s_lim_formal.html#s_lim_formal-2",
  "type": "Objectives",
  "number": "4",
  "title": "",
  "body": "   Provide a rigorous definition of the limit.    Understand the quantifier logic underlying the formal definition of a limit in a challenge and response manner.    Use the formal definition of the limit to compute a limit and\/or decide whether a limit exists.    "
},
{
  "id": "d_lim_formal",
  "level": "2",
  "url": "s_lim_formal.html#d_lim_formal",
  "type": "Definition",
  "number": "4.1",
  "title": "Limit (formal).",
  "body": " Limit (formal)   Suppose is a function defined everywhere on an open interval containing the point , except possibly at itself. We say that the limit of as approaches exists if there is a value satisfying the following property: for all , there exists a such that if , then . Using logical shorthand: .   "
},
{
  "id": "rm_def_anat",
  "level": "2",
  "url": "s_lim_formal.html#rm_def_anat",
  "type": "Remark",
  "number": "4.2",
  "title": "Anatomy of a definition.",
  "body": " Anatomy of a definition   can come off as forbiddingly technical. This is due to its combination of mathematical and logical details. We endeavor now to unpack and explicate some of these details. We will start with the mathematical nuts and bolts in the interior of the statement and work our way outward through the logical layers.   Absolute value  The absolute value expressions and are measures of how close is to and how close is to . To say is to say is within a distance of ; similarly says is within a distance of .    Conditional  The conditional (or if-then ) statement asserts that if  is within a distance of (but not equal to ), then  is within a distance of .    Existential quantifier  How does adding the existential quantifier  there exists a change the meaning? Considering to be fixed for the moment, the statement asserts that for all  sufficiently close (but not equal) to , is within a distance of . Indeed, it provides a sort of safety distance  and says that as long as is within this safety distance of (but not equal to ), then is within a distance of .    Universal quantifier  Lastly, consider what effect the universal quantifier  for all has. The full statement asserts that for any positive  , the value is within a distance for all sufficiently close to . In particular, choosing to be as small as you like, we have within that small distance of for all sufficiently close to . In other words, we can make  arbitrarily close to for all sufficiently close (but not equal) to .     "
},
{
  "id": "s_lim_formal-6",
  "level": "2",
  "url": "s_lim_formal.html#s_lim_formal-6",
  "type": "Remark",
  "number": "4.3",
  "title": "Challenge and response.",
  "body": " Challenge and response  It is useful to think of the process of verifying to establish a limit claim as a challenge and response type of procedure:   for each positive , we are challenged to show that for sufficiently close to , ;    to meet this -challenge we respond by providing a for which implies .   Note that the we provide in response to a particular -challenge will typically depend on : and indeed, we typically see that the smaller the , the smaller the . This is illustrated in the examples below.  "
},
{
  "id": "proc_epsilon_delta",
  "level": "2",
  "url": "s_lim_formal.html#proc_epsilon_delta",
  "type": "Procedure",
  "number": "4.4",
  "title": "Epsilon-delta proof for limits.",
  "body": " Epsilon-delta proof for limits   To prove for a function and real numbers , proceed as follows.   Treating as an arbitrary positive constant, solve the inequality for . That is, find the set of all satisfying . This set is typically a union of one or more intervals.    Find a positive such that the set of solutions to contains the interval , with the possible exception of itself. The you provide will be expressed in terms of .    It follows that . Since was arbitrary, conclude that .      "
},
{
  "id": "eg_ep_delt_affine",
  "level": "2",
  "url": "s_lim_formal.html#eg_ep_delt_affine",
  "type": "Example",
  "number": "4.5",
  "title": "Epsilon-delta: affine function.",
  "body": " Epsilon-delta: affine function   Let . Verify that using the epsilon-delta definition of the limit.    We follow .   Step 1  Treating as a fixed arbitrary constant we attempt to solve the inequality : .    Step 2  By step 1, we see that the solution to our starting inequality is the set of satisfying . In other words, . Thus itself is of the form , where .    Step 3  Thus given any , setting , we have for all satisfying . We conclude that .    "
},
{
  "id": "s_lim_formal-10",
  "level": "2",
  "url": "s_lim_formal.html#s_lim_formal-10",
  "type": "Interactive example",
  "number": "4.1",
  "title": "Visualizing epsilon-delta proofs.",
  "body": " Visualizing epsilon-delta proofs  The Geogebra interactive below provides a means of visualizing the challenge-response nature of the epsilon-delta proof of a limit claim in terms of the graph of . (The window below is a bit narrow. Go to the Geogebra page of the interactive for a larger rendition.) We elucidate how to parse this graphical representation.   The specific -challenge is indicated by a horizontal band centered about .    The -response is indicated by a vertical band centered about .    The game is, given a specific -challenge, find an appropriate such that when is within of , the values are within of . Visually, this is accomplished when all points on the segment of the graph of lying in the vertical band about also lie within the horizontal band about .      Visualizing epsilon-delta proofs. Made with Geogebra    "
},
{
  "id": "rm_find_delta",
  "level": "2",
  "url": "s_lim_formal.html#rm_find_delta",
  "type": "Remark",
  "number": "4.7",
  "title": "Finding <span xmlns:pf=\"https:\/\/prefigure.org\" class=\"process-math\">\\(\\delta\\)<\/span> such that <span class=\"process-math\">\\((a-\\delta, a+\\delta)\\subseteq S\\)<\/span>.",
  "body": " Finding such that  In the final step of applying to a limit statment , we usually have found an open interval containing , and then must find a such that . The following approach is useful in this regard. Observe that and thus , where , are the distances from to the left and right endpoints of the interval.   Visualizing distances to endpoints of interval   Visualizing distances to endpoints of interval     Setting as the minimum of these distances, we now have , as desired.  Depending on the example, we can sometimes easily determine which of and is the minimum, giving us an explicit expression for . When things are too complicated, however, it is perfectly fine to set .  "
},
{
  "id": "s_lim_formal-12",
  "level": "2",
  "url": "s_lim_formal.html#s_lim_formal-12",
  "type": "Example",
  "number": "4.9",
  "title": "Epsilon-delta: radical function.",
  "body": " Epsilon-delta: radical function   Let . Verify that using the epsilon-delta definition of the limit.    Following we treat as an arbitrary positive constant and attempt to solve the inequality . We have . We are tempted now to square all terms in the above inequality to get rid of the radical, but recall that in order for the rule to apply, we need and to both be nonnegative. (Example: , but .) To deal with this, we will treat two separate cases: and .   Case:  When , all terms in the last inequality above are positive, and we may continue on to conclude . Thus the set of solutions to our original inequality, assuming , is , where . Note that since , both and are positive. It is clear that . Setting to be the minimum of , guarantees that . We conclude that for any positive , setting , we have for all satisfying .  Note: in fact, it is not difficult to see in this case that and so we could have more explicitly set in this case. Nonetheless, declaring works just as well here, as well as in other examples.    Case:  Now assume . We need to find a such that implies . From the previous case ( ), we know there is a such that implies . But since , we have , as desired.   Our two cases, taken together, show that for all , there exists a such that . Thus .   "
},
{
  "id": "eg_ep_delt_quad",
  "level": "2",
  "url": "s_lim_formal.html#eg_ep_delt_quad",
  "type": "Example",
  "number": "4.10",
  "title": "Finding <span xmlns:pf=\"https:\/\/prefigure.org\" class=\"process-math\">\\(\\delta\\)<\/span> for specific <span class=\"process-math\">\\(\\epsilon\\text{:}\\)<\/span> quadratic function.",
  "body": " Finding for specific : quadratic function   Let . It is a fact that . Verify the epsilon-delta definition for this limit statement for the specific epsilon .    We wish to find satisfying . Proceeding as in , we first solve the inequality : . Notice that in this case, the set of solutions to the inequality is a union of two intervals: . Notice further that our limit point is an element of the second interval, and that we have , where . Thus, setting , we have . It follows that , as desired.   "
},
{
  "id": "th_inequalities",
  "level": "2",
  "url": "s_lim_formal.html#th_inequalities",
  "type": "Theorem",
  "number": "4.11",
  "title": "Inequality rules.",
  "body": " Inequality rules      Multiply by constant  Assume is a positive constant and is a negative one. For all we have .    Absolute value  Assume is a nonnegative constant. For all , we have .    Squaring and square-rooting  Assume is a nonnegative constant. For all , we have . It follows that for all nonnegative , we have .      "
},
{
  "id": "s_one_sided",
  "level": "1",
  "url": "s_one_sided.html",
  "type": "Section",
  "number": "5",
  "title": "One-sided limits",
  "body": " One-sided limits     Provide a rigorous definition of one-sided limits.    Use one-sided limits to evaluate limits at a point.    Use limit rules and formulas for one-sided limits.    Use one-sided limits to evaluate the limit at a point.      Definition  One-sided limits provide a convenient means of describing how a function behaves as its inputs approach a value from one side or the other. We go straight to their formal definitions, mainly to introduce the notation and terminology.   One-sided limits   Let be a function, and let .   Left-hand limit  Assume is defined on an open interval of the form . We say the left-hand limit of as approaches from the left exists if there is a value satisfying the following property: for all , there exists a such that if , then .  When this is the case we call the left-hand limit of as approaches from the left, and write . When no such exists, we say that the left-hand limit does not exist.    Right-hand limit  Assume is defined on an open interval of the form . We say the right-hand limit of as approaches from the right exists if there is a value satisfying the following property: for all , there exists a such that if , then .  When this is the case we call the right-hand limit of as approaches from the right, and write . When no such exists, we say that the right-hand limit does not exist.       Informally we can describe left- and right-handed limits in much the same way as limits. We have if we can make arbitrarily close to for all sufficiently close to, and lying to the left of . An exactly analogous statement holds for the right-hand limit statement .   Visualizing one-sided limits   Suppose is the function whose graph is given below.   Graph of function   Graph of complicated function     Describe the behavior of near the inputs , , , and using one-sided limit notation.       Neither nor exists, since the function values get arbitrarily large (and negative) as approaches from either side.   We have . Thus in this case the left- and right-handed limits of both exist, but do not agree.  We have . By contrast, does not exist as the values of oscillate wildly as approaches from the right.  We have .       One-sided limit rules  Since the definition of a one-sided limit differs from that of the limit, only in so far as we restrict our attention to inputs lying to one side or the other of the limit point  , it should come as no surprise that all the limit rules (sum, quotient, sandwich, etc.) and formulas (polynomial evaluation, rational evaluation, etc.) discussed thus far apply with equal validity to one-sided limits. This means you may compute one-sided limits with these rules in exactly the same way as you do with normal limits.   Previously our definition of limit only applied to points for which the function was defined for all on an open interval containing . The language of one-sided limits allows us to extend this definition to endpoints of the domain, as the next definition makes clear. guarantees that this definition is a consistent extension of .   Limit at endpoints of domain   Let be a function, and let .   Right endpoint  If is defined for all on an open interval , but not for all in a full open interval containing , then we say the limit of as approaches exists if exists. When this is the case, we define .    Left endpoint  If is defined for all on an open interval , but not for all in a full open interval containing , then we say the limit of as approaches exists if exists. When this is the case, we define .         One-sided limits test  As was suggested by and made official by the next theorem, exists if and only if both one-sided limits exist and are equal.   One-sided limits test   Suppose is a function defined everywhere on an open interval containing the point , except possibly at itself. The limit exists if and only if the one-sided limits and exist and are equal. Using logical shorthand: . As a consequence, if one of the one-sided limits does not exist, or if both one-sided limits exist but are not equal to one another, then the limit does not exist.     is particularly useful in that it gives us a means of potentially showing that a limit does not exist. The next classic example illustrates this nicely.   The sign function   The sign function is the function with domain defined as .  Use to decide whether exists.    We compute the left and right limits of at separately. As you will see, the piecewise nature of the definition of will make these quite easy. . We thus see that the two one-sided limits exist, but are not equal to one another. We conclude, using that the limit of at 0 does not exist.      Classic trig limits  The following classic limit formulas are proved using one-sided limits computed with the help of some lovely geometric arguments and the sandwich theorem.   Classic trig limits       .     .       I will eventually give a proof here. For now, take a look at the proof in the text.     Classic trig limits   Compute .    We give two computations. The first uses the double-angle formula. . The second uses a substitution technique that I call affine substitution . See for a discussion of its legitimacy. .     Affine substitution in limits  Our second computation of the limit in seemed to use a substitution rule of the following sort: that is, we computed a limit of the form by observing that and then computing, using the substitution , that . Intuitively this seems straightforward, since as approaches , approaches . But in fact the claim is simply not true in general! Luckily for us, the approach does work when the substitution function is of the form , a so-called affine function . As such we will use such methods without further comment.    "
},
{
  "id": "s_one_sided-2",
  "level": "2",
  "url": "s_one_sided.html#s_one_sided-2",
  "type": "Objectives",
  "number": "5",
  "title": "",
  "body": "   Provide a rigorous definition of one-sided limits.    Use one-sided limits to evaluate limits at a point.    Use limit rules and formulas for one-sided limits.    Use one-sided limits to evaluate the limit at a point.    "
},
{
  "id": "d_one_sided_limits",
  "level": "2",
  "url": "s_one_sided.html#d_one_sided_limits",
  "type": "Definition",
  "number": "5.1",
  "title": "One-sided limits.",
  "body": " One-sided limits   Let be a function, and let .   Left-hand limit  Assume is defined on an open interval of the form . We say the left-hand limit of as approaches from the left exists if there is a value satisfying the following property: for all , there exists a such that if , then .  When this is the case we call the left-hand limit of as approaches from the left, and write . When no such exists, we say that the left-hand limit does not exist.    Right-hand limit  Assume is defined on an open interval of the form . We say the right-hand limit of as approaches from the right exists if there is a value satisfying the following property: for all , there exists a such that if , then .  When this is the case we call the right-hand limit of as approaches from the right, and write . When no such exists, we say that the right-hand limit does not exist.      "
},
{
  "id": "eg_one_sided_graph",
  "level": "2",
  "url": "s_one_sided.html#eg_one_sided_graph",
  "type": "Example",
  "number": "5.2",
  "title": "Visualizing one-sided limits.",
  "body": " Visualizing one-sided limits   Suppose is the function whose graph is given below.   Graph of function   Graph of complicated function     Describe the behavior of near the inputs , , , and using one-sided limit notation.       Neither nor exists, since the function values get arbitrarily large (and negative) as approaches from either side.   We have . Thus in this case the left- and right-handed limits of both exist, but do not agree.  We have . By contrast, does not exist as the values of oscillate wildly as approaches from the right.  We have .     "
},
{
  "id": "ss_def-6",
  "level": "2",
  "url": "s_one_sided.html#ss_def-6",
  "type": "Remark",
  "number": "5.4",
  "title": "One-sided limit rules.",
  "body": " One-sided limit rules  Since the definition of a one-sided limit differs from that of the limit, only in so far as we restrict our attention to inputs lying to one side or the other of the limit point  , it should come as no surprise that all the limit rules (sum, quotient, sandwich, etc.) and formulas (polynomial evaluation, rational evaluation, etc.) discussed thus far apply with equal validity to one-sided limits. This means you may compute one-sided limits with these rules in exactly the same way as you do with normal limits.  "
},
{
  "id": "d_limit_extended",
  "level": "2",
  "url": "s_one_sided.html#d_limit_extended",
  "type": "Definition",
  "number": "5.5",
  "title": "Limit at endpoints of domain.",
  "body": " Limit at endpoints of domain   Let be a function, and let .   Right endpoint  If is defined for all on an open interval , but not for all in a full open interval containing , then we say the limit of as approaches exists if exists. When this is the case, we define .    Left endpoint  If is defined for all on an open interval , but not for all in a full open interval containing , then we say the limit of as approaches exists if exists. When this is the case, we define .      "
},
{
  "id": "th_limit_left_right",
  "level": "2",
  "url": "s_one_sided.html#th_limit_left_right",
  "type": "Theorem",
  "number": "5.6",
  "title": "One-sided limits test.",
  "body": " One-sided limits test   Suppose is a function defined everywhere on an open interval containing the point , except possibly at itself. The limit exists if and only if the one-sided limits and exist and are equal. Using logical shorthand: . As a consequence, if one of the one-sided limits does not exist, or if both one-sided limits exist but are not equal to one another, then the limit does not exist.   "
},
{
  "id": "ss_one_sided_test-5",
  "level": "2",
  "url": "s_one_sided.html#ss_one_sided_test-5",
  "type": "Example",
  "number": "5.7",
  "title": "The sign function.",
  "body": " The sign function   The sign function is the function with domain defined as .  Use to decide whether exists.    We compute the left and right limits of at separately. As you will see, the piecewise nature of the definition of will make these quite easy. . We thus see that the two one-sided limits exist, but are not equal to one another. We conclude, using that the limit of at 0 does not exist.   "
},
{
  "id": "th_trig_lims",
  "level": "2",
  "url": "s_one_sided.html#th_trig_lims",
  "type": "Theorem",
  "number": "5.8",
  "title": "Classic trig limits.",
  "body": " Classic trig limits       .     .       I will eventually give a proof here. For now, take a look at the proof in the text.   "
},
{
  "id": "eg_classic_trig",
  "level": "2",
  "url": "s_one_sided.html#eg_classic_trig",
  "type": "Example",
  "number": "5.9",
  "title": "Classic trig limits.",
  "body": " Classic trig limits   Compute .    We give two computations. The first uses the double-angle formula. . The second uses a substitution technique that I call affine substitution . See for a discussion of its legitimacy. .   "
},
{
  "id": "rm_affine_sub",
  "level": "2",
  "url": "s_one_sided.html#rm_affine_sub",
  "type": "Remark",
  "number": "5.10",
  "title": "Affine substitution in limits.",
  "body": " Affine substitution in limits  Our second computation of the limit in seemed to use a substitution rule of the following sort: that is, we computed a limit of the form by observing that and then computing, using the substitution , that . Intuitively this seems straightforward, since as approaches , approaches . But in fact the claim is simply not true in general! Luckily for us, the approach does work when the substitution function is of the form , a so-called affine function . As such we will use such methods without further comment.  "
},
{
  "id": "s_continuous_def",
  "level": "1",
  "url": "s_continuous_def.html",
  "type": "Section",
  "number": "6",
  "title": "Continuity: definition",
  "body": " Continuity: definition     Interior points and endpoints   Let be a function with domain .   Interior point  An element is an interior point of if contains an open interval that contains : , and .    Endpoints  An element is a left endpoint of if it is not an interior point of and contains an interval of the form .  An element is a right endpoint of if it is not an interior point of and contains an interval of the form . with .  An element is an endpoint of if it is either left or right endpoint.        Continuity   Let be a function with domain , and suppose is either an interior point or an endpoint of . The function is continuous at if the limit of at exists and is equal to the value of at : , if    exists, and     .   The function is discontinuous at if it is not continuous there.  For a subset , we say is continuous on if is continuous at all interior or endpoint points of lying in . We say is continuous if it is continuous on its entire domain.     Continuity at  Let be a function with domain . Observe that our definition of continuity (and discontinuity) only applies to elements of the domain. (In fact, it only applies to elements of the domain that are either interior points or endpoints.)  For example, consider the function with domain . Since is not an element of the domain of , we do not say that is continuous or discontinuous at .    Endpoints  Let be a function with domain , and let be a right endpoint of . Since by definition contains an interval of the form but not a full open interval containing , we are in a situation where only the left limit of is defined at . Recall ( ) that we define in this case. A similar remark applies to left endpoints of .    Continuity at endpoint   Let , with domain . Decide whether is continuous at .    First observe that since is a left endpoint of , we define . We compute Thus exists and is equal to 0. Since , we see further that and thus that is continuous at .     Continuity: graphical  When scanning the graph of a function for points of continuity or discontinuity, we look for problem points . These are locations on the graph where either (a) the limit of the function appears not to exist, or (b) where the limit does exist but does not agree with the value of the function.  A well-loved adage in this regard is the phrase a continuous function is one whose graph can be traced without lifting the pencil . This is cute, and helpful for guidance, but should not be taken too literally. Indeed, there are some pretty wacky continuous functions out there. For example, the function is continuous everywhere on its domain, and yet there are some peculiar properties of its graph that make it unclear it what sense it could be traced by a pencil .    Continuity: graphical   For the function whose graph is given below, find all points of discontinuity and explain what conditions of fail to attain. Make use of some of the following descriptors of discontinuities: jump , removeable , oscillating , infinite .   Graph of function   Graph of complicated function       Note that we do not speak of being continuous or discontinuous at , as this is not an element of the domain of .  The limit of at does not exist, since the left limit does not equal the right limit ( ). Thus (i) of fails, and is not continuous at . Such a discontinuity is called a jump discontinuity , as the difference between the left- and right-hand limit values is manifested graphically as a discrete jump in the height of the graph of .  The limit of at exists, and is equal to the value of at : that is, we have . Thus (i) and (ii) of are satisfied, and is continuous at .  The limit of at does not exist, since the right-hand limit does not exist. Thus (i) of fails, and is not continuous at . Such a discontinuity is called an oscillating discontinuity , as the wild oscillation is the reason why the limit does not exist.  The limit of exists at , but is not equal to the value of at . In more detail, we have . Thus is not continuous at . Such a discontinuity is called a removeable discontinuity as a simple redefining of at ( , setting ) would make the discontinuity disappear.     Continuous everywhere   Let . Prove, using that is continuous.    Let be any interior element in the implied domain of . By definition of this domain, this means . It follows that . This computation shows both that (i) exists, and (ii) , and thus by , that is continuous at . Since was an arbitrary element of the domain of , we conclude that is continuous at all points of its domain, and hence continuous.    Next we state some theorems that allow facilitate our (non-graphical) analysis of continuity for a given function. A first result provides us with a large zoo of continuous functions.   Continuous functions      Absolute value  The function is continuous everywhere on its domain. In other words, the absolute value function is a continuous function.    Polynomials and rational functions  If is either a polynomial or a rational function, then is continuous everywhere on its domain. In other words, polynomials and rational functions are continuous functions.    Trigonometric functions  The functions , , and are continuous everywhere on their domains. In other words, , , and are continuous functions.          This is a direct consequence of and .    This is a direct consequence of and .    This result actually requires some work, since currently we only have an evaluation limit formula for sine at . This gives us a chance to illustrate the affine substitution technique again. (See .) Take any . We have . The computation shows both that (i) the limit of exists at , and (ii) the limit agrees with the value of at . We conclude that is continuous at . Since was arbitrary, we conclude that is continuous everywhere, hence continuous.        Continuity rules   Assume and are both continuous at the point .   Linear combination  For all constants , the function is continuous at .    Product  The function is continuous at .    Quotient  Assume further that . The function is continuous at .    Power  Let be a positive integer. The function is continuous at .    Root rule  Let be a positive integer. If is even, assume further that . The function is continuous at .        Continuity composition rule   Assume and are functions, and suppose the range of is a subset of the domain of . If , and if is continuous at , then .  It follows that if is continuous at , then the composition is continuous at .     Continuity rules   Prove, using our various continuity rules, that the function is continuous.    Let be an interior element of the domain of . Recall that by definition is in the domain of if and only if we can evaluate the defining formula of at . Thus we have .  Now, let , and let . Since is continuous everywhere, the power rule for continuity implies is continuous at . Since is continuous at and , it follows from the root rule for continuity that is continuous at . Since furthermore , the quotient rule for continuity implies is continuous at .  Next, another application of the root rule for continuity implies is continuous at . Lastly, since the absolute value function is continuous and is continuous at , we conclude from that is continuous at . Since was an arbitrary interior element of the domain of , we conclude that is continuous.    "
},
{
  "id": "d_interior_endpoint",
  "level": "2",
  "url": "s_continuous_def.html#d_interior_endpoint",
  "type": "Definition",
  "number": "6.1",
  "title": "Interior points and endpoints.",
  "body": " Interior points and endpoints   Let be a function with domain .   Interior point  An element is an interior point of if contains an open interval that contains : , and .    Endpoints  An element is a left endpoint of if it is not an interior point of and contains an interval of the form .  An element is a right endpoint of if it is not an interior point of and contains an interval of the form . with .  An element is an endpoint of if it is either left or right endpoint.      "
},
{
  "id": "d_continuity",
  "level": "2",
  "url": "s_continuous_def.html#d_continuity",
  "type": "Definition",
  "number": "6.2",
  "title": "Continuity.",
  "body": " Continuity   Let be a function with domain , and suppose is either an interior point or an endpoint of . The function is continuous at if the limit of at exists and is equal to the value of at : , if    exists, and     .   The function is discontinuous at if it is not continuous there.  For a subset , we say is continuous on if is continuous at all interior or endpoint points of lying in . We say is continuous if it is continuous on its entire domain.   "
},
{
  "id": "s_continuous_def-5",
  "level": "2",
  "url": "s_continuous_def.html#s_continuous_def-5",
  "type": "Remark",
  "number": "6.3",
  "title": "Continuity at <span xmlns:pf=\"https:\/\/prefigure.org\" class=\"process-math\">\\(a\\)<\/span>.",
  "body": " Continuity at  Let be a function with domain . Observe that our definition of continuity (and discontinuity) only applies to elements of the domain. (In fact, it only applies to elements of the domain that are either interior points or endpoints.)  For example, consider the function with domain . Since is not an element of the domain of , we do not say that is continuous or discontinuous at .  "
},
{
  "id": "s_continuous_def-6",
  "level": "2",
  "url": "s_continuous_def.html#s_continuous_def-6",
  "type": "Remark",
  "number": "6.4",
  "title": "Endpoints.",
  "body": " Endpoints  Let be a function with domain , and let be a right endpoint of . Since by definition contains an interval of the form but not a full open interval containing , we are in a situation where only the left limit of is defined at . Recall ( ) that we define in this case. A similar remark applies to left endpoints of .  "
},
{
  "id": "eg_cont_endpoint",
  "level": "2",
  "url": "s_continuous_def.html#eg_cont_endpoint",
  "type": "Example",
  "number": "6.5",
  "title": "Continuity at endpoint.",
  "body": " Continuity at endpoint   Let , with domain . Decide whether is continuous at .    First observe that since is a left endpoint of , we define . We compute Thus exists and is equal to 0. Since , we see further that and thus that is continuous at .   "
},
{
  "id": "s_continuous_def-8",
  "level": "2",
  "url": "s_continuous_def.html#s_continuous_def-8",
  "type": "Remark",
  "number": "6.6",
  "title": "Continuity: graphical.",
  "body": " Continuity: graphical  When scanning the graph of a function for points of continuity or discontinuity, we look for problem points . These are locations on the graph where either (a) the limit of the function appears not to exist, or (b) where the limit does exist but does not agree with the value of the function.  A well-loved adage in this regard is the phrase a continuous function is one whose graph can be traced without lifting the pencil . This is cute, and helpful for guidance, but should not be taken too literally. Indeed, there are some pretty wacky continuous functions out there. For example, the function is continuous everywhere on its domain, and yet there are some peculiar properties of its graph that make it unclear it what sense it could be traced by a pencil .  "
},
{
  "id": "eg_cont_graph",
  "level": "2",
  "url": "s_continuous_def.html#eg_cont_graph",
  "type": "Example",
  "number": "6.7",
  "title": "Continuity: graphical.",
  "body": " Continuity: graphical   For the function whose graph is given below, find all points of discontinuity and explain what conditions of fail to attain. Make use of some of the following descriptors of discontinuities: jump , removeable , oscillating , infinite .   Graph of function   Graph of complicated function       Note that we do not speak of being continuous or discontinuous at , as this is not an element of the domain of .  The limit of at does not exist, since the left limit does not equal the right limit ( ). Thus (i) of fails, and is not continuous at . Such a discontinuity is called a jump discontinuity , as the difference between the left- and right-hand limit values is manifested graphically as a discrete jump in the height of the graph of .  The limit of at exists, and is equal to the value of at : that is, we have . Thus (i) and (ii) of are satisfied, and is continuous at .  The limit of at does not exist, since the right-hand limit does not exist. Thus (i) of fails, and is not continuous at . Such a discontinuity is called an oscillating discontinuity , as the wild oscillation is the reason why the limit does not exist.  The limit of exists at , but is not equal to the value of at . In more detail, we have . Thus is not continuous at . Such a discontinuity is called a removeable discontinuity as a simple redefining of at ( , setting ) would make the discontinuity disappear.   "
},
{
  "id": "eg_cont_on_domain",
  "level": "2",
  "url": "s_continuous_def.html#eg_cont_on_domain",
  "type": "Example",
  "number": "6.9",
  "title": "Continuous everywhere.",
  "body": " Continuous everywhere   Let . Prove, using that is continuous.    Let be any interior element in the implied domain of . By definition of this domain, this means . It follows that . This computation shows both that (i) exists, and (ii) , and thus by , that is continuous at . Since was an arbitrary element of the domain of , we conclude that is continuous at all points of its domain, and hence continuous.   "
},
{
  "id": "th_cont_poly_rational",
  "level": "2",
  "url": "s_continuous_def.html#th_cont_poly_rational",
  "type": "Theorem",
  "number": "6.10",
  "title": "Continuous functions.",
  "body": " Continuous functions      Absolute value  The function is continuous everywhere on its domain. In other words, the absolute value function is a continuous function.    Polynomials and rational functions  If is either a polynomial or a rational function, then is continuous everywhere on its domain. In other words, polynomials and rational functions are continuous functions.    Trigonometric functions  The functions , , and are continuous everywhere on their domains. In other words, , , and are continuous functions.          This is a direct consequence of and .    This is a direct consequence of and .    This result actually requires some work, since currently we only have an evaluation limit formula for sine at . This gives us a chance to illustrate the affine substitution technique again. (See .) Take any . We have . The computation shows both that (i) the limit of exists at , and (ii) the limit agrees with the value of at . We conclude that is continuous at . Since was arbitrary, we conclude that is continuous everywhere, hence continuous.      "
},
{
  "id": "th_cont_rules",
  "level": "2",
  "url": "s_continuous_def.html#th_cont_rules",
  "type": "Theorem",
  "number": "6.11",
  "title": "Continuity rules.",
  "body": " Continuity rules   Assume and are both continuous at the point .   Linear combination  For all constants , the function is continuous at .    Product  The function is continuous at .    Quotient  Assume further that . The function is continuous at .    Power  Let be a positive integer. The function is continuous at .    Root rule  Let be a positive integer. If is even, assume further that . The function is continuous at .      "
},
{
  "id": "th_cont_comp",
  "level": "2",
  "url": "s_continuous_def.html#th_cont_comp",
  "type": "Theorem",
  "number": "6.12",
  "title": "Continuity composition rule.",
  "body": " Continuity composition rule   Assume and are functions, and suppose the range of is a subset of the domain of . If , and if is continuous at , then .  It follows that if is continuous at , then the composition is continuous at .   "
},
{
  "id": "eg_cont_rules",
  "level": "2",
  "url": "s_continuous_def.html#eg_cont_rules",
  "type": "Example",
  "number": "6.13",
  "title": "Continuity rules.",
  "body": " Continuity rules   Prove, using our various continuity rules, that the function is continuous.    Let be an interior element of the domain of . Recall that by definition is in the domain of if and only if we can evaluate the defining formula of at . Thus we have .  Now, let , and let . Since is continuous everywhere, the power rule for continuity implies is continuous at . Since is continuous at and , it follows from the root rule for continuity that is continuous at . Since furthermore , the quotient rule for continuity implies is continuous at .  Next, another application of the root rule for continuity implies is continuous at . Lastly, since the absolute value function is continuous and is continuous at , we conclude from that is continuous at . Since was an arbitrary interior element of the domain of , we conclude that is continuous.   "
},
{
  "id": "s_cont_ivt",
  "level": "1",
  "url": "s_cont_ivt.html",
  "type": "Section",
  "number": "7",
  "title": "Continuity: intermediate value theorem",
  "body": " Continuity: intermediate value theorem     Investigate continuity properties of piecewise-defined functions.    Understand the statement and utility of the intermediate value theorem (IVT).    Use the IVT to argue that a function assumes a particular value.    Use the IVT to prove the existence of solutions to a given equation.    Use the IVT to determine the range of a continuous function.      Continuity of piecewise defined functions  As you may have gathered by now, most of the functions that we write down via formula are essentially automatically continuous. This is a formal consequence of . Since most formulas we use are built up using some basic continuous functions (polynomials, rational functions, trig functions), and some operations that preserve continuity (sum, product, quotient, ), it follows that such formulas end up defining continuous functions.  In this sense it is actually somewhat difficult to write down a discontinuous function, at least if we restrict ourselves to using formulas of the type described above. Piecewise-defined functions give us an easy way of getting around this issue, providing us with a useful source of functions that potentially have discontinuities. Of course, being defined in a piecewise manner does not guarantee the existence of a continuity; consider for the example the absolute value function , which is continuous, but defined piecewise as . The example below illustrates in general how we determine whether a piecewise-defined function is continuous at various inputs.   Continuity: piecewise   Let be defined as , where is a fixed constant.   Argue that is continuous at all inputs .    Find all values of for which is continuous at the input , and hence everywhere.          Take any with .  If , then for inputs near . Since is a polynomial, and since polynomials are continuous on their domain, it follows that is continuous at .  Similarly, if , then for inputs near . Again since is a polynomial, it is continuous at all such inputs, and hence also at .  This shows that is continuous at for all , no matter what the value of .    We use the definition of continuity to see what must satisfy for to be differentiable at . Namely, this is true if and only if    exists, and further       . Condition (i) holds if and only if . We compute both one-sided limits: . We see that (i) is satisfied if and only if , or , which is true if and only if or .  It remains to determine which choices of guarantee condition (ii). We claim that both work: indeed, since both and guarantee that , and since using the piecewise definition, we conclude that for both choices of we have , as desired.   The figure below shows the resulting graph for , taking and . You can think of condition (i) as guaranteeing that our two linear segments join up correctly at .  Graphs of : and      Graph of piecewise-defined function        Graph of piecewise-defined function            Intermediate value theorem  Recall the cute informal description of a continuous function as one whose graph can be traced without lifting your pencil. This can be further interpreted as saying that as we trace a segment of the graph lying over some interval in the -axis, it should not be possible to skip over a particular -value. Indeed, to skip this value, we would have to lift our pencil. This seems plausible, starting from our cutesy informal description of continuity, but can we prove it rigorously? Yes, we can as witnessed by the intermediate value theorem .   Intermediate value theorem (IVT)   Let be continuous on the closed interval . If , then given any value lying strictly between and , there is an element such that .     IVT and existence of solutions  A common application of the IVT is to prove that an equation of the form has a solution in a given open interval . Indeed, if is continuous on , and if lies strictly between and , then the IVT guarantees the existence of an element satisfying .  Interestingly, however, this method does not actually provide the solution ; it only tells us that it exists. This is probably the first time you have encountered what is called a nonconstructive proof in mathematics. The theorem tells us that the value exists (assuming the necessary conditions hold), but does not explicitly tell us what is.    Sine equation   Prove that the equation has a solution that lies in the interval .    Note that is continuous on , and that . Since , the IVT implies that for every there is an input such that . In other words, the given equation has a solution lying in the interval .     Roots of polynomials   Show that the polynomial has a root.    A root of is an input satisfying . Since is continuous everywhere, the IVT will guarantee the existence of such a as long as we can find inputs , satisfying and . Let's make a table of values of for small inputs : . This so far is not helpful to us, as all the values are positive. Let's try another negative value: . That's more like it! Since is continuous on , and since , the IVT now implies there is a such that .  Observe that this not only shows that has a real root, it tells us further that there is a root lying between -2 and -1. Are there any other roots of this function? Further investigation is required. We will have the tools to answer this later.     Complicated equation   Prove that the equation has a solution.    To get this problem into a state where we can apply the IVT, we rewrite the equation as and define . Thus we are looking for a solution to . As with , this will boil down to finding inputs where is positive and negative, respectively. Let's create a table of values for : . We observe that . Since is continuous on , the IVT now implies there is an element satisfying . Thus we have shown, not only that there is a solution, but one lying in this particular interval.  Note that the same reasoning tells us there is another solution between and . That is the inequality implies there is another solution lying between and . Thus, we are able to roughly locate two solutions to the original equation, using the IVT twice.  Note: since the given function happens to be even ( ), from our first solution lying in we obtain a second solution lying in .    Recall that the range of a function is the set of all outputs of : . The intermediate value theorem implies that if is a continuous function and is an interval, then given any two values , if , then . This observation often allows us to explicitly compute the range of a continuous function.   Range of sine   Prove that the range of the sine function is the entire interval .    Since by definition is the -value of a certain point lying on the unit circle, and since all such -values lie between and , we know that for all . Note that so far this only tells us that the outputs of form a subset of : that is, this only tells us that . To show this set inclusion is in fact a set equality , we need to show that given any , : , given any , there is an such that .  To this end, note that and . Thus . Furthermore given any , since is continuous on , and since , we conclude by the IVT that there is an element satisfying . Thus , as desired.     "
},
{
  "id": "s_cont_ivt-2",
  "level": "2",
  "url": "s_cont_ivt.html#s_cont_ivt-2",
  "type": "Objectives",
  "number": "7",
  "title": "",
  "body": "   Investigate continuity properties of piecewise-defined functions.    Understand the statement and utility of the intermediate value theorem (IVT).    Use the IVT to argue that a function assumes a particular value.    Use the IVT to prove the existence of solutions to a given equation.    Use the IVT to determine the range of a continuous function.    "
},
{
  "id": "eg_cont_piecewise",
  "level": "2",
  "url": "s_cont_ivt.html#eg_cont_piecewise",
  "type": "Example",
  "number": "7.1",
  "title": "Continuity: piecewise.",
  "body": " Continuity: piecewise   Let be defined as , where is a fixed constant.   Argue that is continuous at all inputs .    Find all values of for which is continuous at the input , and hence everywhere.          Take any with .  If , then for inputs near . Since is a polynomial, and since polynomials are continuous on their domain, it follows that is continuous at .  Similarly, if , then for inputs near . Again since is a polynomial, it is continuous at all such inputs, and hence also at .  This shows that is continuous at for all , no matter what the value of .    We use the definition of continuity to see what must satisfy for to be differentiable at . Namely, this is true if and only if    exists, and further       . Condition (i) holds if and only if . We compute both one-sided limits: . We see that (i) is satisfied if and only if , or , which is true if and only if or .  It remains to determine which choices of guarantee condition (ii). We claim that both work: indeed, since both and guarantee that , and since using the piecewise definition, we conclude that for both choices of we have , as desired.   The figure below shows the resulting graph for , taking and . You can think of condition (i) as guaranteeing that our two linear segments join up correctly at .  Graphs of : and      Graph of piecewise-defined function        Graph of piecewise-defined function         "
},
{
  "id": "th_ivt",
  "level": "2",
  "url": "s_cont_ivt.html#th_ivt",
  "type": "Theorem",
  "number": "7.3",
  "title": "Intermediate value theorem (IVT).",
  "body": " Intermediate value theorem (IVT)   Let be continuous on the closed interval . If , then given any value lying strictly between and , there is an element such that .   "
},
{
  "id": "rm_IVT_solutions",
  "level": "2",
  "url": "s_cont_ivt.html#rm_IVT_solutions",
  "type": "Remark",
  "number": "7.4",
  "title": "IVT and existence of solutions.",
  "body": " IVT and existence of solutions  A common application of the IVT is to prove that an equation of the form has a solution in a given open interval . Indeed, if is continuous on , and if lies strictly between and , then the IVT guarantees the existence of an element satisfying .  Interestingly, however, this method does not actually provide the solution ; it only tells us that it exists. This is probably the first time you have encountered what is called a nonconstructive proof in mathematics. The theorem tells us that the value exists (assuming the necessary conditions hold), but does not explicitly tell us what is.  "
},
{
  "id": "eg_ivt_sine",
  "level": "2",
  "url": "s_cont_ivt.html#eg_ivt_sine",
  "type": "Example",
  "number": "7.5",
  "title": "Sine equation.",
  "body": " Sine equation   Prove that the equation has a solution that lies in the interval .    Note that is continuous on , and that . Since , the IVT implies that for every there is an input such that . In other words, the given equation has a solution lying in the interval .   "
},
{
  "id": "eg_ivt_poly",
  "level": "2",
  "url": "s_cont_ivt.html#eg_ivt_poly",
  "type": "Example",
  "number": "7.6",
  "title": "Roots of polynomials.",
  "body": " Roots of polynomials   Show that the polynomial has a root.    A root of is an input satisfying . Since is continuous everywhere, the IVT will guarantee the existence of such a as long as we can find inputs , satisfying and . Let's make a table of values of for small inputs : . This so far is not helpful to us, as all the values are positive. Let's try another negative value: . That's more like it! Since is continuous on , and since , the IVT now implies there is a such that .  Observe that this not only shows that has a real root, it tells us further that there is a root lying between -2 and -1. Are there any other roots of this function? Further investigation is required. We will have the tools to answer this later.   "
},
{
  "id": "eg_ivt_trig",
  "level": "2",
  "url": "s_cont_ivt.html#eg_ivt_trig",
  "type": "Example",
  "number": "7.7",
  "title": "Complicated equation.",
  "body": " Complicated equation   Prove that the equation has a solution.    To get this problem into a state where we can apply the IVT, we rewrite the equation as and define . Thus we are looking for a solution to . As with , this will boil down to finding inputs where is positive and negative, respectively. Let's create a table of values for : . We observe that . Since is continuous on , the IVT now implies there is an element satisfying . Thus we have shown, not only that there is a solution, but one lying in this particular interval.  Note that the same reasoning tells us there is another solution between and . That is the inequality implies there is another solution lying between and . Thus, we are able to roughly locate two solutions to the original equation, using the IVT twice.  Note: since the given function happens to be even ( ), from our first solution lying in we obtain a second solution lying in .   "
},
{
  "id": "ss_ivt-9",
  "level": "2",
  "url": "s_cont_ivt.html#ss_ivt-9",
  "type": "Example",
  "number": "7.8",
  "title": "Range of sine.",
  "body": " Range of sine   Prove that the range of the sine function is the entire interval .    Since by definition is the -value of a certain point lying on the unit circle, and since all such -values lie between and , we know that for all . Note that so far this only tells us that the outputs of form a subset of : that is, this only tells us that . To show this set inclusion is in fact a set equality , we need to show that given any , : , given any , there is an such that .  To this end, note that and . Thus . Furthermore given any , since is continuous on , and since , we conclude by the IVT that there is an element satisfying . Thus , as desired.   "
},
{
  "id": "s_lim_at_infty",
  "level": "1",
  "url": "s_lim_at_infty.html",
  "type": "Section",
  "number": "8",
  "title": "Limits at infinity",
  "body": " Limits at infinity     Give formal definition of limit of function at (plus and minus) infinity.    Investigate limits at infinity graphically.    Introduce valid rules and formulas for limits at infinity.    Evaluate limits at infinity using limit rules and formulas.    Define horizontal asymptotes using language of limits at infinity.     We motivated the introduction of limit notation as a useful and precise way of describing the behavior of the values of a function as its inputs approach a fixed real number . It is natural to ask, however, how the values of vary as inputs move off to infinity in the positive or negative direction. For example, suppose the number of sales of a product is given as a function , where is the number of days since the product's introduction to the market. Naturally, a sales team would be interested in what happens to as goes to infinity. The definition below makes rigorous sense of this going to infinity business. Notice that it is not so very different than our usual epsilon-delta definition of the limit.   Limits at infinity      Limit at  Suppose is defined on an open interval of the form . We say that the limit of at positive infinity (or at ) exists if there is a value satisfying the following property: for all , there exists a such that if , then . Using logical shorthand: . When this is the case, we call the limit of as approaches positive infinity (or ), and write .    Limit at  Suppose is defined on an open interval of the form . We say that the limit of at negative infinity (or at ) exists if there is a value satisfying the following property: for all , there exists a such that if , then . Using logical shorthand: . When this is the case, we call the limit of as approaches negative infinity (or ), and write .        Limits at infinity: informal  Informally, we have if we can make arbitrarily close to for all inputs that are sufficiently large and positive. It is useful to think of the in the formal definition as a large positive number such that is guaranteed to be within of for all is greater than ( , to the right of) .  Similarly, we have if we can make arbitrarily close to for all inputs that are sufficiently large and negative. In this case, it is useful to think of the in the formal definition as a large negative number such that is guaranteed to be within of for all less than ( , to the left of) .    At infinity versus at a point  The limit at infinity notation is very similar to the limit at a point notation: . That said, do not make the mistake of thinking that we are somehow treating infinity as if it were an actual real number. Think of our new notation as an extended version of our old notation. The in the subscript is just a sort of shorthand for saying as gets sufficiently large and positive . In fact, so useful is this shorthand, that you will see us use it frequently on its own, outside of the limit notation.   Graphically speaking, if , then the -values of points on the graph of will get closer and closer to , as . This means the graph of will get arbitrarily close to the horizontal line for points lying further and further to the right. A similar observation holds if the limit at exists. This is illustrated in for the graph of a function that satisfies .   Graph of function satisfying and   Graph of function with horizontal asymptotes     When a curve in the plane behaves in such a manner, we say that it has a horizontal asymptote. We give a formal definition of this below for the graph of a function, using limit-at-infinity notation.   Horizontal asymptote   The line is a horizontal asymptote of the graph of a function if or .    The existence or nonexistence of horizontal asymptotes for the graph of a function gives us an easy visual way of deciding whether limits at infinity exist.   Limit at infinity:   Let .   Provide a graph of over its entire domain.    Argue graphically whether the infinite limits exist.       From the graph of in , we see visually that there are no horizontal asymptotes: in more detail, since oscillate between consistently between and as , there is no one fixed value that the values of approach. Thus the limits of at and do not exist.  Graph of   Graph of cosine        Fix a positive integer and define as . We recall that the graph of such a function looks like one of the graphs in , depending on whether is even or odd.   Graphs of , for positive integer .    odd   Graph of reciprocal power function      even   Graph of reciprocal power function       In all cases we see that the graph of any such function has both as a right and left asymptote. This suggests that . The theorem below makes this observation official.   Limit at infinity: reciprocal power functions   Let , where is a positive integer. We have .     Limit at infinity laws  It is not so surprising that at infinity limits satisfy at infinity versions of the limit rules in , as we as the sandwich theorem. Note, however, that our various evaluation limit formulas ( , polynomial evaluation) do not extend to limits at infinity, as it simply makes no sense to evaluate a function at : that is, it simply makes no sense to write or .  It is worth stating explicitly the at infinity version of the replacement rule , which has a slightly different flavor than the original version. We do so only for positive infinity: suppose and are defined on an open interval and that exists; if there exists an such that for all , then . In plain English: if and are eventually equal to one another, than their limits at are equal.   The formulas in give us a decent starting point in terms of computing limits at infinity. Combining these formulas and with limit rules, we can compute limits at infinity for more complicated functions. In order to make use of , however, we often have to include an algebra step first.   Limit at infinity: rational function   Let . Compute and .    Note that both the numerator and denominator approach as . Our intuition is that the highest power of is the dominant term for large . To crystallize this intuition algebraically, we factor out the in the top and bottom, after first dealing with the absolute value: .     Limit at infinity: radical function   Let . Compute .    Again we have a situation where the numerator and denominator both approach . Using the same intuition as above, we guess that the term under the radical is the dominant one, as is the term in the denominator. We make rigorous this intuition by factoring these out. Note how we must be careful with the radical simplification. In particular, we use the fact that , and then deal with the absolute value appropriately: .    "
},
{
  "id": "s_lim_at_infty-2",
  "level": "2",
  "url": "s_lim_at_infty.html#s_lim_at_infty-2",
  "type": "Objectives",
  "number": "8",
  "title": "",
  "body": "   Give formal definition of limit of function at (plus and minus) infinity.    Investigate limits at infinity graphically.    Introduce valid rules and formulas for limits at infinity.    Evaluate limits at infinity using limit rules and formulas.    Define horizontal asymptotes using language of limits at infinity.    "
},
{
  "id": "d_lim_at_infty",
  "level": "2",
  "url": "s_lim_at_infty.html#d_lim_at_infty",
  "type": "Definition",
  "number": "8.1",
  "title": "Limits at infinity.",
  "body": " Limits at infinity      Limit at  Suppose is defined on an open interval of the form . We say that the limit of at positive infinity (or at ) exists if there is a value satisfying the following property: for all , there exists a such that if , then . Using logical shorthand: . When this is the case, we call the limit of as approaches positive infinity (or ), and write .    Limit at  Suppose is defined on an open interval of the form . We say that the limit of at negative infinity (or at ) exists if there is a value satisfying the following property: for all , there exists a such that if , then . Using logical shorthand: . When this is the case, we call the limit of as approaches negative infinity (or ), and write .      "
},
{
  "id": "s_lim_at_infty-5",
  "level": "2",
  "url": "s_lim_at_infty.html#s_lim_at_infty-5",
  "type": "Remark",
  "number": "8.2",
  "title": "Limits at infinity: informal.",
  "body": " Limits at infinity: informal  Informally, we have if we can make arbitrarily close to for all inputs that are sufficiently large and positive. It is useful to think of the in the formal definition as a large positive number such that is guaranteed to be within of for all is greater than ( , to the right of) .  Similarly, we have if we can make arbitrarily close to for all inputs that are sufficiently large and negative. In this case, it is useful to think of the in the formal definition as a large negative number such that is guaranteed to be within of for all less than ( , to the left of) .  "
},
{
  "id": "s_lim_at_infty-6",
  "level": "2",
  "url": "s_lim_at_infty.html#s_lim_at_infty-6",
  "type": "Remark",
  "number": "8.3",
  "title": "At infinity versus at a point.",
  "body": " At infinity versus at a point  The limit at infinity notation is very similar to the limit at a point notation: . That said, do not make the mistake of thinking that we are somehow treating infinity as if it were an actual real number. Think of our new notation as an extended version of our old notation. The in the subscript is just a sort of shorthand for saying as gets sufficiently large and positive . In fact, so useful is this shorthand, that you will see us use it frequently on its own, outside of the limit notation.  "
},
{
  "id": "fig_lim_at_infty",
  "level": "2",
  "url": "s_lim_at_infty.html#fig_lim_at_infty",
  "type": "Figure",
  "number": "8.4",
  "title": "",
  "body": " Graph of function satisfying and   Graph of function with horizontal asymptotes    "
},
{
  "id": "d_horizontal_asymptote",
  "level": "2",
  "url": "s_lim_at_infty.html#d_horizontal_asymptote",
  "type": "Definition",
  "number": "8.5",
  "title": "Horizontal asymptote.",
  "body": " Horizontal asymptote   The line is a horizontal asymptote of the graph of a function if or .   "
},
{
  "id": "eg_lim_at_infty_cos",
  "level": "2",
  "url": "s_lim_at_infty.html#eg_lim_at_infty_cos",
  "type": "Example",
  "number": "8.6",
  "title": "Limit at infinity: <span xmlns:pf=\"https:\/\/prefigure.org\" class=\"process-math\">\\(\\cos\\)<\/span>.",
  "body": " Limit at infinity:   Let .   Provide a graph of over its entire domain.    Argue graphically whether the infinite limits exist.       From the graph of in , we see visually that there are no horizontal asymptotes: in more detail, since oscillate between consistently between and as , there is no one fixed value that the values of approach. Thus the limits of at and do not exist.  Graph of   Graph of cosine       "
},
{
  "id": "fig_reciprocal",
  "level": "2",
  "url": "s_lim_at_infty.html#fig_reciprocal",
  "type": "Figure",
  "number": "8.8",
  "title": "",
  "body": " Graphs of , for positive integer .    odd   Graph of reciprocal power function      even   Graph of reciprocal power function      "
},
{
  "id": "th_recip_powers",
  "level": "2",
  "url": "s_lim_at_infty.html#th_recip_powers",
  "type": "Theorem",
  "number": "8.9",
  "title": "Limit at infinity: reciprocal power functions.",
  "body": " Limit at infinity: reciprocal power functions   Let , where is a positive integer. We have .   "
},
{
  "id": "s_lim_at_infty-17",
  "level": "2",
  "url": "s_lim_at_infty.html#s_lim_at_infty-17",
  "type": "Remark",
  "number": "8.10",
  "title": "Limit at infinity laws.",
  "body": " Limit at infinity laws  It is not so surprising that at infinity limits satisfy at infinity versions of the limit rules in , as we as the sandwich theorem. Note, however, that our various evaluation limit formulas ( , polynomial evaluation) do not extend to limits at infinity, as it simply makes no sense to evaluate a function at : that is, it simply makes no sense to write or .  It is worth stating explicitly the at infinity version of the replacement rule , which has a slightly different flavor than the original version. We do so only for positive infinity: suppose and are defined on an open interval and that exists; if there exists an such that for all , then . In plain English: if and are eventually equal to one another, than their limits at are equal.  "
},
{
  "id": "eg_lim_infty_rational_function",
  "level": "2",
  "url": "s_lim_at_infty.html#eg_lim_infty_rational_function",
  "type": "Example",
  "number": "8.11",
  "title": "Limit at infinity: rational function.",
  "body": " Limit at infinity: rational function   Let . Compute and .    Note that both the numerator and denominator approach as . Our intuition is that the highest power of is the dominant term for large . To crystallize this intuition algebraically, we factor out the in the top and bottom, after first dealing with the absolute value: .   "
},
{
  "id": "eg_lim_infty_radical",
  "level": "2",
  "url": "s_lim_at_infty.html#eg_lim_infty_radical",
  "type": "Example",
  "number": "8.12",
  "title": "Limit at infinity: radical function.",
  "body": " Limit at infinity: radical function   Let . Compute .    Again we have a situation where the numerator and denominator both approach . Using the same intuition as above, we guess that the term under the radical is the dominant one, as is the term in the denominator. We make rigorous this intuition by factoring these out. Note how we must be careful with the radical simplification. In particular, we use the fact that , and then deal with the absolute value appropriately: .   "
},
{
  "id": "s_infinite_limits",
  "level": "1",
  "url": "s_infinite_limits.html",
  "type": "Section",
  "number": "9",
  "title": "Infinite limits",
  "body": " Infinite limits     Provide a rigorous definition of infinite limits at points and at infinity.    Investigate infinite limits graphically.    Define vertical asymptotes using language of infinite limits.    Develop computation techniques for infinite limits.      Infinite limits (informal)   Let be a function.   Infinite limits at  Fix and assume is defined everywhere on an open interval containing , except possibly at itself. We say that has limit (resp., limit ) at if the values of can be made arbitrarily large and positive (resp. arbitrarily large and negative) provided is sufficiently close (but not equal) to . We write (resp., ) when this is the case.    Infinite limit at  Assume is defined on an open interval of the form . We say that has limit (resp., limit ) at if the values of can be made arbitrarily large and positive (resp. arbitrarily large and negative) provided is sufficiently large and positive. We write (resp., ) when this is the case.    Infinite limit at  Assume is defined on an open interval of the form . We say that has limit (resp., limit ) at if the values of can be made arbitrarily large and positive (resp. arbitrarily large and negative) provided is sufficiently large and negative. We write (resp., ) when this is the case.        Infinite limits  It is important to observe that the various notions of infinite limit defined in all cover situations where the limit of the function does not exist . The best way to understand an infinite limit statement of the form , where denotes either a real number, , or , is as an assertion that   the limit in question does not exist, and    its failure to exist is due to values of the function getting arbitrarily large (in positive or negative direction) as approaches .   Accordingly, we must understand this new notation as an extended version of our original limit notation. In particular, we are not treating or here as if they were actual real numbers.    One-sided infinite limits  Yet more variants of infinite limits can be defined for one-sided limits: that is, we can make sense of the following statements for any : . We thought was long enough as it is.    Vertical asymptote   Fix a constant . The line is a vertical asymptote of the graph of a function if at least one the of the following conditions holds: .     Vertical asymptotes:   Let . Recall that the domain of is .   Sketch a graph of on its entire domain.    Find any and all vertical or horizontal asymptotes of .          The graph of is given below.  Graph of   Graph of tan        For each integer , let . We see visually that for all , and hence that each line is a vertical asymptote of the graph of .       As illustrated by , infinite limit formulas can be easily deduced from graphs of familiar functions. can be thought of as directly translating properties of the graphs of power functions and their reciprocals into limit statements.   Power functions and their reciprocals   Let be a positive integer.     The next theorem helps us to compute the limit of functions built from other functions that may have infinite limits. Instead of trying to commit all the details of this theorem to memory, it is easier to understand the simple arithmetical arguments that go into establishing these results. For example, the fact that if and , then , essentially follows from the fact that if the numerator is approaching some finite number as , while the denominator gets arbitrarily large, then the quotient is roughly described as divided by a very large number, which is very small. Thus the limit is equal to 0.  All of the arguments behind the results of are of a similar elementary nature. The type descriptions of each result ( , , , ) should be thought of as helpful shorthand for the simple principles at work. You should use these in the parenthetical justifications of steps in an infinite limit computation. Note that the type descriptions alone don't indicate the sign ( ) of your result: , a limit computation of type , can yield or , depending on the behavior of the functions near the limit point .   Infinite limit formulas   In what follows denotes either a real number or . Assume that and are both infinite.   Type  If for some , then     Type       Type       Type  If for some , then     Type  If for some , then .    Type  If and , then     Type  If is a positive integer, then     Type  If is a positive integer, then        Let's see how to write up our work when making use of the results of . The explanations in these situations tend to be slightly less streamlined than usual. This is in large part a result of the fact that in these situations we cannot make use of our usual limit rules ( , sum, product, quotient, ); and this is so precisely because those rules require that the limits involved exist!   Infinite limit: elementary examples   Compute the following limits. Your answer should be either a real number, , or .                   Our thinking is as follows: the function in question if of the form , where as and as . This is thus a limit of type , according to , and so should be equal to . Let's write this up more concisely, and determine the correct sign: , since , , and for positive close to .    In this case a quick appraisal tells us that the limit in question will fall under type , and thus should be equal to (sign to be determined). Here is how we can formally write this up: , since . Furthermore, this last limit holds since , and is negative for all near to and less than .        Infinite limit: polynomial   Compute . Your answer should be a real number or .    Note first that ( ), and (type ). Unfortunately, we do not have any infinite limit principles with descriptive type , so we cannot use any of the results of directly. Instead, we first do some algebra, using our intuition that the term dominates the term: , since and .     Limit at infinity: rational functions   Assume we are given polynomials and , where and are nonzero constants.   Equal degree  If , then .    Denominator degree bigger  If , then .    Numerator degree bigger  If , then . Furthermore, both these limits are infinite. However, their sign depends on whether is positive or negative, and whether is even or odd. Alternatively, the sign of the limit depends on the limits of and at and , respectively.  Since both limits at infinity do not exist, does not have any horizontal asymptotes.        Asymptotes: rational function   Let . Find all and any horizontal and vertical asymptotes of . For any vertical asymptotes, compute both one-sided limits.     Horizontal asymptotes  For our horizontal asymptote investigation we compute the limits at infinity of . At we have since , and is negative eventually as .  At we have since , and is positive eventually as .    Vertical asymptotes  We have . Since is continuous everywhere on its domain, the only candidates for vertical asymptotes are the lines and . We investigate the limits at these points: . Since the limit exists here, the line is not a vertical asymptote.  We now compute the one-sided limits at . We have , since , , and is positive for all close to and less than . Since once of the one-sided limits is infinite, we conclude that is a vertical asymptote of the graph of .  We are asked to compute the other one-sided limit. The computation is similar: , since , , and is negative for all close to and greater than .     "
},
{
  "id": "s_infinite_limits-2",
  "level": "2",
  "url": "s_infinite_limits.html#s_infinite_limits-2",
  "type": "Objectives",
  "number": "9",
  "title": "",
  "body": "   Provide a rigorous definition of infinite limits at points and at infinity.    Investigate infinite limits graphically.    Define vertical asymptotes using language of infinite limits.    Develop computation techniques for infinite limits.    "
},
{
  "id": "d_infty_lims",
  "level": "2",
  "url": "s_infinite_limits.html#d_infty_lims",
  "type": "Definition",
  "number": "9.1",
  "title": "Infinite limits (informal).",
  "body": " Infinite limits (informal)   Let be a function.   Infinite limits at  Fix and assume is defined everywhere on an open interval containing , except possibly at itself. We say that has limit (resp., limit ) at if the values of can be made arbitrarily large and positive (resp. arbitrarily large and negative) provided is sufficiently close (but not equal) to . We write (resp., ) when this is the case.    Infinite limit at  Assume is defined on an open interval of the form . We say that has limit (resp., limit ) at if the values of can be made arbitrarily large and positive (resp. arbitrarily large and negative) provided is sufficiently large and positive. We write (resp., ) when this is the case.    Infinite limit at  Assume is defined on an open interval of the form . We say that has limit (resp., limit ) at if the values of can be made arbitrarily large and positive (resp. arbitrarily large and negative) provided is sufficiently large and negative. We write (resp., ) when this is the case.      "
},
{
  "id": "rm_infty_lims",
  "level": "2",
  "url": "s_infinite_limits.html#rm_infty_lims",
  "type": "Remark",
  "number": "9.2",
  "title": "Infinite limits.",
  "body": " Infinite limits  It is important to observe that the various notions of infinite limit defined in all cover situations where the limit of the function does not exist . The best way to understand an infinite limit statement of the form , where denotes either a real number, , or , is as an assertion that   the limit in question does not exist, and    its failure to exist is due to values of the function getting arbitrarily large (in positive or negative direction) as approaches .   Accordingly, we must understand this new notation as an extended version of our original limit notation. In particular, we are not treating or here as if they were actual real numbers.  "
},
{
  "id": "rm_infty_lims_onesided",
  "level": "2",
  "url": "s_infinite_limits.html#rm_infty_lims_onesided",
  "type": "Remark",
  "number": "9.3",
  "title": "One-sided infinite limits.",
  "body": " One-sided infinite limits  Yet more variants of infinite limits can be defined for one-sided limits: that is, we can make sense of the following statements for any : . We thought was long enough as it is.  "
},
{
  "id": "d_ver_asymp",
  "level": "2",
  "url": "s_infinite_limits.html#d_ver_asymp",
  "type": "Definition",
  "number": "9.4",
  "title": "Vertical asymptote.",
  "body": " Vertical asymptote   Fix a constant . The line is a vertical asymptote of the graph of a function if at least one the of the following conditions holds: .   "
},
{
  "id": "eg_infty_lim_tan",
  "level": "2",
  "url": "s_infinite_limits.html#eg_infty_lim_tan",
  "type": "Example",
  "number": "9.5",
  "title": "Vertical asymptotes: <span xmlns:pf=\"https:\/\/prefigure.org\" class=\"process-math\">\\(\\tan\\)<\/span>.",
  "body": " Vertical asymptotes:   Let . Recall that the domain of is .   Sketch a graph of on its entire domain.    Find any and all vertical or horizontal asymptotes of .          The graph of is given below.  Graph of   Graph of tan        For each integer , let . We see visually that for all , and hence that each line is a vertical asymptote of the graph of .      "
},
{
  "id": "th_power_functions",
  "level": "2",
  "url": "s_infinite_limits.html#th_power_functions",
  "type": "Theorem",
  "number": "9.7",
  "title": "Power functions and their reciprocals.",
  "body": " Power functions and their reciprocals   Let be a positive integer.    "
},
{
  "id": "th_infinite_limit",
  "level": "2",
  "url": "s_infinite_limits.html#th_infinite_limit",
  "type": "Theorem",
  "number": "9.8",
  "title": "Infinite limit formulas.",
  "body": " Infinite limit formulas   In what follows denotes either a real number or . Assume that and are both infinite.   Type  If for some , then     Type       Type       Type  If for some , then     Type  If for some , then .    Type  If and , then     Type  If is a positive integer, then     Type  If is a positive integer, then       "
},
{
  "id": "eg_infty_lim_elem",
  "level": "2",
  "url": "s_infinite_limits.html#eg_infty_lim_elem",
  "type": "Example",
  "number": "9.9",
  "title": "Infinite limit: elementary examples.",
  "body": " Infinite limit: elementary examples   Compute the following limits. Your answer should be either a real number, , or .                   Our thinking is as follows: the function in question if of the form , where as and as . This is thus a limit of type , according to , and so should be equal to . Let's write this up more concisely, and determine the correct sign: , since , , and for positive close to .    In this case a quick appraisal tells us that the limit in question will fall under type , and thus should be equal to (sign to be determined). Here is how we can formally write this up: , since . Furthermore, this last limit holds since , and is negative for all near to and less than .      "
},
{
  "id": "eg_infty_lim_poly",
  "level": "2",
  "url": "s_infinite_limits.html#eg_infty_lim_poly",
  "type": "Example",
  "number": "9.10",
  "title": "Infinite limit: polynomial.",
  "body": " Infinite limit: polynomial   Compute . Your answer should be a real number or .    Note first that ( ), and (type ). Unfortunately, we do not have any infinite limit principles with descriptive type , so we cannot use any of the results of directly. Instead, we first do some algebra, using our intuition that the term dominates the term: , since and .   "
},
{
  "id": "th_rational_function",
  "level": "2",
  "url": "s_infinite_limits.html#th_rational_function",
  "type": "Theorem",
  "number": "9.11",
  "title": "Limit at infinity: rational functions.",
  "body": " Limit at infinity: rational functions   Assume we are given polynomials and , where and are nonzero constants.   Equal degree  If , then .    Denominator degree bigger  If , then .    Numerator degree bigger  If , then . Furthermore, both these limits are infinite. However, their sign depends on whether is positive or negative, and whether is even or odd. Alternatively, the sign of the limit depends on the limits of and at and , respectively.  Since both limits at infinity do not exist, does not have any horizontal asymptotes.      "
},
{
  "id": "eg_vert_hor_asym",
  "level": "2",
  "url": "s_infinite_limits.html#eg_vert_hor_asym",
  "type": "Example",
  "number": "9.12",
  "title": "Asymptotes: rational function.",
  "body": " Asymptotes: rational function   Let . Find all and any horizontal and vertical asymptotes of . For any vertical asymptotes, compute both one-sided limits.     Horizontal asymptotes  For our horizontal asymptote investigation we compute the limits at infinity of . At we have since , and is negative eventually as .  At we have since , and is positive eventually as .    Vertical asymptotes  We have . Since is continuous everywhere on its domain, the only candidates for vertical asymptotes are the lines and . We investigate the limits at these points: . Since the limit exists here, the line is not a vertical asymptote.  We now compute the one-sided limits at . We have , since , , and is positive for all close to and less than . Since once of the one-sided limits is infinite, we conclude that is a vertical asymptote of the graph of .  We are asked to compute the other one-sided limit. The computation is similar: , since , , and is negative for all close to and greater than .    "
},
{
  "id": "s_der_at_point",
  "level": "1",
  "url": "s_der_at_point.html",
  "type": "Section",
  "number": "10",
  "title": "Derivative: at a point",
  "body": " Derivative: at a point     Give formal limit definition of the derivative of a function at a point.    Understand the different quotient of a function in terms of rates of change and slopes of secants.    Understand the derivative of a function at a point both as an instantaneous rate of change, and as the slope of the tangent line to the graph at that point.     We will launch directly into an unmotivated definition of the derivative of a function at a point, and then motivate this definition retroactively in terms of important properties of and its graph.   Derivative at a point   Suppose is an interior point or endpoint of the domain of . We say that is differentiable at if the limit or equivalently, the limit , exists. When this is the case, we call this limit the derivative of at , denoted : , .     Derivative at a point  Implicit in our definition is that the two limit expressions are equivalent, in the sense that the one exists if and only if the other exists, in which case both are equal. This is seen to be true by invoking an appropriate affine substitution, which according to , preserves the value of a limit.  In more detail, the limit can be transformed to the limit by using the substitution ; and conversely, the limit can be transformed to the limit using the substitution .    Limit definition of derivative  Note that the limit always involves a denominator that approaches 0 as . This means we can never apply the quotient rule to such a limit directly; we will always have to do some algebra (or the like) to get to a place where we can potentially use limit rules.    Derivative at point: elementary   Let .   Show that is differentiable at and compute using the limit definition of the derivative.    More generally, fix any . Show that is differentiable at and compute using the limit definition of the derivative.          We compute . Since the limit exists, we conclude that is differentiable at , and that .    The computation above is very similar for an arbitrary constant : . We conclude that is differentiable at all , and that .        Difference quotient   Let be a function. Given two distinct points in the domain of , the value is called a difference quotient of . We have two useful ways of understanding this quantity.   Average rate of change  The difference quotient is called the average rate of change of between and . In this context we often use the notation below to emphasize the relation to changing values of : , where .    Slope of secant line  Consider the points and , which lie on the graph of . The unique line in that passes through and is called the secant line on between and . This line can be defined, using point-slope form with respect to , by the equation . We recognize in this context that the difference quotient is the slope of the secant line .        Derivative interpretations   Let be differentiable at the point .   Instantaneous rate of change  We call the derivative value the instantaneous rate of change of at with respect to , or more simply, the rate of change of at with respect to .    Tangent line  Let . The tangent line to the graph of at (or at ) is the line defined by the equation . In this context, we see that the derivative of at is the slope of the tangent line to the graph of at .        Tangent line at point   Let .   Sketch the graph of .    Find an equation for the tangent line to the graph of at .    Add to your sketch of the graph of .          Below you find the graph of . How do we come up with something like this by hand. The quick and dirty way is to remember what the graph of $g(x)=\\sqrt{x}$ and realize that the graph of will have roughly the same shape, but perhaps shifted\/scaled\/reflected. A matter of a few plotted points ( , , , ), will then give us something like the following.   Graph of   Graph of radical of 5-x       Let be the tangent line to the graph of at . By definition the slope of is , which we now compute: , where the last step uses the fact that is continuous at .  We conclude that the slope of is . We now use point-slope form to find an equation for . By definition the tangent line passes through the point on the graph of . With respect to this point we have the following point-slope equation for : .    We now add both the point and the tangent line to our graph of .   Graph of , , and   Graph of radical of 5-x together with tangent          "
},
{
  "id": "s_der_at_point-2",
  "level": "2",
  "url": "s_der_at_point.html#s_der_at_point-2",
  "type": "Objectives",
  "number": "10",
  "title": "",
  "body": "   Give formal limit definition of the derivative of a function at a point.    Understand the different quotient of a function in terms of rates of change and slopes of secants.    Understand the derivative of a function at a point both as an instantaneous rate of change, and as the slope of the tangent line to the graph at that point.    "
},
{
  "id": "d_der_at_point",
  "level": "2",
  "url": "s_der_at_point.html#d_der_at_point",
  "type": "Definition",
  "number": "10.1",
  "title": "Derivative at a point.",
  "body": " Derivative at a point   Suppose is an interior point or endpoint of the domain of . We say that is differentiable at if the limit or equivalently, the limit , exists. When this is the case, we call this limit the derivative of at , denoted : , .   "
},
{
  "id": "s_der_at_point-5",
  "level": "2",
  "url": "s_der_at_point.html#s_der_at_point-5",
  "type": "Remark",
  "number": "10.2",
  "title": "Derivative at a point.",
  "body": " Derivative at a point  Implicit in our definition is that the two limit expressions are equivalent, in the sense that the one exists if and only if the other exists, in which case both are equal. This is seen to be true by invoking an appropriate affine substitution, which according to , preserves the value of a limit.  In more detail, the limit can be transformed to the limit by using the substitution ; and conversely, the limit can be transformed to the limit using the substitution .  "
},
{
  "id": "s_der_at_point-6",
  "level": "2",
  "url": "s_der_at_point.html#s_der_at_point-6",
  "type": "Remark",
  "number": "10.3",
  "title": "Limit definition of derivative.",
  "body": " Limit definition of derivative  Note that the limit always involves a denominator that approaches 0 as . This means we can never apply the quotient rule to such a limit directly; we will always have to do some algebra (or the like) to get to a place where we can potentially use limit rules.  "
},
{
  "id": "eg_der_at_point",
  "level": "2",
  "url": "s_der_at_point.html#eg_der_at_point",
  "type": "Example",
  "number": "10.4",
  "title": "Derivative at point: elementary.",
  "body": " Derivative at point: elementary   Let .   Show that is differentiable at and compute using the limit definition of the derivative.    More generally, fix any . Show that is differentiable at and compute using the limit definition of the derivative.          We compute . Since the limit exists, we conclude that is differentiable at , and that .    The computation above is very similar for an arbitrary constant : . We conclude that is differentiable at all , and that .      "
},
{
  "id": "d_difference_quot",
  "level": "2",
  "url": "s_der_at_point.html#d_difference_quot",
  "type": "Definition",
  "number": "10.5",
  "title": "Difference quotient.",
  "body": " Difference quotient   Let be a function. Given two distinct points in the domain of , the value is called a difference quotient of . We have two useful ways of understanding this quantity.   Average rate of change  The difference quotient is called the average rate of change of between and . In this context we often use the notation below to emphasize the relation to changing values of : , where .    Slope of secant line  Consider the points and , which lie on the graph of . The unique line in that passes through and is called the secant line on between and . This line can be defined, using point-slope form with respect to , by the equation . We recognize in this context that the difference quotient is the slope of the secant line .      "
},
{
  "id": "d_der_interpretations",
  "level": "2",
  "url": "s_der_at_point.html#d_der_interpretations",
  "type": "Definition",
  "number": "10.6",
  "title": "Derivative interpretations.",
  "body": " Derivative interpretations   Let be differentiable at the point .   Instantaneous rate of change  We call the derivative value the instantaneous rate of change of at with respect to , or more simply, the rate of change of at with respect to .    Tangent line  Let . The tangent line to the graph of at (or at ) is the line defined by the equation . In this context, we see that the derivative of at is the slope of the tangent line to the graph of at .      "
},
{
  "id": "eg_der_at_point_tangent",
  "level": "2",
  "url": "s_der_at_point.html#eg_der_at_point_tangent",
  "type": "Example",
  "number": "10.7",
  "title": "Tangent line at point.",
  "body": " Tangent line at point   Let .   Sketch the graph of .    Find an equation for the tangent line to the graph of at .    Add to your sketch of the graph of .          Below you find the graph of . How do we come up with something like this by hand. The quick and dirty way is to remember what the graph of $g(x)=\\sqrt{x}$ and realize that the graph of will have roughly the same shape, but perhaps shifted\/scaled\/reflected. A matter of a few plotted points ( , , , ), will then give us something like the following.   Graph of   Graph of radical of 5-x       Let be the tangent line to the graph of at . By definition the slope of is , which we now compute: , where the last step uses the fact that is continuous at .  We conclude that the slope of is . We now use point-slope form to find an equation for . By definition the tangent line passes through the point on the graph of . With respect to this point we have the following point-slope equation for : .    We now add both the point and the tangent line to our graph of .   Graph of , , and   Graph of radical of 5-x together with tangent         "
},
{
  "id": "s_der_function",
  "level": "1",
  "url": "s_der_function.html",
  "type": "Section",
  "number": "11",
  "title": "Derivative: function",
  "body": " Derivative: function     Extend the notion of derivative at a point to a definition of the derivative function associated to a function .    Compute formulas for derivative functions using the limit definition of the derivative.    Introduce Leibniz notation in addition to prime notation. Understand the specific advantages of each notional style.    Understand both analytically and graphically common ways in which a function can fail to be differentiable at an input.     Whereas previously we focused on the notion of the derivative of a function at a specific input, we now switch perspectives somewhat and consider the derivative operation as defining a function associated to .   Derivative function   Let be a function, and let be the set of points where is differentiable. The derivative operation defines a function that is called the derivative of .    Note that the domain of the derivative function need not be the entire domain of : indeed, by definition it consists precisely of the points where is differentiable. The next example illustrates this.   Derivative function: radical   Let be defined as .   Compute the domain of : that is, find all points where is differentiable.    Derive a formula for the derivative function .          Take an element in the domain of and compute: . We now note that for all , this last limit expression evaluates to , after the application of simple limit rules. Thus is differentiable for such elements. For , however, the last limit becomes which is a limit of type , and hence infinite. In particular the limit doesn't exist for , showing that is not differentiable at .  We conclude that the domain of is . Note that is strictly smaller than the domain of in this case: indeed, it is every element of the domain of with the exception of .    For , we can finish our limit computation above to compute : .       Using the slope interpretation of the derivative, we can begin to see how the derivative function implies information about the original function , and conversely.   Slope interpretation  Let be the set of points where is differentiable, and let be the derivative of . Given any , we have the following equivalences: . We will elaborate further on these equivalences when we discuss the rate of change interpretation of the derivative in more detail.    Failing to be differentiable  By definition, a function fails to be differentiable at an input if the limit does not exist. The precise reason for that failure to exist is reflected in the graph of , using the slope of tangent line interpretation of the derivative. Some examples and their graphical analogues:   Infinite limit vertical slope  If the limit is infinite at , then the tangent line to the curve at (if it exists) is vertical: , its slope is undefined.  This evident in the graph of . (See .) As , ; equivalently, the slopes of the tangent lines to the graph of at , get arbitrarily large and negative. At itself, the tangent line to the graph of is in fact the vertical line .    Jump discontinuity  corner point  If the limit at doesn't exist because of a discrepancy between the left- and right-hand limits, both of which exist, then we typically see the slope of tangent lines at points to the left of approaching one limiting slope, while the slope of tangent lines of points to the right of will approach another value. Geometrically, such a point will look like a corner or kink in the graph of .  The classic illustration of this phenomenon is the absolute value function . As we show in this function is differentiable everywhere except at . Graphically we see why this is the case in the corner nature of the point on the graph: to the left the slope of the graph is ; and to the right the slope is .    Wild oscillation  If a function is wildly oscillating near an input to such a degree that limit of of doesn't exist at , then it turns out that the derivative also cannot exist at . See the point at for the function with graph in as an example.       Derivative function: absolute value   Let .   Show that the domain of is and compute a formula for .    Add a geometric argument about why is not differentiable at using .      Graph of   Graph of absolute value            Derivative function:   Let . Compute the domain of and derive a formula for .        We end this section by introducing an alternative notation for denoting the derivative of a function. The notation is called Leibniz notation , as it was favored in Gottlieb Leibniz's development of calculus. Isaac Newton, on the other hand favored the prime notation . Leibniz notation comes in very handy when considering the derivative as an operation that we apply to functions; it also strongly evokes the interpretation of the interpretation of the derivative as a rate of change. It is very much less convenient as an alternative notation for , as exhibited by .   Leibniz notation   Let be a function relating the output variable as a function of the input variable , and let be the set of points where is differentiable. We introduce the following notation, called Leibniz notation , to denote various concepts related to    Derivative function  The derivative function is denoted as or . In other words, we have have .    Derivative at a point  Given , the derivative of at is denoted as or . In other words, we have     Derivative operation  We denote by the operation of taking the derivative of a function with respect to . Thus is the derivative of : , .        Differentiable implies continuous   Suppose the function is defined at . If is differentiable at , then is continuous at . Using logical shorthand: .    "
},
{
  "id": "s_der_function-2",
  "level": "2",
  "url": "s_der_function.html#s_der_function-2",
  "type": "Objectives",
  "number": "11",
  "title": "",
  "body": "   Extend the notion of derivative at a point to a definition of the derivative function associated to a function .    Compute formulas for derivative functions using the limit definition of the derivative.    Introduce Leibniz notation in addition to prime notation. Understand the specific advantages of each notional style.    Understand both analytically and graphically common ways in which a function can fail to be differentiable at an input.    "
},
{
  "id": "d_derivative_function",
  "level": "2",
  "url": "s_der_function.html#d_derivative_function",
  "type": "Definition",
  "number": "11.1",
  "title": "Derivative function.",
  "body": " Derivative function   Let be a function, and let be the set of points where is differentiable. The derivative operation defines a function that is called the derivative of .   "
},
{
  "id": "eg_der_func_rad",
  "level": "2",
  "url": "s_der_function.html#eg_der_func_rad",
  "type": "Example",
  "number": "11.2",
  "title": "Derivative function: radical.",
  "body": " Derivative function: radical   Let be defined as .   Compute the domain of : that is, find all points where is differentiable.    Derive a formula for the derivative function .          Take an element in the domain of and compute: . We now note that for all , this last limit expression evaluates to , after the application of simple limit rules. Thus is differentiable for such elements. For , however, the last limit becomes which is a limit of type , and hence infinite. In particular the limit doesn't exist for , showing that is not differentiable at .  We conclude that the domain of is . Note that is strictly smaller than the domain of in this case: indeed, it is every element of the domain of with the exception of .    For , we can finish our limit computation above to compute : .      "
},
{
  "id": "s_der_function-8",
  "level": "2",
  "url": "s_der_function.html#s_der_function-8",
  "type": "Remark",
  "number": "11.3",
  "title": "Slope interpretation.",
  "body": " Slope interpretation  Let be the set of points where is differentiable, and let be the derivative of . Given any , we have the following equivalences: . We will elaborate further on these equivalences when we discuss the rate of change interpretation of the derivative in more detail.  "
},
{
  "id": "s_der_function-9",
  "level": "2",
  "url": "s_der_function.html#s_der_function-9",
  "type": "Remark",
  "number": "11.4",
  "title": "Failing to be differentiable.",
  "body": " Failing to be differentiable  By definition, a function fails to be differentiable at an input if the limit does not exist. The precise reason for that failure to exist is reflected in the graph of , using the slope of tangent line interpretation of the derivative. Some examples and their graphical analogues:   Infinite limit vertical slope  If the limit is infinite at , then the tangent line to the curve at (if it exists) is vertical: , its slope is undefined.  This evident in the graph of . (See .) As , ; equivalently, the slopes of the tangent lines to the graph of at , get arbitrarily large and negative. At itself, the tangent line to the graph of is in fact the vertical line .    Jump discontinuity  corner point  If the limit at doesn't exist because of a discrepancy between the left- and right-hand limits, both of which exist, then we typically see the slope of tangent lines at points to the left of approaching one limiting slope, while the slope of tangent lines of points to the right of will approach another value. Geometrically, such a point will look like a corner or kink in the graph of .  The classic illustration of this phenomenon is the absolute value function . As we show in this function is differentiable everywhere except at . Graphically we see why this is the case in the corner nature of the point on the graph: to the left the slope of the graph is ; and to the right the slope is .    Wild oscillation  If a function is wildly oscillating near an input to such a degree that limit of of doesn't exist at , then it turns out that the derivative also cannot exist at . See the point at for the function with graph in as an example.     "
},
{
  "id": "eg_der_funct_abs",
  "level": "2",
  "url": "s_der_function.html#eg_der_funct_abs",
  "type": "Example",
  "number": "11.5",
  "title": "Derivative function: absolute value.",
  "body": " Derivative function: absolute value   Let .   Show that the domain of is and compute a formula for .    Add a geometric argument about why is not differentiable at using .      Graph of   Graph of absolute value          "
},
{
  "id": "eg_der_func_reciprocal",
  "level": "2",
  "url": "s_der_function.html#eg_der_func_reciprocal",
  "type": "Example",
  "number": "11.7",
  "title": "Derivative function: <span xmlns:pf=\"https:\/\/prefigure.org\" class=\"process-math\">\\(\\frac{1}{x}\\)<\/span>.",
  "body": " Derivative function:   Let . Compute the domain of and derive a formula for .       "
},
{
  "id": "d_Leibniz_notation",
  "level": "2",
  "url": "s_der_function.html#d_Leibniz_notation",
  "type": "Definition",
  "number": "11.8",
  "title": "Leibniz notation.",
  "body": " Leibniz notation   Let be a function relating the output variable as a function of the input variable , and let be the set of points where is differentiable. We introduce the following notation, called Leibniz notation , to denote various concepts related to    Derivative function  The derivative function is denoted as or . In other words, we have have .    Derivative at a point  Given , the derivative of at is denoted as or . In other words, we have     Derivative operation  We denote by the operation of taking the derivative of a function with respect to . Thus is the derivative of : , .      "
},
{
  "id": "th_diff_implies_contin",
  "level": "2",
  "url": "s_der_function.html#th_diff_implies_contin",
  "type": "Theorem",
  "number": "11.9",
  "title": "Differentiable implies continuous.",
  "body": " Differentiable implies continuous   Suppose the function is defined at . If is differentiable at , then is continuous at . Using logical shorthand: .   "
},
{
  "id": "s_der_rules",
  "level": "1",
  "url": "s_der_rules.html",
  "type": "Section",
  "number": "12",
  "title": "Derivative: rules",
  "body": " Derivative: rules  We now examine how the operation of taking the derivative of a function interacts with our basic function operations: , scalar multiplication, addition, multiplication, and quotients. We will make heavy use of the Leibniz notation , which denotes the operation of taking the derivative with respect to . In this context we will either write , where is the name of a function, or else , where blah denotes some expression in . In the latter case, the expression in question is understood to define a function, with the usual implied domain convention. Thus for example denotes the derivative of the constant function ; and denotes the derivative of the identity function .   Derivative formulas: constant and power functions      Constant functions  For all we have . In other words, if is the constant function , then is the zero function defined as for all .    Identity function  We have . In other words, if is the identity function , then is the constant function defined as for all .    Power functions  Let be a real number. We have .        Power functions  Although we state the power function formula for general , for now we will only make use of it when is a rational number: , , where and are integers. Indeed, as of yet we have not ever defined what the expression means for an arbitrary real number . We can make sense of , , and even , but what does or mean? We will have to wait until Math 220-2 to give a precise and general definition.    Power function formula: radicals   Let . Compute .    The key is to convert the formula of from radical to power form: We then use the power formula to compute the derivative: . Note that the last two steps, strictly speaking, are unnecessary for this exercise, since no specific instructions were given regarding the form of the final answer. However, it is good to get in the habit of converting fluently between power and radical notation.     Derivative rules      Linear combination  For all constants , we have .    Product rule  We have .    Quotient rule  We have .       With all of our mastery of limit techniques, it turns out that the proofs of these three statements are not so difficult. We provide a proof of (1) and (2).   Proof of (1)  Assume and are differentiable at . We have .    Proof of (2)  Assume and are differentiable at . We have , where this last step uses both the definition of the derivative and the fact that , since and are continuous by .      Linear combination rule  Note that our linear combination rule for derivatives implies the following three rules: . Indeed, the first follows from taking in , the second from taking , and the third from taking and .    Product and quotient rule  The product and quotient rules for the derivative might come as somewhat of a surprise. In particular, mark well the following non-equalities : . In plain English: it is simply not the case that the derivative of a product is the product of the derivatives; and it is not the case that the derivative of a quotient is the quotient of the derivatives. This of course is in stark contrast to the product and quotient rules for the limit.    Derivative rules   Compute a formula for for the given .    , where are fixed constants.                    We compute .    We compute .    If we go straight into using derivative rules, we would have to use the product and quotient rules, which would be time consuming. Instead, realizing that powers of appear in all terms (above and below), we first do some algebraic preparation: . We can now handle the derivative computation just by using the linear combination rule and power function formulas: .       The first part of provides a formula for computing the derivative of a general polynomial. This is deserving of an official result.   Derivative: polynomials   Given a polynomial , where are fixed constants, we have .     Higher order derivatives   Let be a function with derivative . Continuing to compute derivatives in succession yields the higher order derivatives of . In particular, the second derivative is defined as , and denoted as or ; and the third derivative is defined as , and is denoted or .  More generally, for any , the -th derivative of is the result of applying the derivative operation times in succession, and is denoted or      Higher-order derivatives   Let . Compute formulas for , , and .    We compute the derivatives in succession: .    "
},
{
  "id": "th_der_formulas_basic",
  "level": "2",
  "url": "s_der_rules.html#th_der_formulas_basic",
  "type": "Theorem",
  "number": "12.1",
  "title": "Derivative formulas: constant and power functions.",
  "body": " Derivative formulas: constant and power functions      Constant functions  For all we have . In other words, if is the constant function , then is the zero function defined as for all .    Identity function  We have . In other words, if is the identity function , then is the constant function defined as for all .    Power functions  Let be a real number. We have .      "
},
{
  "id": "s_der_rules-4",
  "level": "2",
  "url": "s_der_rules.html#s_der_rules-4",
  "type": "Remark",
  "number": "12.2",
  "title": "Power functions.",
  "body": " Power functions  Although we state the power function formula for general , for now we will only make use of it when is a rational number: , , where and are integers. Indeed, as of yet we have not ever defined what the expression means for an arbitrary real number . We can make sense of , , and even , but what does or mean? We will have to wait until Math 220-2 to give a precise and general definition.  "
},
{
  "id": "eg_der_power",
  "level": "2",
  "url": "s_der_rules.html#eg_der_power",
  "type": "Example",
  "number": "12.3",
  "title": "Power function formula: radicals.",
  "body": " Power function formula: radicals   Let . Compute .    The key is to convert the formula of from radical to power form: We then use the power formula to compute the derivative: . Note that the last two steps, strictly speaking, are unnecessary for this exercise, since no specific instructions were given regarding the form of the final answer. However, it is good to get in the habit of converting fluently between power and radical notation.   "
},
{
  "id": "th_der_rules",
  "level": "2",
  "url": "s_der_rules.html#th_der_rules",
  "type": "Theorem",
  "number": "12.4",
  "title": "Derivative rules.",
  "body": " Derivative rules      Linear combination  For all constants , we have .    Product rule  We have .    Quotient rule  We have .       With all of our mastery of limit techniques, it turns out that the proofs of these three statements are not so difficult. We provide a proof of (1) and (2).   Proof of (1)  Assume and are differentiable at . We have .    Proof of (2)  Assume and are differentiable at . We have , where this last step uses both the definition of the derivative and the fact that , since and are continuous by .    "
},
{
  "id": "s_der_rules-7",
  "level": "2",
  "url": "s_der_rules.html#s_der_rules-7",
  "type": "Remark",
  "number": "12.5",
  "title": "Linear combination rule.",
  "body": " Linear combination rule  Note that our linear combination rule for derivatives implies the following three rules: . Indeed, the first follows from taking in , the second from taking , and the third from taking and .  "
},
{
  "id": "s_der_rules-8",
  "level": "2",
  "url": "s_der_rules.html#s_der_rules-8",
  "type": "Remark",
  "number": "12.6",
  "title": "Product and quotient rule.",
  "body": " Product and quotient rule  The product and quotient rules for the derivative might come as somewhat of a surprise. In particular, mark well the following non-equalities : . In plain English: it is simply not the case that the derivative of a product is the product of the derivatives; and it is not the case that the derivative of a quotient is the quotient of the derivatives. This of course is in stark contrast to the product and quotient rules for the limit.  "
},
{
  "id": "eg_der_rules",
  "level": "2",
  "url": "s_der_rules.html#eg_der_rules",
  "type": "Example",
  "number": "12.7",
  "title": "Derivative rules.",
  "body": " Derivative rules   Compute a formula for for the given .    , where are fixed constants.                    We compute .    We compute .    If we go straight into using derivative rules, we would have to use the product and quotient rules, which would be time consuming. Instead, realizing that powers of appear in all terms (above and below), we first do some algebraic preparation: . We can now handle the derivative computation just by using the linear combination rule and power function formulas: .      "
},
{
  "id": "th_der_poly",
  "level": "2",
  "url": "s_der_rules.html#th_der_poly",
  "type": "Theorem",
  "number": "12.8",
  "title": "Derivative: polynomials.",
  "body": " Derivative: polynomials   Given a polynomial , where are fixed constants, we have .   "
},
{
  "id": "d_der_higher_order",
  "level": "2",
  "url": "s_der_rules.html#d_der_higher_order",
  "type": "Definition",
  "number": "12.9",
  "title": "Higher order derivatives.",
  "body": " Higher order derivatives   Let be a function with derivative . Continuing to compute derivatives in succession yields the higher order derivatives of . In particular, the second derivative is defined as , and denoted as or ; and the third derivative is defined as , and is denoted or .  More generally, for any , the -th derivative of is the result of applying the derivative operation times in succession, and is denoted or    "
},
{
  "id": "eg_higher_ders",
  "level": "2",
  "url": "s_der_rules.html#eg_higher_ders",
  "type": "Example",
  "number": "12.10",
  "title": "Higher-order derivatives.",
  "body": " Higher-order derivatives   Let . Compute formulas for , , and .    We compute the derivatives in succession: .   "
},
{
  "id": "s_der_rate_change",
  "level": "1",
  "url": "s_der_rate_change.html",
  "type": "Section",
  "number": "13",
  "title": "Derivative as rate of change",
  "body": " Derivative as rate of change     Understand and use the rate of change interpretation of the derivative.    Apply the rate of change interpretation to the position, velocity, and acceleration functions of an object.      Rate of change  Recall that the key to understanding the rate of change interpretation of the derivative is to use the particular formulation , and to interpret the difference quotient as the average rate of change of between and . The idea is that as , the average rate of change computed as by gets closer and closer to an instantaneous rate of change of at . This is the motivation behind the definition of instantaneous rate of change given in .   Rate of change interpretations   Suppose quantity is modeled as a function of some other quantity . Roughly speaking, the derivative computes the (instantaneous) rate of change of with respect to . We elaborate below.   Difference quotient  Let and be particular values of quantity satisfying . The difference quotient computes the average rate of change of as the quantity varies from to : , . For each choice of , the difference quotient gives an approximation of the instantaneous rate of change of with respect to at .    Rate of change of with respect to  Let be a particular value of the quantity . The value of the derivative at is the (instantaneous) rate of change of with respect to at the particular input : ,         Height versus age   Suppose the height (in meters) of individuals in a population is modeled as a function of their age (in years).   Interpret the two statements below in terms of the height and age of people. Your interpretation should include units, and should address all numeric details in the statements. .    What does the following sequence of statements tell us about the relation of height versus age? Be specific. .         The statement asserts that the height of a 12-year old in the population is 1.5 meters.  The statement asserts that the rate of growth of a 12 year old in the population is meters per year.    The sequence of statements tells us that the rates of growth for 12-, 15-, and 18-year olds are, respectively, 0.06, 0.025, and 0.001 meters per year. This is consistent with the fact that as we grow older, our rate of growth slows, approaching a rate of zero around age 18.        Position, velocity, acceleration    Suppose an object moves along an oriented axis with origin . To simplify the units discussion, we assume below that distance is measured in meters (m) and time is measured in seconds (s).   Position  At any given time , the position  of the object is its directed distance (positive or negative) to the origin.    Displacement  Given times , the displacement of the object from time to time is the difference , often denoted as for short.    Velocity  At any given time the velocity  of the object is defined as rate of change of position with respect to time at . In other words, we have . Values of velocity can be positive or negative. We define the speed  of the object at time as     Acceleration  At any given time we define the acceleration  of the object as the rate of change of its velocity with respect to time at . In other words, .        Drone   Dudley gets his hands on the remote control for a drone and pilots it for a glorious 3 seconds. Luckily, the drone can only move directly up and down. The altitude (in meters) of the drone seconds after Dudley takes control is given as .   Derive formulas for the velocity , speed , and acceleration of the drone seconds after Dudley takes control.    Find the time intervals when the drone is ascending, and the time intervals when it is descending.    Describe the end of Dudley's flight at time seconds. Where is the drone? Did a fatal crash happen?    Compute (a) the displacement of the drone over the time interval , and (b) the total distance traveled.          We compute .    The drone ascending or descending is equivalent to the velocity being positive or negative. It will help here to factor our expression of : . From this we can easily sketch a graph of as follows:  Graph of velocity function   And from the graph of we see easily that is positive on and negative on . Thus the drone ascends for the first second, then descends for the remaining two seconds.    At time , the height of the drone is and the velocity is . This means that the downward velocity of the drone has slowed to 0 m per s upon impact. Dudley landed the drone safely, apparently!    The total displacement is given as . To compute the total distance traveled, we must separate the interval into the separate intervals where the drone ascends and descends. The basic principle here is that if movement is always in the same direction (up or down in our case) over a certain time interval, then displacement is equal to distance traveled.  Over the time interval the drone ascends from a height meters to a height of meters. Since the drone is always moving the same direction here, the total distance traveled over this time interval is meters.  Over the time interval the drone descends from a height of meters, to a height of meters. Again, since the drone is always moving in the same direction, the distance traveled over this time interval is 4 meters.  We conclude that in sum the drone has traveled a distance of meters.         Rates of change in economics  Derivative play a crucial role in economics, where this notion is often described in that field's particular jargon as some variety of marginal .   Marginal cost, revenue, profit   Suppose the cost (in dollars) of making a product is modeled as a function of the total quantity of the good produced. The marginal cost function is defined as . Thus computes the marginal cost (in dollars per unit producion) at a current level of production : this is the rate of change of cost with respect to quantity produced at the given production level .  We get notions of marginal revenue and marginal profit by replacing the cost function above with a revenue or profit function.     Marginals   Suppose the cost (in dollars) for a farmer to produce barrels of milk on a given day is given by . Suppose further that farmer can charge a price of when producing barrels of milk.   Determine the marginal cost of producing 100 barrels of milk, and give an easy to understand interpretation of what this means.    Determine the marginal profit of producing 100 barrels of milk.     Estimate the change in profit that would result in going from 100 barrels a day to 103 barrels of day.          By definition, marginal cost (with respect to barrels $b$ produced) is given as . In particular, we have . This tells us that as the farmer steps milk production from barrels, the cost increases at a rate of 128 dollars per barrel.    Let be the revenue earned when producing barrels of milk, under that assumption that all barrels will be purchased. We have . Lastly, since profit is is defined as revenue minus cost, we have and thus marginal profit is . The marginal profit at a production level of 100 barrels is thus . This tells us that increasing the production from 100 barrels results in the farmer's profit decreasing at a rate of 78 dollars per barrel. What's going on here is that although revenue will increase by increasing production, the rate at which it increases is less than the rate at which cost increases.     Assuming that the rate of change of profit is constant , equal to dollars per barrel, for production levels near 100 barrels, as we increase our production from 100 barrels, the profit decreases at a constant rate of 78 dollars per barrel. Thus we estimate that profit would decrease by dollars if we increase production from 100 to 103 barrels.  The reason this is an estimate and not necessarily the exact change in profit, is that our simplifying assumption need not be the case! That is, the rate of profit is not necessarily constant as a function of . Indeed, looking at the formula above, it most definitely is not in our case! And in fact, using our formula for we can compute exactly as .        "
},
{
  "id": "s_der_rate_change-2",
  "level": "2",
  "url": "s_der_rate_change.html#s_der_rate_change-2",
  "type": "Objectives",
  "number": "13",
  "title": "",
  "body": "   Understand and use the rate of change interpretation of the derivative.    Apply the rate of change interpretation to the position, velocity, and acceleration functions of an object.    "
},
{
  "id": "proc_rate_of_change",
  "level": "2",
  "url": "s_der_rate_change.html#proc_rate_of_change",
  "type": "Procedure",
  "number": "13.1",
  "title": "Rate of change interpretations.",
  "body": " Rate of change interpretations   Suppose quantity is modeled as a function of some other quantity . Roughly speaking, the derivative computes the (instantaneous) rate of change of with respect to . We elaborate below.   Difference quotient  Let and be particular values of quantity satisfying . The difference quotient computes the average rate of change of as the quantity varies from to : , . For each choice of , the difference quotient gives an approximation of the instantaneous rate of change of with respect to at .    Rate of change of with respect to  Let be a particular value of the quantity . The value of the derivative at is the (instantaneous) rate of change of with respect to at the particular input : ,       "
},
{
  "id": "eg_height_age",
  "level": "2",
  "url": "s_der_rate_change.html#eg_height_age",
  "type": "Example",
  "number": "13.2",
  "title": "Height versus age.",
  "body": " Height versus age   Suppose the height (in meters) of individuals in a population is modeled as a function of their age (in years).   Interpret the two statements below in terms of the height and age of people. Your interpretation should include units, and should address all numeric details in the statements. .    What does the following sequence of statements tell us about the relation of height versus age? Be specific. .         The statement asserts that the height of a 12-year old in the population is 1.5 meters.  The statement asserts that the rate of growth of a 12 year old in the population is meters per year.    The sequence of statements tells us that the rates of growth for 12-, 15-, and 18-year olds are, respectively, 0.06, 0.025, and 0.001 meters per year. This is consistent with the fact that as we grow older, our rate of growth slows, approaching a rate of zero around age 18.     "
},
{
  "id": "d_pos_vel_acc",
  "level": "2",
  "url": "s_der_rate_change.html#d_pos_vel_acc",
  "type": "Definition",
  "number": "13.3",
  "title": "",
  "body": "  Suppose an object moves along an oriented axis with origin . To simplify the units discussion, we assume below that distance is measured in meters (m) and time is measured in seconds (s).   Position  At any given time , the position  of the object is its directed distance (positive or negative) to the origin.    Displacement  Given times , the displacement of the object from time to time is the difference , often denoted as for short.    Velocity  At any given time the velocity  of the object is defined as rate of change of position with respect to time at . In other words, we have . Values of velocity can be positive or negative. We define the speed  of the object at time as     Acceleration  At any given time we define the acceleration  of the object as the rate of change of its velocity with respect to time at . In other words, .      "
},
{
  "id": "eg_dynamics_drone",
  "level": "2",
  "url": "s_der_rate_change.html#eg_dynamics_drone",
  "type": "Example",
  "number": "13.4",
  "title": "Drone.",
  "body": " Drone   Dudley gets his hands on the remote control for a drone and pilots it for a glorious 3 seconds. Luckily, the drone can only move directly up and down. The altitude (in meters) of the drone seconds after Dudley takes control is given as .   Derive formulas for the velocity , speed , and acceleration of the drone seconds after Dudley takes control.    Find the time intervals when the drone is ascending, and the time intervals when it is descending.    Describe the end of Dudley's flight at time seconds. Where is the drone? Did a fatal crash happen?    Compute (a) the displacement of the drone over the time interval , and (b) the total distance traveled.          We compute .    The drone ascending or descending is equivalent to the velocity being positive or negative. It will help here to factor our expression of : . From this we can easily sketch a graph of as follows:  Graph of velocity function   And from the graph of we see easily that is positive on and negative on . Thus the drone ascends for the first second, then descends for the remaining two seconds.    At time , the height of the drone is and the velocity is . This means that the downward velocity of the drone has slowed to 0 m per s upon impact. Dudley landed the drone safely, apparently!    The total displacement is given as . To compute the total distance traveled, we must separate the interval into the separate intervals where the drone ascends and descends. The basic principle here is that if movement is always in the same direction (up or down in our case) over a certain time interval, then displacement is equal to distance traveled.  Over the time interval the drone ascends from a height meters to a height of meters. Since the drone is always moving the same direction here, the total distance traveled over this time interval is meters.  Over the time interval the drone descends from a height of meters, to a height of meters. Again, since the drone is always moving in the same direction, the distance traveled over this time interval is 4 meters.  We conclude that in sum the drone has traveled a distance of meters.      "
},
{
  "id": "d_marginals",
  "level": "2",
  "url": "s_der_rate_change.html#d_marginals",
  "type": "Definition",
  "number": "13.5",
  "title": "Marginal cost, revenue, profit.",
  "body": " Marginal cost, revenue, profit   Suppose the cost (in dollars) of making a product is modeled as a function of the total quantity of the good produced. The marginal cost function is defined as . Thus computes the marginal cost (in dollars per unit producion) at a current level of production : this is the rate of change of cost with respect to quantity produced at the given production level .  We get notions of marginal revenue and marginal profit by replacing the cost function above with a revenue or profit function.   "
},
{
  "id": "eg_marginal",
  "level": "2",
  "url": "s_der_rate_change.html#eg_marginal",
  "type": "Example",
  "number": "13.6",
  "title": "Marginals.",
  "body": " Marginals   Suppose the cost (in dollars) for a farmer to produce barrels of milk on a given day is given by . Suppose further that farmer can charge a price of when producing barrels of milk.   Determine the marginal cost of producing 100 barrels of milk, and give an easy to understand interpretation of what this means.    Determine the marginal profit of producing 100 barrels of milk.     Estimate the change in profit that would result in going from 100 barrels a day to 103 barrels of day.          By definition, marginal cost (with respect to barrels $b$ produced) is given as . In particular, we have . This tells us that as the farmer steps milk production from barrels, the cost increases at a rate of 128 dollars per barrel.    Let be the revenue earned when producing barrels of milk, under that assumption that all barrels will be purchased. We have . Lastly, since profit is is defined as revenue minus cost, we have and thus marginal profit is . The marginal profit at a production level of 100 barrels is thus . This tells us that increasing the production from 100 barrels results in the farmer's profit decreasing at a rate of 78 dollars per barrel. What's going on here is that although revenue will increase by increasing production, the rate at which it increases is less than the rate at which cost increases.     Assuming that the rate of change of profit is constant , equal to dollars per barrel, for production levels near 100 barrels, as we increase our production from 100 barrels, the profit decreases at a constant rate of 78 dollars per barrel. Thus we estimate that profit would decrease by dollars if we increase production from 100 to 103 barrels.  The reason this is an estimate and not necessarily the exact change in profit, is that our simplifying assumption need not be the case! That is, the rate of profit is not necessarily constant as a function of . Indeed, looking at the formula above, it most definitely is not in our case! And in fact, using our formula for we can compute exactly as .      "
},
{
  "id": "s_der_trig",
  "level": "1",
  "url": "s_der_trig.html",
  "type": "Section",
  "number": "14",
  "title": "Derivative: trig functions",
  "body": " Derivative: trig functions     Derive derivative formulas for sine and cosine using the limit definition.    Derive derivative formulas for tangent, cotangent, secant, and cosecant from the formulas for sine and cosine, using the quotient rule.    Incorporate the new derivative formulas into derivative computations of more complicated functions.      Derivative formulas: sine and cosine   We have the following derivative formulas: .    We prove the derivative formula for ; the argument for is very similar. Using the limit definition of the derivative, we have , where the penultimate step makes use of our previously discussed limits .     Tangent lines: sinusoidal   Let .   Find an equation for the tangent line to the graph of at .    Find all points on the graph of where the tangent line is horizontal.          The tangent line to the graph of at , passes through the point The slope of the tangent line here is given by . We first compute . Thus the slope of the tangent line is , We conclude that an equation for the tangent line here is .    The tangent line to a point on the graph of is horizontal when its slope . Thus we need to find all such that , or equivalently, . The solutions to this trig equation are where is an integer. The corresponding points on the graph are .        Trigonometric functions   We define the tangent ( ), cotangent ( ), secant ( ), and cosecant ( ) functions as follows: .     Derivative formulas: trig functions   We have the following derivative formulas: .    "
},
{
  "id": "s_der_trig-2",
  "level": "2",
  "url": "s_der_trig.html#s_der_trig-2",
  "type": "Objectives",
  "number": "14",
  "title": "",
  "body": "   Derive derivative formulas for sine and cosine using the limit definition.    Derive derivative formulas for tangent, cotangent, secant, and cosecant from the formulas for sine and cosine, using the quotient rule.    Incorporate the new derivative formulas into derivative computations of more complicated functions.    "
},
{
  "id": "th_der_sin_cos",
  "level": "2",
  "url": "s_der_trig.html#th_der_sin_cos",
  "type": "Theorem",
  "number": "14.1",
  "title": "Derivative formulas: sine and cosine.",
  "body": " Derivative formulas: sine and cosine   We have the following derivative formulas: .    We prove the derivative formula for ; the argument for is very similar. Using the limit definition of the derivative, we have , where the penultimate step makes use of our previously discussed limits .   "
},
{
  "id": "eg_tangent_trig",
  "level": "2",
  "url": "s_der_trig.html#eg_tangent_trig",
  "type": "Example",
  "number": "14.2",
  "title": "Tangent lines: sinusoidal.",
  "body": " Tangent lines: sinusoidal   Let .   Find an equation for the tangent line to the graph of at .    Find all points on the graph of where the tangent line is horizontal.          The tangent line to the graph of at , passes through the point The slope of the tangent line here is given by . We first compute . Thus the slope of the tangent line is , We conclude that an equation for the tangent line here is .    The tangent line to a point on the graph of is horizontal when its slope . Thus we need to find all such that , or equivalently, . The solutions to this trig equation are where is an integer. The corresponding points on the graph are .      "
},
{
  "id": "d_trig_functions",
  "level": "2",
  "url": "s_der_trig.html#d_trig_functions",
  "type": "Definition",
  "number": "14.3",
  "title": "Trigonometric functions.",
  "body": " Trigonometric functions   We define the tangent ( ), cotangent ( ), secant ( ), and cosecant ( ) functions as follows: .   "
},
{
  "id": "th_der_trig",
  "level": "2",
  "url": "s_der_trig.html#th_der_trig",
  "type": "Theorem",
  "number": "14.4",
  "title": "Derivative formulas: trig functions.",
  "body": " Derivative formulas: trig functions   We have the following derivative formulas: .   "
},
{
  "id": "s_chain",
  "level": "1",
  "url": "s_chain.html",
  "type": "Section",
  "number": "15",
  "title": "Chain rule",
  "body": " Chain rule     Understand and apply the chain rule for computing derivatives of compositions of functions.    Incorporate the chain rule with our existing rules and formulas to compute derivatives of complicated functions.     Our current list of derivative rules take into account how the derivative operation interacts with various function arithmetic operations: , addition, scalar multiplication, product, quotient. We round out this discussion by considering another very important function operation: namely, function composition.   Chain rule   Assume that the function is defined as the composition of the functions and , so that . If is differentiable at , and is differentiable at , then is differentiable at , and we have . Alternatively, using Leibniz notation, we have .    The main difficulty in using the chain rule is being able to recognize how a given function can be described as a composition of functions . The procedure below is designed to help you identify the inner function in this representation. You do not need to use it when computing derivatives with the chain rule, but it may help you get the hang of this technique. See the first computation in for an illustration of .   Chain rule   To compute the derivative of a function that is built from other functions using composition, proceed as follows.   Identify inner function  Identify a function so that for some function . The function might be easily identified as an inner function , or may be a common expression that appears in the definition of .    Assemble ingredients  Compute , where is computed treating simply as a new variable name.    Use chain rule  Compute , making sure to leave your final answer entirely in terms of .        Chain rule   Compute the derivative of the given function. Your answer should be a chain of equalities with steps justified.                             We will illustrate for this example. We declare , from whence we have . We now compute . Note that we are careful to leave our final answer entirely in terms of the original variable.    That this is a chain rule computation is more clearly seen after a little algebra: . We now compute .    We compute: .        Inflating a balloon   The volume (in cm ) of a spherical inflatable balloon is computed as , where is the radius of the balloon (in cm).   Compute the rate of change of the volume with respect to the radius .    Suppose now that while inflating the balloon, the radius is given by the function . Compute the rate of change of with respect to . Leave your answer in terms of and .          We have .    When is a function of time, the volume of the ballon is also a function of time: . Using the chain rule, we have . We thus see that at any given time , the rate of change with respect to is the product of the rate of change of volume with respect to for the radius value at ( , for ) and the rate of change of with respect to time at that time . (Of course this is just as the chain rule predicts: $\\frac{dV}{dt}=\\frac{dV}{dr}\\cdot \\frac{dr}{dt}$.) This makes general sense, physically. The rate of change of the radius is acting as a multiplier for the rate of change of the volume with respect to : in particular the greater the rate at which the radius increases, the greater the rate at which the volume increases.       "
},
{
  "id": "s_chain-2",
  "level": "2",
  "url": "s_chain.html#s_chain-2",
  "type": "Objectives",
  "number": "15",
  "title": "",
  "body": "   Understand and apply the chain rule for computing derivatives of compositions of functions.    Incorporate the chain rule with our existing rules and formulas to compute derivatives of complicated functions.    "
},
{
  "id": "th_chain_rule",
  "level": "2",
  "url": "s_chain.html#th_chain_rule",
  "type": "Theorem",
  "number": "15.1",
  "title": "Chain rule.",
  "body": " Chain rule   Assume that the function is defined as the composition of the functions and , so that . If is differentiable at , and is differentiable at , then is differentiable at , and we have . Alternatively, using Leibniz notation, we have .   "
},
{
  "id": "proc_chain",
  "level": "2",
  "url": "s_chain.html#proc_chain",
  "type": "Procedure",
  "number": "15.2",
  "title": "Chain rule.",
  "body": " Chain rule   To compute the derivative of a function that is built from other functions using composition, proceed as follows.   Identify inner function  Identify a function so that for some function . The function might be easily identified as an inner function , or may be a common expression that appears in the definition of .    Assemble ingredients  Compute , where is computed treating simply as a new variable name.    Use chain rule  Compute , making sure to leave your final answer entirely in terms of .      "
},
{
  "id": "eg_chain_rules",
  "level": "2",
  "url": "s_chain.html#eg_chain_rules",
  "type": "Example",
  "number": "15.3",
  "title": "Chain rule.",
  "body": " Chain rule   Compute the derivative of the given function. Your answer should be a chain of equalities with steps justified.                             We will illustrate for this example. We declare , from whence we have . We now compute . Note that we are careful to leave our final answer entirely in terms of the original variable.    That this is a chain rule computation is more clearly seen after a little algebra: . We now compute .    We compute: .      "
},
{
  "id": "eg_chain_spher_balloon",
  "level": "2",
  "url": "s_chain.html#eg_chain_spher_balloon",
  "type": "Example",
  "number": "15.4",
  "title": "Inflating a balloon.",
  "body": " Inflating a balloon   The volume (in cm ) of a spherical inflatable balloon is computed as , where is the radius of the balloon (in cm).   Compute the rate of change of the volume with respect to the radius .    Suppose now that while inflating the balloon, the radius is given by the function . Compute the rate of change of with respect to . Leave your answer in terms of and .          We have .    When is a function of time, the volume of the ballon is also a function of time: . Using the chain rule, we have . We thus see that at any given time , the rate of change with respect to is the product of the rate of change of volume with respect to for the radius value at ( , for ) and the rate of change of with respect to time at that time . (Of course this is just as the chain rule predicts: $\\frac{dV}{dt}=\\frac{dV}{dr}\\cdot \\frac{dr}{dt}$.) This makes general sense, physically. The rate of change of the radius is acting as a multiplier for the rate of change of the volume with respect to : in particular the greater the rate at which the radius increases, the greater the rate at which the volume increases.      "
},
{
  "id": "s_implicit",
  "level": "1",
  "url": "s_implicit.html",
  "type": "Section",
  "number": "16",
  "title": "Implicit differentiation",
  "body": " Implicit differentiation     Explore the connection between curves, graphs of equations, and graphs of functions.    Identify points on curves near which the graph of the curve can be implicitly realized as the graph of a function.    Use the technique of implicit differentiation to deduce facts about derivatives of implicitly defined functions.    Understand the role of the chain rule in the technique of implicit differentiation.    Use implicit differentiation to deduce geometric properties of graphs of equations.     We begin this section with some simple observations about curves in . Currently our main way of defining such a curve is as the graph of an equation. For example, let be the unit circle centered at the origin is defined as the graph of the equation . That is, is the set of all points satisfying . We call this an implicit description of the circle as its points are not given to us explicitly via some formula; rather, to produce actual points on it is up to us to find solutions to the equation ( , , ).   Graph of   Graph of unit circle     A similar way of defining a curve in is as the graph of a function . In other words, given a function , we define its graph to be the curve consisting of all points of the form , where . Note that this description gives an explicit formula for producing points on the curve: namely, given any in the domain, the point lies on the graph.   Graph of the function   Graph of function x squared     The graph of a function can also be understood as the graph of an equation : indeed, the set of points of the form are precisely the the set of solutions to the equation . In other words, all curves that are graphs of functions can also be thought of as graphs of equations. However, not all graphs of equations are graphs of functions! Indeed, our circle above is an example of a curve that is a graph of an equation, but not the graph of a function. How do I know? It fails the vertical line test!  Life is somewhat easier for us when a curve does happen to given as the graph of a function. For example, in this scenario, we have a systematic way of determining what the tangent line to a given point is. That technique is not in general available to us for the circle , as that curve is not the graph of any function . So how can we answer questions about tangent lines to that curve. The next example illustrates a technique that we call implicit differentiation . We give a formal description of the technique in .   Implicit differentiation: circle   Use implicit differentiation to compute an equation of the tangent line to the circle at the point .    The segment of consisting of points lying very close to does pass the vertical line test, and thus we can think of the -coordinate value of points on this segment as being given by a function of the -coordinate. The slope of the tangent line to at is then given by . In order to deduce information about we take the derivative of both sides of the defining equation of , making sure to treat not as an independent variable, but rather a function of : . Evaluating the last equation at , we conclude that . Note that since by definition is the -coordinate of the point .  We conclude that the tangent line to at has slope . Thus . Below you find a graph of and the tangent line to .   Graph of unit circle      We formalize our reasoning in with a procedure.   Implicit differentiation   Suppose is a curve in defined by an equation of the form , and let be a point on such that near the curve satisfies the vertical line test.   We can think of the portion of near as the graph of an implicit function relating as a function of .    Under the assumption in (1), we can compute the derivative of this implicit function at as follows:   Replace (mentally or explicitly) each instance of in with , to emphasize that we now treat as a function of .    Take the derivative of both sides of , with respect to , taking care to treat as a function of . You will make frequent use of the chain rule, as well as potentially the product and quotient rules, when doing so.    Attempt to solve for in terms of and , yielding an expression of the form .    Compute .           Tschirnhausen cubic   The curve defined by the equation is called Tschirnhausen's cubic.   Verify that is a point on .    Use implicit differentiation to find an equation of the tangent line to at the point .    Assuming is can be understood as a function of for points on near , compute .          To verify that lies on , we simply evaluate the left- (LHS)and right-hand sides (RHS) of the defining equation and verify that they are equal: .    Following we write for each instance of in the defining equation of and then take the derivative of both sides of the equation with respect to : . The slope of the tangent line to at is thus given by . The equation of the tangent line, using point-slope form for this , is . Below you find a graph of and the tangent line to at .   Tschirnhausen cubic      To deduce information about we take the derivative with respect to of both sides of the equation we derived for : . We then compute .        Ellipse tangents   Let be the ellipse defined by the equation . Find all points on where the tangent line to at is horizontal.    Applying we have: . We look for point where , making the tangent line horizontal. According to our derivation above, for this to be the case we need need , or equivalently, . Substituting this back in to the defining equation of , we see that , or . We conclude that . Using , we see that the points are the two points where the tangent lines to are horizontal. Below you find a graph of , the points and , and their horizontal tangent lines.   A rotated ellipse       Implicit: trig equation   Let the curve be defined by the equation .   Verify that is a point on this curve.    Find an equation of the tangent line to at .          It is easily seen that the point satisfies the defining equation of .    We apply : . For the point , we have and . Evaluating the last equation above at these values, we see that , and thus . It follows that the tangent line to at has defining equation . Below we graph and the tangent line at .      Implicit function with trig equation      "
},
{
  "id": "s_implicit-2",
  "level": "2",
  "url": "s_implicit.html#s_implicit-2",
  "type": "Objectives",
  "number": "16",
  "title": "",
  "body": "   Explore the connection between curves, graphs of equations, and graphs of functions.    Identify points on curves near which the graph of the curve can be implicitly realized as the graph of a function.    Use the technique of implicit differentiation to deduce facts about derivatives of implicitly defined functions.    Understand the role of the chain rule in the technique of implicit differentiation.    Use implicit differentiation to deduce geometric properties of graphs of equations.    "
},
{
  "id": "fig_graph_circle",
  "level": "2",
  "url": "s_implicit.html#fig_graph_circle",
  "type": "Figure",
  "number": "16.1",
  "title": "",
  "body": " Graph of   Graph of unit circle    "
},
{
  "id": "fig_graph_fun",
  "level": "2",
  "url": "s_implicit.html#fig_graph_fun",
  "type": "Figure",
  "number": "16.2",
  "title": "",
  "body": " Graph of the function   Graph of function x squared    "
},
{
  "id": "eg_implicit_circle",
  "level": "2",
  "url": "s_implicit.html#eg_implicit_circle",
  "type": "Example",
  "number": "16.3",
  "title": "Implicit differentiation: circle.",
  "body": " Implicit differentiation: circle   Use implicit differentiation to compute an equation of the tangent line to the circle at the point .    The segment of consisting of points lying very close to does pass the vertical line test, and thus we can think of the -coordinate value of points on this segment as being given by a function of the -coordinate. The slope of the tangent line to at is then given by . In order to deduce information about we take the derivative of both sides of the defining equation of , making sure to treat not as an independent variable, but rather a function of : . Evaluating the last equation at , we conclude that . Note that since by definition is the -coordinate of the point .  We conclude that the tangent line to at has slope . Thus . Below you find a graph of and the tangent line to .   Graph of unit circle     "
},
{
  "id": "proc_implicit_diff",
  "level": "2",
  "url": "s_implicit.html#proc_implicit_diff",
  "type": "Procedure",
  "number": "16.4",
  "title": "Implicit differentiation.",
  "body": " Implicit differentiation   Suppose is a curve in defined by an equation of the form , and let be a point on such that near the curve satisfies the vertical line test.   We can think of the portion of near as the graph of an implicit function relating as a function of .    Under the assumption in (1), we can compute the derivative of this implicit function at as follows:   Replace (mentally or explicitly) each instance of in with , to emphasize that we now treat as a function of .    Take the derivative of both sides of , with respect to , taking care to treat as a function of . You will make frequent use of the chain rule, as well as potentially the product and quotient rules, when doing so.    Attempt to solve for in terms of and , yielding an expression of the form .    Compute .         "
},
{
  "id": "eg_implicit_Ts",
  "level": "2",
  "url": "s_implicit.html#eg_implicit_Ts",
  "type": "Example",
  "number": "16.5",
  "title": "Tschirnhausen cubic.",
  "body": " Tschirnhausen cubic   The curve defined by the equation is called Tschirnhausen's cubic.   Verify that is a point on .    Use implicit differentiation to find an equation of the tangent line to at the point .    Assuming is can be understood as a function of for points on near , compute .          To verify that lies on , we simply evaluate the left- (LHS)and right-hand sides (RHS) of the defining equation and verify that they are equal: .    Following we write for each instance of in the defining equation of and then take the derivative of both sides of the equation with respect to : . The slope of the tangent line to at is thus given by . The equation of the tangent line, using point-slope form for this , is . Below you find a graph of and the tangent line to at .   Tschirnhausen cubic      To deduce information about we take the derivative with respect to of both sides of the equation we derived for : . We then compute .      "
},
{
  "id": "eg_implicit_ellipse",
  "level": "2",
  "url": "s_implicit.html#eg_implicit_ellipse",
  "type": "Example",
  "number": "16.6",
  "title": "Ellipse tangents.",
  "body": " Ellipse tangents   Let be the ellipse defined by the equation . Find all points on where the tangent line to at is horizontal.    Applying we have: . We look for point where , making the tangent line horizontal. According to our derivation above, for this to be the case we need need , or equivalently, . Substituting this back in to the defining equation of , we see that , or . We conclude that . Using , we see that the points are the two points where the tangent lines to are horizontal. Below you find a graph of , the points and , and their horizontal tangent lines.   A rotated ellipse     "
},
{
  "id": "eg_implicit_trig",
  "level": "2",
  "url": "s_implicit.html#eg_implicit_trig",
  "type": "Example",
  "number": "16.7",
  "title": "Implicit: trig equation.",
  "body": " Implicit: trig equation   Let the curve be defined by the equation .   Verify that is a point on this curve.    Find an equation of the tangent line to at .          It is easily seen that the point satisfies the defining equation of .    We apply : . For the point , we have and . Evaluating the last equation above at these values, we see that , and thus . It follows that the tangent line to at has defining equation . Below we graph and the tangent line at .      Implicit function with trig equation     "
},
{
  "id": "s_related_rates_I",
  "level": "1",
  "url": "s_related_rates_I.html",
  "type": "Section",
  "number": "17",
  "title": "Related rates I",
  "body": " Related rates I  Any time two functions are related via an equation, we can deduce an equation involving those functions and their derivatives by taking the derivative of both sides. When doing empirical modeling, this simple observation allows us to take an established relationship between two quantities and deduce a relationship between the rates of change of these quantities. This type of argument is at the heart of so-called related rates problems. Our example with the inflatable balloon provides a particularly easy introduction to this method, as here one quantity (volume) can be expressed entirely in terms of the other: in other words, the starting relation here is just a formula.   Inflating a balloon (redux)   The volume (in cm ) of a spherical inflatable balloon is computed as , where is the radius of the balloon (in cm).  What is the rate of change at time , assuming that the volume at this point is and the rate of inflation at is cm per s?    Letting and be the volume and radius of the balloon after seconds, we have and hence . It follows that the rate of change of volume seconds after inflating is . We are told that . Thus it remains only to determine , the radius of the balloon at this time. We can derive this from the given fact that . Indeed, we have , or cm. We conclude that . That is, at time the volume is increasing at a rate of cm per second.    The next example is more involved as now the relationship between the relevant quantities is not directly given in terms of a formula.   Sliding ladder   A ladder of length 5 meters leans against a vertical wall; the base of the ladder lies 3 meters from the wall. An unfortunate nudge from passerby Dudley causes the base to slide away from the wall at a rate of 1.25 m\/s. How quickly is the top of the ladder sliding towards the floor at this moment?    Define .   Functions and   Diagram of sliding ladder    We see easily from that . In terms of our introduced notation we have , and we wish to compute . Taking the derivative of both sides of , we have , and thus . It remains to compute . Evaluating at , we see that , and thus . We conclude that . In plain English, at the moment of the nudge the top of the ladder slides toward the ground at a rate of meters per second.     Related rates   The following steps are useful for modeling and solving a related rates problem.   Model the problem    Clearly define and name all important quantities in the problem.   Constant or static quantities should be assigned either a constant symbol or an explicit value.    Varying quantities should be modeled as functions of a common input quantity. Denote these quantities using function notation, taking care to define what the input variable is.    A careful drawing, labeled using the function names we've introduced, often clarifies the role of different quantities in the problem.       Express the numeric information provided by the problem in terms of the function notation you introduced in Step 1a.    Identify what the problem is asking us to compute in terms of the function notation introduced in Step 1a. We are almost always interested in some rate of change , and this should be expressed as the derivative of one of the functions we defined, or a specific value of that derivative.    Establish an equation that relates the various functions we are interested in.   This should be an equation relating functions of some common variable. As such this equation will look like a function identity.    A careful drawing, labeled using the function names we've introduced, will often help to derive this equation.         Do calculus    From the equation you established in Step 1d, derive a new equation that relates the derivative you are interested in with known values of functions and\/or derivatives of those functions. This usually amounts to computing the derivative of both sides of the original equation.    Use the new equation you derived in Step 2a to solve for the derivative function (or specific value thereof) you are interested in.      Summarize    Communicate the answer you derived in Step 2 in a plain English sentence that makes use of the language\/context of the stated problem.    Make sure that you do indeed answer the problem posed and include units details if applicable.          Sliding ladder: angle of inclination   Continuing with the setup as in , at what rate is the angle between the ladder and the ground changing at the moment when the base begins sliding?    We define .   Functions and   Sliding ladder diagram with angle    We wish to compute the rate of change of the angle with respect to time at the moment of the nudge. As illustrated by we have . Taking the derivative of both sides with respect to yields , and thus . We now compute , using the given fact that m\/s. It remains to compute . At time we have , as illustrated in .   Diagram at time   Sliding ladder diagram with angle initially    We conclude that . In plain English: at the moment of the nudge, the angle between the ladder and floor is decreasing at a rate of radians per second.     Stretched rubber sheet   A 20 m rectangular rubber sheet is placed in a stretching machine. Four seconds after the machine is turned on, the width of the rubber sheet is 10 meters and expanding at a rate of 0.25 m\/s. Is the height of the rubber sheet shrinking or expanding at this moment in time? How quickly is it shrinking or expanding. (Assume that during the shrinking process the area of the sheet remains constant and the sheet always maintains a rectangular shape.)    We define . In terms of our introduced notation, we have . We wish to compute , the rate of change of the height of the sheet with respect to time 4 seconds after the stretching begins. Since for all , taking the derivative of both sides of this equation with respect to yields . Thus we have , and , where we have computed , using . In plain English: four seconds after the stretching begins, the height of the rubber sheet is decreasing at rate of meters per second.    "
},
{
  "id": "eg_balloon",
  "level": "2",
  "url": "s_related_rates_I.html#eg_balloon",
  "type": "Example",
  "number": "17.1",
  "title": "Inflating a balloon (redux).",
  "body": " Inflating a balloon (redux)   The volume (in cm ) of a spherical inflatable balloon is computed as , where is the radius of the balloon (in cm).  What is the rate of change at time , assuming that the volume at this point is and the rate of inflation at is cm per s?    Letting and be the volume and radius of the balloon after seconds, we have and hence . It follows that the rate of change of volume seconds after inflating is . We are told that . Thus it remains only to determine , the radius of the balloon at this time. We can derive this from the given fact that . Indeed, we have , or cm. We conclude that . That is, at time the volume is increasing at a rate of cm per second.   "
},
{
  "id": "eg_sliding_ladder",
  "level": "2",
  "url": "s_related_rates_I.html#eg_sliding_ladder",
  "type": "Example",
  "number": "17.2",
  "title": "Sliding ladder.",
  "body": " Sliding ladder   A ladder of length 5 meters leans against a vertical wall; the base of the ladder lies 3 meters from the wall. An unfortunate nudge from passerby Dudley causes the base to slide away from the wall at a rate of 1.25 m\/s. How quickly is the top of the ladder sliding towards the floor at this moment?    Define .   Functions and   Diagram of sliding ladder    We see easily from that . In terms of our introduced notation we have , and we wish to compute . Taking the derivative of both sides of , we have , and thus . It remains to compute . Evaluating at , we see that , and thus . We conclude that . In plain English, at the moment of the nudge the top of the ladder slides toward the ground at a rate of meters per second.   "
},
{
  "id": "proc_related_rates",
  "level": "2",
  "url": "s_related_rates_I.html#proc_related_rates",
  "type": "Procedure",
  "number": "17.4",
  "title": "Related rates.",
  "body": " Related rates   The following steps are useful for modeling and solving a related rates problem.   Model the problem    Clearly define and name all important quantities in the problem.   Constant or static quantities should be assigned either a constant symbol or an explicit value.    Varying quantities should be modeled as functions of a common input quantity. Denote these quantities using function notation, taking care to define what the input variable is.    A careful drawing, labeled using the function names we've introduced, often clarifies the role of different quantities in the problem.       Express the numeric information provided by the problem in terms of the function notation you introduced in Step 1a.    Identify what the problem is asking us to compute in terms of the function notation introduced in Step 1a. We are almost always interested in some rate of change , and this should be expressed as the derivative of one of the functions we defined, or a specific value of that derivative.    Establish an equation that relates the various functions we are interested in.   This should be an equation relating functions of some common variable. As such this equation will look like a function identity.    A careful drawing, labeled using the function names we've introduced, will often help to derive this equation.         Do calculus    From the equation you established in Step 1d, derive a new equation that relates the derivative you are interested in with known values of functions and\/or derivatives of those functions. This usually amounts to computing the derivative of both sides of the original equation.    Use the new equation you derived in Step 2a to solve for the derivative function (or specific value thereof) you are interested in.      Summarize    Communicate the answer you derived in Step 2 in a plain English sentence that makes use of the language\/context of the stated problem.    Make sure that you do indeed answer the problem posed and include units details if applicable.        "
},
{
  "id": "eg_ladder_angle",
  "level": "2",
  "url": "s_related_rates_I.html#eg_ladder_angle",
  "type": "Example",
  "number": "17.5",
  "title": "Sliding ladder: angle of inclination.",
  "body": " Sliding ladder: angle of inclination   Continuing with the setup as in , at what rate is the angle between the ladder and the ground changing at the moment when the base begins sliding?    We define .   Functions and   Sliding ladder diagram with angle    We wish to compute the rate of change of the angle with respect to time at the moment of the nudge. As illustrated by we have . Taking the derivative of both sides with respect to yields , and thus . We now compute , using the given fact that m\/s. It remains to compute . At time we have , as illustrated in .   Diagram at time   Sliding ladder diagram with angle initially    We conclude that . In plain English: at the moment of the nudge, the angle between the ladder and floor is decreasing at a rate of radians per second.   "
},
{
  "id": "eg_stretched_rubber",
  "level": "2",
  "url": "s_related_rates_I.html#eg_stretched_rubber",
  "type": "Example",
  "number": "17.8",
  "title": "Stretched rubber sheet.",
  "body": " Stretched rubber sheet   A 20 m rectangular rubber sheet is placed in a stretching machine. Four seconds after the machine is turned on, the width of the rubber sheet is 10 meters and expanding at a rate of 0.25 m\/s. Is the height of the rubber sheet shrinking or expanding at this moment in time? How quickly is it shrinking or expanding. (Assume that during the shrinking process the area of the sheet remains constant and the sheet always maintains a rectangular shape.)    We define . In terms of our introduced notation, we have . We wish to compute , the rate of change of the height of the sheet with respect to time 4 seconds after the stretching begins. Since for all , taking the derivative of both sides of this equation with respect to yields . Thus we have , and , where we have computed , using . In plain English: four seconds after the stretching begins, the height of the rubber sheet is decreasing at rate of meters per second.   "
},
{
  "id": "s_related_rates_II",
  "level": "1",
  "url": "s_related_rates_II.html",
  "type": "Section",
  "number": "18",
  "title": "Related rates II",
  "body": " Related rates II  We continue practicing the use of to solve related rates problems.   Two trains   At time 1 pm a red train is traveling east toward a station at a rate of 50 km\/h, while a blue train is traveling north away from the station at 100 km\/h. At this moment the red train is 1 km from the station and the blue train is 0.25 km from the station. At what rate is the distance between the two trains changing at this moment in time? Take care to interpret the sign ( ) of your numeric answer.    We define .   Functions , , .   Diagram of red and blue trains    It follows easily from that . In terms of our introduced function notation, the given information of the problem is expressed as follows: . Note that is negative as the distance between the red train and the station is decreasing at 1 pm. Furthermore, from it follows that . Now, taking the derivative of both sides of , we see that , and hence . Finally, we compute . We conclude that at 1 pm, the distance between the two trains is decreasing at a rate of meters per second.     Using similar triangles   A light shines from the top of a pole 20 meters high. A ball is dropped from the same height at a point 12 meters away from the light pole. How fast is the shadow of the ball moving along the ground second later? Assume the ball falls a distance of meters in seconds.    We define .   Functions and   Diagram of lamp, ball, and shadow    Since after seconds the ball has dropped meters, and since its original height is 20 meters, we have . Next using the two similar right triangles in , we see that . We wish to compute . To do so we take the derivative of both sides of : . From this it follows that , where we have used the fact that . Lastly, to compute , we need to compute . This is determined by evaluating at and solving for . Since , we have . We conclude that . We conclude that -second after the drop the ball's shadow is traveling at a rate of 384 meters per second toward the lamp.    "
},
{
  "id": "eg_two_trains",
  "level": "2",
  "url": "s_related_rates_II.html#eg_two_trains",
  "type": "Example",
  "number": "18.1",
  "title": "Two trains.",
  "body": " Two trains   At time 1 pm a red train is traveling east toward a station at a rate of 50 km\/h, while a blue train is traveling north away from the station at 100 km\/h. At this moment the red train is 1 km from the station and the blue train is 0.25 km from the station. At what rate is the distance between the two trains changing at this moment in time? Take care to interpret the sign ( ) of your numeric answer.    We define .   Functions , , .   Diagram of red and blue trains    It follows easily from that . In terms of our introduced function notation, the given information of the problem is expressed as follows: . Note that is negative as the distance between the red train and the station is decreasing at 1 pm. Furthermore, from it follows that . Now, taking the derivative of both sides of , we see that , and hence . Finally, we compute . We conclude that at 1 pm, the distance between the two trains is decreasing at a rate of meters per second.   "
},
{
  "id": "eg_related_rates_similar",
  "level": "2",
  "url": "s_related_rates_II.html#eg_related_rates_similar",
  "type": "Example",
  "number": "18.3",
  "title": "Using similar triangles.",
  "body": " Using similar triangles   A light shines from the top of a pole 20 meters high. A ball is dropped from the same height at a point 12 meters away from the light pole. How fast is the shadow of the ball moving along the ground second later? Assume the ball falls a distance of meters in seconds.    We define .   Functions and   Diagram of lamp, ball, and shadow    Since after seconds the ball has dropped meters, and since its original height is 20 meters, we have . Next using the two similar right triangles in , we see that . We wish to compute . To do so we take the derivative of both sides of : . From this it follows that , where we have used the fact that . Lastly, to compute , we need to compute . This is determined by evaluating at and solving for . Since , we have . We conclude that . We conclude that -second after the drop the ball's shadow is traveling at a rate of 384 meters per second toward the lamp.   "
},
{
  "id": "s_linearize",
  "level": "1",
  "url": "s_linearize.html",
  "type": "Section",
  "number": "19",
  "title": "Linearization",
  "body": " Linearization     Define the linearization of a function at an input .    Understand the linearization of a function in terms of the tangent line to the graph of at the point .    Investigate linearization as an approximation tool. Discuss in what sense a linearization is a good approximation of a function .      Linearization of a function   Assume is differentiable at the input . The linearization of centered at is the affine function defined as .     Linearization  It is important to observe the centered at modifier in . In other words, the function defined in depends both on and the specific input .    Linearization: quadratic   Let . Compute the linearization of centered at , and the linearization of centered at .    First compute . Using , we have . Thus the linearization of centered at is , and the linearization centered at is the constant function .     Linearization and tangent lines  You may have noticed a resemblance to the formula for the linearization of centered at , and the tangent line to the graph of at . To be precise: the graph of the linearization function is precisely the tangent line to the graph of at the point .  By way of illustration, we graph the function in along with the linearizations and centered at and , respectively.   Linearizations of   Linearizations of a quadratic function       Linear approximation  Assume is differentiable at , and let be the linearization of centered at . As we can show, the differentiability of at ensures that values of the linearization are close to values of for inputs near . Indeed, we have . Consider what the limit statement tells us. Since , the numerator must be close to zero for close to . Furthermore, we must have approaching zero faster than approaches zero. More precisely, invoking the epsilon-delta definition of the limit, we can show that for any , we have for all sufficiently close to . After we introduce the mean value theorem , we will be able to give an even better quantitative description of just how good an approximation is to .    Linear approximation   Assume is is differentiable at , and let be the linearization of centered at .   For inputs close to , is a good approximation of : that is, we have for close to .    In paricular for an input close to , we have .        Linear approximation: quadratic   Let .   Use the linearization of centered at to estimate  .    Compare your estimate of with the actual value. How close are the two?          Recall that we computed . Thus we have .    The exact value is . Thus our estimate is off by : , .        Linear approximation: cube-root   Use linear approximation to estimate .    To use linear approximation, we need to compute the linearization of a function centered at some input . We take , and . Why ? I can compute and easily by hand, and is reasonably close to . We first compute . The linearization of centered at is then Lastly, we estimate . Using technology we see that . Our estimate ended up being pretty close!     Linear approximation: trig   Let . Use linear approximation to estimate .    We compute the linearization of centered at . First we compute the derivative of : . It follows that the linearization centered at is . Lastly we estimate .     Linear approximation: marshmallow   Dudley places a cylindrical marshmallow in the microwave, causing it to expand such a manner that the ratio of its height and radius is preserved. Initially the height and radius of the marshmallow are both equal to 2 centimeters; when Dudley removes the marshmallow the height and radius are both equal to 2.1 centimeters.   Use linear approximation to estimate the change in volume of the marshmallow.    Compare your estimate with the actual change in volume.       Since the radius and height of the marshmallow are initially equal, and since the marshmallow expands in such a way that the ratio of radius to height is preserved, we see that we always have , and thus , where . We thus treat volume as a function of the common dimension specifying both radius and height.   To estimate the change in volume, we compute the linearization of centered at . Since , we have . It follows that the change of volume can be estimated as     The exact change of volume is .       "
},
{
  "id": "s_linearize-2",
  "level": "2",
  "url": "s_linearize.html#s_linearize-2",
  "type": "Objectives",
  "number": "19",
  "title": "",
  "body": "   Define the linearization of a function at an input .    Understand the linearization of a function in terms of the tangent line to the graph of at the point .    Investigate linearization as an approximation tool. Discuss in what sense a linearization is a good approximation of a function .    "
},
{
  "id": "d_linearization",
  "level": "2",
  "url": "s_linearize.html#d_linearization",
  "type": "Definition",
  "number": "19.1",
  "title": "Linearization of a function.",
  "body": " Linearization of a function   Assume is differentiable at the input . The linearization of centered at is the affine function defined as .   "
},
{
  "id": "s_linearize-4",
  "level": "2",
  "url": "s_linearize.html#s_linearize-4",
  "type": "Remark",
  "number": "19.2",
  "title": "Linearization.",
  "body": " Linearization  It is important to observe the centered at modifier in . In other words, the function defined in depends both on and the specific input .  "
},
{
  "id": "eg_linearization_quadratic",
  "level": "2",
  "url": "s_linearize.html#eg_linearization_quadratic",
  "type": "Example",
  "number": "19.3",
  "title": "Linearization: quadratic.",
  "body": " Linearization: quadratic   Let . Compute the linearization of centered at , and the linearization of centered at .    First compute . Using , we have . Thus the linearization of centered at is , and the linearization centered at is the constant function .   "
},
{
  "id": "s_linearize-6",
  "level": "2",
  "url": "s_linearize.html#s_linearize-6",
  "type": "Remark",
  "number": "19.4",
  "title": "Linearization and tangent lines.",
  "body": " Linearization and tangent lines  You may have noticed a resemblance to the formula for the linearization of centered at , and the tangent line to the graph of at . To be precise: the graph of the linearization function is precisely the tangent line to the graph of at the point .  By way of illustration, we graph the function in along with the linearizations and centered at and , respectively.   Linearizations of   Linearizations of a quadratic function     "
},
{
  "id": "s_linearize-7",
  "level": "2",
  "url": "s_linearize.html#s_linearize-7",
  "type": "Remark",
  "number": "19.6",
  "title": "Linear approximation.",
  "body": " Linear approximation  Assume is differentiable at , and let be the linearization of centered at . As we can show, the differentiability of at ensures that values of the linearization are close to values of for inputs near . Indeed, we have . Consider what the limit statement tells us. Since , the numerator must be close to zero for close to . Furthermore, we must have approaching zero faster than approaches zero. More precisely, invoking the epsilon-delta definition of the limit, we can show that for any , we have for all sufficiently close to . After we introduce the mean value theorem , we will be able to give an even better quantitative description of just how good an approximation is to .  "
},
{
  "id": "proc_lin_approx",
  "level": "2",
  "url": "s_linearize.html#proc_lin_approx",
  "type": "Procedure",
  "number": "19.7",
  "title": "Linear approximation.",
  "body": " Linear approximation   Assume is is differentiable at , and let be the linearization of centered at .   For inputs close to , is a good approximation of : that is, we have for close to .    In paricular for an input close to , we have .      "
},
{
  "id": "eg_linear_approx_quadratic",
  "level": "2",
  "url": "s_linearize.html#eg_linear_approx_quadratic",
  "type": "Example",
  "number": "19.8",
  "title": "Linear approximation: quadratic.",
  "body": " Linear approximation: quadratic   Let .   Use the linearization of centered at to estimate  .    Compare your estimate of with the actual value. How close are the two?          Recall that we computed . Thus we have .    The exact value is . Thus our estimate is off by : , .      "
},
{
  "id": "eg_linear_approx_cuberoot",
  "level": "2",
  "url": "s_linearize.html#eg_linear_approx_cuberoot",
  "type": "Example",
  "number": "19.9",
  "title": "Linear approximation: cube-root.",
  "body": " Linear approximation: cube-root   Use linear approximation to estimate .    To use linear approximation, we need to compute the linearization of a function centered at some input . We take , and . Why ? I can compute and easily by hand, and is reasonably close to . We first compute . The linearization of centered at is then Lastly, we estimate . Using technology we see that . Our estimate ended up being pretty close!   "
},
{
  "id": "eg_linear_approx_trig",
  "level": "2",
  "url": "s_linearize.html#eg_linear_approx_trig",
  "type": "Example",
  "number": "19.10",
  "title": "Linear approximation: trig.",
  "body": " Linear approximation: trig   Let . Use linear approximation to estimate .    We compute the linearization of centered at . First we compute the derivative of : . It follows that the linearization centered at is . Lastly we estimate .   "
},
{
  "id": "eg_linear_approx_marshmallow",
  "level": "2",
  "url": "s_linearize.html#eg_linear_approx_marshmallow",
  "type": "Example",
  "number": "19.11",
  "title": "Linear approximation: marshmallow.",
  "body": " Linear approximation: marshmallow   Dudley places a cylindrical marshmallow in the microwave, causing it to expand such a manner that the ratio of its height and radius is preserved. Initially the height and radius of the marshmallow are both equal to 2 centimeters; when Dudley removes the marshmallow the height and radius are both equal to 2.1 centimeters.   Use linear approximation to estimate the change in volume of the marshmallow.    Compare your estimate with the actual change in volume.       Since the radius and height of the marshmallow are initially equal, and since the marshmallow expands in such a way that the ratio of radius to height is preserved, we see that we always have , and thus , where . We thus treat volume as a function of the common dimension specifying both radius and height.   To estimate the change in volume, we compute the linearization of centered at . Since , we have . It follows that the change of volume can be estimated as     The exact change of volume is .      "
},
{
  "id": "s_extreme",
  "level": "1",
  "url": "s_extreme.html",
  "type": "Section",
  "number": "20",
  "title": "Extreme value theorem",
  "body": " Extreme value theorem     Use the derivative to investigate optimization questions.    Understand the extreme value theorem in the context of optimization.    Define absolute and local maximum and minimum values of a function on a given set .    Identify extreme values of a function graphically.    Introduce the notion of critical points as potential inputs where a function attains a local (or absolute) maximum or minimum.    Develop a procedure that determines the absolute maximum and minimum values of a continuous function on a closed finite interval.     In our remaining lessons, we will frequently take up what are called optimization questions. Roughly speaking, these are questions related to the maximum and minimum values of a function on a given set. Optimization problems are naturally important in modeling situations: when modeling a quantity as a function of some other quantity , we naturally are interested in knowing whether it attains a maximal or minimal value, what that maximal or minimal value is (if it exists), and which inputs produces this value. The extreme value theorem represents a wonderfully straightforward to this first flavor of optimization problem: it tells us that if is continuous on the closed interval , then there is guaranteed to be both a maximal and minimal value. A shortcoming of this theorem is that it gives no indication of what exactly these maximum\/minimum values are (or how to find them)! We amend this situation in .  The statement of the extreme value theorem involves the notion of an absolute maximum\/minimum value of a function on a given set . Imagining this is intuitively clear to the reader, we launch straight into a discussion of the extreme value theorem. Afterward, we give precise definitions both for absolute and local maximum and minimum values. If you would like to see those definitions first, see .   Extreme value theorem   If is continuous on the closed interval , then there are inputs and for which is the absolute maximum value of on and is the absolute minimum value of on . In plain English: a continuous function always attains a maximum and minimum value over a closed interval .    The proof of this intuitive statement is just beyond our reach in terms of our current conceptual framework: we are missing only the notion of least upper bounds. In later math courses, like real analysis and topology, you develop an exceedingly important concept called compactness that allows you to eventually give a beautiful one-line proof of the extreme value theorem.    Although we do not give an actual proof the extreme value theorem, you can catch a glimmer of its truth by treating it graphically. Try the following: pick an interval in the -plane; pick endpoint values and for an arbitrary function and graph the corresponding points; now trace out the rest of the graph of your arbitrary , making it as wildly behaved as you like, but with the restriction that you pencil never leaves the paper ( is continuous) and the start and end values are and . You will see that now matter what function you end up sketching, it will always have reach a well-defined highest point (corresponding to the maximum value) and a well-defined lowest point (corresponding to the minimum value). The restriction that we cannot lift our pencil prevents our graph from going arbitrarily high (or low), or from getting arbitrarily close to a highest point but not actually hitting it.  Perhaps a more illustrative means of understanding the role of continuity in the extreme value theorem is to consider examples where this condition is removed.   Extreme values: discontinuous   The functions and graphed below illustrate how crucial continuity is to the extreme value theorem.   Extreme values and discontinuous functions    Graph of   Graph of has a vertical asymptote      Graph of   Graph of has a removable discontinuity       The function has infinite one-sided limits at , and as a consequence has neither a maximum nor a minimum value on the closed interval .  The function has values that get arbitrarily close to but not equal to , thanks to the removable discontinuity. As a result, has no maximum value on the interval: we have for all , and for any value less than , there is an input with .     Extreme values: open interval   As illustrated below, the function has no absolute maximum or minimum value on the open interval . This illustrates why the extreme value theorem insists that the finite interval in question must be closed .  Graph of   Graph of the tangent function         Extreme values   Assume is defined on the set , and let be an element of .    is an absolute maximum value of on if for all .     is an absolute minimum value of on if for all .     is a local maximum value of on if for all sufficiently close to .     is a local minimum value of on if for all sufficiently close to .     is an extreme value of on if it is an absolute or local maximum or minimum value of on .        Absolute max\/min implies local max\/min  Assume is defined on an interval . Observer that as pure logical consequence of the definitions, if is an absolute maximum or minimum value of on , then it is also a local maximum or minimum value of on . Indeed, if (resp. ) for all  , then the inequality certainly holds for all  sufficiently close to .    Local extreme values  In the phrase sufficiently close to is used as a convenient, but slightly less than rigorous shorthand. To be more precise in this definition we treat interior and endpoints of the set separately.  Given an interior point , we say that is a local maximum (resp., minimum) value of on if there is an open interval containing such that is an absolute maximum (resp., minimum) value on .  Similarly, if is a left (resp., right) endpoint of , then is a local maximum (resp., minimum) value of on if there is a half-open interval (resp., ) contained in such that is an absolute maximum (resp., minimum) value on .  In summary, for to be a local maximum or minimum value on means simply that there is some interval (or half-interval in the endpoint case) contained in on which is an absolute maximum or minimum value. Thus to identify graphically the local extreme values of a function , look for inputs such that when we restrict our gaze to the segment of the graph of lying over a small interval around , is seen to be an absolute maximum or minimum value.    Local and absolute extreme values   A graph of the function on the interval is graphed below.   Identify all and any inputs where has a local maximum or minimum value of on .    Decide whether has an absolute maximum value on , and whether has an absolute minimum value on .      Graph of   Graph of function with various local extrema          The function has a local maximum value at the left endpoint : indeed, we have for all (thus for all sufficiently close to ). The value at the right endpoint, somewhat surprisingly, is also a local max: for all we have .  Additionally, we see that is a local minimum value of , since for all . Finally, is easily seen to be the absolute maximum value of on . It follows from that is also a local minimum value of on     We have already observed that is the absolute maximum value of on . We claim that there is no absolute minimum value. To see why, first note that for all . Thus, if were an absolute minimum value of on we would have . However, since , for any , we can find an such that . It follows that has no absolute minimum value on .        Critical points and extreme values  Fermat   Assume is defined on and that is an interior point of . If is a local maximum or minimum value of on , and if is differentiable at , then .    We will show that if is a local maximum value of on and is differentiable at , then . The argument for the case where is a local minimum is exactly similar.  Firstly, since is assumed to be a local maximum value, we can find an interval containing such that for all .  Next, since is differentiable at , the limit exists, and we have . Observe further that using we have . Next, since for all sufficiently close to (more precisely, for all ), for all sufficiently close to . It follows that , and thus, taking limits, that . Since , we conclude that , as desired.    According to , points where either is not differentiable, or where are important to us, as these are candidates where the value is potentially a local maximum or minimum. Accordingly, we give such inputs a special name: critical points.   Critical point   Let be defined on . An element is a critical point of if either or is not differentiable at .    Let us now do some synthesis of the above theory. Assume is continuous on the closed interval .   According to there are inputs and in where attains its absolute maximum and minimum values, respectively.    In particular, and are local extreme values of the function.    According to , if and are interior points of , then they must be critical points of : , is either not differentiable at there, or is equal to zero there.    We conclude that the inputs and where attains its absolute extreme values are either one of the endpoints, or of the interval, or one of the critical points of in the interior of the interval.   Our synthesis gives rise to the following procedure for finding the absolute extreme values of a continuous function on a closed interval.   Extreme value theorem   Assume is continuous on the closed interval . To determine the absolute maximum and minimum values of on , proceed as follows.   Identify candidate inputs  The candidate inputs where potentially attains a maximum or minimum value consist of (i) the endpoints and of the interval along with the set of all critical points of lying in . We determine the latter by finding all solutions to the equation lying in , and identifying all elements of where is not differentiable.    Evaluate  Evaluate at all candidate inputs you found in Step 1.    Compare values  Compare the values of computed in Step 2. The maximum value in that set is the absolute maximum value of on ; the minimum value in that set is the minimum value of on .        Extreme values: factored polynomial   Let . Find the absolute maximum and minimum values of on the interval .    First compute . Note that is differentiable everywhere on the interval , so to find critical points we find all solutions to lying in . The key technique for solving this equation is factoring : . We now see that the last equality holds if and only if . These are thus our critical points. We now evaluate at these critical points, as well as at the endpoints of the interval: . Comparing these values, we conclude that is the absolute maximum value of on , and is the absolute minimum value of on .     Extreme values: trig   Let . Find the absolute maximum and minimum values of on the interval .    The function is easily seen to be differentiable everywhere, with . To find critical points, we solve: . Reactivating our trig expertise, we realize that the solutions to the last equation come in two infinite lists: . Thus the solutions lying in the interior of the given interval are . Now evaluate at our candidates, the two critical points and the two endpoints: . Admittedly, comparing these values is somewhat challenging without the use of technology. It turns out that , and thus that is the absolute minimum value of on , and is the absolute maximum value of on . Below you find a graph of that bears out our analysis.   Graph of example function revealing the extreme values.       Distance between graphs   Let and . Find the maximum vertical distance between the graphs of and on the interval     The vertical distance point and on the two graphs is measured by . Thus we are interested in the extreme values of on the interval . For we have . Note that is not differentiable at , and thus this is one of our critical points. To find the others we solve: . We now evaluate at our three critical points, as well as the endpoints: . We conclude that on , or equivalently, . Thus the vertical maximal distance between the two graphs is and this occurs at the inputs . Below you find two diagrams that illustrate this result: the first depitcts the graphs of and separately, and the second is a graph of the difference function .   Comparing graphs of and    Graphs of and   Graphs of and      Graphs of and   Graphs of , , and         "
},
{
  "id": "s_extreme-2",
  "level": "2",
  "url": "s_extreme.html#s_extreme-2",
  "type": "Objectives",
  "number": "20",
  "title": "",
  "body": "   Use the derivative to investigate optimization questions.    Understand the extreme value theorem in the context of optimization.    Define absolute and local maximum and minimum values of a function on a given set .    Identify extreme values of a function graphically.    Introduce the notion of critical points as potential inputs where a function attains a local (or absolute) maximum or minimum.    Develop a procedure that determines the absolute maximum and minimum values of a continuous function on a closed finite interval.    "
},
{
  "id": "th_extreme",
  "level": "2",
  "url": "s_extreme.html#th_extreme",
  "type": "Theorem",
  "number": "20.1",
  "title": "Extreme value theorem.",
  "body": " Extreme value theorem   If is continuous on the closed interval , then there are inputs and for which is the absolute maximum value of on and is the absolute minimum value of on . In plain English: a continuous function always attains a maximum and minimum value over a closed interval .    The proof of this intuitive statement is just beyond our reach in terms of our current conceptual framework: we are missing only the notion of least upper bounds. In later math courses, like real analysis and topology, you develop an exceedingly important concept called compactness that allows you to eventually give a beautiful one-line proof of the extreme value theorem.   "
},
{
  "id": "eg_extreme_discontinuous",
  "level": "2",
  "url": "s_extreme.html#eg_extreme_discontinuous",
  "type": "Example",
  "number": "20.2",
  "title": "Extreme values: discontinuous.",
  "body": " Extreme values: discontinuous   The functions and graphed below illustrate how crucial continuity is to the extreme value theorem.   Extreme values and discontinuous functions    Graph of   Graph of has a vertical asymptote      Graph of   Graph of has a removable discontinuity       The function has infinite one-sided limits at , and as a consequence has neither a maximum nor a minimum value on the closed interval .  The function has values that get arbitrarily close to but not equal to , thanks to the removable discontinuity. As a result, has no maximum value on the interval: we have for all , and for any value less than , there is an input with .   "
},
{
  "id": "eg_extreme_open",
  "level": "2",
  "url": "s_extreme.html#eg_extreme_open",
  "type": "Example",
  "number": "20.4",
  "title": "Extreme values: open interval.",
  "body": " Extreme values: open interval   As illustrated below, the function has no absolute maximum or minimum value on the open interval . This illustrates why the extreme value theorem insists that the finite interval in question must be closed .  Graph of   Graph of the tangent function       "
},
{
  "id": "d_extrema",
  "level": "2",
  "url": "s_extreme.html#d_extrema",
  "type": "Definition",
  "number": "20.6",
  "title": "Extreme values.",
  "body": " Extreme values   Assume is defined on the set , and let be an element of .    is an absolute maximum value of on if for all .     is an absolute minimum value of on if for all .     is a local maximum value of on if for all sufficiently close to .     is a local minimum value of on if for all sufficiently close to .     is an extreme value of on if it is an absolute or local maximum or minimum value of on .      "
},
{
  "id": "rm_abs_local",
  "level": "2",
  "url": "s_extreme.html#rm_abs_local",
  "type": "Remark",
  "number": "20.7",
  "title": "Absolute max\/min implies local max\/min.",
  "body": " Absolute max\/min implies local max\/min  Assume is defined on an interval . Observer that as pure logical consequence of the definitions, if is an absolute maximum or minimum value of on , then it is also a local maximum or minimum value of on . Indeed, if (resp. ) for all  , then the inequality certainly holds for all  sufficiently close to .  "
},
{
  "id": "s_extreme-12",
  "level": "2",
  "url": "s_extreme.html#s_extreme-12",
  "type": "Remark",
  "number": "20.8",
  "title": "Local extreme values.",
  "body": " Local extreme values  In the phrase sufficiently close to is used as a convenient, but slightly less than rigorous shorthand. To be more precise in this definition we treat interior and endpoints of the set separately.  Given an interior point , we say that is a local maximum (resp., minimum) value of on if there is an open interval containing such that is an absolute maximum (resp., minimum) value on .  Similarly, if is a left (resp., right) endpoint of , then is a local maximum (resp., minimum) value of on if there is a half-open interval (resp., ) contained in such that is an absolute maximum (resp., minimum) value on .  In summary, for to be a local maximum or minimum value on means simply that there is some interval (or half-interval in the endpoint case) contained in on which is an absolute maximum or minimum value. Thus to identify graphically the local extreme values of a function , look for inputs such that when we restrict our gaze to the segment of the graph of lying over a small interval around , is seen to be an absolute maximum or minimum value.  "
},
{
  "id": "eg_local_extrema",
  "level": "2",
  "url": "s_extreme.html#eg_local_extrema",
  "type": "Example",
  "number": "20.9",
  "title": "Local and absolute extreme values.",
  "body": " Local and absolute extreme values   A graph of the function on the interval is graphed below.   Identify all and any inputs where has a local maximum or minimum value of on .    Decide whether has an absolute maximum value on , and whether has an absolute minimum value on .      Graph of   Graph of function with various local extrema          The function has a local maximum value at the left endpoint : indeed, we have for all (thus for all sufficiently close to ). The value at the right endpoint, somewhat surprisingly, is also a local max: for all we have .  Additionally, we see that is a local minimum value of , since for all . Finally, is easily seen to be the absolute maximum value of on . It follows from that is also a local minimum value of on     We have already observed that is the absolute maximum value of on . We claim that there is no absolute minimum value. To see why, first note that for all . Thus, if were an absolute minimum value of on we would have . However, since , for any , we can find an such that . It follows that has no absolute minimum value on .      "
},
{
  "id": "th_crit_pt",
  "level": "2",
  "url": "s_extreme.html#th_crit_pt",
  "type": "Theorem",
  "number": "20.11",
  "title": "Critical points and extreme values.",
  "body": " Critical points and extreme values  Fermat   Assume is defined on and that is an interior point of . If is a local maximum or minimum value of on , and if is differentiable at , then .    We will show that if is a local maximum value of on and is differentiable at , then . The argument for the case where is a local minimum is exactly similar.  Firstly, since is assumed to be a local maximum value, we can find an interval containing such that for all .  Next, since is differentiable at , the limit exists, and we have . Observe further that using we have . Next, since for all sufficiently close to (more precisely, for all ), for all sufficiently close to . It follows that , and thus, taking limits, that . Since , we conclude that , as desired.   "
},
{
  "id": "d_crit_pt",
  "level": "2",
  "url": "s_extreme.html#d_crit_pt",
  "type": "Definition",
  "number": "20.12",
  "title": "Critical point.",
  "body": " Critical point   Let be defined on . An element is a critical point of if either or is not differentiable at .   "
},
{
  "id": "proc_extreme",
  "level": "2",
  "url": "s_extreme.html#proc_extreme",
  "type": "Procedure",
  "number": "20.13",
  "title": "Extreme value theorem.",
  "body": " Extreme value theorem   Assume is continuous on the closed interval . To determine the absolute maximum and minimum values of on , proceed as follows.   Identify candidate inputs  The candidate inputs where potentially attains a maximum or minimum value consist of (i) the endpoints and of the interval along with the set of all critical points of lying in . We determine the latter by finding all solutions to the equation lying in , and identifying all elements of where is not differentiable.    Evaluate  Evaluate at all candidate inputs you found in Step 1.    Compare values  Compare the values of computed in Step 2. The maximum value in that set is the absolute maximum value of on ; the minimum value in that set is the minimum value of on .      "
},
{
  "id": "eg_extreme_factored_poly",
  "level": "2",
  "url": "s_extreme.html#eg_extreme_factored_poly",
  "type": "Example",
  "number": "20.14",
  "title": "Extreme values: factored polynomial.",
  "body": " Extreme values: factored polynomial   Let . Find the absolute maximum and minimum values of on the interval .    First compute . Note that is differentiable everywhere on the interval , so to find critical points we find all solutions to lying in . The key technique for solving this equation is factoring : . We now see that the last equality holds if and only if . These are thus our critical points. We now evaluate at these critical points, as well as at the endpoints of the interval: . Comparing these values, we conclude that is the absolute maximum value of on , and is the absolute minimum value of on .   "
},
{
  "id": "eg_extreme_trig",
  "level": "2",
  "url": "s_extreme.html#eg_extreme_trig",
  "type": "Example",
  "number": "20.15",
  "title": "Extreme values: trig.",
  "body": " Extreme values: trig   Let . Find the absolute maximum and minimum values of on the interval .    The function is easily seen to be differentiable everywhere, with . To find critical points, we solve: . Reactivating our trig expertise, we realize that the solutions to the last equation come in two infinite lists: . Thus the solutions lying in the interior of the given interval are . Now evaluate at our candidates, the two critical points and the two endpoints: . Admittedly, comparing these values is somewhat challenging without the use of technology. It turns out that , and thus that is the absolute minimum value of on , and is the absolute maximum value of on . Below you find a graph of that bears out our analysis.   Graph of example function revealing the extreme values.     "
},
{
  "id": "eg_extreme_graphs",
  "level": "2",
  "url": "s_extreme.html#eg_extreme_graphs",
  "type": "Example",
  "number": "20.16",
  "title": "Distance between graphs.",
  "body": " Distance between graphs   Let and . Find the maximum vertical distance between the graphs of and on the interval     The vertical distance point and on the two graphs is measured by . Thus we are interested in the extreme values of on the interval . For we have . Note that is not differentiable at , and thus this is one of our critical points. To find the others we solve: . We now evaluate at our three critical points, as well as the endpoints: . We conclude that on , or equivalently, . Thus the vertical maximal distance between the two graphs is and this occurs at the inputs . Below you find two diagrams that illustrate this result: the first depitcts the graphs of and separately, and the second is a graph of the difference function .   Comparing graphs of and    Graphs of and   Graphs of and      Graphs of and   Graphs of , , and        "
},
{
  "id": "s_mean_value",
  "level": "1",
  "url": "s_mean_value.html",
  "type": "Section",
  "number": "21",
  "title": "Mean value theorem",
  "body": " Mean value theorem     Derive Rolle's theorem and the mean value theorem (MVT) as consequences of .    Interpret Rolle's theorem and the MVT both geometrically (in terms of tangent lines) and physically (in terms of instantaneous rates of change).    Derive consequences of the MVT to various mathematical applications: , characterization of functions satisfying for all , existence of roots of functions within specific intervals, inequalities.      Rolle's theorem   Assume is continuous on and differentiable on . If , then there is an input satisfying .    Let be the common value of at the endpoints. If for all inputs ( , is a constant function), then for all inputs , and our desired conclusion is trivially satisfied.  Assume now that is not constant. Since is continuous on there are points and in where attains its absolute maximum and minimum values. Since is not constant on , we must have or . Assume without loss of generality that is an absolute extreme value of on . The input must be an interior point of , since and . Since is differentiable everywhere on , implies , as desired.     Interpretations of Rolle's theorem  Let satisfy the assumptions of Rolle's theorem on the interval .  Geometrically, we interpret Rolle's theorem as follows: if the endpoints of the graph of over lie on the same horizontal line, then there is an input for which the tangent line to the graph of at is horizontal.  In terms of rate of change, we interpret Rolle's theorem as follows: if the average rate of change of between and is equal to zero, then there is an input where the instantaneous rate of change is equal to zero.   Rolle's theorem turns out to be a special case of the mean value theorem , where the function in question satisfies . As a peculiar twist, however, the mean value theorem can also be seen as just a tilted version of Rolle's theorem. In logical terms, the two theorems, though quite different in content, are logically equivalent!   Mean value theorem (MVT)   Assume is continuous on and differentiable on . There is an input satisfying .    We employ a little trick that reveals MVT to be a simple consequence of Rolle's theorem. Define . As is easily verified, is continuous on , differentiable on and satisfies . Applying Rolle's theorem to on , we conlude that for some . We conclude, using we conclude that , or equivalently , as desired.     Speeding motorist   While traveling in Ontario, Dudley pilots his motor car along Queen Elizabeth Way (aka the QEW). The posted speed limit along this stretch of motorway is 120 km per hr. At 12 pm Dudley passes St. Catherines, and by 12:25 pm he reaches Hamilton, which is 60 km down the road. Prove: at some point during this excursion Dudley has exceeded the speed limit!         Constant function characterization   Assume is continuous on an interval . If satisfies for all interior points , then is a constant function on . As a consequence, a function is constant on an interval if and only if its derivative is the zero function on .    Take any two distinct points . We may assume without loss of generality that . The assumptions on guarantee that it is both continuous (since differentiable) on and differentiable on the interior of . The mean value theorem then implies that we have for some . By assumption, however, we have . But then . We have shown that for any we have . In other words, is a constant function on , as desired.     Functions with identical derivatives   Assume and are continuous on an interval . If for all interior points , then there is a constant satisfying for all . In plain English, if two functions have identical derivative functions over an interval , then they differ by a constant.    Let . Since for all interior points , we conclude by that is a constant function on : , there is a constant such that for all . But then , as desired.     Number of roots   Show that the function has exactly one root in the interval .    Since is continuous everywhere, and satisfies and , the intermediate value theorem implies there is an element satisfying : , has at least one root . It remains to show that is the only root of in .  Suppose by contradiction that had two distinct roots . Without loss of generality, we can assume . Since is differentiable everywhere, the mean value theorem would imply that there exists satifying , where we have used the fact that since and are roots of . But this is impossible since, as the derivative satisfies for all . (See diagram below.) Since we have reached a contradiction, we conclude that there is only one root of lying in , as desired.   Graph of   Graph of derivative of f        Interesting inequality   Prove that for all .    Consider . We wish to show that for all .    Let . The desired inequality is equivalent to the inequality for all , which we now endeavor to demonstrate. First observe that for all . Indeed, we have . Next, since is continuous on and differentiable on , given any , the mean value theorem implies that there exists a satisfying . This implies , since and . We have shown that for all , and hence that for all .    For the curious, we end with a useful corollary of the mean value theorem that yields a numerically more precise description of how good of an approximation the linearization of a function centered at is for near . This result (and its proof) will not be assessed on any quiz or exam in this course.   Taylor's theorem ( )   Assume is twice differentiable on an interval containing as in interior point. Let be the linearization of centered at . For all we have . As a result, if for some constant and all , then we have for all .    See text.    "
},
{
  "id": "s_mean_value-2",
  "level": "2",
  "url": "s_mean_value.html#s_mean_value-2",
  "type": "Objectives",
  "number": "21",
  "title": "",
  "body": "   Derive Rolle's theorem and the mean value theorem (MVT) as consequences of .    Interpret Rolle's theorem and the MVT both geometrically (in terms of tangent lines) and physically (in terms of instantaneous rates of change).    Derive consequences of the MVT to various mathematical applications: , characterization of functions satisfying for all , existence of roots of functions within specific intervals, inequalities.    "
},
{
  "id": "th_rolles",
  "level": "2",
  "url": "s_mean_value.html#th_rolles",
  "type": "Theorem",
  "number": "21.1",
  "title": "Rolle’s theorem.",
  "body": " Rolle's theorem   Assume is continuous on and differentiable on . If , then there is an input satisfying .    Let be the common value of at the endpoints. If for all inputs ( , is a constant function), then for all inputs , and our desired conclusion is trivially satisfied.  Assume now that is not constant. Since is continuous on there are points and in where attains its absolute maximum and minimum values. Since is not constant on , we must have or . Assume without loss of generality that is an absolute extreme value of on . The input must be an interior point of , since and . Since is differentiable everywhere on , implies , as desired.   "
},
{
  "id": "s_mean_value-4",
  "level": "2",
  "url": "s_mean_value.html#s_mean_value-4",
  "type": "Remark",
  "number": "21.2",
  "title": "Interpretations of Rolle’s theorem.",
  "body": " Interpretations of Rolle's theorem  Let satisfy the assumptions of Rolle's theorem on the interval .  Geometrically, we interpret Rolle's theorem as follows: if the endpoints of the graph of over lie on the same horizontal line, then there is an input for which the tangent line to the graph of at is horizontal.  In terms of rate of change, we interpret Rolle's theorem as follows: if the average rate of change of between and is equal to zero, then there is an input where the instantaneous rate of change is equal to zero.  "
},
{
  "id": "th_mean_value",
  "level": "2",
  "url": "s_mean_value.html#th_mean_value",
  "type": "Theorem",
  "number": "21.3",
  "title": "Mean value theorem (MVT).",
  "body": " Mean value theorem (MVT)   Assume is continuous on and differentiable on . There is an input satisfying .    We employ a little trick that reveals MVT to be a simple consequence of Rolle's theorem. Define . As is easily verified, is continuous on , differentiable on and satisfies . Applying Rolle's theorem to on , we conlude that for some . We conclude, using we conclude that , or equivalently , as desired.   "
},
{
  "id": "eg_mvt_speeding",
  "level": "2",
  "url": "s_mean_value.html#eg_mvt_speeding",
  "type": "Example",
  "number": "21.4",
  "title": "Speeding motorist.",
  "body": " Speeding motorist   While traveling in Ontario, Dudley pilots his motor car along Queen Elizabeth Way (aka the QEW). The posted speed limit along this stretch of motorway is 120 km per hr. At 12 pm Dudley passes St. Catherines, and by 12:25 pm he reaches Hamilton, which is 60 km down the road. Prove: at some point during this excursion Dudley has exceeded the speed limit!       "
},
{
  "id": "cor_constant_functions",
  "level": "2",
  "url": "s_mean_value.html#cor_constant_functions",
  "type": "Corollary",
  "number": "21.5",
  "title": "Constant function characterization.",
  "body": " Constant function characterization   Assume is continuous on an interval . If satisfies for all interior points , then is a constant function on . As a consequence, a function is constant on an interval if and only if its derivative is the zero function on .    Take any two distinct points . We may assume without loss of generality that . The assumptions on guarantee that it is both continuous (since differentiable) on and differentiable on the interior of . The mean value theorem then implies that we have for some . By assumption, however, we have . But then . We have shown that for any we have . In other words, is a constant function on , as desired.   "
},
{
  "id": "cor_same_derivative",
  "level": "2",
  "url": "s_mean_value.html#cor_same_derivative",
  "type": "Corollary",
  "number": "21.6",
  "title": "Functions with identical derivatives.",
  "body": " Functions with identical derivatives   Assume and are continuous on an interval . If for all interior points , then there is a constant satisfying for all . In plain English, if two functions have identical derivative functions over an interval , then they differ by a constant.    Let . Since for all interior points , we conclude by that is a constant function on : , there is a constant such that for all . But then , as desired.   "
},
{
  "id": "eg_mean_roots",
  "level": "2",
  "url": "s_mean_value.html#eg_mean_roots",
  "type": "Example",
  "number": "21.7",
  "title": "Number of roots.",
  "body": " Number of roots   Show that the function has exactly one root in the interval .    Since is continuous everywhere, and satisfies and , the intermediate value theorem implies there is an element satisfying : , has at least one root . It remains to show that is the only root of in .  Suppose by contradiction that had two distinct roots . Without loss of generality, we can assume . Since is differentiable everywhere, the mean value theorem would imply that there exists satifying , where we have used the fact that since and are roots of . But this is impossible since, as the derivative satisfies for all . (See diagram below.) Since we have reached a contradiction, we conclude that there is only one root of lying in , as desired.   Graph of   Graph of derivative of f      "
},
{
  "id": "eg_mean_inequality",
  "level": "2",
  "url": "s_mean_value.html#eg_mean_inequality",
  "type": "Example",
  "number": "21.9",
  "title": "Interesting inequality.",
  "body": " Interesting inequality   Prove that for all .    Consider . We wish to show that for all .    Let . The desired inequality is equivalent to the inequality for all , which we now endeavor to demonstrate. First observe that for all . Indeed, we have . Next, since is continuous on and differentiable on , given any , the mean value theorem implies that there exists a satisfying . This implies , since and . We have shown that for all , and hence that for all .   "
},
{
  "id": "cor_mean_taylor",
  "level": "2",
  "url": "s_mean_value.html#cor_mean_taylor",
  "type": "Corollary",
  "number": "21.10",
  "title": "Taylor’s theorem (<span xmlns:pf=\"https:\/\/prefigure.org\" class=\"process-math\">\\(k=1\\)<\/span>).",
  "body": " Taylor's theorem ( )   Assume is twice differentiable on an interval containing as in interior point. Let be the linearization of centered at . For all we have . As a result, if for some constant and all , then we have for all .    See text.   "
},
{
  "id": "s_first_der_test",
  "level": "1",
  "url": "s_first_der_test.html",
  "type": "Section",
  "number": "22",
  "title": "Monotonicity and first derivative test",
  "body": " Monotonicity and first derivative test   Increasing, decreasing, monotonic   Assume is defined on the interval .    is increasing on if implies for all .     is decreasing on if implies for all .     is monotonic on if it is either increasing on or decreasing on .        Derivative and monotonicity   Assume is continuous on the interval .   If for all interior points , then is a constant function on .    If for all interior points , then is increasing on .    If for all interior points , then is decreasing on .       Statement (1) is identical to , which we have already proved.  The proofs of (2) and (3) are nearly identical. We prove (2). Assume for all interior points . Suppose satisfy . Since the function is continuous on and differentiable on , the mean value theorem implies for some . But then, after a little algebra, we see that , since by assumption. Thus we have shown for all . In other words, is increasing on .    Before putting to good analytic work on some example functions, we first illustrate that we cannot apply the theorem if the underlying set is not an interval .   Monotonicity: reciprocal   Let with domain . Observe that is negative for all . However it is not true that is decreasing on its entire domain : indeed, we have , and yet .  What went wrong here? Why couldn't we apply ? The answer is that is not an interval! In fact we have , a union of two intervals. We are permitted to apply to and separately to conclude that is decreasing on each of these intervals, but this does not imply that it is increasing on their union.    According to determining the sets on which a function is increasing\/decreasing essentially amounts to solving the inequalities and . This is most efficiently done using a sign diagram of , as illustrated in the next example and defined more precisely in .   Monotonicity: polynomial   Let . Find all intervals where is increasing, and all intervals where is decreasing.    We compute . Since is continuous, and since are the only roots of , the intermediate value theorem implies that is either always positive or always negative on each of the resulting intervals . This means we can determine the sign of on each interval by evaluating it at one test point. It is easy to see that . Thus the sign of for various portions of the real line is described by the following sign diagram .   Sign diagram for derivative of f    Note that underneath the information about the sign of , we have indicated the implied increasing\/decreasing behavior of .  From the sign diagram we conclude that is increasing on the intervals and , and decreasing on the interval .    Let's give a formal description of the technique used in the example above.   Intervals of monotonicity   Assume is continuous on . To determine the intervals where is increasing or decreasing, proceed as follows.   Find all critical points of in     Draw a real line representation of that includes the critical points you found in Step 1.    Make a sign diagram of your real line representation of .   Label the top part of this diagram and indicate with the sign of on a given interval.    (Optional). Label the bottom part of the diagam and indicate with arrows whether is increasing or decreasing on a given interval.           First derivative test   Assume that is a critical point of the function , and that is differentiable near, but not necessarily at .   If the sign of changes from positive to negative at , then is a local maximum value of .    If the sign of changes from negative to positive at , then is a local minimum value of .    If is nonzero near and the sign does not change at , then is neither a local maximum value nor a local minimum value of .        Classify critical points: first derivative test   Let be continuous on the set . To find and classify all critical points of as corresponding to a local maximum value of , a local minimum value of , or neither, proceed as follows.   Find all critical points of .    Make a sign diagram of .    For each critical point of , use and your sign diagram to determine whether is a local maximum value of , local minimum value of , or neither.        Classifying critical points: polynomial   Let . Find all critical points of , and for each critical point classify as a local maximum value of , a local minimum value of , or neither.    In the course of the sign diagram from we saw that were the critical points of . Since the sign of switches from positive to negative at , is a local maximum value of ; since the sign of switches from negative to positive at , is a local minimum value of . Since for close to and since the sign of does not switch at , we see that is neither a local maximum nor a local minimum value.     Monotonicity and critical points: trig   Let and let .   Find all critical points of , and for each critical point classify as a local maximum value of , a local minimum value of , or neither.    Apply to find the intervals of monotonicity of within .       We first compute . Since is differentiable everywhere, critical points of are solutions to . We thus solve: . We have if and only if for some integer . Only one of these solutions lies in : namely, . Next, observing that , and recalling facts about the unit circle, we see that solves if and only if for some integer . There are exactly two such solutions lying in : namely, and . In conclusion, the critical points of are .  To finish the problem essentially all we have to do is produce the sign diagram of .   Sign diagram of derivative of trig function    This was produced by performing the following test point evaluations: .  It follows that is a local minimum value, is a local maximum value, and is a local minimum value of .  Furthermore, we see that within the interval the function is increasing on and , and decreasing on and .  We verify our conclusions below with the actual graph of on .   Graph of   Graph of the trig function of the example        Monotonicity and critical points: radical   Let . Find all critical points of , and for each critical point classify as a local maximum value of , local minimum value of , or neither.    Note first that the implied domain of is . Following , we first determine the critical points of . Note first that in this case is not differentiable at , making these critical points. Next, for all , we compute using the product and chain rules: . It follows that we have if and only if , or equivalently, . We conclude that there are in total four critical points: (where is not differentiable), and .   Sign diagram for derivative of example function    This diagram was the result of the following test point evaluations of : . Note that .  We conclude that and are local maximum values, and and are local minimum values. These conclusions are verified by the actual graph of .   Graph of   Graph of the original function of the example       "
},
{
  "id": "d_monotonic",
  "level": "2",
  "url": "s_first_der_test.html#d_monotonic",
  "type": "Definition",
  "number": "22.1",
  "title": "Increasing, decreasing, monotonic.",
  "body": " Increasing, decreasing, monotonic   Assume is defined on the interval .    is increasing on if implies for all .     is decreasing on if implies for all .     is monotonic on if it is either increasing on or decreasing on .      "
},
{
  "id": "th_monoton",
  "level": "2",
  "url": "s_first_der_test.html#th_monoton",
  "type": "Theorem",
  "number": "22.2",
  "title": "Derivative and monotonicity.",
  "body": " Derivative and monotonicity   Assume is continuous on the interval .   If for all interior points , then is a constant function on .    If for all interior points , then is increasing on .    If for all interior points , then is decreasing on .       Statement (1) is identical to , which we have already proved.  The proofs of (2) and (3) are nearly identical. We prove (2). Assume for all interior points . Suppose satisfy . Since the function is continuous on and differentiable on , the mean value theorem implies for some . But then, after a little algebra, we see that , since by assumption. Thus we have shown for all . In other words, is increasing on .   "
},
{
  "id": "eg_monoton_recip",
  "level": "2",
  "url": "s_first_der_test.html#eg_monoton_recip",
  "type": "Example",
  "number": "22.3",
  "title": "Monotonicity: reciprocal.",
  "body": " Monotonicity: reciprocal   Let with domain . Observe that is negative for all . However it is not true that is decreasing on its entire domain : indeed, we have , and yet .  What went wrong here? Why couldn't we apply ? The answer is that is not an interval! In fact we have , a union of two intervals. We are permitted to apply to and separately to conclude that is decreasing on each of these intervals, but this does not imply that it is increasing on their union.   "
},
{
  "id": "eg_monoton_poly",
  "level": "2",
  "url": "s_first_der_test.html#eg_monoton_poly",
  "type": "Example",
  "number": "22.4",
  "title": "Monotonicity: polynomial.",
  "body": " Monotonicity: polynomial   Let . Find all intervals where is increasing, and all intervals where is decreasing.    We compute . Since is continuous, and since are the only roots of , the intermediate value theorem implies that is either always positive or always negative on each of the resulting intervals . This means we can determine the sign of on each interval by evaluating it at one test point. It is easy to see that . Thus the sign of for various portions of the real line is described by the following sign diagram .   Sign diagram for derivative of f    Note that underneath the information about the sign of , we have indicated the implied increasing\/decreasing behavior of .  From the sign diagram we conclude that is increasing on the intervals and , and decreasing on the interval .   "
},
{
  "id": "proc_intervals_monoto",
  "level": "2",
  "url": "s_first_der_test.html#proc_intervals_monoto",
  "type": "Procedure",
  "number": "22.5",
  "title": "Intervals of monotonicity.",
  "body": " Intervals of monotonicity   Assume is continuous on . To determine the intervals where is increasing or decreasing, proceed as follows.   Find all critical points of in     Draw a real line representation of that includes the critical points you found in Step 1.    Make a sign diagram of your real line representation of .   Label the top part of this diagram and indicate with the sign of on a given interval.    (Optional). Label the bottom part of the diagam and indicate with arrows whether is increasing or decreasing on a given interval.         "
},
{
  "id": "th_first_der_test",
  "level": "2",
  "url": "s_first_der_test.html#th_first_der_test",
  "type": "Theorem",
  "number": "22.6",
  "title": "First derivative test.",
  "body": " First derivative test   Assume that is a critical point of the function , and that is differentiable near, but not necessarily at .   If the sign of changes from positive to negative at , then is a local maximum value of .    If the sign of changes from negative to positive at , then is a local minimum value of .    If is nonzero near and the sign does not change at , then is neither a local maximum value nor a local minimum value of .      "
},
{
  "id": "proc_class_crit_pts",
  "level": "2",
  "url": "s_first_der_test.html#proc_class_crit_pts",
  "type": "Procedure",
  "number": "22.7",
  "title": "Classify critical points: first derivative test.",
  "body": " Classify critical points: first derivative test   Let be continuous on the set . To find and classify all critical points of as corresponding to a local maximum value of , a local minimum value of , or neither, proceed as follows.   Find all critical points of .    Make a sign diagram of .    For each critical point of , use and your sign diagram to determine whether is a local maximum value of , local minimum value of , or neither.      "
},
{
  "id": "eg_first_der_test_poly",
  "level": "2",
  "url": "s_first_der_test.html#eg_first_der_test_poly",
  "type": "Example",
  "number": "22.8",
  "title": "Classifying critical points: polynomial.",
  "body": " Classifying critical points: polynomial   Let . Find all critical points of , and for each critical point classify as a local maximum value of , a local minimum value of , or neither.    In the course of the sign diagram from we saw that were the critical points of . Since the sign of switches from positive to negative at , is a local maximum value of ; since the sign of switches from negative to positive at , is a local minimum value of . Since for close to and since the sign of does not switch at , we see that is neither a local maximum nor a local minimum value.   "
},
{
  "id": "eg_first_der_test_trig",
  "level": "2",
  "url": "s_first_der_test.html#eg_first_der_test_trig",
  "type": "Example",
  "number": "22.9",
  "title": "Monotonicity and critical points: trig.",
  "body": " Monotonicity and critical points: trig   Let and let .   Find all critical points of , and for each critical point classify as a local maximum value of , a local minimum value of , or neither.    Apply to find the intervals of monotonicity of within .       We first compute . Since is differentiable everywhere, critical points of are solutions to . We thus solve: . We have if and only if for some integer . Only one of these solutions lies in : namely, . Next, observing that , and recalling facts about the unit circle, we see that solves if and only if for some integer . There are exactly two such solutions lying in : namely, and . In conclusion, the critical points of are .  To finish the problem essentially all we have to do is produce the sign diagram of .   Sign diagram of derivative of trig function    This was produced by performing the following test point evaluations: .  It follows that is a local minimum value, is a local maximum value, and is a local minimum value of .  Furthermore, we see that within the interval the function is increasing on and , and decreasing on and .  We verify our conclusions below with the actual graph of on .   Graph of   Graph of the trig function of the example      "
},
{
  "id": "eg_first_der_test_rad",
  "level": "2",
  "url": "s_first_der_test.html#eg_first_der_test_rad",
  "type": "Example",
  "number": "22.11",
  "title": "Monotonicity and critical points: radical.",
  "body": " Monotonicity and critical points: radical   Let . Find all critical points of , and for each critical point classify as a local maximum value of , local minimum value of , or neither.    Note first that the implied domain of is . Following , we first determine the critical points of . Note first that in this case is not differentiable at , making these critical points. Next, for all , we compute using the product and chain rules: . It follows that we have if and only if , or equivalently, . We conclude that there are in total four critical points: (where is not differentiable), and .   Sign diagram for derivative of example function    This diagram was the result of the following test point evaluations of : . Note that .  We conclude that and are local maximum values, and and are local minimum values. These conclusions are verified by the actual graph of .   Graph of   Graph of the original function of the example      "
},
{
  "id": "s_concavity",
  "level": "1",
  "url": "s_concavity.html",
  "type": "Section",
  "number": "23",
  "title": "Concavity and inflection points",
  "body": " Concavity and inflection points   Logistic growth   A logistic function is often used to model a quantity whose growth is prevented from being unlimited by some external factors. These functions are used, for example, to model the growth of a population, or the growth of sales of a product. Below you find the graph of this type of function.   Graph of logsitic growth function   Graph of logistic growth function        What does the apparent horizontal asymptote of tells us about the quantity as a function of time?    Give a detailed qualitative description of the rate of change of with respect to over the interval .    Give a detailed qualitative description of the rate of change of with respect to over the interval . Explain why this description makes sense in light of the long term growth of .    Do you notice anything interesting about the value of at ?          The function is increasing on its entire domain, with a horizontal asymptote of , meaning that . This means the quantity is always growing, approaches a ceiling value of , but never reaches that value. (The value in a logistic function like this is called the carrying capacity of in modeling contexts.)    As always, the rate of change of with respect to is the derivative function . We see that for the slope of the tangent line to the graph of at is positive, and gets more positive as increases. This means that is positive and increasing. In terms of , this means that is increasing at an increasing rate over this interval.    Similar reasoning shows that for the rate of change is positive but getting less positive ( , is decreasing). In terms of , this means that is increasing at a decreasing rate over this interval. This makes sense in terms of the limiting value of : since cannot exceed this value, its rate of increase must level off as it gets closer in value to .    It appears that . As it turns out, this is a special property that holds for all logistic functions. In more detail, our previous analysis identifies as the unique inflection point of the function . (See .) In the modeling context is sometimes called a point of diminishing returns , since the rate of increase of levels off after that point. It turns out that for any logistic function the value of the function at this point in time is always equal to , half of the carrying capacity .  This property of logistic functions is useful for predicting the ceiling value of a quantity you are studying. Imagine you take daily measurements of a growing population of bacteria that you believe is accurately modeled by a logistic function. From that data you can compute the average rate of change over each day, which you interpret as an estimate of the instantaneous rate of change of growth each day. On the first day that you notice your rate of growth estimate has decreased from the previous day, you conclude that you have reached (approximately) the point of diminishing returns. If the population on that day is , you estimate that the ceiling of the population is .        Concavity and inflection points   Assume is differentiable on the open interval .    is concave up on if is increasing on .     is concave down on if is decreasing on .    If the graph of has a well-defined tangent line at , and if the concavity of changes at , then is called an inflection point of , and we say that has an inflection point at the input .        Concavity  Graphically speaking, a function will be concave up over an interval if the graph of over bends upward (or is smiley ), and it is concave down if the graph of over bends downward (or is frowny ).    Inflection points  The somewhat convoluted definition of an inflection point is designed to allow inflection points to exist at an input even if the function is not differentiable at .  For example, the function is not differentiable at , but the graph of still has a well-defined tangent line at the point : the issue is only that that tangent line is vertical. Our definition allows for to potentially be an inflection point. Indeed, we see that is an inflection point: is increasing for and decreasing for ; thus is concave up to the left of and concave down to the right of .  On the other hand, consider the function . Although the concavity changes at (from up to down), the graph of does not have a tangent line at , and thus does not qualify as an inflection point.   Applying to , we immediately derive the following theorem.    Assume is twice differentiable on the open interval .   If for all , then is concave up on .    If for all , then is concave down on .    If has an inflection point at , then .        Concavity and inflection points   Assume is defined on a set . To determine intervals of constant concavity of and identify inflection points proceed as follows.   Make a sign diagram of over . Indicate on your real line any inputs where is zero or undefined.   Label the top part of the diagram and indicate with the sign of on a given interval.    (Optional). Label the bottom part of the diagram and indicate with or the concavity of on the given interval.       For each input where is either zero or undefined, decide using and whether has an inflection point at .        Concavity: radical function   Let . Find the intervals of constant concavity of and identify any inputs where has an inflection point.    We readily compute for . (Note that neither nor are defined at .) From the formula for , we see that . We conclude that is concave up on and concave down on , and that the point is the sole inflection point of .     Concavity: polynomial   Let . Find the intervals of constant concavity of and identify any inputs where has an inflection point.    We compute . Below you find a sign diagram for .   Sign diagram for second derivative of f    We conclude that is concave down on the intervals $(-\\infty, -1\/\\sqrt{2})$ and $(0,1\/\\sqrt{2})$, and concave up on the intervals $(-1\/\\sqrt{2},0)$ and $(1\/\\sqrt{2},\\infty)$.  It follows that has inflection points at the inputs .     Second derivative test   Assume is continuous on an open interval containing .   If and , then is a local minimum value of .    If and , then is a local maximum value of .    If and , then nothing can be concluded about the critical point . In other words, our text is inconclusive in this case.        Second derivative test: polynomial   Let . Find all critical points of , and for each critical point  attempt to use to classify as a local maximum value or local minimum value.    We have seen previously in that the critical points of are . We apply the second derivative test to each, using : . Note that although the second derivative test is inconclusive for the critical point , we were able to show using the first derivative test in that in fact is neither a local maximum nor local minimum value. This illustrates an important difference between the first derivative and second derivative tests: the former is always inconclusive, whereas the latter is sometimes inconclusive.    "
},
{
  "id": "eg_concavity_logistic_growth",
  "level": "2",
  "url": "s_concavity.html#eg_concavity_logistic_growth",
  "type": "Example",
  "number": "23.1",
  "title": "Logistic growth.",
  "body": " Logistic growth   A logistic function is often used to model a quantity whose growth is prevented from being unlimited by some external factors. These functions are used, for example, to model the growth of a population, or the growth of sales of a product. Below you find the graph of this type of function.   Graph of logsitic growth function   Graph of logistic growth function        What does the apparent horizontal asymptote of tells us about the quantity as a function of time?    Give a detailed qualitative description of the rate of change of with respect to over the interval .    Give a detailed qualitative description of the rate of change of with respect to over the interval . Explain why this description makes sense in light of the long term growth of .    Do you notice anything interesting about the value of at ?          The function is increasing on its entire domain, with a horizontal asymptote of , meaning that . This means the quantity is always growing, approaches a ceiling value of , but never reaches that value. (The value in a logistic function like this is called the carrying capacity of in modeling contexts.)    As always, the rate of change of with respect to is the derivative function . We see that for the slope of the tangent line to the graph of at is positive, and gets more positive as increases. This means that is positive and increasing. In terms of , this means that is increasing at an increasing rate over this interval.    Similar reasoning shows that for the rate of change is positive but getting less positive ( , is decreasing). In terms of , this means that is increasing at a decreasing rate over this interval. This makes sense in terms of the limiting value of : since cannot exceed this value, its rate of increase must level off as it gets closer in value to .    It appears that . As it turns out, this is a special property that holds for all logistic functions. In more detail, our previous analysis identifies as the unique inflection point of the function . (See .) In the modeling context is sometimes called a point of diminishing returns , since the rate of increase of levels off after that point. It turns out that for any logistic function the value of the function at this point in time is always equal to , half of the carrying capacity .  This property of logistic functions is useful for predicting the ceiling value of a quantity you are studying. Imagine you take daily measurements of a growing population of bacteria that you believe is accurately modeled by a logistic function. From that data you can compute the average rate of change over each day, which you interpret as an estimate of the instantaneous rate of change of growth each day. On the first day that you notice your rate of growth estimate has decreased from the previous day, you conclude that you have reached (approximately) the point of diminishing returns. If the population on that day is , you estimate that the ceiling of the population is .      "
},
{
  "id": "d_concav_inflect",
  "level": "2",
  "url": "s_concavity.html#d_concav_inflect",
  "type": "Definition",
  "number": "23.3",
  "title": "Concavity and inflection points.",
  "body": " Concavity and inflection points   Assume is differentiable on the open interval .    is concave up on if is increasing on .     is concave down on if is decreasing on .    If the graph of has a well-defined tangent line at , and if the concavity of changes at , then is called an inflection point of , and we say that has an inflection point at the input .      "
},
{
  "id": "s_concavity-4",
  "level": "2",
  "url": "s_concavity.html#s_concavity-4",
  "type": "Remark",
  "number": "23.4",
  "title": "Concavity.",
  "body": " Concavity  Graphically speaking, a function will be concave up over an interval if the graph of over bends upward (or is smiley ), and it is concave down if the graph of over bends downward (or is frowny ).  "
},
{
  "id": "s_concavity-5",
  "level": "2",
  "url": "s_concavity.html#s_concavity-5",
  "type": "Remark",
  "number": "23.5",
  "title": "Inflection points.",
  "body": " Inflection points  The somewhat convoluted definition of an inflection point is designed to allow inflection points to exist at an input even if the function is not differentiable at .  For example, the function is not differentiable at , but the graph of still has a well-defined tangent line at the point : the issue is only that that tangent line is vertical. Our definition allows for to potentially be an inflection point. Indeed, we see that is an inflection point: is increasing for and decreasing for ; thus is concave up to the left of and concave down to the right of .  On the other hand, consider the function . Although the concavity changes at (from up to down), the graph of does not have a tangent line at , and thus does not qualify as an inflection point.  "
},
{
  "id": "th_concavity",
  "level": "2",
  "url": "s_concavity.html#th_concavity",
  "type": "Theorem",
  "number": "23.6",
  "title": "",
  "body": "  Assume is twice differentiable on the open interval .   If for all , then is concave up on .    If for all , then is concave down on .    If has an inflection point at , then .      "
},
{
  "id": "proc_concavity",
  "level": "2",
  "url": "s_concavity.html#proc_concavity",
  "type": "Procedure",
  "number": "23.7",
  "title": "Concavity and inflection points.",
  "body": " Concavity and inflection points   Assume is defined on a set . To determine intervals of constant concavity of and identify inflection points proceed as follows.   Make a sign diagram of over . Indicate on your real line any inputs where is zero or undefined.   Label the top part of the diagram and indicate with the sign of on a given interval.    (Optional). Label the bottom part of the diagram and indicate with or the concavity of on the given interval.       For each input where is either zero or undefined, decide using and whether has an inflection point at .      "
},
{
  "id": "eg_concavity_rad",
  "level": "2",
  "url": "s_concavity.html#eg_concavity_rad",
  "type": "Example",
  "number": "23.8",
  "title": "Concavity: radical function.",
  "body": " Concavity: radical function   Let . Find the intervals of constant concavity of and identify any inputs where has an inflection point.    We readily compute for . (Note that neither nor are defined at .) From the formula for , we see that . We conclude that is concave up on and concave down on , and that the point is the sole inflection point of .   "
},
{
  "id": "eg_concavity_poly",
  "level": "2",
  "url": "s_concavity.html#eg_concavity_poly",
  "type": "Example",
  "number": "23.9",
  "title": "Concavity: polynomial.",
  "body": " Concavity: polynomial   Let . Find the intervals of constant concavity of and identify any inputs where has an inflection point.    We compute . Below you find a sign diagram for .   Sign diagram for second derivative of f    We conclude that is concave down on the intervals $(-\\infty, -1\/\\sqrt{2})$ and $(0,1\/\\sqrt{2})$, and concave up on the intervals $(-1\/\\sqrt{2},0)$ and $(1\/\\sqrt{2},\\infty)$.  It follows that has inflection points at the inputs .   "
},
{
  "id": "th_second_der",
  "level": "2",
  "url": "s_concavity.html#th_second_der",
  "type": "Theorem",
  "number": "23.10",
  "title": "Second derivative test.",
  "body": " Second derivative test   Assume is continuous on an open interval containing .   If and , then is a local minimum value of .    If and , then is a local maximum value of .    If and , then nothing can be concluded about the critical point . In other words, our text is inconclusive in this case.      "
},
{
  "id": "eg_second_der",
  "level": "2",
  "url": "s_concavity.html#eg_second_der",
  "type": "Example",
  "number": "23.11",
  "title": "Second derivative test: polynomial.",
  "body": " Second derivative test: polynomial   Let . Find all critical points of , and for each critical point  attempt to use to classify as a local maximum value or local minimum value.    We have seen previously in that the critical points of are . We apply the second derivative test to each, using : . Note that although the second derivative test is inconclusive for the critical point , we were able to show using the first derivative test in that in fact is neither a local maximum nor local minimum value. This illustrates an important difference between the first derivative and second derivative tests: the former is always inconclusive, whereas the latter is sometimes inconclusive.   "
},
{
  "id": "s_curve_sketch_I",
  "level": "1",
  "url": "s_curve_sketch_I.html",
  "type": "Section",
  "number": "24",
  "title": "Curve sketching I",
  "body": " Curve sketching I     Bring all our calculus tools to bear on the analysis of a real-valued function . In more detail: determine the domain, the -intercept and any -intercepts; compute the limit of the function at endpoints of the domain and determine whether there are horizontal asymptotes; determine whether there are vertical asymptotes; find and classify all critical points of ; determine the intervals of monotonicity; determine intervals of constant concavity; identify any inflection points.    Express the results of our analysis of a function's behavior in the form of a detailed sketch.      Curve sketching   When asked to give an accurate sketch of the graph of a function , we seek to produce a sketch that accurately reflects the following properties:   the domain of ;     - and -intercepts of ;    horizontal asymptotes, and more generally, the endpoint behavior of ( , limits of as approaches endpoints of );    vertical asymptotes;    critical points of , classified as points where attains a local maximum value, a local minimum value, or neither;    intervals of monotonicity of ( , intervals where is either increasing or decreasing);    intervals of constant concavity of ;    inflection points of .        Curve sketch: polynomial   Provide a graph of that includes all the details listed in .     Domain and intercepts  The domain of is . The -intercept of the graph of is .  To find the -intercepts we solve: . Thus the -intercepts are .    Endpoint behavior and vertical asymptotes  Since is continuous at all points of , there are no vertical asymptotes.  For endpoint behavior, we compute . In particular, we see that there are no horizontal asymptotes of the graph of .    Critical points and intervals of monotonicity  We saw in that the critical points of are , that is a local maximum value, is a local minimum value, and is neither, that is increasing on the intervals and and decreasing on the interval . All of this information is summarized by the sign diagram of .   Sign diagram for derivative of f      Concavity and inflection points  We analyzed the concavity of in . The sign diagram we produced there gives a nice summary of the situation.   Sign diagram for second derivative of f    In particular, observe that we have inflection points at the inputs .    Important points  Our analysis is more or less complete. We should first, however, make a table of values (to the best of our abilities) for all important points on our graph. . Finally we put everything together into a single sketch.  Graph of function         Curve sketching: rational function   Provide a graph of that includes all the details listed in .    For the sake of space, our solution will be slightly more terse than in the previous example. We first observe that the domain of is and that is both the - and -intercept.  Since is continuous everywhere on , it has not vertical asymptotes. Using , we see easily that , and thus that is a horizontal asymptote of .  Next we compute . The sign diagrams for and are given below.    Sign diagram for derivative of f     Sign diagram for derivative of f     We see then that has a single critical point at , that is a local minimum value of , and that is decreasing on and increasing on . Furthermore, has inflection points at and , is concave down on and , and concave up on .  To finish our analysis we make a table of values of important points: . Putting everything together, we obtain a graph like the following.   Graph of function      Hello PreTeXt!  "
},
{
  "id": "s_curve_sketch_I-2",
  "level": "2",
  "url": "s_curve_sketch_I.html#s_curve_sketch_I-2",
  "type": "Objectives",
  "number": "24",
  "title": "",
  "body": "   Bring all our calculus tools to bear on the analysis of a real-valued function . In more detail: determine the domain, the -intercept and any -intercepts; compute the limit of the function at endpoints of the domain and determine whether there are horizontal asymptotes; determine whether there are vertical asymptotes; find and classify all critical points of ; determine the intervals of monotonicity; determine intervals of constant concavity; identify any inflection points.    Express the results of our analysis of a function's behavior in the form of a detailed sketch.    "
},
{
  "id": "proc_curve_sketching",
  "level": "2",
  "url": "s_curve_sketch_I.html#proc_curve_sketching",
  "type": "Procedure",
  "number": "24.1",
  "title": "Curve sketching.",
  "body": " Curve sketching   When asked to give an accurate sketch of the graph of a function , we seek to produce a sketch that accurately reflects the following properties:   the domain of ;     - and -intercepts of ;    horizontal asymptotes, and more generally, the endpoint behavior of ( , limits of as approaches endpoints of );    vertical asymptotes;    critical points of , classified as points where attains a local maximum value, a local minimum value, or neither;    intervals of monotonicity of ( , intervals where is either increasing or decreasing);    intervals of constant concavity of ;    inflection points of .      "
},
{
  "id": "eg_curve_poly",
  "level": "2",
  "url": "s_curve_sketch_I.html#eg_curve_poly",
  "type": "Example",
  "number": "24.2",
  "title": "Curve sketch: polynomial.",
  "body": " Curve sketch: polynomial   Provide a graph of that includes all the details listed in .     Domain and intercepts  The domain of is . The -intercept of the graph of is .  To find the -intercepts we solve: . Thus the -intercepts are .    Endpoint behavior and vertical asymptotes  Since is continuous at all points of , there are no vertical asymptotes.  For endpoint behavior, we compute . In particular, we see that there are no horizontal asymptotes of the graph of .    Critical points and intervals of monotonicity  We saw in that the critical points of are , that is a local maximum value, is a local minimum value, and is neither, that is increasing on the intervals and and decreasing on the interval . All of this information is summarized by the sign diagram of .   Sign diagram for derivative of f      Concavity and inflection points  We analyzed the concavity of in . The sign diagram we produced there gives a nice summary of the situation.   Sign diagram for second derivative of f    In particular, observe that we have inflection points at the inputs .    Important points  Our analysis is more or less complete. We should first, however, make a table of values (to the best of our abilities) for all important points on our graph. . Finally we put everything together into a single sketch.  Graph of function       "
},
{
  "id": "eg_curve_rational",
  "level": "2",
  "url": "s_curve_sketch_I.html#eg_curve_rational",
  "type": "Example",
  "number": "24.3",
  "title": "Curve sketching: rational function.",
  "body": " Curve sketching: rational function   Provide a graph of that includes all the details listed in .    For the sake of space, our solution will be slightly more terse than in the previous example. We first observe that the domain of is and that is both the - and -intercept.  Since is continuous everywhere on , it has not vertical asymptotes. Using , we see easily that , and thus that is a horizontal asymptote of .  Next we compute . The sign diagrams for and are given below.    Sign diagram for derivative of f     Sign diagram for derivative of f     We see then that has a single critical point at , that is a local minimum value of , and that is decreasing on and increasing on . Furthermore, has inflection points at and , is concave down on and , and concave up on .  To finish our analysis we make a table of values of important points: . Putting everything together, we obtain a graph like the following.   Graph of function     "
},
{
  "id": "s_curve_sketch_II",
  "level": "1",
  "url": "s_curve_sketch_II.html",
  "type": "Section",
  "number": "25",
  "title": "Curve sketching II",
  "body": " Curve sketching II     Bring all our calculus tools to bear on the analysis of a real-valued function . In more detail: determine the domain, the -intercept and any -intercepts; compute the limit of the function at endpoints of the domain and determine whether there are horizontal asymptotes; determine whether there are vertical asymptotes; find and classify all critical points of ; determine the intervals of monotonicity; determine intervals of constant concavity; identify any inflection points.    Express the results of our analysis of a function's behavior in the form of a detailed sketch.      Curve sketch: trig   Provide a graph of that includes all the details listed in to the best of your abilities .      Domain and intercepts      Endpoint behavior and vertical asymptotes      Critical points and intervals of monotonicity      Concavity and inflection points         Curve sketching: rational function   Provide a graph of that includes all the details listed in .      Domain and intercepts  The domain of is . The point is both the unique -intercept and the -intercept.    Endpoint behavior and vertical asymptotes      Critical points and intervals of monotonicity      Concavity and inflection points        "
},
{
  "id": "s_curve_sketch_II-2",
  "level": "2",
  "url": "s_curve_sketch_II.html#s_curve_sketch_II-2",
  "type": "Objectives",
  "number": "25",
  "title": "",
  "body": "   Bring all our calculus tools to bear on the analysis of a real-valued function . In more detail: determine the domain, the -intercept and any -intercepts; compute the limit of the function at endpoints of the domain and determine whether there are horizontal asymptotes; determine whether there are vertical asymptotes; find and classify all critical points of ; determine the intervals of monotonicity; determine intervals of constant concavity; identify any inflection points.    Express the results of our analysis of a function's behavior in the form of a detailed sketch.    "
},
{
  "id": "eg_curve_trig",
  "level": "2",
  "url": "s_curve_sketch_II.html#eg_curve_trig",
  "type": "Example",
  "number": "25.1",
  "title": "Curve sketch: trig.",
  "body": " Curve sketch: trig   Provide a graph of that includes all the details listed in to the best of your abilities .      Domain and intercepts      Endpoint behavior and vertical asymptotes      Critical points and intervals of monotonicity      Concavity and inflection points       "
},
{
  "id": "eg_curve_radical",
  "level": "2",
  "url": "s_curve_sketch_II.html#eg_curve_radical",
  "type": "Example",
  "number": "25.2",
  "title": "Curve sketching: rational function.",
  "body": " Curve sketching: rational function   Provide a graph of that includes all the details listed in .      Domain and intercepts  The domain of is . The point is both the unique -intercept and the -intercept.    Endpoint behavior and vertical asymptotes      Critical points and intervals of monotonicity      Concavity and inflection points       "
},
{
  "id": "s_applied_opt_I",
  "level": "1",
  "url": "s_applied_opt_I.html",
  "type": "Section",
  "number": "26",
  "title": "Applied optimization",
  "body": " Applied optimization     Model real world questions as an optimization problem about a function .    Use calculus techniques to fully analyze a modeled optimization problem and provide an answer in the form of a complete sentence.      Box of maximum volume   A square piece of cardboard of dimension meters is made into a box by cutting squares of equal dimension out of each corner and folding up the sides. (See .) Find the dimension of the cutout squares that maximizes the volume of the resulting box.   A box from a square   A square to a box           Applied optimization   The following steps are useful for modeling and solving a word problem involving optimization.   Model the problem     Make a detailed, labeled diagram summarizing the situation described.    Clearly define and name all important quantities in the problem.    Write down any important equations or formulas involving the quantities at play.    Identify the quantity that is to be optimized.   Look for language suggesting maximum or minimum values: , largest , most , greatest , smallest , least , .          Solve optimization problem     Express the quantity we wish to optimize as a function of exactly one variable.   If the quantity appears to be given as a function of more than one independent variable, look for a constraint equation that allows us to reduce to exactly one independent variable.    Make explicit what the domain of this function is, using the context of the problem.       Translate the given word problem as one of our types of optimization problems ( , EVT, find\/classify critical points, curve sketching, ) for the function .    Use an appropriate procedure ( , EVT procedure, find\/classify critical points, curve sketching, ) to solve the given optimization problem.   The domain of plays an important role in this step. In particular, pay attention to whether or not is a closed finite interval.          Summarize     Communicate the answer you derived in Step 2 in a plain English sentence that makes use of the language\/context of the stated problem.    Make sure that you do indeed answer the problem posed and include units details if applicable.           Minimal fence perimeter   Farmer Dudley is building a rectangular pen for his iguanas. He will use the 50 meter long side of his barn as one side of the pen, and will construct fencing for the remaining three sides of the pen. The pen must have a total area of 200 m . What is the minimum length of fencing Dudley must build to create an iguana pen matching these specifications.        It is often the case that the domain of the function we wish to optimize is not of the simple form , where applies. The following generalization comes in handy in such situations.   Generalized extreme value theorem   Let be an interval of any sort ( , can be open, closed, or neither, and can be finite or infinite), and let and be the (possibly infinite) left and right endpoints of . Assume is continuous on . To investigate whether attains a maximum or minimum value on , proceed as follows.   Identify candidate inputs  The candidate inputs where potentially attains a local maximum or minimum value consist of the (i) any finite endpoints of that are elements of , and (ii) any critical points of lying in .    Evaluate  Evaluate at all candidates you found in Step 1. Let be the minimum of these values, and let be the maximum of these values.    Evaluate endpoint limits  Evaluate the two endpoint limits and . (In the case where the given endpoint is infinite, the one-sided limit is understood simply as the corresponding limit at infinity.)    Compare , , and endpoint limits  Assume that each limit in Step 3 either exists or is infinite.   If neither of the endpoint limits from Step 3 is less than or equal to , then is the absolute minimum value of on . Otherwise, there is no absolute minimum value.    If neither of the endpoint limits from Step 3 is greater than or equal to , then is the absolute maximum value of on . Otherwise, there is no absolute maximum value.           Closest point on parabola   Find the on the parabola whose distance to is the smallest possible. The distance between two points and in is defined as .        "
},
{
  "id": "s_applied_opt_I-2",
  "level": "2",
  "url": "s_applied_opt_I.html#s_applied_opt_I-2",
  "type": "Objectives",
  "number": "26",
  "title": "",
  "body": "   Model real world questions as an optimization problem about a function .    Use calculus techniques to fully analyze a modeled optimization problem and provide an answer in the form of a complete sentence.    "
},
{
  "id": "eg_square_to_box",
  "level": "2",
  "url": "s_applied_opt_I.html#eg_square_to_box",
  "type": "Example",
  "number": "26.1",
  "title": "Box of maximum volume.",
  "body": " Box of maximum volume   A square piece of cardboard of dimension meters is made into a box by cutting squares of equal dimension out of each corner and folding up the sides. (See .) Find the dimension of the cutout squares that maximizes the volume of the resulting box.   A box from a square   A square to a box         "
},
{
  "id": "proc_applied_opt",
  "level": "2",
  "url": "s_applied_opt_I.html#proc_applied_opt",
  "type": "Procedure",
  "number": "26.3",
  "title": "Applied optimization.",
  "body": " Applied optimization   The following steps are useful for modeling and solving a word problem involving optimization.   Model the problem     Make a detailed, labeled diagram summarizing the situation described.    Clearly define and name all important quantities in the problem.    Write down any important equations or formulas involving the quantities at play.    Identify the quantity that is to be optimized.   Look for language suggesting maximum or minimum values: , largest , most , greatest , smallest , least , .          Solve optimization problem     Express the quantity we wish to optimize as a function of exactly one variable.   If the quantity appears to be given as a function of more than one independent variable, look for a constraint equation that allows us to reduce to exactly one independent variable.    Make explicit what the domain of this function is, using the context of the problem.       Translate the given word problem as one of our types of optimization problems ( , EVT, find\/classify critical points, curve sketching, ) for the function .    Use an appropriate procedure ( , EVT procedure, find\/classify critical points, curve sketching, ) to solve the given optimization problem.   The domain of plays an important role in this step. In particular, pay attention to whether or not is a closed finite interval.          Summarize     Communicate the answer you derived in Step 2 in a plain English sentence that makes use of the language\/context of the stated problem.    Make sure that you do indeed answer the problem posed and include units details if applicable.         "
},
{
  "id": "eg_fence_perimeter",
  "level": "2",
  "url": "s_applied_opt_I.html#eg_fence_perimeter",
  "type": "Example",
  "number": "26.4",
  "title": "Minimal fence perimeter.",
  "body": " Minimal fence perimeter   Farmer Dudley is building a rectangular pen for his iguanas. He will use the 50 meter long side of his barn as one side of the pen, and will construct fencing for the remaining three sides of the pen. The pen must have a total area of 200 m . What is the minimum length of fencing Dudley must build to create an iguana pen matching these specifications.       "
},
{
  "id": "proc_gen_EVT",
  "level": "2",
  "url": "s_applied_opt_I.html#proc_gen_EVT",
  "type": "Procedure",
  "number": "26.5",
  "title": "Generalized extreme value theorem.",
  "body": " Generalized extreme value theorem   Let be an interval of any sort ( , can be open, closed, or neither, and can be finite or infinite), and let and be the (possibly infinite) left and right endpoints of . Assume is continuous on . To investigate whether attains a maximum or minimum value on , proceed as follows.   Identify candidate inputs  The candidate inputs where potentially attains a local maximum or minimum value consist of the (i) any finite endpoints of that are elements of , and (ii) any critical points of lying in .    Evaluate  Evaluate at all candidates you found in Step 1. Let be the minimum of these values, and let be the maximum of these values.    Evaluate endpoint limits  Evaluate the two endpoint limits and . (In the case where the given endpoint is infinite, the one-sided limit is understood simply as the corresponding limit at infinity.)    Compare , , and endpoint limits  Assume that each limit in Step 3 either exists or is infinite.   If neither of the endpoint limits from Step 3 is less than or equal to , then is the absolute minimum value of on . Otherwise, there is no absolute minimum value.    If neither of the endpoint limits from Step 3 is greater than or equal to , then is the absolute maximum value of on . Otherwise, there is no absolute maximum value.         "
},
{
  "id": "eg_point_parab",
  "level": "2",
  "url": "s_applied_opt_I.html#eg_point_parab",
  "type": "Example",
  "number": "26.6",
  "title": "Closest point on parabola.",
  "body": " Closest point on parabola   Find the on the parabola whose distance to is the smallest possible. The distance between two points and in is defined as .       "
},
{
  "id": "s_applied_opt_II",
  "level": "1",
  "url": "s_applied_opt_II.html",
  "type": "Section",
  "number": "27",
  "title": "Applied optimization II",
  "body": " Applied optimization II   Snowy campus walk   Dudley stands at the southeast corner of a 1 km square field on campus that is currently covered in snow. He is hurrying to get to his calculus course taking place in the mathematics building at the northwest corner of the field. Dudley plans on first walking (at constant speed) along some portion of the ploughed east-west path that runs along the southern border of the field, and then cutting across the snowy field to head directly toward the mathematics building (at constant speed). Because of the snowy conditions, Dudley can move twice as fast on the ploughed path than he can when walking across the field. If Dudley wants to get to the mathematics building as quickly as possible, how far along the ploughed path should he walk before cutting across the field?         Optimizing revenue   The starting price of a certain model of television is $450. A marketing team discovers that for each discount of $10 applied to the TV price, the number of weekly sales increases by 100 per week. How should the company price the television in order to maximize weekly revenue?        "
},
{
  "id": "eg_",
  "level": "2",
  "url": "s_applied_opt_II.html#eg_",
  "type": "Example",
  "number": "27.1",
  "title": "Snowy campus walk.",
  "body": " Snowy campus walk   Dudley stands at the southeast corner of a 1 km square field on campus that is currently covered in snow. He is hurrying to get to his calculus course taking place in the mathematics building at the northwest corner of the field. Dudley plans on first walking (at constant speed) along some portion of the ploughed east-west path that runs along the southern border of the field, and then cutting across the snowy field to head directly toward the mathematics building (at constant speed). Because of the snowy conditions, Dudley can move twice as fast on the ploughed path than he can when walking across the field. If Dudley wants to get to the mathematics building as quickly as possible, how far along the ploughed path should he walk before cutting across the field?       "
},
{
  "id": "eg_TV_revenue",
  "level": "2",
  "url": "s_applied_opt_II.html#eg_TV_revenue",
  "type": "Example",
  "number": "27.2",
  "title": "Optimizing revenue.",
  "body": " Optimizing revenue   The starting price of a certain model of television is $450. A marketing team discovers that for each discount of $10 applied to the TV price, the number of weekly sales increases by 100 per week. How should the company price the television in order to maximize weekly revenue?       "
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
