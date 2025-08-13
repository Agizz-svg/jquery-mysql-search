$(document).ready(function(){

    $("body").on(" keyup",".cari",function(){
        var cari = $(this).val();
        var data = "cari="+cari;
        // alert(cari);
        $.ajax({
            method:'POST',
            url:'ajax_cari.php',
            data:data,
            success:function(result){
                // alert(result);
                $(".tableku").html(result);
            }
        });
    });
});