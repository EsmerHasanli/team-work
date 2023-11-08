//products
import {
  getAllProducts,
  getProductsByID,
  deleteProducts,
  postProducts,
  putProductsByID,
  patchProductsByID,
} from "./productsrequests.js";
let swiperWrapper = document.querySelector(".swiper-products");
let products = [];
document.addEventListener("DOMContentLoaded", async () => {
  products = await getAllProducts();
  console.log(products);
  products.forEach((product) => {
    console.log(swiperWrapper);
    swiperWrapper.innerHTML += `
    <div class="swiper-slide slider">
    <div class="card">
        <div class="imgbox">
            <img src="${product.imageURL}" alt="">
            <div class="new">
                <span>New</span>
            </div>
            <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 22 22"
                fill="none">
                <path
                    d="M10.9997 19.25L9.67051 18.0631C4.94967 13.8639 1.83301 11.0944 1.83301 7.6955C1.83301 4.92602 4.05134 2.75 6.87467 2.75C8.46967 2.75 10.0005 3.47834 10.9997 4.62929C11.9988 3.47834 13.5297 2.75 15.1247 2.75C17.948 2.75 20.1663 4.92602 20.1663 7.6955C20.1663 11.0944 17.0497 13.8639 12.3288 18.0721L10.9997 19.25Z"
                    stroke="#DF4244" stroke-width="2" stroke-linecap="square" />
            </svg>
        </div>
        <div class="card-body">
            <div class="rate">
                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 14 14"
                    fill="none">
                    <g clip-path="url(#clip0_1_1345)">
                        <path
                            d="M7.00033 9.68833L4.47666 11.0834L4.95866 8.12863L2.91699 6.0361L5.73871 5.605L7.00033 2.91669L8.26194 5.605L11.0837 6.0361L9.04199 8.12863L9.52399 11.0834L7.00033 9.68833Z"
                            fill="#FFDD45" stroke="#FFDD45" stroke-width="3" stroke-linecap="square" />
                    </g>
                    <defs>
                        <clipPath id="clip0_1_1345">
                            <rect width="14" height="14" fill="white" />
                        </clipPath>
                    </defs>
                </svg>
                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 14 14"
                    fill="none">
                    <g clip-path="url(#clip0_1_1345)">
                        <path
                            d="M7.00033 9.68833L4.47666 11.0834L4.95866 8.12863L2.91699 6.0361L5.73871 5.605L7.00033 2.91669L8.26194 5.605L11.0837 6.0361L9.04199 8.12863L9.52399 11.0834L7.00033 9.68833Z"
                            fill="#FFDD45" stroke="#FFDD45" stroke-width="3" stroke-linecap="square" />
                    </g>
                    <defs>
                        <clipPath id="clip0_1_1345">
                            <rect width="14" height="14" fill="white" />
                        </clipPath>
                    </defs>
                </svg>
                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 14 14"
                    fill="none">
                    <g clip-path="url(#clip0_1_1345)">
                        <path
                            d="M7.00033 9.68833L4.47666 11.0834L4.95866 8.12863L2.91699 6.0361L5.73871 5.605L7.00033 2.91669L8.26194 5.605L11.0837 6.0361L9.04199 8.12863L9.52399 11.0834L7.00033 9.68833Z"
                            fill="#FFDD45" stroke="#FFDD45" stroke-width="3" stroke-linecap="square" />
                    </g>
                    <defs>
                        <clipPath id="clip0_1_1345">
                            <rect width="14" height="14" fill="white" />
                        </clipPath>
                    </defs>
                </svg>
                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 14 14"
                    fill="none">
                    <g clip-path="url(#clip0_1_1345)">
                        <path
                            d="M7.00033 9.68833L4.47666 11.0834L4.95866 8.12863L2.91699 6.0361L5.73871 5.605L7.00033 2.91669L8.26194 5.605L11.0837 6.0361L9.04199 8.12863L9.52399 11.0834L7.00033 9.68833Z"
                            fill="#FFDD45" stroke="#FFDD45" stroke-width="3" stroke-linecap="square" />
                    </g>
                    <defs>
                        <clipPath id="clip0_1_1345">
                            <rect width="14" height="14" fill="white" />
                        </clipPath>
                    </defs>
                </svg>
                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 14 14"
                    fill="none">
                    <g clip-path="url(#clip0_1_1345)">
                        <path
                            d="M7.00033 9.68833L4.47666 11.0834L4.95866 8.12863L2.91699 6.0361L5.73871 5.605L7.00033 2.91669L8.26194 5.605L11.0837 6.0361L9.04199 8.12863L9.52399 11.0834L7.00033 9.68833Z"
                            fill="#FFDD45" stroke="#FFDD45" stroke-width="3" stroke-linecap="square" />
                    </g>
                    <defs>
                        <clipPath id="clip0_1_1345">
                            <rect width="14" height="14" fill="white" />
                        </clipPath>
                    </defs>
                </svg>
            </div>
            <div class="card-title">
                <h3>${product.name}</h3>
            </div>
            <div class="price">
                <h3>$${product.price}</h3>
                <span>From $${product.discountPrice}</span>
            </div>
            <div class="add-btn">
                <button type="button" class="btn btn-outline-dark">Add to card </button>
            </div>
        </div>
    </div>
</div>
    `;
  });
});


let bestSellerWrapper = document.querySelector(".best-seller");
document.addEventListener("DOMContentLoaded", async () => {
    products = await getAllProducts();
    console.log(products);
    products.forEach((product) => {
      console.log(swiperWrapper);
      bestSellerWrapper.innerHTML += `
    <div class="swiper-slide slider">
    <div class="card">
        <div class="imgbox">
            <img src="${product.imageURL}" alt="">
            <div class="new">
                <span>New</span>
            </div>
            <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 22 22"
                fill="none">
                <path
                    d="M10.9997 19.25L9.67051 18.0631C4.94967 13.8639 1.83301 11.0944 1.83301 7.6955C1.83301 4.92602 4.05134 2.75 6.87467 2.75C8.46967 2.75 10.0005 3.47834 10.9997 4.62929C11.9988 3.47834 13.5297 2.75 15.1247 2.75C17.948 2.75 20.1663 4.92602 20.1663 7.6955C20.1663 11.0944 17.0497 13.8639 12.3288 18.0721L10.9997 19.25Z"
                    stroke="#DF4244" stroke-width="2" stroke-linecap="square" />
            </svg>
        </div>
        <div class="card-body">
            <div class="rate">
                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 14 14"
                    fill="none">
                    <g clip-path="url(#clip0_1_1345)">
                        <path
                            d="M7.00033 9.68833L4.47666 11.0834L4.95866 8.12863L2.91699 6.0361L5.73871 5.605L7.00033 2.91669L8.26194 5.605L11.0837 6.0361L9.04199 8.12863L9.52399 11.0834L7.00033 9.68833Z"
                            fill="#FFDD45" stroke="#FFDD45" stroke-width="3" stroke-linecap="square" />
                    </g>
                    <defs>
                        <clipPath id="clip0_1_1345">
                            <rect width="14" height="14" fill="white" />
                        </clipPath>
                    </defs>
                </svg>
                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 14 14"
                    fill="none">
                    <g clip-path="url(#clip0_1_1345)">
                        <path
                            d="M7.00033 9.68833L4.47666 11.0834L4.95866 8.12863L2.91699 6.0361L5.73871 5.605L7.00033 2.91669L8.26194 5.605L11.0837 6.0361L9.04199 8.12863L9.52399 11.0834L7.00033 9.68833Z"
                            fill="#FFDD45" stroke="#FFDD45" stroke-width="3" stroke-linecap="square" />
                    </g>
                    <defs>
                        <clipPath id="clip0_1_1345">
                            <rect width="14" height="14" fill="white" />
                        </clipPath>
                    </defs>
                </svg>
                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 14 14"
                    fill="none">
                    <g clip-path="url(#clip0_1_1345)">
                        <path
                            d="M7.00033 9.68833L4.47666 11.0834L4.95866 8.12863L2.91699 6.0361L5.73871 5.605L7.00033 2.91669L8.26194 5.605L11.0837 6.0361L9.04199 8.12863L9.52399 11.0834L7.00033 9.68833Z"
                            fill="#FFDD45" stroke="#FFDD45" stroke-width="3" stroke-linecap="square" />
                    </g>
                    <defs>
                        <clipPath id="clip0_1_1345">
                            <rect width="14" height="14" fill="white" />
                        </clipPath>
                    </defs>
                </svg>
                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 14 14"
                    fill="none">
                    <g clip-path="url(#clip0_1_1345)">
                        <path
                            d="M7.00033 9.68833L4.47666 11.0834L4.95866 8.12863L2.91699 6.0361L5.73871 5.605L7.00033 2.91669L8.26194 5.605L11.0837 6.0361L9.04199 8.12863L9.52399 11.0834L7.00033 9.68833Z"
                            fill="#FFDD45" stroke="#FFDD45" stroke-width="3" stroke-linecap="square" />
                    </g>
                    <defs>
                        <clipPath id="clip0_1_1345">
                            <rect width="14" height="14" fill="white" />
                        </clipPath>
                    </defs>
                </svg>
                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 14 14"
                    fill="none">
                    <g clip-path="url(#clip0_1_1345)">
                        <path
                            d="M7.00033 9.68833L4.47666 11.0834L4.95866 8.12863L2.91699 6.0361L5.73871 5.605L7.00033 2.91669L8.26194 5.605L11.0837 6.0361L9.04199 8.12863L9.52399 11.0834L7.00033 9.68833Z"
                            fill="#FFDD45" stroke="#FFDD45" stroke-width="3" stroke-linecap="square" />
                    </g>
                    <defs>
                        <clipPath id="clip0_1_1345">
                            <rect width="14" height="14" fill="white" />
                        </clipPath>
                    </defs>
                </svg>
            </div>
            <div class="card-title">
                <h3>${product.name}</h3>
            </div>
            <div class="price">
                <h3>$${product.price}</h3>
                <span>From $${product.discountPrice}</span>
            </div>
            <div class="add-btn">
                <button type="button" class="btn btn-outline-dark">Add to card </button>
            </div>
        </div>
    </div>
</div>
    `;
    });
  });

let discountProductWrapper = document.querySelector(".discount-product");
document.addEventListener("DOMContentLoaded", async () => {
    products = await getAllProducts();
    console.log(products);
    products.forEach((product) => {
      console.log(swiperWrapper);
      discountProductWrapper.innerHTML += `
    <div class="swiper-slide slider">
    <div class="card">
        <div class="imgbox">
            <img src="${product.imageURL}" alt="">
            <div class="new">
                <span>New</span>
            </div>
            <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 22 22"
                fill="none">
                <path
                    d="M10.9997 19.25L9.67051 18.0631C4.94967 13.8639 1.83301 11.0944 1.83301 7.6955C1.83301 4.92602 4.05134 2.75 6.87467 2.75C8.46967 2.75 10.0005 3.47834 10.9997 4.62929C11.9988 3.47834 13.5297 2.75 15.1247 2.75C17.948 2.75 20.1663 4.92602 20.1663 7.6955C20.1663 11.0944 17.0497 13.8639 12.3288 18.0721L10.9997 19.25Z"
                    stroke="#DF4244" stroke-width="2" stroke-linecap="square" />
            </svg>
        </div>
        <div class="card-body">
            <div class="rate">
                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 14 14"
                    fill="none">
                    <g clip-path="url(#clip0_1_1345)">
                        <path
                            d="M7.00033 9.68833L4.47666 11.0834L4.95866 8.12863L2.91699 6.0361L5.73871 5.605L7.00033 2.91669L8.26194 5.605L11.0837 6.0361L9.04199 8.12863L9.52399 11.0834L7.00033 9.68833Z"
                            fill="#FFDD45" stroke="#FFDD45" stroke-width="3" stroke-linecap="square" />
                    </g>
                    <defs>
                        <clipPath id="clip0_1_1345">
                            <rect width="14" height="14" fill="white" />
                        </clipPath>
                    </defs>
                </svg>
                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 14 14"
                    fill="none">
                    <g clip-path="url(#clip0_1_1345)">
                        <path
                            d="M7.00033 9.68833L4.47666 11.0834L4.95866 8.12863L2.91699 6.0361L5.73871 5.605L7.00033 2.91669L8.26194 5.605L11.0837 6.0361L9.04199 8.12863L9.52399 11.0834L7.00033 9.68833Z"
                            fill="#FFDD45" stroke="#FFDD45" stroke-width="3" stroke-linecap="square" />
                    </g>
                    <defs>
                        <clipPath id="clip0_1_1345">
                            <rect width="14" height="14" fill="white" />
                        </clipPath>
                    </defs>
                </svg>
                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 14 14"
                    fill="none">
                    <g clip-path="url(#clip0_1_1345)">
                        <path
                            d="M7.00033 9.68833L4.47666 11.0834L4.95866 8.12863L2.91699 6.0361L5.73871 5.605L7.00033 2.91669L8.26194 5.605L11.0837 6.0361L9.04199 8.12863L9.52399 11.0834L7.00033 9.68833Z"
                            fill="#FFDD45" stroke="#FFDD45" stroke-width="3" stroke-linecap="square" />
                    </g>
                    <defs>
                        <clipPath id="clip0_1_1345">
                            <rect width="14" height="14" fill="white" />
                        </clipPath>
                    </defs>
                </svg>
                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 14 14"
                    fill="none">
                    <g clip-path="url(#clip0_1_1345)">
                        <path
                            d="M7.00033 9.68833L4.47666 11.0834L4.95866 8.12863L2.91699 6.0361L5.73871 5.605L7.00033 2.91669L8.26194 5.605L11.0837 6.0361L9.04199 8.12863L9.52399 11.0834L7.00033 9.68833Z"
                            fill="#FFDD45" stroke="#FFDD45" stroke-width="3" stroke-linecap="square" />
                    </g>
                    <defs>
                        <clipPath id="clip0_1_1345">
                            <rect width="14" height="14" fill="white" />
                        </clipPath>
                    </defs>
                </svg>
                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 14 14"
                    fill="none">
                    <g clip-path="url(#clip0_1_1345)">
                        <path
                            d="M7.00033 9.68833L4.47666 11.0834L4.95866 8.12863L2.91699 6.0361L5.73871 5.605L7.00033 2.91669L8.26194 5.605L11.0837 6.0361L9.04199 8.12863L9.52399 11.0834L7.00033 9.68833Z"
                            fill="#FFDD45" stroke="#FFDD45" stroke-width="3" stroke-linecap="square" />
                    </g>
                    <defs>
                        <clipPath id="clip0_1_1345">
                            <rect width="14" height="14" fill="white" />
                        </clipPath>
                    </defs>
                </svg>
            </div>
            <div class="card-title">
                <h3>${product.name}</h3>
            </div>
            <div class="price">
                <h3>$${product.price}</h3>
                <span>From $${product.discountPrice}</span>
            </div>
            <div class="add-btn">
                <button type="button" class="btn btn-outline-dark">Add to card </button>
            </div>
        </div>
    </div>
</div>
    `;
    });
  });