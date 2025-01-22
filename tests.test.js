// Test suite for Address Extractor
describe('Address Extractor Tests', () => {
    // Helper function to extract addresses (copied from main logic)
    function extractAddresses(inputText) {
        const normalizedText = inputText
            .replace(/\s+and\s+/gi, '\n')
            .replace(/,\s*/g, '\n')
            .replace(/;\s*/g, '\n');

        const addressRegex = /\d+(?:-\d+)?\s+(?:[A-Za-z0-9\.']+\s?)+(?:Avenue|Ave|Street|St|Drive|Dr|Road|Rd|Boulevard|Blvd|Lane|Ln|Place|Pl|Court|Ct|Circle|Cir|Way|Parkway|Pkwy|Highway|Hwy)(?:\s+[A-Za-z]+)?(?:\s+(?:North|South|East|West|N|S|E|W))?/gi;

        const lines = normalizedText.split("\n");
        const addresses = [];

        lines.forEach((line) => {
            const matchedAddresses = line.match(addressRegex);
            if (matchedAddresses) {
                addresses.push(...matchedAddresses);
            }
        });

        return addresses;
    }

    // Basic address extraction tests
    test('should extract a single simple address', () => {
        const input = "123 Main Street";
        const addresses = extractAddresses(input);
        expect(addresses).toHaveLength(1);
        expect(addresses[0]).toBe("123 Main Street");
    });

    test('should extract multiple addresses separated by commas', () => {
        const input = "123 Main Street, 456 Oak Avenue, 789 Pine Road";
        const addresses = extractAddresses(input);
        expect(addresses).toHaveLength(3);
        expect(addresses).toContain("123 Main Street");
        expect(addresses).toContain("456 Oak Avenue");
        expect(addresses).toContain("789 Pine Road");
    });

    // Address variations tests
    test('should handle different street types', () => {
        const input = `
            123 Oak Street
            456 Maple Avenue
            789 Pine Boulevard
            321 Cedar Lane
            654 Elm Court
            987 Birch Circle
            741 Willow Way
            852 Forest Drive
            963 Mountain Road
            159 Valley Parkway
            753 Sunset Highway
        `;
        const addresses = extractAddresses(input);
        expect(addresses).toHaveLength(11);
    });

    test('should handle hyphenated house numbers', () => {
        const input = "123-125 Main Street";
        const addresses = extractAddresses(input);
        expect(addresses).toHaveLength(1);
        expect(addresses[0]).toBe("123-125 Main Street");
    });

    test('should handle directional suffixes', () => {
        const input = `
            123 Main Street North
            456 Oak Avenue South
            789 Pine Road East
            321 Cedar Lane West
            654 Elm Court N
            987 Birch Circle S
            741 Willow Way E
            852 Forest Drive W
        `;
        const addresses = extractAddresses(input);
        expect(addresses).toHaveLength(8);
    });

    // Edge cases and validation tests
    test('should handle addresses with periods', () => {
        const input = "123 St. John's Street";
        const addresses = extractAddresses(input);
        expect(addresses).toHaveLength(1);
        expect(addresses[0]).toBe("123 St. John's Street");
    });

    test('should not match invalid addresses', () => {
        const invalidInputs = [
            "No address here",
            "Street 123",
            "Avenue of the Americas", // No street number
            "123", // Just a number
            "ABC Street" // No street number
        ];
        
        invalidInputs.forEach(input => {
            const addresses = extractAddresses(input);
            expect(addresses).toHaveLength(0);
        });
    });

    test('should handle mixed valid and invalid addresses', () => {
        const input = `
            123 Main Street
            Invalid Address
            456 Oak Avenue
            Just some text
            789 Pine Road
        `;
        const addresses = extractAddresses(input);
        expect(addresses).toHaveLength(3);
        expect(addresses).toContain("123 Main Street");
        expect(addresses).toContain("456 Oak Avenue");
        expect(addresses).toContain("789 Pine Road");
    });

    // Separator tests
    test('should handle different address separators', () => {
        const inputs = [
            "123 Main Street and 456 Oak Avenue",
            "123 Main Street, 456 Oak Avenue",
            "123 Main Street; 456 Oak Avenue"
        ];
        
        inputs.forEach(input => {
            const addresses = extractAddresses(input);
            expect(addresses).toHaveLength(2);
            expect(addresses).toContain("123 Main Street");
            expect(addresses).toContain("456 Oak Avenue");
        });
    });

    // Performance test
    test('should handle large input efficiently', () => {
        const baseAddress = "123 Main Street";
        const largeInput = Array(1000).fill(baseAddress).join(", ");
        
        const startTime = performance.now();
        const addresses = extractAddresses(largeInput);
        const endTime = performance.now();
        
        expect(addresses).toHaveLength(1000);
        expect(endTime - startTime).toBeLessThan(1000); // Should process in less than 1 second
    });
}); 