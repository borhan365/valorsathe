
// This is for file upolad Preview 
$(document).ready( function() {
    $(document).on('change', '.btn-file :file', function() {
    var input = $(this),
        label = input.val().replace(/\\/g, '/').replace(/.*\//, '');
    input.trigger('fileselect', [label]);
    });

    $('.btn-file :file').on('fileselect', function(event, label) {
        
        var input = $(this).parents('.input-group').find(':text'),
            log = label;
        
        if( input.length ) {
            input.val(log);
        } else {
            if( log ) alert(log);
        }
    
    });
    function readURL(input) {
        if (input.files && input.files[0]) {
            var reader = new FileReader();
            
            reader.onload = function (e) {
                $('#img-upload').attr('src', e.target.result);
            }
            
            reader.readAsDataURL(input.files[0]);
        }
    }

    $("#imgInp").change(function(){
        readURL(this);
    }); 	
});
// End of file upolad image preview

// Submit form validation
    function validationsubmit(){
        var newsTitle = document.getElementById('newsTitle');
        var newsImg = document.getElementById('newsImg');
        var newsDescription = document.getElementById('newsDescription');

        // var wronginput = document.getElementById('wronginput');

        if(newsTitle.value == ""){
            document.getElementById('wronginput').style.display ="block";
            
        }
    }
// End of Submit form validation