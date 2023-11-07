const btn_dm = document.getElementById('btn_dm');

btn_dm.addEventListener("change", (e) =>{
    document.body.classList.toggle('dark', e.target.checked);
})