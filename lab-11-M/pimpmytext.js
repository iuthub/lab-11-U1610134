
function fontSize() {
    $("mytext").style.fontSize = "24pt";
}
file_get_contenfile_get_contentsts
function textStyle() {
    if ($("pimp").checked) {
        $("mytext").style.fontWeight = "bold";
        $("mytext").style.textDecoration = "underline blink";
        $("mytext").style.color = "green";
    } else {
        $("mytext").style.fontWeight = "normal";
        $("mytext").style.textDecoration = "none";
        $("mytext").style.color = "black";
    }
}

function snoopify() {
    $("mytext").value = $("mytext").value.toUpperCase();
    $("mytext").value = $("mytext").value.split(".").join("-izzle.");
}