import { allProducts, renderProducts } from "./components/MainPage.js";
import catalog from "./components/catalog";

let productsRoot;

const initializeFilters = (rootContainerSelector, filterContainerSelector) => {
    const rootContainer = document.querySelector(rootContainerSelector);
    const filterContainer = document.querySelector(filterContainerSelector);

    if (rootContainer) {
        productsRoot = createRoot(rootContainer);
        renderProducts(productsRoot, allProducts);
    }

    if (filterContainer) {
        const checkboxes = filterContainer.querySelectorAll('input[type="checkbox"]');
        checkboxes.forEach(checkbox => {
            checkbox.addEventListener('change', handleFilterChange);
        });
    }
};

const handleFilterChange = () => {
    const selectedBrands = Array.from(document.querySelectorAll('input[type="checkbox"]:checked'))
                                .map(checkbox => checkbox.labels[0].textContent);

    const filteredProducts = selectedBrands.length > 0
        ? allProducts.filter(id => {
            const product = catalog.find(product => product.id === id);
            return selectedBrands.includes(product.brand);
        })
        : allProducts;

    renderProducts(productsRoot, filteredProducts);
};

export { initializeFilters };
