$(document).ready(function () {
  $('form').submit(function (e) {
    e.preventDefault();

    // Ambil nilai dari form
    const name = $('#name').val();
    const ttl = $('#ttl').val();
    const jk = $('input[name="jk"]:checked').val();
    const pesan = $('#pesan').val();
    const sender = $('#sender');

    // Validasi form
    if (!name || !ttl || !jk || !pesan) {
      alert('Harap lengkapi semua field!');
      return;
    }

    $('#person').text(name);

    $('#inserted-name').text(name);
    $('#inserted-ttl').text(ttl);
    $('#inserted-jk').text(jk);
    $('#inserted-pesan').text(pesan);
    const now = new Date();
    $('#curr-time').text(now.toLocaleString());

    this.reset();
    $('html, body').animate({
      'scrollTop': sender.offset().top
    }, 800, 'swing', function () {
      window.location.hash = "sender";
    });
  });

  // live update nama di hero
  $('#name').on('input', function () {
    const name = $(this).val();
    $('#person').text(name || 'Anonymous');
  });

  // Smooth scroll for
  $('a[href^="#"]').on('click', function (e) {
    e.preventDefault();

    var target = this.hash;
    var $target = $(target);

    $('html, body').animate({
      'scrollTop': $target.offset().top
    }, 800, 'swing', function () {
      window.location.hash = target;
    });
  });
});