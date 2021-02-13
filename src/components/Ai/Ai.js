import React, {useState} from 'react'
import Style from '../PSD/Psd1.module.css'
import img1 from '../assets/illus/img1.jpg'
import img2 from '../assets/illus/img2.jpg'
import img3 from '../assets/illus/img3.jpg'
import img4 from '../assets/illus/img4.jpg'
import img5 from '../assets/illus/img5.jpg'

function Ai() {
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
                                    Adobe Illustrator dasturi haqida
                                    </h3>
                        {
                            pic1 &&
                                <div>
                                    <p>
                                    Raqamli grafika (bosib chiqarish) ning turli sohalarida ishlaydigan dizaynerlar uchun juda ko'p qulay va samarali dasturlar yaratilgan. Ulardan biri Adobe Illustrator vektorli grafikani o'zgartiruvchi muharriri. Uning yordamida siz har qanday multimedia tarkibini, masalan, bosma materiallar, interfaol dasturlar, Internet-loyihalar, mobil vositalarni ishlab chiqishingiz mumkin. Ushbu Adobe Illustrator dasturi Creative Cloud tizimida joylashganligini unutmang. Shunday qilib, uning foydalanuvchilari barcha yangilanishlarga, shuningdek dasturiy ta'minotning yangi versiyalariga ular chiqarilgandan so'ng darhol kirish huquqiga ega. Doim o'sib boradigan o'quv video to'plamidan foydalanib, siz o'z mahoratingizni oshirishingiz, shuningdek, yangi vositalarni o'rganishingiz mumkin. Behance kabi manba bilan integratsiya barcha foydalanuvchilarga loyihalar bilan almashish, professional dizaynerlar va boshqa mutaxassislardan, muharrirdan ma'lumotli fikrlarni olish imkonini beradi.

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
                                    Adobe Illustrator dasturi afzalliklari
                                    </h3>
                        {
                            pic2 &&
                                <div>
                                    <p>
                                    Dinamik shakllar, shu jumladan to'rtburchaklar - oddiy va yumaloq burchaklar mavjudligi. Shakllarning burchaklarini boshqarish juda oddiy. Masalan, foydalanuvchi fileto radiusini o'zgartirishi mumkin va har bir burchak uchun alohida. Agar siz masshtablashni amalga oshirsangiz yoki to'rtburchakni aylantirsangiz, uning burchaklari (aniqrog'i, ularning xususiyatlari) o'zgarishsiz qoladi va endi ob'ektni tahrirlash natijalarini (uning kengligi, balandligi, burchaklarni yaxlitlash va burilish xususiyatlari) eslab qolish imkoniyatiga ega bo'ladi. Shunday qilib, foydalanuvchi har doim tahrirlanadigan raqamlarning dastlabki xususiyatlarini qaytarishi mumkin.


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
                                    Adobe Illustrator dasturida matnlar bilan ishlash
                                    </h3>
                        {
                            pic3 &&
                                <div>
                                    <p>
                                    Adobe Illustrator ning eng qudratli jihatlaridan biri matn, matn formatlash va shrift ishlatish bilan ishlaydi. Buning ajablanarli joyi yo'q, chunki Adobe kompaniyasi raqamli shriftlarni ishlab chiqishda manba hisoblanadi. Uning shrift formati bilan yaratilgan Adobe Type 1 yuqori sifatli bosimning standart (va belgisi) bo'ldi.

                                    Dasturda shrift bilan barcha umumiy amallarni bajarishingiz mumkin (eshitish vositasini, shriftni, o'lchamini, o'lchamini va kuzatuvini o'zgartirish) va undan ko'p narsalarni (to'g'ridan-to'g'ri tasodifiy konturni qo'yish, vertikal ravishda to'siq bajarish) amalga oshirishingiz mumkin. Cheklanmagan imkoniyatlar shriftning tashqi dizayni bilan dekorativ konturlar, dekorativ plombalar, strech belgilari va boshqalar bilan ifodalanadi.

                                    Ture (Matn) guruhining asboblari hujjatning biron bir joyida gorizontal yoki vertikal matn uchun xizmat qiladi.

                                    Tabiiyki, siz boshqa dasturlarda yozilgan matnni ishlatib, uni turli formatlardan import qilishingiz va o'zgartirishingiz mumkin. Ture (Text) () yoki Vertical Type () asboblari yordamida o'zingiz xohlagan matnni har qanday joyga kiritishingiz mumkin, bu faqat bitta ramka yoki ustun bilan chegaralanmaydi va shuning uchun foydalanuvchi chiziqlar tarjimasiga ahamiyat berish kerak. Bu vositalar nomlar, katta va qisqa matnlarni kiritish, matnni chizish va h.k.ni kiritish uchun ideal vosita bo'lib, shu sababli ushbu turdagi kirish nom va boshlang'ich matn nomi matni bo'lishi mumkin.

                                    Adobe Illustrator dаsturidа kiritilgаn mаtnni hаm turli shаkllаrdа yozish mumkin. Buning uchun оldin mаtn instrumеntlаr pаnеlidаgi TEXT TOOL instrumеnti оrqаli bеlgilаb оlinib, mаtn kiritilаdi vа ARRANGE BREAK APART buyruqlаri bаjаrilаdi.


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
                                    Adobe Illustrator dasturi afzalliklari
                                    </h3>
                        {
                            pic4 &&
                                <div>
                                    <p>
                                    Vektorli grafikalarni tahrirlash uchun rivojlangan vositalar. Loyihalaringiz uchun samarali va yuqori aniqlikdagi vositalardan foydalaning. Siz har qanday media tarkib uchun yuqori sifatli vektorli grafikalarni yaratishingiz mumkin. Boshqa dasturlar bilan integratsiya qilish qobiliyati. Bosma loyihalarni Internet va mobil ilovalar uchun kontentga aylantirish eng yaxshi Adobe mahsulotlarini - Acrobat, InDesign va hokazolarni puxta o'ylangan holda birlashtirish natijasida mumkin bo'ldi. Mercury Performance tizimining mavjudligi. Murakkab tuzilishga ega bo'lgan hajmli fayllarni ham bajara oladigan aniq, yuqori tezlikda va tasdiqlangan vositalardan foydalaning. Yuqori samaradorlik Windows va Mac OS uchun yaxshilangan qo'llab-quvvatlash, operativ xotiraning yaxshilangan ishlashi, shuningdek, butun tizimning ishlashini optimallashtirish orqali ta'minlanadi. O'rnatish uchun bir nechta joylarning mavjudligi. Foydalanuvchi turli o'lchamdagi (ular panjara yoki kaskad) o'rnatish uchun 100 ga yaqin joyni tashkil qilishi va ko'rishi mumkin. Shaffoflik va gradyanlarni keng qo'llash. Endi siz gradientlar bilan to'g'ridan-to'g'ri tahrirlanadigan ob'ektlarda ishlashingiz mumkin - qiymatni belgilash, rangni to'g'rilash, shaffoflik darajasini sozlash. Veb-loyihalar va mobil ilovalarning takomillashtirilgan, aniq rejalari. Aniq, ajoyib konturlari bilan rastrli tasvirlangan loyihalarni yaratish uchun pikselli panjara ustiga o'rnatilgan vektorli ob'ektlarni yarating.



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
                                    Adobe Illustrator dasturi yangi xususiyatlari
                                    </h3>
                        {
                            pic5 &&
                                <div>
                                    <p>
                                    Xususiyatlar paneli Barcha boshqarish vositalariga markazlashtirilgan kirish ishlashni tezlashtiradi. Yangi "Smart Properties" paneli Adobe Illustrator CC  faqat kerakli vaqtda paydo bo'lgan kerakli vositalarni o'z ichiga oladi.   Qo'g'irchoq deformatsiyasi Tabiiy ko'rinishni saqlab, vektorli grafikani o'zgartiring. Qo'g'irchoq urish funktsiyasi Adobe Illustrator CC  har bir yo'l yoki langar nuqtasini alohida sozlamasdan grafik ob'ektlarni tezda yaratishga va o'zgartirishga imkon beradi.   Ko'proq kengashlar Hozirda Adobe Illustrator CC  Bitta tuvalda 1000 tagacha artbordlar yaratishingiz va har bir hujjatda juda ko'p tarkib bilan ishlashingiz mumkin.   Uslublar to'plamlari Oldindan belgilangan qo'shimcha gliflarni butun matn bloklariga qo'llang. Endi har bir glifni alohida-alohida tanlashingiz va o'zgartirishingiz shart emas.   San'at panelining yanada qulay tuzilishi Bir vaqtning o'zida bir nechta bort panelini tanlang, ularni avtomatik ravishda tekislang va ularni bir marta bosish orqali tuvallarga joylashtiring. Artboardga o'rnatilgan ob'ektlar endi u bilan birga harakatlanmoqda.   SVG rangli shriftlar Bir nechta ranglar, gradyanlar va shaffoflik darajasi bo'lgan loyihalarda shriftlardan foydalaning. Bularning barchasi SVG OpenType shriftlari tufayli mumkin.




                                    </p>
                                </div>      
                        }
                </div>
            </div>
        </div>
    )
}

export default Ai
