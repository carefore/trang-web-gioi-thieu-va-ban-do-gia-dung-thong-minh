// JavaScript và jQuery để tải lại danh sách sản phẩm khi một sản phẩm mới được thêm vào

$(document).ready(function() {
  // Xử lý form submit
  $('#productForm').submit(function(e) {
    e.preventDefault(); // Ngăn chặn form submit mặc định

    // Gửi dữ liệu form bằng AJAX
    $.ajax({
      type: 'POST',
      url: 'save_product.php',
      data: $(this).serialize(),
      success: function(response) {
        alert(response); // Hiển thị thông báo thành công
        $('#productForm')[0].reset(); // Xóa các trường nhập liệu sau khi thêm sản phẩm thành công
        loadProducts(); // Tải lại danh sách sản phẩm
      }
    });
  });

  // Hàm để tải lại danh sách sản phẩm
  function loadProducts() {
    $.ajax({
      type: 'GET',
      url: 'get_products.php', // Tạo file PHP để lấy danh sách sản phẩm từ cơ sở dữ liệu
      success: function(response) {
        $('#productsContainer').html(response); // Hiển thị danh sách sản phẩm
      }
    });
  }

  // Tải danh sách sản phẩm khi trang web được tải
  loadProducts();
});
