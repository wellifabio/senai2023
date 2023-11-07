const urlParams = new URLSearchParams(window.location.search);
let msg = urlParams.get("msg")
if (msg != undefined) {
    alert(msg)
}