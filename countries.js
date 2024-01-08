const fs = require("fs");

const data = fs.readFileSync("countries.json", "utf8");
const countries = data
	.split("\n")
	.map((line) => line.split(" ").slice(1).join(" "))
	.map((l) => ({ name: l.split(":")[0], iso_code: l.split(":")[1] }));
const json = [];

countries.forEach(({ iso_code, name }) =>
	json.push({
		type: "checkbox",
		id: `ddp_${iso_code}`,
		label: name,
		default: false,
	})
);

console.log(JSON.stringify(json, null, 2));
