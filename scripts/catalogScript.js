class Products {
    render(prevPage, nextPage) {
        const container = document.getElementById('products');

        container.innerHTML = '';

        const productOnPage = this.products.slice(prevPage, nextPage)

        productOnPage.forEach(product => {
            const productCard = document.createElement('div');

            productCard.innerHTML = `
                <a href="${product.link}" class="card-link">
                    <img src="${product.image}" alt="Card-image">
                    <p class="badge">${product.badge}</p>
                    <span class="card-title">
                        <p>${product.name}</p>
                    </span>
                    <button class="card-button material-symbols-rounded">arrow_forward</button>
                </a>
                `;

            container.appendChild(productCard);

        });
    }
    constructor(products) {
        this.products = products;
    }
}
let prevPage = 0;
let nextPage = 6;

function updatePaginationButtons() {
    const totalItems = product.products.length;
    prevPageBtn[prevPage > 0 ? 'show' : 'hide']();
    nextPageBtn[nextPage < totalItems ? 'show' : 'hide']();
}

const prevPageBtn = {
    PageBtn: document.getElementById('btnPrevPage'),
    show() {
        this.PageBtn.classList.remove('btn-up_hide');
    },
    hide() {
        this.PageBtn.classList.add('btn-up_hide');
    },
    addEventListener() {
        this.PageBtn.onclick = () => {
            prevPage -= 6;
            nextPage -= 6;
            product.render(prevPage, nextPage);
            updatePaginationButtons()
        }

    }
}

const nextPageBtn = {
    PageBtn: document.getElementById('btnNextPage'),
    show() {
        this.PageBtn.classList.remove('btn-up_hide');
    },
    hide() {
        this.PageBtn.classList.add('btn-up_hide');
    },
    addEventListener() {

        this.PageBtn.onclick = () => {
            prevPage += 6;
            nextPage += 6;
            product.render(prevPage, nextPage);
            updatePaginationButtons()
        }
    }
}
let product;

let allData;

const allButtonFilter = {
    btnNews: document.getElementById('allButton'),
    addEventListener() {
        this.btnNews.onclick = () => {
            const filteredNews = allData
            product = new Products(filteredNews);
            prevPage = 0;
            nextPage = 6;

            product.render(prevPage, nextPage);
            updatePaginationButtons();
        }
    }
}


const newsButtonFilter = {
    btnNews: document.getElementById('newsButton'),
    addEventListener() {
        this.btnNews.onclick = () => {
            const filteredNews = allData.filter(product => product.category === 'news');
            product = new Products(filteredNews);
            prevPage = 0;
            nextPage = 6;

            product.render(prevPage, nextPage);
            updatePaginationButtons();
        }
    }
}

const promotionButtonFilter = {
    btnNews: document.getElementById('promotionButton'),
    addEventListener() {
        this.btnNews.onclick = () => {
            const filteredNews = allData.filter(product => product.category === 'promotion');
            product = new Products(filteredNews);
            prevPage = 0;
            nextPage = 6;

            product.render(prevPage, nextPage);
            updatePaginationButtons();
        }
    }
}

allButtonFilter.addEventListener();
promotionButtonFilter.addEventListener();
newsButtonFilter.addEventListener();
prevPageBtn.addEventListener();
nextPageBtn.addEventListener();
fetch('scripts/catalog.json')
    .then(response => {
        if (!response.ok) {
            throw new Error(`Ошибка HTTP: ${response.status}`);
        }
        return response.json();
    })
    .then(data => {
        allData = data;

        product = new Products(data);
        product.render(prevPage, nextPage);
        updatePaginationButtons();
    })
    .catch(error => {
        console.error('Произошла ошибка:', error);
    });