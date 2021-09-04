fetch('https://al-quran-8d642.firebaseio.com/data.json')
    .then(respon => respon.json())
    .then(ayats =>
        ayats.forEach(a => {
            const listAyat = document.querySelector('.list-ayat');
            listAyat.innerHTML += `
            <option value="${a.nomor}">${a.asma}</option>
            `
        }));

const listAyat = document.querySelector('.list-ayat');
listAyat.addEventListener('change', event => {
    const pilihanAyat = document.querySelector('.pilihan-ayat');
    pilihanAyat.textContent = `Ayat yang terpilih : ${event.target.value}`;

    // fetch('https://api.npoint.io/99c279bb173a6e28359c/surat/' + event.target.value)
    //     .then(respon => respon.json())
    //     .then(json => {
    //         let li = ''
    //         json.map(ayat => li += `<li class="list-group-item">${ayat.ar}</li></li>`)
    //         const ul = document.querySelector('.arab');
    //         ul.innerHTML = li;
    //     });

    // fetch('https://api.npoint.io/99c279bb173a6e28359c/surat/' + event.target.value)
    // .then(respon => respon.json())
    // .then(json => {
    //     let li = ''
    //     json.map(ayat => li += showData(ayat))
    //     const ul = document.querySelector('.arab');
    //     ul.innerHTML = li;
    //     // ul.innerHTML = json.map(resp => `<li class="list-group-item">${resp.ar}</li></li>`)
    // });
    fetch('https://api.npoint.io/99c279bb173a6e28359c/surat/' + event.target.value)
        .then(respon => respon.json())
        .then(json => {
            let li = '';
            // json.map(resp => li += `<li class="list-group-item">${resp.ar}</li></li>`);
            json.map(resp => li += showData(resp));
            const ul = document.querySelector('.arab');
            ul.innerHTML = li;
        });
})

function showData(ayat) {
    return `
    <li class="list-group-item">${ayat.ar}</li>
    <p>${ayat.id}</p>`
}