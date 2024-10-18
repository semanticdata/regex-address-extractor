document.getElementById("extractButton").addEventListener("click", function () {
    const inputText = document.getElementById("inputText").value;
  
    // Debugging: Check if the button is clicked and inputText is retrieved
    console.log("Button clicked!");
    console.log("Input Text:", inputText);
  
    // Updated Regular Expression to match addresses
    const addressRegex = /\d+\s+([A-Za-z0-9]+\s?)+\s+(Av|Ave|Avenue|St|Street|Dr|Drive|Rd|Road|Blvd|Boulevard|Ln|Lane|Pl|Place|Ct|Court)(\s+[A-Za-z0-9]*)?/g;
  
    // Split the input text into lines
    const lines = inputText.split("\n");
    const addresses = [];
  
    // Loop through each line and apply the regex to find addresses
    lines.forEach((line) => {
      const matchedAddresses = line.match(addressRegex);
      if (matchedAddresses) {
        addresses.push(...matchedAddresses);
      }
    });
  
    // Debugging: Check what the regex is extracting
    console.log("Extracted Addresses:", addresses);
  
    // Sort addresses in alphabetical order
    addresses.sort();
  
    // Clear the list before adding new items
    const addressList = document.getElementById("addressList");
    addressList.innerHTML = "";
  
    // Append each sorted address as a list item
    addresses.forEach((address) => {
      const listItem = document.createElement("li");
      listItem.textContent = address.trim();
      addressList.appendChild(listItem);
    });
  
    // Debugging: Confirm that addresses are displayed
    console.log("Final Address List:", addressList.innerHTML);
  });
  
  // Function to copy the address list to the clipboard
  document.getElementById("copyButton").addEventListener("click", function () {
    const addressList = document.getElementById("addressList");
    const addresses = Array.from(addressList.getElementsByTagName("li"))
      .map((li) => li.textContent)
      .join("\n");
  
    // Create a temporary textarea to hold the addresses
    const tempTextArea = document.createElement("textarea");
    tempTextArea.value = addresses;
    document.body.appendChild(tempTextArea);
    tempTextArea.select();
    document.execCommand("copy");
    document.body.removeChild(tempTextArea);
  
    // Debugging: Confirm the addresses are copied
    console.log("Addresses copied to clipboard:", addresses);
  });
  