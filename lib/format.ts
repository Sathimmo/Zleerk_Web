const usd = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
});

/** formatPrice(189) → "$189.00" */
export function formatPrice(amount: number): string {
  return usd.format(amount);
}

/** telHref("+855 12 486 739") → "tel:+85512486739" */
export function telHref(phone: string): string {
  return `tel:${phone.replace(/[^\d+]/g, "")}`;
}
