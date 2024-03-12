var arr = [
    {
      image:
        "https://maydep.vn/wp-content/uploads/2021/12/kieu-quan-tay-nam-ong-dung-dep-DQNA0008.jpg",
      name: "The cosmo(Đen) Quần short khaki",
      price: "370.000 vnđ",
      discount: "269.000 vnđ",
    },
    {
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRW2KNl9zfeBjguhZChBG25Tp8ou2rZ-HUaYQ&usqp=CAU",
      name: "The cosmo(Đen) Quần short khaki",
      price: "370.000 vnđ",
      discount: "169.000 vnđ",
    },
    {
      image:
        "https://down-vn.img.susercontent.com/file/sg-11134201-22100-pbrp1w40vviv42",
      name: "Quần jean nữ-KO0002",
      discount: "269.000 vnđ",
      price: "370.000 vnđ",
    },
  ];

  var women = [
    {
      image:
        "https://down-vn.img.susercontent.com/file/sg-11134201-22100-pbrp1w40vviv42",
      name: "Quần jean nữ-KO0002",
      discount: "269.000 vnđ",
      price: "370.000 vnđ",
    },
    {
      image:
        "https://zizoou.com/cdn/shop/products/Ao-khoac-jacket-form-rong-oversize-7-6-Ao-khoac-trang-be-ZiZoou-Store_de69df3e-1358-47b4-a3cf-6ed5a99b7782.jpg?v=1677890431",
      name: "Áo khoác nữ-VN0002",
      discount: "249.000 vnđ",
      price: "369.000 vnđ",
    },
    {
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRtZJ03xY0cIeMI3dOtvB1hvSXbiOHHhpH5TA&usqp=CAU",
      name: "Áo phông nữ-US0002",
      discount: "169.000 vnđ",
      price: "390.000 vnđ",
    },
  ];

  function show(data) {
    var html = "";
    for (var i = 0; i < data.length; i++) {
      html += "<div class='card'>";
      html += "<img src='" + data[i].image + "' alt='product image'>";
      html += "<div class='card-body'>";
      html += "<h5 class='card-title'>" + data[i].name + "</h5>";
      html += "<p class='card-text'>Price: " + data[i].price + "</p>";
      html += "<p class='card-text'>Discount: " + data[i].discount + "</p>";
      html += "<button onclick='editProduct(" + i + ")'>Edit</button>";
      html += "<button onclick='deleteProduct(" + i + ")'>Delete</button>";
      html += "</div></div>";
    }

    document.getElementById("tbl").innerHTML = html;
  }

  function createProduct() {
    var productName = document.getElementById("productName").value;
    var productImage = document.getElementById("productImage").value;
    var productPrice = document.getElementById("productPrice").value;
    var productDiscount = document.getElementById("productDiscount").value;
    var productGender = document.getElementById("productGender").value;

    var newProduct = {
      name: productName,
      image: productImage,
      price: productPrice,
      discount: productDiscount,
    };

    if (productGender === "men") {
      arr.push(newProduct);
    } else if (productGender === "women") {
      women.push(newProduct);
    }

    document.getElementById("productName").value = "";
    document.getElementById("productImage").value = "";
    document.getElementById("productPrice").value = "";
    document.getElementById("productDiscount").value = "";

    show(productGender === "men" ? arr : women);
  }

  function editProduct(index) {
    document.getElementById("editProductName").value = arr[index].name;
    document.getElementById("editProductImage").value = arr[index].image;
    document.getElementById("editProductPrice").value = arr[index].price;
    document.getElementById("editProductDiscount").value =
      arr[index].discount;

    document.getElementById("editForm").style.display = "block";
  }

  function updateProduct() {
    var newName = document.getElementById("editProductName").value;
    var newImage = document.getElementById("editProductImage").value;
    var newPrice = document.getElementById("editProductPrice").value;
    var newDiscount = document.getElementById("editProductDiscount").value;

    var indexToUpdate = parseInt(
      document.getElementById("editIndex").value
    );
    arr[indexToUpdate].name = newName;
    arr[indexToUpdate].image = newImage;
    arr[indexToUpdate].price = newPrice;
    arr[indexToUpdate].discount = newDiscount;

    document.getElementById("editForm").style.display = "none";

    show(arr);
  }

  function deleteProduct(index) {
    arr.splice(index, 1);
    show(arr);
  }