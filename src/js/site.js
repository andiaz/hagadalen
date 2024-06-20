$('.setLanguageButton').on('click', function () {

    $this = $(this);
    var language = $this.data("language");

    $.cookie("Language", language, {path:"/"});
    document.location.reload();
    return false;
});

$('[data-opensitem]').on('click', function () {
    var $this = $(this);
    var value = $this.data("opensitem");

    $('[data-opensitem]').removeClass('active');
    $this.toggleClass('active');

    $('.faqTitle').text($this.text());

    $('[data-item]').hide();
    $('[data-item=' + value + ']').fadeIn();
});

$().ready(function () {
    $('[data-item]').hide();
    $('[data-opensitem]').first().click();
});