$(document).ready(function(){
    $('#select_all').on('change',function(event){
        if(this.checked){
            $('input:checkbox').each(function(event){
                this.checked = true;
                $('.' + $(this).val()).show();
            });
        }else{
             $('input:checkbox').each(function(event){
                this.checked = false;
                $('.' + $(this).val()).hide();
            });
        }
    });

    $('input:checkbox').change(function(event){
        //uncheck "select all", if one of the listed checkbox item is unchecked
        if(false == $(this).prop('checked')){ //if this item is unchecked
            $("#select_all").prop('checked', false); //change "select all" checked status to false
        }
        //check "select all" if all checkbox items are checked
        if ($('input:checkbox:checked').length == $('input:checkbox').length ){
            $("#select_all")[0].checked = true; //change "select all" checked status to true
        }
    });
});
