	$(document).ready(function() {
		$( function() {
    $( "#datepicker" ).datepicker();
	$( "#datepicker" ).datepicker( "option", "dateFormat", "yy-mm-dd");

  } );

	// button get evento
    $("#btnGetEv").click(function() {
		$.getJSON("getEv.php",function(res) {
            if (res) {
                var table=$('<table class="table"><tbody></tbody></table>');
                table.append('<thead><tr><th>Titolo</th><th>Data</th><th>Categoria</th><th>nickname</th><th>Provincia</th></tr></thead>');
                $.each(res,function(k,v){
                    var row=$('<tr><td>'+v['titolo']+'</td><td>'+v['data']+'</td><td>'+v['idCat']+'</td><td>'+v['nickname']+'</td><td>'+v['provincia']+'</td></tr>');
                    table.append(row);
                });
                $("#contentEventi").append(table);
                $("#btnGetEv").hide();
            }
        });
		
    });
	// button insert evento
    $("#btnInsertEv").click(function() {
	
				var ajaxSubmit = function(formEl) {
                // fetch where we want to submit the form to
                var url = $(formEl).attr('action');

                // fetch the data for the form
                var data = $(formEl).serializeArray();

                // setup the ajax request
                $.ajax({
                    url: 'insertEv.php',
                    data: data,
                    dataType: 'json',
                    success: function() {
                        
                    }
                });

                // return false so the form does not actually
                // submit to the page
                return false;
            
            }
        });
		
		// button login
    $("#btnLogin").click(function() {
	
				var ajaxSubmit = function(formEl) {
                // fetch where we want to submit the form to
                var url = $(formEl).attr('action');

                // fetch the data for the form
                var data = $(formEl).serializeArray();

                // setup the ajax request
                $.ajax({
                    url: 'login.php',
                    data: data,
                    dataType: 'json',
                    success: function(response) {
						alert(response[0]);
						
                    }
                });

                // return false so the form does not actually
                // submit to the page
                return false;
            
            }
        });
		
    });