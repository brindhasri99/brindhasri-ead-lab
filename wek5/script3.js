function processString()
{
    let text = document.getElementById("textInput").value;

    document.getElementById("reverse").innerHTML =
        "Reverse String: " + reverseString(text);

    document.getElementById("vowels").innerHTML =
        "Vowel Count: " + countVowels(text);

    document.getElementById("longest").innerHTML =
        "Longest Word: " + longestWord(text);

    document.getElementById("upper").innerHTML =
        "Uppercase: " + text.toUpperCase();
}



let reverseString = function(str)
{
    return str.split("").reverse().join("");
};


let countVowels = (str) =>
{
    let vowels = "aeiouAEIOU";
    let count = 0;

    for(let char of str)
    {
        if(vowels.includes(char))
        {
            count++;
        }
    }

    return count;
};



let longestWord = function(str)
{
    let words = str.split(" ");
    let longest = "";

    for(let word of words)
    {
        if(word.length > longest.length)
        {
            longest = word;
        }
    }

    return longest;
};