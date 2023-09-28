let loading_i = 0
let loading_dir = 0
let loading_elem = document.getElementById("loading")

setInterval(() => {
    if (loading_dir == 0) loading_i += 1
    else if (loading_dir == 1) loading_i -= 1

    if (loading_i < 1) {
        loading_i = 2
        loading_dir = 0
    }

    if (loading_i > 5) {
        loading_i = 4
        loading_dir = 1
    }

    if (loading_i == 1) loading_elem.innerText = "#----"
    if (loading_i == 2) loading_elem.innerText = "-#---"
    if (loading_i == 3) loading_elem.innerText = "--#--"
    if (loading_i == 4) loading_elem.innerText = "---#-"
    if (loading_i == 5) loading_elem.innerText = "----#"
}, 100)

function redirect(filename) {
    $.ajax({
        url: "https://api.github.com/gists/e945a5bf18d4d18e72f264c2e8d1f442",
        method: "get",
        dataType: "json",
        success: (res) => {
            window.location.href = res.files.mmm.content+filename
        }
    })
}
