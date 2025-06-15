/**
 * react basic file structure:
 * 
 * package.json=> meta data ka record rakhta h 
 * 
 * node_module 
 * project ko chalane mai kaam aata hai
 *  npm dependency node module mai download hoti. 
 * 
 * 
 * in public/index.html=> mai 
 * body mai 
 *     <noscript>You need to enable JavaScript to run this app.</noscript>
         
means agar kisi browser mai javascrit band kr rkhkha h 
 to ye  msg show hoga user ko

 ab jo bhi component bnega wo sb line no. 31 div tag mai hee ana hai 
 jisse show ho user ko (no need to change index.htm file )


 src/index.css mai design aayega jo universal h 

 app.js mai component bnate h

 src/index.js mai document.getElementbyid('root')
 means id naam ka div  ko select kro aur osme app component daaldo.
 
 src/app.css mai normal css likha gaya h jo jaruri h app.js ke liye
 aur osko export kr diya

 src/logo.svg file mai hai =>wo logo jo ghoomm rha h 

 src/app.js 
 app naam ka ek hee component banaya osi mai saara code likh diya  
 jsx => (html+js)
 */
/**
 * shuru se krte fir se file banai 
 * 
 * src folder mai frst file =>index.js
 * isme hmne import krra 'ReactDom' from 'react-dom'
 * 
 * fir iska rander method ko call krra jo two parameter leta hai. 
 * first is jsx(html+js) and 2nd hai root path html ka jaha se show hoga .
 * 
 * next file is index.css hai .ye universal design dega 
 * 
 * next component banana h
 * app.js(component)
 * 
 * 
 * component ke word ke first alphabet ko capital se likhte 
 * jisse pta chal jaaye ye component h  editor ko 
 */
/**
 * in src/app.js file mai ek se jyada component bhjne ke liye 
 * div rapper mai daal denge  
 */
/**
 * now create app.css file for app.js file 
 */
/**
 * we want create more component so i will create folder called component
 * inside it create subcomponent.js
 * naming of folder hona h 
 * 
 * now isko export krra aur ise main app.js file mai import krra 
 * waha return mai sirf < function name /> isa dene ka 
 * 
 * 
 */
/**
 * first project sstart 
 * 1:) expense tracker 
 * 2:) 
 * 
 * passing data via props
 * 
 * props ki help es kisi component mai data pass kr skte h
 * promps ek object hota jiski share kr skte property
 * 
 * date.toISOString()
 * ye date ko string mai convert kr dega
 */
/**
 * multiple -component 
 * nested component
 */