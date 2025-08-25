import { useMemo, useState } from "react"
import { motion } from "framer-motion"

export default function App(){
  const phoneLocal = "0581211861"
  const phoneIntl = "+966581211861"

  const services = useMemo(()=>[
    {title:"تصنيع هنجر مخصص", text:"تصميم وتنفيذ حسب المساحة والاستخدام مع اختيار سماكة الحديد المناسب", img:"/sora-service-hangar.jpg"},
    {title:"مستودعات جاهزة", text:"حلول عملية للتخزين مع عوازل للحرارة والرطوبة وفتحات تهوية", img:"/sora-service-warehouse.jpg"},
    {title:"مظلات وسواتر", text:"مواقف, حدائق, مدارس, منازل مع مواد عالية الجودة", img:"/sora-service-shade.jpg"},
    {title:"بوابات وشبوك", text:"بوابات اوتوماتيكية, شبوك, درابزين, دهانات حرارية", img:"/sora-service-gate.jpg"},
  ],[])

  const gallery = useMemo(()=>[
    {img:"/sora-gallery-workshop.jpg", alt:"هنجر ورشة"},
    {img:"/sora-gallery-warehouse.jpg", alt:"مستودع"},
    {img:"/sora-gallery-parking-shades.jpg", alt:"مظلات مواقف"},
    {img:"/sora-gallery-gate.jpg", alt:"بوابة حديد"},
  ],[])

  return (
    <div dir="rtl" className="min-h-screen bg-gradient-to-b from-[#0b1220] to-[#0d1324] text-slate-100 font-cairo">
      <Header phoneLocal={phoneLocal} phoneIntl={phoneIntl} />
      <main className="w-[min(1200px,92vw)] mx-auto">
        <Hero phoneLocal={phoneLocal} phoneIntl={phoneIntl} />
        <Benefits />
        <Services services={services} />
        <Process />
        <Promo />
        <Gallery items={gallery} />
        <Pricing />
        <Lead phoneIntl={phoneIntl} phoneLocal={phoneLocal} />
        <FAQ />
      </main>
      <StickyBar phoneLocal={phoneLocal} phoneIntl={phoneIntl} />
      <Footer />
      <Schema phoneLocal={phoneLocal} />
    </div>
  )
}

function Header({phoneLocal, phoneIntl}){
  return (
    <header className="sticky top-0 z-50 bg-[#0b1220cc] backdrop-blur border-b border-white/10">
      <div className="w-[min(1200px,92vw)] mx-auto py-3 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-11 h-11 rounded-xl bg-[conic-gradient(from_180deg,#0ea5b7,#22c55e,#3b82f6)] grid place-items-center font-extrabold">إ</div>
          <div>
            <h1 className="text-base font-bold">مؤسسة إبداع المستثمر للمقاولات العامة</h1>
            <p className="text-xs text-slate-400">خدمة جدة, مكة, الطائف, بحرة, هدى الشام</p>
          </div>
        </div>
        <div className="flex gap-2">
          <a href={"tel:+966" + phoneLocal.replace(/[^0-9]/g,"")} className="px-4 py-2 rounded-xl border border-white/20">اتصل الآن {phoneLocal}</a>
          <a href={"https://wa.me/" + phoneIntl + "?text=" + encodeURIComponent("أرغب بعرض سعر لهنجر او حدادة")} target="_blank" rel="noreferrer" className="px-4 py-2 rounded-xl bg-gradient-to-r from-amber-400 to-emerald-400 text-[#0b1220] font-extrabold shadow">عرض سعر سريع</a>
        </div>
      </div>
    </header>
  )
}

function Hero({phoneLocal, phoneIntl}){
  return (
    <section className="py-8">
      <div className="grid md:grid-cols-[1.2fr_.8fr] gap-6 items-center">
        <div>
          <motion.div initial={{opacity:0,y:10}} animate={{opacity:1,y:0}} className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/15 text-slate-400 text-sm">
            <span>بحثك, مقاول هناجر جدة, وصل للمكان الصحيح</span>
          </motion.div>
          <motion.h2 initial={{opacity:0,y:10}} animate={{opacity:1,y:0}} transition={{delay:.05}} className="text-4xl md:text-5xl font-extrabold mt-3">
            مقاول هناجر <span className="text-teal-300">جدة</span> وخدمة <span className="text-teal-300">مكة, الطائف</span>, ضمان حتى عشر سنوات
          </motion.h2>
          <motion.p initial={{opacity:0,y:10}} animate={{opacity:1,y:0}} transition={{delay:.1}} className="text-slate-400 mt-2">
            تصنيع وتركيب هناجر ومستودعات ومظلات وسواتر وبوابات حديد, زيارة ميدانية مجانية, مخطط هندسي سريع, تسليم على الموعد
          </motion.p>
          <motion.div initial={{opacity:0,y:10}} animate={{opacity:1,y:0}} transition={{delay:.15}} className="flex flex-wrap gap-2 mt-3">
            <span className="px-3 py-2 rounded-xl border border-emerald-400/30 bg-emerald-400/10 text-emerald-200 font-bold">أكثر من 500 عميل</span>
            <span className="px-3 py-2 rounded-xl border border-emerald-400/30 bg-emerald-400/10 text-emerald-200 font-bold">خبرة 12 سنة</span>
            <span className="px-3 py-2 rounded-xl border border-emerald-400/30 bg-emerald-400/10 text-emerald-200 font-bold">توريد مع التركيب</span>
          </motion.div>
          <motion.div initial={{opacity:0,y:10}} animate={{opacity:1,y:0}} transition={{delay:.2}} className="flex gap-2 mt-4">
            <a className="px-5 py-3 rounded-xl bg-gradient-to-r from-amber-400 to-emerald-400 text-[#0b1220] font-extrabold shadow" href="#lead">سعر فوري</a>
            <a className="px-5 py-3 rounded-xl border border-white/20" href={"https://wa.me/" + phoneIntl + "?text=" + encodeURIComponent("أحتاج عرض سعر لهنجر او مظلات")} target="_blank" rel="noreferrer">تواصل واتساب</a>
          </motion.div>
          <ul className="grid grid-cols-2 md:grid-cols-3 gap-3 mt-4">
            {['هناجر ومستودعات','مظلات وسواتر','بوابات وحديد ليزر','شبوك وزراعة','برجولات وحدائق','صيانة ولحام'].map((t,i)=> (
              <motion.li key={t} initial={{opacity:0, y:10}} whileInView={{opacity:1,y:0}} viewport={{once:true}} transition={{delay:i*0.05}} className="p-3 rounded-xl bg-white/5 border border-white/10 text-sm">
                {t}
              </motion.li>
            ))}
          </ul>
        </div>
        <motion.div initial={{scale:.95, opacity:0}} animate={{scale:1, opacity:1}} className="relative rounded-2xl overflow-hidden border border-white/10 shadow-xl">
          <img src="/sora-hero.jpg" alt="تركيب هنجر صناعي في جدة" className="w-full h-full object-cover"/>
          <div className="absolute bottom-3 right-3 bg-slate-900/80 border border-white/10 px-3 py-2 rounded-xl text-sm"></div>
        </motion.div>
      </div>
    </section>
  )
}

function Benefits(){
  const items = [
    "متوفر جميع اشغال حداده، زيارة ومعاينة مجانية ",
    "عقد رسمي مع جدول زمني واضح",
    "ضمان على الهيكل حتى عشر سنوات",
    "فريق هندسي يرسم المخطط خلال 24 ساعة",
  ]
  return (
    <section className="py-6">
      <h3 className="text-2xl font-bold mb-3">مميزات الخدمة</h3>
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-3">
        {items.map((t,i)=> (
          <motion.div key={t} initial={{opacity:0,y:10}} whileInView={{opacity:1,y:0}} viewport={{once:true}} transition={{delay:i*0.06}} className="p-4 rounded-xl bg-indigo-500/10 border border-indigo-400/30">
            {t}
          </motion.div>
        ))}
      </div>
    </section>
  )
}

function Services({services}){
  return (
    <section className="py-8">
      <h3 className="text-2xl font-bold mb-4">خدماتنا</h3>
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
        {services.map((s,i)=> (
          <motion.article key={s.title} initial={{opacity:0,y:12}} whileInView={{opacity:1,y:0}} viewport={{once:true}} transition={{delay:i*0.07}} className="rounded-2xl overflow-hidden border border-white/10 bg-slate-900">
            <img src={s.img} alt={s.title} className="w-full h-40 object-cover"/>
            <div className="p-4">
              <h4 className="font-bold">{s.title}</h4>
              <p className="text-slate-400 text-sm mt-1">{s.text}</p>
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  )
}

function Process(){
  const steps = [
    "تواصل وطلب زيارة",
    "معاينة موقع المشروع",
    "مخطط وتسعير تفصيلي",
    "تصنيع وتركيب بإشراف هندسي",
    "تسليم وضمان مكتوب",
  ]
  return (
    <section className="py-6">
      <h3 className="text-2xl font-bold mb-3">طريقة العمل</h3>
      <div className="grid sm:grid-cols-3 lg:grid-cols-5 gap-3">
        {steps.map((t,i)=>(
          <motion.div key={t} initial={{opacity:0, y:10}} whileInView={{opacity:1,y:0}} viewport={{once:true}} transition={{delay:i*0.05}} className="p-4 text-center rounded-xl border border-white/10 bg-slate-900">
            <div className="text-3xl font-extrabold text-emerald-300 mb-2">{i+1}</div>
            <div>{t}</div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}

function Promo(){
  return (
    <section className="py-6">
      <motion.div initial={{opacity:0,scale:.98}} whileInView={{opacity:1,scale:1}} viewport={{once:true}} className="rounded-2xl border border-amber-300/30 bg-amber-300/10 p-6 flex flex-col md:flex-row items-center justify-between gap-3">
        <div className="text-lg">عرض افتتاحي, خصم 20% على مظلات وحديد الليزر عند الحجز هذا الأسبوع</div>
        <a href="#lead" className="px-5 py-3 rounded-xl bg-gradient-to-r from-amber-400 to-emerald-400 text-[#0b1220] font-extrabold">احصل على الخصم</a>
      </motion.div>
    </section>
  )
}

function Gallery({items}){
  return (
    <section className="py-8">
      <h3 className="text-2xl font-bold mb-3">نماذج من أعمالنا</h3>
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-3">
        {items.map((g,i)=> (
          <motion.figure key={g.img} initial={{opacity:0,y:10}} whileInView={{opacity:1,y:0}} viewport={{once:true}} transition={{delay:i*0.05}} className="rounded-xl overflow-hidden border border-white/10">
            <img src={g.img} alt={g.alt} className="w-full h-44 object-cover"/>
            <figcaption className="p-2 text-xs text-slate-400">{g.alt}</figcaption>
          </motion.figure>
        ))}
      </div>
    </section>
  )
}

function Pricing(){
  const rows = [
    {title:"هنجر اقتصادي", price:"ابتداء من 50 ريال للمتر", desc:"حديد مجلفن, سماكات مناسبة للمستودعات الخفيفة, عوازل اختيارية"},
    {title:"هنجر تجاري", price:"ابتداء من 50 ريال للمتر", desc:"مقومات أعلى, أرضية خرسانية, فتحات تهوية, خدمة سريعة"},
    {title:"هنجر صناعي", price:"سعر مخصص", desc:"تصميم حسب الحمل والمساحة مع أبواب رصيف وممرات شاحنات"},
  ]
  return (
    <section className="py-8">
      <h3 className="text-2xl font-bold mb-3">باقات تقديرية</h3>
      <div className="grid lg:grid-cols-3 gap-4">
        {rows.map((p,i)=> (
          <motion.div key={p.title} initial={{opacity:0,y:10}} whileInView={{opacity:1,y:0}} viewport={{once:true}} transition={{delay:i*0.05}} className="rounded-2xl p-5 border border-white/10 bg-slate-900">
            <h4 className="text-lg font-bold">{p.title}</h4>
            <div className="text-2xl text-emerald-300 font-extrabold mt-1">{p.price}</div>
            <p className="text-slate-400 text-sm mt-2">{p.desc}</p>
          </motion.div>
        ))}
      </div>
      <p className="text-xs text-slate-500 mt-2">الأسعار تقديرية, التسعير النهائي بعد المعاينة والمخطط</p>
    </section>
  )
}

function Lead({phoneIntl, phoneLocal}){
  const [data, setData] = useState({name:"", phone:"", city:"", type:"", area:"", when:"عاجل", msg:""})
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitMessage, setSubmitMessage] = useState("")
  
  const waUrl = useMemo(()=>{
    const msg = `طلب عرض سعر\nالاسم: ${data.name}\nالجوال: ${data.phone}\nالمدينة: ${data.city}\nالنوع: ${data.type}\nالمساحة: ${data.area || '-'} م²\nموعد التنفيذ: ${data.when}\nملاحظات: ${data.msg || '-'}\n`
    return "https://wa.me/" + phoneIntl + "?text=" + encodeURIComponent(msg)
  },[data, phoneIntl])

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitMessage("")

    try {
      const response = await fetch('/api/submit-form', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data)
      })

      const result = await response.json()

      if (result.success) {
        setSubmitMessage("✅ تم حفظ طلبك بنجاح! سيتم التواصل معك قريباً")
        // Reset form after successful submission
        setData({name:"", phone:"", city:"", type:"", area:"", when:"عاجل", msg:""})
        // Also open WhatsApp
        window.open(waUrl, '_blank')
      } else {
        setSubmitMessage("❌ " + result.message)
      }
    } catch (error) {
      console.error('Error submitting form:', error)
      setSubmitMessage("❌ حدث خطأ في الإرسال. يرجى المحاولة مرة أخرى")
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section id="lead" className="py-10">
      <h3 className="text-2xl font-bold mb-3">اطلب عرض سعر الآن</h3>
      <div className="grid lg:grid-cols-3 gap-4">
        <motion.form initial={{opacity:0,y:12}} whileInView={{opacity:1,y:0}} viewport={{once:true}} onSubmit={handleSubmit} className="grid gap-3 p-4 rounded-2xl border border-white/10 bg-slate-900">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <Field label="الاسم"><input className="input" value={data.name} onChange={e=>setData({...data,name:e.target.value})} placeholder="الاسم الثلاثي" required/></Field>
            <Field label="الجوال"><input className="input" value={data.phone} onChange={e=>setData({...data,phone:e.target.value})} placeholder="05XXXXXXXX" required/></Field>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <Field label="المدينة"><input className="input" value={data.city} onChange={e=>setData({...data,city:e.target.value})} placeholder="اكتب اسم المدينة" required/></Field>
            <Field label="نوع المشروع"><input className="input" value={data.type} onChange={e=>setData({...data,type:e.target.value})} placeholder="اكتب نوع المشروع" required/></Field>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <Field label="المساحة التقريبية م²"><input className="input" value={data.area} onChange={e=>setData({...data,area:e.target.value})} placeholder="مثال 600"/></Field>
            <Field label="موعد التنفيذ"><select className="input" value={data.when} onChange={e=>setData({...data,when:e.target.value})}><option>عاجل</option><option>خلال شهر</option><option>خلال ثلاثة أشهر</option></select></Field>
          </div>
          <Field label="ملاحظات"><textarea className="input h-28" value={data.msg} onChange={e=>setData({...data,msg:e.target.value})} placeholder="اكتب تفاصيل إضافية, نوع الاستخدام, مواصفات خاصة"/></Field>
          {submitMessage && (
            <div className="p-3 rounded-xl bg-slate-800 border border-white/10 text-sm">
              {submitMessage}
            </div>
          )}
          <div className="flex gap-2">
            <button 
              type="submit" 
              disabled={isSubmitting}
              className="px-5 py-3 rounded-xl bg-gradient-to-r from-amber-400 to-emerald-400 text-[#0b1220] font-extrabold disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isSubmitting ? "جاري الإرسال..." : "إرسال الطلب"}
            </button>
            <a className="px-5 py-3 rounded-xl border border-white/20" href={waUrl} target="_blank" rel="noreferrer">طلب سريع عبر واتساب</a>
          </div>
          <p className="text-xs text-slate-500">عند الإرسال سيتم حفظ البيانات وفتح واتساب مع ملخص البيانات</p>
        </motion.form>
        <motion.div initial={{opacity:0,y:12}} whileInView={{opacity:1,y:0}} viewport={{once:true}} className="p-4 rounded-2xl border border-white/10 bg-slate-900">
          <h4 className="font-bold mb-2">لماذا تختار مؤسسة إبداع المستثمر</h4>
          <ul className="list-disc pr-5 text-slate-300 text-sm space-y-1">
            <li>ورشة حديد خاصة في بحرة, جودة تصنيع وسرعة في التوريد</li>
            <li>كوادر فنية بخبرة عالية, إشراف هندسي كامل</li>
            <li>التزام بالعقد والجدول الزمني</li>
            <li>خيارات عزل وتهوية تناسب الطقس الحار</li>
            <li>خدمة ما بعد البيع مع صيانة دورية</li>
          </ul>
          <div className="flex flex-wrap gap-2 mt-3 text-xs">
            <span className="px-3 py-1 rounded-full border border-white/15">فاتورة إلكترونية</span>
            <span className="px-3 py-1 rounded-full border border-white/15">دفع آمن</span>
            <span className="px-3 py-1 rounded-full border border-white/15">زيارات خارج الدوام</span>
          </div>
        </motion.div>
        <motion.div initial={{opacity:0,y:12}} whileInView={{opacity:1,y:0}} viewport={{once:true}} className="p-4 rounded-2xl border border-white/10 bg-slate-900">
          <h4 className="font-bold mb-2">الموقع والتواصل</h4>
          <p className="text-sm text-slate-300">الورشة في بحرة, خدمة جدة, مكة, الطائف والمناطق القريبة</p>
          <p className="mt-2"><strong>الجوال</strong> {phoneLocal}</p>
          <p><strong>واتساب</strong> {phoneIntl}</p>
          <iframe className="w-full h-64 rounded-xl border border-white/10 mt-2" loading="lazy" src="https://www.google.com/maps?q=بحرة%20جدة&output=embed" title="map"/>
        </motion.div>
      </div>
    </section>
  )
}

function Field({label, children}){
  return (
    <label className="grid gap-1 text-sm text-slate-400 [&_.input]:w-full [&_.input]:px-3 [&_.input]:py-3 [&_.input]:rounded-xl [&_.input]:border [&_.input]:border-white/20 [&_.input]:bg-white/5 [&_.input]:text-slate-100">
      <span>{label}</span>
      {children}
    </label>
  )
}

function FAQ(){
  const faqs = [
    {q:"كم مدة التنفيذ المعتادة", a:"المشاريع المتوسطة من سبعة الى خمسة عشر يوما حسب المساحة والمواصفات"},
    {q:"هل يوجد ضمان", a:"ضمان على هيكل الحديد حتى عشر سنوات "},
    {q:"هل الزيارة مجانية", a:"نعم داخل جدة, مكة, الطائف, خارجها يتم الاتفاق حسب المسافة"},
  ]
  return (
    <section className="py-8">
      <h3 className="text-2xl font-bold mb-3">أسئلة شائعة</h3>
      <div className="grid md:grid-cols-3 gap-3">
        {faqs.map((f,i)=> (
          <motion.div key={f.q} initial={{opacity:0,y:10}} whileInView={{opacity:1,y:0}} viewport={{once:true}} transition={{delay:i*0.05}} className="p-4 rounded-xl border border-white/10 bg-slate-900">
            <h4 className="font-bold mb-1">{f.q}</h4>
            <p className="text-sm text-slate-400">{f.a}</p>
          </motion.div>
        ))}
      </div>
    </section>
  )
}

function StickyBar({phoneLocal, phoneIntl}){
  return (
    <div className="fixed inset-x-3 bottom-3 z-50 flex gap-2">
      <a href={"tel:+966" + phoneLocal.replace(/[^0-9]/g,"")} className="flex-1 text-center px-4 py-3 rounded-xl bg-emerald-400 text-[#06361c] font-extrabold">اتصال فوري</a>
      <a href={"https://wa.me/" + phoneIntl + "?text=" + encodeURIComponent("السلام عليكم, أحتاج عرض سعر لهنجر")} target="_blank" rel="noreferrer" className="flex-1 text-center px-4 py-3 rounded-xl bg-[#25d366] text-[#03210e] font-extrabold">واتساب</a>
    </div>
  )
}

function Footer(){
  return (
    <footer className="mt-8 border-t border-white/10 bg-[#0a0f1a]">
      <div className="w-[min(1200px,92vw)] mx-auto py-6 text-slate-400 text-sm">
        © مؤسسة إبداع المستثمر للمقاولات العامة, جميع الحقوق محفوظة, جدة, مكة, الطائف
      </div>
    </footer>
  )
}

function Schema({phoneLocal}){
  const json = {
    "@context":"https://schema.org",
    "@type":"Contractor",
    name:"مؤسسة إبداع المستثمر للمقاولات العامة",
    areaServed:["جدة","مكة","الطائف","بحرة","هدى الشام"],
    telephone:"+966" + phoneLocal.replace(/[^0-9]/g,""),
    image:"/sora-hero.jpg",
    address:{"@type":"PostalAddress", addressLocality:"بحرة", addressRegion:"مكة المكرمة", addressCountry:"SA"},
    url:typeof window!=="undefined"?window.location.href:"https://example.com",
    description:"مقاول هناجر جدة ومكة والطائف, تصنيع وتركيب هناجر ومستودعات ومظلات وسواتر وبوابات حديد, زيارة مجانية وضمان حتى عشر سنوات"
  }
  return (<script type="application/ld+json" dangerouslySetInnerHTML={{__html: JSON.stringify(json)}} />)
}
