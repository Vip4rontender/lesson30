"use strict";

// function test() {
//   return false;
// }
function validateEmail(email) {
  // if (email === "") return false;
  // if (typeof email !== "string") return false;
  // if (!email.split("").includes("@") || email.split("")[0] === "@")
  //   return false;
  // if (email.length < 5) return false;
  // if (email.split("@").length === 2) return false;
  if (!email.split("@")[1].includes(".")) return false; // if (email.split("@")[1].indexOf(".") === 0) return false;

  if (email.lastIndexOf(".") < email.indexOf("@")) return false;
  return true;
}