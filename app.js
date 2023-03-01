const search = () =>{ 
    const searchbox = document.getElementById('search-item').value.toUpperCase(); 
    const storeitems = document.getElementById('proizvod-lista');
    const proizvod = document.querySelectorAll('.proizvod');
    const pime = storeitems.getElementsByTagName('h2');


    for(var i=0; i < pime.length; i++)
    {
        let match = proizvod[i].getElementsByTagName('h2')[0];

        if(match)
        {
            let textValue = match.textContent || match.innerHTML

            if(textValue.toUpperCase().indexOf(searchbox) > -1)
            {
                proizvod[i].style.display = "";
            }
            else
            {
                proizvod[i].style.display = "none";
            }
        }
    }
}