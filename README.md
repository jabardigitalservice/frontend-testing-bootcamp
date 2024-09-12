# Unit Test Workshop
Lengkapi unit test untuk utility function yang ada pada folder `/_javascript/src/utils`

# Integration Test Workshop
Buatlah integration test pada aplikasi (berdasarkan framework pilihan kamu). Pastikan aplikasi sudah memenuhi Acceptance Criteria di bawah ini:

## Acceptance Criteria

### 1. Product Card
- Product card harus menampilkan gambar produk
- Product card harus menampilkan nama produk
- Product card harus menampilkan deskripsi produk
- Product card harus menampilkan harga produk
- Bila produk memiliki diskon, tampilkan label diskon di pojok kanan atas Product Card
- Bila produk memiliki diskon, tampilkan harga asli produk (dicoret/striketrough) dan tampilkan harga setelah diskon

### 2. Product List
- Product list menampilkan 8 produk secara default (initial render)
- Ketika user menginput kata kunci dalam input search, tampilkan produk yang cocok berdasarkan hasil pencarian
- Ketika user menghapus kata kunci dalam input search, tampilkan seluruh produk (initial render)
- Ketika user mengklik tombol "Load more product", tampilkan seluruh produk (16 produk)
- Tombol "Load more product" hilang ketika produk yang ditampilkan sudah sesuai dengan jumlah produk yang tersedia atau ketika user menginput kata kunci

