import React, {useState} from 'react'
import Style from '../PSD/Psd1.module.css'
import img1 from '../assets/corel/img1.png'
import img2 from '../assets/corel/img2.jpg'
import img3 from '../assets/corel/img3.jpg'
import img4 from '../assets/corel/img4.jpg'
import img5 from '../assets/corel/img5.jpg'

function Corel() {
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
                                    Corel Draw dasturi haqida umumiy malumot 
                                    </h3>
                        {
                            pic1 &&
                                <div>
                                    <p>
                                    Kodlashtirishning vektorli usulida geometrik shakllar, egri va to’g’ri chiziqlar, aylana, kvadrat, ellips, qism tasvirlar kompyuter xotirasida matema­tik formula kabi geometrik abstraktciyalar ko’rinishda saqlanadi. Masalan, aylana shaklini kodlashtirish uchun, u alohida piksellar ko’rinishida bo’lishi shart emas. Uning radiusi, markaziy nuqta koordinatalari va rangining xotirada saqlanishi etarli bo’ladi. To’rtburchak uchun esa uning tomonlari uzunligi, joylashuv o’rni va rangini xotirada saqlash lozim. Matematik  formulalar yordamida turli xildagi shakllarni izohlash mumkin. Murakkab shakllarni chizishda bir nechta oddiy shakllardan foydalaniladi. Masalan, burchaklari yoysimon bo’lgan to’rtburchak shaklni qora rangda bo’yaymiz, unga uchta oqdagi to’rtburchak va birta qora rangdagi to’rtburchak shaklni qo’shib  uch dyumli disketa rasmini hosil qilish mumkin (1-rasm).
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
                                    Corel Draw dasturi haqida umumiy malumot 
                                    </h3>
                        {
                            pic2 &&
                                <div>
                                    <p>
                                    Vektor formatdagi barcha ko’rinishlar bir necha qismlardan iborat bo’lib, ularni bir-biriga bog’liqsiz holda o’zgartirish mumkin. Ushbu qismlar ob`ekt deb nomlanib, bir necha ob`ektlar yordamida yangi ob`ekt yaratiladi. Buning natijasida ob`ektlar yanada murakkab ko’rinishga ega bo’lish holati kuzatiladi. Har bir ob`ektda ularning kattaligi, egriligi va joylashuv o’rnining qiymatla­ri orqali beriladi. Shu sababli, tasvir ko’rinishlarini oddiy matema­tik amallar yordamida o’zgartirish imkoniyati yaratiladi. Vektorli grafikani qo’llaganda, ob`ekt hajmining juda ham kichik yoki aksincha, juda ham katta kenglikda bo’lishi inobatga olinmaydi. Ikki holda ham rasm bilan ishlash bir xil kechadi. Xohlagan paytda tasvir sifatini o’zgartirmay turib, uni kattalashtirish yoki kichraytirish imkoniyati mavjud. Vektorli usulda kodlashtirishning muhim ahamiyati grafik faylning hajmi rastrli grafiklar fayllari hajmiga nisbatan sezilarli darajada kichikligidir. Biroq, vektorli grafikaning kam­chi­lik tomonlari ham mavjud. Birinchidan, hosil qilinayotgan tasvirning shartliligi, ya`ni tasvirlar formulalar yordamida qurilgann egri chiziqlardan iborat bo’lganligi sababli, haqiqiy tasvirni hosil qilish juda mushkuldir. Shuning uchun vektorli grafikani tasvirlarni kodlashtirishda qo’llab bo’lmaydi. Agar tasvirni izohlash lozim bo’lsa, olingan fayl hajmi rastrli grafika fayli hajmiga nisbatan ancha katta bo’ladi. Vektorli grafika fayllarini qurishga bag’ishlangan dasturiy vosita sifatida juda keng tarqalgan CorelDRAW dasturini keltiramiz.
                                    CorelDRAW 10 dasturining ishchi oynasi boshqa grafik muharrirlar oynasiga o’xshashdir. CorelDRAW 10 dasturi ishga tushirilganda ekranda dasturning boshlang’ich muloqot oynasi hosil bo’ladi. Bu rejimni oldindan bekor qilish ham mumkin. Buning uchun Show this Welcome Screen at startup (Ishga tushganda oynani ko’rsatish) satridan bayroqchani olib tashlash orqali amalga oshiriladi.

                                    Dastlab dastur ishini sozlab chiqish amalarini ko’rib o’tamiz. Agar ishchi oyna to’liq ekranni egallamagan bo’lsa, dastur sarlavhasida yoyish tugmasini bosing. Natijada ishchi oyna to’liq ekranda hosil bo’lib CorelDRAW 10 dasturi bilan ishlash yanada qulaylashadi.

                                    xYaratilayotgan tasvir aniq ko’rinishi, boshqariluvchi elementlar ekranda joylanishi uchun ekranning ruxsat etilgan kattaligini 1024x768 nuqtalarda, eng yaxshisi 1280x1024 ni qo’llanilishi tavsiya etiladi.
                                    </p>
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
                                    Corel Draw dasturi asboblar paneli
                                    </h3>
                        {
                            pic3 &&
                                <div>
                                    <p>
                                    Ishchi oynaning chap tarafida asboblar paneli joylashadi. Bu panelda barcha instrumentlar joylashgan bo’lib, ular yordamida turli grafik ob’ektlarni yaratish ajratish, taxrirlash mumkin. Asboblar bilan ishlayotgan paytda belgilangan ob’ektga bog’lik xolda kursorning ko’rinishi uzgaradi. Bundan tashkari asboblar panelida ba’zi asboblarni ajratib olish mumkin, bunda bu gruppalar «suzuvchi» panellar yoki Fluoyut kurinishdagi panellar shaklida bo’uladi.
                                    Docker tipidagi panellar muloqot oynalarining bir ko’rinishidir. Bu panellar ekranda doimiy joylashgan bulishi mumkin bulib, xujjatlarning ishchi oynalari bilan muloqotda bo’lishi mumkin. Oyna (Window) menyusida Docker tipidagi komanda bajariladi va ochilgan ruyxatdan keraklisi tanlanadi.
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
                                    Corel Draw dasturida obyektlar bilan ishlash
                                    </h3>
                        {
                            pic4 &&
                                <div>
                                    <p>
                                    COREL DRAW dasturi vektorli tasvirlarni yaratishda turli vositalarni qo’llaydi- ingichka chiziqlar,patsimon shtrixlar.Sho’nga karamay vektorli grafikaning ish usuli,"ko’lda" chizishdan ancha farq qiladi.Shuning uchun vektorli konturni yaratishni va taxrirlashni tasavvur qila olish kerak. Shu maqsadda COREL DRAW dasturi geometrik figuralarni yaratish (tugri turtburchak, kupburchak, ellips, spiral) uchun muljalgan asboblarga ega,bundan tashqari "erkin chizish" asboblari (pero, kalligrafik, pero). Gradientli setka (Mesh Fill), vektorli grafikaning asosiy instrumenta bo’lgan Bez’e — egri chiziqlari, Bez’e asbobi (Vezier). Vektorli konturlarni tuliq taxrirlash qanday asboblar orqali yaratilganligadan qattiy nazar bir xil usulda bajariladi: Forma (Share) asbobi yordamida, redaktor maxsus paneli (Node Edit) tarmog’i orqali yoki uni almashtiruvchi xossalar asboblar qatori (Rgoregtu Var).
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
                                    Corel Draw dasturida obyektlar bilan ishlash
                                    </h3>
                        {
                            pic5 &&
                                <div>
                                    <p>
                                    COREL DRAW dasturi vektorli tasvirlarni yaratishda turli vositalarni qo’llaydi- ingichka chiziqlar,patsimon shtrixlar.Sho’nga karamay vektorli grafikaning ish usuli,"ko’lda" chizishdan ancha farq qiladi.Shuning uchun vektorli konturni yaratishni va taxrirlashni tasavvur qila olish kerak. Shu maqsadda COREL DRAW dasturi geometrik figuralarni yaratish (tugri turtburchak, kupburchak, ellips, spiral) uchun muljalgan asboblarga ega,bundan tashqari "erkin chizish" asboblari (pero, kalligrafik, pero). Gradientli setka (Mesh Fill), vektorli grafikaning asosiy instrumenta bo’lgan Bez’e — egri chiziqlari, Bez’e asbobi (Vezier). Vektorli konturlarni tuliq taxrirlash qanday asboblar orqali yaratilganligadan qattiy nazar bir xil usulda bajariladi: Forma (Share) asbobi yordamida, redaktor maxsus paneli (Node Edit) tarmog’i orqali yoki uni almashtiruvchi xossalar asboblar qatori (Rgoregtu Var).
                                    </p>
                                </div>      
                        }
                </div>
            </div>
        </div>
    )
}

export default Corel
