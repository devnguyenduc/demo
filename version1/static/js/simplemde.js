// Most options demonstrate the non-default behavior
var simplemde = new SimpleMDE({
    element: document.getElementById("create_post_input"),
    autofocus: true,
    autosave: {
      enabled: true,
      uniqueId: "create_post_input",
      delay: 1000,
    },
    previewRender: function (plainText, preview) {
      setTimeout(function () {
        markjax(plainText, preview);
      }, 250);
      return preview.innerHTML;
    },
  });
