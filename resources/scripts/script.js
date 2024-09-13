const projectInfo = document.getElementsByClassName("project-info");
const projectImage = document.getElementsByClassName("project-image")

const changeToInfo = () => {
    projectImage.style.display = 'none';
}

console.log(projectImage)

let themeSwitch = document.getElementById("light-theme");

const lightTheme = () => {
    document.body.style.backgroundColor = '#E6EDF3';
    document.body.style.color = '#0D0A20';
    document.getElementById('languages-container').style.color = '#5B42F5';
    document.getElementById('portrait').style.borderColor = '#0D0A20'
    document.getElementById('main-header').style.backgroundColor = '#160b46'
    // document.getElementById("light-theme").innerHTML = 'Dark Theme';
    document.getElementById("light-theme").style.backgroundColor = '#686868';
    document.getElementById("theme-text").innerHTML = 'dark switch';
    document.getElementById("light-theme").removeEventListener('click', lightTheme);
    document.getElementById("light-theme").addEventListener('click', darkTheme);
    document.getElementById("light-theme").id = 'dark-theme';
    document.getElementById("dark-theme").addEventListener('click', darkTheme);
}

const darkTheme =  () => {
    document.body.style.backgroundColor = '#0D0A20';
    document.body.style.color = '#E6EDF3';
    document.getElementById('languages-container').style.color = '#E6EDF3';
    document.getElementById('portrait').style.borderColor = '#E6EDF3';
    document.getElementById('main-header').style.backgroundColor = 'rgba(13, 13, 13, 0.1)';
    // document.getElementById("dark-theme").innerHTML = 'Light Theme';
    document.getElementById("dark-theme").style.backgroundColor = '#FFFFFF';
    document.getElementById("theme-text").innerHTML = 'light switch';
    document.getElementById("dark-theme").removeEventListener('click', darkTheme);
    document.getElementById("dark-theme").addEventListener('click', lightTheme);
    document.getElementById("dark-theme").id = 'light-theme';
    document.getElementById("light-theme").addEventListener('click', lightTheme);
}

document.getElementById("light-theme").addEventListener('click', lightTheme);

