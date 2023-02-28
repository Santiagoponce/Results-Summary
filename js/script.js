
//This function return the percent of elements in the array that are below of the actual score
function percentScorePosition(scores,actual_score)
    {
        let i;

        scores.sort();

    for(i=0; (i<scores.length)&& actual_score > scores[i];i++)
        {}

        return (i/scores.length)*100;
    }


//this funcion calc the meean score for a record
function mean_score(record)
{
    let result=0;

    result+=record.Memory_score;
    result+=record.Reaction_score;
    result+=record.Verbal_score;
    result+=record.Visual_score;

    return result/4;
}

//this funcion calc the mean score for each record of a vector of records
function mean_scores(records)
{
    let i;
    var mean_scores=[];



    for(i=0;    i<records.length    ;i++)
    {
        mean_scores.push(mean_score(records[i]));
    }

    return mean_scores;
}

var xhr=new XMLHttpRequest();

var records;
var mean_scores;

xhr.addEventListener("load",(e)=>
{
    console.log("listo");
    console.log(e.target.responseText);
    records=JSON.parse(e.target.responseText);

    mean_scores=mean_scores(records);
});



xhr.open('GET',"https://raw.githubusercontent.com/Santiagoponce/Results-Summary/master/data.json",false);
xhr.send();