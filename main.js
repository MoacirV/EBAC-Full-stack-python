$(document).ready(function () {
  $("form").on("submit", function (e) {
    e.preventDefault();

    const novaTarefa = $("input").val();
    $(`
    <li>
      <button>
        <h2>${novaTarefa}<button class="remove" style="color: red; margin-left: 10px">X</button></h2>
      </button>
    </li>`).appendTo("ul");
    const input = $("input");
    input.val("");
  });

  $("ul").on("click", "button", function () {
    $(this).toggleClass("marcado");
  });

  $("ul").on("click", ".remove", function (e) {
    e.stopPropagation();
    $(this).closest("li").remove();
  })
});
