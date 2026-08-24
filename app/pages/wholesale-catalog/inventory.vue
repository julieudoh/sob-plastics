<script setup>
definePageMeta({
    layout: 'catalog' // Tells Nuxt to use layouts/catalog.vue instead of default.vue
})
</script>
<template>
    <main class="mt-24 pb-20">
    <!-- Hero Section -->
        <section class="max-w-max-width mx-auto px-margin-desktop py-12 flex flex-col md:flex-row items-center gap-12">
            <div class="flex-1">
                <h1 class="font-headline-lg text-headline-lg text-primary mb-4">Wholesale Product Catalog</h1>
                <p class="font-body-lg text-body-lg text-on-surface-variant mb-8 max-w-2xl leading-relaxed">
                    Nigeria's premier source for industrial-grade packaging and supplies. Supporting nationwide distribution and reliable bulk supply chains for retailers, manufacturers, and industrial partners in Lagos, OgunState and beyond.
                </p>
                <div class="flex flex-wrap gap-6">
                    <div class="flex items-center gap-2 bg-surface-container px-4 py-2 rounded-lg border border-border-gray">
                        <span class="material-symbols-outlined text-success">verified</span>
                        <span class="font-label-lg text-label-lg">SON Certified</span>
                    </div>
                    <div class="flex items-center gap-2 bg-surface-container px-4 py-2 rounded-lg border border-border-gray">
                        <span class="material-symbols-outlined text-success">inventory_2</span>
                        <span class="font-label-lg text-label-lg">In-Stock Guarantee</span>
                    </div>
                    <div class="flex items-center gap-2 bg-surface-container px-4 py-2 rounded-lg border border-border-gray">
                        <span class="material-symbols-outlined text-secondary">local_shipping</span>
                        <span class="font-label-lg text-label-lg">Next-Day Delivery: Lagos/OgunState</span>
                    </div>
                </div>
            </div>
            <div class="flex-1 w-full h-[400px] relative rounded-xl overflow-hidden border border-border-gray bg-white">
                <img class="w-full h-full object-cover" data-alt="A high-angle professional architectural photograph of a modern industrial warehouse interior in Nigeria. The space is filled with organized, high-density shelving units stocked with bulk packaging materials. The lighting is clean and cool, emphasizing a professional and efficient logistics environment. The primary colors are navy blue, industrial gray, and bright white, evoking PolyCraft Solutions' corporate identity and operational precision." src="https://lh3.googleusercontent.com/aida-public/AB6AXuAgE6CCy_9lica-4YgC6D0tCPYXh3RmRFD6GGrqZbCGRX6KeMrsM-P5SMh-TL-2XV3T0wiJvKgv2-IlbUAXze7HVKbgw7Ncwb2Y-q2Ann5WXp3ktVSc5nyxebXETNqS0baBqdFvpSLtHXil36sr3URjBjvi68Q47J_FNA9dkjkh7FtZe0kUdXEf1njACTs1erWZrhCBS0vHL2pVrbJTmKVRUW8nqpIZiDpvLB3BxohSDtXKOi807N1PboOAH95z78lEhFkMSlvgJHRX"/>
            </div>
        </section>
        <!-- Category Grid -->
        <section class="max-w-max-width mx-auto px-margin-desktop py-12">
            <div class="flex justify-between items-end mb-8">
                <div>
                    <h2 class="font-headline-md text-headline-md text-primary">Browse Categories</h2>
                    <p class="font-body-md text-body-md text-on-surface-variant">Access trade pricing for major product lines.</p>
                </div>
                <button class="text-secondary font-label-lg text-label-lg hover:underline underline-offset-4 flex items-center gap-2">
                    View Full Inventory 
                    <span class="material-symbols-outlined text-sm">arrow_forward</span>
                </button>
            </div>
            <div class="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-gutter">
                <!-- Category 1 -->
                <div class="industrial-card bg-white border border-border-gray p-6 flex flex-col h-full rounded-lg">
                    <div class="bg-primary-fixed w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                        <span class="material-symbols-outlined text-primary">layers</span>
                    </div>
                    <h3 class="font-headline-sm text-headline-sm text-primary mb-2">Polythene Films</h3>
                    <p class="font-body-sm text-body-sm text-on-surface-variant mb-6 flex-grow">Heavy-duty industrial films for manufacturing and logistics.</p>
                    <div class="mt-auto">
                        <div class="text-label-md font-label-md text-on-surface-variant uppercase mb-1">Starting From</div>
                        <div class="text-headline-sm font-headline-sm text-primary mb-4">₦145,000 
                            <span class="text-body-sm font-normal text-on-surface-variant">/ Roll</span>
                        </div>
                        <NuxtLink class="text-secondary font-label-lg text-label-lg hover:underline inline-flex items-center gap-1" to="/wholesale-catalog/categories/polythene-film">View Category 
                            <span class="material-symbols-outlined text-xs">open_in_new</span>
                        </NuxtLink>
                    </div>
                </div>
                <!-- Category 2 -->
                <div class="industrial-card bg-white border border-border-gray p-6 flex flex-col h-full rounded-lg">
                    <div class="bg-primary-fixed w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                        <span class="material-symbols-outlined text-primary">shopping_bag</span>
                    </div>
                    <h3 class="font-headline-sm text-headline-sm text-primary mb-2">Wholesale Bags</h3>
                    <p class="font-body-sm text-body-sm text-on-surface-variant mb-6 flex-grow">Custom and generic poly bags for retail and heavy-duty use.</p>
                    <div class="mt-auto">
                        <div class="text-label-md font-label-md text-on-surface-variant uppercase mb-1">
                            Starting From
                        </div>
                        <div class="text-headline-sm font-headline-sm text-primary mb-4">₦12,500 
                            <span class="text-body-sm font-normal text-on-surface-variant">/ Bale</span>
                        </div>
                        <a class="text-secondary font-label-lg text-label-lg hover:underline inline-flex items-center gap-1" href="#">View Category 
                            <span class="material-symbols-outlined text-xs">open_in_new</span>
                        </a>
                    </div>
                </div>
                <!-- Category 3 -->
                <div class="industrial-card bg-white border border-border-gray p-6 flex flex-col h-full rounded-lg">
                    <div class="bg-primary-fixed w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                        <span class="material-symbols-outlined text-primary">lunch_dining</span>
                    </div>
                    <h3 class="font-headline-sm text-headline-sm text-primary mb-2">Food Containers</h3>
                    <p class="font-body-sm text-body-sm text-on-surface-variant mb-6 flex-grow">Microwave-safe and freezer-safe industrial food packaging.</p>
                    <div class="mt-auto">
                        <div class="text-label-md font-label-md text-on-surface-variant uppercase mb-1">Starting From</div>
                        <div class="text-headline-sm font-headline-sm text-primary mb-4">₦45,000 
                            <span class="text-body-sm font-normal text-on-surface-variant">/ Carton</span>
                        </div>
                        <a class="text-secondary font-label-lg text-label-lg hover:underline inline-flex items-center gap-1" href="#">View Category 
                            <span class="material-symbols-outlined text-xs">open_in_new</span>
                        </a>
                    </div>
                </div>
                <!-- Category 4 -->
                <div class="industrial-card bg-white border border-border-gray p-6 flex flex-col h-full rounded-lg">
                    <div class="bg-primary-fixed w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                        <span class="material-symbols-outlined text-primary">flatware</span>
                    </div>
                    <h3 class="font-headline-sm text-headline-sm text-primary mb-2">Catering Disposables</h3>
                    <p class="font-body-sm text-body-sm text-on-surface-variant mb-6 flex-grow">Bulk cutlery, plates, and professional catering sets.</p>
                    <div class="mt-auto">
                        <div class="text-label-md font-label-md text-on-surface-variant uppercase mb-1">Starting From</div>
                        <div class="text-headline-sm font-headline-sm text-primary mb-4">₦18,000 <span class="text-body-sm font-normal text-on-surface-variant">/ Box</span></div>
                        <a class="text-secondary font-label-lg text-label-lg hover:underline inline-flex items-center gap-1" href="#">View Category <span class="material-symbols-outlined text-xs">open_in_new</span></a>
                    </div>
                </div>
                <!-- Category 5 -->
                <div class="industrial-card bg-white border border-border-gray p-6 flex flex-col h-full rounded-lg">
                    <div class="bg-primary-fixed w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                        <span class="material-symbols-outlined text-primary">cleaning_services</span>
                    </div>
                    <h3 class="font-headline-sm text-headline-sm text-primary mb-2">Catering Distribution</h3>
                    <p class="font-body-sm text-body-sm text-on-surface-variant mb-6 flex-grow">Large scale appliances and stainless steel preparation stations for wholesale buyers.</p>
                    <div class="mt-auto">
                        <div class="text-label-md font-label-md text-on-surface-variant uppercase mb-1">Starting From</div>
                        <div class="text-headline-sm font-headline-sm text-primary mb-4">₦62,000 <span class="text-body-sm font-normal text-on-surface-variant">/ Kit</span></div>
                        <a class="text-secondary font-label-lg text-label-lg hover:underline inline-flex items-center gap-1" href="#">View Category 
                            <span class="material-symbols-outlined text-xs">open_in_new</span>
                        </a>
                    </div>
                </div>
            </div>
        </section>
        <!-- Quick Order Section -->
        <section class="max-w-max-width mx-auto px-margin-desktop py-12">
            <div class="bg-primary-container text-on-primary-container rounded-xl p-10 flex flex-col lg:flex-row gap-12 border border-primary">
                <div class="flex-1">
                    <h2 class="font-headline-lg text-headline-lg text-white mb-4">Quick Order Portal</h2>
                    <p class="font-body-md text-body-md text-on-primary-container mb-6">
                        Know exactly what you need? Skip the browsing and enter your SKUs directly to build your wholesale order instantly.
                    </p>
                    <ul class="space-y-3">
                        <li class="flex items-center gap-3">
                            <span class="material-symbols-outlined text-secondary-container">check_circle</span>
                            <span class="font-label-lg text-label-lg">Live Inventory Validation</span>
                        </li>
                        <li class="flex items-center gap-3">
                            <span class="material-symbols-outlined text-secondary-container">check_circle</span>
                            <span class="font-label-lg text-label-lg">Volume Discount Applied Automatically</span>
                        </li>
                        <li class="flex items-center gap-3">
                            <span class="material-symbols-outlined text-secondary-container">check_circle</span>
                            <span class="font-label-lg text-label-lg">Instant Pro-Forma Invoice Generation</span>
                        </li>
                    </ul>
                </div>
                <div class="flex-[1.5] bg-white rounded-lg p-8 shadow-lg">
                    <div class="mb-4 flex gap-4 text-primary font-label-lg text-label-lg">
                        <div class="flex-[2]">SKU Number</div>
                        <div class="flex-1">Quantity</div>
                        <div class="w-12"></div>
                    </div>
                    <div class="space-y-4 mb-6" id="quick-order-rows">
                        <!-- Row 1 -->
                        <div class="flex gap-4 items-center">
                            <input class="flex-[2] bg-surface-container-low border border-border-gray rounded px-4 py-3 text-on-surface focus:border-secondary outline-none font-label-lg" placeholder="e.g. PC-FILM-500" type="text">
                            <input class="flex-1 bg-surface-container-low border border-border-gray rounded px-4 py-3 text-on-surface focus:border-secondary outline-none font-label-lg" min="1" type="number" value="1">
                            <button class="text-on-surface-variant hover:text-error transition-colors p-1">
                                <span class="material-symbols-outlined">delete</span>
                            </button>
                        </div>
                        <!-- Row 2 -->
                        <div class="flex gap-4 items-center">
                            <input class="flex-[2] bg-surface-container-low border border-border-gray rounded px-4 py-3 text-on-surface focus:border-secondary outline-none font-label-lg" placeholder="e.g. PC-BAG-HD" type="text">
                            <input class="flex-1 bg-surface-container-low border border-border-gray rounded px-4 py-3 text-on-surface focus:border-secondary outline-none font-label-lg" min="1" type="number" value="5">
                            <button class="text-on-surface-variant hover:text-error transition-colors p-1">
                                <span class="material-symbols-outlined">delete</span>
                            </button>
                        </div>
                    </div>
                    <div class="flex justify-between items-center">
                        <button class="text-secondary font-label-lg text-label-lg flex items-center gap-2 hover:opacity-80 transition-opacity" onclick="addRow()">
                            <span class="material-symbols-outlined">add_circle</span> Add Another Item
                        </button>
                        <button class="bg-[#005db7] text-white px-8 py-3 rounded-[6px] font-headline-sm text-headline-sm hover:bg-primary transition-colors">
                            Add to Wholesale Cart
                        </button>
                    </div>
                </div>
            </div>
        </section>
        <!-- Trust & Logistics Section -->
        <section class="max-w-max-width mx-auto px-margin-desktop py-12">
            <div class="grid grid-cols-1 md:grid-cols-2 gap-gutter">
                <div class="bg-white border border-border-gray p-8 rounded-lg">
                    <h3 class="font-headline-sm text-headline-sm text-primary mb-4">Enterprise Logistics</h3>
                    <div class="space-y-6">
                        <div class="flex gap-4">
                            <span class="material-symbols-outlined text-secondary text-3xl">local_shipping</span>
                            <div>
                                <p class="font-label-lg text-label-lg text-primary">Regional Distribution Centers</p>
                                <p class="font-body-sm text-body-sm text-on-surface-variant">We maintain major hubs in Lagos, and OgunState also ensure rapid fulfillment across all 36 states.</p>
                            </div>
                        </div>
                        <div class="flex gap-4">
                            <span class="material-symbols-outlined text-secondary text-3xl">precision_manufacturing</span>
                            <div>
                                <p class="font-label-lg text-label-lg text-primary">Custom Manufacturing</p>
                                <p class="font-body-sm text-body-sm text-on-surface-variant">
                                    Bulk orders over 5,000 units qualify for custom branding and specification adjustments at no extra engineering cost.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="bg-surface-container border border-border-gray p-8 rounded-lg flex flex-col justify-center text-center">
                    <div class="inline-flex items-center justify-center gap-4 mb-6">
                        <div class="w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-sm border border-border-gray">
                            <span class="material-symbols-outlined text-success text-4xl" style="font-variation-settings: 'FILL' 1;">verified</span>
                        </div>
                        <div class="text-left">
                            <div class="text-headline-md font-headline-md text-primary leading-tight">SON Certified</div>
                            <div class="text-label-md font-label-md text-on-surface-variant uppercase">Quality Standard Approved</div>
                        </div>
                    </div>
                    <p class="font-body-md text-body-md text-on-surface-variant max-w-sm mx-auto mb-6">
                        Every batch of BleSolex PolyCraft products meet Standards Organisation of Nigeria (SON) industrial requirements.
                    </p>
                </div>
            </div>
        </section>
    </main>
</template>