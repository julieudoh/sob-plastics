<template>
    <main class="max-w-screen mx-auto px-margin-mobile md:px-margin-desktop py-8 min-h-screen">
        <!-- max-width -->
        <!-- Page Header -->
        <div class="mb-8">
            <h1 class="text-headline-lg font-headline-lg text-primary mb-2">
                Products Catalog
            </h1>
            <p class="text-on-surface-variant text-body-md max-w-2xl">
                Browse our complete catalog of commercial plastics, catering equipment, and safety gear available across Nigeria.
            </p>
        </div>
        <div class="flex flex-col sm:flex-row gap-gutter">
            <!-- Sidebar Filters -->
            <aside class="w-100 sm:w-72 shrink-0">
                <!--  -->
                <div class="bg-white border border-border-gray p-6 rounded-lg sticky top-24">
                    <div class="flex items-center justify-between mb-6">
                        <h2 class="text-label-lg font-label-lg text-primary uppercase tracking-wider">
                            Filters
                        </h2>
                        <button class="text-secondary text-label-md font-label-md hover:underline font-semibold">
                            Clear All
                        </button>
                    </div>
                    <div class="mb-8">
                        <h3 class="text-label-md font-label-md text-on-surface mb-4">
                            Product Category
                        </h3>
                        <div class="space-y-3">
                            <label class="flex items-center gap-3 cursor-pointer group">
                                <input checked class="w-4 h-4 rounded border-border-gray text-secondary focus:ring-secondary accent-secondary" type="checkbox">
                                <span class="text-body-sm text-primary font-medium group-hover:text-secondary">
                                    All Products
                                </span>
                            </label>
                            <label class="flex items-center gap-3 cursor-pointer group">
                                <input class="w-4 h-4 rounded border-border-gray text-secondary focus:ring-secondary accent-secondary" type="checkbox">
                                <span class="text-body-sm text-on-surface-variant group-hover:text-on-surface">
                                    Industrial Plastics
                                </span>
                            </label>
                            <label class="flex items-center gap-3 cursor-pointer group">
                                <input class="w-4 h-4 rounded border-border-gray text-secondary focus:ring-secondary accent-secondary" type="checkbox">
                                <span class="text-body-sm text-on-surface-variant group-hover:text-on-surface">
                                    Catering Equipment
                                </span>
                            </label>
                            <label class="flex items-center gap-3 cursor-pointer group">
                                <input class="w-4 h-4 rounded border-border-gray text-secondary focus:ring-secondary accent-secondary" type="checkbox">
                                <span class="text-body-sm text-on-surface-variant group-hover:text-on-surface">
                                    Safety Equipment
                                </span>
                            </label>
                        </div>
                    </div>
                    <div class="mb-8">
                        <h3 class="text-label-md font-label-md text-on-surface mb-4">
                            Price Range (₦)
                        </h3>
                        <div class="space-y-4">
                            <div class="flex items-center gap-2">
                                <div class="relative flex-1">
                                    <span class="absolute left-2.5 top-1/2 -translate-y-1/2 text-body-sm text-on-surface-variant">₦
                                    </span>
                                    <input class="w-full pl-6 pr-2 py-2 border border-border-gray rounded text-body-sm font-medium focus:ring-1 focus:ring-secondary outline-none" type="text" value="0">
                                </div>
                                <span class="text-on-surface-variant">-</span>
                                <div class="relative flex-1">
                                    <span class="absolute left-2.5 top-1/2 -translate-y-1/2 text-body-sm text-on-surface-variant">₦</span>
                                    <input class="w-full pl-6 pr-2 py-2 border border-border-gray rounded text-body-sm font-medium focus:ring-1 focus:ring-secondary outline-none" type="text" value="5,000,000">
                                </div>
                            </div>
                            <input class="w-full h-1.5 bg-secondary/20 rounded-lg appearance-none cursor-pointer accent-secondary" max="5000000" min="0" type="range" value="2500000">
                        </div>
                    </div>
                    <div>
                        <h3 class="text-label-md font-label-md text-on-surface mb-4">
                            Stock Status
                        </h3>
                        <div class="space-y-3">
                            <label class="flex items-center gap-3 cursor-pointer group">
                                <input checked class="w-4 h-4 border-border-gray text-secondary focus:ring-secondary accent-secondary" name="stock_status" type="radio">
                                <span class="text-body-sm text-on-surface-variant group-hover:text-on-surface">In Stock</span>
                            </label>
                            <label class="flex items-center gap-3 cursor-pointer group">
                                <input class="w-4 h-4 border-border-gray text-secondary focus:ring-secondary accent-secondary" name="stock_status" type="radio">
                                <span class="text-body-sm text-on-surface-variant group-hover:text-on-surface">
                                    Out of Stock
                                </span>
                            </label>
                        </div>
                    </div>
                </div>
            </aside>
            <!-- Product Grid -->
            <div class="grow">
                <!-- Sorting and View Controls -->
                <div class="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6 gap-4">
                    <div>
                        <h2 class="text-headline-sm font-headline-sm font-bold text-primary">
                            All Products
                        </h2>
                        <p class="text-body-sm text-on-surface-variant">
                            Showing 
                            <span class="font-bold text-on-surface">
                                1–12
                            </span> 
                            of 
                            <span class="font-bold text-on-surface">
                                148
                            </span>
                                products
                            </p>
                        </div>
                        <div class="flex items-center gap-4 w-full sm:w-auto">
                            <div class="flex bg-surface-container-low p-1 rounded-lg border border-border-gray">
                                <button class="p-1.5 rounded-md bg-white shadow-sm text-secondary">
                                    <span class="material-symbols-outlined text-[20px]">grid_view</span>
                                </button>
                                <button class="p-1.5 rounded-md text-on-surface-variant hover:text-on-surface transition-colors">
                                    <span class="material-symbols-outlined text-[20px]">view_list</span>
                                </button>
                            </div>
                            <select class="bg-white border border-border-gray rounded-lg px-4 py-2 text-label-md font-label-md focus:ring-secondary outline-none cursor-pointer">
                                <option>Sort by: Popularity</option>
                                <option>Price: Low to High</option>
                                <option>Price: High to Low</option>
                            </select>
                        </div>
                    </div>
                    <!-- Exactly 12 Product Cards Grid (3 Columns) -->
                    <div class="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
                        <!--  -->
                        <!-- Card 1: Industrial Plastics -->
                        <div class="bg-white border border-border-gray rounded-lg overflow-hidden group hover:border-secondary hover:shadow-md transition-all flex flex-col shadow-sm">
                            <div class="relative aspect-4/3 bg-surface-container overflow-hidden">
                                <img alt="HDPE Water &amp; Chemical Storage Drums 220L" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDJmDJj_e1OnXnQjMbdm77A5DZC5FOpmAwb6elqjL9SE4LB2g4nKvUkqrt6SG74G-xU_Dbpf9yXNfqEmNYqlysb6sSCnYrmnI1H__2ZhuoIRw1rAOpQL4hCfo7XagF9a5fX3c1_HUYx_7d9EQHdOG0_WZ7cJXmEhRJklBOv0y9X1o33iYYDF8eNai1blZhrgWQAe419anOkFiOn9CH3rPC5O17lL6yLE9J0fUcLqKC1j9I40NGEU7Hxog"/>
                                <div class="absolute top-3 left-3 bg-teal-50 border border-teal-200 text-teal-700 px-2 py-1 rounded-[4px] text-[10px] font-bold uppercase tracking-wider">IN STOCK</div>
                                <div class="absolute top-3 right-3 bg-primary text-white px-2 py-1 rounded-[4px] text-[10px] font-bold uppercase tracking-wider">WHOLESALE BULK</div>
                            </div>
                            <div class="p-5 grow flex flex-col justify-between">
                                <div>
                                    <span class="inline-block px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-secondary-fixed text-on-secondary-fixed uppercase mb-2">INDUSTRIAL PLASTICS</span>
                                    <h3 class="text-headline-sm font-headline-sm text-primary mb-1.5 line-clamp-1">
                                        HDPE Water &amp; Chemical Storage Drums 220L
                                    </h3>
                                    <p class="text-body-sm text-on-surface-variant mb-3 line-clamp-2">
                                        UN-certified blow molded high density polyethylene drum with airtight dual bung caps for liquid transport.
                                    </p>
                                    <NuxtLink to="/product-detail" class="inline-flex items-center gap-1 text-secondary text-label-md font-label-md hover:underline mb-4 font-semibold" href="#">
                                        View Product Details →
                                    </NuxtLink>
                                </div>
                                <div>
                                    <div class="border-t border-border-gray pt-3 space-y-1 mb-4">
                                        <div class="flex justify-between items-baseline">
                                            <span class="text-label-md text-on-surface-variant">
                                                Unit Price
                                            </span>
                                            <span class="text-headline-sm font-bold text-primary">
                                                ₦38,000 
                                                <span class="text-label-md text-on-surface-variant font-normal">
                                                    / drum
                                                </span>
                                            </span>
                                        </div>
                                        <div class="flex justify-between items-center text-body-sm">
                                            <span class="text-on-surface-variant">
                                                Remaining
                                            </span>
                                            <span class="text-teal-700 font-medium">
                                                160 Drums in Lagos
                                            </span>
                                        </div>
                                    </div>
                                    <button class="w-full bg-primary py-2.5 rounded-md text-white font-label-lg flex items-center justify-center gap-2 hover:bg-secondary transition-colors shadow-sm">
                                        <span class="material-symbols-outlined text-[18px]">
                                            shopping_cart
                                        </span>
                                        <span>Add to Cart</span>
                                    </button>
                                </div>
                            </div>
                        </div>
                        <!-- Card 2: Catering Equipment -->
                        <div class="bg-white border border-border-gray rounded-lg overflow-hidden group hover:border-secondary hover:shadow-md transition-all flex flex-col shadow-sm">
                            <div class="relative aspect-4/3 bg-surface-container overflow-hidden">
                                <img alt="Heavy-Duty Stainless Prep Table 1200mm" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDzF5X6gLcMmlYThj6uaznswam1psFVELklpBXjLJlu8X_MigjBfsKjNEGmBOnBWywi5hjaxyH9bntjhVSCUtWkAjVBb8nJF087KEqqHxR8dmwLQ4REKF4LL6n8VCryFmVJ-wqwTsLu4woQegZwKS6XBCuH5yKIFoR-oVrHrHXIAkkiWKOJyAb0DUNiHtSRNzYDj7GotQPEjA1J1EMQpJwsn1hXcKe2axuBGknBzFpvUjjN-f-FT2q0Ew"/>
                                <div class="absolute top-3 left-3 bg-teal-50 border border-teal-200 text-teal-700 px-2 py-1 rounded-[4px] text-[10px] font-bold uppercase tracking-wider">IN STOCK</div>
                                <div class="absolute top-3 right-3 bg-warm-gold text-white px-2 py-1 rounded-[4px] text-[10px] font-bold uppercase tracking-wider">BEST SELLER</div>
                            </div>
                            <div class="p-5 flex-grow flex flex-col justify-between">
                                <div>
                                    <span class="inline-block px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-secondary-fixed text-on-secondary-fixed uppercase mb-2">
                                        CATERING EQUIPMENT
                                    </span>
                                    <h3 class="text-headline-sm font-headline-sm text-primary mb-1.5 line-clamp-1">
                                        Heavy-Duty Stainless Prep Table 1200mm
                                    </h3>
                                    <p class="text-body-sm text-on-surface-variant mb-3 line-clamp-2">
                                        Grade 304 food-service stainless steel worktop with adjustable galvanized undershelf and bullet feet.
                                    </p>
                                    <a class="inline-flex items-center gap-1 text-secondary text-label-md font-label-md hover:underline mb-4 font-semibold" href="#">View Product Details →</a>
                                </div>
                                <div>
                                    <div class="border-t border-border-gray pt-3 space-y-1 mb-4">
                                        <div class="flex justify-between items-baseline">
                                            <span class="text-label-md text-on-surface-variant">Unit Price</span>
                                            <span class="text-headline-sm font-bold text-primary">₦185,000 
                                                <span class="text-label-md text-on-surface-variant font-normal">/ unit</span>
                                            </span>
                                        </div>
                                        <div class="flex justify-between items-center text-body-sm">
                                            <span class="text-on-surface-variant">Remaining</span>
                                            <span class="text-teal-700 font-medium">45 Units in Ikeja</span>
                                        </div>
                                    </div>
                                    <button class="w-full bg-primary py-2.5 rounded-md text-white font-label-lg flex items-center justify-center gap-2 hover:bg-secondary transition-colors shadow-sm">
                                        <span class="material-symbols-outlined text-[18px]">shopping_cart</span>
                                        <span>Add to Cart</span>
                                    </button>
                                </div>
                            </div>
                        </div>
                        <!-- Card 3: Safety Equipment -->
                        <div class="bg-white border border-border-gray rounded-lg overflow-hidden group hover:border-secondary hover:shadow-md transition-all flex flex-col shadow-sm">
                            <div class="relative aspect-4/3 bg-surface-container overflow-hidden">
                                <img alt="Industrial Safety Hard Hats with 6-Pt Harness" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src="https://lh3.googleusercontent.com/aida-public/AB6AXuA1oqDsfIdJp_v-VX0EKP_ctRcFuLNaDVBWsyUNI1RddkEdb7AyP_HJHMwFf_nxbiqN1F1LrxMqvL8an7SfAr7Q18qK2Qdsdw5khopjH7rHMgbBxZQWt23-PiD2O0x4t4XMU9xQXZHtLM1B5Q4f5PAWzS0Vnj3JRyrkEZvInOh-QyI2u1hcxo-jzZtwYLD9qDJkd7EJn9eoKxofZdWp8ze_x_L6Vd3TpHQ7j1Jn-ofa4oXj-vWlFhRlUQ"/>
                                <div class="absolute top-3 left-3 bg-teal-50 border border-teal-200 text-teal-700 px-2 py-1 rounded-[4px] text-[10px] font-bold uppercase tracking-wider">IN STOCK</div>
                            </div>
                            <div class="p-5 flex-grow flex flex-col justify-between">
                                <div>
                                    <span class="inline-block px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-secondary-fixed text-on-secondary-fixed uppercase mb-2">SAFETY EQUIPMENT</span>
                                    <h3 class="text-headline-sm font-headline-sm text-primary mb-1.5 line-clamp-1">
                                        Industrial Safety Hard Hats with 6-Pt Harness
                                    </h3>
                                    <p class="text-body-sm text-on-surface-variant mb-3 line-clamp-2">
                                        EN397 compliant impact-resistant ABS shell with 6-point suspension harness and ratchet size dial.
                                    </p>
                                    <a class="inline-flex items-center gap-1 text-secondary text-label-md font-label-md hover:underline mb-4 font-semibold" href="#">View Product Details →</a>
                                </div>
                                <div>
                                    <div class="border-t border-border-gray pt-3 space-y-1 mb-4">
                                        <div class="flex justify-between items-baseline">
                                            <span class="text-label-md text-on-surface-variant">Unit Price</span>
                                            <span class="text-headline-sm font-bold text-primary">₦12,500 <span class="text-label-md text-on-surface-variant font-normal">/ unit</span>
                                        </span>
                                    </div>
                                    <div class="flex justify-between items-center text-body-sm">
                                        <span class="text-on-surface-variant">Remaining</span>
                                        <span class="text-teal-700 font-medium">650 Units in Lagos</span>
                                    </div>
                                </div>
                                <button class="w-full bg-primary py-2.5 rounded-md text-white font-label-lg flex items-center justify-center gap-2 hover:bg-secondary transition-colors shadow-sm">
                                    <span class="material-symbols-outlined text-[18px]">shopping_cart</span>
                                    <span>Add to Cart</span>
                                </button>
                            </div>
                        </div>
                    </div>
                    <!-- Card 4: Industrial Plastics -->
                    <div class="bg-white border border-border-gray rounded-lg overflow-hidden group hover:border-secondary hover:shadow-md transition-all flex flex-col shadow-sm">
                        <div class="relative aspect-4/3 bg-surface-container overflow-hidden">
                            <img alt="Industrial Pallet Stretch Film Rolls 500mm" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCLQ98ycUx7VqxubzMdas356Tyc4chG0HVKSRGszzOQw9FbPpslI0ImI2lMXAN3iwpK8wX65FvkiQEcnwJ6UWIxMOtGOgBrFxjAfGk5sneW23PUYi4vs0kR7UaSsJymgfC4KGafVHc_-Jns9z_UB4NlBOB3lt0dOsnbpxhX8lSc9ofNyyte4QDoEbQ_yZwTRI6Dsnax2Khv_xVUxICcNStN_1I7vZOUo9SBEOf9CVJBDyT9wbBcAJm3iA"/>
                            <div class="absolute top-3 left-3 bg-teal-50 border border-teal-200 text-teal-700 px-2 py-1 rounded-[4px] text-[10px] font-bold uppercase tracking-wider">IN STOCK</div>
                        </div>
                        <div class="p-5 grow flex flex-col justify-between">
                            <div>
                                <span class="inline-block px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-secondary-fixed text-on-secondary-fixed uppercase mb-2">INDUSTRIAL PLASTICS</span>
                                <h3 class="text-headline-sm font-headline-sm text-primary mb-1.5 line-clamp-1">
                                    Industrial Pallet Stretch Film Rolls 500mm
                                </h3>
                                <p class="text-body-sm text-on-surface-variant mb-3 line-clamp-2">
                                    Cast co-extruded LLDPE pallet stretch film with superior puncture resistance and cling for warehouse logistics.
                                </p>
                                <a class="inline-flex items-center gap-1 text-secondary text-label-md font-label-md hover:underline mb-4 font-semibold" href="#">View Product Details →</a>
                            </div>
                            <div>
                                <div class="border-t border-border-gray pt-3 space-y-1 mb-4">
                                    <div class="flex justify-between items-baseline">
                                        <span class="text-label-md text-on-surface-variant">Unit Price</span>
                                        <span class="text-headline-sm font-bold text-primary">₦14,500 
                                            <span class="text-label-md text-on-surface-variant font-normal">/ roll</span>
                                        </span>
                                    </div>
                                    <div class="flex justify-between items-center text-body-sm">
                                        <span class="text-on-surface-variant">Remaining</span>
                                        <span class="text-teal-700 font-medium">480 Rolls in stock</span>
                                    </div>
                                </div>
                                <button class="w-full bg-primary py-2.5 rounded-md text-white font-label-lg flex items-center justify-center gap-2 hover:bg-secondary transition-colors shadow-sm">
                                    <span class="material-symbols-outlined text-[18px]">shopping_cart</span>
                                    <span>Add to Cart</span>
                                </button>
                            </div>
                        </div>
                    </div>
                    <!-- Card 5: Catering Equipment -->
                    <div class="bg-white border border-border-gray rounded-lg overflow-hidden group hover:border-secondary hover:shadow-md transition-all flex flex-col shadow-sm">
                        <div class="relative aspect-4/3 bg-surface-container overflow-hidden">
                            <img alt="Commercial Bain Marie 4-Pan Buffet Station" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDfcNolEUisl7mvxeU-UyqWSo3b2lMqeruIj3M8QOmvOz7x1HKl4SHgFp0t1TwIZrmrhG68Vg-uAgfPKPVIRUvHB2RqHpDlJZZi70ARTG18LTGo25ESGp1O3ZFjISm8TvhEGoJcKSWMZTaBmPm05KiOlF1F_qK3f2enAf_vSkYc45E4pabmfJHnwIQl6DQ2rT5UHACU0VBnonBI8azSS6uTvDL43Dj67iefpnntuCj1IXBIxDL7VZE0GQ"/>
                            <div class="absolute top-3 left-3 bg-teal-50 border border-teal-200 text-teal-700 px-2 py-1 rounded-[4px] text-[10px] font-bold uppercase tracking-wider">IN STOCK</div>
                            <div class="absolute top-3 right-3 bg-primary text-white px-2 py-1 rounded-[4px] text-[10px] font-bold uppercase tracking-wider">WHOLESALE BULK</div>
                        </div>
                        <div class="p-5 grow flex flex-col justify-between">
                            <div>
                                <span class="inline-block px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-secondary-fixed text-on-secondary-fixed uppercase mb-2">CATERING EQUIPMENT</span>
                                <h3 class="text-headline-sm font-headline-sm text-primary mb-1.5 line-clamp-1">
                                    Commercial Bain Marie 4-Pan Buffet Station
                                </h3>
                                <p class="text-body-sm text-on-surface-variant mb-3 line-clamp-2">
                                    Electric wet-heat food warmer constructed from stainless steel with 4 deep 1/2 size pans and transparent lids.
                                </p>
                                <a class="inline-flex items-center gap-1 text-secondary text-label-md font-label-md hover:underline mb-4 font-semibold" href="#">View Product Details →</a>
                            </div>
                            <div>
                                <div class="border-t border-border-gray pt-3 space-y-1 mb-4">
                                    <div class="flex justify-between items-baseline">
                                        <span class="text-label-md text-on-surface-variant">Unit Price</span>
                                        <span class="text-headline-sm font-bold text-primary">₦340,000 
                                            <span class="text-label-md text-on-surface-variant font-normal">/ unit</span>
                                        </span>
                                    </div>
                                    <div class="flex justify-between items-center text-body-sm">
                                        <span class="text-on-surface-variant">Remaining</span>
                                        <span class="text-teal-700 font-medium">18 Units in Lagos</span>
                                    </div>
                                </div>
                                <button class="w-full bg-primary py-2.5 rounded-md text-white font-label-lg flex items-center justify-center gap-2 hover:bg-secondary transition-colors shadow-sm">
                                    <span class="material-symbols-outlined text-[18px]">shopping_cart</span>
                                    <span>Add to Cart</span>
                                </button>
                            </div>
                        </div>
                    </div>
                    <!-- Card 6: Safety Equipment -->
                    <div class="bg-white border border-border-gray rounded-lg overflow-hidden group hover:border-secondary hover:shadow-md transition-all flex flex-col shadow-sm">
                        <div class="relative aspect-4/3 bg-surface-container overflow-hidden">
                            <img alt="High-Visibility Reflective Safety Vests (Pack of 10)" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBfGfjAI3pdtfAnPLzdkno4Jsci2hWjQcwM9tIa7odn-6eauMyMMUHceu12Fe8lxoVoi6ii1cA3PZYM1ZXvWI3rr2qpytb03ofZ2KN0WWrEFNj5_Edt0KnUOg3BXF8RA7Urh4ITnDHxHeyoXrAnelG7FFjIiGY2lClM8012MJxm1O11MgjaUIBdotH8GlWZfB0VUx2KCEQnmRVpPgHcrTbDxLj_L8l-5ajdGO5253tZOTOA9d9nMZl7Iw"/>
                            <div class="absolute top-3 left-3 bg-teal-50 border border-teal-200 text-teal-700 px-2 py-1 rounded-[4px] text-[10px] font-bold uppercase tracking-wider">IN STOCK</div>
                        </div>
                        <div class="p-5 grow flex flex-col justify-between">
                            <div>
                                <span class="inline-block px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-secondary-fixed text-on-secondary-fixed uppercase mb-2">SAFETY EQUIPMENT</span>
                                <h3 class="text-headline-sm font-headline-sm text-primary mb-1.5 line-clamp-1">
                                    High-Visibility Reflective Safety Vests (Pack of 10)
                                </h3>
                                <p class="text-body-sm text-on-surface-variant mb-3 line-clamp-2">
                                    ANSI Class 2 certified breathable fluorescent safety vests with multi-pocket storage and heavy zipper.
                                </p>
                                <a class="inline-flex items-center gap-1 text-secondary text-label-md font-label-md hover:underline mb-4 font-semibold" href="#">View Product Details →</a>
                            </div>
                            <div>
                                <div class="border-t border-border-gray pt-3 space-y-1 mb-4">
                                    <div class="flex justify-between items-baseline">
                                        <span class="text-label-md text-on-surface-variant">Unit Price</span>
                                        <span class="text-headline-sm font-bold text-primary">₦28,000 
                                            <span class="text-label-md text-on-surface-variant font-normal">/ pack</span>
                                        </span>
                                    </div>
                                    <div class="flex justify-between items-center text-body-sm">
                                        <span class="text-on-surface-variant">Remaining</span>
                                        <span class="text-teal-700 font-medium">1,800 Units remaining</span>
                                    </div>
                                </div>
                                <button class="w-full bg-primary py-2.5 rounded-md text-white font-label-lg flex items-center justify-center gap-2 hover:bg-secondary transition-colors shadow-sm">
                                    <span class="material-symbols-outlined text-[18px]">shopping_cart</span>
                                    <span>Add to Cart</span>
                                </button>
                            </div>
                        </div>
                    </div>
                    <!-- Card 7: Industrial Plastics -->
                    <div class="bg-white border border-border-gray rounded-lg overflow-hidden group hover:border-secondary hover:shadow-md transition-all flex flex-col shadow-sm">
                        <div class="relative aspect-4/3 bg-surface-container overflow-hidden">
                            <img alt="Stackable Food-Grade Poly Storage Tubs 50L" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCz1QXpP9cH8r06XoDF2SKLUxYpOcXwjWmn8I1dyO9mC8BWPGifRRfDNjszVXqSlwjna_zkI78B_RD8br1thRbJT_j7s4ddjsBOey_yZJsMD-l3J0qyohe5Y6qrzE0sD_rhqUsgQrrSvE7RSSpI5Qcv1LEifAkAsnZJmqhmmSTKkB_y2RaiKqeb_qoMP_eFfCMg3dctpizszdhk1V2zlGfC7avHQvOuVRFxaQMqJ8CY9kaRfj5fVAL5ig"/>
                            <div class="absolute top-3 left-3 bg-teal-50 border border-teal-200 text-teal-700 px-2 py-1 rounded-[4px] text-[10px] font-bold uppercase tracking-wider">IN STOCK</div>
                        </div>
                        <div class="p-5 grow flex flex-col justify-between">
                            <div>
                                <span class="inline-block px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-secondary-fixed text-on-secondary-fixed uppercase mb-2">INDUSTRIAL PLASTICS</span>
                                <h3 class="text-headline-sm font-headline-sm text-primary mb-1.5 line-clamp-1">Stackable Food-Grade Poly Storage Tubs 50L</h3>
                                <p class="text-body-sm text-on-surface-variant mb-3 line-clamp-2">Airtight polypropylene containers suitable for food handling, agricultural produce, and commercial storage.</p>
                                <a class="inline-flex items-center gap-1 text-secondary text-label-md font-label-md hover:underline mb-4 font-semibold" href="#">View Product Details →</a>
                            </div>
                            <div>
                                <div class="border-t border-border-gray pt-3 space-y-1 mb-4">
                                    <div class="flex justify-between items-baseline">
                                        <span class="text-label-md text-on-surface-variant">Unit Price</span>
                                        <span class="text-headline-sm font-bold text-primary">₦8,500 
                                            <span class="text-label-md text-on-surface-variant font-normal">/ unit</span>
                                        </span>
                                    </div>
                                    <div class="flex justify-between items-center text-body-sm">
                                        <span class="text-on-surface-variant">Remaining</span>
                                        <span class="text-teal-700 font-medium">3,400 Units in Ikeja</span>
                                    </div>
                                </div>
                                <button class="w-full bg-primary py-2.5 rounded-md text-white font-label-lg flex items-center justify-center gap-2 hover:bg-secondary transition-colors shadow-sm">
                                    <span class="material-symbols-outlined text-[18px]">shopping_cart</span>
                                    <span>Add to Cart</span>
                                </button>
                            </div>
                        </div>
                    </div>
                    <!-- Card 8: Catering Equipment -->
                    <div class="bg-white border border-border-gray rounded-lg overflow-hidden group hover:border-secondary hover:shadow-md transition-all flex flex-col shadow-sm">
                        <div class="relative aspect-4/3 bg-surface-container overflow-hidden">
                            <img alt="Stainless Steel Double Tank Commercial Fryer 16L" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBkjK4ojSkcRZ3wE7K4702YdBDNjjvFu2jkckomhRK6VclB9OKNkNL6txW9quqd9pS8hi4ofeIkGS8WQJ0DJ5qAyeeEoXw45i8WZP6W_3IaJQNIWuNXXdV43XGIOPbfsU9Pb9mk3Uyr1aXxZa36zd0QZNaBZ4bv8uQuR5zMpuYelkjd3tcUCN3eSuNBHOQe2s9ytrphhufZwBjLC-hSn5C668XOMonHqaaun7NS8jb2Aqv4GyEdln5geQ"/>
                            <div class="absolute top-3 left-3 bg-red-50 border border-red-200 text-error px-2 py-1 rounded-[4px] text-[10px] font-bold uppercase tracking-wider">OUT OF STOCK</div>
                        </div>
                        <div class="p-5 grow flex flex-col justify-between">
                            <div>
                                <span class="inline-block px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-secondary-fixed text-on-secondary-fixed uppercase mb-2">CATERING EQUIPMENT</span>
                                <h3 class="text-headline-sm font-headline-sm text-primary mb-1.5 line-clamp-1">Stainless Steel Double Tank Commercial Fryer 16L</h3>
                                <p class="text-body-sm text-on-surface-variant mb-3 line-clamp-2">Dual tank commercial deep fryer with independent thermostats and high-efficiency immersion heating elements.</p>
                                <a class="inline-flex items-center gap-1 text-secondary text-label-md font-label-md hover:underline mb-4 font-semibold" href="#">View Product Details →</a>
                            </div>
                            <div>
                                <div class="border-t border-border-gray pt-3 space-y-1 mb-4">
                                    <div class="flex justify-between items-baseline">
                                        <span class="text-label-md text-on-surface-variant">Unit Price</span>
                                        <span class="text-headline-sm font-bold text-primary">₦245,000 <span class="text-label-md text-on-surface-variant font-normal">/ unit</span></span>
                                    </div>
                                    <div class="flex justify-between items-center text-body-sm">
                                        <span class="text-on-surface-variant">Remaining</span>
                                        <span class="text-error font-medium">0 Units remaining</span>
                                    </div>
                                </div>
                                <button class="w-full bg-surface-container-high border border-border-gray py-2.5 rounded-md text-primary font-label-lg flex items-center justify-center gap-2 hover:bg-surface-container-highest transition-colors shadow-sm">
                                    <span class="material-symbols-outlined text-[18px]">notifications</span>
                                    <span>Notify When In Stock</span>
                                </button>
                            </div>
                        </div>
                    </div>
                    <!-- Card 9: Safety Equipment -->
                    <div class="bg-white border border-border-gray rounded-lg overflow-hidden group hover:border-secondary hover:shadow-md transition-all flex flex-col shadow-sm">
                        <div class="relative aspect-4/3 bg-surface-container overflow-hidden">
                            <img alt="Nitrile Industrial Chemical Gloves (Box of 100)" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAIYV1zexcBk3QPuyLlQL4JRBEnBKAAdelYVgKWXh4MSveWb3p8gOB9mS_uomWPsr9H25hAP_kGi7iWphjrtAq4_osRQknbGg6t4inNsWwhyg3pKNDJ64Ih9RrDWZ1YbmRZLHHqAyto7NgRgo3m_LaXRqtjYeMKDtslBatgoeEGdSRiDb6HFAIdJWy3yRFdYrSY0nflu8St5xT1hPigKV7wpvGgioxLUpR61uad5pmy3ERr1pVk1xpyIA"/>
                            <div class="absolute top-3 left-3 bg-teal-50 border border-teal-200 text-teal-700 px-2 py-1 rounded-[4px] text-[10px] font-bold uppercase tracking-wider">IN STOCK</div>
                        </div>
                        <div class="p-5 grow flex flex-col justify-between">
                            <div>
                                <span class="inline-block px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-secondary-fixed text-on-secondary-fixed uppercase mb-2">SAFETY EQUIPMENT</span>
                                <h3 class="text-headline-sm font-headline-sm text-primary mb-1.5 line-clamp-1">Nitrile Industrial Chemical Gloves (Box of 100)</h3>
                                <p class="text-body-sm text-on-surface-variant mb-3 line-clamp-2">Heavy-duty powder-free chemical and puncture resistant nitrile gloves for food prep and industrial cleaning.</p>
                                <a class="inline-flex items-center gap-1 text-secondary text-label-md font-label-md hover:underline mb-4 font-semibold" href="#">View Product Details →</a>
                            </div>
                            <div>
                                <div class="border-t border-border-gray pt-3 space-y-1 mb-4">
                                    <div class="flex justify-between items-baseline">
                                        <span class="text-label-md text-on-surface-variant">Unit Price</span>
                                        <span class="text-headline-sm font-bold text-primary">₦6,800 <span class="text-label-md text-on-surface-variant font-normal">/ box</span></span>
                                    </div>
                                    <div class="flex justify-between items-center text-body-sm">
                                        <span class="text-on-surface-variant">Remaining</span>
                                        <span class="text-teal-700 font-medium">520 Boxes in stock</span>
                                    </div>
                                </div>
                                <button class="w-full bg-primary py-2.5 rounded-md text-white font-label-lg flex items-center justify-center gap-2 hover:bg-secondary transition-colors shadow-sm">
                                    <span class="material-symbols-outlined text-[18px]">shopping_cart</span>
                                    <span>Add to Cart</span>
                                </button>
                            </div>
                        </div>
                    </div>
                    <!-- Card 10: Industrial Plastics -->
                    <div class="bg-white border border-border-gray rounded-lg overflow-hidden group hover:border-secondary hover:shadow-md transition-all flex flex-col shadow-sm">
                        <div class="relative aspect-4/3 bg-surface-container overflow-hidden">
                            <img alt="Commercial Polythene Packaging Film Roll 100m" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src="https://lh3.googleusercontent.com/aida-public/AB6AXuC7ovzTi9trNjZW7ZQL3WRd6ce6xaeOJX9q_L68FH3s-JYJ-gq1phv-EEHqPmQfT8Kj5Vs76LBgGrPtPn1rXhVSush4Wog-1HelBDUg5h7pHJRQAuKlAwxxm1xMnfHUvq6pwdam503nX2l9tdcWE21bvaVOFQPS_WGxAo3zHkDPrRFHr4u57vzlJyMAhUfLPlT_PwZHFsme3JJTxRnbPPFtSzOyHFacc9brEwLB5Piu6FnLET0MGle9gA"/>
                            <div class="absolute top-3 left-3 bg-teal-50 border border-teal-200 text-teal-700 px-2 py-1 rounded-[4px] text-[10px] font-bold uppercase tracking-wider">IN STOCK</div>
                        </div>
                        <div class="p-5 grow flex flex-col justify-between">
                            <div>
                                <span class="inline-block px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-secondary-fixed text-on-secondary-fixed uppercase mb-2">INDUSTRIAL PLASTICS</span>
                                <h3 class="text-headline-sm font-headline-sm text-primary mb-1.5 line-clamp-1">Commercial Polythene Packaging Film Roll 100m</h3>
                                <p class="text-body-sm text-on-surface-variant mb-3 line-clamp-2">Virgin LDPE polythene transparent packaging and moisture barrier film roll for warehousing and protective wrapping.</p>
                                <a class="inline-flex items-center gap-1 text-secondary text-label-md font-label-md hover:underline mb-4 font-semibold" href="#">View Product Details →</a>
                            </div>
                            <div>
                                <div class="border-t border-border-gray pt-3 space-y-1 mb-4">
                                    <div class="flex justify-between items-baseline">
                                        <span class="text-label-md text-on-surface-variant">Unit Price</span>
                                        <span class="text-headline-sm font-bold text-primary">₦22,000 
                                            <span class="text-label-md text-on-surface-variant font-normal">/ roll</span>
                                        </span>
                                    </div>
                                    <div class="flex justify-between items-center text-body-sm">
                                        <span class="text-on-surface-variant">Remaining</span>
                                        <span class="text-teal-700 font-medium">310 Rolls in Lagos</span>
                                    </div>
                                </div>
                                <button class="w-full bg-primary py-2.5 rounded-md text-white font-label-lg flex items-center justify-center gap-2 hover:bg-secondary transition-colors shadow-sm">
                                    <span class="material-symbols-outlined text-[18px]">shopping_cart</span>
                                    <span>Add to Cart</span>
                                </button>
                            </div>
                        </div>
                    </div>
                    <!-- Card 11: Catering Equipment -->
                    <div class="bg-white border border-border-gray rounded-lg overflow-hidden group hover:border-secondary hover:shadow-md transition-all flex flex-col shadow-sm">
                        <div class="relative aspect-4/3 bg-surface-container overflow-hidden">
                            <img alt="Commercial High-Power Kitchen Blender 2.5L" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDfb6GmMFF1P7aYx6auR8Wffi2-GqEmCvKxT0nOGV2aEKIOgCEGHolJFMszBOxLH8Nnm4e9KaPAodiQvdnm9OxOUpz7DJHlbKgqqfZx19UVouNbmvztZEEmrv2pgtz1Naqf6VN1zSAV7TXuThPNUnrFOoGYXJ0i8Rkbpir4kNPf3__TgZtibKy3etMpdoJzSjS5A88ifloCWsjDmyFim7ae7Ya3222cDDjbjjk-k_yBSFF1_nTdglFv7A"/>
                            <div class="absolute top-3 left-3 bg-teal-50 border border-teal-200 text-teal-700 px-2 py-1 rounded-[4px] text-[10px] font-bold uppercase tracking-wider">IN STOCK</div>
                        </div>
                        <div class="p-5 grow flex flex-col justify-between">
                            <div>
                                <span class="inline-block px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-secondary-fixed text-on-secondary-fixed uppercase mb-2">CATERING EQUIPMENT</span>
                                <h3 class="text-headline-sm font-headline-sm text-primary mb-1.5 line-clamp-1">Commercial High-Power Kitchen Blender 2.5L</h3>
                                <p class="text-body-sm text-on-surface-variant mb-3 line-clamp-2">1800W pure copper motor with hardened stainless steel 6-blade assembly for smoothies, soups, and catering prep.</p>
                                <a class="inline-flex items-center gap-1 text-secondary text-label-md font-label-md hover:underline mb-4 font-semibold" href="#">View Product Details →</a>
                            </div>
                            <div>
                                <div class="border-t border-border-gray pt-3 space-y-1 mb-4">
                                    <div class="flex justify-between items-baseline">
                                        <span class="text-label-md text-on-surface-variant">Unit Price</span>
                                        <span class="text-headline-sm font-bold text-primary">₦78,000 <span class="text-label-md text-on-surface-variant font-normal">/ unit</span></span>
                                    </div>
                                    <div class="flex justify-between items-center text-body-sm">
                                        <span class="text-on-surface-variant">Remaining</span>
                                        <span class="text-teal-700 font-medium">95 Units in Port Harcourt</span>
                                    </div>
                                </div>
                                <button class="w-full bg-primary py-2.5 rounded-md text-white font-label-lg flex items-center justify-center gap-2 hover:bg-secondary transition-colors shadow-sm">
                                    <span class="material-symbols-outlined text-[18px]">shopping_cart</span>
                                    <span>Add to Cart</span>
                                </button>
                            </div>
                        </div>
                    </div>
                    <!-- Card 12: Safety Equipment -->
                    <div class="bg-white border border-border-gray rounded-lg overflow-hidden group hover:border-secondary hover:shadow-md transition-all flex flex-col shadow-sm">
                        <div class="relative aspect-4/3 bg-surface-container overflow-hidden">
                            <img alt="Steel-Toe Puncture Resistant Work Boots" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDV-7L1AKJEmDavUTJ9GuVgXdkfeV8LcEQUn-WRGVV2ycj4G1XIPCXw1iRgYtXGpcSG8IX47xq4MCM9XsI7xQHK-eJjU14a4OZYiwAVCqTaKuP6gy3gsjgnaHPGASn0nx3qP7Ns7oUgzbASy-_8BMU0085wC-eJk-JUy_qyYzpL4dXnErfr9S7ZBvOIxQG6_KWc6RXWOAsy1pFXPfgknmgH3iJdQd9HH8N8UpNVX7sy7xhH1Ox6ZSyrQg"/>
                            <div class="absolute top-3 left-3 bg-teal-50 border border-teal-200 text-teal-700 px-2 py-1 rounded-[4px] text-[10px] font-bold uppercase tracking-wider">IN STOCK</div>
                        </div>
                        <div class="p-5 grow flex flex-col justify-between">
                            <div>
                                <span class="inline-block px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-secondary-fixed text-on-secondary-fixed uppercase mb-2">SAFETY EQUIPMENT</span>
                                <h3 class="text-headline-sm font-headline-sm text-primary mb-1.5 line-clamp-1">Steel-Toe Puncture Resistant Work Boots</h3>
                                <p class="text-body-sm text-on-surface-variant mb-3 line-clamp-2">S3 rated water-repellent genuine leather work boots with steel toe cap, puncture-proof midsole, and oil-resistant grip.</p>
                                <a class="inline-flex items-center gap-1 text-secondary text-label-md font-label-md hover:underline mb-4 font-semibold" href="#">View Product Details →</a>
                            </div>
                            <div>
                                <div class="border-t border-border-gray pt-3 space-y-1 mb-4">
                                    <div class="flex justify-between items-baseline">
                                        <span class="text-label-md text-on-surface-variant">Unit Price</span>
                                        <span class="text-headline-sm font-bold text-primary">₦28,500 <span class="text-label-md text-on-surface-variant font-normal">/ pair</span></span>
                                    </div>
                                    <div class="flex justify-between items-center text-body-sm">
                                        <span class="text-on-surface-variant">Remaining</span>
                                        <span class="text-teal-700 font-medium">210 Pairs in stock</span>
                                    </div>
                                </div>
                                <button class="w-full bg-primary py-2.5 rounded-md text-white font-label-lg flex items-center justify-center gap-2 hover:bg-secondary transition-colors shadow-sm">
                                    <span class="material-symbols-outlined text-[18px]">shopping_cart</span>
                                    <span>Add to Cart</span>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
                <!-- Pagination -->
                <div class="mt-12 flex justify-center">
                    <div class="flex flex-col lg:flex-row items-center justify-center lg:justify-between gap-4 w-full pt-6 border-t border-border-gray">
                        <p class="text-body-sm text-on-surface-variant">Page 
                            <span class="font-bold text-primary">1</span> of 
                            <span class="font-bold text-primary">13</span> 
                            (148 products)
                        </p>
                        <nav class="flex items-center gap-2">
                            <button class="w-10 h-10 flex items-center justify-center rounded-lg border border-border-gray text-on-surface-variant opacity-60 cursor-not-allowed">
                                <span class="material-symbols-outlined">chevron_left</span>
                            </button>
                            <button class="w-10 h-10 flex items-center justify-center rounded-lg bg-secondary text-white font-label-lg shadow-sm">1</button>
                            <button class="w-10 h-10 flex items-center justify-center rounded-lg border border-border-gray text-on-surface-variant hover:bg-surface-container transition-colors font-label-lg">2</button>
                            <button class="w-10 h-10 flex items-center justify-center rounded-lg border border-border-gray text-on-surface-variant hover:bg-surface-container transition-colors font-label-lg">3</button>
                            <span class="px-2 text-on-surface-variant font-medium">...</span>
                            <button class="w-10 h-10 flex items-center justify-center rounded-lg border border-border-gray text-on-surface-variant hover:bg-surface-container transition-colors font-label-lg">13</button>
                            <button class="w-10 h-10 flex items-center justify-center rounded-lg border border-border-gray text-on-surface-variant hover:bg-surface-container transition-colors">
                                <span class="material-symbols-outlined">chevron_right</span>
                            </button>
                        </nav>
                    </div>
                </div>
            </div>
        </div>
    </main>
</template>