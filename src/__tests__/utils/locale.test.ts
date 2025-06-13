import { describe, expect, test, vi } from "vitest";
import { getPreferredLocale } from "../../utils/locale";

// Mock LOCALES + DEFAULT_LOCALE
vi.mock("../../config/config", () => ({
    LOCALES: ["fr", "en"],
    DEFAULT_LOCALE: "en"
}));

describe("getPreferredLocale", () => {
    test("returns fr for fr-CA", () => {
        const result = getPreferredLocale("fr-CA,fr;q=0.9,en;q=0.8");
        expect(result).toBe("fr");
    });

    test("returns en for en-GB", () => {
        const result = getPreferredLocale("en-GB,en;q=0.9");
        expect(result).toBe("en");
    });

    test("returns default when no supported language", () => {
        const result = getPreferredLocale("nl,es;q=0.9");
        expect(result).toBe("en");
    });

    test("returns exact match if available", () => {
        const result = getPreferredLocale("fr,en;q=0.9");
        expect(result).toBe("fr");
    });

    test("returns default when header is null", () => {
        const result = getPreferredLocale(null);
        expect(result).toBe("en");
    });

    test("ignores invalid q values and still returns something", () => {
        const result = getPreferredLocale("fr;q=aaa,en;q=0.8");
        expect(result).toBe("fr");
    });

    test("returns de for de-DE", () => {
        const result = getPreferredLocale("de-DE,de;q=0.9,en;q=0.8");
        expect(result).toBe("de");
    });

    test("returns de when it's the only supported one in the header", () => {
        const result = getPreferredLocale("de");
        expect(result).toBe("de");
    });

    test("returns fr when fr and de are present, fr with higher q", () => {
        const result = getPreferredLocale("de;q=0.7,fr;q=0.9");
        expect(result).toBe("fr");
    });


    test("returns default when Accept-Language is an empty string", () => {
        const result = getPreferredLocale("");
        expect(result).toBe("en");
    });

    test("skips unsupported locales with invalid q values", () => {
        const result = getPreferredLocale("xx;q=1.0,fr;q=0.9");
        expect(result).toBe("fr");
    });
});
