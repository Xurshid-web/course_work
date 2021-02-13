import React, {useState} from 'react'
import Style from './Psd1.module.css'
import img1 from '../assets/Psd/img1.jpg'
import img2 from '../assets/Psd/img2.jpg'
import img3 from '../assets/Psd/img3.jpeg'
import img4 from '../assets/Psd/img4.jpg'
import img5 from '../assets/Psd/img5.jpg'


function Psd1() {
    const [pic1, setPic1] = useState(false)
    const [pic2, setPic2] = useState(false)
    const [pic3, setPic3] = useState(false)
    const [pic4, setPic4] = useState(false)
    const [pic5, setPic5] = useState(false)
    return (
        <div className={Style.parent} >
            <div className={Style.main} >
                <div className={Style.comp1} >
                    <div 
                        className={Style.img} 
                        style={{backgroundImage:`url(${img1})`}}
                        onClick={()=>setPic1(!pic1)}  >
                        
                    </div>
                                <h3>
                                Adope Photoshop dasturi haqida umumiy malumot 
                                </h3>
                       {
                           pic1 &&
                            <div>
                                <p>
                                Adobe Photoshop — Adobe Inc. firmasi tomonidan ishlab chiqilgan va tarqatilyotgan koʻpfunksiyali grafik redaktor. Asosan rastrli tasvirlar bilan ishlashga moʻljallangan, biroq bir nechta vektorli vositalariga ega. Dastur Adobe firmasi mahsuloti sifatida mashhur va rastrli tasvirlarni tahrirlashda dunyoda eng oldi brendi hisoblanadi. Hozirda Photoshop macOS, Windows platformalariga, iOS, Windows Phone va Android mobil tizimlariga moslashtirilgan. Yana Windows 8 va Windows 8.1 uchun Photoshop Express versiyasi ham mavjud. Adobe Photoshop tasvirlarni tahrirlashdagi proffesional redaktor hisoblanadi.Adobe Photoshop dasturining ishlab chiqilgan sanasi birorta kalendarda qayd etilmagan. Biz ishlatadigan Adobe Photoshop dasturining 2005-yilda bir yilligi nishonlandi. Bundan 17 yil oldin, fevral oyida, „Adobe“ kompaniyasi, Rassomlar, fotograflar, dizaynerlar orasida hozirgacha mashhur boʻlgan „Photoshop — 1.0“ muallifini eʼlon qildi. Photoshop dasturi bugungi kunda, „kompyuter grafikasi“ sohasi boʻyicha eng oldingi oʻrinda turibdi va mustaqil dastur boʻlib ajraldi. Biz foydalanayotgan Adobe Photoshop dasturining boshlanishi ancha ilgari boʻlgan. Hozir 41 ta muallifi eʼlon qilingan dasturni aslida aka-uka Jon Noll va Tomas Nollar boshlab bergan. Ularning otasi fotograf boʻlib, ular yertoʻlada joylashgan fotolabaratoriyada otasiga yordam berar edilar. Tomas nur va rang kontrastini oʻrgandi. Jonn esa eski „Apple“ da ishlashga qiziqardi. 1984-yilda Aka-uka Nollarga otasi dastlabki Macintosh olib berdi. Uning imkoniyatlarining koʻpligi shu dasturni tuzishga sabab boʻldi
                                </p>
                            </div>      
                       }
                </div>
                <div className={Style.comp1} >
                    <div 
                        className={Style.img} 
                        style={{backgroundImage:`url(${img2})`}}
                        onClick={()=>setPic2(!pic2)}  >
                        
                    </div>
                                <h3>
                                Adope Photoshop dasturi asosiy paketlari 
                                </h3>
                       {
                           pic2 &&
                            <div>
                                <div>
                                <h4>Adobe Creative Suite paketi tarkibida</h4>
                                <p>
                                2003-yilning oktabrida ishlab chiqilgan Photoshop 8.0 Photoshop CS deb nomlana boshladi, negaki endi u Adobening yangi Creative Suite tarmogʻi mahsulotlariga tegishli edi. 2007-yilgi Photoshop 10.0 dasturi Photoshop CS3 deb nomlandi. CS3 — dastur Adobe Creative Suite dasturlar paketining uchinchi versiyasiga moslashganini bildiradi. Eski CS va CS2 versiyalari dasturning yangi tarmoqqa mansubligini bildirish va oldingi versiyalaridan farqlantirish maqsadida dasturning bosh ramzida 3 dan 7 versiyasigacha mavjud boʻlgan koʻz chiroyli patlar bilan oʻzgartirildi. Yangi versiya yangi imkoniyatlarga ham ega boʻldi. Photoshop CS3 ramzida esa koʻk chegarali toʻrtburchak ichidagi PS yozuvi aks etadi.
                                </p>

                                <h4>
                                Adobe Creative Cloud paketi tarkibida
                                </h4>
                                <p>
                                2013-yil iyunida ishlab chiqilgan Photoshop 14 Photoshop CC nomiga ega. CC qisqartmasi dastur Adobe Creative Cloud dasturlar paketi tarmogʻiga moslashtirilganini bildiradi. 2014-yildan boshlab mahsulot versiyalari yangi nomlanishga ega boʻldi: endi uning nomida qachon ishlab chiqilgani ham yoziladi (Photoshop 2014.0.0). Yangi versiyaga Adobe Camera RAW plagini ham oʻrnatildi, endilikda dastur koʻplab fotokameralardan suratlarni toʻgʻridan toʻgʻri ola oladi.
                                </p>
                                </div>
                            </div>      
                       }
                </div>
                <div className={Style.comp1} >
                    <div 
                        className={Style.img} 
                        style={{backgroundImage:`url(${img3})`}}
                        onClick={()=>setPic3(!pic3)}  >
                        
                    </div>
                                <h3>
                                Adope Photoshop dasturi afzalliklari 
                                </h3>
                       {
                           pic3 &&
                            <div>
                                <p>
                                    Adobe Photoshop dasturi 20 dan ortiq formatdagi fayllar bilan ishlash imkoniga ega. Ular: PSD, PSB, PostScript, EPS, DCS, EPS TIFF, BMP, GIF, JPEG, TIFF, PICT, PNG, PDF, ICO, IFF, PCX, RAW, TGA, Scitex CT, Filmstrip, FlashPix, JPEG2000 va boshqalar. Eng koʻp qoʻllaniladigan formatlar: BMP (Windows Bit map — Windows ning vit xaritasi) — Windows muhitida ishlovchi kompyuterlarda ekran osti tasvirlarini qoʻllovchi dastur Microsoft Paintda keng qoʻllaniladi. JPEG, JPG (Joint Phonographic Experts Group) — hozirgi kunda eng koʻp qoʻllaniladigan formatlardan biri boʻlib, uning asosiy afzaliklaridan biri maxsus dastur yordamida fayl hajmini yetarlicha siqish imkonining mavjudligidir. Ammo faylni siqib, hajmini kichraytirish jarayonida tasvir sifatida oʻzgarish boʻladi. Fayl kuchli siqilganda tasvir sifati yomonlashishi mumkin. Ushbu formatdagi fayllar kompyuter xotirasida koʻp joy egallamaydi va hajm jihatidan kichikligi bois mazkur formatdagi tasvirlar bilan ishlash ancha oson. TIFF (Tagger Image File Format) — bu formatdagi fayllar ham keng qoʻllanadi. Lekin Tiff formatidagi fayllar kompyuter xotirasida koʻp joyni egallaydi. Adobe Photoshop dasturida ushbu formatdagi tasvirlar bilan ishlashda dasturining ishlash tezligi sezilari ravishda kamayishi mumkin. RGB (red, Green, Blue — qizil, koʻk, yashil) moduli tasvirni ekranda tahrir qilish nuqtai nazaridan kelib chiqqan holda juda qulay va u 24 razryadli ranglar platasi yordamida deyarli barcha 16 million ranglarni monitorlarda aks ettiriladi. RGB ranglar majmuasi bilan ishlagan barcha tasvirlarni xohlagan formatda diskka yozish mumakin. RGB ranglar majmuasidagi ayrim ranglar umuman tabiatda uchramaydi. CMYK — tabiatda mavjud boʻlgan ranglar majmuasi, quyosh nurlari inson koʻzlari ajrata oladigan barcha ranglarni oʻziga mujassamlashtirgan. Quyosh nurlari biror — bir jismga tushganda uning taʼsiri ostida inson koʻzlari jism shakli va rangini idrok etadi. Misol uchun, binolarning oʻt oʻchirish burchaklariga osib qoʻyilgan oʻt oʻchirgichlar toʻq koʻk va zangori ranglar bilan boʻyalishiga qaramay, bizning koʻzimizga toʻq qizil rangda koʻrinadi. Ranglarni bir biriga qoʻshilishi natijasida boshqa ranglar hosil qilinadi: S — xavorang, M — binafsharang, Y — sariq rang, K — qora rang. RGB ranglar majmui keng koʻlamdagi ranglarni taklif etadi. Lekin ularning koʻp qismi (ayniqsa, yorkinlari) tasvirni chop etganda monitordagi bilan keskin farq qiladi. Shu bois xam koʻplab mutaxassislar tasvirni chop etishdan avval uni CMYKsistemasiga oʻtkazadilar. Ayrim mutaxassislar esa tasvir bilan CMYK sistemasida ishlashni maslaxat beradilar. Ammo bu tasvir bilan ishlash turli qiyinchiliklar tutdiradi. Ayni shunday qiyinchiliklardan biri — kompyuter juda sekin ishlaydi. Bunga asosiy sabab Adobe Photoshop dasturi RGB sistemasiga sozlangan boʻlib, har bir buyruqni bajarib, uni RGB sistemasidan CMYK sistemasiga almashtirguncha kompyuter qoʻshimcha vaqt talab qiladi. Bundan tashqari, skaner va monitor RGB sistemasida ishlashga moʻljallangan. Oldin bu dastur faqat poligrafiya suratlari muharriri boʻlgan, keyinchalik esa veb-dizaynda ham ishlatila boshladi. Photoshop mediafayllar, animatsiya va boshqa turdagi ijod namunalarini qayta ishlovchi dasturlar bilan aloqadorlikka ega. Adobe ImageReady, Adobe Illustrator, Adobe Premiere, Adobe After Effects, Adobe Encore DVD dasturlari bilan hamkorlikda Photoshop proffesional DVD yaratilishida, turli darajadagi maxsus effektlarni yaratishda, televideniya, kinomotografiyada va oʻrgimchak turida ishlatilishi mumkin. Hozirda kompyuter oʻyinlarini yaratishda ham Photoshop keng ishlatilyapti. Photoshopning asosiy formati PSD yuqorida nomi keltirilgan barcha dasturlarga import va eksport qilinishi mumkin. PS CS DVDlarda menyu hosil qilish funksiyalariga ega. Dasturning juda mashxurligi sabab PSD formati Adobe Fireworks, Photo-Paint, WinImages, GIMP, SAI, PaintShop Pro va boshqa grafik dasturlarda tan olinadi. Photoshop quyidagi rang modellarini tan oladi va ishlaydi: RGB, LAB, CMYK, Kulrang tusi, Oq-qora, Duotone, 256 rangli palitra (Indexed), Koʻp kanalli (Multichannel)
                                </p>
                            </div>      
                       }
                </div>
                <div className={Style.comp1} >
                    <div 
                        className={Style.img} 
                        style={{backgroundImage:`url(${img4})`}}
                        onClick={()=>setPic4(!pic4)}  >
                        
                    </div>
                                <h3>
                                Adope Photoshop dasturining kengaytrilgan funksiyalari 
                                </h3>
                       {
                           pic4 &&
                            <div>
                                <p>
                                Adobe Photoshop Extended dasturining yangi versiyalaridan (CS4 dan) boshlab Adobe Acrobat 3D, Autodesk 3ds Max, Maya va Google Планета Земля dasturlarida yaratilgan 3D formatdagi tasvirlarni ochish hamda tahrirlash mumkin. Photoshop 3D fayllarning quyidagi formatlarini oʻqiy oladi: U3D, 3DS, OBJ, KML va DAE. Uch oʻlchamli suratlarni ikki oʻlchamli suratlarga qoʻshish mumkin. Tahrirdan soʻng ishni GIF-animatsiya yoki PSD koʻrinishida saqlash mumkin va uni Adobe Premiere Pro yoki Adobe After Effects video dasturlarida koʻrish mumkin. CS versiyasidan boshlab PSda skriptlar bilan ishlash imkoniyati bor. Photoshop DIOCOM (Digital Imaging and Communications in Medicine) — tibbiyotdagi raqamli tasvirlar fayllarini oʻqiy oladi. PS Extended dasturi orqali MATLAB tasvirlar bilan ishlash mumkin.
                                </p>
                            </div>      
                       }
                </div>
                <div className={Style.comp1} >
                    <div 
                        className={Style.img} 
                        style={{backgroundImage:`url(${img5})`}}
                        onClick={()=>setPic5(!pic5)}  >
                        
                    </div>
                                <h3>
                                Adope Photoshop dasturining boshqa qurilmalar uchun ko'rinishlari 
                                </h3>
                       {
                           pic5 &&
                            <div>
                                <p>
                                „Adobe Systems“ kompaniyasi „Adobe Photoshop“ grafik muharririning planshet kompyuterlar uchun mo‘ljallangan versiyasini namoyish qildi. Ushbu dastur „Adobe Photoshop Touch“ deb nomlandi. 2010-yilda chiqarilgan „Adobe Photoshop Express“ mobil grafik muharriridan farqli o‘laroq, yangi dastur ko‘proq „Photoshop“ning desktop kompyuterlar uchun mo‘ljallangan versiyasiga o‘xshab ketadi. Unda, xususan, „qatlamlar“ funksiyasi va barmoqlar bilan rasmlarning alohida fragmentlarini „belgilash“ imkoniyati mavjud. Ushbu dasturda qayta ishlangan rasmlarni Facebook ijtimoiy tarmog‘iga yuborish yoki kompaniyaning yangi „Adobe Creative Cloud“ bulutli servisiga joylashtirish mumkin. „Adobe Photoshop Touch“ ham kompaniyaning „Adobe Touch Apps“ ilova-dasturlar paketi tarkibiga kiradi. Paket 6 ta dasturdan iborat: rasmlarni tahrirlash uchun „Adobe Photoshop“, kollajlar yaratish uchun mo‘ljallangan „Adobe Collage“, tayyor ishlarni namoyish qilish uchun „Adobe Debut“, vektor grafikasini tahrirlovchi „Adobe Ideas“, ranglarni aralashtirish uchun „Adobe Kuler“ va veb-sayt eskizlarini yaratish uchun „Adobe Proto“ dasturlarimumkin.
                                </p>
                            </div>      
                       }
                </div>
            </div>
        </div>
    )
}

export default Psd1
