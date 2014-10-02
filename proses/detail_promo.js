$(document).ready(function() {
	$('#loading_panel').show();
	
	var idData = getUrlVars()["id"];
	var serviceURL = "http://www.telkomvision.com/soap/android/";
	$.ajax({
				type : 'GET',
				url : serviceURL + 'promo_detail.php?id='+idData,
				async: true,
				beforeSend: function(x) {
					if(x && x.overrideMimeType) {
      					 x.overrideMimeType("application/j-son;charset=UTF-8");
      				}
				},
				dataType : 'json',
				success : function(data){
						var GetData = data.items;
						if(GetData==''){
							$('#loading_panel').hide();
							$('#not_found').show();
						}else{
							
							$('#loading_panel').hide();
							$('#allData').show();
							
							$.each(GetData, function(index, loaddata) {
								var judul = loaddata.judul;
								var isi = loaddata.isi;
								var tanggal = loaddata.tanggal;
								var strExplode = tanggal.split("-");
								var strJoinExplode = strExplode[2]+ '-' +strExplode[1]+ '-' +strExplode[0];
								$('#judul').text(judul);
								$('#isi').text(isi);
								$('#tanggal').text(strJoinExplode);
							});
						}
				},
				error : function(){
					$('#loading_panel').hide();
					$('#conn_failed').show();
				}
		});
});

function getUrlVars() {
		var vars = [], hash;
		var hashes = window.location.href.slice(window.location.href.indexOf('?') + 1).split('&');
		for(var i = 0; i < hashes.length; i++)
		{
			hash = hashes[i].split('=');
			vars.push(hash[0]);
			vars[hash[0]] = hash[1];
		}
		return vars;
	}

