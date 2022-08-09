//#region global variables
//#endregion

//#region doc ready function

$(document).ready(function () {
    /*Signup for NewsLetter*/
    $('#formSubscribe').submit(function () {
        if ($('#EmailID').val()) {

            //$('#message').html('<span class="fa fa-spinner fa-spin"></span> signing up for newsletter ...')
            //$('#message').slideDown();
            Toast('info', 'Loading ...', 'signing up for newsletter ...', 1000);

            $.ajax({
                type: 'POST',
                url: '/subscribers/',
                data: $('#formSubscribe').serialize(),
                //data: {
                //	__RequestVerificationToken: $('input[name="__RequestVerificationToken"]').val(),
                //	email: $('.input-group__field newsletter__input').val()
                //},
                success: function (response) {
                    if (response.success) {
                        $('#EmailID').val('');
                        //$('#message').html('<span class="fa fa-check"></span> ' + response.message)
                        //$('#message').slideDown();
                        Toast('success', 'Success !', response.message, 5000);

                    } else {
                        $('#EmailID').val('');
                        //$('#message').html('<span class="fa fa-warning"></span> ' + response.message)
                        //$('#message').slideDown();
                        Toast('warning', 'Error !', response.message, 5000);
                    }

                    //setTimeout(function () {
                    //    $('#message').slideUp();
                    //}, 3000);
                },
                error: function (er) {
                    Toast('error', 'Failed !', "Oops! Something went wrong. Please try later.", 5000);
                }
            });
        }
        return false;
    });
});
//#endregion

//#region get functions
//#endregion

//#region bind functions
//#endregion

//#region message functions
//#endregion

//#region other functions
//#endregion
