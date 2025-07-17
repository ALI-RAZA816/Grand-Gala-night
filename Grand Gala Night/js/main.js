$(document).ready(function(){

    function timefun(){

        //function date
        let Eventdate = new Date('December 15, 2025');
        let systemDate = new Date();
        let distaceDate = Eventdate - systemDate;

        // Time calculations
        const days = Math.floor(distaceDate / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distaceDate % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distaceDate % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distaceDate % (1000 * 60)) / 1000);

        $('#days').text(days.toString().padStart(2,'0'));
        $('#hours').text(hours.toString().padStart(2,'0'));
        $('#minutes').text(minutes.toString().padStart(2,'0'));
        $('#seconds').text(seconds.toString().padStart(2,'0'));

        if( distaceDate < 0){
            $('.event-date').text("Event Started");
        }
    }
    setInterval(timefun,1000);
});