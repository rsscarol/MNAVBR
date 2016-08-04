  $('input:checkbox').on('change', function (event) {
      if ($(this).is(':checked')) {
          $('.' + $(this).val()).show();
      } else {
          $('.' + $(this).val()).hide();
      }
  });
