// #565d7a
let Input = document.getElementById('filter_users');
let Designbox = document.getElementById('designInputField');
let Designicon = document.getElementById('designIcon');
let Xspan = document.getElementById('hide-or-Show');
Input.addEventListener('click', () => {
    document.getElementById('designInputField').style.backgroundColor = '#565d7a';
    document.getElementById('filter_users').style.backgroundColor = '#565d7a';
    document.getElementById('designIcon').style.backgroundColor = '#565d7a';
    document.getElementById('hide-or-Show').style.backgroundColor = '#565d7a'

});
let Span = document.getElementById('hide-or-Show');
Span.addEventListener('click', () => {
    Input.value = ''
    Span.style.display = 'none';
})
const handleInput = () => {
    if (document.getElementById('filter_users').value != '') {
        Input.style.backgroundColor = ''
        Designbox.style.backgroundColor = '';
        Designicon.style.backgroundColor = '';
        Xspan.style.backgroundColor = '';
        Span.style.display = 'block';
    }
}
// -----------Key Up Function ---------------
const searchInput = document.getElementById("filter_users"); // Input Id Name
const result = document.querySelectorAll("#main-div h5"); // Search-by-topics id Name || id="main-div"

searchInput.addEventListener("input", function () {
    const searchTerm = searchInput.value.toLowerCase();

    result.forEach(itemName => {
        const itemNameText = itemName.innerText.toLowerCase();
        if (itemNameText.includes(searchTerm)) {
            itemName.style.display = "block";
        } else {
            itemName.style.display = "none";
        }
    });
});

// ------------------  Making Image Search Filter Using Html Css JavaScript ----------------------------------------
document.addEventListener('DOMContentLoaded', function () {
    const searchInput = document.getElementById('filter_users');// Input Id Name
    const imgContainers = document.querySelectorAll('.react-clean-code'); // iske Display MujheNochrne Karni Hai  
    searchInput.addEventListener('input', function () {
        const searchTerm = searchInput.value.toLowerCase();
        imgContainers.forEach(container => {
            const h5 = container.querySelector('h5');
            if (h5.innerText.toLowerCase().includes(searchTerm)) {
                container.style.display = 'block';
            } else {
                container.style.display = 'none';
            }
        });
    });ch
});