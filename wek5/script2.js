function isPalindrome(n)
{
    let original = n;
    let rev = 0;

    while(n > 0)
    {
        let digit = n % 10;
        rev = rev * 10 + digit;
        n = Math.floor(n / 10);
    }

    return original === rev;
}


function isArmstrong(n)
{
    let sum = 0;
    let temp = n;
    let digits = n.toString().length;

    while(temp > 0)
    {
        let digit = temp % 10;
        sum += Math.pow(digit, digits);
        temp = Math.floor(temp / 10);
    }

    return sum === n;
}


function isPrime(n)
{
    if(n <= 1)
        return false;

    for(let i = 2; i <= Math.sqrt(n); i++)
    {
        if(n % i === 0)
            return false;
    }

    return true;
}


function factorial(n)
{
    let fact = 1;

    for(let i = 1; i <= n; i++)
    {
        fact *= i;
    }

    return fact;
}
function analyzeNumber()
{
    let num = parseInt(document.getElementById("num").value);

    document.getElementById("pal").innerHTML =
        "Palindrome: " + (isPalindrome(num) ? "Yes" : "No");

    document.getElementById("arm").innerHTML =
        "Armstrong: " + (isArmstrong(num) ? "Yes" : "No");

    document.getElementById("prime").innerHTML =
        "Prime: " + (isPrime(num) ? "Yes" : "No");

    document.getElementById("fact").innerHTML =
        "Factorial: " + factorial(num);
}