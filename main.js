document.addEventListener('DOMContentLoaded', function() {showTab("InfoTab");});
document.getElementById("InfoNav").addEventListener("click", function() {showTab("InfoTab");});
document.getElementById("LocationNav").addEventListener("click", function() {showTab("LocationTab");});
document.getElementById("ContactNav").addEventListener("click", function() {showTab("ContactTab");});

function showTab(TabId) {
    const tabs = document.querySelectorAll("[id$='Tab']");
    tabs.forEach(Tab => {Tab.style.display = "none";});
    document.getElementById(TabId).style.display = "flex";
}
