const recentTikTokViews = [1932, 2300, 453, 5222, 6733, 7402, 8334];
const recentInstagramViews = [936, 2576, 453, 7013, 5489, 7402, 3921];
const recentYouTubeViews = [2300, 453, 5222, 989, 6733, 7402, 2789];

function mean(viewsArray) {
    let totalViews = viewsArray.reduce((acc, curr) => acc + curr, 0); // Sum of all views
    let meanViews = totalViews / viewsArray.length; // Calculate mean
    return meanViews;
}

function median(viewsArray) {

    let sortedStats = viewsArray.sort((a, b) => a - b); 
    
    let middleIndex = Math.floor(sortedStats.length / 2);
    

    if (sortedStats.length % 2 !== 0) {
        return sortedStats[middleIndex];
    } else {
        
        return (sortedStats[middleIndex - 1] + sortedStats[middleIndex]) / 2;
    }
}

console.log("TikTok");
console.log("Mean:", mean(recentTikTokViews)); 
console.log("Median:", median(recentTikTokViews)); 

console.log("\nInstagram");
console.log("Mean:", mean(recentInstagramViews)); 
console.log("Median:", median(recentInstagramViews)); 

console.log("\nYouTube");
console.log("Mean:", mean(recentYouTubeViews));
console.log("Median:", median(recentYouTubeViews)); 
