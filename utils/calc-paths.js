import graph from './graph';
import exitNodes from './exit-nodes';

export default function getAllPathsSorted(graph, startingNode) {
    let paths = [];

    for(let x = 0; x < exitNodes.length; x++){
      paths.push(dijkstras(graph, startingNode, exitNodes[x][0]));
    }
  
    let sortedPaths = mergesortPaths(paths);
  
    return sortedPaths;
    /*
    Returns an array of objects which contain 'distance' and 'nodes' properties. The 'distance' prop is a number, 'nodes' prop is an array of strings. 
    Example:
      sortedPaths = [{distance: 20, nodes: ["SA", "NA", "NB", "NC", "EA"]}, {distance: 20, nodes: ["SA", "ND", "NE", "NF", "EB"]}, ... ]
    */
}

function dijkstras(graph, start, end) {
    const distances = {};
    const visited = {};
    const previous = {};
    const queue = [];
  
    for (let vertex in graph) {
      distances[vertex] = Infinity;
      previous[vertex] = null;
      visited[vertex] = false;
    }
  
    distances[start] = 0;
    queue.push(start);
  
    while (queue.length > 0) {
      const currentVertex = queue.shift();
  
      if (currentVertex === end) {
        const path = [];
        let node = end;
        while (node !== null) {
          path.unshift(node);
          node = previous[node];
        }
        return {
          distance: distances[end],
          nodes: path,
        };
      }
  
      if (!visited[currentVertex]) {
        visited[currentVertex] = true;
        const neighbors = graph[currentVertex];
        for (let neighbor in neighbors) {
          const distance = neighbors[neighbor];
          const totalDistance = distance + distances[currentVertex];
          if (totalDistance < distances[neighbor]) {
            distances[neighbor] = totalDistance;
            previous[neighbor] = currentVertex;
            queue.push(neighbor);
          }
        }
      }
    }
  
    return null;
}

function mergesortPaths(paths) {
    if(paths.length <= 1) {
      return paths;
    }
  
    let middle = Math.floor(paths.length / 2);
    let left = mergesortPaths(paths.slice(0, middle));
    let right = mergesortPaths(paths.slice(middle));
  
    return merge(left, right);
  }
  
  function merge(left, right) {
    let result = [];
    let i = 0;
    let j = 0;
  
    while(i < left.length && j < right.length) {
      if(left[i].distance < right[j].distance) {
        result.push(left[i]);
        i++;
      } else {
        result.push(right[j]);
        j++;
      }
    }
  
    while(i < left.length) {
      result.push(left[i]);
      i++;
    }
  
    while(j < right.length) {
      result.push(right[j]);
      j++;
    }
  
    return result;
}
