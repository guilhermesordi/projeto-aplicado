function changeEmailBody(event) {
    const value = event.target.value;
    const href = document.getElementById("email-output").href;
    const substrings = href.split("&");

    let newHref = "";
    
    for(substring of substrings) {
        newHref = newHref + "&" + substring;
        substrings[substrings.length - 1] = "body=" + value;
    }
    newHref = newHref.substr(1, newHref.length - 1);
    document.getElementById("email-output").href = newHref;
}