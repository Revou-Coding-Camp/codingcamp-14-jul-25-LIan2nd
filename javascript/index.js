$(document).ready(function () {
  $('form').submit(function (e) {
    e.preventDefault();

    // Ambil nilai dari form
    const name = $('#name').val();
    const ttl = $('#ttl').val();
    const jk = $('input[name="jk"]:checked').val();
    const pesan = $('#pesan').val();

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
  });

  // live update nama di hero
  $('#name').on('input', function () {
    const name = $(this).val();
    $('#person').text(name || 'Anonymous');
  });
});