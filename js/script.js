
//This function return the percent of elements in the array that are below of the actual score
function percentScorePosition(scores,actual_score)
    {
        let i;

        scores.sort();

    for(i=0; (i<scores.length)&& actual_score > scores[i];i++)
        {}

        return (i/scores.length)*100;
    }

function mean(record)
{
    
}


var xhr=new XMLHttpRequest();

var records;

xhr.addEventListener("load",(e)=>
{
    console.log("listo");
    console.log(e.target.responseText);

    records=JSON.parse(e.target.responseText);
});







xhr.open('GET',"https://raw.githubusercontent.com/Santiagoponce/Resuts-Summary/5a3fb474fc4fe3d6784d33294d8e1b23df73785f/data.json",false);
xhr.send();