const formatPrice = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
}).format;

export { formatPrice };
