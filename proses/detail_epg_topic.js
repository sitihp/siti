$(document).ready(function() {
	$('#loading_panel').show();
	
	var idData = getUrlVars()["id"];
	var serviceURL = "http://www.telkomvision.com/soap/android/";
	$.ajax({
				type : 'GET',
				url : serviceURL + 'detail_epg_topic.php?id='+idData,
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
								var channel = loaddata.channel_name;
								var tanggal = loaddata.tgl_mulai;
								var mulai = loaddata.waktu_mulai.substr(-8);
								var selesai = loaddata.waktu_akhir.substr(-8);
								var judul = loaddata.judul;
								var deskripsi = loaddata.sinopsis;
								$('#channel').text(channel);
								$('#tanggal').text(tanggal);
								$('#mulai').text(mulai);
								$('#selesai').text(selesai);
								$('#judul').text(judul);
								$('#deskripsi').text(deskripsi);
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

