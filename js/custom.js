// Slider Header Index
$(document).ready(function(){
    $("#slide-img").owlCarousel({
        loop: true,
        autoplay: true,
        autoplayTimeout: 3000,
        items: 1,
        margin: 0,
        center: true,
        autowidth: true,
        dots: false,
        lazyLoad: true
    });
    // Nội dung của slider
    let sliderContent = `
        <div class="container slider-content">
            <div class="row justify-content-center align-items-center mt-5">
                <div class="col-lg-auto">
                    <div class="text-center justify-content-center">
                        <h1 class="text-white">Easiest way to find your dream home</h1>
                        <form action="#" class="row justify-content-center">
                            <div class="col-lg-6">
                                <input type="text" class="form-control rounded-5" placeholder="Your ZIP code or City. e.g. New York">
                            </div>
                            <div class="col-lg-auto clearfix">
                                <button type="button" class="btn btn-outline-success bs-primary rounded-5 float-lg-start">Search</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    `;
    // Chèn nội dung vào các slider
    $("#slide-img .item").each(function() {
        $(this).append(sliderContent);
    });
});


// Slider Products
$('#product').owlCarousel({
    loop: true,
    autoplay: true,
    autoplayTimeout: 3000,
    items: 1,
    margin: 0,
    center: true,
    autowidth: true,
    dots: false,
    lazyLoad: true,
    responsiveClass:true,
    responsive:{
        0:{
            items:1,
            nav:false
        },
        768 : {
            items:3,
            nav:false
        },
    }
})

// Pagination
// Chuyển hướng từ trang hiện tại sang trang được nhấp vào
const handlePageClick = (event) => {
    event.preventDefault(); // Ngăn chặn chuyển hướng mặc định của thẻ <a>
    const pageId = event.target.id;
    
    // Thêm class "active" cho phần tử được nhấp vào
    const clickedLink = document.getElementById(pageId);
    clickedLink.classList.add('active');
    
    // Xóa class "active" từ tất cả các phần tử menu trừ phần tử được nhấp vào
    const menuLinks = document.querySelectorAll('.custom-pagination .nav-link');
    menuLinks.forEach(link => {
        if (link !== clickedLink) {
            link.classList.remove('active');
        }
    });
    
    // Chuyển hướng đến trang tương ứng
    window.location.href = `${pageId}.html`;
};

// Gọi phương thức document.getElementsByClassName và lưu kết quả vào một biến (ví dụ: paginationLinks)
const paginationLinks = document.querySelectorAll('.custom-pagination .nav-link');

// Duyệt qua từng phần tử trong NodeList và gắn sự kiện click vào từng phần tử
paginationLinks.forEach(link => {
    link.addEventListener('click', handlePageClick);
});