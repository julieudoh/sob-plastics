<template>
  <div>
    <!-- Hero Section -->
    <section class="relative h-150 flex items-center overflow-hidden bg-primary-container">
        <NuxtImg class="absolute inset-0 w-full h-full object-cover opacity-60 mix-blend-overlay" src="/images/banner-plastic-image.jfif" alt="A wide angle shot of a plastic shelf" />
        <div class="relative z-10 w-full max-w-max-width mx-auto px-margin-desktop">
        <div class="max-w-2xl">
            <h1
                class="text-on-primary font-headline-lg text-headline-lg mb-6 leading-tight">
                Nigeria's Leading Wholesale Industrial Plastics &amp; Catering Supplier
            </h1>
            <p 
                class="text-on-primary-container font-body-lg text-body-lg mb-8">
                    Authoritative distribution solutions for procurement professionals. Technical specs, bulk tiered pricing, and certified logistics for nationwide supply chains.</p>
            <div class="flex flex-wrap gap-4">
                <NuxtLink to="/wholesale-catalog/inventory">
                    <button class="bg-secondary text-on-secondary px-8 py-4 rounded-lg font-label-lg hover:bg-secondary/90 transition-all flex items-center gap-2 cursor-pointer">
                            View Wholesale Catalog
                        <span class="material-symbols-outlined">
                            arrow_forward
                        </span>
                    </button>
                </NuxtLink>
                <NuxtLink to="/auth/register">
                    <button class="border-2 border-on-primary text-on-primary px-8 py-4 rounded-lg font-label-lg hover:bg-on-primary hover:text-primary-container transition-all cursor-pointer">
                            Register for Wholesale Account
                    </button>
                </NuxtLink>
            </div>
        </div>
    </div>
    </section>

<!-- Trust Bar -->
   <section class="bg-surface-container-lowest border-b border-border-gray py-8">
        <div class="max-w-max-width mx-auto px-margin-desktop">
            <div class="grid grid-cols-2 md:grid-cols-4 gap-gutter">
                <div class="flex items-center gap-4 group">
                    <div class="w-12 h-12 rounded-full bg-secondary-container/20 flex items-center justify-center text-secondary">
                        <span class="material-symbols-outlined">local_shipping</span>
                    </div>
                    <div>
                        <p class="font-label-lg text-secondary">Nationwide Delivery</p>
                        <p class="text-body-sm text-on-surface-variant">
                            Lagos, OgunState
                        </p>
                    </div>
                </div>
                <div class="flex items-center gap-4 group">
                    <div class="w-12 h-12 rounded-full bg-secondary-container/20 flex items-center justify-center text-secondary">
                        <span class="material-symbols-outlined">payments</span>
                    </div>
                    <div>
                        <p class="font-label-lg text-secondary">Trade Supply</p>
                        <p class="text-body-sm text-on-surface-variant">
                            Tiered savings for retailers
                        </p>
                    </div>
                </div>
                <div class="flex items-center gap-4 group">
                    <div class="w-12 h-12 rounded-full bg-secondary-container/20 flex items-center justify-center text-secondary">
                        <span class="material-symbols-outlined">verified</span>
                    </div>
                    <div>
                        <p class="font-label-lg text-secondary"> Quality Certified</p>
                        <p class="text-body-sm text-on-surface-variant">
                            SON standards guaranteed
                        </p>
                    </div>
                </div>
                <div class="flex items-center gap-4 group">
                    <div class="w-12 h-12 rounded-full bg-secondary-container/20 flex items-center justify-center text-secondary">
                        <span class="material-symbols-outlined">inventory_2</span>
                    </div>
                    <div>
                        <p class="font-label-lg text-secondary">Wholesale Inventory</p>
                        <p class="text-body-sm text-on-surface-variant">
                            10,000+ Products in stock
                        </p>
                    </div>
                </div>
            </div>
        </div>
   </section>
<!-- Category Grid -->
    <section class="py-20 bg-background">
        <div class="max-w-max-width mx-auto px-margin-desktop">
            <h2 class="text-headline-md font-headline-md text-primary mb-12">
                Wholesale Categories
            </h2>

            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

            <!-- Tile 1 -->
                <div class="group relative overflow-hidden rounded-lg border border-border-gray bg-surface-container-lowest transition-all hover:shadow-lg">
                    <div class="aspect-video relative overflow-hidden">
                        <NuxtImg class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" alt="Close-up of industrial polythene film rolls" src="/images/polythene-film.jfif" />
                    </div>
                    <div class="p-6">
                        <h3 class="text-headline-sm font-headline-sm mb-2">Polythene Films</h3>
                        <p class="text-body-sm text-on-surface-variant mb-4">
                            Trade supply shrink wrap and LDPE technical films for packaging.
                        </p>
                        <NuxtLink 
                            class="text-secondary font-label-lg flex items-center gap-2 group-hover:gap-3 transition-all" 
                            to="/wholesale-catalog/categories/polythene-film">
                                Explore Range 
                            <span class="material-symbols-outlined text-sm">arrow_forward</span>
                        </NuxtLink>
                    </div>
                </div>
            <!-- Tile 2 -->
                <div class="group relative overflow-hidden rounded-lg border border-border-gray bg-surface-container-lowest transition-all hover:shadow-lg">
                    <div class="aspect-video relative overflow-hidden">
                        <NuxtImg class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" alt="Heavy-duty industrial bags" src="/images/heavy-duty-bag.jfif" />
                    </div>
                    <div class="p-6">
                        <h3 class="text-headline-sm font-headline-sm mb-2">Heavy-Duty Bags</h3>
                        <p class="text-body-sm text-on-surface-variant mb-4">
                            Rubbish sacks, aggregate bags, and puncture-resistant liners for distribution.
                        </p>
                        <a class="text-secondary font-label-lg flex items-center gap-2 group-hover:gap-3 transition-all" href="#">
                            Explore Range 
                            <span class="material-symbols-outlined text-sm">arrow_forward
                            </span>
                        </a>
                    </div>
                </div>
                <!-- Tile 3 -->
                <div class="group relative overflow-hidden rounded-lg border border-border-gray bg-surface-container-lowest transition-all hover:shadow-lg">
                    <div class="aspect-video relative overflow-hidden">
                        <NuxtImg class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" alt="Commercial pallet wrap being applied by an automated machine" src="/images/pallet-wrap.jfif" />
                    </div>
                    <div class="p-6">
                        <h3 class="text-headline-sm font-headline-sm mb-2">Pallet Wrap</h3>
                        <p class="text-body-sm text-on-surface-variant mb-4">
                        Hand and machine stretch wrap with high-yield performance for logistics hubs.
                        </p>
                        <a class="text-secondary font-label-lg flex items-center gap-2 group-hover:gap-3 transition-all" href="#">Explore Range 
                            <span class="material-symbols-outlined text-sm">
                            arrow_forward
                            </span>
                        </a>
                    </div>
                </div>

                <!-- Tile 4 -->
                <div class="group relative overflow-hidden rounded-lg border border-border-gray bg-surface-container-lowest transition-all hover:shadow-lg">
                    <div class="aspect-video relative overflow-hidden">
                        <NuxtImg class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" alt="Sleek, stackable food storage containers in a professional commercial kitchen" src="/images/food-containers.jfif" />
                    </div>
                    <div class="p-6">
                        <h3 class="text-headline-sm font-headline-sm mb-2">Food Containers</h3>
                        <p class="text-body-sm text-on-surface-variant mb-4">Bulk supply microwave and freezer-safe storage for hospitality trade.</p>
                        <a class="text-secondary font-label-lg flex items-center gap-2 group-hover:gap-3 transition-all" href="#">Explore Range 
                            <span class="material-symbols-outlined text-sm">arrow_forward</span></a>
                    </div>
                </div>
                <!-- Tile 5 -->
                <div class="group relative overflow-hidden rounded-lg border border-border-gray bg-surface-container-lowest transition-all hover:shadow-lg">
                    <div class="aspect-video relative overflow-hidden">
                        <NuxtImg class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" alt="A systematic arrangement of eco-friendly catering disposables including compostable cups and paper-based food packaging." src="/images/catering-disposables.jfif" />
                    </div>
                    <div class="p-6">
                        <h3 class="text-headline-sm font-headline-sm mb-2">Catering Disposables</h3>
                        <p class="text-body-sm text-on-surface-variant mb-4">Biodegradable and recyclable service items for large-scale industrial events.</p>
                        <a class="text-secondary font-label-lg flex items-center gap-2 group-hover:gap-3 transition-all" href="#">Explore Range 
                            <span class="material-symbols-outlined text-sm">
                            arrow_forward
                            </span>
                        </a>
                    </div>
                </div>
                <!-- Tile 6 -->
                <div class="group relative overflow-hidden rounded-lg border border-border-gray bg-surface-container-lowest transition-all hover:shadow-lg">
                    <div class="aspect-video relative overflow-hidden">
                        <NuxtImg class="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" alt="High-end stainless steel commercial kitchen equipment, including heavy-duty prep tables and industrial mixers" src="/images/catering-distribution.jfif"/>
                    </div>
                    <div class="p-6">
                        <h3 class="text-headline-sm font-headline-sm mb-2">Catering Distribution</h3>
                        <p class="text-body-sm text-on-surface-variant mb-4">Large scale appliances and stainless steel preparation stations for wholesale buyers.</p>
                        <a class="text-secondary font-label-lg flex items-center gap-2 group-hover:gap-3 transition-all" href="#">Explore Range 
                            <span class="material-symbols-outlined text-sm">arrow_forward</span>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <!-- Bulk Pricing Banner -->
    <section class="bg-on-tertiary-fixed-variant py-12 relative overflow-hidden">
        <div class="max-w-max-width mx-auto px-margin-desktop flex flex-col md:flex-row items-center justify-between gap-8 relative z-10">
            <div class="text-center md:text-left">
                <h2 class="text-headline-md font-headline-md text-tertiary-fixed mb-2">Bulk Wholesale Savings</h2>
                <p class="text-on-tertiary text-body-lg">Save up to 30% on bulk distribution orders across our entire Nigerian inventory.</p>
            </div>
            <button class="bg-tertiary-fixed text-tertiary-container px-10 py-4 rounded-lg font-label-lg hover:scale-105 transition-transform active:scale-95">
                Download Wholesale Price List (PDF)
            </button>
        </div>
        <div class="absolute inset-0 opacity-10 pointer-events-none">
            <div class="grid grid-cols-12 h-full w-full">
                <div class="border-r border-tertiary-fixed h-full"></div>
                <div class="border-r border-tertiary-fixed h-full"></div>
                <div class="border-r border-tertiary-fixed h-full"></div>
                <div class="border-r border-tertiary-fixed h-full"></div>
                <div class="border-r border-tertiary-fixed h-full"></div>
                <div class="border-r border-tertiary-fixed h-full"></div>
                <div class="border-r border-tertiary-fixed h-full"></div>
                <div class="border-r border-tertiary-fixed h-full"></div>
                <div class="border-r border-tertiary-fixed h-full"></div>
                <div class="border-r border-tertiary-fixed h-full"></div>
                <div class="border-r border-tertiary-fixed h-full"></div>
            </div>
        </div>
    </section>
    <!-- Featured Products -->
    <section class="py-20 bg-surface-container-low">
        <div class="max-w-max-width mx-auto px-margin-desktop">
            <div class="flex justify-between items-end mb-12">
                <div>
                    <h2 class="text-headline-md font-headline-md text-primary">
                        Featured Trade Products
                    </h2>
                    <p class="text-on-surface-variant text-body-md mt-2">
                        Bestselling distribution solutions for immediate dispatch across Nigeria.
                    </p>
                </div>
                <NuxtLink class="text-secondary font-label-lg border-b border-secondary pb-1 hidden md:block" to="/view-products">
                    View All Trade Products
                </NuxtLink>
            </div>
            <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-gutter">
                <!-- Product 1 -->
                <div class="bg-surface-container-lowest border border-border-gray rounded-lg p-4 group">
                    <div class="aspect-square bg-surface-container mb-4 overflow-hidden rounded">
                        <NuxtImg class="w-full h-full object-cover group-hover:scale-105 transition-transform" alt="Heavy-duty industrial roll of black stretch wrap" src="/images/products/black-stretch-wrap.jfif" />
                    </div>
                    <span class="text-[10px] font-bold uppercase tracking-wider text-secondary bg-secondary-container/10 px-2 py-1 rounded">Stock Code: PC-772</span>
                    <h4 class="font-headline-sm text-body-md mt-2 mb-1">Wholesale Black Stretch Wrap</h4>
                    <p class="text-on-surface-variant text-body-sm mb-4">500mm x 250m - 23 Micron Trade Supply Film</p>
                    <div class="flex items-center justify-between pt-4 border-t border-border-gray">
                        <div>
                            <span class="text-body-sm text-on-surface-variant">From</span>
                            <span class="text-headline-sm text-primary block">₦24,500</span>
                        </div>
                        <button class="w-10 h-10 rounded bg-primary text-on-primary flex items-center justify-center hover:bg-secondary transition-colors">
                            <span class="material-symbols-outlined">add</span>
                        </button>
                    </div>
                </div>
                <!-- Product 2 -->
                <div class="bg-surface-container-lowest border border-border-gray rounded-lg p-4 group">
                    <div class="aspect-square bg-surface-container mb-4 overflow-hidden rounded">
                        <NuxtImg class="w-full h-full object-cover group-hover:scale-105 transition-transform" alt="Clear LDPE industrial liners" src="/images/products/bin-liners.jfif" />
                        <img class="w-full h-full object-cover group-hover:scale-105 transition-transform" data-alt="Stack of clear LDPE industrial liners." src="https://lh3.googleusercontent.com/aida/AP1WRLuZgTpIkxt6cvWAqi9iuLqQmT_k5Q5JlI-vCknFM2WzkEmdEurJ6bsSJAWzycmxteS39yFqJ-3KjXjKD3NiOp1ApmJMW0d2v6fk72o-vyOGLhqSeqYGK5whwp8YwKDVEudriOv-5A55x_JAlUauAhtOURFmcMUugfSVm8PR1wwx8amuJuiK59p7NMmv4AflT_CQoM8VN4mymNZtbL2_IE96JW5t8c3Y4scX6n_ty-QTCK5YRDFjLGBOde2j">
                    </div>
                    <span class="text-[10px] font-bold uppercase tracking-wider text-success bg-success/10 px-2 py-1 rounded text-success">Stock Code: PC-102</span>
                    <h4 class="font-headline-sm text-body-md mt-2 mb-1">Clear Wholesale Bin Liners</h4>
                    <p class="text-on-surface-variant text-body-sm mb-4">Pack of 200 - 160 Gauge / 40 Micron Strength</p>
                    <div class="flex items-center justify-between pt-4 border-t border-border-gray">
                        <div>
                            <span class="text-body-sm text-on-surface-variant">From</span>
                            <span class="text-headline-sm text-primary block">₦18,900</span>
                        </div>
                        <button class="w-10 h-10 rounded bg-primary text-on-primary flex items-center justify-center hover:bg-secondary transition-colors">
                            <span class="material-symbols-outlined">add</span>
                        </button>
                    </div>
                </div>
                <!-- Product 3 -->
                <div class="bg-surface-container-lowest border border-border-gray rounded-lg p-4 group">
                    <div class="aspect-square bg-surface-container mb-4 overflow-hidden rounded">
                        <NuxtImg class="w-full h-full object-cover group-hover:scale-105 transition-transform" alt="A high-quality stainless steel food preparation table." src="/images/products/stainless-steel-prep-table.jfif" />
                    </div>
                    <span class="text-[10px] font-bold uppercase tracking-wider text-warning bg-warning/10 px-2 py-1 rounded">Stock Code: CE-901</span>
                    <h4 class="font-headline-sm text-body-md mt-2 mb-1">Stainless Steel Prep Table</h4>
                    <p class="text-on-surface-variant text-body-sm mb-4">1200mm Wide - Grade 304 Polished Steel</p>
                    <div class="flex items-center justify-between pt-4 border-t border-border-gray">
                        <div>
                            <span class="text-body-sm text-on-surface-variant">From</span>
                            <span class="text-headline-sm text-primary block">₦385,000</span>
                        </div>
                        <button class="w-10 h-10 rounded bg-primary text-on-primary flex items-center justify-center hover:bg-secondary transition-colors">
                            <span class="material-symbols-outlined">add</span>
                        </button>
                    </div>
                </div>
                <!-- Product 4 -->
                <div class="bg-surface-container-lowest border border-border-gray rounded-lg p-4 group">
                    <div class="aspect-square bg-surface-container mb-4 overflow-hidden rounded">
                        <NuxtImg class="w-full h-full object-cover group-hover:scale-105 transition-transform" alt="Bulk packs of microwave-safe food containers" src="/images/products/microwave-safe-container.jfif" />
                    </div>
                    <span class="text-[10px] font-bold uppercase tracking-wider text-secondary bg-secondary-container/10 px-2 py-1 rounded">Stock Code: CD-441</span>
                    <h4 class="font-headline-sm text-body-md mt-2 mb-1">Wholesale microwave-safe food Containers</h4>
                    <p class="text-on-surface-variant text-body-sm mb-4">Case of 500 - Includes Snap-Tight Lids</p>
                    <div class="flex items-center justify-between pt-4 border-t border-border-gray">
                        <div>
                            <span class="text-body-sm text-on-surface-variant">From</span>
                            <span class="text-headline-sm text-primary block">₦64,200</span>
                        </div>
                        <button class="w-10 h-10 rounded bg-primary text-on-primary flex items-center justify-center hover:bg-secondary transition-colors">
                            <span class="material-symbols-outlined">add</span>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <!-- Sustainability Strip -->
    <section class="bg-surface-container py-12 border-t border-b border-border-gray">
        <div class="max-w-max-width mx-auto px-margin-desktop">
            <div class="flex flex-col md:flex-row items-center justify-between gap-8">
                <div class="flex items-center gap-6">
                    <div class="w-16 h-16 bg-success/10 rounded-full flex items-center justify-center text-success">
                        <span class="material-symbols-outlined text-4xl" style="font-variation-settings: 'FILL' 1;">eco</span>
                    </div>
                    <div>
                        <h3 class="text-headline-sm font-headline-sm text-primary">PolyCraft Sustainability Commitment</h3>
                        <p class="text-body-sm text-on-surface-variant">Committed to Net Zero logistics and recyclable distribution sourcing in Nigeria by 2030.</p>
                    </div>
                </div>
                <div class="flex gap-12">
                    <div class="text-center">
                        <p class="text-headline-md font-bold text-success">92%</p>
                        <p class="text-label-md text-on-surface-variant uppercase">Recyclable Content</p>
                    </div>
                    <div class="text-center">
                        <p class="text-headline-md font-bold text-success">-24%</p>
                        <p class="text-label-md text-on-surface-variant uppercase">Carbon Footprint YOY</p>
                    </div>
                </div>
            </div>
        </div>
    </section>
  </div>
</template>