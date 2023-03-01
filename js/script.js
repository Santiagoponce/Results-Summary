
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
function mean(vector)
{
    let result=0;
    for(let i=0;    i<vector.length;i++)
    {
        result+=vector[i];
    }

    return result/vector.length;
}
function calcSegmentedAverage(records)
{
    let i;
    var segAvg={
        memoryAvg:0,
        reactionAvg:0,
        verbalAvg:0,
        visualAvg:0
    };


    for(i=0;    i<records.length;i++)
    {
        segAvg.memoryAvg+=records[i].Memory_score;
        segAvg.reactionAvg+=records[i].Reaction_score;
        segAvg.verbalAvg+=records[i].Verbal_score;
        segAvg.visualAvg+=records[i].Visual_score;
    }
    
    segAvg.memoryAvg/=records.length;
    segAvg.reactionAvg/=records.length;
    segAvg.verbalAvg/=records.length;
    segAvg.visualAvg/=records.length;

    return segAvg;
}

function init_page()
{
    let mean_result=document.querySelector(".score-general__value");
    var listItem=document.querySelectorAll(".score-segmentation__value");

    listItem[0].textContent=segAvg.memoryAvg;
    listItem[1].textContent=segAvg.reactionAvg;
    listItem[2].textContent=segAvg.verbalAvg;
    listItem[3].textContent=segAvg.visualAvg;
 
    mean_result.textContent=Math.round(mean(mean_scores));
}

function display_results()
{

    let mean_result=document.querySelector(".score-general__value");
    var listItem=document.querySelectorAll(".score-segmentation__value");
    let nameUser=document.querySelector(".score-general__tittle");
    let resultMsg=document.querySelector(".score-general__info");

    let result=0;
    let inputs=form.querySelectorAll("input");
    nameUser.textContent=`${inputs[0].value}'s Result`;
    listItem[0].textContent=inputs[1].value;
    listItem[1].textContent=inputs[2].value;
    listItem[2].textContent=inputs[3].value;
    listItem[3].textContent=inputs[4].value;
    result=parseInt(inputs[1].value)+parseInt(inputs[2].value)+parseInt(inputs[3].value)+parseInt(inputs[4].value);
    result/=4;
    mean_result.textContent=Math.round(result);

    resultMsg.textContent= `Your scored higher than ${percentScorePosition(mean_scores,result)}%of the people who taken these tests.`;

}



var xhr=new XMLHttpRequest();
var records;
var mean_scores;
var segAvg;
var callFormButton=document.querySelector(".score-segmentation__button");
var inputForm=document.querySelector(".score-input");
var form=document.querySelector(".score-input");

var submitButton=document.querySelector("#submit-input");

submitButton.addEventListener("click",(e)=>{
    e.preventDefault();
    if((form.checkValidity())==true)
{
    display_results();
    inputForm.classList.toggle("score-input--active");
}

})

callFormButton.addEventListener("click",(e)=>
{
    inputForm.classList.toggle("score-input--active");
});


xhr.addEventListener("load",(e)=>
{
    records=JSON.parse(e.target.responseText);
    mean_scores=mean_scores(records);
    segAvg=calcSegmentedAverage(records);
    init_page();
});




xhr.open('GET',"https://raw.githubusercontent.com/Santiagoponce/Results-Summary/master/data.json",false);
xhr.send();

