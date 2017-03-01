	$(document).ready(function() {
		$( function() {
    $( "#datepicker" ).datepicker();
	$( "#datepicker" ).datepicker( "option", "dateFormat", "yy-mm-dd");

  } );

	// button get evento
    $("#btnGetEv").click(function() {
		$.getJSON("getEv.php",function(res) {
            if (res) {
                var table=$('<table id="tableEv" class="table"><tbody></tbody></table>');
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
	
		$.ajax({
        type: 'POST',
        url: "insertEv.php",
        dataType: "json",
        data:$("#formEv").serialize(),
        //success: function(data){
            //$("#insertEv").append(data);
			 success : function(result) {
                    // you can see the result from the console
                    // tab of the developer tools
                    console.log(result);
                },
                error: function(xhr, resp, text) {
                    console.log(xhr, resp, text);
                
                }
        
    });   
       
		
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
					error: function() {
						alert('<p>An error has occurred</p>');
					},
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