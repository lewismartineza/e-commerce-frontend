export function formatPrice(price: number) {
    const priceFormatted = new Intl.NumberFormat('en-US', {
        style: "currency",
        currency: "USD"
    })

    const finalPrice = priceFormatted.format(price)

    return finalPrice
}