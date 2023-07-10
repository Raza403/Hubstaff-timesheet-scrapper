// Get all the h4 elements in the document
const h4Elements = document.getElementsByTagName('h4');
const data = [];

// Loop through the h4 elements in reverse order
for (let i = h4Elements.length - 1; i >= 0; i--) {
  const h4Element = h4Elements[i];

  // Find the child element with the class 'date' within the h4 element
  const dateElement = h4Element.querySelector('.date');
  // Get the inner text of the date element, or set it to null if the element is not found
  const dateText = dateElement ? dateElement.innerText : null;

  // Find the child element with the class 'duration' within the h4 element
  const durationElement = h4Element.querySelector('.duration');
  // Get the inner text of the duration element, or set it to null if the element is not found
  const timeDuration = durationElement ? durationElement.innerText : null;

  // Convert minutes and seconds to hours
  let durationHours;
  if (timeDuration) {
    // Split the time duration string by ':' delimiter and assign the values to hours, minutes, and seconds variables
    const [hours = '0', minutes = '0', seconds = '0'] = timeDuration.split(':');
    // Calculate the duration in hours by converting minutes and seconds to fractions of an hour
    durationHours = parseInt(hours, 10) + parseInt(minutes, 10) / 60 + parseInt(seconds, 10) / 3600;

    // Push an object with Date and Time properties to the data array
    // Date property is assigned the value of dateText, and Time property is assigned the duration in hours
    data.push({
      Date: dateText,
      Time: durationHours.toFixed(2) + ' hours'
    });
  }
}

// Display the data array as a table in the console
console.table(data);
