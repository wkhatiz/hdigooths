const exitNodes = [
    ["EA", "Woolworths Town Hall Stairs- George Street (East)"],
    ["EB", "Station Office Stairs - George Street (East)"],
    ["EC", "George Street Elevator - George Street (East)"],
    ["ED", "Towards Bathurst Street Staies - George Street (East)"],
    ["EF", "Town Hall Pavilion Plaza Exit"],
    ["EG", "St Andrews Cathedral Exit"],
    ["EH", "Town Hall Square (right) - George Street (West)"],
    ["EI", "Town Hall Square (left) - George Street (West)"],
    ["EJ", "Through Town Hall Square toward Darling Harbour - Druitt Street"],
    ["EK", "Through Town Hall Square toward  Darling Harbour - Bathurst Street"],
    ["EL", "Cnr George Street (West) and Druitt Street Stairs"],
    ["EM", "The Galeries Stairs - Park Street"],
    ["EN", "Queen Victoria Building Exit - York Street"],
];

export function getExitNameFromPath(item) {
    let name = "";
    targetNode = item.nodes[item.nodes.length-1]

    exitNodes.map((exit) => {
        if(exit[0] == targetNode){
            name = exit[1];
        }
    });

    return name;
}

export default exitNodes;