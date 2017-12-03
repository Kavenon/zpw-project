import {Product} from '../products/product';

export function isPromo(product: Product) {
    return product.promo && product.promo.until !== 0 && product.promo.until - new Date().getTime() > 0;
}

export function getDiscountedPrice(product: Product) {
    const discount = product.price.value * (product.promo.discount / 100);
    const discountedPrice = product.price.value - discount;
    return Math.round(discountedPrice * 100) / 100;
}
