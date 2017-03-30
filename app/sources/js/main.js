$(function () {

  if ( $('.container').hasClass('create')
    || $('.container').hasClass('update')
  ) {
    new WritePost();
  }

  $('.update .search').on('change', function () {
    var value = $(this).find('option:selected').val();

    if (!value) return;

    console.log('Value has been changed');
    $.ajax({
      url: 'http://localhost:5000/search/' + value,
      dataType: 'json',
      success: function (data) {
        $('[name=_id]').val(data._id);
        $('[name=codeType]').val(data.codeType).attr('selected');
        $('[name=quiz]').val(data.quiz);
        $('[name=exam1]').val(data.exam1);
        $('[name=exam2]').val(data.exam2);
        $('[name=exam3]').val(data.exam3);
      },
      error: function (err) {

      }
    });
  });

});