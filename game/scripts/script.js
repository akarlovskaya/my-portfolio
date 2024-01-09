// JavaScript Document

var $btnPlay = $('.btn_play_and_reset');
var $gameBoard = $('.game_board');
var $boxes = $('.col');

// Game Outputs - Score / Number of turns
var $outputTurns = $('.output_turns p');
var $outputMatched = $('.output_matched p');

// Game Footer
var $endMsg = $('.end');

// Game States
var counterTurns = 0;
var counterMatched = 0;
var counterClick = 0;

// Game Images
var currentImageSrc;
var previousImageSrc;
var matchesToWin = 18;


// Click handler for starting the game...
$btnPlay.click(function(){
	
	var $this = $(this);
	
	// Show the game board if it is hidden
	// or hide the game board if it is showing...
	if($gameBoard.hasClass('no_game_board')){
		// code in here will run if no game
		// is currently showing or running...
		if(counterMatched === matchesToWin) {
			$endMsg.addClass('hideEndMsg');
			$gameBoard.removeClass('endBox');
			$('.ship').show();
		}

		$('.ship').addClass('animated zoomOutRight');

		$('.ship').on('animationend', function(){
			$gameBoard.removeClass('no_game_board');
			$('.ship').removeClass('animated zoomOutRight')
					  .hide();	
		    MatchGame.init();
		});

		// Initialize the game...from
		// the MatchGame object...
		
		$this.text('End');
		
	}
	else{
		$gameBoard.addClass('no_game_board');
		$endMsg.addClass('hideEndMsg');
		$this.text('Start');
	}
	
}); // end click handler for starting and stopping the game...

// Add click handler to the boxes...
$boxes.click(function(){
	
	// grab the box that was clicked on 
	var $theBoxThatWasClickedOn = $(this);
	MatchGame.gameTurn($theBoxThatWasClickedOn);		
})


// Matchgame Object...
var MatchGame = {
	
	// The function to run when first starting
	// the game...
	// init will do the following:
	//
	// 1. reset the turn counter
	// 2. reset the click counter
	// 3. rest the match counter
	// 4. reset the game outputs...scores etc...
	// 5. reset the game board...
	init: function(){
		
		// Reset the counters...
		counterTurns = 0;
		counterClick = 0;
		counterMatched = 0;
		
		// Reset Game Outputs
		$outputTurns.text(0);
		$outputMatched.text(0);
		
		// Clear any styles added to the
		// game boxes from our JavaScript...
		$boxes.removeAttr('style');
		
		// Remove all the images from the boxes
		$boxes.children('img').remove();
		
		// Create an array of animal images...
		var monstersImages = [];
		
		// Create an array of 36 animal images
		// 18 matched pairs...
		// use a "for" loop to automate...
		for(var i = 1; i <= 18; i++){
			if(i < 10){
				
				// for images 01 - 09
				// .push() inserts an image into the array..
				monstersImages.push('images/monster_image_0' + i + '.png');
				monstersImages.push('images/monster_image_0' + i + '.png');
					
			}else{
				// for images 10 - 18
				monstersImages.push('images/monster_image_' + i + '.png');
				monstersImages.push('images/monster_image_' + i + '.png');
				
			} // end if (i < 10)	
		} // end for loop
		
		// shuffle the animalImages array...
		shuffleArray(monstersImages);
		
		function shuffleArray(array) {
   			 var counter = array.length, temp, index;

    		// While there are elements in the array
    		while (counter > 0) {
        		// Pick a random index
        		index = Math.floor(Math.random() * counter);

        		// Decrease counter by 1
        		counter--;

        		// And swap the last element with it
        		temp = array[counter];
        		array[counter] = array[index];
        		array[index] = temp;
    		}

    		return array;
			
		} // end shuffleArray
		
		// Add the animal images to each of the 
		// boxes in the game board
		// --> we will .each() jQuery method...
		// --> .each() performs the same function over 
		//     and over again on a set of matched elements...
		$boxes.each(function(index, element){
			
			// Code in here will run once on "each"
			// game box
		
			// Grab the current box that .each() has 
			// selected
			var $this = $(this);
			
			// add one image to each box...
			// create image
			$('<img>').attr('src', monstersImages[index])
					  // add image to the box	
					  .appendTo($this)
					  // hide the image...
					  .hide();		
			
		}); // end .each()
		
	}, // end init()
	
	gameTurn: function(box){
		
		counterClick++ // adds 1 to counterClick
		
		// grab the image inside the 
		// the box that was clicked on
		currentImage = box.children('img');
		// grab the image src attribute 
		// that is inside the box that was clicked on...
		currentImageSrc = currentImage.attr('src');
		
		// if the current image does NOT have the
		// class "selected"
		// --> ! = NOT	
		if(!currentImage.hasClass('selected')){
			// if the image has not been matched
			if(!currentImage.hasClass('matched')){
				// if the click counter is less than 2
				// this code will run on the first click
				// of each turn...
				if(counterClick < 2){
					// reveal the image to the user...
					box.css('background-color', '#a9bcef');
					currentImage.show()
					// add the 'selected' class to image
					currentImage.addClass('selected');
					// set the current image as the 
					// previous
					previousImageSrc = currentImageSrc;
					
				}else if(counterClick === 2){
					// check if there is a match...
					if(currentImageSrc === previousImageSrc){

						// this code will run if their images match
						// select the matched images
						// and remove the selected class
						// and add the "matched" class
		$('img[src="' + currentImageSrc  + '"]')    
						.removeClass('selected')
						.addClass('matched');
						
		box.css('background-color', '#a9bcef');
		currentImage.show();
		// add one to counterTurn
		counterTurns++
		// add one to counterMatched
		counterMatched++
		// output the counters...
		$outputTurns.text(counterTurns);
		$outputMatched.text(counterMatched);
		
		// If all the squares are matched end the game...
		// 18 -> 36 squares / 2 
		if(counterMatched === matchesToWin){
			// if (counterTurns >= 2){
			
			$endMsg.removeClass('hideEndMsg');
			$gameBoard.addClass('endBox');

			console.log('Hello from end game...');

			$('.asteroid').addClass('animated shake');
			$('.rotateIn').removeClass('hide').addClass('animated rotateIn');
			$('.pulse').removeClass('hide').addClass('animated pulse');
			// return will end the function..
			return;	
		} // end if --> end game		
		
		// reset the counter click...
		counterClick = 0;
						
					}else{
						// code will run if two
						// images selected and they do not 
						// match
					box.css('background-color', '#a9bcef');
					currentImage.addClass('selected');
					currentImage.show();
					
					// show the two images for 3/4 of a second and
					// then hide them...
					setTimeout(function(){
					
					// code to run after 750ms has
					// expired...
					//
					// 1.  remove the selected class
					// 2.  hide the selected images
					// 3.  navigate to their parents
					// 4.  remove the "style" attribute
					//     from their parents...
					$('.selected').removeClass('selected')
						          .hide()
								  .parent()
								  .removeAttr('style');
								  
					// reset the counterTurns
					counterTurns++;
					$outputTurns.text(counterTurns);
					// reset our counterClick
					counterClick = 0;
		
					}, 750)
					
					} // end if images match or not
						
				} // end if counterClick
			}else{
				// //alert('matched');
				// if(counterClick == 2){
				// 	counterClick = 1;	
				// }else{
				// 	counterClick = 0;	
				// }	
				counterClick = 0;
			}// end if matched
		}else {
			//alert('selected');
			counterClick = 1;	
		} // end if selected

	} // end gameTurn()
	
} // end MatchGame Object







