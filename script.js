function findZodiac() {
    // Tampilkan elemen loading
    document.getElementById('loading').style.display = 'block';
    document.getElementById('result').innerText = '';
    document.getElementById('compatibility').innerText = '';
    document.getElementById('compatibilityReason').innerText = '';
    document.getElementById('favoriteFood').innerText = '';
    document.getElementById('conflictAdvice').innerText = '';

    // Ambil tanggal lahir
    const birthdate = new Date(document.getElementById('birthdate').value);
    const month = birthdate.getMonth() + 1; // getMonth() returns 0-11, so we add 1
    const day = birthdate.getDate();

    let zodiac = '';
    let compatibility = '';
    let compatibilityReason = '';
    let favoriteFood = '';
    let conflictAdvice = '';

    // Tentukan zodiak berdasarkan tanggal
    if ((month == 1 && day >= 20) || (month == 2 && day <= 18)) {
        zodiac = 'Aquarius';
        compatibility = 'Paling serasi dengan Gemini dan Libra';
        compatibilityReason = 'Aquarius, sebagai zodiak yang inovatif dan bebas, memiliki daya tarik yang kuat terhadap Gemini yang juga berpikir di luar kotak. Keduanya menyukai kebebasan dan perubahan, sehingga mereka dapat saling mendukung dalam mengeksplorasi ide-ide baru. Di sisi lain, Libra, yang dikenal sebagai pencari keseimbangan, dapat memberikan stabilitas dan keindahan dalam hubungan mereka. Keduanya saling melengkapi dalam hal komunikasi dan pemahaman emosional.';
        favoriteFood = 'Makanan Kesukaan: Makanan sehat seperti salad dan smoothie.';
        conflictAdvice = 'Ketika berantem, Aquarius sebaiknya tidak terbawa emosi. Cobalah untuk tetap tenang dan gunakan logika dalam menyelesaikan masalah. Diskusikan pandangan masing-masing dengan terbuka dan jangan ragu untuk mencari solusi bersama.';
    } else if ((month == 2 && day >= 19) || (month == 3 && day <= 20)) {
        zodiac = 'Pisces';
        compatibility = 'Paling serasi dengan Cancer dan Scorpio';
        compatibilityReason = 'Pisces adalah zodiak yang sangat emosional dan intuitif. Kecocokan mereka dengan Cancer yang sensitif menciptakan hubungan yang dalam dan penuh kasih. Keduanya memahami kebutuhan emosional masing-masing dan dapat saling memberi dukungan yang dibutuhkan. Scorpio, dengan kedalaman emosinya, mampu menarik perhatian Pisces dan memberikan rasa aman, sementara Pisces dapat membantu Scorpio untuk lebih terbuka dan menerima kelemahan mereka.';
        favoriteFood = 'Makanan Kesukaan: Makanan laut segar dan hidangan berbasis pasta.';
        conflictAdvice = 'Saat bertengkar, Pisces sebaiknya berbicara dari hati dan ungkapkan perasaan dengan jujur. Jangan ragu untuk menunjukkan kerentanan, tetapi juga dengarkan dengan baik pasangan Anda untuk mencapai pemahaman bersama.';
    } else if ((month == 3 && day >= 21) || (month == 4 && day <= 19)) {
        zodiac = 'Aries';
        compatibility = 'Paling serasi dengan Leo dan Sagittarius';
        compatibilityReason = 'Aries, yang dikenal dengan keberanian dan semangatnya, memiliki kecocokan alami dengan Leo yang karismatik. Keduanya adalah pemimpin yang berani, dan bersama-sama mereka dapat menciptakan petualangan yang penuh gairah. Sagittarius, yang optimis dan menyukai kebebasan, juga menarik bagi Aries karena mereka saling menghargai independensi satu sama lain. Ketiganya dapat membentuk hubungan yang dinamis dan penuh energi.';
        favoriteFood = 'Makanan Kesukaan: Makanan pedas seperti kari dan taco.';
        conflictAdvice = 'Ketika berkonflik, Aries harus belajar untuk menahan diri dan tidak berdebat dengan emosi yang membara. Alih-alih menyerang, cobalah untuk mencari kompromi dan berbicara dengan tenang agar pesan Anda tersampaikan dengan jelas.';
    } else if ((month == 4 && day >= 20) || (month == 5 && day <= 20)) {
        zodiac = 'Taurus';
        compatibility = 'Paling serasi dengan Virgo dan Capricorn';
        compatibilityReason = 'Taurus adalah zodiak yang praktis dan stabil, dan mereka menemukan keselarasan dengan Virgo yang teratur serta Capricorn yang ambisius. Ketiga zodiak ini menghargai keamanan dan kenyamanan dalam hubungan, yang membuat mereka mampu membangun fondasi yang kuat. Taurus dan Virgo saling mendukung dalam hal detail dan organisasi, sementara Capricorn membantu mereka untuk meraih tujuan bersama dengan cara yang terencana.';
        favoriteFood = 'Makanan Kesukaan: Makanan lezat dan gurih seperti steak dan hidangan berbasis keju.';
        conflictAdvice = 'Saat terjadi pertengkaran, Taurus harus berusaha untuk tidak keras kepala. Berikan ruang untuk mendengar perspektif pasangan dan berkomunikasilah dengan lembut untuk mencapai kesepakatan.';
    } else if ((month == 5 && day >= 21) || (month == 6 && day <= 20)) {
        zodiac = 'Gemini';
        compatibility = 'Paling serasi dengan Libra dan Aquarius';
        compatibilityReason = 'Gemini, sebagai zodiak yang cerdas dan komunikatif, menemukan kecocokan yang kuat dengan Libra yang diplomatis. Keduanya dapat menghabiskan waktu berjam-jam membahas berbagai topik, dan saling menginspirasi dalam berpikir kreatif. Aquarius, dengan visi futuristiknya, juga menambah daya tarik pada hubungan ini. Keduanya menghargai kebebasan dan independensi, memungkinkan mereka untuk menjalin hubungan yang harmonis tanpa tekanan.';
        favoriteFood = 'Makanan Kesukaan: Makanan ringan seperti sandwich dan hidangan fusion.';
        conflictAdvice = 'Ketika berantem, Gemini sebaiknya berusaha untuk tidak terlalu impulsif. Cobalah untuk mendengarkan dan memberi pasangan Anda kesempatan untuk berbicara sebelum memberikan pendapat Anda. Dialog terbuka akan membantu menyelesaikan masalah lebih cepat.';
    } else if ((month == 6 && day >= 21) || (month == 7 && day <= 22)) {
        zodiac = 'Cancer';
        compatibility = 'Paling serasi dengan Scorpio dan Pisces';
        compatibilityReason = 'Cancer, yang penuh kasih dan perhatian, memiliki koneksi yang mendalam dengan Scorpio yang misterius. Keduanya memahami sisi emosional masing-masing, memungkinkan mereka untuk berbagi kerentanan dengan mudah. Pisces, yang intuitif, juga melengkapi Cancer dengan kelembutan dan pengertian. Keduanya menciptakan ruang yang aman untuk mengungkapkan perasaan dan membangun kepercayaan dalam hubungan.';
        favoriteFood = 'Makanan Kesukaan: Makanan rumahan yang hangat seperti sup dan casserole.';
        conflictAdvice = 'Saat terjadi konflik, Cancer sebaiknya mengekspresikan perasaannya secara jujur, tetapi juga penting untuk mendengarkan perasaan pasangan. Cobalah untuk menemukan solusi yang membuat kedua belah pihak merasa dihargai.';
    } else if ((month == 7 && day >= 23) || (month == 8 && day <= 22)) {
        zodiac = 'Leo';
        compatibility = 'Paling serasi dengan Aries dan Sagittarius';
        compatibilityReason = 'Leo, yang berani dan penuh percaya diri, sangat cocok dengan Aries yang energetik dan Sagittarius yang optimis. Ketiganya adalah individu yang berapi-api dan saling menginspirasi satu sama lain untuk mengejar mimpi dan ambisi. Leo memberi kekuatan dan dukungan emosional, sementara Aries dan Sagittarius menawarkan semangat dan kegembiraan dalam setiap petualangan yang mereka jalani bersama.';
        favoriteFood = 'Makanan Kesukaan: Makanan mewah seperti steak dan hidangan gourmet.';
        conflictAdvice = 'Ketika berkonflik, Leo sebaiknya tidak terlalu egois. Cobalah untuk mengendalikan keinginan untuk selalu menang dan fokus pada mencari solusi yang menguntungkan bagi kedua belah pihak.';
    } else if ((month == 8 && day >= 23) || (month == 9 && day <= 22)) {
        zodiac = 'Virgo';
        compatibility = 'Paling serasi dengan Taurus dan Capricorn';
        compatibilityReason = 'Virgo yang analitis dan teliti sering kali merasa nyaman dengan Taurus yang praktis dan Capricorn yang ambisius. Keduanya menghargai kerja keras dan ketekunan, sehingga mereka dapat saling mendukung dalam pencapaian tujuan. Virgo membantu Taurus dalam merencanakan dan mengatur, sementara Capricorn memberikan dorongan yang dibutuhkan Virgo untuk mengambil risiko dan mencapai potensi penuh mereka.';
        favoriteFood = 'Makanan Kesukaan: Makanan sehat dan organik seperti salad dan sayuran panggang.';
        conflictAdvice = 'Saat menghadapi pertengkaran, Virgo sebaiknya tidak terjebak dalam kritik. Sebaiknya gunakan pendekatan yang lebih lembut dan tawarkan solusi praktis untuk masalah yang dihadapi.';
    } else if ((month == 9 && day >= 23) || (month == 10 && day <= 22)) {
        zodiac = 'Libra';
        compatibility = 'Paling serasi dengan Gemini dan Aquarius';
        compatibilityReason = 'Libra, yang penuh kasih dan seimbang, menemukan kecocokan yang sempurna dengan Gemini yang cerdas dan Aquarius yang inovatif. Keduanya menghargai keindahan dan seni, menciptakan hubungan yang harmonis. Libra juga memberikan dukungan emosional yang dibutuhkan Gemini dan Aquarius untuk tumbuh dan mengeksplorasi ide-ide baru. Keterbukaan dan komunikasi yang baik adalah kunci keserasian mereka.';
        favoriteFood = 'Makanan Kesukaan: Makanan yang estetik seperti sushi dan hidangan berwarna-warni.';
        conflictAdvice = 'Ketika berantem, Libra sebaiknya menghindari keputusan tergesa-gesa. Luangkan waktu untuk merenung dan bicarakan perasaan dengan tenang, cari solusi yang adil untuk keduanya.';
    } else if ((month == 10 && day >= 23) || (month == 11 && day <= 21)) {
        zodiac = 'Scorpio';
        compatibility = 'Paling serasi dengan Cancer dan Pisces';
        compatibilityReason = 'Scorpio, yang intens dan penuh gairah, sering kali merasa nyaman dengan Cancer yang sensitif dan Pisces yang empatik. Ketiganya memiliki kedalaman emosional yang memungkinkan mereka untuk menjalin hubungan yang kuat dan saling memahami. Scorpio memberikan rasa aman bagi Cancer dan Pisces untuk mengungkapkan perasaan mereka, sementara Cancer dan Pisces membantu Scorpio untuk lebih terbuka dan menerima kelemahan mereka.';
        favoriteFood = 'Makanan Kesukaan: Makanan yang kaya rasa seperti cokelat dan hidangan pedas.';
        conflictAdvice = 'Saat bertengkar, Scorpio sebaiknya tidak membiarkan emosinya menguasai. Cobalah untuk berkomunikasi secara terbuka dan jujur, serta dengarkan pasangan Anda untuk mencari solusi yang saling menguntungkan.';
    } else if ((month == 11 && day >= 22) || (month == 12 && day <= 21)) {
        zodiac = 'Sagittarius';
        compatibility = 'Paling serasi dengan Aries dan Leo';
        compatibilityReason = 'Sagittarius, yang optimis dan penuh semangat, memiliki kecocokan alami dengan Aries yang berani dan Leo yang karismatik. Keduanya menghargai kebebasan dan petualangan, sehingga hubungan mereka dipenuhi dengan kegembiraan dan eksplorasi. Sagittarius membantu Aries dan Leo untuk meluangkan waktu dan menikmati hidup, sementara Aries dan Leo memberikan dukungan yang dibutuhkan Sagittarius untuk meraih impian mereka.';
        favoriteFood = 'Makanan Kesukaan: Makanan internasional seperti pizza dan hidangan etnis.';
        conflictAdvice = 'Ketika berkonflik, Sagittarius harus berusaha untuk tidak terlalu blak-blakan. Sebaiknya pilih kata-kata dengan bijak dan tetap fokus pada solusi, bukan hanya masalah yang ada.';
    } else if ((month == 12 && day >= 22) || (month == 1 && day <= 19)) {
        zodiac = 'Capricorn';
        compatibility = 'Paling serasi dengan Taurus dan Virgo';
        compatibilityReason = 'Capricorn, yang ambisius dan disiplin, sering kali menemukan kenyamanan dengan Taurus yang praktis dan Virgo yang analitis. Keduanya saling mendukung dalam mencapai tujuan dan membangun kehidupan yang stabil. Capricorn memberikan arah dan tujuan bagi Taurus dan Virgo, sementara Taurus dan Virgo membantu Capricorn untuk lebih bersantai dan menikmati proses perjalanan hidup.';
        favoriteFood = 'Makanan Kesukaan: Makanan tradisional dan mewah seperti hidangan berbahan dasar daging dan keju.';
        conflictAdvice = 'Saat menghadapi pertengkaran, Capricorn sebaiknya tetap tenang dan berusaha untuk mencari solusi yang konstruktif. Ajak pasangan untuk berdiskusi dengan fokus pada pemecahan masalah daripada menyalahkan satu sama lain.';
    } else {
        zodiac = 'Unknown';
        compatibility = '';
        compatibilityReason = '';
        favoriteFood = '';
        conflictAdvice = '';
    }

    // Tampilkan hasil setelah 2 detik
    setTimeout(() => {
        document.getElementById('loading').style.display = 'none';
        document.getElementById('result').innerText = 'Zodiak Anda adalah: ' + zodiac;
        document.getElementById('compatibility').innerText = compatibility;
        document.getElementById('compatibilityReason').innerText = compatibilityReason;
        document.getElementById('favoriteFood').innerText = favoriteFood;
        document.getElementById('conflictAdvice').innerText = conflictAdvice;
    }, 2000);
}
