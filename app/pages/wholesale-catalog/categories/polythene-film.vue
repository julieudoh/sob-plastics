<script setup>
definePageMeta({
    layout: 'catalog' // Tells Nuxt to use layouts/catalog.vue instead of default.vue
})
</script>

<template>
    <div>
        <main class="max-w-max-width mx-auto px-margin-desktop py-8">
            <!-- Breadcrumb -->
            <nav class="mb-8">
                <ol class="flex items-center gap-2 text-label-md font-label-md text-on-surface-variant">
                    <li><a class="hover:text-secondary" href="#">Home</a></li>
                    <li class="flex items-center gap-2">
                        <span class="material-symbols-outlined text-[14px]">chevron_right</span>
                        <a class="hover:text-secondary" href="#">Polythene Films</a>
                    </li>
                    <li class="flex items-center gap-2 text-primary">
                        <span class="material-symbols-outlined text-[14px]">chevron_right</span>
                        <span>Heavy Duty LDPE</span>
                    </li>
                </ol>
            </nav>
            <!-- Hero Section -->
            <section class="relative bg-primary-container rounded-xl overflow-hidden mb-12 min-h-[300px] flex flex-col justify-center px-12">

                <div class="relative z-10 max-w-2xl">
                    <h1 class="text-headline-lg font-headline-lg text-white mb-4">Polythene Films</h1>
                    <p class="text-body-lg font-body-lg text-on-primary-container leading-relaxed">
                        Heavy-duty industrial films for manufacturing and logistics. Engineered for the Nigerian climate, offering superior puncture resistance and UV stabilization for Lagos ports to Kano distribution centers.
                    </p>
                    <div class="flex gap-4 mt-8">
                        <div class="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded border border-white/20">
                            <span class="material-symbols-outlined text-white" style="font-variation-settings: 'FILL' 1;">verified</span>
                            <span class="text-label-md text-white">ISO 9001:2015</span>
                        </div>
                        <div class="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded border border-white/20">
                            <span class="material-symbols-outlined text-white" style="font-variation-settings: 'FILL' 1;">local_shipping</span>
                            <span class="text-label-md text-white">Nationwide Delivery</span>
                        </div>
                    </div>
                </div>
                <div class="absolute right-0 top-0 h-full w-1/3 hidden lg:block" data-alt="A macro professional photograph of industrial grade transparent polythene film rolls stacked neatly in a high-tech Nigerian warehouse. The lighting is crisp and cool, highlighting the glossy and textured surfaces of the heavy-duty plastic materials. The composition emphasizes precision, scale, and the clean industrial aesthetic of PolyCraft Solutions." style="background-image: url('https://lh3.googleusercontent.com/aida-public/AB6AXuDMSDKvtc4yeEal3U18hNH_UoPpIBB3OBq_dGp5dQRlAyDv9wNwwJ6uNnkN5SiMDdSh_VAtnVX5m_ER05V_miDehKlE2d8n3BOTMKxWZWVs2JvDm1K-uKqcN14FATX0BX_9OP-j_t9DiX9O3LKg3_-mAJ86Lto9-dvroHhUbC4p4U5usnE1R4YiRr-rJdF5KjQFSZ2gjroI0yb0iiuRARmJI8TM79_Agz9EwNh8_iz26-3EymifLZ7aYg')"></div>
            </section>
            <div class="flex flex-col lg:grid lg:grid-cols-12 gap-gutter">
                <!-- Sidebar Filters -->
                <aside class="lg:col-span-3">
                    <div class="sticky top-24 space-y-8 bg-white p-6 border border-border-gray rounded-lg">
                        <div class="flex justify-between items-center pb-4 border-b border-border-gray">
                            <h3 class="text-headline-sm font-headline-sm text-primary">Filters</h3>
                            <button class="text-label-md font-label-md text-secondary hover:underline">Clear All</button>
                        </div>
                        <!-- Material Type -->
                        <div>
                            <h4 class="text-label-lg font-label-lg text-on-surface mb-4">Material Type</h4>
                            <div class="space-y-3">
                                <label class="flex items-center gap-3 cursor-pointer group">
                                    <input checked="" class="w-4 h-4 rounded border-border-gray text-secondary focus:ring-secondary" type="checkbox">
                                    <span class="text-body-sm text-on-surface-variant group-hover:text-primary transition-colors">LDPE (Low Density)</span>
                                </label>
                                <label class="flex items-center gap-3 cursor-pointer group">
                                    <input class="w-4 h-4 rounded border-border-gray text-secondary focus:ring-secondary" type="checkbox">
                                    <span class="text-body-sm text-on-surface-variant group-hover:text-primary transition-colors">HDPE (High Density)</span>
                                </label>
                                <label class="flex items-center gap-3 cursor-pointer group">
                                    <input class="w-4 h-4 rounded border-border-gray text-secondary focus:ring-secondary" type="checkbox">
                                    <span class="text-body-sm text-on-surface-variant group-hover:text-primary transition-colors">LLDPE (Linear Low)</span>
                                </label>
                                <label class="flex items-center gap-3 cursor-pointer group">
                                    <input class="w-4 h-4 rounded border-border-gray text-secondary focus:ring-secondary" type="checkbox">
                                    <span class="text-body-sm text-on-surface-variant group-hover:text-primary transition-colors">Shrink Film</span>
                                </label>
                            </div>
                        </div>
                        <!-- Dimensions -->
                        <div>
                            <h4 class="text-label-lg font-label-lg text-on-surface mb-4">Width (mm)</h4>
                            <div class="grid grid-cols-2 gap-2">
                                <button class="px-3 py-2 text-label-md border border-border-gray rounded bg-surface hover:border-secondary transition-colors">500mm</button>
                                <button class="px-3 py-2 text-label-md border border-border-gray rounded bg-surface hover:border-secondary transition-colors">1000mm</button>
                                <button class="px-3 py-2 text-label-md border border-border-gray rounded bg-surface hover:border-secondary transition-colors">1500mm</button>
                                <button class="px-3 py-2 text-label-md border border-border-gray rounded bg-surface hover:border-secondary transition-colors">2000mm+</button>
                            </div>
                        </div>
                        <!-- Thickness -->
                        <div>
                            <h4 class="text-label-lg font-label-lg text-on-surface mb-4">Price Range (₦)</h4>
                            <input class="w-full h-2 bg-surface-variant rounded-lg appearance-none cursor-pointer accent-secondary" max="200000" min="10000" step="5000" type="range">
                            <div class="flex justify-between mt-2 text-label-md text-on-surface-variant font-code-table">
                                <span class="">₦10k</span>
                                <span class="">₦200k+</span>
                            </div>
                        </div>
                        <div class="pt-4">
                            <button class="w-full bg-primary text-white py-3 rounded-lg text-label-lg font-label-lg font-bold">Apply Selection</button>
                        </div>
                    </div>
                </aside>
        <!-- Product Grid -->
        <div class="lg:col-span-9 space-y-6">
        <div class="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 bg-white p-4 border border-border-gray rounded-lg">
        <p class="text-body-sm font-body-sm text-on-surface-variant">Showing <span class="font-bold text-primary">12 of 48</span> industrial film types</p>
        <div class="flex items-center gap-2">
                            <span class="text-label-md text-on-surface-variant">Sort by:</span>
                            <select class="bg-surface border-border-gray text-label-md rounded focus:ring-secondary focus:border-secondary py-1 pl-2 pr-8">
                            <option>Price: Low to High</option>
                            <option>Popularity</option>
                            <option>Thickness (High to Low)</option>
                            </select>
                        </div>
                    </div>
                    <!-- Product Cards -->
                    <div class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
                        <!-- Product Item 1 -->
                        <div class="bg-white border border-border-gray rounded-lg overflow-hidden flex flex-col group hover:shadow-lg transition-shadow">
                            <div class="h-48 relative overflow-hidden bg-surface-variant">
                                <img class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" data-alt="A professional product shot of high-quality industrial clear polythene film roll standing upright on a clean, grey concrete floor. Studio lighting creates soft reflections on the plastic surface. The background is a minimalist industrial setting with a cool blue and white palette, reflecting the professional reliability of PolyCraft Solutions." src="https://lh3.googleusercontent.com/aida-public/AB6AXuCCwSqp4aFWscL5y6CAQrpV6mahMF2sUmH6dIeAJSi4s5i3-HgJLsP1ClnkeSt5YwhQBrRdbI4ZyYwCxaVSWMlj100bQ7OF1LRz-oP6EFE353GxAgzOFhLODgYjQq0gQx0kycg2MD1c6puf8trov-F0OrRK-wBJseAE3GF1gMFlVKOOhGvgqeOsN5H5zzL68lNoCJDHsVgCPtElRIb8XzYnOKtNsLoeHKl9jgUcJM72VCGyU1OmyPIxzg">
                                <span class="absolute top-3 left-3 bg-teal-100 text-teal-800 text-[10px] font-bold px-2 py-1 rounded uppercase tracking-wider">In Stock</span>
                            </div>
                            <div class="p-5 flex-grow flex flex-col">
                                <div class="flex justify-between items-start mb-2">
                                    <h3 class="text-headline-sm font-headline-sm text-primary leading-tight">Heavy Duty LDPE Construction Film</h3>
                                    <span class="material-symbols-outlined text-on-surface-variant cursor-pointer hover:text-secondary">info</span>
                                </div>
                                <p class="text-body-sm text-on-surface-variant mb-4 line-clamp-2">250 Micron thickness, UV stabilized for outdoor concrete curing and moisture barrier applications.</p>
                                <div class="mt-auto space-y-4">
                                    <div class="grid grid-cols-2 gap-4 border-y border-border-gray py-3">
                                        <div>
                                          <p class="text-label-md text-on-surface-variant">Bulk Price</p>
                                            <p class="text-headline-sm font-bold text-primary font-code-table">₦85,500 <span class="text-[12px] font-normal text-on-surface-variant">/ roll</span></p>
                                        </div>
                                        <div class="text-right">
                                            <p class="text-label-md text-on-surface-variant">Min. Order</p>
                                            <p class="text-label-lg font-bold text-on-surface">10 Rolls</p>
                                        </div>
                                    </div>
                                    <NuxtLink to="/product-detail">
                                        <button class="w-full flex items-center justify-center gap-2 border border-secondary text-secondary py-2 rounded font-label-lg hover:bg-secondary hover:text-white transition-colors active:scale-95 duration-100"><span class="material-symbols-outlined text-[18px]">visibility</span>View Details</button>
                                    </NuxtLink>
                                </div>
                            </div>
                        </div>
                        <!-- Product Item 2 -->
                        <div class="bg-white border border-border-gray rounded-lg overflow-hidden flex flex-col group hover:shadow-lg transition-shadow">
                            <div class="h-48 relative overflow-hidden bg-surface-variant">
                                <img class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" data-alt="A row of heavy-duty black silage and agricultural polythene film rolls stacked horizontally. The surface is textured and matte, designed for industrial strength. Professional lighting from the side emphasizes the thickness and quality of the material. Minimalist industrial warehouse setting with PolyCraft's signature blue and grey tones." src="https://lh3.googleusercontent.com/aida-public/AB6AXuDnMohtOAH6cFhciWjnR-rHRWtqmcW8rd84JgFTkuUZsFdptDPeuNVkD250h3_4F73Y7hPxzMSUDB4svoX353ry_73sQIQpmsKtygJWTXruA0NuFQXqm2BLrKp0H8tVtwwD4dpTGiFawGc5S6CEe0WhLuQqVtQ1kI3A2zRK-kP6_1-GmZ-UphAOWS5YDosWbM665C8PT_gNHc9vQqDRqLrT9GC_-DCH6gciWo9xqjhZeQXrLFIdYPPIDw">
                                <span class="absolute top-3 left-3 bg-teal-100 text-teal-800 text-[10px] font-bold px-2 py-1 rounded uppercase tracking-wider">In Stock</span>
                            </div>
                            <div class="p-5 flex-grow flex flex-col">
                                <div class="flex justify-between items-start mb-2">
                                    <h3 class="text-headline-sm font-headline-sm text-primary leading-tight">Black Industrial Grade Liner</h3>
                                    <span class="material-symbols-outlined text-on-surface-variant cursor-pointer hover:text-secondary">info</span>
                                </div>
                                <p class="text-body-sm text-on-surface-variant mb-4 line-clamp-2">150 Micron opaque black film for privacy, disposal, and temporary weather protection.</p>
                                <div class="mt-auto space-y-4">
                                    <div class="grid grid-cols-2 gap-4 border-y border-border-gray py-3">
                                        <div>
                                            <p class="text-label-md text-on-surface-variant">Bulk Price</p>
                                            <p class="text-headline-sm font-bold text-primary font-code-table">₦62,000 <span class="text-[12px] font-normal text-on-surface-variant">/ roll</span></p>
                                        </div>
                                        <div class="text-right">
                                            <p class="text-label-md text-on-surface-variant">Min. Order</p>
                                            <p class="text-label-lg font-bold text-on-surface">25 Rolls</p>
                                        </div>
                                    </div>
                                    <button class="w-full flex items-center justify-center gap-2 border border-secondary text-secondary py-2 rounded font-label-lg hover:bg-secondary hover:text-white transition-colors active:scale-95 duration-100"><span class="material-symbols-outlined text-[18px]">visibility</span>View Details</button>
                                </div>
                            </div>
                        </div>
                        <!-- Product Item 3 -->
                        <div class="bg-white border border-border-gray rounded-lg overflow-hidden flex flex-col group hover:shadow-lg transition-shadow border-2 border-secondary/20">
                            <div class="h-48 relative overflow-hidden bg-surface-variant">
                                <img class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" data-alt="Rolls of industrial stretch wrap polythene film, glossy and transparent, used for securing pallets in logistics. The image captures the tension and light reflecting off the smooth plastic surface. Professional studio shot with high-key lighting, maintaining a clean, technical, and efficient corporate look suitable for the Nigerian B2B market." src="https://lh3.googleusercontent.com/aida-public/AB6AXuAejdAblvxYlAaxv9-C225heSXXcR3hCfW83RiKqEw---052adsY178oQw3_jF3dIT5p6maLmQYCucmnUAiOPwVMsmKI-cJYBJew0KJYARfniqeA9CsI5ipOCq3rMSBZ2DxfW24P5IaXSmDTfPtHwdQODRdyxjHZs3Na7Y8Erbjneea0TjZwf_0YeYWFQ3bWifTEIK2-z0wCNlmeK8SoWTgGeI-gcdhUP92nFR8kug-GA32uuxngKskUg">
                                <span class="absolute top-3 left-3 bg-secondary text-white text-[10px] font-bold px-2 py-1 rounded uppercase tracking-wider">Top Seller</span>
                            </div>
                            <div class="p-5 flex-grow flex flex-col">
                                <div class="flex justify-between items-start mb-2">
                                    <h3 class="text-headline-sm font-headline-sm text-primary leading-tight">Premium LLDPE Stretch Film</h3>
                                    <span class="material-symbols-outlined text-on-surface-variant cursor-pointer hover:text-secondary">info</span>
                                </div>
                                <p class="text-body-sm text-on-surface-variant mb-4 line-clamp-2">23 Micron high-stretch pallet wrap. Guaranteed 300% elongation for secure logistics.</p>
                                <div class="mt-auto space-y-4">
                                    <div class="grid grid-cols-2 gap-4 border-y border-border-gray py-3">
                                        <div>
                                            <p class="text-label-md text-on-surface-variant">Bulk Price</p>
                                            <p class="text-headline-sm font-bold text-primary font-code-table">₦12,400 <span class="text-[12px] font-normal text-on-surface-variant">/ roll</span></p>
                                        </div>
                                        <div class="text-right">
                                            <p class="text-label-md text-on-surface-variant">Min. Order</p>
                                            <p class="text-label-lg font-bold text-on-surface">50 Rolls</p>
                                        </div>
                                    </div>
                                    <button class="w-full flex items-center justify-center gap-2 border border-secondary text-secondary py-2 rounded font-label-lg hover:bg-secondary hover:text-white transition-colors active:scale-95 duration-100"><span class="material-symbols-outlined text-[18px]">visibility</span>View Details</button>
                                </div>
                            </div>
                        </div>
                        <!-- Product Item 4 -->
                        <div class="bg-white border border-border-gray rounded-lg overflow-hidden flex flex-col group hover:shadow-lg transition-shadow">
                            <div class="h-48 relative overflow-hidden bg-surface-variant opacity-70">
                                <img class="w-full h-full object-cover" data-alt="Heavy-duty clear heat-shrinkable polythene rolls for industrial packaging. The composition shows the rolls organized in a clean warehouse environment with technical labels visible. Soft overhead lighting highlights the quality of the polymer. The color scheme is professional navy blue, white, and subtle grey, emphasizing technical precision." src="https://lh3.googleusercontent.com/aida-public/AB6AXuAttz9zDOuR6MAuAmeObMvG9AZiORqgk0ndkY62WwlO76wlyrm6q6xJtB3qkW53ofda8JrbNE2cKgcbY_Wz26w6zqn3Ht3EtuIMA0QRw8oAQxk1EH_BnrNHS3zeY230t86x9lG6-tnZg8EkDl09L4poH298HamuF5VTktHNwvpiwyy-nPtSJSN95x0d3exQsyYBaqsij_XJH1JFvuR5jdwG43xs-54ppbO29f7YwH-i2JPcrLzuqH4p2A">
                                <span class="absolute top-3 left-3 bg-orange-100 text-orange-800 text-[10px] font-bold px-2 py-1 rounded uppercase tracking-wider">Limited Stock</span>
                            </div>
                            <div class="p-5 flex-grow flex flex-col">
                                <div class="flex justify-between items-start mb-2">
                                    <h3 class="text-headline-sm font-headline-sm text-primary leading-tight">Heat Shrink Packaging Film</h3>
                                    <span class="material-symbols-outlined text-on-surface-variant cursor-pointer hover:text-secondary">info</span>
                                </div>
                                <p class="text-body-sm text-on-surface-variant mb-4 line-clamp-2">Bi-axial orientation for uniform shrinkage. Ideal for multi-pack bundling of beverages.</p>
                                <div class="mt-auto space-y-4">
                                    <div class="grid grid-cols-2 gap-4 border-y border-border-gray py-3">
                                        <div>
                                            <p class="text-label-md text-on-surface-variant">Bulk Price</p>
                                            <p class="text-headline-sm font-bold text-primary font-code-table">₦98,000 <span class="text-[12px] font-normal text-on-surface-variant">/ roll</span></p>
                                        </div>
                                        <div class="text-right">
                                            <p class="text-label-md text-on-surface-variant">Min. Order</p>
                                            <p class="text-label-lg font-bold text-on-surface">5 Rolls</p>
                                        </div>
                                    </div>
                                    <button class="w-full flex items-center justify-center gap-2 border border-secondary text-secondary py-2 rounded font-label-lg hover:bg-secondary hover:text-white transition-colors active:scale-95 duration-100"><span class="material-symbols-outlined text-[18px]">visibility</span>View Details</button>
                                </div>
                            </div>
                        </div>
                        <!-- Additional items could go here to fill the grid -->
                    </div>
                    <!-- Bulk Pricing Table Table Pattern -->
                    <div class="mt-12 overflow-hidden border border-border-gray rounded-lg">
                        <div class="bg-primary px-6 py-4">
                            <h3 class="text-headline-sm text-white font-headline-sm">Enterprise Volume Pricing</h3>
                        </div>
                        <div class="overflow-x-auto">
                            <table class="w-full text-left border-collapse">
                                <thead>
                                    <tr class="bg-surface-container-high border-b border-border-gray">
                                        <th class="px-6 py-3 text-label-md text-primary uppercase">Film Category</th>
                                        <th class="px-6 py-3 text-label-md text-primary uppercase text-right">1-10 Rolls</th>
                                        <th class="px-6 py-3 text-label-md text-primary uppercase text-right">11-50 Rolls</th>
                                        <th class="px-6 py-3 text-label-md text-primary uppercase text-right">51+ Rolls</th>
                                    </tr>
                                </thead>
                                <tbody class="divide-y divide-border-gray text-body-sm text-on-surface-variant font-code-table">
                                    <tr class="bg-white hover:bg-surface-container-low transition-colors">
                                        <td class="px-6 py-4 font-bold text-primary">Construction Grade LDPE</td>
                                        <td class="px-6 py-4 text-right">₦92,000</td>
                                        <td class="px-6 py-4 text-right font-medium text-success">₦85,500</td>
                                        <td class="px-6 py-4 text-right font-bold text-secondary">Contact for Quote</td>
                                    </tr>
                                    <tr class="bg-surface/30 hover:bg-surface-container-low transition-colors">
                                        <td class="px-6 py-4 font-bold text-primary">Standard Pallet Stretch Film</td>
                                        <td class="px-6 py-4 text-right">₦14,500</td>
                                        <td class="px-6 py-4 text-right font-medium text-success">₦12,400</td>
                                        <td class="px-6 py-4 text-right font-bold text-secondary">Contact for Quote</td>
                                    </tr>
                                    <tr class="bg-white hover:bg-surface-container-low transition-colors">
                                        <td class="px-6 py-4 font-bold text-primary">Agricultural Silage Wrap</td>
                                        <td class="px-6 py-4 text-right">₦75,000</td>
                                        <td class="px-6 py-4 text-right font-medium text-success">₦68,000</td>
                                        <td class="px-6 py-4 text-right font-bold text-secondary">Contact for Quote</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                    <!-- Load More / Pagination -->
                    <div class="flex justify-center pt-8">
                        <button class="px-12 py-3 border-2 border-primary text-primary font-bold rounded-lg hover:bg-primary hover:text-white transition-all">Load More Products</button>
                    </div>
                </div>
            </div>
        </main>
        <!-- Logistics Callout -->
        <section class="bg-surface-container-high mt-16 py-12">
            <div class="max-w-max-width mx-auto px-margin-desktop grid grid-cols-1 md:grid-cols-3 gap-gutter text-center">
                <div class="space-y-2">
                    <span class="material-symbols-outlined text-4xl text-primary">local_shipping</span>
                    <h4 class="text-label-lg font-bold text-primary">Next-Day Lagos Delivery</h4>
                    <p class="text-body-sm text-on-surface-variant">Express dispatch to Apapa, Ikeja, and Lekki Free Zone daily.</p>
                </div>
                <div class="space-y-2">
                    <span class="material-symbols-outlined text-4xl text-primary">payments</span>
                    <h4 class="text-label-lg font-bold text-primary">Flexible Credit Terms</h4>
                    <p class="text-body-sm text-on-surface-variant">Net-30 payment options available for verified trade account holders.</p>
                </div>
                <div class="space-y-2">
                    <span class="material-symbols-outlined text-4xl text-primary">support_agent</span>
                    <h4 class="text-label-lg font-bold text-primary">Technical Support</h4>
                    <p class="text-body-sm text-on-surface-variant">Our engineers help you select the exact micron for your cargo.</p>
                </div>
            </div>
        </section>
    </div>
</template>