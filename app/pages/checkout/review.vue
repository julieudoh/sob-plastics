<script setup>
definePageMeta({
    layout: 'custom' // Tells Nuxt to use layouts/custom.vue instead of default.vue
})
</script>
<template>
    <div class="bg-background text-on-surface font-body-md text-body-md min-h-screen">
    <main class="flex-1 w-full max-w-max-width mx-auto px-margin-desktop py-8 grid grid-cols-1 lg:grid-cols-12 gap-gutter">
<!-- Main Canvas -->
<div class="lg:col-span-8 flex flex-col gap-6">
<!-- Step Indicator -->

<CheckoutStepper />

<h1 class="font-headline-lg text-headline-lg text-primary mt-4 mb-2">Review Your Order</h1>
<p class="font-body-md text-on-surface-variant mb-4">Please confirm your procurement details before submitting.</p>
<!-- Review Sections -->
<div class="grid grid-cols-1 md:grid-cols-2 gap-6">
<!-- Delivery Review -->
<div class="bg-white border border-border-gray rounded-lg p-6 relative">
<h2 class="font-headline-sm text-headline-sm text-primary mb-4 flex items-center gap-2">
<span class="material-symbols-outlined text-secondary">local_shipping</span> Delivery Information
                    </h2>
<div class="font-body-sm text-on-surface-variant space-y-1">
<p class="font-label-lg text-primary">Lagos Central Warehouse</p>
<p>14 Broad Street</p>
<p>Lagos Island, Lagos</p>
<p>Nigeria</p>
<p class="mt-2"><span class="font-label-md text-primary">Method:</span> Standard Freight (3-5 Business Days)</p>
</div>
<button class="absolute top-6 right-6 font-label-md text-secondary hover:underline bg-transparent border-0 cursor-pointer">Edit</button>
</div>
<!-- Payment Review -->
<div class="bg-white border border-border-gray rounded-lg p-6 relative">
<h2 class="font-headline-sm text-headline-sm text-primary mb-4 flex items-center gap-2">
<span class="material-symbols-outlined text-secondary">payments</span> Payment Method
                    </h2>
<div class="font-body-sm text-on-surface-variant space-y-1">
<p class="font-label-lg text-primary">Corporate Bank Transfer</p>
<p>Bank: Access Bank Plc</p>
<p>Account ending in: ****4829</p>
<p class="mt-2 text-success flex items-center gap-1">
<span class="material-symbols-outlined filled-icon" style="font-size: 16px;">verified</span> Verified Business Account
                        </p>
</div>
<button class="absolute top-6 right-6 font-label-md text-secondary hover:underline bg-transparent border-0 cursor-pointer">Edit</button>
</div>
</div>
<!-- Itemized Table -->
<div class="bg-white border border-border-gray rounded-lg overflow-hidden mt-2">
<div class="p-6 border-b border-border-gray flex justify-between items-center">
<h2 class="font-headline-sm text-headline-sm text-primary">Order Items</h2>
</div>
<div class="overflow-x-auto">
<table class="w-full text-left font-code-table text-code-table">
<thead class="bg-primary-container text-white">
<tr>
<th class="px-6 py-3 font-label-md uppercase tracking-wider">Product</th>
<th class="px-6 py-3 font-label-md uppercase tracking-wider text-right">Quantity</th>
<th class="px-6 py-3 font-label-md uppercase tracking-wider text-right">Unit Price (₦)</th>
<th class="px-6 py-3 font-label-md uppercase tracking-wider text-right">Total (₦)</th>
</tr>
</thead>
<tbody class="text-on-surface-variant divide-y divide-border-gray">
<!-- Row 1 -->
<tr class="hover:bg-surface-container-low transition-colors">
<td class="px-6 py-4 flex items-center gap-4">
<div class="w-12 h-12 bg-cover bg-center rounded bg-surface-variant border border-border-gray" data-alt="A macro shot of a sleek, durable industrial polymer connector, beautifully lit with soft studio lighting against a clean white background, highlighting its premium manufacturing quality and robust design." style="background-image: url('https://lh3.googleusercontent.com/aida-public/AB6AXuAuEPoPiE4WJwQ7Sh2PkdI0WAQiHW43IFrYEAACUo2fFSd2DJIkKRVBPEB7_9Zj6MzRdlQ8KpLfLW8eEp1dH08I_OZe-iLM78J7lK34bAsyOtG14Xg-mY6GlWrIGce9Q3Crf9DkLtW_XRqrQ7roRbWcZB6IRYYzezqNu02FTGLYJXMcT_hYXyJnqs4ecegbt9gahVpaDehKeVsKV9ZB66ItHDGZR91tr7JT9v1aOGLvqFiKbd12kyrlwg')"></div>
<div>
<div class="font-label-lg text-primary">Polymer Connectors - Series B</div>
<div class="text-label-md text-outline">SKU: PC-SB-1002</div>
</div>
</td>
<td class="px-6 py-4 text-right">500</td>
<td class="px-6 py-4 text-right">4,500.00</td>
<td class="px-6 py-4 text-right font-label-lg text-primary">2,250,000.00</td>
</tr>
<!-- Row 2 -->
<tr class="bg-surface-container-lowest hover:bg-surface-container-low transition-colors">
<td class="px-6 py-4 flex items-center gap-4">
<div class="w-12 h-12 bg-cover bg-center rounded bg-surface-variant border border-border-gray" data-alt="A stack of highly engineered, translucent industrial resin blocks, glowing subtly under cool white light, demonstrating clarity and material purity in a minimalist warehouse setting." style="background-image: url('https://lh3.googleusercontent.com/aida-public/AB6AXuAtpgeuKc3aBBptPp6X9GbAwnPsw4_iirgaLVKdZiWYbAmI7Z4Svz9HUIDru5KUezWtLEEuvRpP7S9Z-0tgqOUp6ivj5aeMBmwRsDA68Awu3BZwdtCHUMDAEvwZEJS3u_d2-3PF1wDUulioeYgUNNWF0w7SwjGh-IjkPPr6R3jIk6JKUckF91SPexHsAtUVwOOHGgjlRso5oUY4RVgPSO2r9kpYoNn_i9NsfBKqXmr4wgkKYtKUKYOFCw')"></div>
<div>
<div class="font-label-lg text-primary">High-Grade Resin Blocks</div>
<div class="text-label-md text-outline">SKU: HRB-550</div>
</div>
</td>
<td class="px-6 py-4 text-right">250</td>
<td class="px-6 py-4 text-right">12,000.00</td>
<td class="px-6 py-4 text-right font-label-lg text-primary">3,000,000.00</td>
</tr>
</tbody>
</table>
</div>
</div>
<!-- Trust Badges -->
<div class="flex gap-4 mt-4">
<div class="bg-secondary-fixed-dim/10 text-secondary-container font-label-md px-3 py-1 rounded-full flex items-center gap-1 border border-secondary/20">
<span class="material-symbols-outlined" style="font-size: 16px;">lock</span> Secure Transaction
                </div>
<div class="bg-success/10 text-success font-label-md px-3 py-1 rounded-full flex items-center gap-1 border border-success/20">
<span class="material-symbols-outlined" style="font-size: 16px;">verified</span> Verified Wholesale Partner
                </div>
</div>
</div>
<!-- Sidebar (Order Summary) -->
<div class="lg:col-span-4 flex flex-col">
<div class="bg-white border border-border-gray rounded-lg p-6 sticky top-24">
<h2 class="font-headline-sm text-headline-sm text-primary mb-6 border-b border-border-gray pb-4">Order Summary</h2>
<div class="space-y-4 font-body-sm text-on-surface-variant mb-6 border-b border-border-gray pb-6">
<div class="flex justify-between">
<span>Subtotal (5 items)</span>
<span class="font-code-table text-primary">₦ 2,450,000.00</span>
</div>
<div class="flex justify-between">
<span>Logistics &amp; Handling</span>
<span class="font-code-table text-primary">₦ 75,000.00</span>
</div>
<div class="flex justify-between text-success">
<span>Volume Discount</span>
<span class="font-code-table">- ₦ 120,000.00</span>
</div>
<div class="flex justify-between">
<span>Taxes (VAT 7.5%)</span>
<span class="font-code-table text-primary">₦ 180,375.00</span>
</div>
</div>
<div class="flex justify-between items-end mb-8">
<span class="font-label-lg text-primary">Total Amount</span>
<span class="font-headline-md text-headline-md text-primary">₦ 2,585,375.00</span>
</div>
<button class="w-full bg-[#1565C0] hover:bg-primary-container text-white font-label-lg py-3 px-4 rounded-lg transition-colors flex justify-center items-center gap-2 mb-4">
<span class="material-symbols-outlined" style="font-size: 20px;">task_alt</span>
                    Place Wholesale Order
                </button>
<p class="font-label-md text-outline text-center">By placing this order, you agree to our <a class="text-[#1565C0] hover:underline" href="#">Procurement Terms</a>.</p>
</div>
</div>
</main>
</div>
</template>