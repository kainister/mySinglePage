function readTextFile(file)
{
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            document.querySelector('#content').innerHTML =
                this.responseText;
        }
    };
    xhttp.open("GET", file, true);
    xhttp.send();
}

function displayProfile() {
    setTimeout(function () {
        document.querySelector('.profile').onclick = function () {
            readTextFile('profile.html');
            setTimeout(function () {
                document.querySelector('#username').innerHTML = username;
            }, 100);
        }
    }, 100);
    setTimeout(function () {
        displayHome();
    }, 100);
}

function displayHome() {
    setTimeout(function () {
        document.querySelector('.home').onclick = function () {
            readTextFile('home.html');
        }
    }, 100);
    setTimeout(function () {
        displayProfile();
    }, 100);
}
var username = sessionStorage.getItem('username');
window.onload =function () {
    if (sessionStorage.getItem('username') !== null) {
        var username = sessionStorage.getItem('username');
        readTextFile('home.html');
        displayProfile();
        displayHome();

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
        displayProfile();
        displayHome();
        return false;
    };
};