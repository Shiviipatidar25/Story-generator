/*
 * Random Story Generator
 * This script generates a funny random story when the user clicks a button.
 * It also customizes the name and supports UK measurement conversion.
 */

// Selecting elements from the DOM
const customName = document.getElementById("customname"); // Input field for user's name
const randomize = document.querySelector(".randomize"); // Button to generate a random story
const story = document.querySelector(".story"); // Paragraph to display the generated story

/**
 * Selects a random value from a given array.
 * @param {Array} array - The array to pick a random value from.
 * @returns {*} A random element from the array.
 */
function randomValueFromArray(array) {
    const random = Math.floor(Math.random() * array.length);
    return array[random];
}

// Base story template
const storyText = 'It was 94 fahrenheit outside, so :insertx: went for a walk. When they got to :inserty:, they stared in horror for a few moments, then :insertz:. Bob saw the whole thing, but was not surprised — :insertx: weighs 300 pounds, and it was a hot day.';

// Arrays of possible values for placeholders
const insertX = ['Willy the Goblin', 'Big Daddy', 'Father Christmas'];
const insertY = ['the soup kitchen', 'Disneyland', 'the White House'];
const insertZ = ['spontaneously combusted', 'melted into a puddle on the sidewalk', 'turned into a slug and crawled away'];

// Event listener for the button click
randomize.addEventListener('click', result);

/**
 * Generates a random story with replacements and updates the DOM.
 */
function result() {
    let newStory = storyText;

    // Replace placeholders with random values
    const xItem = randomValueFromArray(insertX);
    const yItem = randomValueFromArray(insertY);
    const zItem = randomValueFromArray(insertZ);

    newStory = newStory.replaceAll(':insertx:', xItem);
    newStory = newStory.replaceAll(':inserty:', yItem);
    newStory = newStory.replaceAll(':insertz:', zItem);

    // If user entered a name, replace "Bob" with the custom name
    if (customName.value !== '') {
        const name = customName.value;
        newStory = newStory.replaceAll('Bob', name);
    }

    // Convert measurements if UK option is checked
    if (document.getElementById("uk").checked) {
        const weight = `${Math.round(300 * 0.0714286)} stone`; // Convert pounds to stone
        const temperature = `${Math.round((94 - 32) * 5 / 9)} centigrade`; // Convert Fahrenheit to Celsius
        newStory = newStory.replaceAll('94 fahrenheit', temperature);
        newStory = newStory.replaceAll('300 pounds', weight);
    }

    // Display the modified story in the paragraph
    story.textContent = newStory;
    story.style.visibility = 'visible';
}
