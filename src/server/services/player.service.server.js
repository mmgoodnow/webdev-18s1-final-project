const fetch = require("node-fetch");
module.exports = function(app) {
	app.get("/api/player/:playerId", findPlayerById);
	app.get("/api/player", findAllPlayers);
	app.get("/api/rankings", findRankings);

	function findAllPlayers(req, res) {
		fetch("http://api.snooker.org/?t=10&st=p&s=2018")
			.then(response => response.json())
			.then(json => res.json(json));
	}

	function findPlayerById(req, res) {
		fetch("http://api.snooker.org/?p=" + req.params.playerId)
			.then(response => response.json())
			.then(json => res.json(json[0]));
	}

	function findRankings(req, res) {
		fetch("http://api.snooker.org/?rt=MoneyRankings&s=2018")
			.then(response => response.json())
			.then(json => res.json(json));
	}
};
