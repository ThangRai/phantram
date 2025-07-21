// Hàm định dạng số: nếu là số tròn thì bỏ .00
function formatNumber(num) {
  let val = parseFloat(num);
  if (isNaN(val)) return '';
  let str = val.toFixed(2);
  return str.endsWith('.00') ? str.slice(0, -3) : str;
}

// 1. Tính phần trăm của một giá trị
document.getElementById('percent1').addEventListener('input', calcPercent1);
document.getElementById('value1').addEventListener('input', calcPercent1);
function calcPercent1() {
  let p = parseFloat(document.getElementById('percent1').value) || 0;
  let v = parseFloat(document.getElementById('value1').value) || 0;
  let result = (p / 100) * v;
  document.getElementById('result1').value = formatNumber(result);
}

// 2. Một số là bao nhiêu % của số khác
document.getElementById('value2').addEventListener('input', calcPercent2);
document.getElementById('value3').addEventListener('input', calcPercent2);
function calcPercent2() {
  let v1 = parseFloat(document.getElementById('value2').value) || 0;
  let v2 = parseFloat(document.getElementById('value3').value) || 0;
  let result = v2 === 0 ? 0 : (v1 / v2) * 100;
  document.getElementById('result2').value = formatNumber(result);
}

// 3. Phần trăm thay đổi (tăng / giảm)
document.getElementById('oldValue').addEventListener('input', calcChange);
document.getElementById('newValue').addEventListener('input', calcChange);
function calcChange() {
  let oldVal = parseFloat(document.getElementById('oldValue').value) || 0;
  let newVal = parseFloat(document.getElementById('newValue').value) || 0;
  if (oldVal === 0) {
    document.getElementById('result3').value = '0';
  } else {
    let result = ((newVal - oldVal) / oldVal) * 100;
    document.getElementById('result3').value = formatNumber(result);
  }
}

// 4. Tăng hoặc giảm theo phần trăm
document.getElementById('percent2').addEventListener('input', calcIncrease);
document.getElementById('value4').addEventListener('input', calcIncrease);
document.getElementById('action').addEventListener('change', calcIncrease);
function calcIncrease() {
  let p = parseFloat(document.getElementById('percent2').value) || 0;
  let v = parseFloat(document.getElementById('value4').value) || 0;
  let type = document.getElementById('action').value;
  let result = type === 'tang' ? v + (v * p / 100) : v - (v * p / 100);
  document.getElementById('result4').value = formatNumber(result);
}

// 5. Số X là Y% của số Z → tìm Z
document.getElementById('valueX').addEventListener('input', calcZ);
document.getElementById('percentY').addEventListener('input', calcZ);
function calcZ() {
  let x = parseFloat(document.getElementById('valueX').value) || 0;
  let y = parseFloat(document.getElementById('percentY').value) || 0;
  if (y === 0) {
    document.getElementById('result5').value = '0';
  } else {
    let result = x / (y / 100);
    document.getElementById('result5').value = formatNumber(result);
  }
}
function copyResult(id) {
  const input = document.getElementById(id);
  if (input && input.value.trim() !== "") {
    navigator.clipboard.writeText(input.value).then(() => {
      Swal.fire({
        title: "Đã sao chép!",
        text: "Kết quả đã được sao chép vào clipboard.",
        icon: "success",
        timer: 1500,
        showConfirmButton: false
      });
    });
  } else {
    Swal.fire({
      icon: "warning",
      title: "Chưa có kết quả!",
      text: "Vui lòng tính trước.",
      timer: 2000,
      showConfirmButton: false
    });
  }
}


document.querySelectorAll(".faq-question").forEach((question) => {
  question.addEventListener("click", () => {
    const isActive = question.classList.contains("active");

    // Đóng tất cả
    document.querySelectorAll(".faq-question").forEach((q) => {
      q.classList.remove("active");
      q.setAttribute("aria-expanded", "false");
    });
    document.querySelectorAll(".faq-answer").forEach((ans) => {
      ans.classList.remove("show", "animate__animated", "animate__bounceIn");
    });

    // Nếu chưa mở thì mở ra
    if (!isActive) {
      question.classList.add("active");
      question.setAttribute("aria-expanded", "true");
      const answer = question.nextElementSibling;
      answer.classList.add("show", "animate__animated", "animate__bounceIn");
    }
  });
});




// Thêm SweetAlert2 (đảm bảo đã có script cdn trong index.html):
// <script src="https://cdn.jsdelivr.net/npm/sweetalert2@11"></script>

// Hàm hiển thị thông báo SweetAlert2
// function showCopyAlert() {
//   Swal.fire({
//     icon: 'warning',
//     title: 'Thông báo',
//     text: 'Nội dung này không thể sao chép!',
//     confirmButtonText: 'OK',
//     confirmButtonColor: '#1e6dcc'
//   });
// }

// Chỉ chặn sự kiện copy (Ctrl+C hoặc menu Copy)
// document.addEventListener('copy', function (e) {
//   e.preventDefault(); // chặn sao chép
//   showCopyAlert();    // hiện popup
// });
