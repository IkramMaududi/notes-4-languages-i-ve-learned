Regular Expression Javascript


/*myRegex.test(myString): returns true if your pattern, myRegex, finds something from string and false if not*/
let testStr = "freeCodeCamp";
let testRegex = /Code/;
testRegex.test(testStr);// Returns true


/*or operator |, is used to search for multiple pattern*/
let petString = "James has a pet cat.";
let petRegex = /dog|cat|bird|fish/;
let result = petRegex.test(petString);//true



/*myString.match(myRegex): is used to extract the actual matches.*/
let ourStr = "Regular expressions";
let ourRegex = /expressions/;
ourStr.match(ourRegex);// Returns ["expressions"]



/*Insensitive flag i: is used to ignore uppercase, lowercase*/
let myString = "freeCodeCamp";
let fccRegex = /freecodecamp/i;
let result = fccRegex.test(myString);//true


/*Global flag g: is used to SEARCH OR EXTRACT A PATTERN MORE THAN ONCE*/
let testStr = "Repeat, Repeat, Repeat";
let ourRegex = /Repeat/;
testStr.match(ourRegex);// Returns ["Repeat"]
let repeatRegex = /Repeat/g;
testStr.match(repeatRegex);// Returns ["Repeat", "Repeat", "Repeat"]


//you can use multiple flag
let twinkleStar = "Twinkle, twinkle, little star";
let starRegex = /twinkle/gi;
let result = twinkleStar.match(starRegex); // [ 'Twinkle', 'twinkle' ]



/*Wildcard character (.) will MATCH ANY ONE CHARACTER
*You can use the wildcard character just like any other character in the regex*/
let humStr = "I'll hum a song";
let hugStr = "Bear hug";
let huRegex = /hu./;
huRegex.test(humStr); // Returns true
huRegex.test(hugStr); // Returns true




/*Character class ([]): allows some flexibility in searching for a literal pattern,
*by defining a group of characters you wish to match by placing them inside square brackets*/
let bigStr = "big";
let bagStr = "bag";
let bugStr = "bug";
let bogStr = "bog";
let bgRegex = /b[aiu]g/;
bigStr.match(bgRegex); // Returns ["big"]
bagStr.match(bgRegex); // Returns ["bag"]
bugStr.match(bgRegex); // Returns ["bug"]
bogStr.match(bgRegex); // Returns null




/*hyphen(-): is used to match A RANGE OF CHARACTERS AND NUMBERS.
*it is possible to combine a range of letters and numbers in a single character set*/
let jennyStr = "Jenny8675309";
let myRegex = /[a-z0-9]/ig;
// matches all letters and numbers in jennyStr
jennyStr.match(myRegex);



/*caret character (^): when you DON'T WANT TO FIND a certain strings(inside character class([])) & to search for patterns at the BEGINNING OF STRINGS (outside character class)*/
//Inside character class ([]),
let quoteSample = "3 blind mice.";
let myRegex = /[^aiueo0-9]/gi;
let result = quoteSample.match(myRegex);//[" ", "b", "l", "n", "d", " ", "m", "c", "."]

//Outside character class
let firstString = "Ricky is first and can be found.";
let firstRegex = /^Ricky/;
firstRegex.test(firstString);// Returns true
let notFirst = "You can't find Ricky now.";
firstRegex.test(notFirst);// Returns false




/* plus character (+) : searches for character/characters that APPEARS ONE OR MORE TIMES IN A ROW
*the character or pattern has to be present consecutively. That is, the character has to repeat one after the other*/
let myABC = "abc";
let aabcString = 'aabc';
let ababString = 'abab';
let bcdString = 'bcd';
let difficultSpelling = "Mississippi";
let regeeex = /a+/g;
let myS_Regex = /s+/g;
let hasil1 = myABC.match(regeeex);//return ['a'],
let hasil2 = aabcString.match(regeeex);//return ['aa']
let hasil3 = ababString.match(regeeex);//it would find two matches and return ["a", "a"] because the a characters are not in a row - there is a b between them.
let hasil4 = bcdString.match(regeeex);//it wouldn't find a match since there is no "a" in the string "bcd".
let hasil5 = difficultSpelling.match(myS_Regex);//return [ 'ss', 'ss' ]


/*asterisk character(*):  searches for character that occur ZERO OR MORE TIMES*/
let soccerWord = "gooooooooal!";
let gPhrase = "gut feeling";
let oPhrase = "over the moon";
let goRegex = /go*/;
soccerWord.match(goRegex); // Returns ["goooooooo"]
gPhrase.match(goRegex); // Returns ["g"]
oPhrase.match(goRegex); // Returns null



/*Dollar sign character($): is used to search the END of strings at the end of the regex.*/
let theEnding = "This is a never ending story";
let storyRegex = /story$/;
storyRegex.test(theEnding);// Returns true
let noEnding = "Sometimes a story will have to end";
storyRegex.test(noEnding);// Returns false




/*Shorthand character classes (\w) : This shortcut is equal to [A-Za-z0-9_]. This character class matches upper, lowercase letters, numbers, and underscore character (_).*/
let longHand = /[A-Za-z0-9_]+/;
let shortHand = /\w+/;
let numbers = "42";
let varNames = "important_var";
longHand.test(numbers); // Returns true
shortHand.test(numbers); // Returns true
longHand.test(varNames); // Returns true
shortHand.test(varNames); // Returns true

/*The opposite of shorthand character classes (\W): looks for the OPPOSITE OF ALPHANUMERIC, [^A-Za-z0-9_]*/
let shortHand = /\W/;
let numbers = "42%";
let sentence = "Coding!";
numbers.match(shortHand); // Returns ["%"]
sentence.match(shortHand); // Returns ["!"]



/*digit characters (\d):  looks for a single character of ANY NUMBER between zero and nine, [0-9]*/
let movieName = "2001: A Space Odyssey";
let numRegex = /\d/g;
let result = movieName.match(numRegex).length;//Returns 4

/* non-digit characters (\D): looks for a single character that is NOT A NUMBER between zero and nine, [^0-9]*/
let movieName = "2001: A Space Odyssey";
let noNumRegex = /\D/g;
let result = movieName.match(noNumRegex).length;//Returns 17


/*\s : search for whitespace, and also carriage return, tab, form feed, and new line characters, [ \r\t\f\n\v]*/
let whiteSpace = "Whitespace. Whitespace everywhere!"
let spaceRegex = /\s/g;
whiteSpace.match(spaceRegex);// Returns [" ", " "]

/*\S : This pattern will not match whitespace, carriage return, tab, form feed, and new line characters, [^ \r\t\f\n\v]*/
let whiteSpace = "Whitespace. Whitespace everywhere!"
let nonSpaceRegex = /\S/g;
whiteSpace.match(nonSpaceRegex).length; // Returns 32




/*Curly brackets ({}): is used to specify the lower and upper number of patterns. You put two numbers between the curly brackets - for the lower and upper number of patterns.
*For example, to match only the letter a appearing between 3 and 5 times in the string "ah", your regex would be /a{3,5}h/.*/
let A4 = "aaaah";
let A2 = "aah";
let multipleA = /a{3,5}h/;
multipleA.test(A4); // Returns true
multipleA.test(A2); // Returns false

/*Sometimes you only want to specify the lower number of patterns with no upper limit
*To only specify the lower number of patterns, keep the first number followed by a comma
*For example, to match only the string "hah" with the letter a appearing at least 3 times, your regex would be /ha{3,}h/*/
let A4 = "haaaah";
let A2 = "haah";
let A100 = "h" + "a".repeat(100) + "h";
let multipleA = /ha{3,}h/;
multipleA.test(A4); // Returns true
multipleA.test(A2); // Returns false
multipleA.test(A100); // Returns true

/*To specify a certain number of patterns, just have that one number between the curly brackets
*For example, to match only the word "hah" with the letter a 3 times, your regex would be /ha{3}h/*/
let A4 = "haaaah";
let A3 = "haaah";
let A100 = "h" + "a".repeat(100) + "h";
let multipleHA = /ha{3}h/;
multipleHA.test(A4); // Returns false
multipleHA.test(A3); // Returns true
multipleHA.test(A100); // Returns false



/*Question mark (?): is used to specify the POSSIBLE EXISTENCE OF AN ELEMENT(outside []) & LAZY MATCHING inside ([])*/
/*outside character class
*This checks for ZERO OR ONE OF THE PRECEDING ELEMENT
*You can think of this symbol as SAYING THE PREVIOUS ELEMENT IS OPTIONAL
*For example, there are slight differences in American and British English and you can use the question mark to match both spellings*/
let american = "color";
let british = "colour";
let rainbowRegex= /colou?r/;
rainbowRegex.test(american); // Returns true
rainbowRegex.test(british); // Returns true


/*Inside character class([])
*lazy matching vs greedy matching
*By default, regular expression uses greedy matching - finds the longest possible part of a string that fits the regex pattern
*The alternative is called a lazy match, which finds the smallest possible part of the string that satisfies the regex pattern, can be deployed by just adding ? character*/
let ship = titanic;
let lazyMatchRegex = /t[a-z]*?i/;
let defaultRegex = /t[a-z]*i/
let result1 = ship.match(defaultRegex);//Returns ["titani"]
let result2 = ship.match(lazyMatchRegex);//Returns ["ti"]

let text = "<h1>Winter is coming</h1>";
let myRegex = /<[a-z]*?1>/;
let result = text.match(myRegex);//[ '<h1>',  index: 0,  input: '<h1>Winter is coming</h1>',  groups: undefined ]




/*(+) and (-) lookahead*/
/*Lookaheads are patterns that tell JavaScript to look-ahead in your string to check for patterns further along
*This can be useful when you want to search for multiple patterns over the same string
*There are two kinds of lookaheads: positive lookahead and negative lookahead.

*A positive lookahead will look to make sure the element in the search pattern is there, but won't actually match it
*A positive lookahead is used as (?=...) where the ... is the required part that is not matched.

*A negative lookahead will look to make sure the element in the search pattern is not there
*A negative lookahead is used as (?!...) where the ... is the pattern that you do not want to be there
*The rest of the pattern is returned if the negative lookahead part is not present.*/

let quit = "qu";
let noquit = "qt";
let qPosURegex= /q(?=u)/;
let qNegURegex = /q(?!u)/;
let a = quit.match(qPosURegex);//Returns ["q"]
let b = quit.match(qNegURegex);// Returns null
let c = noquit.match(qPosURegex);//Returns null
let d = noquit.match(qNegURegex);//Returns ["q"]

//A more practical use of lookaheads is to check two or more patterns in one string. Here is a (naively) simple password checker that looks for between 3 and 6 characters and at least one number:
let password = "abc123";
let checkPass = /(?=\w{3,6})(?=\D*\d)/;
checkPass.test(password); // Returns true

//to match passwords that are greater than 5 characters long, do not begin with numbers, and have two consecutive digits.
let sampleWord = "astronaut";
let pwRegex = /^\D(?=\w{5})(?=\w*\d{2})/;
let result = pwRegex.test(sampleWord);




/*Parentheses ():  to check for groups of characters & for substrings you want to repeat
*If you want to find either Penguin or Pumpkin in a string, you can use the following Regular Expression: /P(engu|umpk)in/g
*Then check whether the desired string groups are in the test string by using the test() method.
*/
let testStr = "Pumpkin";
let testRegex = /P(engu|umpk)in/;
testRegex.test(testStr);// Returns true




/*Capture groups (...) and \aNumber
*Some patterns you search for will occur multiple times in a string. It is wasteful to manually repeat that regex. There is a better way to specify when you have multiple repeat substrings in your string.
*You can search for repeat substrings using capture groups. Parentheses, ( and ), are used to find repeat substrings. You put the regex of the pattern that will repeat in between the parentheses.
*To specify where that repeat string will appear, you use a backslash (\) and then a number. This number starts at 1 and increases with each additional capture group you use. An example would be \1 to match the first group.
*The example below matches any word that occurs twice separated by a space*/
let repeatStr = "regex regex";
let repeatRegex = /(\w+)\s\1/;
repeatRegex.test(repeatStr); // Returns true
repeatStr.match(repeatRegex); // Returns ["regex regex", "regex"]
//Using the .match() method on a string will return an array with the string it matches, along with its capture group.

let testString2 = "test test test";
let reRegex = /(test)\s\1/;
let result = testString2.match(reRegex);//Returns ["test test", "test"]

let testString = "test test test";
let reRegex = /(test)(\s)\1\2\1/;//the \1 refers to test, the \2 refers to \s
let result = reRegex.test(testString);//Returns true
let result1 = testString.match(reRegex1);//Returns ["test test test", "test", " "]

let testString = "test test test test test test";
let reRegex = /(test)(\s)\1\2\1/g;
let result = testString.match(reRegex);//Returns ["test test test", "test test test"]



/*.replace(): Search 'N' Replace
You can search and replace text in a string using .replace() on a string. The inputs for .replace() is first the regex pattern you want to search for. The second parameter is the string to replace the match or a function to do something.*/
let wrongText = "The sky is silver.";
let silverRegex = /silver/;
wrongText.replace(silverRegex, "blue");// Returns "The sky is blue."

//You can also access capture groups in the replacement string with dollar signs ($).
"Code Camp".replace(/(\w+)\s(\w+)/, '$2 $1');// Returns "Camp Code"

//Change string 'one two three' to 'three two one' using capture group and dollar sign
let str = "one two three";
let fixRegex = /(\w+)\s(\w+)\s(\w+)/;
let replaceText = '$3 $2 $1';
let result = str.replace(fixRegex, replaceText);//three two one
