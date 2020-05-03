var xhr = new XMLHttpRequest();                 // Create XMLHttpRequest object

xhr.onload = function() {                       // When readystate changes
  
    responseObject = JSON.parse(xhr.responseText);

    // builds string with new object
    var newContent = '';
    for (var i = 0; i < responseObject.fdata.length; i++) { // Loop through object
      // this is where I call all my content from json
      newContent += '<p><b>'+ responseObject.fdata[i].header1 + '</b><br>';
      newContent += responseObject.fdata[i].content + '</p>';
      newContent += '<p><b>'+ responseObject.fdata[i].header2 + '</b><br>';
      newContent += responseObject.fdata[i].content2 + '</p>';
      newContent += responseObject.fdata[i].num1 + '</p>';
      newContent += responseObject.fdata[i].num2 + '</p>';
      newContent += responseObject.fdata[i].num3 + '</p>';
      newContent += responseObject.fdata[i].num4 + '</p>';
      newContent += responseObject.fdata[i].num5 + '</p>';
      newContent += '<p><b>'+ responseObject.fdata[i].header3 + '</b><br>';
      newContent += '<p><b>'+ responseObject.fdata[i].header4 + '</b><br>';
      newContent += responseObject.fdata[i].content3 + '</p>';
      newContent += '<p><b>'+ responseObject.fdata[i].header5 + '</b><br>';
      newContent += responseObject.fdata[i].content4 + '</p>';
      newContent += responseObject.fdata[i].content5 + '</p>';
      newContent += responseObject.fdata[i].content6 + '</p>';
      newContent += responseObject.fdata[i].content7 + '</p>';
      newContent += responseObject.fdata[i].content8 + '</p>';
      newContent += responseObject.fdata[i].content9 + '</p>';
      newContent += responseObject.fdata[i].content10 + '</p>';
      newContent += '<p><b>'+ responseObject.fdata[i].header6 + '</b><br>';
      newContent += responseObject.fdata[i].content11 + '</p>';
      newContent += responseObject.fdata[i].content12 + '</p>';
      newContent += '</div>';// the end
    }

    // Update the page with the new content
    document.getElementById('Content_area').innerHTML = newContent;

};

xhr.open('GET', 'https://lmowens.github.io/FinalProject/data/FinalProjectData.json', true);        // Prepare the request
xhr.send(null);                                 // Send the request