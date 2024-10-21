$(document).ready(function () {
    $(document).keydown(function(event) {
        var keycode = event.keyCode ? event.keyCode : event.which;
        if (keycode == "27" || keycode == "73") {
          $.post("https://vpz-inventory/close", JSON.stringify({}));
        }
      });

    window.addEventListener("message", function (event) {
        const data = event.data;

        if (data.action === "openInventory") {
            $('body').show();
        } else if (data.action === "closeInventory") {
            $('body').hide();
        }
    });
});
