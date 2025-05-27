const allUnits = [
    {
        unit: 1,
        page: 1,
        name: "Atatürk Dönemi Dış Politikası (1930-1939)",
        questions: [
            {
                number: 1,
                text: "Metne göre, 1930'lu yıllarda Atatürk dönemi Türk dış politikasının temel ilkesi aşağıdakilerden hangisi olarak ifade edilmiştir?",
                options: [
                    { id: "a", text: "Misak-ı Milli sınırlarını genişletmek için yayılmacı bir politika izlemek" },
                    { id: "b", text: "Revizyonist devletlerle ittifaklar kurarak mevcut dünya düzenini değiştirmek" },
                    { id: "c", text: "\"Yurtta Sulh, Cihanda Sulh\" ilkesiyle mevcut düzene (statüko) bağlı kalarak denge politikası gütmek" },
                    { id: "d", text: "Milletler Cemiyeti'nden ayrılarak tam bağımsız ve tarafsız bir dış politika izlemek" },
                    { id: "e", text: "Doğu Bloku ülkeleriyle yakınlaşarak Batı emperyalizmine karşı bir duruş sergilemek" }
                ],
                correctAnswer: "c"
            },
            {
                number: 2,
                text: "Türkiye'nin 1932'de Milletler Cemiyeti'ne katılmasının metinde belirtilen temel amacı aşağıdakilerden hangisidir?",
                options: [
                    { id: "a", text: "Dünya barışına aktif katkıda bulunarak uluslararası alanda liderlik rolü üstlenmek" },
                    { id: "b", text: "\"Bu kurtlar sofrasında yalnız kalmamak, uluslararası güvence bulmak\"" },
                    { id: "c", text: "Revizyonist devletlere karşı askeri bir blok oluşturmak ve caydırıcılık sağlamak" },
                    { id: "d", text: "Büyük Buhran'ın etkilerinden kurtulmak için uluslararası mali yardım ve kredi temin etmek" },
                    { id: "e", text: "Boğazlar üzerindeki Türk egemenliğini uluslararası alanda tescil ettirmek" }
                ],
                correctAnswer: "b"
            },
            {
                number: 3,
                text: "Türkiye'nin Milletler Cemiyeti'ne üyeliği, kendi doğrudan başvurusuyla değil, hangi iki ülkenin daveti üzerine gerçekleşmiştir?",
                options: [
                    { id: "a", text: "İngiltere ve Fransa" },
                    { id: "b", text: "Almanya ve İtalya" },
                    { id: "c", text: "İspanya ve Yunanistan" },
                    { id: "d", text: "Sovyet Rusya ve İran" },
                    { id: "e", text: "Polonya ve Romanya" }
                ],
                correctAnswer: "c"
            },
            {
                number: 4,
                text: "Balkan Antantı'nın (9 Şubat 1934) imzalanmasındaki temel amaç, metne göre aşağıdakilerden hangisidir?",
                options: [
                    { id: "a", text: "Sovyet Rusya'nın Balkanlar üzerindeki artan etkisini kırmak ve bölge ülkelerini korumak" },
                    { id: "b", text: "Türkiye'nin batı sınırlarını güvence altına almak ve özellikle faşist İtalya'nın yayılmacı heveslerini engellemek" },
                    { id: "c", text: "Balkan ülkeleri arasında ortak bir pazar ve gümrük birliği oluşturarak ekonomik kalkınmayı hızlandırmak" },
                    { id: "d", text: "Bulgaristan'ı diplomatik yollarla Milletler Cemiyeti'ne katılmaya ikna etmek" },
                    { id: "e", text: "Osmanlı İmparatorluğu'ndan kalan ve çözülememiş sınır sorunlarını nihai olarak çözüme kavuşturmak" }
                ],
                correctAnswer: "b"
            },
            {
                number: 5,
                text: "Balkan Antantı'nı imzalayan devletler aşağıdakilerin hangisinde doğru olarak verilmiştir?",
                options: [
                    { id: "a", text: "Türkiye, Bulgaristan, Yunanistan, Yugoslavya" },
                    { id: "b", text: "Türkiye, Yunanistan, Yugoslavya, Romanya" },
                    { id: "c", text: "Türkiye, Arnavutluk, Yunanistan, Romanya" },
                    { id: "d", text: "Türkiye, İtalya, Yunanistan, Yugoslavya" },
                    { id: "e", text: "Türkiye, Yunanistan, Bulgaristan, Macaristan" }
                ],
                correctAnswer: "b"
            },
            {
                number: 6,
                text: "Metinde, Balkan Antantı'na revizyonist hayalleri nedeniyle katılmayan ve \"bana ne lan\" şeklinde bir tavır sergilediği belirtilen Balkan ülkesi hangisidir?",
                options: [
                    { id: "a", text: "Yugoslavya" },
                    { id: "b", text: "Romanya" },
                    { id: "c", text: "Yunanistan" },
                    { id: "d", text: "Bulgaristan" },
                    { id: "e", text: "Arnavutluk" }
                ],
                correctAnswer: "d"
            },
            {
                number: 7,
                text: "Sadabat Paktı'nın (8 Temmuz 1937) Tahran'da imzalanmasının metinde vurgulanan temel nedeni aşağıdakilerden hangisidir?",
                options: [
                    { id: "a", text: "Türkiye'nin doğu sınırlarını güvence altına almak ve özellikle İtalya'nın Doğu Akdeniz ile Ortadoğu'daki yayılmacı emellerine karşı bir set oluşturmak" },
                    { id: "b", text: "Sovyet Rusya ile Orta Asya'daki Türk devletleri arasında bir köprü kurmak ve kültürel bağları güçlendirmek" },
                    { id: "c", text: "Arap ülkeleriyle birleşerek büyük bir İslam Konfederasyonu kurma yolunda ilk adımı atmak" },
                    { id: "d", text: "Afganistan'ın başlattığı modernleşme ve kalkınma çabalarına ortaklaşa destek olmak" },
                    { id: "e", text: "İran ve Irak arasında uzun süredir devam eden Şattülarap su yolu anlaşmazlığına arabuluculuk etmek" }
                ],
                correctAnswer: "a"
            },
            {
                number: 8,
                text: "Sadabat Paktı'nı imzalayan devletler aşağıdakilerden hangisinde doğru olarak verilmiştir?",
                options: [
                    { id: "a", text: "Türkiye, İran, Irak, Suriye" },
                    { id: "b", text: "Türkiye, Sovyet Rusya, İran, Afganistan" },
                    { id: "c", text: "Türkiye, İran, Irak, Afganistan" },
                    { id: "d", text: "Türkiye, Mısır, İran, Irak" },
                    { id: "e", text: "Türkiye, İran, Suudi Arabistan, Yemen" }
                ],
                correctAnswer: "c"
            },
            {
                number: 9,
                text: "Montreux Boğazlar Sözleşmesi (20 Temmuz 1936) ile Türkiye'nin elde ettiği en önemli kazanım metne göre aşağıdakilerden hangisidir?",
                options: [
                    { id: "a", text: "Boğazlar Komisyonu'nun başkanlığını daimi olarak üstlenmek ve komisyonun yetkilerini genişletmek" },
                    { id: "b", text: "Boğazlar'dan geçen tüm ticari ve savaş gemilerinden yüksek tonaj vergisi alma hakkını ilk kez elde etmek" },
                    { id: "c", text: "Lozan'da kurulan Boğazlar Komisyonu'nu kaldırarak Boğazlar üzerinde tam egemenlik kurmak ve asker bulundurma hakkını elde etmek" },
                    { id: "d", text: "Barış zamanında dahi Boğazlar'ı tüm yabancı savaş gemilerine kapatma konusunda mutlak yetki sahibi olmak" },
                    { id: "e", text: "Sovyet Rusya donanmasına Karadeniz'den Akdeniz'e serbest ve öncelikli geçiş hakkı tanımak" }
                ],
                correctAnswer: "c"
            },
            {
                number: 10,
                text: "Metne göre, Montreux Boğazlar Sözleşmesi'nin Türkiye lehine sonuçlanmasını kolaylaştıran ve Gazi'nin diplomatik dehasını gösteren uluslararası gelişmeler arasında aşağıdakilerden hangileri sayılmıştır?",
                options: [
                    { id: "a", text: "İspanya İç Savaşı'nın başlaması ve Çin-Japon Savaşı'nın şiddetlenmesi" },
                    { id: "b", text: "Almanya'nın Ren bölgesini askerileştirmesi ve İtalya'nın Habeşistan'ı işgal etmesi" },
                    { id: "c", text: "Sovyet Rusya'nın Doğu Avrupa'da yayılmacı politikalar izlemesi ve Balkanlar'daki siyasi gerginlikler" },
                    { id: "d", text: "Milletler Cemiyeti'nin etkinliğini yitirerek dağılma sürecine girmesi ve yeni ittifak arayışları" },
                    { id: "e", text: "Türkiye'nin komşularıyla Balkan Antantı ve Sadabat Paktı gibi güvenlik anlaşmaları imzalaması" }
                ],
                correctAnswer: "b"
            },
            {
                number: 11,
                text: "Metinde, Montreux Boğazlar Sözleşmesi'nin imzalanması ve Boğazlar'ın tek başına Türklerin olması karşısında Sovyet Rusya'nın tepkisi nasıl ifade edilmiştir?",
                options: [
                    { id: "a", text: "Türkiye'nin egemenlik haklarını tam olarak tanıdığı için gelişmeyi büyük bir memnuniyetle karşılamıştır." },
                    { id: "b", text: "\"Vay amk, Boğazlar tek başına Türklerin oldu\" diyerek bu durumdan içten içe rahatsızlık duymuş ve kudurmuştur." },
                    { id: "c", text: "Karadeniz'e kıyısı olan tüm devletler için son derece olumlu ve barışçıl bir gelişme olarak değerlendirmiştir." },
                    { id: "d", text: "İngiltere'nin Boğazlar üzerindeki etkisinin artacağı endişesiyle sözleşmeye şiddetle karşı çıkmıştır." },
                    { id: "e", text: "Türkiye'ye Boğazlar'ın ortak savunulması için askeri ve ekonomik yardım teklifinde bulunmuştur." }
                ],
                correctAnswer: "b"
            },
            {
                number: 12,
                text: "Hatay'ın anavatana katılması sürecinde, metne göre atılan ilk önemli adım aşağıdakilerden hangisidir?",
                options: [
                    { id: "a", text: "Fransa'nın Hatay üzerindeki manda yönetimini Milletler Cemiyeti'ne resmen devretmesi" },
                    { id: "b", text: "2 Eylül 1938'de bağımsız Hatay Devleti'nin kurulması" },
                    { id: "c", text: "Türk ordusunun, Hatay halkının güvenliğini sağlamak amacıyla bölgeye askeri müdahalede bulunması" },
                    { id: "d", text: "Milletler Cemiyeti Genel Kurulu'nun Hatay'ın geleceğinin Türkiye'ye katılarak belirlenmesine yönelik bir karar alması" },
                    { id: "e", text: "Suriye hükümetinin, Hatay Sancağı üzerindeki tüm tarihi haklarından feragat ettiğini açıklaması" }
                ],
                correctAnswer: "b"
            },
            {
                number: 13,
                text: "Metne göre, bağımsız Hatay Devleti Meclisi'nin aldığı kararla Hatay'ın Türkiye'ye katıldığı tarih aşağıdakilerden hangisidir?",
                options: [
                    { id: "a", text: "2 Eylül 1938" },
                    { id: "b", text: "20 Temmuz 1936" },
                    { id: "c", text: "9 Şubat 1934" },
                    { id: "d", text: "29 Haziran 1939" },
                    { id: "e", text: "8 Temmuz 1937" }
                ],
                correctAnswer: "d"
            },
            {
                number: 14,
                text: "Metinde, Mussolini İtalyası'nın Türkiye için sürekli bir tehdit unsuru olarak belirtilen ve Akdeniz'i hedefleyen \"Bizim Deniz\" (Mare Nostrum) hayali, aşağıdaki hangi deniz için kullanılmıştır?",
                options: [
                    { id: "a", text: "Karadeniz" },
                    { id: "b", text: "Ege Denizi" },
                    { id: "c", text: "Kızıldeniz" },
                    { id: "d", text: "Akdeniz" },
                    { id: "e", text: "Hazar Denizi" }
                ],
                correctAnswer: "d"
            },
            {
                number: 15,
                text: "1930'lu yıllarda Türkiye ile İngiltere arasındaki ilişkilerin, başlangıçtaki Musul meselesi kaynaklı limoniliğe rağmen iyileşmesinin ve İngiltere'nin Montrö'de Türkiye'yi desteklemesinin temel nedeni metne göre aşağıdakilerden hangisidir?",
                options: [
                    { id: "a", text: "Musul sorununun Milletler Cemiyeti aracılığıyla Türkiye'nin beklentileri doğrultusunda çözülmesi" },
                    { id: "b", text: "Sovyet Rusya'nın yayılmacı politikalarına ve komünizm tehdidine karşı ortak bir Anglo-Türk cephesi oluşturma isteği" },
                    { id: "c", text: "Faşist İtalya ve Nazi Almanyası'nın yarattığı ortak tehlikenin artmasıyla iki ülke arasında ortak çıkarların belirginleşmesi" },
                    { id: "d", text: "Türkiye'nin Milletler Cemiyeti'ne üye olarak uluslararası barış çabalarına aktif destek vermesi ve Batı ile uyumlu politikalar izlemesi" },
                    { id: "e", text: "Fransa'nın Suriye mandası ve Hatay meselesi konusundaki uzlaşmaz tutumunun İngiltere'yi Türkiye'ye yakınlaştırması" }
                ],
                correctAnswer: "c"
            }
        ]
    },
    {
        unit: 2,
        page: 2,
        name: "Atatürk İlkeleri",
        questions: [
            {
                number: 1,
                text: "Metne göre, Atatürk İlkeleri'nin (Cumhuriyetçilik, Laiklik, Halkçılık, Milliyetçilik, Devletçilik, İnkılâpçılık) Cumhuriyet Halka Partisi'nin parti tüzüğüne girdiği ve daha sonra Türkiye Cumhuriyeti Anayasası'na dahil olduğu tarihler sırasıyla hangileridir?",
                options: [
                    { id: "a", text: "1923 ve 1924" },
                    { id: "b", text: "1931 ve 1937" },
                    { id: "c", text: "1924 ve 1931" },
                    { id: "d", text: "1937 ve 1945" },
                    { id: "e", text: "1930 ve 1935" }
                ],
                correctAnswer: "b"
            },
            {
                number: 2,
                text: "Cumhuriyetçilik ilkesi bağlamında, egemenliğin kaynağı aşağıdakilerden hangisidir?",
                options: [
                    { id: "a", text: "Tek bir kişi veya zümre" },
                    { id: "b", text: "Askeri ve bürokratik elitler" },
                    { id: "c", text: "Toplumun tümü, yani halk" },
                    { id: "d", text: "Din adamları ve ulema sınıfı" },
                    { id: "e", text: "Aydınlar ve entelektüeller" }
                ],
                correctAnswer: "c"
            },
            {
                number: 3,
                text: "Metinde, Cumhuriyet'in daha geniş anlamda demokrasi ile eş anlamlı kullanıldığı belirtilmekle birlikte, dikkat edilmesi gereken nokta olarak aşağıdakilerden hangisi vurgulanmıştır?",
                options: [
                    { id: "a", text: "Her demokratik rejimin aynı zamanda bir cumhuriyet olduğu" },
                    { id: "b", text: "Cumhuriyet rejimlerinin her zaman tam bağımsızlığı hedeflediği" },
                    { id: "c", text: "Her cumhuriyet rejiminin demokratik olmadığı" },
                    { id: "d", text: "Demokrasinin sadece seçimlerle sınırlı bir kavram olduğu" },
                    { id: "e", text: "Cumhuriyetin ancak tek partili sistemle yaşayabileceği" }
                ],
                correctAnswer: "c"
            },
            {
                number: 4,
                text: "Mustafa Kemal'in milliyetçilik anlayışına göre, milleti oluşturan temel unsurlar \"din ve ırk\" birliğinden ziyade aşağıdakilerden hangileridir?",
                options: [
                    { id: "a", text: "Sadece ortak bir soy ve dil birliği" },
                    { id: "b", text: "Yalnızca ortak bir ekonomik çıkar birliği" },
                    { id: "c", text: "Ortak bir geçmiş, ortak vatan, dil ve kültür birliği" },
                    { id: "d", text: "Sadece aynı mezhebe ve siyasi görüşe sahip olma" },
                    { id: "e", text: "İmparatorluk mirasına ve hanedana bağlılık" }
                ],
                correctAnswer: "c"
            },
            {
                number: 5,
                text: "Laiklik ilkesi, metne göre devlet ile din arasındaki ilişkileri nasıl tanımlar?",
                options: [
                    { id: "a", text: "Devletin belirli bir dini resmi din olarak kabul etmesi ve diğer dinlere hoşgörü göstermesi" },
                    { id: "b", text: "Din kurumlarının devlet yönetiminde aktif rol alması ve kanunların dini referanslara dayanması" },
                    { id: "c", text: "Devlet ve din işlerinin birbirinden tamamen ayrılması, devletin vatandaşların dini inançlarına müdahale etmemesi ve din kurallarından etkilenmemesi" },
                    { id: "d", text: "Devletin tüm dini kurumları kontrol altına alarak onları kendi politikaları doğrultusunda yönlendirmesi" },
                    { id: "e", text: "Dinin toplumsal hayattan tamamen dışlanarak sadece bireysel vicdanlara hapsedilmesi" }
                ],
                correctAnswer: "c"
            },
            {
                number: 6,
                text: "Aşağıdakilerden hangisi, laiklik ilkesi doğrultusunda yapılan inkılaplardan biri olarak metinde **sayılmamıştır**?",
                options: [
                    { id: "a", text: "Saltanatın kaldırılması" },
                    { id: "b", text: "Hilafetin kaldırılması" },
                    { id: "c", text: "Tevhidi Tedrisat Kanunu'nun kabulü" },
                    { id: "d", text: "Türk Dil Kurumu'nun kurulması" },
                    { id: "e", text: "Devletin dinî hükmünün anayasadan kaldırılması" }
                ],
                correctAnswer: "d"
            },
            {
                number: 7,
                text: "Halkçılık ilkesi, metne göre aşağıdakilerden hangisini **kabul etmez**?",
                options: [
                    { id: "a", text: "Bireyler arasında hak ayrılığı olmamasını" },
                    { id: "b", text: "Halkın yararı için çalışılmasını" },
                    { id: "c", text: "Herhangi bir aile, sınıf veya topluluğun bir başkasına üstün olarak kabul edilmesini" },
                    { id: "d", text: "Toplumun her kesimi için sosyal, ekonomik ve siyasi ayrıcalıkların kaldırılmasını" },
                    { id: "e", text: "Devletin bütün gücünün halktan geldiğine inanılmasını" }
                ],
                correctAnswer: "c"
            },
            {
                number: 8,
                text: "Atatürk'ün devletçilik anlayışı, iktisadi alanda hangi ifadeyle tanımlanmaktadır ve bu modelde özel sektörün durumu nedir?",
                options: [
                    { id: "a", text: "Liberal ekonomi; özel sektör tamamen serbesttir, devlet müdahalesi yoktur." },
                    { id: "b", text: "Sosyalist ekonomi; tüm üretim araçları devletin elindedir, özel sektöre yer yoktur." },
                    { id: "c", text: "Karma ekonomi; devlet teşebbüsünün varlığı ve gelişimi savunulurken özel sektör de devlet tarafından desteklenir." },
                    { id: "d", text: "Merkantilist ekonomi; dış ticarette ihracat maksimize edilir, ithalat kısıtlanır, özel sektör bu hedefe hizmet eder." },
                    { id: "e", text: "Komünist ekonomi; özel mülkiyet tamamen ortadan kaldırılmıştır, tüm ekonomi devlet planlamasıyla yürütülür." }
                ],
                correctAnswer: "c"
            },
            {
                number: 9,
                text: "Türkiye'de devletçilik uygulamasının 1930'lu yılların başında \"ılımlı devletçilik\" veya \"hazırlık yılları\" olarak adlandırılan dönemden, devletin ekonomiye doğrudan müdahalesi uygulamasına geçilmesinde etkili olan temel faktörler metne göre hangileridir?",
                options: [
                    { id: "a", text: "İkinci Dünya Savaşı'nın başlaması ve seferberlik ilan edilmesi" },
                    { id: "b", text: "Sovyetler Birliği ile ekonomik işbirliği anlaşmalarının imzalanması" },
                    { id: "c", text: "Teşvik-i Sanayi Kanunu ile özel sektör girişimlerinin istenen sonucu vermemesi ve 1929 dünya ekonomik buhranının etkisi" },
                    { id: "d", text: "Yabancı sermayenin Türkiye'ye yoğun bir şekilde akın etmesi ve bunun kontrol altına alınma ihtiyacı" },
                    { id: "e", text: "Osmanlı borçlarının tamamen ödenmesiyle devlet bütçesinde büyük bir rahatlama olması" }
                ],
                correctAnswer: "c"
            },
            {
                number: 10,
                text: "İnkılâpçılık ilkesi, kelime anlamı olarak \"değişme ve bir halden başka bir hale geçmeyi ifade etmekle\" birlikte, Türk İnkılâbı'nın temel amacı metinde nasıl belirtilmiştir?",
                options: [
                    { id: "a", text: "Osmanlı İmparatorluğu'nun eski sınırlarına geri dönmek" },
                    { id: "b", text: "Doğu medeniyetlerini örnek alarak yeni bir sentez oluşturmak" },
                    { id: "c", text: "Devlet yapısını, hukuk sistemini, eğitim ve kültür hayatını aklın ve çağdaş bilimin ışığında, zamanın gereklerine uygun hale getirmek" },
                    { id: "d", text: "Var olan tüm kurumları yıkarak tamamen geleneksel bir yapıya dönmek" },
                    { id: "e", text: "Sadece askeri alanda modernleşmeyi sağlayarak devletin gücünü artırmak" }
                ],
                correctAnswer: "c"
            },
            {
                number: 11,
                text: "\"Bütünleyici İlkeler\"den biri olan \"Milli Egemenlik\" ilkesinin, milletin kendi geleceğine kendisinin karar vereceğinin bir göstergesi olarak Amasya Genelgesi'nde yer alan ifadesi aşağıdakilerden hangisidir?",
                options: [
                    { id: "a", text: "\"Ya istiklal ya ölüm!\"" },
                    { id: "b", text: "\"Milletin istiklalini yine milletin azim ve kararı kurtaracaktır.\"" },
                    { id: "c", text: "\"Yurtta sulh, cihanda sulh.\"" },
                    { id: "d", text: "\"Egemenlik kayıtsız şartsız milletindir.\"" },
                    { id: "e", text: "\"Ordular, ilk hedefiniz Akdeniz'dir, ileri!\"" }
                ],
                correctAnswer: "b"
            },
            {
                number: 12,
                text: "\"Tam Bağımsızlık\" ilkesi, milli mücadele yıllarında hangi parolada kendini göstermiş ve Sivas Kongresi'nde hangi fikir kesin olarak reddedilmiştir?",
                options: [
                    { id: "a", text: "Parola: \"Ne Mutlu Türküm Diyene!\" / Reddedilen Fikir: Saltanatın devamı" },
                    { id: "b", text: "Parola: \"Yurtta sulh, cihanda sulh.\" / Reddedilen Fikir: Azınlıklara ayrıcalık verilmesi" },
                    { id: "c", text: "Parola: \"Ya istiklal ya ölüm!\" / Reddedilen Fikir: Manda ve himaye" },
                    { id: "d", text: "Parola: \"Egemenlik kayıtsız şartsız milletindir.\" / Reddedilen Fikir: Hilafetin kaldırılması" },
                    { id: "e", text: "Parola: \"Hayatta en hakiki mürşit ilimdir.\" / Reddedilen Fikir: Tekke ve zaviyelerin kapatılması" }
                ],
                correctAnswer: "c"
            },
            {
                number: 13,
                text: "Metne göre, Atatürk'ün \"Çağdaşlaşma\" anlayışında Batı Medeniyeti'nin hangi yönlerinin benimsenmesi ilke kabul edilmiştir ve Türk çağdaşlaşması nasıl ifade bulmuştur?",
                options: [
                    { id: "a", text: "Sadece askeri teknolojisi / \"Batı'ya tam entegrasyon\"" },
                    { id: "b", text: "Sadece bilim ve ahlak anlayışı değil, dünya görüşü de / \"dışarıdan bir müdahale olmaksızın 'batıya rağmen batılılaşmak'\"" },
                    { id: "c", text: "Sadece sanatsal ve kültürel değerleri / \"Doğu ile Batı arasında bir köprü olmak\"" },
                    { id: "d", text: "Sadece ekonomik modeli / \"Batı'nın bir sömürgesi haline gelmek\"" },
                    { id: "e", text: "Sadece yönetim biçimleri / \"Batı'yı taklit ederek aynısını uygulamak\"" }
                ],
                correctAnswer: "b"
            },
            {
                number: 14,
                text: "Atatürkçü düşünce sisteminde, belirlenen çağdaşlaşma hedeflerine ulaşmada temel yol gösterici olarak benimsenen ve \"Akıl ve mantığın çözümleyemeyeceği mesele yoktur\" sözüyle vurgulanan ilke aşağıdakilerden hangisidir?",
                options: [
                    { id: "a", text: "Milliyetçilik" },
                    { id: "b", text: "Akılcılık (Akıl ve Bilim)" },
                    { id: "c", text: "Devletçilik" },
                    { id: "d", text: "Halkçılık" },
                    { id: "e", text: "İnkılapçılık" }
                ],
                correctAnswer: "b"
            },
            {
                number: 15,
                text: "\"Yurtta Barış Dünyada Barış\" ilkesi, Türkiye Cumhuriyeti'nin dış politika anlayışını nasıl şekillendirmiştir?",
                options: [
                    { id: "a", text: "Yayılmacı bir politika izleyerek eski Osmanlı topraklarını geri almayı hedeflemiştir." },
                    { id: "b", text: "İzolasyonist bir politika izleyerek uluslararası ilişkilerden tamamen uzak durmayı amaçlamıştır." },
                    { id: "c", text: "Ülkeler arasındaki her türlü anlaşmazlığın barışçıl yollarla çözümlenebileceğinden hareketle dış politika yürütmeye önem vermiştir." },
                    { id: "d", text: "Sadece komşu ülkelerle iyi ilişkiler kurmayı, diğer uluslararası sorunlara kayıtsız kalmayı benimsemiştir." },
                    { id: "e", text: "Askeri ittifaklara öncelik vererek bölgesel bir güç olma stratejisi izlemiştir." }
                ],
                correctAnswer: "c"
            }
        ]
    }
];



document.addEventListener('DOMContentLoaded', () => {
    const unitNavigation = document.getElementById('unit-navigation');
    const quizSelectionDiv = document.getElementById('quiz-selection');
    const quizAreaDiv = document.getElementById('quiz-area');
    const questionNumberP = document.getElementById('question-number');
    const questionTextP = document.getElementById('question-text');
    const optionsContainerDiv = document.getElementById('options-container');
    const feedbackAreaDiv = document.getElementById('feedback-area');
    const scoreAreaDiv = document.getElementById('score-area');
    const nextQuestionButton = document.getElementById('next-question');
    const resultAreaDiv = document.getElementById('result-area');
    const finalScoreP = document.getElementById('final-score');
    const restartQuizButton = document.getElementById('restart-quiz');

    let currentUnitIndex = -1;
    let currentQuestionIndex = -1;
    let score = 0;
    let currentUnitQuestions = [];
    let answerSelected = false;

    function displayUnits() {
        unitNavigation.innerHTML = '';
        if (!allUnits || allUnits.length === 0) {
            console.error("allUnits is not defined or empty.");
            quizSelectionDiv.innerHTML = '<h2>Sorular yüklenemedi veya bulunamadı. `allUnits` kontrol edin.</h2>';
            return;
        }
        allUnits.forEach((unit, index) => {
            const button = document.createElement('button');
            button.textContent = unit.name;
            button.onclick = () => startQuiz(index);
            unitNavigation.appendChild(button);
        });
    }

    function startQuiz(unitIndex) {
        currentUnitIndex = unitIndex;
        if (allUnits[currentUnitIndex] && allUnits[currentUnitIndex].questions) {
            currentUnitQuestions = allUnits[currentUnitIndex].questions;
        } else {
            console.error("Selected unit or its questions are not available:", unitIndex, allUnits[currentUnitIndex]);
            currentUnitQuestions = []; 
            quizSelectionDiv.innerHTML = '<h2>Seçilen ünite için sorular bulunamadı.</h2>';
            quizSelectionDiv.style.display = 'block';
            quizAreaDiv.style.display = 'none';
            resultAreaDiv.style.display = 'none';
            return;
        }
        currentQuestionIndex = 0;
        score = 0;
        answerSelected = false;

        document.querySelectorAll('#unit-navigation button').forEach((btn, idx) => {
            if (idx === unitIndex) {
                btn.classList.add('active');
            } else {
                btn.classList.remove('active');
            }
        });

        quizSelectionDiv.style.display = 'none';
        resultAreaDiv.style.display = 'none';
        quizAreaDiv.style.display = 'block';
        feedbackAreaDiv.style.display = 'none';
        nextQuestionButton.disabled = true;
        displayQuestion();
        updateScoreDisplay();
    }

    function displayQuestion() {
        if (currentQuestionIndex < currentUnitQuestions.length) {
            const question = currentUnitQuestions[currentQuestionIndex];
            questionNumberP.textContent = `Soru ${currentQuestionIndex + 1} / ${currentUnitQuestions.length}`;
            questionTextP.textContent = question.text;
            optionsContainerDiv.innerHTML = '';

            question.options.forEach(option => {
                const button = document.createElement('button');
                button.textContent = `${option.id}. ${option.text}`;
                button.onclick = () => selectAnswer(button, option.id, question.correctAnswer);
                optionsContainerDiv.appendChild(button);
            });
            answerSelected = false;
            nextQuestionButton.disabled = true;
            feedbackAreaDiv.style.display = 'none';
        } else {
            showResults();
        }
        updateScoreDisplay();
    }

    function selectAnswer(selectedButton, selectedOptionId, correctAnswerId) {
        if (answerSelected) return;

        answerSelected = true;
        nextQuestionButton.disabled = false;

        const buttons = optionsContainerDiv.getElementsByTagName('button');
        for (let btn of buttons) {
            btn.disabled = true;
            const btnOptionIdMatch = btn.textContent.match(/^([a-e])\./);
            if (btnOptionIdMatch && btnOptionIdMatch[1] === correctAnswerId) {
                 btn.classList.add('correct');
            }
        }

        if (selectedOptionId === correctAnswerId) {
            score++;
            selectedButton.classList.add('correct');
            feedbackAreaDiv.textContent = 'Doğru!';
            feedbackAreaDiv.className = 'feedback correct';
        } else {
            selectedButton.classList.add('incorrect');
            feedbackAreaDiv.textContent = `Yanlış! Doğru cevap: ${correctAnswerId.toUpperCase()}`;
            feedbackAreaDiv.className = 'feedback incorrect';
        }
        feedbackAreaDiv.style.display = 'block';
        updateScoreDisplay();
    }

    function updateScoreDisplay() {
        if (currentUnitQuestions && currentUnitQuestions.length > 0) {
            scoreAreaDiv.textContent = `Skor: ${score} / ${currentUnitQuestions.length}`;
        } else {
             scoreAreaDiv.textContent = 'Skor: 0 / 0';
        }
    }

    function nextQuestion() {
        currentQuestionIndex++;
        displayQuestion();
    }

    function showResults() {
        quizAreaDiv.style.display = 'none';
        resultAreaDiv.style.display = 'block';
        if (currentUnitQuestions && currentUnitQuestions.length > 0){
            finalScoreP.textContent = `Toplam Skor: ${score} / ${currentUnitQuestions.length}`;
        } else {
            finalScoreP.textContent = 'Skor hesaplanamadı (soru yok).';
        }
    }
    
    function resetQuizState() {
        quizAreaDiv.style.display = 'none';
        resultAreaDiv.style.display = 'none';
        quizSelectionDiv.style.display = 'block';
        currentUnitIndex = -1;
        currentQuestionIndex = -1;
        score = 0;
        currentUnitQuestions = [];
        answerSelected = false;
        document.querySelectorAll('#unit-navigation button').forEach(btn => btn.classList.remove('active'));
        scoreAreaDiv.textContent = ''; 
        if (allUnits && allUnits.length === 0) { 
             quizSelectionDiv.innerHTML = '<h2>Sorular yüklenemedi veya bulunamadı.</h2>';
        } else {
            quizSelectionDiv.innerHTML = '<h2>Lütfen bir ünite seçin.</h2>';
        }
    }

    // Event Listeners
    nextQuestionButton.addEventListener('click', () => {
        if (answerSelected) {
             nextQuestion();
        }
    });
    restartQuizButton.addEventListener('click', resetQuizState);

    // Initialization
    if (allUnits && allUnits.length > 0) { 
        displayUnits();
        resetQuizState(); 
    } else {
        quizSelectionDiv.innerHTML = '<h2>Sorular yüklenemedi veya bulunamadı. Lütfen script dosyasındaki `allUnits` verisini kontrol edin.</h2>';
    }
}); 