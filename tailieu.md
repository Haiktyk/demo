# nhúng javascrip vào html :
- Dùng cặp thẻ <script></script> để nhúng JavaScript vào file HTML
- Dùng thẻ link để nhúng JavaScript vào file HTML (Viết file riêng có đuôi .js)
# cú pháp khai báo biến :
- var tenbien;
- let tenbien;(Biến khai báo với let không thể khai báo lại, tuy 
nhiên, giá trị của biến có thể thay đổi
)
- const tenbien;(Biến khai báo với const (hằng số) không thể khai 
báo lại, và cũng không thể thay đổi giá trị)
- kyword name (khai báo không kèm giá trị)
- keyword name = value  (khai báo kèm giá trị)
# quy ước khi đặt tên biến:
- Tên biến chỉ được chứa ký tự, số, hoặc ký tự đặc biệt $ và _
- Tên biến không được bắt đầu bằng một số
- Tên biến có phân biệt chữ hoa, chữ thường
- Tên biến không được trùng với từ khóa của JavaScript
# 9 kiểu dữ liệu trong js:
1. number (bao gồm cả số nguyên và số thực, giới hạn -2^53 + 1 đến 2^53 - 1)
2. bigint
3. string(Là một chuỗi ký tự được đặt trong cặp dấu ‘ ’ hoặc"")
4. boolean (kiểu logic luôn trả về gái trị true  hoặc false)
5. undefined (còn undefined đại diện cho một đối tượng chưa được gán giá trị.)
6. null(null đại diện cho một đối tượng không tồn tại,)
7. symbol
8. object(object là kiểu dữ liệu đặc biệt, cho phép lưu trữ cùng lúc nhiều giá trị trong một biến duy nhất, các dữ 
liệu được lưu trong object có thể thuộc bất kỳ kiểu nào)
9. function(function là cách thức tổ chức mã cơ bản trong JavaScript, function được sử dụng để đóng gói một 
đoạn mã để xử lý một công việc/tính toán giá trị nào đó, cho phép tái sử dụng đoạn mã ở nhiều nơi 
trong chương trình
)
- Kiểm tra kiểu dữ liệu của một biến/giá trị, sử dụng typeof
# Local vs Global Variables
Một biến được khai báo bên trong hàm được gọi là biến local - chỉ tồn tại bên trong hàm đó
Ngược lại các biến khai báo bên ngoài tất cả các function (hoặc khối code) được gọi là biến global - có 
thể truy cập ở mọi nơi
Thông thường, nên tránh truy cập trực tiếp tới giá trị của một biến bên ngoài hàm, thay vào đó nên sử 
dụng tham số - parameters và đối số - arguments
Local vs Global Variable

# Toán tử trong js:
- Arithmetic
- Comparision
- Assignment
- Logical
- Bitwise
# quy tắc chuyển đổi kiểu dữ liệu :
 ## chuyển đổi về string:
 1. với phép +
 nếu 1 trong 2 toán hạng (giá trị ) có kiểu chuỗi,
 thì giá trị còn lại cũng chuyển thành kiểu chuỗi
 2. các toán tử toán học khác ( -*....) thì ưu tiên chuyển sang số
 ## chuyển đổi các kiểu khác về kiểu "boolean ":
 1. các giá trị đặc biệt như : "", 0, null, undefined, NaN trả về là false
 2. còn lại tất cả là true
 ## Trả về kiểu number:
 1 số giá trị đặc biệt:
 
 - number(null); trả về 0
 - number(undefined); trả về NaN
 - number(true); trả về 1
 - number(false); trả về 0
 - number(" 12  "); trả về 12
 - number("5bj"); trả về NaN
 - number(""); trả về 0
 ## 1 số toán tử cơ bản :

1. (+) phép cộng	  25 + 5 = 30
2. (-)	phép trừ	10 - 5 = 5
3. (*)	phép nhân	2*3 = 6
4. (/)	phép chia	20 / 2 = 10
5. (%)	lấy phần dư của phép chia	56 / 3 = 2
6. (++)	Tăng thêm 1	var a = 10; a ++; //giá trị a là 11
7. (--)	giảm đi 1	var a = 10; a --; //giá trị a là 9
## toán tử logic :
- ||- or tìm giá trị đúng đầu tiên trong biểu thức và trả về giá trị đó, nếu không có thì trả về giá trị cuối 
cùng trong biểu thức
- && - and tìm giá trị sai đầu tiên trong biểu thức và trả về giá trị đó, nếu không có thì trả về giá trị cuối 
cùng trong biểu thức
- ! - not chuyển giá trị về kiểu boolean và phủ định nó