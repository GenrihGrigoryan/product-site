function fadeInPage() {
    if (!window.AnimationEvent) { return; }
    var fader = document.getElementById('fader');
    fader.classList.add('fade-out');
}

document.addEventListener('DOMContentLoaded', function() {
    if (!window.AnimationEvent) { return; }

    var anchors = document.getElementsByTagName('a');
    var fader = document.getElementById('fader');
    
    for (var idx=0; idx<anchors.length; idx+=1) {
        if (anchors[idx].hostname !== window.location.hostname ||
            anchors[idx].pathname === window.location.pathname) {
            continue;
        }

        anchors[idx].addEventListener('click', function(event) {
                var anchor = event.currentTarget;
            
            var listener = function() {
                window.location = anchor.href;
                fader.removeEventListener('animationend', listener);
            };
            fader.addEventListener('animationend', listener);
            
            event.preventDefault();
            fader.classList.add('fade-in');
        });
    }

    var acc = document.getElementsByClassName("accordion");

    for (var i = 0; i < acc.length; i++) {
    acc[i].addEventListener("click", function() {
        this.classList.toggle("active");
        var panel = this.nextElementSibling;
        if (panel.style.maxHeight) {
        panel.style.maxHeight = null;
        panel.style.opacity = null;
        } else {
        panel.style.maxHeight = panel.scrollHeight + "px";
        panel.style.opacity = 1;
        } 
    });
    }

});

window.addEventListener('pageshow', function (event) {
    if (!event.persisted) {
      return;
    }
    var fader = document.getElementById('fader');
    fader.classList.remove('fade-in');
});

function SelectRadio(choice) {
    const yesBtn = document.getElementById(choice);
    yesBtn.checked = true;
    /*
    const radioButtons = document.querySelectorAll('input[name="tabs"]');
    for (const radioButton of radioButtons) {
        if (radioButton.id == choice) {
            radioButton.checked = true;
            break;
        }
    }
    */
}