$(document)
  .on('change', '.option-engraving-font', function () {
    const isEngraving = $(this).val() !== "No Engraving"

    $('.engraving-wrapper')
      .toggleClass('hide', !isEngraving)
      .find('input').prop('disabled', !isEngraving)
  })
  // https://www.the-art-of-web.com/html/input-field-uppercase/
  .on('input', '#properties_engraving', function () {
    const start = this.selectionStart;
    const end = this.selectionEnd;
    this.value = this.value.toUpperCase();
    this.setSelectionRange(start, end);
  })
