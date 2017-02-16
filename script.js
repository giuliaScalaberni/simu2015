 /* //button insert evento
    $("#btnInsertEv").click(function() {
		/*$.ajax({
			url: 'hello.php',
			success: function (response){//response is value returned from php (for your example it's "bye bye"
			alert(response);
			}
		});
        
    });*/
	$(document).ready(function() {

	// button get evento
    $("#btnGetEv").click(function() {
		$.getJSON("insertEv.php",function(res) {
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
	});