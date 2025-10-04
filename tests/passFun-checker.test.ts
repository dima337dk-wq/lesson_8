import {calculatePasswordStrength} from "../src/passFun";

describe("Password strength function testing", () => {
    test("Check very weak password", () => {
        expect(calculatePasswordStrength("")).toBe("Very Weak"); // Nothing
        expect(calculatePasswordStrength("asdsa")).toBe("Very Weak");
        expect(calculatePasswordStrength("123asd")).toBe("Very Weak");
        expect(calculatePasswordStrength("*^%(11")).toBe("Very Weak");
    })

    test("Check weak password", () => {
        expect(calculatePasswordStrength("asd^%DF")).toBe("Weak");
        expect(calculatePasswordStrength("ASdsa23")).toBe("Weak");
    })

    test("Check moderate password", () => {
        expect(calculatePasswordStrength("Za#1")).toBe("Moderate");
    })

    test("Check strong password", () => {
        expect(calculatePasswordStrength("Za#1aaaa")).toBe("Strong");
        expect(calculatePasswordStrength("Za#1aaaaaaaaaaaa")).toBe("Strong");
    })

    test("Password length boundary tests", () => {
        expect(calculatePasswordStrength("aaaa111")).toBe("Very Weak"); // 7
        expect(calculatePasswordStrength("aaaa1111")).toBe("Weak"); // 8
        expect(calculatePasswordStrength("aaaa11111")).toBe("Weak"); // 9
        expect(calculatePasswordStrength("aaaa1111111")).toBe("Weak"); // 11
        expect(calculatePasswordStrength("aaaa11111111")).toBe("Moderate"); // 12
        expect(calculatePasswordStrength("aaaa111111111")).toBe("Moderate"); // 13
    })
})

