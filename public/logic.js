

document.addEventListener('DOMContentLoaded', function () {

    
    var currentStep = 1;
    var progresStep = 0;

    document.querySelectorAll('.next').forEach(function (nextButton) {
        nextButton.addEventListener('click', function () {
            document.getElementById('step' + currentStep).classList.remove('active');
            currentStep++;
            progresStep++;
            document.getElementById('step' + currentStep).classList.add('active');
            updateProgressBar();
        });
    });

    document.querySelectorAll('.prev').forEach(function (prevButton) {
        prevButton.addEventListener('click', function () {
            document.getElementById('step' + currentStep).classList.remove('active');
            currentStep--;
            progresStep--;
            document.getElementById('step' + currentStep).classList.add('active');
            updateProgressBar();
        });
    });



    function updateProgressBar() {
        var progressBarWidth = progresStep * 20;
        document.querySelector('.progress-bar').style.width = progressBarWidth + '%';
    }
});

//******************************************************************************** 

function displayUploadMessage(containerID) {
  
  document.getElementById(containerID).style.display = 'block';
 
}




//******************************************************************************** 

 