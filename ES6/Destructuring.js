console.log("Destructuring");

const profile = {
  id: 1,
  address: { city: "pune", state: "MH" },
  hobbies: ["Badminton", "running"],
};

const { city } = profile.address;
console.log(city);
