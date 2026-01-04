function Body()
{
/// This is for the Pre-made Designs Modal ///
const PremadeDesigns = document.getElementById('PMDModal');
const openPMDButton = document.getElementById('PreMadeBtn');
const closePMDButton = document.getElementsByClassName('close')[0];

openPMDButton.onclick = function() {
    PremadeDesigns.style.display = 'block';
}

closePMDButton.onclick = function() {
    PremadeDesigns.style.display = 'none';
}

/// This is for the Custom Designs Modal ///
const CustomDesigns = document.getElementById('CMDModal');
const openCMDButton = document.getElementById('CustomBtn');
const closeCMDButton = document.getElementsByClassName('close')[1];

openCMDButton.onclick = function() {
    CustomDesigns.style.display = 'block';
}

closeCMDButton.onclick = function() {
    CustomDesigns.style.display = 'none';
}

/// This is for the Terms and Conditions Modal ///
const TAC = document.getElementById('TACModal');
const openTACButton = document.getElementById('TAC');
const closeTACButton = document.getElementsByClassName('close')[2];

openTACButton.onclick = function() {
    TAC.style.display = 'block';
}

closeTACButton.onclick = function() {
    TAC.style.display = 'none';
}
// When the user clicks anywhere outside of the modal, close it
const modals = document.querySelectorAll('.modal');

window.onclick = function(event) {
  modals.forEach(modal => {
    if (event.target === modal) {
      modal.style.display = 'none';
    }
  });
};

}