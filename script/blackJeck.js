$(document).ready(function () {

    var suits=["heart", "club", "diamond", "spade"];
    var valueCard=["2","3","4","5","6","7","8","9","10","J","Q","K","A"];
    var cards=Array();

    for(i=0; i<suits.length; i++)
    {
        for(j=0; j<valueCard.length; j++)
        {
            cards=valueCard[j]+" "+suits[i];
            console.log(valueCard[j]+" "+suits[i]);
        }


    }

});

function Card(name, suite, value) {
    this.name=name;
    this.suite=suite;
    this.value=value;
}
