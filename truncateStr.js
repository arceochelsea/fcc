// Truncate a string (first argument) if it is longer than the given maximum string length (second argument). Return the truncated string with a ... ending.


function truncateString(string, number) {
    if (string.length > number) {
        let truncString = string.slice(0, number) + "...";
        return truncString;
    } else 
        return string;
}

console.log(truncateString("A-tisket a-tasket A green and yellow basket", 8));

