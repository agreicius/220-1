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
  "body": " Limits: algebraic technique and sandwich theorem   Algebraic techniques  As we saw in , there are limits to usefulness of our limit rules. In many cases, if we run into a dead end, some algebraic manipulation of the function expression can help us find a way forward. The following examples serve to illustrate this technique and remind you of some algebraic techniques.   Algebraic limit technique: factoring   Compute . Your answer should be a chain of equalities with steps justified.    Note that the limit of the denominator expression as is zero, and thus we cannot directly use the quotient rule. Thus we begin with some algebraic manipulation. The key algebraic technique here is factoring. .     Algebraic limit technique: clear denominator   Compute . Your answer should be a chain of equalities with steps justified.    Again, the quotient rule is not available to us, as the limit of the denominator function is zero. Accordingly, we begin with some algebra.      Algebraic limit technique: radicals   Compute . Your answer should be a chain of equalities with steps justified.    We use the technique of multiplying the numerator and denominator by a conjugate radical expression : .      Sandwich theorem  Another situation where our basic limit rules might not suffice to compute a given limit is when the function in question is unreasonably complicated, making its behavior near a point difficult to pin down. The sandwich theorem potentially gives a technique for getting around this issue. You can think of it as a means of replacing the complicated function , whose behavior is a mystery to us, with two simpler bounding functions and , whose behavior we understand. It is called the sandwich theorem as the necessary inequality has  sandwiched between the functions and .   Sandwich theorem   Fix a point and suppose that functions satisfy for all lying in an open interval containing . If , then . Using logical shorthand: .    As with all bits of theory in mathematics, this statement requires proof; and as with most bits of theory in this course, we will not provide that proof. Interested in seeing how one would prove this and other statements from calculus? Take Math 320-1 or Math 321-1!    Making use of the sandwich theorem requires carrying out a number of steps (with justification). The following procedure will be useful for doing this in an organized manner.   Sandwich theorem   To compute using the sandwich theorem, proceed as follows.   Find bounding functions and satisfying the two following conditions:    for all lying in an open interval containing .     for some .   For your own convenience, make sure to name these functions, as opposed to just providing formulas for them.    Conclude (citing the sandwich theorem) that         Sandwich theorem  As the examples below will illustrate, the art of using lies in being able to find useful bounding functions and . Use these examples as a model for your own use of . Note in particular how   the explanations make explicit the two conditions that the bounding functions must satisfy;    the explanations end with a concluding statement explicitly citing the sandwich theorem;    giving the bounding functions names ( , and ), as opposed to just providing formulas ( , , ), makes these explanations more concise.      Sandwich theorem: easy   Suppose the function satisfies for all in the interval . Compute .    We follow the steps of . In this case our bounding functions and are provided for us, making life much easier. By assumption our mystery function satisfies for all . Next we compute . Since holds for all , and since , we conclude that .     Sandwich theorem: less easy   Use the sandwich theorem to compute .    Here we make use of a well-known and important inequality for the cosine function: namely, that for all . It follows that for all . Since for all , the inequalities in still hold after multiplying each expression by : that is for all . Thus, letting and , we have for all in the open inteval . Lastly, we compute . Since holds for all in , and since , we conclude using the sandwich theorem that .    Our next theorem concerns the absolute value, the definition of which we now recall.   Absolute value   The absolute value of a real number , denoted , is defined as .     Absolute value  Below we gather some useful remarks and facts about the absolute value.   We have for all .    Fix a nonnegative number . We have for all .    We have for all .    Fix a real number . Geometrically speaking is the distance between and on the real line. In particular, taking , we see that is the distance between and the origin on the real line.       Absolute value limits      Absolute value evaluation   for all .    Absolute value implication  Fix . If , then . Using logical shorthand: .          Using the identity , we see that .    To prove this implication ( , if-then statement), we assume that and prove that . We do so using the sandwich theorem. Indeed, since for all , we have for all in the domain of . Thus, letting and , we have for all in the domain of , and . It now follows from the sandwich theorem that .       Our final result uses the sandwich theorem to investigate the limits of sine and cosine at zero.   Sine and cosine evaluation at zero      Sine evaluation at zero   .    Cosine evaluation at zero   .          We use the sandwich theorem to prove this limit formula. Our choice of bounding functions will rely on an important inequality involving the sine function: namely for all . The proof of this inequality (given at the end of this section) is nontrivial, but also instructive: it appeals to some of the unit circle geometry that goes into the definition of the trigonometric functions. In any case, we will simply assume holds for the purpose of this proof. With that in place, our result is an easy consequence of the sandwich theorem. Indeed, setting and , we have for all , by inequality , and , since . The sandwich theorem now implies .    First note that for all , we have , and hence for all . We then have .       As promised in the proof of , we provide a proof of the inequality , or equivalently, for all . You are not responsible for understanding this proof, but you might find the argument instructive nonetheless.   Proof of  We will prove that for all . First, observer that since , we have . Thus the function is even. Since is also even, it suffices to prove for all . Furthermore, since , and since , it suffices to show for all . To this end, take any . The triangle , where , , and lies within the the sector of the unit disc determined by . (Diagram to appear sometime soon.) Elementary trigonometry tells us that ; elementary geometry tells us that . We conclude that , or equivalently, for all . Since furthermore and for , we see that for all , as desired.    "
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
  "title": "Absolute value limits.",
  "body": " Absolute value limits      Absolute value evaluation   for all .    Absolute value implication  Fix . If , then . Using logical shorthand: .          Using the identity , we see that .    To prove this implication ( , if-then statement), we assume that and prove that . We do so using the sandwich theorem. Indeed, since for all , we have for all in the domain of . Thus, letting and , we have for all in the domain of , and . It now follows from the sandwich theorem that .      "
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