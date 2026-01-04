function Body()
{
const PremadeDesigns = document.getElementById('PMDModal');
const openPMDButton = document.getElementById('PreMadeBtn');
const closePMDButton = document.getElementsByClassName('close')[0];

openPMDButton.onclick = function() {
    PremadeDesigns.style.display = 'block';
}

closePMDButton.onclick = function() {
    PremadeDesigns.style.display = 'none';
}
window.onclick = function(event) {
    if (event.target == PremadeDesigns) {
        PremadeDesigns.style.display = 'none';
    }
}

const CustomDesigns = document.getElementById('CMDModal');
const openCMDButton = document.getElementById('CustomBtn');
const closeCMDButton = document.getElementsByClassName('close')[1];

openCMDButton.onclick = function() {
    CustomDesigns.style.display = 'block';
}

closeCMDButton.onclick = function() {
    CustomDesigns.style.display = 'none';
}
window.onclick = function(event) {
    if (event.target == CustomDesigns) {
        CustomDesigns.style.display = 'none';
    }
}

const TAC = document.getElementById('TACModal');
const openTACButton = document.getElementById('TAC');
const closeTACButton = document.getElementsByClassName('close')[2];

openTACButton.onclick = function() {
    TAC.style.display = 'block';
}

closeTACButton.onclick = function() {
    TAC.style.display = 'none';
}
window.onclick = function(event) {
    if (event.target == TAC) {
        TAC.style.display = 'none';
    }
}
}
