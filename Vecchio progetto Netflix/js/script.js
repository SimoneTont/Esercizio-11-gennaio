console.log(window)
let c=0
const SearchBar = function ()
{
    const icon = document.querySelector('SearchButton')
    const form = document.querySelector('input')
    if((c%2)===0)
    {
        form.style.display='inline';
    }
    else
    {
        form.style.display='none';
    }
    c++
}