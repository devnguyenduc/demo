// Most options demonstrate the non-default behavior
var simplemde = new SimpleMDE({
    element: document.getElementById("text_area_content"),
    autofocus: true,
    autosave: {
		enabled: true,
		delay: 1000,
	},
    previewRender: function (plainText, preview) {
        setTimeout(function () {
            markjax(plainText, preview);
        }, 250);
        preview.style.background= "white";
        return preview.innerHTML;
    },
    toolbar: false,
});

simplemde.togglePreview();