import { expect, it, describe } from "vitest";
import {
  double,
  formatCurrencyToIDR,
  calculatePriceWithDiscount,
  getReadableFileSize,
  toCamelCase,
  capitalizeText,
  validateEmail,
  isArrayEmpty,
  getUrlQueryStringAsObject,
  truncateString,
} from "./index";

describe("[utils]: double", () => {
  it("should double a number", () => {
    expect(double(2)).toBe(4);
  });
});

describe("[utils: formatCurrencyToID]", () => {
  it("should format a number to IDR", () => {
    expect(formatCurrencyToIDR(1000)).toEqual("Rp 1.000");
  });

  it("should throw an error if the number is negative", () => {
    expect(() => formatCurrencyToIDR(-1000)).toThrow(
      "Currency must be a positive number"
    );
  });
});

describe("[utils: calculatePriceWithDiscount]", () => {
  it("should calculate the price with discount", () => {
    expect(calculatePriceWithDiscount(1000, 50)).toBe(500);
  });

  it("should throw an error if the discount is negative", () => {
    expect(() => calculatePriceWithDiscount(1000, -50)).toThrow(
      "Discount percentage must be between 0 and 100"
    );
  });

  it("should throw an error if the discount is greater than 100", () => {
    expect(() => calculatePriceWithDiscount(1000, 150)).toThrow(
      "Discount percentage must be between 0 and 100"
    );
  });
});

describe("[utils: getReadableFileSize]", () => {
  it("should return the file size in bytes", () => {
    expect(getReadableFileSize(56, 0)).toBe("56 B");
  });

  it("should return the file size in Kilobytes with default padding", () => {
    expect(getReadableFileSize(1024)).toBe("1.0 KB");
  });

  it("should return the file size in Kilobytes with two digit padding", () => {
    expect(getReadableFileSize(1024, 2)).toBe("1.00 KB");
  });

  it("should return the file size in Megabytes without padding", () => {
    expect(getReadableFileSize(1048576, 0)).toBe("1 MB");
  });

  it("should return the file size in Gigabytes with padding", () => {
    expect(getReadableFileSize(1073741824, 2)).toBe("1.00 GB");
  });

  it("should return the file size in Terabytes with padding", () => {
    expect(getReadableFileSize(1399511627776, 2)).toBe("1.27 TB");
  });
});

describe("[utils: toCamelCase]", () => {
  it("should convert a string to camel case", () => {
    expect(toCamelCase("hello-world")).toBe("helloWorld");
  });

  it("should convert a string with underscores to camel case", () => {
    expect(toCamelCase("hello_world")).toBe("helloWorld");
  });

  it("should convert a string with dashes to camel case", () => {
    expect(toCamelCase("hello-world")).toBe("helloWorld");
  });
});

describe("[utils: capitalizeText]", () => {
  it("should capitalize every first letter in word of a string", () => {
    expect(capitalizeText("hello world")).toBe("Hello World");
  });

  it("should capitalize the first letter of a string with dashes", () => {
    expect(capitalizeText("hello-world")).toBe("Hello-world");
  });
});

describe("[utils: validateEmail]", () => {
  it("should return an error message if the email is empty", () => {
    expect(validateEmail("")).toBe("This field must not be empty.");
  });

  it("should return an error message if the email is invalid", () => {
    expect(validateEmail("invalid-email")).toBe("Invalid email");
  });

  it("should return a valid email", () => {
    expect(validateEmail("valid@email.com")).toBe("Valid email");
  });
});

describe("[utils: isArrayEmpty]", () => {
  it("should return true if the array is empty", () => {
    expect(isArrayEmpty([])).toBe(true);
  });

  it("should return false if the array is not empty", () => {
    expect(isArrayEmpty([1, 2, 3])).toBe(false);
  });
});

describe("[utils: getUrlQueryStringAsObject]", () => {
  it("should return an empty object if the url does not contain a query string", () => {
    expect(getUrlQueryStringAsObject("https://example.com")).toEqual({});
  });

  it("should return an object with query string parameters", () => {
    expect(
      getUrlQueryStringAsObject("https://example.com?foo=bar&baz=123")
    ).toEqual({
      foo: "bar",
      baz: "123",
    });
  });
});

describe("[utils: truncateString]", () => {
  it("should truncate a string to the specified length", () => {
    expect(truncateString("Hello World", 5)).toBe("Hello...");
  });

  it("should not truncate a string if it is already shorter than the specified length", () => {
    expect(truncateString("Hello", 7)).toBe("Hello");
  });
});
