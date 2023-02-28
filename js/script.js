
//This function return the percent of elements in the array that are below of the actual score
function percentScorePosition(scores,actual_score)
    {
        let i;

        scores.sort();

    for(i=0; (i<scores.length)&& actual_score > scores[i];i++)
        {}

        return (i/scores.length)*100;
    }

