# Regex Address Extractor

This project implements a regex-based address extractor that parses input text to extract street addresses. It utilizes regular expressions to identify and extract addresses from the provided text.

![screenshot](/screenshot.png)

## Testing

We use [regex101](https://regex101.com/) to test our expression:

```
/\d+\s+([A-Za-z0-9]+\s?)+\s+(Av|Ave|Avenue|St|Street|Dr|Drive|Rd|Road|Blvd|Boulevard|Ln|Lane|Pl|Place|Ct|Court)(\s+[A-Za-z0-9]*)?/gi
```

This is the example test string used:

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

## © License

Source code in this repository is available under the [MIT License](./LICENSE).
