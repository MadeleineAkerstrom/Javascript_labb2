const news = [
    {
        "headline": "Regeringen skjuter på publiklättnader",
        "author": "Erik Wikén",
        "href": "https://www.svt.se/nyheter/inrikes/regeringen-skjuter-pa-publiklattnader",
        "summary": "Det blir inga lättnader i publikrestriktioner som planerat – åtminstone inte nu. Det beskedet gav regeringen i dag. Orsaken är den återigen ökade smittspridningen i samhället."
    },
    {
        "headline": "Graffitin – så kom den till Sverige genom Public service",
        "author": "",
        "href": "https://www.svt.se/nyheter/lokalt/ost/graffitin-sa-kom-den-till-sverige-genom-public-service",
        "summary": "Det går faktiskt nästan att fastställa på minuten när graffitin kom till Sverige. Se hur det gick till och hur subkulturen har utvecklats sedan dess i videon."
    },
    {
        "headline": "Louise Glück får Nobelpriset i litteratur",
        "author": ["Jakob Runevad Kjellmer", "Lydia Farran-Lee", "Sebastian Folcker"],
        "href": "https://www.svt.se/kultur/nobelpriset-i-litteratur-2020",
        "summary": "Den amerikanska poeten Louise Glück mottar Nobelpriset i litteratur 2020. Hon debuterade med Firstborn 1968 och anses vara en av de mest tongivande samtida amerikanska poeterna."
    },
]

//ex01
document.querySelector('#ex01').innerText= 'DONE'
//ex02
document.querySelector('.ex02').classList.add('.red')
 //ex03 
 document.querySelector('blockquote').innerText = 'I don´t do quotes'

 //ex04
 const list = document.querySelector('#shopping-list')
 const addNew = document.createElement('li')
 addNew.textContent = 'Milk'
 list.appendChild(addNew)

//ex05
    let count = 0
    let pageCount = document.querySelector('body')
    let displayCount = document.querySelector('#click-counter')
    pageCount.onclick = function countClicks() {
        
        count++
        displayCount.innerHTML = count
    }
//ex06
writeNews();

    function writeNews() {
        let newsContent = document.getElementById("news");
        for (let i = 0; i < news.length; i++) {
            let newsHeadline = document.createElement("h3");
            newsHeadline.textContent = news[i].headline;
            newsContent.appendChild(newsHeadline);

            let newsSummary = document.createElement("p");
            newsSummary.textContent = news[i].summary;
            newsContent.appendChild(newsSummary);

            let newsAuthor = document.createElement("p");
            newsAuthor.textContent = news[i].author;
            newsAuthor.style.fontStyle = "italic";
            newsContent.appendChild(newsAuthor);

            let newsLink = document.createElement("a");
            newsLink.textContent = "Link to article";
            newsLink.href = news[i].href;
            newsLink.classList.add('.red')
            newsContent.appendChild(newsLink);
        }
    }

//ex07
document.querySelector('button').onclick = function changeToDisabled() {

    document.querySelector('button').disabled = 'true';
 
 }

//ex08
document.querySelector('#link-to-svt').href = "javascript:void(0)"

//ex09
document.querySelector('img').src = "https://images.unsplash.com/photo-1634093999010-980f6353301e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1170&q=80"


debugger

 console.log('js loaded!')

 