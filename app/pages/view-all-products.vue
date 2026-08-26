
<script setup>
definePageMeta({
    layout: 'catalog' // Tells Nuxt to use layouts/catalog.vue instead of default.vue
})
</script>

<template>
    <div>
        <main class="max-w-max-width mx-auto px-margin-desktop py-8 flex gap-gutter">
<!-- Sidebar Filter Panel -->
<aside class="hidden lg:flex flex-col w-full lg:w-72 flex-shrink-0 gap-6">
    <div class="bg-white border border-border-gray p-6 rounded-lg sticky top-24">
       <div class="flex items-center justify-between mb-6">
<h2 class="text-headline-sm font-headline-sm text-primary">Filters</h2>
<button class="text-label-md font-label-md text-secondary hover:underline">Clear All</button>
</div>
<!-- Category Filter -->
<section class="mb-8">
<h3 class="text-label-lg font-label-md text-on-surface mb-4">Product Category</h3>
<div class="space-y-3">
<label class="flex items-center gap-3 cursor-pointer group">
<input checked class="w-4 h-4 rounded border-border-gray text-secondary focus:ring-secondary" type="checkbox"/>
<span class="text-body-sm text-on-surface-variant group-hover:text-on-surface">All Products</span>
</label>
<label class="flex items-center gap-3 cursor-pointer group">
<input class="w-4 h-4 rounded border-border-gray text-secondary focus:ring-secondary" type="checkbox"/>
<span class="text-body-sm text-on-surface-variant group-hover:text-on-surface">Industrial Plastics</span>
</label>
<label class="flex items-center gap-3 cursor-pointer group">
<input class="w-4 h-4 rounded border-border-gray text-secondary focus:ring-secondary" type="checkbox"/>
<span class="text-body-sm text-on-surface-variant group-hover:text-on-surface">Catering Equipment</span>
</label>
<label class="flex items-center gap-3 cursor-pointer group">
<input class="w-4 h-4 rounded border-border-gray text-secondary focus:ring-secondary" type="checkbox"/>
<span class="text-body-sm text-on-surface-variant group-hover:text-on-surface">Safety Equipment</span>
</label>
</div>
</section>

<!-- Price Range -->
<section class=" pb-6">
<h3 class="text-label-lg font-label-lg mb-4 text-on-surface">Price Range</h3>
<div class="flex flex-col gap-4">
<input class="w-full accent-secondary" max="1000" min="0" type="range"/>
<div class="flex items-center justify-between gap-2">
<div class="flex-1 bg-white border border-border-gray rounded p-2 text-body-sm">₦0</div>
<span class="text-outline-variant">—</span>
<div class="flex-1 bg-white border border-border-gray rounded p-2 text-body-sm">₦200,000</div>
</div>
</div>
</section>
<!-- Stock Availability -->
<!-- Stock Status -->
<section class="mb-8">
<h3 class="text-label-lg font-label-md text-on-surface mb-4">Stock Status</h3>
<div class="space-y-3">
<label class="flex items-center gap-3 cursor-pointer group">
<input checked class="w-4 h-4 border-border-gray text-secondary focus:ring-secondary" name="stock" type="radio"/>
<span class="text-body-sm text-on-surface-variant group-hover:text-on-surface">In Stock</span>
</label>
<label class="flex items-center gap-3 cursor-pointer group">
<input class="w-4 h-4 border-border-gray text-secondary focus:ring-secondary" name="stock" type="radio"/>
<span class="text-body-sm text-on-surface-variant group-hover:text-on-surface">Out of Stock</span>
</label>
</div>
</section>
    </div>

</aside>

<!-- Product Listing Area -->
<section class="flex-grow">
<!-- Toolbar -->
<div class="flex flex-col md:flex-row md:items-center justify-between mb-8 gap-4">
<div>
<h1 class="text-headline-lg font-headline-lg text-primary">All Products</h1>
<p class="text-body-sm font-body-sm text-on-surface-variant">Showing 1-24 of 152 industrial solutions</p>
</div>
<div class="flex items-center gap-4">
<div class="flex items-center gap-2">
<span class="text-label-md font-label-md text-on-surface-variant">Sort by:</span>
<select class="bg-white border border-border-gray text-body-sm font-body-sm py-1.5 px-3 rounded focus:ring-2 focus:ring-secondary focus:border-secondary outline-none">
<option>Relevance</option>
<option>Price: Low to High</option>
<option>Price: High to Low</option>
<option>Newest Arrivals</option>
</select>
</div>
</div>
</div>
<!-- Product Grid -->
<div class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-gutter">
<!-- Product Card 1 -->
<div class="bg-white border border-border-gray p-4 flex flex-col group relative overflow-hidden transition-all duration-300 hover:border-secondary flex flex-col">
<div class="relative h-48 bg-surface-container overflow-hidden">
    <img class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" data-alt="A clean, professionally lit studio shot of high-quality industrial clear plastic polymer pellets in a heavy-duty transparent sack. The lighting is bright and technical, emphasizing the clarity and purity of the materials. The background is a minimalist light gray, maintaining a premium B2B industrial aesthetic with sharp focus and high contrast." src="https://lh3.googleusercontent.com/aida-public/AB6AXuBFVbLcguH_EuDVBjAYBJYF556jx3P9SZ5HENwI3s78-kFy5EyEkCzQtgabvDiNYc08Rs87hb-octHyhbrdYaYVvawOWqq_zgn6bwR8awsrV8gyUATMqwfMfjW3_dcFrUfNNte9Z9dZVEaC2txOSMh3KNWs2NecShb7PwhhYPKlcm7C7-9R4-TkOY8ZKWtP-aSKc-tZnrAbZY3mw8-JwI3AmvRJ_9Q77SmDOAeeMn3oYTmNadCGgMvwrx8oiYjlgM5bLWNJPyK0baY8"/>
    <div class="absolute top-3 left-3 bg-teal-50 border border-teal-200 text-teal-700 px-2 py-1 rounded-[4px] text-[10px] font-bold uppercase tracking-wider">In Stock</div>
</div>
<!-- <div class="flex-grow">
<p class="text-[10px] font-bold text-outline-variant tracking-wider uppercase mb-1">SKU: PC-882-PL</p>
<h3 class="text-body-md font-headline-sm text-primary mb-2 line-clamp-2">High-Density Polyethylene Industrial Storage Unit</h3>
<div class="flex items-center gap-2 mb-4">
<span class="material-symbols-outlined text-sm text-success" style="font-variation-settings: 'FILL' 1;">check_circle</span>
<span class="text-label-md font-label-md text-on-surface-variant">420 units in stock</span>
</div>
</div>
<div class="pt-4 border-t border-border-gray">
<div class="flex justify-between items-end mb-3">
<div>
<p class="text-[10px] text-on-surface-variant uppercase font-bold">From</p>
<p class="text-headline-sm font-headline-sm text-secondary">£24.50 <span class="text-label-md font-label-md text-on-surface-variant font-normal">/ unit</span></p>
</div>
<div class="text-right">
<p class="text-[10px] text-warm-gold font-bold">BULK SAVINGS</p>
<p class="text-label-md font-label-md text-on-surface-variant">£18.20 (50+ units)</p>
</div>
</div>
<div class="flex gap-2">
<button class="flex-grow bg-primary text-white text-label-lg font-label-lg py-2.5 rounded-lg hover:bg-primary-container transition-colors active:scale-95">Add to Order</button>
<button class="bg-surface-container border border-border-gray p-2.5 rounded-lg text-on-surface-variant hover:text-secondary hover:border-secondary transition-all" onclick="toggleCompare(this)">
<span class="material-symbols-outlined">compare_arrows</span>
</button>
</div>
</div> -->
<div class="p-5 flex-grow">
<p class="text-[10px] font-bold text-secondary-container uppercase mb-2">Industrial Plastics</p>
<h3 class="text-headline-sm font-headline-sm text-primary mb-1">Clear Polyethylene Resin</h3>
<p class="text-body-sm text-on-surface-variant mb-4 line-clamp-2">High-density industrial grade pellets for extrusion and injection molding applications.</p>
<div class="space-y-2 mb-6">
<div class="flex justify-between items-center">
<span class="text-label-md font-label-md text-on-surface-variant">Unit Price</span>
<span class="text-headline-sm font-headline-sm text-primary">₦4,250 <span class="text-label-md font-label-md text-on-surface-variant font-normal">/kg</span></span>
</div>
<div class="flex justify-between items-center">
<span class="text-label-md font-label-md text-on-surface-variant">MOQ</span>
<span class="text-label-md font-label-md text-on-surface">500 kg</span>
</div>
</div>
<button class="w-full bg-primary py-3 rounded-[6px] text-white font-label-lg flex items-center justify-center gap-2 hover:bg-primary-container transition-colors group/btn">
<span>Add to Cart</span>
</button>
</div>
</div>


<!-- Product Card 2 -->
<div class="bg-white border border-border-gray p-4 flex flex-col group relative overflow-hidden transition-all duration-300 hover:border-secondary flex flex-col">
<div class="relative h-48 bg-surface-container overflow-hidden">
    <img class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" data-alt="Close-up high-resolution image of a stack of biodegradable bamboo fiber catering plates. The texture of the natural fibers is visible, highlighting the eco-friendly and sturdy nature of the product. Soft daylight illuminates the scene, casting gentle shadows that emphasize the stack's height and premium finish. Industrial warehouse environment suggested in the soft-focus background." src="https://lh3.googleusercontent.com/aida-public/AB6AXuCs7tJLXm9b4pVXDKbYVrflb-2v52cyG3VqiZGZEj-CsXHptEjIxeJrUKRft1Mvp69Gu3ttH0BCskEwREi2TpDPBaAfZ41ylsvl7n8ewPhIxGzjppzE028a7NyR17GWZbf_iRFqUK6lQcJxf8OyEetUh6srmSx-R6vF3C4Y_SlGOraxiWqSX-fUzAmEpKjgPxdXXNigRDNAncZHN8w9ciU_VBUCOpv0hibDFXFR08b4Y_wUQk2uvz5hDHNWHsWTrMT97gUY_MTf83Yn"/>
    <div class="absolute top-3 right-3 bg-primary text-white px-2 py-1 rounded-[4px] text-[10px] font-bold uppercase tracking-wider">Top Rated</div>
</div>
<div class="p-5 flex-grow">
<p class="text-[10px] font-bold text-secondary-container uppercase mb-2">Catering Disposables</p>
<h3 class="text-headline-sm font-headline-sm text-primary mb-1">Eco-Fiber Bio-Plates</h3>
<p class="text-body-sm text-on-surface-variant mb-4 line-clamp-2">10-inch heavy-duty biodegradable plates. Heat resistant and chemical-free composition.</p>
<div class="space-y-2 mb-6">
<div class="flex justify-between items-center">
<span class="text-label-md font-label-md text-on-surface-variant">Unit Price</span>
<span class="text-headline-sm font-headline-sm text-primary">₦85 <span class="text-label-md font-label-md text-on-surface-variant font-normal">/unit</span></span>
</div>
<div class="flex justify-between items-center">
<span class="text-label-md font-label-md text-on-surface-variant">MOQ</span>
<span class="text-label-md font-label-md text-on-surface">10,000 units</span>
</div>
</div>
<button class="w-full bg-primary py-3 rounded-[6px] text-white font-label-lg flex items-center justify-center gap-2 hover:bg-primary-container transition-colors group/btn">
<span>Add to Cart</span>
</button>
</div>
</div>
<!-- Product Card 3 -->
<div class="bg-white border border-border-gray p-4 flex flex-col group relative transition-all duration-300 hover:border-secondary">
<div class="relative h-48 bg-surface-container overflow-hidden">
    <img class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" data-alt="Massive blue industrial chemical barrels neatly arranged on a clean concrete floor in a modern, organized warehouse. The scene is shot from a low angle to show the scale and reliability of the storage. Cool lighting with blue undertones creates a sense of professional efficiency and technical precision. Minimalist and corporate industrial photography style." src="https://lh3.googleusercontent.com/aida-public/AB6AXuDcK8nQR7_TlTSYvvxo3pV-HI4LatjwSDtv6rppU4kA2kGjgTWQIw6cMFjcbymThZjvVlM--sGYoe0ulmNQri701Hq0c1tKgNAg9cNC3Stkoee-hHT8pQYCKPoYZvvS0XCpSuqbXw9jplhj6thTjaYOC452NOqd4SCRFrHYqNf3flyCuYKtBg1kgIntd6NCdq59c7wEVhdJVvqnQS0qG7tXPaqhkSX3UK2Tp27_AuNF6EOluf9mscr1dn4YEQldFJau2JBfPoRVgvVP"/>
</div>
<div class="p-5 flex-grow">
<p class="text-[10px] font-bold text-secondary-container uppercase mb-2">Bulk Supplies</p>
<h3 class="text-headline-sm font-headline-sm text-primary mb-1">Industrial Solvent P-80</h3>
<p class="text-body-sm text-on-surface-variant mb-4 line-clamp-2">Premium degreasing solvent for large scale manufacturing maintenance and cleaning.</p>
<div class="space-y-2 mb-6">
<div class="flex justify-between items-center">
<span class="text-label-md font-label-md text-on-surface-variant">Unit Price</span>
<span class="text-headline-sm font-headline-sm text-primary">₦24,500 <span class="text-label-md font-label-md text-on-surface-variant font-normal">/20L Drum</span></span>
</div>
<div class="flex justify-between items-center">
<span class="text-label-md font-label-md text-on-surface-variant">MOQ</span>
<span class="text-label-md font-label-md text-on-surface">10 Drums</span>
</div>
</div>
<button class="w-full bg-primary py-3 rounded-[6px] text-white font-label-lg flex items-center justify-center gap-2 hover:bg-primary-container transition-colors group/btn">
<span>Add to Cart</span>
</button>
</div>
</div>
<!-- Repeat Pattern Cards (Adding more to fill the grid concept) -->
<!-- Product Card 4 -->
<div class="bg-white border border-border-gray p-4 flex flex-col group relative transition-all duration-300 hover:border-secondary">
<!-- <div class="aspect-square bg-surface-container-low mb-4 relative overflow-hidden">
<img class="w-full h-full object-cover mix-blend-multiply group-hover:scale-105 transition-transform duration-500" data-alt="Industrial technician handles precision-engineered plastic components in a high-tech laboratory. The scene is lit with clinical white LED lighting, creating a bright and sterile atmosphere. The focus is on the intricate detail of the blue polymer gears. The overall style is clean, sharp, and focused on technical excellence." src="https://lh3.googleusercontent.com/aida-public/AB6AXuBJzD3PdNLLTQT5VN1UFATBP0_oo_6dVeALcVko8xPd-t-zu-O5PMLj3TNH7rXm0JQvNmG0gxHejzRSoXrbg6T40C-BmWHXeqDirBVIVNTV7DSA8FqIMxwtvIc2oH5ogZt-MsZBrJ32aaCxr4Jwx5HeQ23HnVYHlgFmgErvGHqSRvOehhGzfN2oxQoRC5WzvYdvY5An3aCId14KnQXJddGrMmRAmbwQT50UaxT_HwbB4Azk2I6Awt-Ajg"/>
</div>
<div class="flex-grow">
<p class="text-[10px] font-bold text-outline-variant tracking-wider uppercase mb-1">SKU: PC-GEAR-X1</p>
<h3 class="text-body-md font-headline-sm text-primary mb-2 line-clamp-2">Precision Machined Nylon Gear Assembly</h3>
<div class="flex items-center gap-2 mb-4">
<span class="material-symbols-outlined text-sm text-success" style="font-variation-settings: 'FILL' 1;">check_circle</span>
<span class="text-label-md font-label-md text-on-surface-variant">Custom fabrication available</span>
</div>
</div>
<div class="pt-4 border-t border-border-gray">
<div class="flex justify-between items-end mb-3">
<div>
<p class="text-[10px] text-on-surface-variant uppercase font-bold">From</p>
<p class="text-headline-sm font-headline-sm text-secondary">£54.00 <span class="text-label-md font-label-md text-on-surface-variant font-normal">/ unit</span></p>
</div>
</div>
<div class="flex gap-2">
<button class="flex-grow bg-primary text-white text-label-lg font-label-lg py-2.5 rounded-lg hover:bg-primary-container transition-colors active:scale-95">Add to Order</button>
<button class="bg-surface-container border border-border-gray p-2.5 rounded-lg text-on-surface-variant hover:text-secondary hover:border-secondary transition-all" onclick="toggleCompare(this)">
<span class="material-symbols-outlined">compare_arrows</span>
</button>
</div>
</div> -->
<div class="relative h-48 bg-surface-container">
    <img class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" data-alt="A macro shot of vibrant red and blue plastic food storage containers stacked perfectly in a commercial kitchen setting. The high-gloss finish of the plastic catches the studio lights, emphasizing quality and durability. The background is a clean, metallic industrial kitchen surface with a shallow depth of field. Professional B2B catalog photography." src="https://lh3.googleusercontent.com/aida-public/AB6AXuDKMZzJHtbD5wDs2up1deLg4qjoElVrWePKkkV497ucPo3ZUPCxDTrFGiMrf7JjJPWb7BGMh-MENUIxsxf7vqTtkD1qn-WUN4EAgK2vm3YVPzKok7pGRWXU1pT-FJzNJqJt5lh5_Tq8EHdzU-quBcAirgxRJL8l8BrG0iK5IW6MdZRvdp1KtvMMDhx3W9pw9f7LtaElCumXq6Oxy71vO1kqm_weRd3Y9WnDayJbEbj678RLYlafccFAJs45XON7FE_APiusF-fZkgSV"/>
    </div>
    <div class="p-5 flex-grow">
    <p class="text-[10px] font-bold text-secondary-container uppercase mb-2">Catering Disposables</p>
    <h3 class="text-headline-sm font-headline-sm text-primary mb-1">Stackable Food Tubs</h3>
    <div class="space-y-2 mb-6 mt-4">
    <div class="flex justify-between items-center">
    <span class="text-label-md font-label-md text-on-surface-variant">Unit Price</span>
    <span class="text-headline-sm font-headline-sm text-primary">₦120 <span class="text-label-md font-label-md text-on-surface-variant font-normal">/unit</span></span>
    </div>
    <div class="flex justify-between items-center">
    <span class="text-label-md font-label-md text-on-surface-variant">MOQ</span>
    <span class="text-label-md font-label-md text-on-surface">5,000 units</span>
    </div>
    </div>
    <button class="w-full bg-primary py-3 rounded-[6px] text-white font-label-lg flex items-center justify-center gap-2 hover:bg-primary-container transition-colors group/btn">
    <span>Add to Quote</span>
    </button>
    </div>
</div>
<!-- Product Card 5 -->
<div class="bg-white border border-border-gray p-4 flex flex-col group relative transition-all duration-300 hover:border-secondary">
<!-- <div class="aspect-square bg-surface-container-low mb-4 relative overflow-hidden">
<img class="w-full h-full object-cover mix-blend-multiply group-hover:scale-105 transition-transform duration-500" data-alt="A collection of heavy-duty black plastic industrial pallets stacked neatly in a high-key architectural composition. The lighting is bright and overhead, creating sharp, graphic shadows that emphasize the grid-like structural ribs of the pallets. The environment is a pristine industrial space with light grey concrete floors and white walls." src="https://lh3.googleusercontent.com/aida-public/AB6AXuCQlCPVzImEz76s_iL1lu9XgnT22ckc-_UGOTFAB35XQaqXS3a3rmqvktm1jyaWxYrnyxxWXG5lac4A5c_l8UPE-YlPh2m_C3XaitTugvg58Y8b2eCUR0b14z7mDquJi63dXqlbIvCneFK9-jIKRrzDvRsXJJVUzAYe-lqVriscV4C1l2pUrL5dPEnrSCtvFaFOXeIaqlkEnNdC-bGfvhs9sIfdONgBcIo6q22rJOqgfhrN0JnjOXJHWw"/>
</div> -->
<!-- <div class="flex-grow">
<p class="text-[10px] font-bold text-outline-variant tracking-wider uppercase mb-1">SKU: PC-PAL-HD</p>
<h3 class="text-body-md font-headline-sm text-primary mb-2 line-clamp-2">Euro-Standard Heavy Duty Stackable Pallet</h3>
<div class="flex items-center gap-2 mb-4">
<span class="material-symbols-outlined text-sm text-success" style="font-variation-settings: 'FILL' 1;">check_circle</span>
<span class="text-label-md font-label-md text-on-surface-variant">In Stock - Ready to ship</span>
</div>
</div>
<div class="pt-4 border-t border-border-gray">
<div class="flex justify-between items-end mb-3">
<div>
<p class="text-[10px] text-on-surface-variant uppercase font-bold">From</p>
<p class="text-headline-sm font-headline-sm text-secondary">£42.30 <span class="text-label-md font-label-md text-on-surface-variant font-normal">/ unit</span></p>
</div>
</div>
<div class="flex gap-2">
<button class="flex-grow bg-primary text-white text-label-lg font-label-lg py-2.5 rounded-lg hover:bg-primary-container transition-colors active:scale-95">Add to Order</button>
<button class="bg-surface-container border border-border-gray p-2.5 rounded-lg text-on-surface-variant hover:text-secondary hover:border-secondary transition-all" onclick="toggleCompare(this)">
<span class="material-symbols-outlined">compare_arrows</span>
</button>
</div>
</div> -->
<div class="relative h-48 bg-surface-container">
    <img class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" data-alt="Industrial rolls of heavy-duty stretch wrap film stacked on a wooden pallet in a brightly lit shipping warehouse. The plastic film has a pristine, transparent sheen. The composition is clean and organized, conveying efficiency and large-scale industrial logistics. High-key lighting with sharp technical details." src="https://lh3.googleusercontent.com/aida-public/AB6AXuAxGd4W3m1AZDucuVIc2TWzQFd1bQseVaSoCB2rMGWuvEbjaZvL4yGSkNK1XDa56rzQNCzvsLe0STSt2867DEU9OI6JiTXjrjmpQy4dBmXz7NONYPKnz_cbWRKmKXrw9nPxa1i6cJcRFJdZBk32IYqLrXLcwTSHSjAai8fgz2fyZhPlQGewpWYdvu7vTrfidfiloY1HmpJQSqwhtGpyGFU0FDjP1qtoz_UWmUCd_KEUK_E1jhvLER6qZ14_g-Uim8PZIOS9LAhmP_9f"/>
    </div>
    <div class="p-5 flex-grow">
    <p class="text-[10px] font-bold text-secondary-container uppercase mb-2">Industrial Plastics</p>
    <h3 class="text-headline-sm font-headline-sm text-primary mb-1">Stretch Wrap XL</h3>
    <div class="space-y-2 mb-6 mt-4">
    <div class="flex justify-between items-center">
    <span class="text-label-md font-label-md text-on-surface-variant">Unit Price</span>
    <span class="text-headline-sm font-headline-sm text-primary">₦15,000 <span class="text-label-md font-label-md text-on-surface-variant font-normal">/Roll</span></span>
    </div>
    <div class="flex justify-between items-center">
    <span class="text-label-md font-label-md text-on-surface-variant">MOQ</span>
    <span class="text-label-md font-label-md text-on-surface">20 Rolls</span>
    </div>
    </div>
    <button class="w-full bg-primary py-3 rounded-[6px] text-white font-label-lg flex items-center justify-center gap-2 hover:bg-primary-container transition-colors group/btn">
    <span>Add to Quote</span>
    </button>
    </div>
</div>
<!-- Product Card 6 -->
<div class="bg-white border border-border-gray p-4 flex flex-col group relative transition-all duration-300 hover:border-secondary">
<!-- <div class="aspect-square bg-surface-container-low mb-4 relative overflow-hidden">
<img class="w-full h-full object-cover mix-blend-multiply group-hover:scale-105 transition-transform duration-500" data-alt="A close-up technical shot of a robotic arm in an automated catering facility, assembling precision food trays. The lighting is high-tech with blue and white tones, creating a modern and efficient mood. The focus is on the sterile surfaces and the smooth movement of the automation, reflecting PolyCraft's technical precision and industrial capability." src="https://lh3.googleusercontent.com/aida-public/AB6AXuC_EYfRMKGkTTtlopSvGEcHTkcGO84MR925r09wfQiVqXlWArjjQce9L_sbP6HhRGAe_dz7DDHbofhDvh0--uLz7g-uIoGvSFPlu_-qjtmv8SUZr1_Ve838QmKzFqbGpMpekPVuZnurCIXVve4sOwgYhwm5zKb8RuRJONDV8pcJVmmCKkHeB4Ecu6MRShkp9kOKF4RtGzH5TxLSMQFRXLJN9twiChfOHkxbOrpS0BBIdBqMhg0K3RaemQ"/>
</div>
<div class="flex-grow">
<p class="text-[10px] font-bold text-outline-variant tracking-wider uppercase mb-1">SKU: PC-CAT-MOD</p>
<h3 class="text-body-md font-headline-sm text-primary mb-2 line-clamp-2">Modular Food Distribution Tray System</h3>
<div class="flex items-center gap-2 mb-4">
<span class="material-symbols-outlined text-sm text-success" style="font-variation-settings: 'FILL' 1;">check_circle</span>
<span class="text-label-md font-label-md text-on-surface-variant">BPA Free &amp; Food Safe</span>
</div>
</div>
<div class="pt-4 border-t border-border-gray">
<div class="flex justify-between items-end mb-3">
<div>
<p class="text-[10px] text-on-surface-variant uppercase font-bold">From</p>
<p class="text-headline-sm font-headline-sm text-secondary">£12.40 <span class="text-label-md font-label-md text-on-surface-variant font-normal">/ unit</span></p>
</div>
</div>
<div class="flex gap-2">
<button class="flex-grow bg-primary text-white text-label-lg font-label-lg py-2.5 rounded-lg hover:bg-primary-container transition-colors active:scale-95">Add to Order</button>
<button class="bg-surface-container border border-border-gray p-2.5 rounded-lg text-on-surface-variant hover:text-secondary hover:border-secondary transition-all" onclick="toggleCompare(this)">
<span class="material-symbols-outlined">compare_arrows</span>
</button>
</div>
</div> -->
<div class="relative h-48 bg-surface-container">
<img class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" data-alt="A clinical shot of a large white HDPE industrial tank with precise measurement markings on the side. The tank is positioned in a sterile industrial environment. The lighting is crisp and even, highlighting the technical specifications and structural integrity of the plastic molding. Corporate product catalog style with high clarity." src="https://lh3.googleusercontent.com/aida-public/AB6AXuAy4KyZjqAmz8ah__u1Aof2UNNPO97lYkq5XErsE4b2tf6fRxaFSfAw5gPtjLlX_GRIeEsBav4V41rN3Df6aGAnXa8AEwW-iIUTEKHCRAR1JpTinh5h6SB-7IKFQpCOpfqBl4HyieiJHtoFd5WtzMfiQgyZyvCCezNGOGXfuNbOrzdao9m6EXVWJe_m9AMP4a0QioAJroN1Xzqo33BQDtbfGksQ53ratL58x2grVObZ1mJX2bEphaotIH_VI15MMUFIGD-yJ8joBS2B"/>
<div class="absolute top-3 left-3 bg-red-50 border border-red-200 text-red-700 px-2 py-1 rounded-[4px] text-[10px] font-bold uppercase tracking-wider">Limited Stock</div>
</div>
<div class="p-5 flex-grow">
<p class="text-[10px] font-bold text-secondary-container uppercase mb-2">Bulk Supplies</p>
<h3 class="text-headline-sm font-headline-sm text-primary mb-1">HDPE Storage Vessel</h3>
<div class="space-y-2 mb-6 mt-4">
<div class="flex justify-between items-center">
<span class="text-label-md font-label-md text-on-surface-variant">Unit Price</span>
<span class="text-headline-sm font-headline-sm text-primary">₦185,000 <span class="text-label-md font-label-md text-on-surface-variant font-normal">/unit</span></span>
</div>
<div class="flex justify-between items-center">
<span class="text-label-md font-label-md text-on-surface-variant">MOQ</span>
<span class="text-label-md font-label-md text-on-surface">1 unit</span>
</div>
</div>
<button class="w-full bg-primary py-3 rounded-[6px] text-white font-label-lg flex items-center justify-center gap-2 hover:bg-primary-container transition-colors group/btn">
<span>Add to Quote</span>
</button>
</div>
</div>
</div>
<!-- Pagination -->
<div class="mt-12 flex justify-center">
<nav class="flex items-center gap-2">
<button class="w-10 h-10 flex items-center justify-center rounded-lg border border-border-gray text-on-surface-variant hover:bg-surface-container transition-colors">
<span class="material-symbols-outlined">chevron_left</span>
</button>
<button class="w-10 h-10 flex items-center justify-center rounded-lg bg-primary text-white font-label-lg">1</button>
<button class="w-10 h-10 flex items-center justify-center rounded-lg border border-border-gray text-on-surface-variant hover:bg-surface-container transition-colors font-label-lg">2</button>
<button class="w-10 h-10 flex items-center justify-center rounded-lg border border-border-gray text-on-surface-variant hover:bg-surface-container transition-colors font-label-lg">3</button>
<span class="px-2 text-on-surface-variant">...</span>
<button class="w-10 h-10 flex items-center justify-center rounded-lg border border-border-gray text-on-surface-variant hover:bg-surface-container transition-colors font-label-lg">12</button>
<button class="w-10 h-10 flex items-center justify-center rounded-lg border border-border-gray text-on-surface-variant hover:bg-surface-container transition-colors">
<span class="material-symbols-outlined">chevron_right</span>
</button>
</nav>
</div>
</section>

<!-- Product Grid -->

        </main>
        <!-- Quick Compare Floating Bar -->
        <div class="fixed bottom-0 left-0 right-0 bg-primary-container text-white py-4 px-margin-desktop transform translate-y-full transition-transform duration-500 z-[60] shadow-2xl" id="compareBar">
        <div class="max-w-max-width mx-auto flex items-center justify-between">
        <div class="flex items-center gap-8">
        <div>
        <h4 class="text-label-lg font-label-lg text-on-primary-container">Quick Compare</h4>
        <p class="text-body-sm font-body-sm text-on-primary-container/80"><span id="compareCount">0</span> items selected for comparison</p>
        </div>
        <div class="flex gap-3" id="compareThumbs">
        <!-- Thumbnails added via JS -->
        </div>
        </div>
        <div class="flex items-center gap-4">
        <button class="text-label-lg font-label-lg text-on-primary-container hover:text-white transition-colors" onclick="clearCompare()">Clear All</button>
        <button class="bg-secondary text-white px-8 py-2.5 rounded-lg text-label-lg font-label-lg hover:bg-secondary-container transition-all shadow-lg">Compare Specifications</button>
        </div>
        </div>
        </div>
    </div>
</template>