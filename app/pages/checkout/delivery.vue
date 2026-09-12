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
<div class="grid grid-cols-1 lg:grid-cols-12 gap-gutter">
    <!-- Step 1 Form Content -->
    <section class="lg:col-span-7 space-y-8">
        <!-- Delivery Address -->
        <div class="bg-surface-container-lowest border border-border-gray p-6 md:p-8 rounded-lg">
            <h2 class="font-headline-sm text-headline-sm text-primary mb-6 flex items-center gap-3">
                <span class="material-symbols-outlined">location_on</span>
                                        Delivery Address
                                    </h2>
                <div class="space-y-4">
                    <div class="relative">
                        <label class="block font-label-lg text-on-surface-variant mb-1">Company Address Search</label>
                        <div class="relative">
                            <span class="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-outline">search</span>
                            <input class="w-full pl-10 pr-4 py-3 border border-border-gray rounded-lg focus:ring-2 focus:ring-secondary focus:border-secondary outline-none transition-all" placeholder="Enter Lagos, Abuja or Port Harcourt address..." type="text"/>
                        </div>
                        <p class="mt-2 text-body-sm text-on-surface-variant">Or 
                            <button class="text-secondary font-bold hover:underline">enter address manually</button>
                        </p>
                    </div>
                    <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                            <label class="block font-label-lg text-on-surface-variant mb-1">Attention (Optional)</label>
                            <input class="w-full px-4 py-3 border border-border-gray rounded-lg focus:ring-2 focus:ring-secondary focus:border-secondary outline-none" placeholder="Department or contact name" type="text"/>
                        </div>
                        <div>
                            <label class="block font-label-lg text-on-surface-variant mb-1">Purchase Order (PO) Number</label>
                            <input class="w-full px-4 py-3 border border-border-gray rounded-lg focus:ring-2 focus:ring-secondary focus:border-secondary outline-none" placeholder="Ref: PC-00123" type="text"/>
                        </div>
                    </div>
                </div>
            </div>
            <!-- Delivery Method & Schedule -->
            <div class="bg-surface-container-lowest border border-border-gray p-6 md:p-8 rounded-lg">
                <h2 class="font-headline-sm text-headline-sm text-primary mb-6 flex items-center gap-3">
                    <span class="material-symbols-outlined">local_shipping</span>
                        Delivery Logistics
                </h2>
                <div class="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                    <label class="relative flex flex-col p-4 border-2 border-secondary bg-secondary-fixed cursor-pointer rounded-lg">
                        <input checked="" class="hidden" name="shipping" type="radio"/>
                        <span class="font-label-lg text-secondary">Nationwide Distribution (Lagos/Abuja/PH)</span>
                        <span class="text-body-sm text-on-secondary-container mt-1">3-5 business days delivery</span>
                        <span class="mt-4 font-bold text-secondary">₦5,000</span>
                        <span class="material-symbols-outlined absolute top-4 right-4 text-secondary">check_circle</span>
                    </label>
                    <label class="relative flex flex-col p-4 border border-border-gray hover:border-secondary transition-colors cursor-pointer rounded-lg">
                        <input class="hidden" name="shipping" type="radio"/>
                        <span class="font-label-lg text-on-surface">Regional Hub Pickup</span>
                        <span class="text-body-sm text-on-surface-variant mt-1">Collect from our nearest distribution center</span>
                        <span class="mt-4 font-bold text-on-surface">FREE</span>
                    </label>
                </div>
                <div class="space-y-4 pt-6 border-t border-border-gray">
                    <label class="block font-label-lg text-on-surface-variant mb-1">Schedule Preferred Delivery Date</label>
                        <div class="flex gap-4 items-center">
                            <div class="relative flex-1">
                                <span class="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-outline">calendar_today</span>
                                <input class="w-full pl-10 pr-4 py-3 border border-border-gray rounded-lg focus:ring-2 focus:ring-secondary focus:border-secondary outline-none" type="date"/>
                            </div>
                            <span class="text-body-sm text-on-surface-variant hidden md:block italic">Available Mon - Sat</span>
                        </div>
                    </div>
                </div>
                <!-- Mobile Only Total Summary -->
                <div class="lg:hidden bg-surface-container border border-border-gray p-4 rounded-lg">
                    <div class="flex justify-between items-center mb-4">
                        <span class="font-label-lg">Total Payable</span>
                        <span class="font-headline-sm text-primary">₦2,851,250.00</span>
                    </div>
                    <NuxtLink to="/checkout/payment" class="w-full bg-secondary text-white py-4 rounded-lg font-label-lg hover:bg-on-secondary-fixed-variant transition-colors flex items-center justify-center gap-2 cursor-pointer">Continue to Payment
                        <span class="material-symbols-outlined">arrow_forward</span>
                    </NuxtLink>
                </div>
            </section>
<!-- Sidebar Summary -->
<aside class="lg:col-span-5 space-y-6">
<div class="bg-surface-container-low border border-border-gray rounded-lg overflow-hidden sticky top-24">
<div class="bg-primary-container p-4">
<h3 class="font-label-lg text-on-primary-container">Order Summary</h3>
</div>
<div class="p-6 space-y-6">
<!-- Items List -->
<div class="space-y-4 max-h-[400px] overflow-y-auto pr-2">
<div class="flex gap-4 items-start">
<img class="w-20 h-20 object-cover rounded bg-white border border-border-gray" data-alt="High-grade industrial polyethylene storage container in a clean, professional factory setting with soft directional lighting to emphasize its durable construction and precise edges. The color palette is composed of neutral industrial grays and blues, conveying technical reliability and large-scale manufacturing quality." src="https://lh3.googleusercontent.com/aida-public/AB6AXuBm1UOS58hm1b20JH-nMbAdW2N3zD0Y4RwUwZD8kM5NSO_1GzYD6kAL5Q6cNSoxJfij00U0nHmcry6Ks6jc7QCtI6aBFuWmPacEvBozR3ziIm5wkZwBkYvAZc3pACAeFJrg6LcXss0VL6s-EOe85WaVrB6hryMc5dZnx_tMobAF0rWwGBfnMMZrbX7FnTDyHTVIifqr8EEW9cFLrCrvAHF4oSmOjPZKJux5zzQz77K0PSr3FaG4fDXKqg"/>
<div class="flex-1">
<h4 class="font-label-lg text-primary">HDPE Bulk Container 500L</h4>
<p class="text-body-sm text-on-surface-variant">Qty: 4</p>
<p class="font-bold text-on-surface mt-1">₦2,100,000.00</p>
</div>
</div>
<div class="flex gap-4 items-start border-t border-border-gray pt-4">
<img class="w-20 h-20 object-cover rounded bg-white border border-border-gray" data-alt="Commercial grade stainless steel catering prep station being inspected in a modern industrial workshop. The lighting is bright and crisp, highlighting the brushed metal surface and professional-grade finish. The overall aesthetic is one of high-end commercial efficiency and sanitary engineering standards." src="https://lh3.googleusercontent.com/aida-public/AB6AXuD7XRs8X_WITEELEWVqCP_1vQJeUWDyp_Wjy7hCr1TSJEW1hRNGyb0mP1CrVCnLBgp4Yc_7tfmj3wGMm976W8xZcYM7fMhClTEHaeWJIfG9Pa7avRI_mWYw5X-Z8E6I3srVzvQbSw0mdvqL9JdRI2G0P5xxETdkbl4Auk0Moq14i2ZAa04Gqs2Y36pXY0OAACzWzzylSJCjgc5WOK9aCUo9f3vXqHg-HD47PqSniyUfEigBw8WZKA_xDg"/>
<div class="flex-1">
<h4 class="font-label-lg text-primary">Stainless Steel Prep Station</h4>
<p class="text-body-sm text-on-surface-variant">Qty: 1</p>
<p class="font-bold text-on-surface mt-1">₦746,250.00</p>
</div>
</div>
</div>
<!-- Financials -->
<div class="border-t border-border-gray pt-6 space-y-3">
<div class="flex justify-between text-body-md"><span class="text-on-surface-variant">Subtotal</span><span>₦2,846,250.00</span></div>
<div class="flex justify-between text-body-md"><span class="text-on-surface-variant">Distribution Fee</span><span class="text-success font-medium">₦5,000.00</span></div>
<div class="flex justify-between pt-4 border-t border-border-gray"><span class="text-headline-sm font-bold text-primary">Total</span><span class="text-headline-sm font-bold text-primary">₦2,851,250.00</span></div>
</div>
<!-- CTA -->
<NuxtLink to="/checkout/payment" class="hidden lg:flex w-full bg-secondary text-white py-4 rounded-lg font-label-lg hover:bg-on-secondary-fixed-variant transition-all active:scale-[0.98] items-center justify-center gap-2">
                            Continue to Payment
                            <span class="material-symbols-outlined">arrow_forward</span>
</NuxtLink>
<!-- Trust Elements -->
<div class="pt-6 border-t border-border-gray">
<div class="flex flex-wrap justify-center gap-4 opacity-70 grayscale hover:grayscale-0 transition-all"><span class="text-on-surface-variant">Subtotal</span><span>₦2,846,250.00</span></div>
<p class="text-[11px] text-center mt-4 text-on-surface-variant leading-relaxed">
                                Your transaction is secured with 256-bit SSL encryption. PolyCraft Solutions Ltd maintains strict data protection standards.
                            </p>
</div>
</div>
</div>
</aside>
</div>
</main>

    
    </div>
</template>