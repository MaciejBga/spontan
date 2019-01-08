const qOne = document.querySelector('.one')
const qTwo = document.querySelector('.two')
const qThree = document.querySelector('.three')
const qFour = document.querySelector('.four')
const sOne = document.querySelector('.five')
const sTwo = document.querySelector('.six')
const final = document.querySelector('.final')
const div = document.querySelector('.category')
const btn = document.querySelector('button')
const topics1 = ['Genialny pomysł na biznes', 'Najbardziej szalona przygoda Tadeusza Sznuka', 'Nikt tak nie ma jak ja', 'Czarna owca Armii Czerwonej', 'Życie to ananas', 'KONIEC']
const topics2 = ['Nietypowe metody samodoskonalenia się', 'Kryzys w pociągu do Ciechocinka', 'Średniowieczni hejterzy', 'Kolacja u Donalda Trumpa', 'Sekretne życie ryb', 'KONIEC']
const topics3 = ['Błędy w sztuce', 'Pierwsza randka Kubusia Puchatka', 'Wiecie co mnie cieszy?', 'Cechy dobrego narkomana', ' Spowiedź golfisty', 'KONIEC']
const topics4 = ['Sposób na brunetkę', 'Wujek który wisiał i gałąź która pękła', 'Życie bez przekleństw', 'Niespodziewany powrót ciotki ze Stanów', 'Co pobudza łosie?', 'KONIEC']
const topics5 = ['Odrzucone przykazania Dekalogu', 'Najbardziej epicki żart świata', 'Czego nie pamiętają najstarsi Górale?', 'Papieros albo psikus', 'Złoty ząb Tuska', 'KONIEC']
const topics6 = ['Kontrowersyjna przedszkolanka', 'Selfie - analiza krytyczna', 'Którędy iść by dojść?', 'Znalazłem i płakałem', 'Premier w lunaparku', 'KONIEC']
const topics7 = ['Dlaczego?', 'Problemy Polski B', 'Kompletny brak meneli', 'Amerykańscy naukowcy w Rosji', 'Wielkie pojednanie', 'KONIEC']
let i = 0

qOne.addEventListener('click', () => {
    if (i < topics1.length) {
        div.textContent = topics1[i];
        qOne.classList.add('active')
    }
    i++
})
qTwo.addEventListener('click', () => {
    if (i < topics2.length) {
        div.textContent = topics2[i];
        qTwo.classList.add('active')
    }
    i++
})
qThree.addEventListener('click', () => {
    if (i < topics3.length) {
        div.textContent = topics3[i];
        qThree.classList.add('active')
    }
    i++
})
qFour.addEventListener('click', () => {
    if (i < topics4.length) {
        div.textContent = topics4[i];
        qFour.classList.add('active')
    }
    i++
})
sOne.addEventListener('click', () => {
    if (i < topics5.length) {
        div.textContent = topics5[i];
        sOne.classList.add('active')
    }
    i++
})
sTwo.addEventListener('click', () => {
    if (i < topics6.length) {
        div.textContent = topics6[i];
        sTwo.classList.add('active')
    }
    i++
})
final.addEventListener('click', () => {
    if (i < topics7.length) {
        div.textContent = topics7[i];
        final.classList.add('active')
    }
    i++
})
btn.addEventListener('click', () => {
    div.textContent = 'SPONTAN impro stand-up'
    i = 0;
    qOne.classList.remove('active')
    qTwo.classList.remove('active')
    qThree.classList.remove('active')
    qFour.classList.remove('active')
    sOne.classList.remove('active')
    sTwo.classList.remove('active')
    final.classList.remove('active')
})