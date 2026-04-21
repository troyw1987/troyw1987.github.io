var textObjects = [
  { text: "Steam", href: "https://steamcommunity.com/profiles/76561198404481434/" },
  { text: "Discord", href: "https://discord.gg/tSzqBrFUsq" },
  { text: "Github", href: "https://github.com/troyw1987" },
  { text: "Snapchat", href: "https://www.snapchat.com/add/skill.issu?share_id=Bic6MAvkR84&locale=en-US" },
  { text: "Whatsapp", href: "https://chat.whatsapp.com/JbDVpHRfQuUFcVZbkPB4i1" },
  { text: "--> ✕  <--", closing: true },
];
var currentIndex = 0;
var speed = 50; // typing speed in milliseconds
var disabled = false;

// Listen for the click event on the "enterText" element
document.getElementById('welcome-screen').addEventListener('click', function () {
  // Start the typing process after the user clicks "enterText"
  startTyping();
});

// Additional click event listener for the "autoScrollText" element
document.getElementById('autoScrollText').addEventListener('click', function () {
  // Handle the click action, for example, you can open a link
  var textObject = textObjects[currentIndex];
  console.log(textObject);

  if (textObject.closing) {
    document.getElementById('imageContainer').remove();

    let thisScript = document.querySelector('script[src="replacing.js"]');
    disabled = true

    console.log("\n\nIgnore the errors w/ the lennyfaces. \n - It's intended behavior lol\n\n");
    throw new Error("( ͡° ͜ʖ ͡°) Stopped Script Execution ( ͡° ͜ʖ ͡°)");
  }
  window.open(textObject.href, '_self')
});

function startTyping() {
  var element = document.getElementById('autoScrollText');
  var textObject = textObjects[currentIndex];
  typeAndDelete(element, textObject.text, textObject.href, speed, function () {
    currentIndex = (currentIndex + 1) % textObjects.length;
    startTyping(); // Continue with the next text
  });
}

function typeAndDelete(element, text, href, speed, callback) {
  var index = 0;

  function type() {

    if (disabled) {
      throw new Error("щ（ﾟДﾟщ）My parents are dead щ（ﾟДﾟщ）");
    }

    if (index < text.length) {
      element.innerHTML += text.charAt(index);
      index++;
      setTimeout(type, speed);
    } else {
      // Typing complete
      // Wait for a moment before starting deletion
      setTimeout(function () {
        deleteText(element, text, speed, callback);
      }, 1500);
    }
  }

  // Start typing
  type();
}

function deleteText(element, text, speed, callback) {
  var index = text.length;

  function deleteChar() {
    if (index > 0) {

      element.innerHTML = text.substring(0, index - 1);
      index--;
      setTimeout(deleteChar, speed);
    } else {
      // Deletion complete
      callback(); // Execute callback
    }
  }

  // Start deletion
  deleteChar();
}
