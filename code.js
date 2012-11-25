function init()
{
    currentPage = document.getElementById("page0");

    var linkElements = document.getElementsByClassName("pagelink");
    for (var i = 0; i < linkElements.length; i++) {
        var linkElement = linkElements[i];
        // TODO: properly bind this
        linkElement.onclick = function() {
            currentPage.style.display = "none";
            var pageId = this.id.split("-")[0];
            currentPage = document.getElementById(pageId);
            currentPage.style.display = "block";
        }
    }
}


window.onload = init;
