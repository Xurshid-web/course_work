import React, {useState} from 'react'
import Style from '../PSD/Psd1.module.css'
import img1 from '../assets/max/img1.jpg'
import img2 from '../assets/max/img2.jpg'
import img3 from '../assets/max/img3.jpg'
import img4 from '../assets/max/img4.jpg'
import img5 from '../assets/max/img5.jpg'

function Max() {
    const [pic1, setPic1] = useState(false)
    const [pic2, setPic2] = useState(false)
    const [pic3, setPic3] = useState(false)
    const [pic4, setPic4] = useState(false)
    const [pic5, setPic5] = useState(false)
    return (
        <div className={Style.parent}>
            <div className={Style.main}>
                <div  className={` ${Style.comp1}`}>
                    <div 
                        className={Style.img} 
                        style={{backgroundImage:`url(${img1})`}}
                        onClick={()=>setPic1(!pic1)}  >
                        
                    </div>
                                <h3>
                                3D Studio Max dasturi haqida umumiy malumot 
                                </h3>
                       {
                           pic1 &&
                            <div>
                                <p>
                                Autodesk 3ds Max (avval 3D Studio MAX) — Autodesk kompaniyasi tomonidan yaratilib bo'lingan, animatsiya va uch o'lchamli grafika yaratuvchi va tahrir qiluvchi to'liq funksiyali professional dastur. O'z ichiga multimediya sohasidagi mutaxassislar va rassomlar uchun eng zamonaviy vositalarni oladi. Windows operatsion tizimlari oilasi tarkibida ishlaydi (ham 32  bitda, ham 64‑bitda). 2014-yil martda dasturning Autodesk 3ds Max 2015 deb nomlangan 17.0 versiyasi ishlab chiqarildi.                            Autodesk 3ds Max ikki litsenziyali versiyalarda mavjud: talaba — bepul (Autodesk veb-saytida ro'yxatga olinish kerak), dasturning to'liq versiyasini taqdim etadi (biroq undan foyda maqsadida foydalanish mumkin emas) va to'liq (tijorat) versiyasi 2400 yevro evaziga.
                                </p>
                            </div>      
                       }
                </div>
                <div  className={` ${Style.comp1}`}>
                    <div 
                        className={Style.img} 
                        style={{backgroundImage:`url(${img2})`}}
                        onClick={()=>setPic2(!pic2)}  >
                        
                    </div>
                                <h3>
                                3D Studio Max dasturi tarixi 
                                </h3>
                       {
                           pic2 &&
                            <div>
                                <p>
                                To'plamning ilk versiyasi 3D Studio DOS nomi ostida 1990-yilda ishlab chiqarilgan. To'plam ishlab chiqarilishi ustida dasturchi Gari Yost asos solgan Yost Group mustaqil studiyasi shug'ullanardi. Autodesk boshida faqat to'plam ishlab chiqaridh bilan shug'ullanardi. Ma'nbalarda keltirilishicha Gari Yost o'sha davrdagi Autodesk yangi loyihalari bo'yicha direktori Erik Lyons bilan muzaokaralardan so'ng o'z ish joyini tark etgan. Birinchi to'rt reliz 3D Studio DOS nomiga ega edi (1990-1994-yillar). Keyin to'plam Windows NT uchun qayta yozildi va 3D Studio MAX deb qayta nomlandi (1996-1999). Versiya raqamlash qaytadan boshlandi. 2000-2004-yillarda to'plam Discreet 3dsmax markasi ostida ishlab chiqarilgan, 2005-yildan esa  — Autodesk 3ds MAX markasi ostida. Joriy versiyasi Autodesk 3ds MAX 2018 nomiga ega.
                                </p>
                            </div>      
                       }
                </div>
                <div  className={` ${Style.comp1}`}>
                    <div 
                        className={Style.img} 
                        style={{backgroundImage:`url(${img3})`}}
                        onClick={()=>setPic3(!pic3)}  >
                        
                    </div>
                                <h3>
                                3D Studio Max dasturida modellashtirish 
                                </h3>
                       {
                           pic3 &&
                            <div>
                                <p>
                                3ds Max turli ko'rinishdagi va murakkablikdagi kompyuter uch o'lchamli modellarni, atrof-muhitdagi real yoki fantastik obyektlarni yaratish uchun barcha zaruriy vositalariga ega. Ishni bajarishda dastur turli xil usul va uslublarni qo'llaydi, jumladan: 

                                poligonal modellashtirish,  tarkibiga Editable mesh (yuzani tahrirlash) va Editable poly (poligon tahrirlaydi) kiradi. Bu eng keng tarqalgan modellashtirish usuli bo'lib, murakkab modellar va o'yinlar uchun ma'lum modellar yaratish uchun ishlatiladi.
                                Turli jinsli ratsional B-splaynlar (NURBS) asosida modellashtirish (shuni ta'kidlash lozimki, NURBS modellashtirish 3ds Max dasturida shu darajada oddiyki, undan hozirda hech kim foydalanmaydi);
                                Bezye yuzalar (Editable patch) asosida modellashtirish  — aylanuvchi jismlarni modellashtirishga qulay;
                                o'rnatilgan standart kutubxona va modifikatorlarni qo'llash orqali modellashtirish;
                                splaynlar (Spline) asosida NURBSning ibtidoiy muqobili Surface modifikatorini qo'llash orqali modellashtirish;
                                splaynlar asosida Extrude, Lathe, Bevel, Profile modifikatorlarini qo'llash orqali modellashtirish yoki Loft obyektlari splaynlari asosida yaratish. Bu metod binolarni modellashtirishda ishlatiladi.
                                Modellashtirish metodlari o'zaro bog'liq holda ishlatilishi mumkin.


                                </p>
                            </div>      
                       }
                </div>
                <div  className={` ${Style.comp1}`}>
                    <div 
                        className={Style.img} 
                        style={{backgroundImage:`url(${img4})`}}
                        onClick={()=>setPic4(!pic4)}  >
                        
                    </div>
                                <h3>
                                3D Studio Max dasturida Zarrachalar tizimi 
                                </h3>
                       {
                           pic4 &&
                            <div>
                                <p>
                                Particle Systems (zarrachalar tizimi) — bu kichik o'lchamli obyektlarning uyg'unligidir. Zarrachalar tizimining qo'l kelishi mumkin bo'lgan holatlarga yomg'ir, qor, tutun, olov, yulduzli osmon, favvora tomchilari, chaqinlar va boshqa vaziyatlarni modellashtirishni misol qilishimiz mumkin. 8 versiyadan boshlab turli vaziyatlarga qo'l keladigan 7 ta asosiy zarralar manbasi mavjud:
                                </p>
                                <ul>
                                <li>
                                PF Source (Particile Flow manbai) — zarralar oqimi. Bu zarrachalar oqimi favvora otilishidan raketaning tutunli otilishigacha bo'lgan barcha holatlarni o'xshatib tasvirlashi mumkin;
                                </li>
                                <li>
                                Spray (Purkash) — suv purkashi effektining oddiyroq ko'rinishini yaratadi;
                                </li>
                                <li>Super spray (kuchli purkash) — Spray funksiyasiga qaraganda mukamalroq parametrlarga ega;
                                </li>
                                <li>
                                Snow (Qor) — yog'ayotgan qorning oddiy effektini yaratadi. Ko'plab parametrlarga ega ;

                                </li>
                                <li>
                                Blizzard (Dovul) — Snow zarrachalarining mukammalashtirilgan ko'rinishi. Zarrachalarga turli obyektlar shaklini berish mumkin;
                                </li>
                                <li>
                                PArray yoki Particle Array (Qattiq zarrachalar) — istalgan turdagi zarralarni modellashtirishi mumkin, hattoki portlashni ham;
                                </li>
                                <li>
                                PCloud yoki Particle Cloud (zarrachalar buluti) — uch o'lchamli yulduzli maydonlarni, qushlar to'dasini va baliqlar uyurini tasvirlashga qulay.
                                </li>

                                </ul>

                                
                            </div>      
                       }
                </div>
                <div  className={` ${Style.comp1}`}>
                    <div 
                        className={Style.img} 
                        style={{backgroundImage:`url(${img5})`}}
                        onClick={()=>setPic5(!pic5)}  >
                        
                    </div>
                                <h3>
                                3D Studio Max dasturida Zarrachalar tizimi 
                                </h3>
                       {
                           pic5 &&
                            <div>
                                <p>
                                Modellashtirilayotgan narsa ishining so'nggi bosqichi bu vizualizatsiyadir. Bu bosqichdan so'ng obyektning barcha xossalari ko'rina boshlaydi va ish davomida o'rnatilgan atrof-muhit effektlari namoyon bo'ladi. Ungacha esa barchasi juda oddi ko'rinishda ko'rsatiladi (misol uchun, murakkab geometrik shakllar va turli xil effektlar ko'rinmaydi). Yakuniy tasvirni chiqarish uchun vizualizatsiyaning tegishli muduli tanlanadi (VM) va u matematik algoritmlar yordamida tasvirni jonlantiradi. Tasvirning tashqi ko'rinishini hisoblash ishning qiyinligiga qarab soniyadan tortib  bir necha oygacha cho'zilishi mumkin. VMlarning ko'pchiligi dasturga qo'shimcha o'rnatiladigan alohida dasturlar hisoblanadi.
                                </p>

                                <ul>
                                Vizualizatsiya modullari
                                    <li>
                                    Scanline-
                                        3ds Max standart vizualizatori. Ba'zi ilg'or xususiyatlarga ega bo'lgan Global Illumination, Ray Tracing, Radiosity kabi kengaytmalar yillar o'tib Scanlinega. Ko'pchilik funksiyalar unga boshqa vizualizatorlardan o'tgan (mas, RadioRay).
                                    </li>
                                    <li>
                                        mental ray- 
                                            Mental Images kompaniyasi tomonidan yaratilgan va 3ds Maxning so'nggi versiyalariga o'rnatilgan. Bu juda ham kuchli vizualizator hisoblanadi
                                    </li>
                                    <li>
                                        V-Ray- 
                                            Yuqori sifatli fotorealistik vizualizator. Dasturga plagin sifatida qo'shilgan. Chaos Group kompaniyasining mahsuloti, rus segmentida mashxur. Tez-tez mutaxassislar tomonidan boshqa VM o'rniga ishlatiladi. Dasturning eski versiyalari bilan muvofiqlashgan. Unga "kunduzgi yorug'lik tizimi" o'rnatilgan. Yana ko'plab funksiyalarga ega.
                                    </li>
                                    <li>
                                        RenderMan- 
                                            Shu nomdagi vizualizatsiya tizimiga ulanishda qo'l keladi.    
                                    </li>    
                                    <li>

                                        FinalRender
                                            Cebas kompaniyasining tashqi vizualizatori. Kuchli vizualizator hisoblanib, imkoniyatlari bilan faqat mental raydan keyin turadi.
                                    </li>

                                </ul>
                                
                            </div>      
                       }
                </div>
            </div>
        </div>
    )
}

export default Max
