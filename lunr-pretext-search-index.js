var ptx_lunr_search_style = "textbook";
var ptx_lunr_docs = [
{
  "id": "frontmatter",
  "level": "1",
  "url": "frontmatter.html",
  "type": "Front Matter",
  "number": "",
  "title": "Front Matter",
  "body": " Aaron Greicius  Department of Mathematics  Northwestern University    copyright "
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
  "title": "Proof of <span class=\"process-math\">\\(\\abs{\\sin\\theta}\\leq \\abs{\\theta}\\)<\/span>.",
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
  "title": "Finding <span class=\"process-math\">\\(\\delta\\)<\/span> such that <span class=\"process-math\">\\((a-\\delta, a+\\delta)\\subseteq S\\)<\/span>.",
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
  "title": "Finding <span class=\"process-math\">\\(\\delta\\)<\/span> for specific <span class=\"process-math\">\\(\\epsilon\\text{:}\\)<\/span> quadratic function.",
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
  "title": "Continuity at <span class=\"process-math\">\\(a\\)<\/span>.",
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
  "title": "Limit at infinity: <span class=\"process-math\">\\(\\cos\\)<\/span>.",
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
  "title": "Vertical asymptotes: <span class=\"process-math\">\\(\\tan\\)<\/span>.",
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
  "title": "Derivative function: <span class=\"process-math\">\\(\\frac{1}{x}\\)<\/span>.",
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
  "body": " Derivative: rules  We now examine how the operation of taking the derivative of a function interacts with our basic function operations: , scalar multiplication, addition, multiplication, and quotients. We will make heavy use of the Leibniz notation , which denotes the operation of taking the derivative with respect to . In this context we will either write , where is the name of a function, or else , where blah denotes some expression in . In the latter case, the expression in question is understood to define a function, with the usual implied domain convention. Thus for example denotes the derivative of the constant function ; and denotes the derivative of the identity function .   Derivative formulas: constant and power functions      Constant functions  For all we have . In other words, if is the constant function , then is the zero function defined as for all .    Identity function  We have . In other words, if is the identity function , then is the constant function defined as for all .    Power functions  Let be a real number. We have .        Power functions  Although we state the power function formula for general , for now we will only make use of it when is a rational number: , , where and are integers. Indeed, as of yet we have not ever defined what the expression means for an arbitrary real number . We can make sense of , , and even , but what does or mean? We will have to wait until Math 220-2 to give a precise and general definition.    Power rule: radicals   Let . Compute .         Derivative rules      Linear combination  For all constants , we have .    Product rule  We have .    Quotient rule  We have .       With all of our mastery of limit techniques, it turns out that the proofs of these three statements are not so difficult. We provide a proof of (1) and (2).   Proof of (1)  Assume and are differentiable at . We have .    Proof of (2)  Assume and are differentiable at . We have , where this last step uses both the definition of the derivative and the fact that , since and are continuous by .      Linear combination rule  Note that our linear combination rule for derivatives implies the following three rules: . Indeed, the first follows from taking in , the second from taking , and the third from taking and .    Product and quotient rule  The product and quotient rules for the derivative might come as somewhat of a surprise. In particular, mark well the following non-equalities : . In plain English: it is simply not the case that the derivative of a product is the product of the derivatives; and it is not the case that the derivative of a quotient is the quotient of the derivatives. This of course is in stark contrast to the product and quotient rules for the limit.    Derivative rules   Compute a formula for for the given .    , where are fixed constants.                      Higher order derivatives   Let be a function with derivative . Continuing to compute derivatives in succession yields the higher order derivatives of . In particular, the second derivative is defined as , and denoted as or ; and the third derivative is defined as , and is denoted or .  More generally, for any , the -th derivative of is the result of applying the derivative operation times in succession, and is denoted or      Higher-order derivatives   Let . Compute formulas for , , and .        "
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
  "title": "Power rule: radicals.",
  "body": " Power rule: radicals   Let . Compute .       "
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
  "body": " Derivative rules   Compute a formula for for the given .    , where are fixed constants.                    "
},
{
  "id": "d_der_higher_order",
  "level": "2",
  "url": "s_der_rules.html#d_der_higher_order",
  "type": "Definition",
  "number": "12.8",
  "title": "Higher order derivatives.",
  "body": " Higher order derivatives   Let be a function with derivative . Continuing to compute derivatives in succession yields the higher order derivatives of . In particular, the second derivative is defined as , and denoted as or ; and the third derivative is defined as , and is denoted or .  More generally, for any , the -th derivative of is the result of applying the derivative operation times in succession, and is denoted or    "
},
{
  "id": "eg_higher_ders",
  "level": "2",
  "url": "s_der_rules.html#eg_higher_ders",
  "type": "Example",
  "number": "12.9",
  "title": "Higher-order derivatives.",
  "body": " Higher-order derivatives   Let . Compute formulas for , , and .       "
},
{
  "id": "s_der_rate_change",
  "level": "1",
  "url": "s_der_rate_change.html",
  "type": "Section",
  "number": "13",
  "title": "Derivative as rate of change",
  "body": " Derivative as rate of change     Understand and use the rate of change interpretation of the derivative.    Apply the rate of change interpretation to the position, velocity, and acceleration functions of an object.      Rate of change  Recall that the key to understanding the rate of change interpretation of the derivative is to use the particular formulation , and to interpret the difference quotient as the average rate of change of between and . The idea is that as , the average rate of change computed as by gets closer and closer to an instantaneous rate of change of at . This is the motivation behind the definition of instantaneous rate of change given in .   Rate of change interpretations   Suppose quantity is modeled as a function of some other quantity . Roughly speaking, the derivative computes the (instantaneous) rate of change of with respect to . We elaborate below.   Difference quotient  Let and be particular values of quantity satisfying . The difference quotient computes the average rate of change of as the quantity varies from to : , . For each choice of , the difference quotient gives an approximation of the instantaneous rate of change of with respect to at .    Rate of change of with respect to  Let be a particular value of the quantity . The value of the derivative at is the (instantaneous) rate of change of with respect to at the particular input : ,         Height versus age   Suppose the average height (in meters) of an individual in a population is given as a function of their age (in years).   Interpret the two statements below in terms of the height and age of people. Your interpretation should include units, and should address all numeric details in the statements. .    What does the following sequence of statements tell us about the relation of height versus age? Be specific. .             Position, velocity, acceleration    Suppose an object moves along an oriented axis with origin . To simplify the units discussion, we assume below that distance is measured in meters (m) and time is measured in seconds (s).   Position  At any given time , the position  of the object is its directed distance (positive or negative) to the origin.    Displacement  Given times , the displacement of the object from time to time is the difference , often denoted as for short.    Velocity  At any given time the velocity  of the object is defined as rate of change of position with respect to time at . In other words, we have . Values of velocity can be positive or negative. We define the speed  of the object at time as     Acceleration  At any given time we define the acceleration  of the object as the rate of change of its velocity with respect to time at . In other words, .        Drone   Dudley gets his hands on the remote control for a drone and pilots it for a glorious 3 seconds. Luckily, the drone can only move directly up and down. The altitude (in meters) of the drone seconds after Dudley takes control is given as .   Derive formulas for the velocity , speed , and acceleration of the drone seconds after Dudley takes control.    Find the time intervals when the drone is ascending, and the time intervals when it is descending.    Describe the end of Dudley's flight at time seconds. Where is the drone? Did a fatal crash happen?    Compute (a) the displacement of the drone over the time interval , and (b) the total distance traveled.          We compute .    The drone ascending or descending is equivalent to the velocity being positive or negative. It will help here to factor our expression of : . From this we can easily sketch a graph of as follows:  Graph of velocity function   And from the graph of we see easily that is positive on and negative on . Thus the drone ascends for the first second, then descends for the remaining two seconds.    At time , the height of the drone is and the velocity is . This means that the downward velocity of the drone has slowed to 0 m per s upon impact. Dudley landed the drone safely, apparently!    The total displacement is given as . To compute the total distance traveled, we must separate the interval into the separate intervals where the drone ascends and descends. The basic principle here is that if movement is always in the same direction (up or down in our case) over a certain time interval, then displacement is equal to distance traveled.  Over the time interval the drone ascends from a height meters to a height of meters. Since the drone is always moving the same direction here, the total distance traveled over this time interval is meters.  Over the time interval the drone descends from a height of meters, to a height of meters. Again, since the drone is always moving in the same direction, the distance traveled over this time interval is 4 meters.  We conclude that in sum the drone has traveled a distance of meters.         Rates of change in economics  Derivative play a crucial role in economics, where this notion is often described in that field's particular jargon as some variety of marginal .   Marginal cost, revenue, profit   Suppose the cost (in dollars) of making a product is modeled as a function of the total quantity of the good produced. The marginal cost function is defined as . Thus computes the marginal cost (in dollars per unit producion) at a current level of production : this is the rate of change of cost with respect to quantity produced at the given production level .  We get notions of marginal revenue and marginal profit by replacing the cost function above with a revenue or profit function.     Marginals   Suppose the cost (in dollars) for a farmer to produce barrels of milk on a given day is given by . Suppose further that farmer can charge a price of when producing barrels of milk.   Determine the marginal cost of producing 100 barrels of milk, and give an easy to understand interpretation of what this means.    Determine the marginal profit of producing 100 barrels of milk.     Estimate the change in profit that would result in going from 100 barrels a day to 103 barrels of day.          By definition, marginal cost (with respect to barrels $b$ produced) is given as . In particular, we have . This tells us that as the farmer steps milk production from barrels, the cost increases at a rate of 128 dollars per barrel.    Let be the revenue earned when producing barrels of milk, under that assumption that all barrels will be purchased. We have . Lastly, since profit is is defined as revenue minus cost, we have and thus marginal profit is . The marginal profit at a production level of 100 barrels is thus . This tells us that increasing the production from 100 barrels results in the farmer's profit decreasing at a rate of 78 dollars per barrel. What's going on here is that although revenue will increase by increasing production, the rate at which it increases is less than the rate at which cost increases.     Assuming that the rate of change of profit is constant , equal to dollars per barrel, for production levels near 100 barrels, as we increase our production from 100 barrels, the profit decreases at a constant rate of 78 dollars per barrel. Thus we estimate that profit would decrease by dollars if we increase production from 100 to 103 barrels.  The reason this is an estimate and not necessarily the exact change in profit, is that our simplifying assumption need not be the case! That is, the rate of profit is not necessarily constant as a function of . Indeed, looking at the formula above, it most definitely is not in our case! And in fact, using our formula for we can compute exactly as .        "
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
  "body": " Height versus age   Suppose the average height (in meters) of an individual in a population is given as a function of their age (in years).   Interpret the two statements below in terms of the height and age of people. Your interpretation should include units, and should address all numeric details in the statements. .    What does the following sequence of statements tell us about the relation of height versus age? Be specific. .          "
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
  "body": " Derivative: trig functions     Derive derivative formulas for sine and cosine using the limit definition.    Derive derivative formulas for tangent, cotangent, secant, and cosecant from the formulas for sine and cosine, using the quotient rule.    Incorporate the new derivative formulas into derivative computations of more complicated functions.      Derivative formulas: sine and cosine   We have the following derivative formulas: .     Tangent lines: sinusoidal   Let .   Find an equation for the tangent line to the graph of at .    Find all points on the graph of where the tangent line is horizontal.            Trigonometric functions   We define the tangent ( ), cotangent ( ), secant ( ), and cosecant ( ) functions as follows: .     Derivative formulas: trig functions   We have the following derivative formulas: .    "
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
  "body": " Derivative formulas: sine and cosine   We have the following derivative formulas: .   "
},
{
  "id": "eg_tangent_trig",
  "level": "2",
  "url": "s_der_trig.html#eg_tangent_trig",
  "type": "Example",
  "number": "14.2",
  "title": "Tangent lines: sinusoidal.",
  "body": " Tangent lines: sinusoidal   Let .   Find an equation for the tangent line to the graph of at .    Find all points on the graph of where the tangent line is horizontal.          "
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