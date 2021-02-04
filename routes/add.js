var data = require("../data.json");

exports.addFriend = function (req, res) {
	var name = req.query.name;
	var description = req.query.description;
	var newFriend = {
		"name": name,
		"description": description,
		"imageURL": "https://picsum.photos/400/400"
	};
	data.friends.push(newFriend);
};