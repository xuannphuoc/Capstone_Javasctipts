import service from "../service/api.js";
// import product from "../models/product.js";
import Product from "../model/product.js";

function getId(id) {
  return document.getElementById(id);
}

function getListProduct() {
  const promise = service.fetchListData();
  /**
   * Promise: có 3 trạng thái
   *      - pending (chờ)
   *      - resolve (thực hiện)
   *      - reject (không thực hiện)
   */
  // hàm Axios
  // const promise = axios({
  //     url: "https://688b65992a52cabb9f519560.mockapi.io/api/Product",
  //     method: "GET"
  // });

  // cú pháp của promise

  // pending
  getId("loader").style.display = "block";

  promise
    // truyền đối số là callback function
    .then(function (result) {
      console.log(result.data);
      // gọi lại renderHTML để khi có danh sách thì mới hiện lên
      renderHTML(result.data);
      // loader hide
      getId("loader").style.display = "none";
    })
    .catch(function (error) {
      console.log(error);
      // loader hide
      getId("loader").style.display = "none";
    });
}

// render ra ngoài giao diện
function renderHTML(data) {
  console.log("render", data);
  let contentHTML = "";

  for (let i = 0; i < data.length; i++) {
    const product = data[i];
    contentHTML += `
        <tr>
            <td>${i + 1}</td>
            <td>${product.name}</td>
            <td>${product.price}</td>
            <td>${product.image}</td>
            <td>${product.desciption}</td>
            <td>
                <button class="btn btn-info" data-toggle="modal" data-target="#myModal" onclick="onEditProduct(${
                  product.id
                })">Edit</button>
                <button class="btn btn-danger" onclick="onDelete(${
                  product.id
                })">Delete</button>
                
            </td>
            
        </tr>
        `;
  }
  document.getElementById("tblDanhSachSP").innerHTML = contentHTML;
}

getListProduct();

// Delete
function onDelete(id) {
  const promise = service.deleteProductApi(id);

  // pending
  getId("loader").style.display = "block";
  promise
    .then(function (result) {
      console.log(result);
      // re-render tbody khi f5 lai web la listProduct
      getListProduct();

      // loader hide
      getId("loader").style.display = "none";
    })
    .catch(function (error) {
      console.log(error);

      // loader
      getId("loader").style.display = "none";
    });
}

window.onDelete = onDelete;

// btnThemSP = Open Modal

getId("btnThemSP").addEventListener("click", function () {
  // Update title Modal
  document.getElementsByClassName("modal-title")[0].innerHTML = "Add Product";

  // Create button "Add product" => innerHTML ModalFooter
  const btnAddProduct = `<button class="btn btn-primary" onclick="onAddProduct()">Add Product</button>`;
  document.getElementsByClassName("modal-footer")[0].innerHTML = btnAddProduct;
});

// Add product
function onAddProduct() {
  // Lay thong tin tu user nhap
  const name = getId("TenSP").value;
  const price = getId("GiaSP").value;
  const image = getId("HinhSP").value;
  const desc = getId("moTa").value;

  // create object product
  const product = new Product("", name, price, image, desc);
  getId("loader").style.display = "block";

  // request api add product
  service
    .addProductApi(product)
    .then(function (result) {
      getId("loader").style.display = "none";
      const data = result.data;
      alert(`Add product ${data.name} success`);
      // close modal
      document.getElementsByClassName("close")[0].click();
      // re-render get list product
      getListProduct();
    })
    .catch(function (error) {
      // loader hide
      getId("loader").style.display = "none";
      console.log(error);
    });
}

window.onAddProduct = onAddProduct;

// edit product
function onEditProduct(id) {
  console.log(id);

  document.getElementsByClassName("modal-title")[0].innerHTML =
    "Update Product";

  // Create button "Add product" => innerHTML ModalFooter
  const btnUpdateProduct = `<button class="btn btn-warning" onclick="onUpdateProduct(${id})">Update Product</button>`;
  document.getElementsByClassName("modal-footer")[0].innerHTML =
    btnUpdateProduct;

  service
    .getProductByIdApi(id)
    .then(function (result) {
      // populate product => input
      const data = result.data;
      getId("TenSP").value = data.name;
      getId("GiaSP").value = data.price;
      getId("HinhSP").value = data.image;
      getId("moTa").value = data.desciption;
    })
    .catch(function (error) {
      console.log(error);
      getId("loader").style.display = "none";
    });
}

window.onEditProduct = onEditProduct;

// Update product
function onUpdateProduct(id) {
  // Lay thong tin tu user nhap
  const name = getId("TenSP").value;
  const price = getId("GiaSP").value;
  const image = getId("HinhSP").value;
  const desc = getId("moTa").value;

  // create object product
  const product = new Product(id, name, price, image, desc);
  //   getId("loader").style.display = "block";
  service
    .updateProductApi(product)
    .then(function (result) {
      getId("loader").style.display = "none";
      const data = result.data;
      alert(`Update ${data.name} success`);
      // close modal
      document.getElementsByClassName("close")[0].click();

      // re-render
      getListProduct();
    })
    .catch(function (error) {
      console.log(error);
      getId("loader").style.display = "none";
    });
}

window.onUpdateProduct = onUpdateProduct;
