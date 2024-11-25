document
  .getElementById("diet-form")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    const name = document.getElementById("name").value;
    const age = parseInt(document.getElementById("age").value);
    const weight = parseFloat(document.getElementById("weight").value);
    const disease = document.getElementById("disease").value;

    let recommendation = "";
    let icon = "";
    let tujuan = "";

    switch (disease) {
      case "diabetes":
        icon = "🍎";
        recommendation =
          "Disarankan untuk menghindari makanan tinggi gula dan karbohidrat sederhana. Fokus pada sayuran, protein tanpa lemak, dan biji-bijian utuh.";
        tujuan =
          "Diet diabetes melitus disebut juga terapi gizi medis. Tujuan terapi gizi medis adalah membantu penyandang diabetes memperbaiki kebiasan makan dan olahraga untuk mendapatkan kontrol metabolik yang baik dengan cara:\n" +
          "1. Mempertahankan kadar glukosa darah mendekati normal\n" +
          "2. Mencapai dan mempertahankan kadar lipida serum normal\n" +
          "3. Memberi cukup energi untuk mempertahankan berat badan normal\n" +
          "4. Menghindari komplikasi\n" +
          "5. Meningkatkan derajat kesehatan secara keseluruhan";
        break;
      case "hipertensi":
        icon = "🥗";
        recommendation =
          "Diet DASH untuk menurunkan tekanan darah dengan membatasi natrium <2300 mg/hari dan meningkatkan asupan kalium.";
        tujuan =
          "Diet DASH bertujuan untuk:\n" +
          "1. Menurunkan tekanan darah pada penderita hipertensi\n" +
          "2. Sebagai langkah preventif terhadap hipertensi\n" +
          "3. Membantu penurunan berat badan\n" +
          "4. Menurunkan kadar kolesterol";
        break;
      case "kesulitan_menelan":
        icon = "🥄";
        recommendation =
          "Makanan lunak yang mudah ditelan dan dicerna. Diberikan dalam porsi sedang dengan frekuensi 3 kali makan utama dan 2-3 kali selingan.";
        tujuan =
          "Memberikan makanan yang sesuai dengan kemampuan pasien untuk mengunyah, menelan dan mencerna makanannya dalam upaya memenuhi kebutuhan gizi.";
        break;
      case "kep":
        icon = "🍗";
        recommendation =
          "Diet Energi Tinggi Protein Tinggi (ETPT) dengan energi 40-45 kkal/kg BB dan protein 2,0-2,5 g/kg BB.";
        tujuan =
          "1. Memenuhi kebutuhan energi dan protein yang meningkat\n" +
          "2. Mencegah dan mengurangi kerusakan jaringan tubuh\n" +
          "3. Meningkatkan berat badan hingga mencapai status gizi normal";
        break;
      case "gerd":
        icon = "🥛";
        recommendation =
          "Menghindari makanan yang meningkatkan asam lambung dan tekanan pada sfingter esofagus.";
        tujuan =
          "1. Mengurangi tekanan dalam lambung\n" +
          "2. Menghindari iritasi esofagus\n" +
          "3. Mengoptimalkan asupan zat gizi\n" +
          "4. Mencegah sekresi asam lambung berlebihan";
        break;
      case "diare":
        icon = "🍚";
        recommendation =
          "Diet rendah serat (<8g/hari), rendah laktosa, hindari makanan berlemak dan yang menimbulkan gas.";
        tujuan =
          "1. Memperbaiki keseimbangan cairan dan elektrolit\n" +
          "2. Mengganti kehilangan zat gizi\n" +
          "3. Mencegah inflamasi dan iritasi lebih lanjut\n" +
          "4. Mengistirahatkan usus pada masa akut";
        break;
      default:
        icon = "❓";
        recommendation = "Penyakit tidak dikenali. Silakan coba lagi.";
        break;
    }

    document.getElementById("result").innerHTML = `
    <p><strong><i class="fas fa-user"></i> Nama:</strong> ${name}</p>
    <p><strong><i class="fas fa-calendar-alt"></i> Usia:</strong> ${age} tahun</p>
    <p><strong><i class="fas fa-weight"></i> Berat Badan:</strong> ${weight} kg</p>
    <h3> Hasil Rekomendasi Diet</h3>
        <p><strong><i class="fas fa-notes-medical"></i> Rekomendasi Diet:</strong></p>
        <p>${recommendation}</p>
        <p><strong><i class="fas fa-notes-medical"></i> tujuan Diet:</strong></p>
        <p>${tujuan}</p>
    `;
  });
