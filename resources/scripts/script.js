
// function to change to light theme
const lightTheme = () => {
    document.body.style.backgroundColor = '#E6EDF3';
    document.body.style.color = '#0D0A20';
    document.getElementById('languages-container').style.color = '#5B42F5';
    document.getElementById('portrait').style.borderColor = '#0D0A20'
    document.getElementById('main-header').style.backgroundColor = 'rgba(13, 13, 13, 0.5)';
    document.getElementById("light-theme").style.backgroundColor = '#0D0A20';
    document.getElementById("theme-text").innerHTML = 'dark switch';
    document.getElementById("light-theme").removeEventListener('click', lightTheme);
    document.getElementById("light-theme").addEventListener('click', darkTheme);
    document.getElementById("light-theme").id = 'dark-theme';
}

// function to change to dark mode
const darkTheme =  () => {
    document.body.style.backgroundColor = '#0D0A20';
    document.body.style.color = '#E6EDF3';
    document.getElementById('languages-container').style.color = '#E6EDF3';
    document.getElementById('portrait').style.borderColor = '#E6EDF3';
    document.getElementById('main-header').style.backgroundColor = 'rgba(13, 13, 13, 0.1)';
    document.getElementById("dark-theme").style.backgroundColor = '#FFFFFF';
    document.getElementById("theme-text").innerHTML = 'light switch';
    document.getElementById("dark-theme").removeEventListener('click', darkTheme);
    document.getElementById("dark-theme").addEventListener('click', lightTheme);
    document.getElementById("dark-theme").id = 'light-theme';
}

// event listner to change theme
document.getElementById("light-theme").addEventListener('click', lightTheme);

// allow project-content to appear on mouseover project-background + allow project-content to become hidden on mouseout of project-background
//define variables
let projectBackground1 = document.getElementById('project1-background');
let projectBackground2 = document.getElementById('project2-background');
let projectBackground3 = document.getElementById('project3-background');
let projectBackground4 = document.getElementById('project4-background');
let projectBackground5 = document.getElementById('project5-background');
let projectContent = document.getElementsByClassName('project-content');

// allow project-content to appear on mouseover project-background 
// allow project-content to become hidden on mouseout project-background
//1
const projectContentIn1 = () => {
    projectContent[0].style.visibility = 'visible';
}
const projectContentOut1 = () => {
projectContent[0].style.visibility = 'hidden';
}
//2
const projectContentIn2 = () => {
    projectContent[1].style.visibility = 'visible';
}
const projectContentOut2 = () => {
projectContent[1].style.visibility = 'hidden';
}
//3
const projectContentIn3 = () => {
    projectContent[2].style.visibility = 'visible';
}
const projectContentOut3 = () => {
projectContent[2].style.visibility = 'hidden';
}
//4
const projectContentIn4 = () => {
    projectContent[3].style.visibility = 'visible';
}
const projectContentOut4 = () => {
projectContent[3].style.visibility = 'hidden';
}
//5
const projectContentIn5 = () => {
    projectContent[4].style.visibility = 'visible';
}
const projectContentOut5 = () => {
projectContent[4].style.visibility = 'hidden';
}


// event listeners to change content on hover
projectBackground1.addEventListener('mouseover', projectContentIn1);
projectBackground1.addEventListener('mouseout', projectContentOut1);

projectBackground2.addEventListener('mouseover', projectContentIn2);
projectBackground2.addEventListener('mouseout', projectContentOut2);

projectBackground3.addEventListener('mouseover', projectContentIn3);
projectBackground3.addEventListener('mouseout', projectContentOut3);

projectBackground4.addEventListener('mouseover', projectContentIn4);
projectBackground4.addEventListener('mouseout', projectContentOut4);

projectBackground5.addEventListener('mouseover', projectContentIn5);
projectBackground5.addEventListener('mouseout', projectContentOut5);
