//alert("ccccClick anywhere on the page to test playing audio from an extension.")
//if(document.readyState === 'loading') {
//    document.addEventListener('DOMContentLoaded',afterDOMLoaded);
//} else {
//    afterDOMLoaded();
//}
//
//function afterDOMLoaded(){
//    //Everything that needs to happen after the DOM has initially loaded.
//	let url = chrome.runtime.getURL('note.mp3')
//	console.log(url)
//alert("meowsmfa");
//	let a = new Audio(url)
//	a.volume = 0.1;
//	a.play()
//
//
//}
let volume = 0;
	let clickCounter = 0;
document.addEventListener('click', () => {
	let url = chrome.runtime.getURL('scream.mp3')
	let url2 = chrome.runtime.getURL('scream2.mp3')
	let url3 = chrome.runtime.getURL('scream3.mp3')

	console.log(url)
console.log("meow");
	let a = new Audio(url)
	let b = new Audio(url2);
	let c = new Audio(url3);
//	let music = new Audio({
 //   loop: true,
  //  volume: 1,
   // src: ['/yourSounds/music.mp3']
//})

	if(clickCounter % 2 === 0) {
		volume += 0.1;
	}
	console.log('volume', volume, 'counter', clickCounter);
	if(volume <= 0.3){
		a.volume = volume;
		a.play()
	} else if(volume <= 0.6){
		b.volume = volume;
		b.play()
	} else if (volume <= 1){
		c.volume = volume;
 		c.play()
	}

	clickCounter++
})


