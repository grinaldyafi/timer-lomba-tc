$(document).ready(function () {
    let time = 180000;
    let timeNow;

    $('#pause-div').hide();

    $('#play-button').click(function () {
        $('#play-div').hide();
        $('#pause-div').show();

        if (time === 0) {
            $('#pause-div').hide();
            $('#play-div').show();

            clearInterval(timeNow);


            time = 180000;
            $('#time-holder').text('00:00:00');
        } else {

            timeNow = setInterval(() => {
                time = time - 1000;
                let timeString = '';

                // milisec to sec
                let timeStandard = time / 1000;

                // konversi 
                let timeHours = Math.floor(timeStandard / 3600);
                let timeMinutes = Math.floor((timeStandard % 3600) / 60);
                let timeSeconds = Math.floor(timeStandard % 3600 % 60);

                if (timeHours < 10) {
                    timeString = timeString + '0';
                }

                timeString = timeString + timeHours.toString() + ':';
                if (timeMinutes < 10) {
                    timeString = timeString + '0';
                }
                timeString = timeString + timeMinutes.toString() + ':';
                if (timeSeconds < 10) {
                    timeString = timeString + '0';
                }
                timeString = timeString + timeSeconds.toString();

                $('#time-holder').text(timeString);

                if (time === 0) {
                    $('#pause-div').hide();
                    $('#play-div').show();

                    clearInterval(timeNow);


                    time = 180000;
                    
                  
                    $('#time-holder').text('Waktu Habis!');
                    
                }

            }, 1000);

            // timeNow = setInterval(() => {
            //   time = time - 1000;
            //   console.log(time);
            // }, 1000);

            // $('#time-holder').text('hello world')
        }


    });

    $('#pause-div').click(function () {
        $('#pause-div').hide();
        $('#play-div').show();

        clearInterval(timeNow);
    });

    // show reset modal
    $('#reset-modal-button').click(function () {
        $('#reset-modal').modal('toggle')
    });

    //reset timer

    $('#reset-timer').click(function () {
        $('#play-div').show();
        $('#pause-div').hide();

        clearInterval(timeNow);
        $('#time-holder').text('00:00:00');
        time = 180000;
        $('#reset-modal').modal('hide');
    });

    //show edit modal
    $('#edit-modal-button').click(function () {
        $('#edit-timer-modal').modal('toggle');
    });

    $('#edit-timer').click(function () {
        $('#play-div').show();
        $('#pause-div').hide();
        $('#edit-timer-modal').modal('hide');

        let timeInput = '';

        clearInterval(timeNow);

        let inputHours = parseInt($('#edit-timer-hour').val());
        let inputMinutes = parseInt($('#edit-timer-minute').val());
        let inputSeconds = parseInt($('#edit-timer-second').val());

        if(inputHours < 10){
            timeInput = timeInput + "0";
        }
        timeInput = timeInput + $('#edit-timer-hour').val() + ":";
        if(inputMinutes < 10){
            timeInput = timeInput + "0";
        }
        timeInput = timeInput + $('#edit-timer-minute').val() + ":";
        if(inputSeconds < 10){
            timeInput = timeInput + "0";
        }
        timeInput = timeInput + $('#edit-timer-second').val();

        $('#time-holder').text(timeInput);

        time = ((inputHours * 3600) + (inputMinutes * 60) + inputSeconds) * 1000;

        $('#edit-timer-hour').val("");
        $('#edit-timer-minute').val("");
        $('#edit-timer-second').val("");
    });

    $('#5-button').click(function(){
        $('#play-div').show();
        $('#pause-div').hide();

        let newTime = '';

        clearInterval(timeNow);

        let newHours = 0;
        let newMinutes = 5;
        let newSeconds = 0;

        if(newHours < 10){
            newTime = newTime + "0";
        }
        newTime = newTime + newHours + ":";
        if(newMinutes < 10){
            newTime = newTime + "0";
        }
        newTime = newTime + newMinutes + ":";
        if(newSeconds < 10){
            newTime = newTime + "0";
        }
        newTime = newTime + newSeconds;

        $('#time-holder').text(newTime);

        time = ((newHours * 3600) + (newMinutes * 60) + newSeconds) * 1000;


    })
    $('#10-button').click(function(){
        $('#play-div').show();
        $('#pause-div').hide();

        let newTime = '';

        clearInterval(timeNow);

        let newHours = 0;
        let newMinutes = 10;
        let newSeconds = 0;

        if(newHours < 10){
            newTime = newTime + "0";
        }
        newTime = newTime + newHours + ":";
        if(newMinutes < 10){
            newTime = newTime + "0";
        }
        newTime = newTime + newMinutes + ":";
        if(newSeconds < 10){
            newTime = newTime + "0";
        }
        newTime = newTime + newSeconds;

        $('#time-holder').text(newTime);

        time = ((newHours * 3600) + (newMinutes * 60) + newSeconds) * 1000;


    })


    $('#15-detik-button').click(function(){
        $('#play-div').show();
        $('#pause-div').hide();

        let newTime = '';

        clearInterval(timeNow);

        let newHours = 0;
        let newMinutes = 0;
        let newSeconds = 15;

        if(newHours < 10){
            newTime = newTime + "0";
        }
        newTime = newTime + newHours + ":";
        if(newMinutes < 10){
            newTime = newTime + "0";
        }
        newTime = newTime + newMinutes + ":";
        if(newSeconds < 10){
            newTime = newTime + "0";
        }
        newTime = newTime + newSeconds;

        $('#time-holder').text(newTime);

        time = ((newHours * 3600) + (newMinutes * 60) + newSeconds) * 1000;


    })

    $('#20-button').click(function(){
        $('#play-div').show();
        $('#pause-div').hide();

        let newTime = '';

        clearInterval(timeNow);

        let newHours = 0;
        let newMinutes = 20;
        let newSeconds = 0;

        if(newHours < 10){
            newTime = newTime + "0";
        }
        newTime = newTime + newHours + ":";
        if(newMinutes < 10){
            newTime = newTime + "0";
        }
        newTime = newTime + newMinutes + ":";
        if(newSeconds < 10){
            newTime = newTime + "0";
        }
        newTime = newTime + newSeconds;

        $('#time-holder').text(newTime);

        time = ((newHours * 3600) + (newMinutes * 60) + newSeconds) * 1000;


    })
    $('#15-menit-button').click(function(){
        $('#play-div').show();
        $('#pause-div').hide();

        let newTime = '';

        clearInterval(timeNow);

        let newHours = 0;
        let newMinutes = 15;
        let newSeconds = 0;

        if(newHours < 10){
            newTime = newTime + "0";
        }
        newTime = newTime + newHours + ":";
        if(newMinutes < 10){
            newTime = newTime + "0";
        }
        newTime = newTime + newMinutes + ":";
        if(newSeconds < 10){
            newTime = newTime + "0";
        }
        newTime = newTime + newSeconds;

        $('#time-holder').text(newTime);

        time = ((newHours * 3600) + (newMinutes * 60) + newSeconds) * 1000;


    })
    $('#2-menit-button').click(function(){
        $('#play-div').show();
        $('#pause-div').hide();

        let newTime = '';

        clearInterval(timeNow);

        let newHours = 0;
        let newMinutes = 3;
        let newSeconds = 0;

        if(newHours < 10){
            newTime = newTime + "0";
        }
        newTime = newTime + newHours + ":";
        if(newMinutes < 10){
            newTime = newTime + "0";
        }
        newTime = newTime + newMinutes + ":";
        if(newSeconds < 10){
            newTime = newTime + "0";
        }
        newTime = newTime + newSeconds;

        $('#time-holder').text(newTime);

        time = ((newHours * 3600) + (newMinutes * 60) + newSeconds) * 1000;


    })
    $('#1-menit-button').click(function(){
        $('#play-div').show();
        $('#pause-div').hide();

        let newTime = '';

        clearInterval(timeNow);

        let newHours = 0;
        let newMinutes = 1;
        let newSeconds = 0;

        if(newHours < 10){
            newTime = newTime + "0";
        }
        newTime = newTime + newHours + ":";
        if(newMinutes < 10){
            newTime = newTime + "0";
        }
        newTime = newTime + newMinutes + ":";
        if(newSeconds < 10){
            newTime = newTime + "0";
        }
        newTime = newTime + newSeconds;

        $('#time-holder').text(newTime);

        time = ((newHours * 3600) + (newMinutes * 60) + newSeconds) * 1000;


    })
    $('#30-detik-button').click(function(){
        $('#play-div').show();
        $('#pause-div').hide();

        let newTime = '';

        clearInterval(timeNow);

        let newHours = 0;
        let newMinutes = 0;
        let newSeconds = 30;

        if(newHours < 10){
            newTime = newTime + "0";
        }
        newTime = newTime + newHours + ":";
        if(newMinutes < 10){
            newTime = newTime + "0";
        }
        newTime = newTime + newMinutes + ":";
        if(newSeconds < 10){
            newTime = newTime + "0";
        }
        newTime = newTime + newSeconds;

        $('#time-holder').text(newTime);

        time = ((newHours * 3600) + (newMinutes * 60) + newSeconds) * 1000;


    })
    $('#20-detik-button').click(function(){
        $('#play-div').show();
        $('#pause-div').hide();

        let newTime = '';

        clearInterval(timeNow);

        let newHours = 0;
        let newMinutes = 0;
        let newSeconds = 20;

        if(newHours < 10){
            newTime = newTime + "0";
        }
        newTime = newTime + newHours + ":";
        if(newMinutes < 10){
            newTime = newTime + "0";
        }
        newTime = newTime + newMinutes + ":";
        if(newSeconds < 10){
            newTime = newTime + "0";
        }
        newTime = newTime + newSeconds;

        $('#time-holder').text(newTime);

        time = ((newHours * 3600) + (newMinutes * 60) + newSeconds) * 1000;


    })
    $('#10-detik-button').click(function(){
        $('#play-div').show();
        $('#pause-div').hide();

        let newTime = '';

        clearInterval(timeNow);

        let newHours = 0;
        let newMinutes = 0;
        let newSeconds = 10;

        if(newHours < 10){
            newTime = newTime + "0";
        }
        newTime = newTime + newHours + ":";
        if(newMinutes < 10){
            newTime = newTime + "0";
        }
        newTime = newTime + newMinutes + ":";
        if(newSeconds < 10){
            newTime = newTime + "0";
        }
        newTime = newTime + newSeconds;

        $('#time-holder').text(newTime);

        time = ((newHours * 3600) + (newMinutes * 60) + newSeconds) * 1000;


    })
    $('#5-detik-button').click(function(){
        $('#play-div').show();
        $('#pause-div').hide();

        let newTime = '';

        clearInterval(timeNow);

        let newHours = 0;
        let newMinutes = 0;
        let newSeconds = 5;

        if(newHours < 10){
            newTime = newTime + "0";
        }
        newTime = newTime + newHours + ":";
        if(newMinutes < 10){
            newTime = newTime + "0";
        }
        newTime = newTime + newMinutes + ":";
        if(newSeconds < 10){
            newTime = newTime + "0";
        }
        newTime = newTime + newSeconds;

        $('#time-holder').text(newTime);

        time = ((newHours * 3600) + (newMinutes * 60) + newSeconds) * 1000;


    })
});


