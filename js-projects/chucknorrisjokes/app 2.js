/* jshint esversion: 6 */
document.querySelector('.get-jokes').addEventListener('click', getJokes);

function getJokes(e) {
    const INPUT_EL = document.getElementById('number');
    const UL_EL = document.querySelector('.jokes');
    const IMG_EL = document.querySelector('.image-div');
    let inputVal = Number(INPUT_EL.value);
    let jokesOutput = '';

    if ( inputVal <= 0 ) {
        jokesOutput += `
            <li class="error">Number of jokes should be 1 or more</li>
        `;
        UL_EL.innerHTML = jokesOutput;
        e.preventDefault();
        return;
    }

    // create new XMLHttpRequest Object instance
    const XHR = new XMLHttpRequest();
    // specify request using open() method
    XHR.open('GET', `http://api.icndb.com/jokes/random/${inputVal}`, true);

    XHR.onload = function() {
        // check if request was status seccessful
        if ( this.status === 200 ) {
            // convert text in JS Object
            let jokesObj = JSON.parse(this.responseText);
            // getting jokes arr using "value" property
            let jokesArr = jokesObj.value;

            if ( jokesObj.type === 'success' ) {
                // show image
                IMG_EL.className += ' shown';
                // iterate through jokesArr
                jokesArr.forEach(function(item){
                    jokesOutput += `
                        <li>${item.joke}</li>
                    `;
                });
            } else {
                jokesOutput += `<li>Something went wrong</li>`;
            }
            UL_EL.innerHTML = jokesOutput;
        }
    };

    XHR.send();
    e.preventDefault();
}
