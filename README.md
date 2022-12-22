# Project_1

I used Javascript,HTML and CSS for this project.

My first step was to create the base buttons and image tags required for the game. Once that was done, i went into Javascript to create the necessary functions to make have the game according to how i wanted it. I managed this by tpying out in the comments the various requirements needed. For example, //check if the input box value is valid and push the selected categories.

I started with creating an array to fit the cards required for the program. Following which, was to allow the start button to call the modal and have the input value in the modal's input box to be checked and verified that it is not empty and the value is now below one as the requirement is to have at least one player. As the key component to the game is actually the next button, i created a function for all the necessary executions whenever the next button is clicked. Which includes, randoming the cards to be selected, displaying the selected card, a count down timer, a set final card that is drawn and to reload the game to the beginning once the user clicks the end button.

Once i have ensured that the program is working properly with one deck, i started to create two more decks. I then realise that i have to figure out a way in order to be able to call elements from different arrays to be randomised. As such, i decided to create an empty array called Selected. In the modal, i created check boxes as well for the user to select which deck would they want to use. I added on if statements to the eventListener for the submit button to verify which checkboxes were selected and pushed the relavant arrays into the empty selected array. From there, it was just a matter of being able to select the randoming which array within the newly populated Selected array and randoming which sub-element of the Selected array to display.

Once i am sure that the game works the way i wanted it to, i then moved on to styling and it was just a matter of setting the various elements of the game in their respective positions on the page and resizing them when it was required. When that was done, i moved to the font types and colors and it is completed.
