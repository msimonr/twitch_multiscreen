var canales = [];

document.addEventListener('DOMContentLoaded', (event) => {

    document.getElementById('agregar').addEventListener('click', () => {
        let input = document.getElementById('canal');
        let url = input.value;
        input.value = '';
        // let re = new RegExp('(?<!\/)\/\w+');
        // let match = url.match(re);
        // console.log(match);
        // canales.push(match[0].substring(1));
        document.getElementById('streams').innerHTML += `<div class="frame">
        <iframe src="https://player.twitch.tv/?channel=${url}&parent=msimonr.github.io" frameborder="0" allowfullscreen="true" scrolling="no" height="300" width="492"></iframe>
    </div>`;

    });

    document.getElementById('removerTodo').addEventListener('click', () => {
        document.getElementById('streams').innerHTML = '';
    });
});