const connections = [
	["SA", "NF", 2, "1No description has been provided for this step"],
	["SB", "NF", 2, "2No description has been provided for this step"],
	["SC", "NG", 2, "3No description has been provided for this step"],
	["SD", "NG", 2, "4No description has been provided for this step"],
	["SE", "NH", 2, "5No description has been provided for this step"],
	["SE", "NK", 2, "6No description has been provided for this step"],
	["SF", "NH", 2, "7No description has been provided for this step"],
	["SF", "NK", 2, "8No description has been provided for this step"],
	["SG", "NN", 2, "9No description has been provided for this step"],
	["SH", "NN", 2, "0No description has been provided for this step"],
	["SI", "NO", 2, "1No description has been provided for this step"],
	["SJ", "NO", 2, "2No description has been provided for this step"],
	["NA", "NB", 3, "3No description has been provided for this step"],
	["NA", "NC", 3, "4No description has been provided for this step"],
	["NA", "NV", 2, "5No description has been provided for this step"],
	["NA", "NF", 3, "6No description has been provided for this step"],
	["NB", "NA", 3, "7No description has been provided for this step"],
	["NB", "NE", 5, "8No description has been provided for this step"],
	["NC", "NA", 3, "9No description has been provided for this step"],
	["NC", "ND", 3, "0No description has been provided for this step"],
	["ND", "NC", 3, "1No description has been provided for this step"],
	["ND", "EL", 2, "2No description has been provided for this step"],
	["ND", "NJ", 9, "3No description has been provided for this step"],
	["NE", "NB", 5, "4No description has been provided for this step"],
	["NE", "EA", 2, "5No description has been provided for this step"],
	["NE", "NI", 5, "6No description has been provided for this step"],
	["NF", "NA", 3, "7No description has been provided for this step"],
	["NF", "SA", 2, "8No description has been provided for this step"],
	["NF", "NG", 4, "9No description has been provided for this step"],
	["NF", "SB", 2, "0No description has been provided for this step"],
	["NG", "NF", 4, "1No description has been provided for this step"],
	["NG", "SC", 2, "2No description has been provided for this step"],
	["NG", "NH", 4, "3No description has been provided for this step"],
	["NG", "SD", 2, "4No description has been provided for this step"],
	["NH", "NG", 4, "5No description has been provided for this step"],
	["NH", "NJ", 3, "6No description has been provided for this step"],
	["NH", "SE", 2, "7No description has been provided for this step"],
	["NH", "NK", 3, "8No description has been provided for this step"],
	["NH", "SF", 2, "9No description has been provided for this step"],
	["NH", "NI", 3, "0No description has been provided for this step"],
	["NI", "NE", 5, "1No description has been provided for this step"],
	["NI", "NH", 3, "2No description has been provided for this step"],
	["NI", "NM", 3, "3No description has been provided for this step"],
	["NI", "EB", 2, "4No description has been provided for this step"],
	["NJ", "ND", 9, "5No description has been provided for this step"],
	["NJ", "NT", 3, "6No description has been provided for this step"],
	["NJ", "NL", 3, "7No description has been provided for this step"],
	["NJ", "NH", 3, "8No description has been provided for this step"],
	["NK", "NH", 3, "9No description has been provided for this step"],
	["NK", "SE", 2, "0No description has been provided for this step"],
	["NK", "NL", 3, "1No description has been provided for this step"],
	["NK", "NN", 3, "2No description has been provided for this step"],
	["NK", "NM", 3, "3No description has been provided for this step"],
	["NK", "SF", 2, "4No description has been provided for this step"],
	["NL", "NJ", 3, "5No description has been provided for this step"],
	["NL", "NR", 8, "6No description has been provided for this step"],
	["NL", "NK", 3, "7No description has been provided for this step"],
	["NM", "NI", 3, "8No description has been provided for this step"],
	["NM", "NK", 3, "9No description has been provided for this step"],
	["NM", "NS", 4, "0No description has been provided for this step"],
	["NN", "NK", 3, "1No description has been provided for this step"],
	["NN", "SG", 2, "2No description has been provided for this step"],
	["NN", "NO", 4, "3No description has been provided for this step"],
	["NN", "SH", 2, "4No description has been provided for this step"],
	["NO", "NN", 4, "5No description has been provided for this step"],
	["NO", "SI", 2, "6No description has been provided for this step"],
	["NO", "NP", 3, "7No description has been provided for this step"],
	["NO", "SJ", 2, "8No description has been provided for this step"],
	["NP", "NO", 3, "9No description has been provided for this step"],
	["NP", "NR", 4, "0No description has been provided for this step"],
	["NP", "NQ", 3, "1No description has been provided for this step"],
	["NQ", "NS", 5, "2No description has been provided for this step"],
	["NQ", "NP", 3, "3No description has been provided for this step"],
	["NQ", "EF", 2, "4No description has been provided for this step"],
	["NR", "NL", 8, "5No description has been provided for this step"],
	["NR", "EG", 2, "6No description has been provided for this step"],
	["NR", "NP", 4, "7No description has been provided for this step"],
	["NS", "NM", 4, "8No description has been provided for this step"],
	["NS", "NQ", 5, "9No description has been provided for this step"],
	["NS", "ED", 2, "0No description has been provided for this step"],
	["NS", "EC", 2, "1No description has been provided for this step"],
	["NT", "EI", 2, "2No description has been provided for this step"],
	["NT", "NU", 9, "3No description has been provided for this step"],
	["NT", "EH", 2, "4No description has been provided for this step"],
	["NT", "NJ", 3, "5No description has been provided for this step"],
	["NU", "NT", 9, "6No description has been provided for this step"],
	["NU", "EJ", 5, "7No description has been provided for this step"],
	["NU", "EK", 9, "8No description has been provided for this step"],
	["NV", "NW", 5, "9No description has been provided for this step"],
	["NV", "NX", 7, "0No description has been provided for this step"],
	["NV", "NA", 2, "1No description has been provided for this step"],
	["NW", "NV", 5, "2No description has been provided for this step"],
	["NW", "EM", 2, "3No description has been provided for this step"],
	["NX", "NV", 7, "4No description has been provided for this step"],
	["NX", "EN", 2, "5No description has been provided for this step"],
	["EA", "NN", 2, "6No description has been provided for this step"],
	["EB", "NI", 2, "7No description has been provided for this step"],
	["EC", "NS", 2, "8No description has been provided for this step"],
	["ED", "NS", 2, "9No description has been provided for this step"],
	["EF", "NQ", 2, "0No description has been provided for this step"],
	["EG", "NR", 2, "1No description has been provided for this step"],
	["EH", "NT", 2, "2No description has been provided for this step"],
	["EI", "NT", 2, "3No description has been provided for this step"],
	["EJ", "NU", 9, "4No description has been provided for this step"],
	["EK", "NU", 5, "5No description has been provided for this step"],
	["EL", "ND", 2, "6No description has been provided for this step"],
	["EM", "NW", 2, "7No description has been provided for this step"],
	["EN", "NX", 2, "8No description has been provided for this step"]
]

export function getDescFromNodesArr(currNode, nextNode) {
	let desc = "";
	connections.map((connection) => {
		if(connection[0] == currNode && connection[1] == nextNode){
			desc = connection[3];
		}
	});
	return desc;
}

export default connections;