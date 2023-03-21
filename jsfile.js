$(document).ready(function() {
    var startDate;
    var endDate;
    var difference;
    var adults = 1;
    var cost = 0;

    $("#adults").change(
        function(){
            adults = $("adults").val();
            cost = 150*adults*difference;
            $("#cost").val(cost);
        }
    )

    $("#checkin").change(
        function(){
            startDate = moment($("#checkin").val());
            difference = endDate.diff(startDate, 'days');
            $("#time").val(difference);
            cost = 150*adults*difference;
            $("#cost").val(cost);
        }
     );
    
     $("#checkout").change(
        function(){
            endDate = moment($("#checkout").val());
            difference = endDate.diff(startDate, 'days');
            $("#time").val(difference);
            cost = 150*adults*difference;
            $("#cost").val(cost);
        }
     );
     $("#submit").click(
        function(){
            toaster["success"]("The form was successfully submitted!");
        }
     )
 });


 

 
 
 
