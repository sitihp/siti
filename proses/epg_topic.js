$(document).ready(function() {
	
	$("#channel").hide();
	
		$("#buka_web").click(function() {
			window.open('http://www.telkomvision.com', '_blank', 'location=yes');
		});
		$("#buka_fb").click(function() {
			window.open('http://www.facebook.com/pages/TELKOMVision/59163757459', '_blank', 'location=yes');
		});
		$("#buka_twitter").click(function() {
			window.open('http://twitter.com/telkomvision', '_blank', 'location=yes');
		});
		$("#buka_youtube").click(function() {
			window.open('http://www.youtube.com/user/TelkomVisionTV', '_blank', 'location=yes');
		});
		
		function AddNull(){
			var Null = {
				PILIH		: '- PILIH -'
			};
			$("#data_channel").empty();
			$.each(Null, function(key, value) {
				$('#data_channel').append($("<option/>", {
					value: key,
					text: value
				}));
			});	
			$("#data_channel" ).selectmenu("refresh");
			$("#data_channel").prop('selectedIndex', 0);
		}
		
		function AddFilm(){
			var Film = {
				CELE		: 'CELESTIAL MOVIES',
				CMX			: 'CINEMAX',
				FFM			: 'FOX FAMILY MOVIES',
				FMP			: 'FOX MOVIES PREMIUM',
				HBO			: 'HBO',
				HBOS		: 'HBO SIGNATURE',
				HBH			: 'HBO HITS',
				HBF			: 'HBO FAMILY',
				MGM			: 'MGM',
				THR			: 'THRILL'
			};
			$("#data_channel").empty();
			$.each(Film, function(key, value) {
				$('#data_channel').append($("<option/>", {
					value: key,
					text: value
				}));
			});	
			$("#data_channel" ).selectmenu("refresh");
			$("#data_channel").prop('selectedIndex', 0);
		}
		
		function AddOlahraga(){
			var Olahraga = {
				ARE			: 'ARENA',
				FSP			: 'FIGHT SPORT',
				EUS			: 'EURO SPORT',
				GT1			: 'GOAL TV 1',
				GT2			: 'GOAL TV 2',
				SSP			: 'STAR SPORT'
			};
			$("#data_channel").empty();
			$.each(Olahraga, function(key, value) {
				$('#data_channel').append($("<option/>", {
					value: key,
					text: value
				}));
			});	
			$("#data_channel" ).selectmenu("refresh");
			$("#data_channel").prop('selectedIndex', 0);
		}
		
		function AddHiburan(){
			var Hiburan = {
				AFC         : 'ASIAN FOOD CHANNEL',
				ALEG		: 'ALEGRO',
				AXN			: 'AXN CHANNEL',
				ANI			: 'ANIMAX',
				BETV		: 'beTV',
				CHNV		: 'CHANNEL [V]',
				DIVA        : 'DIVA UNIVERSAL',
				DRT			: 'DISCOVERY TURBO',
				E           : 'E! ENTERTAIMENT',
				FOX			: 'FOX',
				FOXC		: 'FOX CRIME',
				FTV			: 'FASHION TV',
				FX			: 'FX',
				KBS         : 'KBS WORD',
				KIX         : 'KIX',
				MTVA        : 'MTV ASIA',
				NGA		    : 'NAT GEO ADVENTURE',
				NHP         : 'NHK WORLD PREMIUM',
				OUT         : 'OUTDOOR CHANNEL',
				ONE         : 'SET ONE',
				STW		    : 'STAR WORLD',
				SYFY        : 'SYFY',
				SET			: 'SONY ENTERTAIMENT',
				UNI         : 'UNIVERSAL',
				TLC         : 'TRAVEL LIVING CHANNEL'
			};
			$("#data_channel").empty();
			$.each(Hiburan, function(key, value) {
				$('#data_channel').append($("<option/>", {
					value: key,
					text: value
				}));
			});	
			$("#data_channel" ).selectmenu("refresh");
			$("#data_channel").prop('selectedIndex', 0);
		}
		
		function AddPendidikan(){
			var Pendidikan = {
				APL			: 'ANIMAL PLANET',
				BIO			: 'BIOGRAPHY CHANNEL',
				DISC		: 'DISCOVERY CHANNEL',
				HIS			: 'HISTORY CHANNEL',
				NGW		    : 'NAT GEO WILD',
				NGC			: 'NAT GEO CHANNEL',
				QUR		    : 'QURAN TAZKIAH',
				SCI			: 'DISC. SCIENCE',
				TVE		    : 'TV EDUKASI'
			};
			$("#data_channel").empty();
			$.each(Pendidikan, function(key, value) {
				$('#data_channel').append($("<option/>", {
					value: key,
					text: value
				}));
			});	
			$("#data_channel" ).selectmenu("refresh");
			$("#data_channel").prop('selectedIndex', 0);
		}
		
		function AddAnak(){
			var Anak = {
				AND			: 'ANANDA CHANNEL',
				CAR			: 'CARTOON NETWORK',
				DI			: 'DISNEY CHANNEL',
				DIJU		: 'DISNEY JUNIOR',
				JIM			: 'JIM JAM',
				NCK			: 'NICKLEODEON',
				NCJ			: 'NICK JR'
			};
			$("#data_channel").empty();
			$.each(Anak, function(key, value) {
				$('#data_channel').append($("<option/>", {
					value: key,
					text: value
				}));
			});	
			$("#data_channel" ).selectmenu("refresh");
			$("#data_channel").prop('selectedIndex', 0);
		}
		
		function AddBerita(){
			var Berita = {
				ALZA		: 'AL JAZEERA INT',
				AUS		    : 'AUSTRALIA NETWORK',
				BBC			: 'BBC WORLD NEWS',
				BLO			: 'BLOOMBERG',
				CNN		    : 'CNN',
				CNBC		: 'CNBC ASIA',
				FRC			: 'FRANCE24',
				DWT			: 'DWTV ASIA+'
			};
			$("#data_channel").empty();
			$.each(Berita, function(key, value) {
				$('#data_channel').append($("<option/>", {
					value: key,
					text: value
				}));
			});	
			$("#data_channel" ).selectmenu("refresh");
			$("#data_channel").prop('selectedIndex', 0);
		}
		
		function AddTvLokal(){
			var TvLokal = {
				ALIF		: 'ALIF TV',
				ANTV		: 'ANTV',
				B			: 'B CHANNEL',
				BST			: 'BERITA SATU',
				GLO			: 'GLOBAL TV',
				IDS			: 'INDOSIAR',
				KOM			: 'KOMPAS TV',
				MET			: 'METRO TV',
				MNC			: 'MNCTV',
				RCTI		: 'RCTI',
				SCTV		: 'SCTV',
				TR7			: 'TRANS 7',
				TRTV		: 'TRANS TV',
				TV1		    : 'TV ONE',
				TVRI		: 'TVRI',
			};
			$("#data_channel").empty();
			$.each(TvLokal, function(key, value) {
				$('#data_channel').append($("<option/>", {
					value: key,
					text: value
				}));
			});	
			$("#data_channel" ).selectmenu("refresh");
			$("#data_channel").prop('selectedIndex', 0);
		}	

		$("#kategori").change(function(){
			if($("#kategori").val()=='PILIH'){
				$("#data_channel").empty();
				$("#data_channel" ).selectmenu("refresh");
				AddNull();
				$("#channel").hide();
				$("#tanggal").hide();
			}else{
				$('#required').hide();
				$("#channel").show();
				$("#tanggal").show();
				$("#data_channel").removeAttr('disabled');
				if($("#kategori").val()=='FILM'){
					AddFilm();
				}else if($("#kategori").val()=='OLAHRAGA'){
					AddOlahraga();
				}else if($("#kategori").val()=='HIBURAN'){
					AddHiburan();
				}else if($("#kategori").val()=='PENDIDIKAN'){
					AddPendidikan();
				}else if($("#kategori").val()=='ANAK'){
					AddAnak();
				}else if($("#kategori").val()=='BERITA'){
					AddBerita();
				}else if($("#kategori").val()=='TVLOKAL'){
					AddTvLokal();
				}
			}
		});
		
			
		$("#proses").click( function(e){
			e.preventDefault();
			var strAwal		= $("#awal").val();
			var strAkhir	= $("#akhir").val();
			var strTopic	= $("#judul").val();
			if(strAwal=='PILIH'){
				$('#required').show();
			}else if(strAkhir=='PILIH'){
				$('#required').show();
			}else if(strTopic==''){
				$('#required').show();
			}else{
				$('#form').hide();
				$('#justinfo').hide();
				$('#required').hide();
				$('#loading_panel').show();
				epg_channel();
			}
		});
	
	
var myDates = [];
// Loop through for 30 times here
for (var i = 0; i < 7; i++) {
    var myDate = new Date()
    var fullDate = new Date(myDate.setDate(myDate.getDate() + i));
	var twoDigitDates = ('0' + fullDate.getDate()).slice(-2);
    var twoDigitMonth = ((fullDate.getMonth().length + 1) === 1) ? (fullDate.getMonth() + 1) : '0' + (fullDate.getMonth() + 1);
    var currentDate =  fullDate.getFullYear() + "-" + twoDigitMonth + "-" + twoDigitDates;
    myDates.push(currentDate);
}
// Loop through the date array we have created
$.each(myDates, function (key, value) {
    var strValue = value.split("-");
	var strJoinValue = strValue[2]+ '-' +strValue[1]+ '-' +strValue[0];
    $('#awal').append($("<option/>", {
		value: value,
		text: strJoinValue
	}));
	$('#akhir').append($("<option/>", {
		value: value,
		text: strJoinValue
	}));
});
		

function epg_channel(){
	var serviceURL = "http://www.telkomvision.com/soap/android/";
	var SistemPakar;
	var strAwal		= $("#awal").val();
	var strAkhir	= $("#akhir").val();
	var strTopic	= $("#judul").val();
	var strChannel	= $("#data_channel").val();
	$.ajax({
				type : 'GET',
				url : serviceURL + 'soap_epg_topic.php',
				async: true,
				data: {
					awal: strAwal,
					akhir: strAkhir,
					judul: strTopic,
					channel: strChannel
				},
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
									var data = loaddata.channel_code;
									var tanggal = loaddata.tanggal;
									var mulai = loaddata.waktu_mulai.substr(-9);
									var selesai = loaddata.waktu_akhir.substr(-9);
									var strLow = data.toLowerCase();
							$('#sispakList').append(
								'<li><a href="detail_epg_topic.html?id=' + loaddata.id + '" data-ajax="false">' +
								'<img src="logo/'+strLow+'.jpg"/>'+
								'<h4>' + loaddata.judul + '</h4>' +
								'<p>' + loaddata.tgl_mulai + ' | ' + mulai + ' - ' + selesai +'</p>' +
								'<p>' + loaddata.sinopsis + '</p>');
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









