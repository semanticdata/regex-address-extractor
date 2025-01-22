# Regex Address Extractor

A web-based tool that extracts street addresses from any text input. This tool uses regular expressions to identify and extract US street addresses, making it useful for parsing addresses from emails, documents, or any text content.

![screenshot](/screenshot.png)

## Features

- Extract addresses from any pasted text
- Supports various street types (Avenue, Street, Road, etc.)
- Handles directional suffixes (North, South, East, West)
- Supports hyphenated building numbers
- Alphabetically sorts extracted addresses
- One-click copy of all extracted addresses
- Visual feedback for all actions
- Mobile-responsive design

## How It Works

The tool preprocesses the input text by normalizing common address separators (converting them to newlines):
- "and" between addresses
- Commas
- Semicolons

Then it uses an enhanced regular expression pattern to identify common US street address formats:

```regex
\d+(?:-\d+)?\s+(?:[A-Za-z0-9\.']+\s?)+(?:Avenue|Ave|Street|St|Drive|Dr|Road|Rd|Boulevard|Blvd|Lane|Ln|Place|Pl|Court|Ct|Circle|Cir|Way|Parkway|Pkwy|Highway|Hwy)(?:\s+[A-Za-z]+)?(?:\s+(?:North|South|East|West|N|S|E|W))?
```

The pattern matches:

- Street numbers (including hyphenated ranges like "123-125")
- Street names (including those with periods and apostrophes)
- Common street type abbreviations and full names
- Optional directional suffixes
- Various street types:
  - Avenue/Ave
  - Street/St
  - Drive/Dr
  - Road/Rd
  - Boulevard/Blvd
  - Lane/Ln
  - Place/Pl
  - Court/Ct
  - Circle/Cir
  - Way
  - Parkway/Pkwy
  - Highway/Hwy

## Usage

1. Open the HTML file in any modern web browser
2. Paste your text containing addresses into the input area
3. Click "Extract Addresses" to process the text
4. View the extracted addresses in alphabetical order
5. Use the "Copy Addresses" button to copy all extracted addresses to your clipboard

## Example Input

```plaintext
Here's our new office at 4741 Welcome Ave N, right next to the park.
The delivery should go to 6124 Lakeland Ave.
Other locations include 4856 Maryland Ave N and 3002 Jersey Ave N.
Meeting locations: 3517 Perry Ave N, 5909 29th Pl N
Warehouse: 7100 Medicine Lake Rd
Branch offices: 
- 3344 Adair Ave N
- 6118 34th Ave N
- 3617 Vera Cruz Ave N
```

```plaintext
4741 Welcome Ave N
6124 Lakeland Ave
4856 Maryland Ave N
3002 Jersey Ave N
3517 Perry Ave N
5909 29th Pl N
7100 Medicine Lake Rd
3344 Adair Ave N
6118 34th Ave N
3617 Vera Cruz Ave N
```

## Technical Details

- Pure JavaScript implementation (no dependencies)
- Uses the Clipboard API for modern copy functionality
- Responsive CSS design
- Error handling for invalid inputs
- User feedback system for all actions

## Development

To modify the address matching patterns:

1. Edit the `addressRegex` constant in the JavaScript code
2. Test new patterns on [regex101](https://regex101.com/)
3. Consider adding new street types or address formats as needed

## License

Source code in this repository is available under the [MIT License](./LICENSE).
