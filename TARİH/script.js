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
    },
    {
        unit: 3,
        page: 3,
        name: "II. Dünya Savaşı",
        questions: [
            {
                number: 1,
                text: "Metne göre, II. Dünya Savaşı'nın çıkacağının hangi olayın ardından aşikar olduğu belirtilmiştir?",
                options: [
                    { id: "a", text: "1929 Ekonomik Krizi'nin başlamasıyla" },
                    { id: "b", text: "Milletler Cemiyeti'nin kurulmasıyla" },
                    { id: "c", text: "I. Dünya Savaşı'nın bitişiyle ve bu savaşı \"sonlandıran\" antlaşmaların ardından" },
                    { id: "d", text: "Sovyetler Birliği'nde komünist devrimin gerçekleşmesiyle" },
                    { id: "e", text: "Osmanlı İmparatorluğu'nun yıkılmasıyla" }
                ],
                correctAnswer: "c"
            },
            {
                number: 2,
                text: "I. Dünya Savaşı sonrasında Almanya'yı denetim altına almak ve ağır bir savaş tazminatı ödemeye zorlamak amacıyla imzalanan ve II. Dünya Savaşı öncesi sorunlara zemin hazırlayan antlaşma hangisidir?",
                options: [
                    { id: "a", text: "Brest-Litovsk Antlaşması" },
                    { id: "b", text: "Sevr Antlaşması" },
                    { id: "c", text: "Lozan Antlaşması" },
                    { id: "d", text: "Versay Antlaşması" },
                    { id: "e", text: "Trianon Antlaşması" }
                ],
                correctAnswer: "d"
            },
            {
                number: 3,
                text: "1929 Ekonomik Krizi'nin ilk etkisini gösterdiği ülke ve krizin Avrupa'ya yayılmasıyla yaşanan temel ekonomik sorunlar arasında aşağıdakilerden hangisi **sayılmamıştır**?",
                options: [
                    { id: "a", text: "Piyasaların çökmesi" },
                    { id: "b", text: "Piyasaların daralması ve şirketlerin iflas etmesi" },
                    { id: "c", text: "Enflasyonun düşmesi ve alım gücünün artması" },
                    { id: "d", text: "Yoksulluğun artması" },
                    { id: "e", text: "İşsizliğin artması" }
                ],
                correctAnswer: "c"
            },
            {
                number: 4,
                text: "II. Dünya Savaşı'nın başlamasına neden olan olay, Hitler'in denetimindeki Alman ordusunun hangi ülkeyi işgal etmesidir ve bu olay hangi tarihte gerçekleşmiştir?",
                options: [
                    { id: "a", text: "Fransa'nın işgali - 10 Mayıs 1940" },
                    { id: "b", text: "Polonya'nın işgali - 1 Eylül 1939" },
                    { id: "c", text: "Sovyet Rusya'nın işgali - 22 Haziran 1941" },
                    { id: "d", text: "Çekoslovakya'nın işgali - 15 Mart 1939" },
                    { id: "e", text: "Avusturya'nın ilhakı - 12 Mart 1938" }
                ],
                correctAnswer: "b"
            },
            {
                number: 5,
                text: "Stalin denetimindeki Rusya'nın Hitler denetimindeki Almanya ile savaşa girdiği tarih aşağıdakilerden hangisidir?",
                options: [
                    { id: "a", text: "Eylül 1939" },
                    { id: "b", text: "Mayıs 1940" },
                    { id: "c", text: "Haziran 1941" },
                    { id: "d", text: "Aralık 1941" },
                    { id: "e", text: "Ağustos 1942" }
                ],
                correctAnswer: "c"
            },
            {
                number: 6,
                text: "Britanya ve ABD için II. Dünya Savaşı'nın ivme kazanmasına neden olan ve Japonya'nın ABD'nin Pasifik donanmasına saldırdığı olay hangisidir ve hangi yıl gerçekleşmiştir?",
                options: [
                    { id: "a", text: "Midway Savaşı - 1942" },
                    { id: "b", text: "Mercan Denizi Muharebesi - 1942" },
                    { id: "c", text: "Pearl Harbor Saldırısı - 1941" },
                    { id: "d", text: "Dunkerque Tahliyesi - 1940" },
                    { id: "e", text: "Normandiya Çıkarması - 1944" }
                ],
                correctAnswer: "c"
            },
            {
                number: 7,
                text: "II. Dünya Savaşı'nın başrolündeki Mihver Devletleri aşağıdakilerin hangisinde doğru olarak verilmiştir?",
                options: [
                    { id: "a", text: "Almanya, İtalya, Japonya" },
                    { id: "b", text: "Almanya, İtalya, Sovyet Rusya" },
                    { id: "c", text: "Almanya, Avusturya-Macaristan, Osmanlı İmparatorluğu" },
                    { id: "d", text: "Britanya, Fransa, ABD" },
                    { id: "e", text: "Almanya ve İtalya (metnin ilk tanımına göre)" }
                ],
                correctAnswer: "e"
            },
            {
                number: 8,
                text: "ABD'nin savaşa girmesiyle savaşın gidişatının değiştiği belirtilen metinde, ABD yönetiminin Pearl Harbor yenilgisini Japonya'ya ödettiği olay nedir?",
                options: [
                    { id: "a", text: "Japonya'nın tüm sömürgelerini işgal etmesi" },
                    { id: "b", text: "Japonya'ya karşı kapsamlı bir deniz ablukası uygulaması" },
                    { id: "c", text: "Japonya'ya iki atom bombası atması" },
                    { id: "d", text: "Japon İmparatoru'nu esir alması" },
                    { id: "e", text: "Japonya'nın ana karasına büyük bir çıkarma yapması" }
                ],
                correctAnswer: "c"
            },
            {
                number: 9,
                text: "Daha savaş bitmeden 1945'te gerçekleştirilen ve İngiltere, ABD ve SSCB'nin savaş sonrası Avrupa ve dünyanın gidişatı konusunda önemli kararlar aldığı konferans hangisidir?",
                options: [
                    { id: "a", text: "Potsdam Konferansı" },
                    { id: "b", text: "Kazablanka Konferansı" },
                    { id: "c", text: "Tahran Konferansı" },
                    { id: "d", text: "Yalta Konferansı" },
                    { id: "e", text: "San Francisco Konferansı" }
                ],
                correctAnswer: "d"
            },
            {
                number: 10,
                text: "Türkiye'nin II. Dünya Savaşı öncesinde olası bir savaş sırasında kendi durumunu \"garanti\"ye almak için yaptığı antlaşmalardan biri **değildir**?",
                options: [
                    { id: "a", text: "1928 Briand-Kellogg Paktı" },
                    { id: "b", text: "1925 SSCB ile Dostluk ve Tarafsızlık Antlaşması" },
                    { id: "c", text: "1936 Montreux Boğazlar Sözleşmesi" },
                    { id: "d", text: "1934 Balkan Paktı" },
                    { id: "e", text: "1939 İngiltere ve Fransa ile Üçlü İttifak" }
                ],
                correctAnswer: "c"
            },
            {
                number: 11,
                text: "II. Dünya Savaşı sırasında Türkiye'nin Almanya'ya gerçekleştirdiği ihracatta kayda değer bir başlık olan ve silah yapımının olmazsa olmazı olarak belirtilen maden hangisidir?",
                options: [
                    { id: "a", text: "Demir" },
                    { id: "b", text: "Bakır" },
                    { id: "c", text: "Kömür" },
                    { id: "d", text: "Krom" },
                    { id: "e", text: "Boksit" }
                ],
                correctAnswer: "d"
            },
            {
                number: 12,
                text: "Türkiye'nin II. Dünya Savaşı sırasında aldığı \"savaş dışı kalma\" tutumuna rağmen ordu lojistiğini artırmak için yaptığı gelişmelerden biri olarak metinde **bahsedilmeyen** hangisidir?",
                options: [
                    { id: "a", text: "Kırıkkale'de savaş sanayinin ilk temellerinin atılması" },
                    { id: "b", text: "Gölcük Tersanesi'nin inşasına başlanması" },
                    { id: "c", text: "Kayseri Uçak Fabrikası'nın yapılandırılması" },
                    { id: "d", text: "Yabancı ülkelerden modern tank ve zırhlı araçların ithal edilmesi" },
                    { id: "e", text: "Yeni savaş gemilerinin varolan filoya eklenmesi" }
                ],
                correctAnswer: "d"
            },
            {
                number: 13,
                text: "1940 yılında çıkarılan Milli Korunma Kanunu (MKK) ile hükümete, savaş zamanlarında ortaya çıkan hangi olumsuzlukları önlemek amacıyla sanayi ve maden kuruluşlarının üretimini belirleme yetkisi verilmiştir?",
                options: [
                    { id: "a", text: "Enflasyon ve devalüasyon" },
                    { id: "b", text: "Karaborsa ve hayat pahalılığı" },
                    { id: "c", text: "Grevler ve lokavtlar" },
                    { id: "d", text: "İşsizlik ve göç" },
                    { id: "e", text: "Tarımsal üretimin düşmesi ve kıtlık" }
                ],
                correctAnswer: "b"
            },
            {
                number: 14,
                text: "1942'de çıkarılan ve çoğunlukla gayrimüslim unsurları hedef alan, \"ekonominin Türkleştirilmesi\" amacı güdülen vergi hangisidir?",
                options: [
                    { id: "a", text: "Aşar Vergisi" },
                    { id: "b", text: "Ağnam Vergisi" },
                    { id: "c", text: "Toprak Mahsulleri Vergisi" },
                    { id: "d", text: "Varlık Vergisi" },
                    { id: "e", text: "Yol Vergisi" }
                ],
                correctAnswer: "d"
            },
            {
                number: 15,
                text: "Metinde, II. Dünya Savaşı sonrası dönemde Türkiye ekonomisiyle ilgili olarak verilen bilgilerden hangisi **yanlıştır**?",
                options: [
                    { id: "a", text: "Savaş ve sonrası dönemde ekonomi yüzde 36'yı aşan bir şekilde küçülmüştür." },
                    { id: "b", text: "1945'e gelindiğinde tarımsal üretim 1939'dakinin yüzde 40'ına gerilemiştir." },
                    { id: "c", text: "1941'de yüzde 38,5 olan enflasyon, 1942'de yüzde 93,7'ye yükselmiştir." },
                    { id: "d", text: "Toprak Mahsulleri Vergisi'nin (TMV) uygulanmasıyla finansman açığı tamamen kapatılmıştır." },
                    { id: "e", text: "Savaş sonrasında dünya siyaset sahnesinde kartlar yeniden karılırken, Türkiye bu yeni dünyada kendisine yer bulmaya çalışmıştır." }
                ],
                correctAnswer: "d"
            }
        ]
    },
    {
        unit: 4,
        page: 4,
        name: "Soğuk Savaş Dönemi",
        questions: [
            {
                number: 1,
                text: "Soğuk Savaş Dönemi, hangi iki süper gücün önderliğindeki bloklar arasında yaşanan uluslararası siyasi ve askeri gerginlik olarak tanımlanmaktadır?",
                options: [
                    { id: "a", text: "İngiltere ve Fransa" },
                    { id: "b", text: "ABD ve Çin" },
                    { id: "c", text: "ABD ve SSCB" },
                    { id: "d", text: "Almanya ve Japonya" },
                    { id: "e", text: "İngiltere ve SSCB" }
                ],
                correctAnswer: "c"
            },
            {
                number: 2,
                text: "Metne göre Soğuk Savaş'ın başlangıcı ve bitişi için bir çerçeve çizmek adına hangi olaylar temele alınabilir?",
                options: [
                    { id: "a", text: "Başlangıç: Versay Antlaşması (1919) / Bitiş: Berlin Duvarı'nın Yıkılması (1989)" },
                    { id: "b", text: "Başlangıç: Yalta Konferansı'nın sona ermesi (1945) / Bitiş: Sovyet Birliği'nin Dağılması (1990 civarı)" },
                    { id: "c", text: "Başlangıç: Kore Savaşı'nın başlaması (1950) / Bitiş: Vietnam Savaşı'nın sona ermesi (1975)" },
                    { id: "d", text: "Başlangıç: NATO'nun kurulması (1949) / Bitiş: Varşova Paktı'nın dağılması (1991)" },
                    { id: "e", text: "Başlangıç: Truman Doktrini'nin ilanı (1947) / Bitiş: Küba Krizi'nin çözülmesi (1962)" }
                ],
                correctAnswer: "b"
            },
            {
                number: 3,
                text: "Soğuk Savaş döneminde ABD ile müttefik olan, kapitalist ve antikomünist ülkelerden oluşan blok hangisidir ve bu bloğun askeri ittifakı ne olarak bilinir?",
                options: [
                    { id: "a", text: "Doğu Bloku - Varşova Paktı" },
                    { id: "b", text: "Batı Bloku - NATO" },
                    { id: "c", text: "Bağlantısızlar Hareketi - SEATO" },
                    { id: "d", text: "Mihver Devletleri - Anti-Komintern Paktı" },
                    { id: "e", text: "İtilaf Devletleri - CENTO" }
                ],
                correctAnswer: "b"
            },
            {
                number: 4,
                text: "1946'da Churchill'in Fulton Konferansı'nda SSCB'ye bağlı komünist devletler için kullandığı ve Soğuk Savaş'ın sembollerinden biri haline gelen ifade hangisidir?",
                options: [
                    { id: "a", text: "\"Kızıl Tehlike\"" },
                    { id: "b", text: "\"Demir Perde Ülkeleri\"" },
                    { id: "c", text: "\"Uydu Devletler İmparatorluğu\"" },
                    { id: "d", text: "\"Komünist Blok\"" },
                    { id: "e", text: "\"Varşova Hattı\"" }
                ],
                correctAnswer: "b"
            },
            {
                number: 5,
                text: "Aşağıdakilerden hangisi, Soğuk Savaş'ın doruğunu oluşturan olaylardan biri olarak metinde **sayılmamıştır**?",
                options: [
                    { id: "a", text: "Kore Savaşı" },
                    { id: "b", text: "Berlin Sorunu" },
                    { id: "c", text: "Süveyş Krizi" },
                    { id: "d", text: "Küba Krizi" },
                    { id: "e", text: "U-2 casus uçağı olayı" }
                ],
                correctAnswer: "c"
            },
            {
                number: 6,
                text: "Churchill ve Stalin arasında Ekim 1944'te gerçekleşen ve amacı Doğu Avrupa'da etki alanlarının kesin olarak saptanması olan antlaşma hangisidir?",
                options: [
                    { id: "a", text: "Potsdam Antlaşması" },
                    { id: "b", text: "Yalta Antlaşması" },
                    { id: "c", text: "Yüzdeler Antlaşması" },
                    { id: "d", text: "Moskova Antlaşması" },
                    { id: "e", text: "Atlantik Bildirisi" }
                ],
                correctAnswer: "c"
            },
            {
                number: 7,
                text: "Berlin Buhranı'nın ortaya çıkmasının temel nedeni nedir?",
                options: [
                    { id: "a", text: "SSCB'nin Batı Berlin'i Doğu Almanya'ya katmak istemesi" },
                    { id: "b", text: "Batılı devletlerin (İngiltere, Fransa, ABD) kendi işgal bölgelerini birleştirmesi ve SSCB'nin buna tepkisi" },
                    { id: "c", text: "Doğu Almanya'nın Federal Alman Cumhuriyeti'ne savaş ilan etmesi" },
                    { id: "d", text: "Batılı devletlerin Doğu Berlin'e hava köprüsüyle yardım ulaştırması" },
                    { id: "e", text: "Berlin Duvarı'nın inşasına başlanması" }
                ],
                correctAnswer: "b"
            },
            {
                number: 8,
                text: "Eylül 1949'da SSCB'nin ilk atom bombasını yaptığını açıklaması, ABD'nin hangi alandaki tekel durumuna son vermiştir?",
                options: [
                    { id: "a", text: "Uzay teknolojisi alanındaki tekel durumuna" },
                    { id: "b", text: "Nükleer silah (atom bombası) alanındaki tekel durumuna" },
                    { id: "c", text: "Geleneksel silah üstünlüğüne" },
                    { id: "d", text: "Ekonomik yardım kapasitesindeki tekel durumuna" },
                    { id: "e", text: "Casusluk faaliyetlerindeki tekel durumuna" }
                ],
                correctAnswer: "b"
            },
            {
                number: 9,
                text: "Kominform'un (Komünist Enformasyon Bürosu) 1947'de Stalin tarafından kurulma amacı nedir?",
                options: [
                    { id: "a", text: "Doğu Bloku ülkeleri arasında serbest ticareti teşvik etmek" },
                    { id: "b", text: "\"Amerikan emperyalizmine\" ve propagandasına karşı komünist partileri bir araya getirmek" },
                    { id: "c", text: "Batı Avrupa'daki komünist partilere mali destek sağlamak" },
                    { id: "d", text: "Sovyetler Birliği'nin kültürel etkisini yaymak" },
                    { id: "e", text: "NATO'ya karşı ortak bir askeri strateji geliştirmek" }
                ],
                correctAnswer: "b"
            },
            {
                number: 10,
                text: "Marshall Planı'na (Avrupa Ekonomik Kalkınma Planı) karşıt bir girişim olarak, Sosyalist ülkeler arasında ekonomik işbirliği ve dayanışma amacıyla kurulan uluslararası örgüt hangisidir?",
                options: [
                    { id: "a", text: "Varşova Paktı" },
                    { id: "b", text: "Kominform" },
                    { id: "c", text: "Comecon (Karşılıklı Ekonomik Yardımlaşma Konseyi)" },
                    { id: "d", text: "Bağlantısızlar Hareketi" },
                    { id: "e", text: "Molotov Planı" }
                ],
                correctAnswer: "c"
            },
            {
                number: 11,
                text: "Varşova Paktı'nın (1955) kurulma amacı metinde nasıl belirtilmiştir?",
                options: [
                    { id: "a", text: "Doğu Avrupa ülkeleri arasında ekonomik birliği sağlamak" },
                    { id: "b", text: "NATO saldırısına karşı Doğu Avrupa ülkelerini savunmak" },
                    { id: "c", text: "Komünizmi dünya geneline yaymak için askeri bir güç oluşturmak" },
                    { id: "d", text: "Batı Avrupa'daki komünist hareketleri desteklemek" },
                    { id: "e", text: "Sovyetler Birliği'nin sınır güvenliğini sağlamak" }
                ],
                correctAnswer: "b"
            },
            {
                number: 12,
                text: "Yugoslavya'nın 1948'de Kominform'dan çıkarılmasının temel nedeni nedir?",
                options: [
                    { id: "a", text: "Yugoslavya'nın NATO'ya katılma isteği" },
                    { id: "b", text: "Tito'nun SSCB'ye karşı askeri bir darbe planlaması" },
                    { id: "c", text: "Tito'nun Yugoslavya'nın şartlarına uygun \"milli komünizm\" uygulamak ve kendi liderliğinde Balkan Federasyonu kurmak istemesi" },
                    { id: "d", text: "Yugoslavya'nın Marshall Planı'ndan yardım kabul etmesi" },
                    { id: "e", text: "Tito'nun Stalin'in liderliğini tanımaması" }
                ],
                correctAnswer: "c"
            },
            {
                number: 13,
                text: "Truman Doktrini'nin (1947) ilan edilmesine neden olan temel gelişme nedir?",
                options: [
                    { id: "a", text: "Çin'de komünist devrimin gerçekleşmesi" },
                    { id: "b", text: "İngiltere'nin, SSCB'nin yayılma çabalarına karşı Türkiye ve Yunanistan'a yardım yapamayacağını bildirmesi" },
                    { id: "c", text: "Kore Savaşı'nın başlaması" },
                    { id: "d", text: "Sovyetler Birliği'nin ilk atom bombasını denemesi" },
                    { id: "e", text: "Berlin Buhranı'nın ortaya çıkması" }
                ],
                correctAnswer: "b"
            },
            {
                number: 14,
                text: "Marshall Planı'nın (1948) başlıca iki amacı arasında aşağıdakilerden hangisi **yer almaz**?",
                options: [
                    { id: "a", text: "Avrupa ülkelerinin yıkılan ekonomilerinin onarımına katkıda bulunmak" },
                    { id: "b", text: "Komünizmin Batı Avrupa'daki yayılışına engel olmak" },
                    { id: "c", text: "Doğu Bloku ülkelerine ekonomik yaptırımlar uygulamak" },
                    { id: "d", text: "Avrupa ülkelerinin kalkınmalarının gerçekleştirilmesine katkıda bulunmak" },
                    { id: "e", text: "Sağlanacak dış yardımlarla ekonomik iyileşmeyi sağlamak" }
                ],
                correctAnswer: "c"
            },
            {
                number: 15,
                text: "NATO'nun (Kuzey Atlantik Antlaşması Teşkilatı) 1949'da kurulmasının temel amacı nedir?",
                options: [
                    { id: "a", text: "Sovyetler Birliği ile kültürel ve bilimsel işbirliğini geliştirmek" },
                    { id: "b", text: "Sovyetlerin yayılmacı politikalarına karşı durdurma politikası izlemek" },
                    { id: "c", text: "Bağlantısız ülkelere askeri yardım sağlamak" },
                    { id: "d", text: "Avrupa'da ortak bir pazar oluşturmak" },
                    { id: "e", text: "Üye ülkeler arasında serbest dolaşımı sağlamak" }
                ],
                correctAnswer: "b"
            },
            {
                number: 16,
                text: "1956 Süveyş Krizi'nde, Mısır lideri Cemal Abdülnasır'ın hangi kanalı millileştirmesi İngiltere, Fransa ve İsrail'in müdahalesine yol açmıştır?",
                options: [
                    { id: "a", text: "Panama Kanalı" },
                    { id: "b", text: "Kiel Kanalı" },
                    { id: "c", text: "Süveyş Kanalı" },
                    { id: "d", text: "Korint Kanalı" },
                    { id: "e", text: "Volga-Don Kanalı" }
                ],
                correctAnswer: "c"
            },
            {
                number: 17,
                text: "Eisenhower Doktrini (1957) ile ABD'nin Orta Doğu politikasındaki temel hedefi neydi?",
                options: [
                    { id: "a", text: "Bölgedeki petrol rezervlerini doğrudan kontrol altına almak" },
                    { id: "b", text: "Bağımsızlığını korumak için ekonomik kalkınma çabası içine giren Orta Doğu ülkelerine ekonomik ve askeri yardım yapmak, komünizme karşı savunulmalarını sağlamak" },
                    { id: "c", text: "İsrail'in güvenliğini garanti altına almak ve Arap ülkeleriyle barış anlaşmaları yapmasını sağlamak" },
                    { id: "d", text: "Bölgedeki monarşileri destekleyerek demokratik hareketleri engellemek" },
                    { id: "e", text: "Sovyetler Birliği ile Orta Doğu'da ortak bir etki alanı oluşturmak" }
                ],
                correctAnswer: "b"
            },
            {
                number: 18,
                text: "1948-1949 Arap-İsrail Savaşı'nın sonuçları arasında aşağıdakilerden hangisi metinde **belirtilmemiştir**?",
                options: [
                    { id: "a", text: "Filistin'de yaşayan bir milyon kadar insanın yerinden yurdundan edilmesi ve Mülteciler Meselesi'nin ortaya çıkması" },
                    { id: "b", text: "Mısır'da Kral Faruk rejiminin devrilmesine ortam hazırlanması" },
                    { id: "c", text: "Arap dünyasında \"milliyetçilik\" duygusunun güçlenmesi ve Arap Milliyetçiliği hareketinin ivme kazanması" },
                    { id: "d", text: "Savaşın sonunda kalıcı bir barış antlaşmasının imzalanmasıyla tüm sorunların çözülmesi" },
                    { id: "e", text: "Batılıların Orta Doğu'ya silah ambargosu uygulamaya başlaması" }
                ],
                correctAnswer: "d"
            },
            {
                number: 19,
                text: "Türkiye'nin Kore Savaşı'na Birleşmiş Milletler kuvvetlerine bir tugayla katılması, hangi uluslararası örgüte katılma yolunda önemli bir adım olarak değerlendirilmiştir?",
                options: [
                    { id: "a", text: "Avrupa Konseyi" },
                    { id: "b", text: "Bağlantısızlar Hareketi" },
                    { id: "c", text: "NATO" },
                    { id: "d", text: "Varşova Paktı" },
                    { id: "e", text: "SEATO" }
                ],
                correctAnswer: "c"
            },
            {
                number: 20,
                text: "1945-1975 yılları arasındaki \"muhteşem otuzlar\" olarak anılan dönemde yaşanan ekonomik büyümenin toplumsal hayattaki etkilerinden biri **değildir**?",
                options: [
                    { id: "a", text: "Petrolün kömürün yerini alması ve petrol ticaretinin artması" },
                    { id: "b", text: "Sentetik kumaşlar ve plastik malzemelerin insan hayatındaki yerinin artması" },
                    { id: "c", text: "Toplu taşıma, otomotiv, dayanıklı tüketim malları üretiminde önemli gelişmeler yaşanması" },
                    { id: "d", text: "Hızlı nüfus artışı ve şehirlere göçlerin azalması" },
                    { id: "e", text: "Kadınların iş hayatındaki etkinliklerinin artması" }
                ],
                correctAnswer: "d"
            }
        ]
    },
    {
        unit: 5,
        page: 5,
        name: "Soğuk Savaş Döneminde Türkiye",
        questions: [
            {
                number: 1,
                text: "İkinci Dünya Savaşı sonrasında Sovyetler Birliği'nin Türkiye'den Boğazlar üzerinde söz hakkı ve Kars ile Ardahan'ı talep etmesi, Türkiye'yi hangi bloğa yaklaştırmıştır?",
                options: [
                    { id: "a", text: "Bağlantısızlar Hareketi" },
                    { id: "b", text: "Doğu Bloku (SSCB önderliğindeki)" },
                    { id: "c", text: "Batı Bloku (ABD önderliğindeki)" },
                    { id: "d", text: "Arap Birliği" },
                    { id: "e", text: "Asya-Afrika Bloğu" }
                ],
                correctAnswer: "c"
            },
            {
                number: 2,
                text: "Türkiye'de çok partili hayata geçilmesine 1945'te karar verilmesinin ardından kurulan ilk siyasi parti ve kitleleri peşinden sürükleyerek desteğini kazanan parti sırasıyla hangileridir?",
                options: [
                    { id: "a", text: "İlk parti: Demokrat Parti / Kitleleri sürükleyen: Milli Kalkınma Partisi" },
                    { id: "b", text: "İlk parti: Cumhuriyet Halk Partisi / Kitleleri sürükleyen: Demokrat Parti" },
                    { id: "c", text: "İlk parti: Milli Kalkınma Partisi / Kitleleri sürükleyen: Demokrat Parti" },
                    { id: "d", text: "İlk parti: Hürriyet Partisi / Kitleleri sürükleyen: Millet Partisi" },
                    { id: "e", text: "İlk parti: Adalet Partisi / Kitleleri sürükleyen: Türkiye İşçi Partisi" }
                ],
                correctAnswer: "c"
            },
            {
                number: 3,
                text: "Demokrat Parti'nin (DP) kuruluşuna yol açan ve CHP içinde Çiftçiyi Topraklandırma Kanunu kabulü sırasında Celal Bayar, Adnan Menderes, Fuat Köprülü ve Refik Koraltan tarafından verilen belge hangisidir?",
                options: [
                    { id: "a", text: "12 Temmuz Beyannamesi" },
                    { id: "b", text: "Misak-ı Milli" },
                    { id: "c", text: "Dörtlü Takrir" },
                    { id: "d", text: "Hürriyet Misakı" },
                    { id: "e", text: "Truman Doktrini" }
                ],
                correctAnswer: "c"
            },
            {
                number: 4,
                text: "1946 genel seçimlerinin \"şaibeli seçim\" olarak anılmasına neden olan uygulama özellikleri arasında aşağıdakilerden hangisi **bulunmaz**?",
                options: [
                    { id: "a", text: "Adli denetim dışında olması" },
                    { id: "b", text: "Açık oy esasına göre yapılması" },
                    { id: "c", text: "Gizli sayım esasına göre yapılması" },
                    { id: "d", text: "Çoğunluk sistemi esasına göre yapılması" },
                    { id: "e", text: "Gizli oy esasına göre yapılması" }
                ],
                correctAnswer: "e"
            },
            {
                number: 5,
                text: "İsmet İnönü'nün DP ile CHP arasındaki gerginliği azaltmak amacıyla iki partinin liderleriyle görüşerek 12 Temmuz (1948) Beyannamesi'ni yayınlamasının temel vurgusu neydi?",
                options: [
                    { id: "a", text: "Tek parti yönetiminin devam etmesi gerektiği" },
                    { id: "b", text: "Siyasal partilerin Türk demokrasisinin vazgeçilmez unsurları olduğu" },
                    { id: "c", text: "Ekonomide devletçi politikaların sürdürülmesi gerektiği" },
                    { id: "d", text: "Dış politikada tam tarafsızlık ilkesinin benimsenmesi" },
                    { id: "e", text: "Ordunun siyasete müdahale etmemesi gerektiği" }
                ],
                correctAnswer: "b"
            },
            {
                number: 6,
                text: "14 Mayıs 1950 genel seçimlerinin Türkiye tarihindeki önemi nedir ve bu olay nasıl adlandırılmıştır?",
                options: [
                    { id: "a", text: "İlk kez nispi temsil sisteminin uygulanması - \"Sessiz Devrim\"" },
                    { id: "b", text: "İktidardaki tek parti yönetiminin yapılan demokratik seçimlerle iktidarı başka bir partiye devretmesi - \"Beyaz Devrim\"" },
                    { id: "c", text: "Kadınların ilk kez oy kullanması - \"Eşitlik Devrimi\"" },
                    { id: "d", text: "Anayasa değişikliği ile cumhurbaşkanının halk tarafından seçilmesi - \"Halkın Zaferi\"" },
                    { id: "e", text: "Seçim barajının ilk kez uygulanması - \"Temsilde Adalet\"" }
                ],
                correctAnswer: "b"
            },
            {
                number: 7,
                text: "DP'nin ilk yıllarında yakaladığı ekonomik başarının tarıma dayandığı belirtilen metinde, bu başarının yakalanmasında kullanılan araçlardan biri olarak aşağıdakilerden hangisi **sayılmamıştır**?",
                options: [
                    { id: "a", text: "Çiftçiyi Topraklandırma Kanunu kapsamında tarım alanlarının genişletilmesi" },
                    { id: "b", text: "Gizli işsiz durumundaki fazla nüfusun yeni çalışma alanlarında istihdam edilmesi" },
                    { id: "c", text: "Tarımda makineleşmeye gidilmesi" },
                    { id: "d", text: "Tarımsal ürünlerin fiyatlarının düşürülerek ihracatın artırılması" },
                    { id: "e", text: "Ziraat Bankası vasıtasıyla çiftçiye krediler sağlanması" }
                ],
                correctAnswer: "d"
            },
            {
                number: 8,
                text: "1954-1957 yılları arasındaki DP iktidarının en önemli olaylarından biri olarak kabul edilen ve Kıbrıs Meselesi yüzünden gergin olan gündemde Atatürk'ün Selanik'teki evine bomba atıldığı haberiyle başlayan olay hangisidir?",
                options: [
                    { id: "a", text: "Vatan Cephesi'nin kurulması" },
                    { id: "b", text: "6/7 Eylül Olayları" },
                    { id: "c", text: "Tahkikat Komisyonu'nun kurulması" },
                    { id: "d", text: "Bağdat Paktı'nın imzalanması" },
                    { id: "e", text: "Köy Enstitülerinin kapatılması" }
                ],
                correctAnswer: "b"
            },
            {
                number: 9,
                text: "1958 Kararları ile yapılan devalüasyon sonucunda bir ABD dolarının Türk Lirası karşısındaki değeri yaklaşık olarak kaçtan kaça yükselmiştir?",
                options: [
                    { id: "a", text: "1,30 TL'den 2,80 TL'ye" },
                    { id: "b", text: "2,80 TL'den 9 TL'ye" },
                    { id: "c", text: "9 TL'den 15 TL'ye" },
                    { id: "d", text: "1 TL'den 5 TL'ye" },
                    { id: "e", text: "5 TL'den 25 TL'ye" }
                ],
                correctAnswer: "b"
            },
            {
                number: 10,
                text: "DP iktidarının sonunu hazırlayan gelişmelerin en önemlisi olarak belirtilen ve başta CHP olmak üzere Meclis içi ve dışı tüm muhalefeti siyasi faaliyetten men etmeyi hedefleyen yapı hangisidir?",
                options: [
                    { id: "a", text: "Milli Korunma Kanunu" },
                    { id: "b", text: "Vatan Cephesi" },
                    { id: "c", text: "Tahkikat Komisyonu" },
                    { id: "d", text: "Devlet Planlama Teşkilatı" },
                    { id: "e", text: "Milli Birlik Komitesi" }
                ],
                correctAnswer: "c"
            },
            {
                number: 11,
                text: "1950'li yıllarda Türkiye'de yaşanan kırsal yapıdaki dönüşüm ve şehirlerde gelişen iktisadi canlılık sonucunda ortaya çıkan ve insanların hayatına dahil olan kavramlardan biri aşağıdakilerden hangisi **değildir**?",
                options: [
                    { id: "a", text: "Gecekondu" },
                    { id: "b", text: "Dolmuş" },
                    { id: "c", text: "Arabesk müzik" },
                    { id: "d", text: "İnternet kafe" },
                    { id: "e", text: "Özel konut yapımında patlama" }
                ],
                correctAnswer: "d"
            },
            {
                number: 12,
                text: "27 Mayıs 1960 askeri müdahalesi sonrasında ülke yönetimini ele alan ve başkanlığına Cemal Gürsel'in getirildiği komitenin adı nedir?",
                options: [
                    { id: "a", text: "Milli Güvenlik Konseyi" },
                    { id: "b", text: "Milli Birlik Komitesi" },
                    { id: "c", text: "Yüksek Askeri Şura" },
                    { id: "d", text: "Kurucu Meclis" },
                    { id: "e", text: "Temsilciler Meclisi" }
                ],
                correctAnswer: "b"
            },
            {
                number: 13,
                text: "1961 Anayasası'nın getirdiği yenilikler arasında aşağıdakilerden hangisi **bulunmaz**?",
                options: [
                    { id: "a", text: "Sosyal devlet anlayışının ortaya çıkması" },
                    { id: "b", text: "Grev, lokavt ve toplu sözleşme haklarının getirilmesi" },
                    { id: "c", text: "Çoğulcu devlet anlayışına geçilmesi" },
                    { id: "d", text: "Anayasa Mahkemesi'nin kurulması" },
                    { id: "e", text: "Cumhurbaşkanının halk tarafından seçilmesi" }
                ],
                correctAnswer: "e"
            },
            {
                number: 14,
                text: "Sovyetler Birliği'nin yayılmacı politikalarına karşı ABD'nin Truman Doktrini ve Marshall Planı'nı uygulamaya başlaması üzerine 1947'de Sovyet Rusya önderliğinde kurulan ve Doğu Bloku'nu resmen ortaya çıkaran yapı hangisidir?",
                options: [
                    { id: "a", text: "Varşova Paktı" },
                    { id: "b", text: "Comecon" },
                    { id: "c", text: "Kominform" },
                    { id: "d", text: "Molotov Planı" },
                    { id: "e", text: "CENTO" }
                ],
                correctAnswer: "c"
            },
            {
                number: 15,
                text: "Türkiye'nin Kore Savaşı'na bir Türk Birliği göndermesi, hangi uluslararası askeri ittifaka üye olma yolunda önemli bir adım olarak değerlendirilmiştir?",
                options: [
                    { id: "a", text: "Birleşmiş Milletler (Güvenlik Konseyi üyeliği)" },
                    { id: "b", text: "Bağlantısızlar Hareketi" },
                    { id: "c", text: "CENTO (Merkezi Antlaşma Örgütü)" },
                    { id: "d", text: "NATO (Kuzey Atlantik Antlaşması Teşkilatı)" },
                    { id: "e", text: "SEATO (Güneydoğu Asya Antlaşması Teşkilatı)" }
                ],
                correctAnswer: "d"
            },
            {
                number: 16,
                text: "Türkiye'nin NATO'ya girdikten sonra ABD ile 1954'te imzaladığı \"Askeri Kolaylıklar Antlaşması\" ile Türkiye'de kurulan Amerikan stratejik hava üssü hangisidir?",
                options: [
                    { id: "a", text: "Diyarbakır Hava Üssü" },
                    { id: "b", text: "İncirlik Hava Üssü" },
                    { id: "c", text: "Merzifon Hava Üssü" },
                    { id: "d", text: "Çiğli Hava Üssü" },
                    { id: "e", text: "Akıncı Hava Üssü" }
                ],
                correctAnswer: "b"
            },
            {
                number: 17,
                text: "1955'te Türkiye'nin yoğun çabaları sonucu kurulan ve Sovyetler Birliği'ni çevreleme amacı güden, daha sonra CENTO adını alan paktın ilk adı nedir ve hangi ülkeler katılmıştır (Türkiye dışında)?",
                options: [
                    { id: "a", text: "Balkan Paktı; Yunanistan, Yugoslavya" },
                    { id: "b", text: "Sadabat Paktı; İran, Irak, Afganistan" },
                    { id: "c", text: "Bağdat Paktı; Irak, İran, Pakistan, İngiltere" },
                    { id: "d", text: "Akdeniz Paktı; İtalya, Fransa, Yunanistan" },
                    { id: "e", text: "Varşova Paktı; Bulgaristan, Romanya, Macaristan" }
                ],
                correctAnswer: "c"
            },
            {
                number: 18,
                text: "Kıbrıs'ta Rumca \"ENOSİS\" sözcüğü ile tanımlanan ve Türk-Yunan ilişkilerinde temel sorun olan çaba neyi ifade etmektedir?",
                options: [
                    { id: "a", text: "Adanın bağımsız bir devlet olarak kalmasını" },
                    { id: "b", text: "Adanın İngiltere yönetimine geri verilmesini" },
                    { id: "c", text: "Adanın Yunanistan'a bağlanmasını" },
                    { id: "d", text: "Adada iki toplumlu federal bir devlet kurulmasını" },
                    { id: "e", text: "Adanın Türkiye'ye bağlanmasını" }
                ],
                correctAnswer: "c"
            },
            {
                number: 19,
                text: "1959 Zürih ve Londra Antlaşmaları ile kurulan Bağımsız Kıbrıs Cumhuriyeti'nde ENOSİS ve taksimi yasaklayan, Türkiye, Yunanistan ve İngiltere'ye garantörlük hakkı veren düzenlemeye rağmen, 1963'te Rumların Türklere yönelik saldırılarıyla fiilen yıkılan bu cumhuriyetin lideri kimdi?",
                options: [
                    { id: "a", text: "Rauf Denktaş" },
                    { id: "b", text: "Glafkos Klerides" },
                    { id: "c", text: "Makarios" },
                    { id: "d", text: "Fazıl Küçük" },
                    { id: "e", text: "Spiros Kiprianu" }
                ],
                correctAnswer: "c"
            },
            {
                number: 20,
                text: "Türkiye'nin Kıbrıs'a müdahale etmek istemesi üzerine ABD Başkanı Johnson'ın gönderdiği ünlü mektupta belirtilen temel tehdit neydi?",
                options: [
                    { id: "a", text: "Türkiye'ye ekonomik ambargo uygulanacağı" },
                    { id: "b", text: "Türkiye'nin BM'den çıkarılacağı" },
                    { id: "c", text: "NATO'nun Türkiye'ye yardım etmeyeceği ve ABD tarafından verilmiş silahların kullanılamayacağı" },
                    { id: "d", text: "Yunanistan'ın Türkiye'ye savaş ilan edeceği" },
                    { id: "e", text: "Kıbrıs Türklerinin adadan sürülmesine göz yumulacağı" }
                ],
                correctAnswer: "c"
            }
        ]
    },
    {
        unit: 6,
        page: 6,
        name: "Ekstra",
        questions: [
            {
                number: 1,
                text: "Süveyş Krizi'nde İngiltere, Fransa ve İsrail'in Mısır'a karşı ortak planının temel amacı aşağıdakilerden hangisiydi?",
                options: [
                    { id: "a", text: "Mısır'ın SSCB ile yakınlaşmasını engellemek" },
                    { id: "b", text: "Süveyş Kanalı'nı ele geçirmek ve Nasır'ı iktidardan indirmek" },
                    { id: "c", text: "Bölgedeki petrol kaynaklarını kontrol altına almak" },
                    { id: "d", text: "Macaristan İhtilali'ne müdahale etmek" },
                    { id: "e", text: "Arap milliyetçiliğini desteklemek" }
                ],
                correctAnswer: "b"
            },
            {
                number: 2,
                text: "1956 Süveyş Krizi sırasında SSCB Başbakanı Bulganin'in Amerika Cumhurbaşkanı Eisenhower'a gönderdiği mesajda aşağıdakilerden hangisini talep etmiştir?",
                options: [
                    { id: "a", text: "Mısır'a ekonomik ambargo uygulanmasını" },
                    { id: "b", text: "İngiltere ve Fransa'ya askeri ültimatom verilmesini" },
                    { id: "c", text: "Amerika ve Sovyet Rusya'nın Mısır'a ortak bir kuvvet göndererek savaşı durdurmalarını" },
                    { id: "d", text: "İsrail'in derhal Mısır topraklarından çekilmesini" },
                    { id: "e", text: "Birleşmiş Milletler Güvenlik Konseyi'nin acil toplanmasını" }
                ],
                correctAnswer: "c"
            },
            {
                number: 3,
                text: "Metne göre, 1956 Süveyş harekâtının en önemli sonucu aşağıdakilerden hangisi olmuştur?",
                options: [
                    { id: "a", text: "İngiltere ve Fransa'nın Orta Doğu'daki etkisinin artması" },
                    { id: "b", text: "Sovyet Rusya'nın Orta Doğu'daki etkisinin yok edilmesi" },
                    { id: "c", text: "Tam tersine Sovyet Rusya'nın etkisinin daha da artması" },
                    { id: "d", text: "Mısır'ın ekonomik olarak güçlenmesi" },
                    { id: "e", text: "Süveyş Kanalı'nın uluslararası bir komisyona devredilmesi" }
                ],
                correctAnswer: "c"
            },
            {
                number: 4,
                text: "1957 Suriye Bunalımı sırasında Türkiye, Irak ve Ürdün'ün endişesinin temel nedeni aşağıdakilerden hangisiydi?",
                options: [
                    { id: "a", text: "Suriye'nin petrol ihracatını durdurması" },
                    { id: "b", text: "Suriye'nin bir \"Moskova uydusu\" haline gelmesi" },
                    { id: "c", text: "Suriye'nin Bağdat Paktı'na katılmak istemesi" },
                    { id: "d", text: "Suriye'de iç savaş çıkması" },
                    { id: "e", text: "Suriye'nin İsrail'e saldırması" }
                ],
                correctAnswer: "b"
            },
            {
                number: 5,
                text: "1958 Lübnan Bunalımı'nın temel nedeni aşağıdakilerden hangisidir?",
                options: [
                    { id: "a", text: "Lübnan'ın SSCB ile askeri ittifak kurması" },
                    { id: "b", text: "Cumhurbaşkanı Chamoun'un Eisenhower Doktrini'ni desteklemesi ve görev süresini uzatma çabası" },
                    { id: "c", text: "Suriye'nin Lübnan'ı işgal etme girişimi" },
                    { id: "d", text: "Lübnan'da ekonomik kriz yaşanması" },
                    { id: "e", text: "İsrail'in Lübnan'a askeri müdahalede bulunması" }
                ],
                correctAnswer: "b"
            },
            {
                number: 6,
                text: "Bağdat Paktı'nın (1955) kuruluş amacı aşağıdakilerden hangisiydi?",
                options: [
                    { id: "a", text: "Orta Doğu'da ekonomik işbirliğini geliştirmek" },
                    { id: "b", text: "Arap ülkeleri arasında bir askeri ittifak kurmak" },
                    { id: "c", text: "Sovyet Rusya'nın Orta Doğu'ya sızmasını önlemek" },
                    { id: "d", text: "Filistin sorununa çözüm bulmak" },
                    { id: "e", text: "Türkiye'nin NATO'ya üyeliğini hızlandırmak" }
                ],
                correctAnswer: "c"
            },
            {
                number: 7,
                text: "Bağdat Paktı'nın adı hangi olaydan sonra ve ne olarak değiştirilmiştir?",
                options: [
                    { id: "a", text: "Süveyş Krizi'nden sonra, SEATO olarak" },
                    { id: "b", text: "Irak'ın 1959'da paktan çekilmesinden sonra, CENTO (Merkezi Antlaşma Örgütü) olarak" },
                    { id: "c", text: "Suriye Bunalımı'ndan sonra, METO (Middle East Treaty Organization) olarak" },
                    { id: "d", text: "Eisenhower Doktrini'nin ilanından sonra, MEDO (Middle East Defense Organization) olarak" },
                    { id: "e", text: "İsrail'in kurulmasından sonra, ARAP PAKTI olarak" }
                ],
                correctAnswer: "b"
            },
            {
                number: 8,
                text: "Eisenhower Doktrini'nin temel amacı neydi ve ABD bu doktrinle Orta Doğu'da hangi sorumluluğu ilk kez üzerine alıyordu?",
                options: [
                    { id: "a", text: "Bölge ülkelerine nükleer silah sağlamak ve askeri üsler kurmak." },
                    { id: "b", text: "Arap-İsrail sorununu çözmek ve kalıcı barışı sağlamak." },
                    { id: "c", text: "Ekonomik yardım yapmak, isteyen ülkelere askeri yardım yapmak ve Amerikan silahlı kuvvetlerinin kullanılması suretiyle bölgedeki ülkelerin komünizme karşı savunulmasını sağlamak." },
                    { id: "d", text: "Orta Doğu petrollerinin Batı'ya akışını garanti altına almak ve SSCB'ye ambargo uygulamak." },
                    { id: "e", text: "Bağdat Paktı'nı güçlendirmek ve yeni üyeler kazandırmak." }
                ],
                correctAnswer: "c"
            },
            {
                number: 9,
                text: "1957 Ürdün Buhranı sırasında Kral Hüseyin'in Nabulsi hükümetini devirmesinde hangi ülkelerden destek aldığı metinde belirtilmiştir?",
                options: [
                    { id: "a", text: "İngiltere ve Fransa" },
                    { id: "b", text: "SSCB ve Suriye" },
                    { id: "c", text: "Mısır ve Irak" },
                    { id: "d", text: "Amerika ve Suudi Arabistan" },
                    { id: "e", text: "İsrail ve Türkiye" }
                ],
                correctAnswer: "d"
            },
            {
                number: 10,
                text: "İngiliz Dışişleri Bakanı Lord Arthur Balfour'un 1917'de Lord Rothschild'e gönderdiği mektup (Balfour Deklarasyonu) aşağıdakilerden hangisini ifade ediyordu?",
                options: [
                    { id: "a", text: "Filistin'in Araplara bağımsızlık verileceğini" },
                    { id: "b", text: "Filistin topraklarında bir Musevi devleti kurulması konusunda İngiliz hükümetinin destek vereceğini" },
                    { id: "c", text: "Orta Doğu'da petrol arama haklarının İngiliz şirketlerine verileceğini" },
                    { id: "d", text: "Osmanlı İmparatorluğu'nun Filistin'den çekilmesi gerektiğini" },
                    { id: "e", text: "Filistin'in Milletler Cemiyeti mandası altına alınacağını" }
                ],
                correctAnswer: "b"
            },
            {
                number: 11,
                text: "1948-1949 Arap-İsrail Savaşı'nın sonuçları arasında aşağıdakilerden hangisi metinde yer almaz?",
                options: [
                    { id: "a", text: "Bir milyon kadar insanın yerinden yurdundan olmasıyla Mülteciler Meselesi'nin ortaya çıkması." },
                    { id: "b", text: "Mısır'da Kral Faruk rejiminin devrilmesine ortam hazırlanması." },
                    { id: "c", text: "Arap dünyasında \"milliyetçilik\" duygusunun güçlenmesi ve Arap Milliyetçiliği hareketinin ivme kazanması." },
                    { id: "d", text: "İsrail'in Birleşmiş Milletler tarafından tanınmaması." },
                    { id: "e", text: "Savaşın sonunda barış antlaşması yapılmamasıyla ileride yeni savaşlara ortam hazırlanması." }
                ],
                correctAnswer: "d"
            },
            {
                number: 12,
                text: "Kore Savaşı'nda Türkiye'nin Birleşmiş Milletler kuvvetlerine 5090 kişilik bir tugayla katılması, aşağıdaki hangi önemli gelişmeye zemin hazırlamıştır?",
                options: [
                    { id: "a", text: "Bağdat Paktı'na katılmasına" },
                    { id: "b", text: "SEATO'ya üye olmasına" },
                    { id: "c", text: "NATO'ya katılma yolunda önemli bir adım atmasına" },
                    { id: "d", text: "Süveyş Krizi'nde arabuluculuk yapmasına" },
                    { id: "e", text: "Eisenhower Doktrini'nden faydalanmasına" }
                ],
                correctAnswer: "c"
            },
            {
                number: 13,
                text: "Metne göre SEATO'nun (Güney Doğu Asya Antlaşma Teşkilatı) kurulmasındaki temel amaç aşağıdakilerden hangisiydi?",
                options: [
                    { id: "a", text: "Bölgede ekonomik kalkınmayı sağlamak" },
                    { id: "b", text: "Çin'in yayılmacı politikalarına karşı ortak bir savunma oluşturmak" },
                    { id: "c", text: "Tayland, Laos, Kamboçya ve Güney Vietnam gibi ülkeleri komünizm tehlikesinden korumak" },
                    { id: "d", text: "Japonya'nın yeniden silahlanmasını engellemek" },
                    { id: "e", text: "Hindistan ve Pakistan arasındaki sorunları çözmek" }
                ],
                correctAnswer: "c"
            },
            {
                number: 14,
                text: "Süveyş Krizi'nde İngiltere, Fransa ve İsrail'in Mısır'a müdahale planına göre, olaylar hangi sıra ile gelişecekti?",
                options: [
                    { id: "a", text: "İngiltere ve Fransa Mısır'a saldıracak, İsrail ise barışı sağlamak için müdahale edecekti." },
                    { id: "b", text: "İsrail Mısır'a savaş açacak, İngiltere ve Fransa ise taraflar arasındaki savaşa son vermek için bölgeye asker çıkaracaktı." },
                    { id: "c", text: "SSCB Mısır'a asker gönderecek, İngiltere, Fransa ve İsrail buna karşı koyacaktı." },
                    { id: "d", text: "Mısır Süveyş Kanalı'nı kapatacak, bunun üzerine üç devlet müdahale edecekti." },
                    { id: "e", text: "ABD'nin onayı alındıktan sonra üç devlet ortak bir operasyon düzenleyecekti." }
                ],
                correctAnswer: "b"
            },
            {
                number: 15,
                text: "ABD'nin Eisenhower Doktrini'ni ilan etmesinin ardındaki temel nedenlerden biri metne göre aşağıdakilerden hangisidir?",
                options: [
                    { id: "a", text: "Bağdat Paktı'nın dağılmasını engellemek." },
                    { id: "b", text: "Suriye'nin SSCB'ye yakınlaşmasını önlemek." },
                    { id: "c", text: "1956 Süveyş Krizi'nden sonra Arap Dünyasında Batılı devletlerin imajının zedelenmesi ve SSCB'nin prestijinin artması." },
                    { id: "d", text: "İsrail'in güvenliğini tam olarak sağlamak." },
                    { id: "e", text: "Lübnan'daki iç karışıklıklara son vermek." }
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