const insert = document.getElementById("insert");

window.addEventListener("keydown", function (e) {
  insert.innerHTML = `<div>
    <table>
    <tr>
    <td>Key</td>
    <td>code</td>
    <td>Keycode</td>
    </tr>
    <tr>
    <th>${e.key == " " ? "Space" : e.key}</th>
    <th>${e.code}</th>
    <th>${e.keyCode}</th>
    </tr>
    </table>   
    </div>`;
  console.log(e);
});
