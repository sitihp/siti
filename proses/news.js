$(document).ready(function() {

$('#loading_panel').show();
get_news();

function get_news(){
	var serviceURL = "http://www.telkomvision.com/soap/android/";
	var SistemPakar;
	$.ajax({
				type : 'GET',
				url : serviceURL + 'news.php',
				async: true,
				beforeSend: function(x) {
					if(x && x.overrideMimeType) {
      					 x.overrideMimeType("application/j-son;charset=UTF-8");
      				}
				},
				dataType : 'json',
				success : function(data){
						SistemPakar = data.items;
						if(SistemPakar==''){
							$('#loading_panel').hide();
							$('#empty').show();
						}else{
							$('#loading_panel').hide();
							$('#tampilData').show();
							$.each(SistemPakar, function(index, loaddata) {
								var data = loaddata.id;
								var image = loaddata.img;
								var tanggal = loaddata.tanggal;
								var strExplode = tanggal.split("-");
								var strJoinExplode = strExplode[2]+ '-' +strExplode[1]+ '-' +strExplode[0];
							$('#sispakList').append(
								'<li><a href="detail_news.html?id=' + loaddata.id + '" data-ajax="false">' +
								'<img src="logo/'+image+'.png"/>'+
								'<h4>' + loaddata.judul + '</h4>' +
								'<p>' + loaddata.isi +'</p>' +
								'<p>' + strJoinExplode + '</p>');
							});
							$('#sispakList').listview('refresh');
						}
				},
				error: function(jqXHR, exception) {
					$('#loading_panel').hide();
					$('#conn_failed').show();
				}
		});	
}
	

}); //Tutup Document Ready









