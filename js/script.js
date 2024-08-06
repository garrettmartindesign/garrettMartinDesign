

/*--------------------Side Bar Nav Accordion--------------------------*/
    var acc = document.getElementsByClassName("navAccordion");
    var i;
        
    for (i = 0; i < acc.length; i++) {
        acc[i].addEventListener("click", function() {
        this.classList.toggle("active");
        var navPanel = this.nextElementSibling;
        if (navPanel.style.display === "block") {
            navPanel.style.display = "none";
            } else {
            navPanel.style.display = "block";
            }
        });
    }
    var acc = document.getElementsByClassName("navAccordion",);
    var i;

    for (i = 0; i < acc.length; i++) {
        acc[i].addEventListener("click", function() {
        this.classList.toggle("active");
        var navPanel = this.nextElementSibling;
        if (navPanel.style.maxHeight) {
            navPanel.style.maxHeight = null;
            } else {
             navPanel.style.maxHeight = navPanel.scrollHeight + "px";
        }
    });
    }
/*--------------------title Chance Animation--------------------------*/
    $(document).ready(function() {
        const titleWords = ["solutions specialist", "photographer", "trail runner", "dog dad"]; // Add more words as needed
        let currentIndex = 0;
    
        setInterval(function() {
            $(".titleChange").fadeOut(500, function() { // Fade out current word
                $(this).text(titleWords[currentIndex]); // Change the text
                $(this).fadeIn(500); // Fade in the new word
                currentIndex = (currentIndex + 1) % titleWords.length; // Cycle through the words
            });
        }, 1500); // Change the word every 2 seconds
    });

   