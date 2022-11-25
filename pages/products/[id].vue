
<template>
  <section>
    <ProductDetails :product="product" />
  </section>
</template>

<script setup lang="ts">
import { Product, ProductUI } from "../../types"

definePageMeta({
  layout: 'products'
})

  const { id } = useRoute().params
  const uri = `https://fakestoreapi.com/products/${id}`

  const { data } = await useFetch(uri, { key: id })
  const productApi: Product = data.value

  if (!productApi)
    throw createError({
      statusCode: 404,
      statusMessage: 'Product not found',
      fatal: true // force show error client or server side
    })

  const product: ProductUI = {
    id: productApi.id,
    name: productApi.title,
    title: productApi.title,
    price: productApi.price,
    description: productApi.description,
    category: productApi.category,
    image: productApi.image,
    images: [
      {
        id: productApi.id,
        name: productApi.title,
        src: productApi.image,
        alt: productApi.description,
      },
    ],
    rating: 4, //productApi.rating,
    slug: '',
    href: `/products/${ productApi.id }`,
    breadcrumbs: [
      { id: 1, name: 'Women', href: '#' },
      { id: 2, name: 'Clothing', href: '#' },
    ],
    colors: [
      { name: 'Black', bgColor: 'bg-gray-900', selectedColor: 'ring-gray-900' },
      { name: 'Heather Grey', bgColor: 'bg-gray-400', selectedColor: 'ring-gray-400' },
    ],
    sizes: [
      { name: 'XXS', inStock: true },
      { name: 'XS', inStock: true },
      { name: 'S', inStock: true },
      { name: 'M', inStock: true },
      { name: 'L', inStock: true },
      { name: 'XL', inStock: false },
    ],
    details: [
      {
        name: 'Features',
        items: [
          'Multiple strap configurations',
          'Spacious interior with top zip',
          'Leather handle and tabs',
          'Interior dividers',
          'Stainless strap loops',
          'Double stitched construction',
          'Water-resistant',
        ],
      },
      {
        name: 'Care',
        items: [
          'Spot clean as needed',
          'Hand wash with mild soap',
          'Machine wash interior dividers',
          'Treat handle and tabs with leather conditioner',
        ],
      },
      {
        name: 'Shipping',
        items: [
          'Free shipping on orders over $300',
          'International shipping available',
          'Expedited shipping options',
          'Signature required upon delivery',
        ],
      },
      {
        name: 'Returns',
        items: [
          'Easy return requests',
          'Pre-paid shipping label included',
          '10% restocking fee for returns',
          '60 day return window',
        ],
      },
    ]
  }

</script>