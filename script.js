function readTextFile(file)
{
    var rawFile = new XMLHttpRequest();
    rawFile.open("GET", file, true);
    rawFile.onreadystatechange = function ()
    {
        if(rawFile.readyState === 4)
        {
            if(rawFile.status === 200 || rawFile.status === 0)
            {
                var allText = rawFile.responseText;
                displayFileContent(allText);
            }
        }
    };
    rawFile.send(null);
}
function displayFileContent(alltext) {
    var content = document.querySelector('#content');
    content.innerHTML = alltext;
}
window.onload =function () {
    document.querySelector('#myForm').onsubmit = function () {
        var username = document.querySelector('.username').value;
        sessionStorage.setItem('username', username);
        console.log('azert');
        return false;
    };

    document.querySelector('.submit').onclick = function () {
        readTextFile('accueil.html');
    };
};