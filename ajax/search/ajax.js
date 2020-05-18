document.querySelector('#inp').oninput = function() {

        inp = this.value.trim(); // Значение с поля ввода

        console.log(inp);

        let countrys;
        if(typeof countrys !== 1) {
            let userData = document.forms.myForm.inp.value;
    
            userData = encodeURIComponent(userData);
            let xhr = new XMLHttpRequest();
            xhr.open('POST', 'search.php');
            xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
        
            xhr.onreadystatechange = function() {
                if(xhr.readyState === 4 && xhr.status === 200) {
                    countrys = xhr.responseText;
                    let res = document.querySelector('#res').innerHTML = countrys;
                }
            }

            xhr.send('inp=' + userData);
        
}