const products = ['html','css','js'];
const items = products.map(function(product){
    return `<li>${product}</li>`
});

const html = items.join(',');
console.log(html);