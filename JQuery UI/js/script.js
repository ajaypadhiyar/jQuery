 $( function() {
     
    $( ".draggable" ).draggable();
  $( ".droppable" ).droppable({
      drop: function( event, ui ) {
        $( this )
          .addClass( "bg" )
        //   .find( "p" )
            .html( "Dropped!" );
      }
    }); 
    $( "#resizable" ).resizable();
    $( "#selectable" ).selectable();
    
    $( "#sortable" ).sortable();
    
    $( "#accordion" ).accordion();
    
     var availableTags = [
      "ActionScript",
      "AppleScript",
      "Asp",
      "BASIC",
      "C",
      "C++",
      "Clojure",
      "COBOL",
      "ColdFusion",
      "Erlang",
      "Fortran",
      "Groovy",
      "Haskell",
      "Java",
      "JavaScript",
      "Lisp",
      "Perl",
      "PHP",
      "Python",
      "Ruby",
      "Scala",
      "Scheme"
    ];
    $( "#tags" ).autocomplete({
      source: availableTags
    });

      $( ".widget input[type=submit], .widget a, .widget button" ).button();
    $( "button, input, a" ).on( "click", function( event ) {
      event.preventDefault();
    } );

    //    $("input").checkboxradio();
      $( "#datepicker" ).datepicker();

        $( "#dialog" ).dialog();

        $( "#menu" ).menu();

         $( "#progressbar" ).progressbar({
      value: 37
    });

     $( "#speed" ).selectmenu();
 
    $( "#files" ).selectmenu();
 
    // $( "#number" )
    //   .selectmenu()
    //   .selectmenu( "menuWidget" )
    //     .addClass( "overflow" );
 
    // $( "#salutation" ).selectmenu();

       $( "#slider" ).slider();
  } );
 
  