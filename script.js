function readTextFile(file)
{
    var username = sessionStorage.getItem('username');
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            document.querySelector('#content').innerHTML =
                this.responseText;
        }
        if (file === 'profile.html') {
            var name = document.querySelector('#username');
            name.setAttribute('value', username);
            console.log('test');
            document.querySelector('#edit_btn').onclick = function () {
                console.log('ca marche');
                sessionStorage.clear('username');
                sessionStorage.setItem('username', name.value);
            };

        } else {
            document.querySelector('#username').innerHTML = username;
        }
        document.querySelector('.profile').innerHTML = "<h1>"+username+"</h1>";
        document.querySelector('.home').onclick = function () {
            readTextFile('home.html');
        };
        document.querySelector('.profile').onclick = function () {
            readTextFile('profile.html');
        };
    };
    xhttp.open("GET", file, true);
    xhttp.send();
}

window.onload =function () {
    if (sessionStorage.getItem('username') !== null) {
        readTextFile('home.html');

    }
    document.querySelector('#myForm').onsubmit = function () {
        var userName = document.querySelector('.username').value;
        var userPassword = document.querySelector('.password').value;
        if (userName === '' || userPassword === '') {
            alert('please enter value in username and password');
            return false;
        }
        sessionStorage.setItem('username', userName);
        readTextFile('home.html');
        return false;
    };
};