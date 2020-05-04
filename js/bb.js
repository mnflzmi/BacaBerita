$.getJSON('js/baca-berita.json', function (data) {
	let menu = data.menu;
	$.each(menu, function (i, data) {
		$('#daftar-menu').append('<div class="col-md-4 col-sm-4 col-xs-12" id="daftar-menu"><div class="single-blog"><div class="single-blog-img"><img src="img/blog/' + data.gambar + '"</a> </div> <div class="blog-meta"><span class="date-type"><i class="fa fa-calendar"></i>' + data.tanggal + '</span></div><div class="blog-text"><h4>' + data.judul + '</h4><p><strong>BacaBerita, Jakarta</strong>' + data.deskripsi + '</p> </div><span><a href="' + data.button + '"class="ready-btn">Read more</a></span>');
	});
});