const groups = document.querySelectorAll("nav div")
const btn = document.querySelector('.choice')
const reset = document.querySelector('.reset')
const div = document.querySelector('.category')

const topics1 = ['Genialny pomysł na biznes', 'Najbardziej szalona przygoda Tadeusza Sznuka', 'Nikt tak nie ma jak ja', 'Czarna owca Armii Czerwonej', 'Życie to ananas', 'KONIEC']
const topics2 = ['Nietypowe metody samodoskonalenia się', 'Kryzys w pociągu do Ciechocinka', 'Średniowieczni hejterzy', 'Kolacja u Donalda Trumpa', 'Sekretne życie ryb', 'KONIEC']
const topics3 = ['Błędy w sztuce', 'Pierwsza randka Kubusia Puchatka', 'Wiecie co mnie cieszy?', 'Cechy dobrego narkomana', ' Spowiedź golfisty', 'KONIEC']
const topics4 = ['Sposób na brunetkę', 'Wujek który wisiał i gałąź która pękła', 'Życie bez przekleństw', 'Niespodziewany powrót ciotki ze Stanów', 'Co pobudza łosie?', 'KONIEC']
const topics5 = ['Odrzucone przykazania Dekalogu', 'Najbardziej epicki żart świata', 'Czego nie pamiętają najstarsi Górale?', 'Papieros albo psikus', 'Złoty ząb Tuska', 'KONIEC']
const topics6 = ['Kontrowersyjna przedszkolanka', 'Selfie - analiza krytyczna', 'Którędy iść by dojść?', 'Znalazłem i płakałem', 'Premier w lunaparku', 'KONIEC']
const topics7 = ['Dlaczego?', 'Problemy Polski B', 'Kompletny brak meneli', 'Amerykańscy naukowcy w Rosji', 'Wielkie pojednanie', 'KONIEC']
let i = 0


function groupChoice() {
    groups.forEach(group => group.classList.remove('active'));
    this.classList.add('active');
    // div.textContent = 'SPONTAN impro stand-up';
    i = 0;
}

function changeCategory() {
    if (groups[0].classList.contains('active')) {
        div.textContent = topics1[i];
    } else if (groups[1].classList.contains('active')) {
        div.textContent = topics2[i];
    } else if (groups[2].classList.contains('active')) {
        div.textContent = topics3[i];
    } else if (groups[3].classList.contains('active')) {
        div.textContent = topics4[i];
    } else if (groups[4].classList.contains('active')) {
        div.textContent = topics5[i];
    } else if (groups[5].classList.contains('active')) {
        div.textContent = topics6[i];
    } else if (groups[6].classList.contains('active')) {
        div.textContent = topics7[i];
    }
    i++
}

function resetCategory() {
    div.textContent = 'SPONTAN \n impro stand-up'
    i = 0;
}

groups.forEach(group => group.addEventListener('click', groupChoice))

// przełączanie kategorii
btn.addEventListener('click', changeCategory)
reset.addEventListener('click', resetCategory)