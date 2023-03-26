"use strict";

// describe("describe", function () {
//   it("test", function () {});
// });
var assert = chai.assert;
describe("validateEmail", function () {
  describe("valid string", function () {
    it("not an empty string", function () {
      assert.equal(validateEmail(""), false);
    });
    it("typeof string", function () {
      assert.equal(validateEmail(222), false, "number error");
      assert.equal(validateEmail(true), false, "boolean error");
      assert.equal(validateEmail({}), false, "object error");
    });
    it("not all spaces", function () {
      assert.equal(validateEmail(" "), false);
    });
  });
  describe("valid data", function () {
    it("Don't have the @ or @ the first character", function () {
      assert.isFalse(validateEmail("emailgmail.com"), "Don't have the @");
      assert.isFalse(validateEmail("@emailgmail.com"), "@ the first character");
    });
  });
  describe("homeWork", function () {
    it("length less than 5", function () {
      assert.equal(validateEmail("emai"), false);
    });
    it("should contain only one symbol '@'", function () {
      assert.equal(validateEmail("email@gmail"), false);
    });
    it("should contain '.'", function () {
      assert.isTrue(validateEmail("e.mail@gmail.com"), "valid email");
      assert.isFalse(validateEmail("e.mail@gmailcom"), "missing '.' after '@'");
      assert.isFalse(validateEmail("e.mail.@gmail.com"), "invalid '.' before '@'");
    });
  });
});