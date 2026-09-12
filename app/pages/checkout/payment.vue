<script setup>
definePageMeta({
    layout: 'custom' // Tells Nuxt to use layouts/custom.vue instead of default.vue
})
</script>
<template>
    <div class="bg-background text-on-surface font-body-md text-body-md min-h-screen">
    <main class="max-w-max-width mx-auto px-margin-mobile md:px-margin-desktop py-12">
    <!-- Progress Indicator -->
        <CheckoutStepper />
        
<div class="">
<div class="mb-8">
<h1 class="font-headline-lg text-headline-lg-mobile md:text-headline-lg text-primary mb-2">Payment Fulfillment</h1>
<p class="font-body-lg text-body-lg text-on-surface-variant">Select your preferred method to complete this transaction.</p>
</div>
<div class="grid grid-cols-1 lg:grid-cols-3 gap-gutter">
<!-- Payment Methods Selection -->
<div class="lg:col-span-2 flex flex-col gap-6">
<!-- Bank Transfer / Invoice Option -->
<label class="block relative border border-border-gray rounded-lg bg-white p-6 cursor-pointer hover:border-secondary transition-colors group has-[:checked]:border-secondary has-[:checked]:ring-1 has-[:checked]:ring-secondary">
<input checked="" class="absolute top-6 left-6 text-secondary focus:ring-secondary w-5 h-5 border-outline-variant" name="payment_method" type="radio" value="transfer"/>
<div class="ml-10">
<div class="flex items-center gap-3 mb-2">
<span class="material-symbols-outlined text-primary" data-icon="account_balance">account_balance</span>
<span class="font-headline-sm text-headline-sm text-primary">Bank Transfer / Invoice</span>
<span class="px-2 py-1 bg-surface-container text-on-surface-variant rounded text-xs font-semibold uppercase tracking-wider ml-auto">Popular</span>
</div>
<p class="font-body-md text-body-md text-on-surface-variant mb-4">Direct transfer to our corporate accounts. An invoice will be generated upon review.</p>
<!-- Conditional Details (Visible when checked) -->
<div class="hidden group-has-[:checked]:block p-4 bg-surface rounded-lg border border-border-gray">
<div class="grid grid-cols-2 gap-4 font-code-table text-code-table text-on-surface-variant">
<div>
<span class="block text-outline mb-1 text-xs uppercase tracking-wider">Bank Name</span>
<span class="text-primary font-medium">Zenith Bank Plc</span>
</div>
<div>
<span class="block text-outline mb-1 text-xs uppercase tracking-wider">Account Number</span>
<span class="text-primary font-medium tracking-widest">1029384756</span>
</div>
</div>
</div>
</div>
</label>
<!-- Debit/Credit Card Option -->
<label class="block relative border border-border-gray rounded-lg bg-white p-6 cursor-pointer hover:border-secondary transition-colors group has-[:checked]:border-secondary has-[:checked]:ring-1 has-[:checked]:ring-secondary">
<input class="absolute top-6 left-6 text-secondary focus:ring-secondary w-5 h-5 border-outline-variant" name="payment_method" type="radio" value="card"/>
<div class="ml-10">
<div class="flex items-center gap-3 mb-2">
<span class="material-symbols-outlined text-primary" data-icon="credit_card">credit_card</span>
<span class="font-headline-sm text-headline-sm text-primary">Debit / Credit Card</span>
</div>
<p class="font-body-md text-body-md text-on-surface-variant">Secure online payment via Paystack gateway.</p>
<div class="flex gap-2 mt-4">
<div class="h-8 w-12 bg-surface-container rounded border border-border-gray flex items-center justify-center text-[10px] font-bold text-outline">VISA</div>
<div class="h-8 w-12 bg-surface-container rounded border border-border-gray flex items-center justify-center text-[10px] font-bold text-outline">MC</div>
<div class="h-8 w-12 bg-surface-container rounded border border-border-gray flex items-center justify-center text-[10px] font-bold text-outline">VERVE</div>
</div>
</div>
</label>

<!-- Billing Address -->
<div class="mt-4 bg-white border border-border-gray rounded-lg p-6">
<h3 class="font-headline-sm text-headline-sm text-primary mb-4">Billing Details</h3>
<label class="flex items-start gap-3 cursor-pointer">
<input checked="" class="mt-1 text-secondary focus:ring-secondary border-outline-variant rounded rounded-sm" type="checkbox"/>
<div>
<span class="font-label-lg text-label-lg text-primary block mb-1">Same as delivery address</span>
<p class="font-body-sm text-body-sm text-on-surface-variant">
                                        Plot 42, Industrial Layout,<br/>
                                        Ikeja, Lagos State,<br/>
                                        Nigeria
                                    </p>
</div>
</label>
</div>
</div>
<!-- Order Summary Sticky Panel -->
<div class="lg:col-span-1">
<div class="bg-white border border-border-gray rounded-lg p-6 sticky top-24">
<h3 class="font-headline-sm text-headline-sm text-primary mb-6 border-b border-border-gray pb-4">Order Summary</h3>
<div class="flex flex-col gap-4 font-body-sm text-body-sm text-on-surface-variant mb-6 border-b border-border-gray pb-6">
<div class="flex justify-between">
<span>Subtotal (5 Items)</span>
<span class="font-code-table ">₦ 2,450,000</span>
</div>
<div class="flex justify-between">
<span>Logistics &amp; Handling</span>
<span class="font-code-table">₦ 75,000</span>
</div>
<div class="flex justify-between text-success">
<span>Volume Discount</span>
<span class="font-code-table">- ₦ 120,000</span>
</div>
<div class="flex justify-between">
<span>VAT (7.5%)</span>
<span class="font-code-table">₦ 180,375</span>
</div>
</div>
<div class="flex justify-between items-center mb-8">
<span class="font-label-lg text-label-lg text-primary">Total Fulfillment</span>
<span class="font-headline-md text-headline-md text-primary font-bold tracking-tight">₦ 2,585,375</span>
</div>
<NuxtLink to="/checkout/review" class="w-full bg-[#1565C0] hover:bg-[#0D47A1] text-white py-3 px-4 rounded-md font-label-lg text-label-lg transition-colors flex items-center justify-center gap-2 shadow-sm">
                                Review Order
                                <span class="material-symbols-outlined text-sm" data-icon="arrow_forward">arrow_forward</span>
</NuxtLink>
<p class="mt-4 text-center text-xs text-outline flex items-center justify-center gap-1">
<span class="material-symbols-outlined text-xs" data-icon="lock">lock</span>
                                Encrypted &amp; Secure Connection
                            </p>
</div>
</div>
</div>
</div>
</main>
</div>
</template>